<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { World } from '@threlte/rapier';
	import Scene from './Scene.svelte';

	let testIndex = 0;
</script>

<div class="canvas-container">
	<Canvas>
		<World>
			<Scene />

			<HTML slot="fallback" transform>
				<p class="text-xs">
					It seems your browser<br />
					doesn't support WASM.<br />
					I'm sorry.
				</p>
			</HTML>
		</World>
	</Canvas>
</div>

<style>
	.canvas-container {
		width: 100vw;
		height: 100vh;
	}
</style>
