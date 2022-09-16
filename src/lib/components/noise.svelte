<script lang="ts">
	export let size = 20;
	export let hsl: number[];

	let svgEl: any;
	let nbW: number;
	let nbH: number;
	$: if (svgEl) {
		nbW = Math.ceil(svgEl.clientWidth / size);
		nbH = Math.ceil(svgEl.clientHeight / size);
	}
</script>

<svg bind:this={svgEl}>
	{#each new Array(nbW) as _, i}
		{#each new Array(nbH) as _, j}
			<rect
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
</svg>

<style>
	svg {
		position: absolute;
		height: 100%;
		width: 100%;
	}
</style>
