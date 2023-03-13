<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	let name = '';
	let ready = false;

	let player_channel;
	// let game_channel;

	let user_error = '';

	let player_list = [];

	const getPlayers = async () => {
		const res = await supabaseClient.from('player').select().eq('game_code', data.slug);

		if (res.error) {
			user_error = res.error.message;
		} else if (res.data) {
			console.log(res.data);
			player_list = res.data;
		}
	};

	const playerReady = async () => {
		if (name === '') {
			alert('Please enter a name');
			return;
		}

		ready = true;
		if (name) {
			const res = await supabaseClient
				.from('player')
				.insert({ game_code: data.slug, name: name })
				.select();
			if (res.error) {
				user_error = res.error.message;
			} else {
				//put id into local storage
				const game_details = { player_id: res.data[0].id, game_code: data.slug };
				localStorage.setItem('game-jam', JSON.stringify(game_details));
				//wait for game start (subscribe to game state?)
				//subscribeToGameReady();
				//subscribe to game board
			}
		}
	};

	// const subscribeToGameReady = () => {
	// 	const game_channel = supabaseClient
	// 		.channel('schema-db-changes')
	// 		.on(
	// 			'postgres_changes',
	// 			{
	// 				event: 'UPDATE',
	// 				schema: 'public',
	// 				table: 'game',
	// 				filter: `code=eq.${data.slug}`
	// 			},
	// 			(payload) => {
	// 				if (payload.new.started) {
	// 					//redirect to game page
	// 				}
	// 			}
	// 		)
	// 		.subscribe();
	// };

	const subscribeToNewPlayers = () => {
		console.log('subscribing to new players');
		player_channel = supabaseClient
			.channel('schema-db-changes')
			.on(
				'postgres_changes',
				{
					event: 'INSERT',
					schema: 'public',
					table: 'player',
					filter: `game_code=eq.${data.slug}`
				},
				(payload) => {
					console.log('live reload of players');
					player_list = [...player_list, payload.new];
				}
			)
			.subscribe();
	};

	const checkIfPlayerReady = () => {
		const local_data = localStorage.getItem('game-jam');
		console.log(local_data);
		if (!local_data) {
			return;
		}
		const { player_id, game_code } = JSON.parse(local_data);

		if (game_code != data.slug) {
			console.log('cleared local data');
			localStorage.removeItem('game-jam');
		}
		const matched_player = player_list.find((p) => p.id == player_id);

		//player has been stored locally, recover and lock UI
		if (matched_player && data.slug === game_code) {
			console.log('player from local storage');
			ready = true;
			name = matched_player.name;
		}
	};

	onMount(async () => {
		console.log('doing a mount');
		await getPlayers();
		subscribeToNewPlayers();
		checkIfPlayerReady();
	});

	onDestroy(() => {
		if (player_channel) {
			supabaseClient.removeChannel(player_channel);
		}
	});
</script>

{user_error}
<h1>Game Lobby</h1>
<h2>Game Code: {data.slug}</h2>

<div class="grid">
	<input placeholder="name" bind:value={name} disabled={ready} />
	<button on:click={playerReady} disabled={ready}>Ready</button>
</div>

<h2>Players</h2>
<ul>
	{#each player_list as { id, name }}
		<li>{name}</li>
	{/each}
</ul>

{#if ready}
	<button>Start Game</button>
{/if}
