<script lang="ts">
	import { onMount } from 'svelte';
	import { mouseDelta } from './mouse-position.svelte';

	export let nbLayers: number;
	export let density: number; // 0 to 1

	const dotFactor = 3;

	const layers: HTMLCanvasElement[] = new Array(nbLayers);

	onMount(() => {
		const { innerWidth, innerHeight } = window;
		layers.forEach((layer, i) => {
			const dotSize = dotFactor * (i + 1);
			const offset = dotSize * 10;
			const width = Math.ceil(innerWidth / dotSize) + 2 * offset;
			const height = Math.ceil(innerHeight / dotSize) + 2 * offset;

			layer.width = width;
			layer.height = height;
			layer.style.left = `-${offset}px`;
			layer.style.top = `-${offset}px`;
			layer.style.width = `${width * dotSize}px`;
			layer.style.height = `${height * dotSize}px`;
			layer.style.opacity = `${(i + 1) / nbLayers}`;

			const ctx = layer.getContext('2d') as CanvasRenderingContext2D;
			ctx.fillStyle = 'white';
			const nbDots = Math.floor((density * layer.width * layer.height) / dotSize);
			for (let i = 0; i < nbDots; i++) {
				const x = Math.floor(Math.random() * layer.width);
				const y = Math.floor(Math.random() * layer.height);
				ctx.fillRect(x, y, 1, 1);
			}
		});
	});
</script>

{#each layers as _, layerIndex}
	<canvas
		class="layer"
		bind:this={layers[layerIndex]}
		style:transform="translate({-30 * (layerIndex + 2) * $mouseDelta.x}px, {-30 *
			(layerIndex + 2) *
			$mouseDelta.y}px)"
	/>
{/each}

<style>
	.layer {
		position: fixed;
		pointer-events: none;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
	}
</style>
