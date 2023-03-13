<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let user_error = '';
	let game_code = '';

	const generateGameCode = () => {
		const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return Array(4)
			.join()
			.split(',')
			.map(function () {
				return s.charAt(Math.floor(Math.random() * s.length));
			})
			.join('');
	};

	const createNewGame = async () => {
		//Generate game code
		const game_code = generateGameCode();

		const { error } = await supabaseClient.from('game').insert({ code: game_code });

		console.log(error);

		if (error) {
			user_error = error.message;
		} else {
			window.location.href = '/lobby/' + game_code;
		}

		//handle redirect to lobby
	};
</script>

<h1>Game Jam!</h1>
{user_error}
<button on:click={createNewGame}>Start New Game</button>
<div class="grid">
	<input placeholder="game code" bind:value={game_code} />
	<a href={'lobby/' + game_code}>
		<button>Join Game</button>
	</a>
</div>
