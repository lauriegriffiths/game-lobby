<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div class="canvas-container">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	.canvas-container {
		width: 100vw;
		height: 100vh;
	}
</style>
