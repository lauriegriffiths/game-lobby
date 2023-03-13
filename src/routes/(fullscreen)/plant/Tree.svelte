<script lang="ts" context="module">
	//const geometry = new SphereGeometry(1);

	const geometry = new CylinderGeometry(0.5, 0.5, 1, 32);
	const material = new MeshStandardMaterial();
	const green = new Color(0x02db60);
	const brown = new Color(0x7d4215);

	const position = { y: 2 };
	material.color = brown;
</script>

<script lang="ts">
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Emitter from './Emitter.svelte';
	import {
		Color,
		SphereGeometry,
		BoxGeometry,
		CylinderGeometry,
		MeshStandardMaterial
	} from 'three';
	import { useSphericalJoint, Collider, RigidBody, AutoColliders } from '@threlte/rapier';
	import { Mesh, type Position, type Rotation } from '@threlte/core';

	let flip = 1;
</script>

<!-- <Collider rotation={{ y: 45 * DEG2RAD }} shape={'cylinder'} {position} args={[height / 2, 0.5]} /> -->
<RigidBody
	on:collisionenter={() => {
		flip *= -1;
	}}
	type={'fixed'}
	{position}
	rotation={{ x: 10 * DEG2RAD * flip, y: 0, z: 0 }}
>
	<AutoColliders shape={'convexHull'}>
		<Mesh castShadow receiveShadow {geometry} {material} />
	</AutoColliders>
</RigidBody>

<Emitter />
