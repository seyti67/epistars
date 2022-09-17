<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let size = 20;
	export let hsl: number[];

	let svgEl: any;
	let nbW: number;
	let nbH: number;
	function update() {
		nbW = Math.ceil(svgEl.clientWidth / size);
		nbH = Math.ceil(svgEl.clientHeight / size);
	}
	$: if (svgEl) update();

	let key = 0;
	function refresh() {
		key = Math.random();
	}
	onMount(() => {
		window.setInterval(refresh, 10000);
		window.addEventListener('resize', update);
	});
</script>

<svg bind:this={svgEl}>
	{#key key}
		{#each new Array(nbW) as _, i}
			{#each new Array(nbH) as _, j}
				<rect
					transition:fly={{
						duration: 300,
						delay: 20 * (nbH + nbW - i - j),
						y: -100,
						x: -100
					}}
					style="fill: hsl({hsl[0]}, {hsl[1]}%, {Math.min(
						100,
						Math.max(0, hsl[2] + 16 * Math.random() - 8)
					)}%);"
					x={i * size}
					y={j * size}
					width={size}
					height={size}
				/>
			{/each}
		{/each}
	{/key}
</svg>

<style>
	svg {
		position: absolute;
		height: 100%;
		width: 100%;
		pointer-events: none;
	}
</style>
