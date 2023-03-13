<script lang="ts">
	import {
		DirectionalLight,
		Object3DInstance,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core';
	import { Debug } from '@threlte/rapier';
	import { GridHelper } from 'three';
	import Tree from './Tree.svelte';
	import { DEG2RAD } from 'three/src/math/MathUtils';
</script>

<PerspectiveCamera position={{ y: 10, x: 15 }} fov={40}>
	<OrbitControls
		target={{ x: 0 }}
		maxPolarAngle={80 * DEG2RAD}
		minPolarAngle={60 * DEG2RAD}
		maxAzimuthAngle={60 * DEG2RAD}
		minAzimuthAngle={35 * DEG2RAD}
	/>
</PerspectiveCamera>

<DirectionalLight shadow position={{ y: 20, x: 8, z: -3 }} />

<Object3DInstance object={new GridHelper(50)} />

<Tree />
