<script lang="ts" context="module">
	const geometry = new SphereGeometry(0.25);
	const material = new MeshStandardMaterial();
	const yellow = new Color(0xffe814);
	const light_color = new Color(0xffffff);
	material.color = yellow;
	//material.emissive = light_color;
</script>

<script lang="ts">
	import { Mesh, type Position, type Rotation } from '@threlte/core';
	import { Collider, RigidBody } from '@threlte/rapier';
	import { Color, SphereGeometry, BoxGeometry, MeshStandardMaterial } from 'three';

	export let position: Position | undefined = undefined;
	export let rotation: Rotation | undefined = undefined;
</script>

<RigidBody type={'dynamic'} {position} {rotation}>
	<Collider shape={'ball'} args={[0.125]} />
	<Mesh receiveShadow {geometry} {material} />
</RigidBody>
