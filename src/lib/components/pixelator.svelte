<script lang="ts">
	import { onMount } from 'svelte';

	export let size = 40;
	export let active = false;
	export let duration = 500;

	let grid: any;
	let matrix: boolean[][] = [];
	function update() {
		let nbW = Math.ceil(grid.clientWidth / size);
		let nbH = Math.ceil(grid.clientHeight / size);
		// create matrix full of false
		matrix = new Array(nbW).fill(0).map(() => new Array(nbH).fill(false));
		switchMatrix(active);
	}

	function switchMatrix(value: boolean) {
		matrix.forEach((row, i) => {
			row.forEach((_, j) => {
				setTimeout(() => {
					matrix[i][j] = value;
				}, Math.random() * (duration - 100));
			});
			row = [...row];
		});
		matrix = [...matrix];
	}

	$: switchMatrix(active);
	onMount(() => {
		update();
		window.addEventListener('resize', update);
	});
</script>

<div class="grid" bind:this={grid}>
	{#each matrix as line, i}
		{#each line as cell, j}
			<span
				class="pixel"
				class:active={cell}
				style="
					width: {size}px; height: {size}px;
				 	left: {i * size}px; top: {j * size}px;
					background-color: rgb({Math.random() * 255}, {Math.random() * 255}, {Math.random() * 255});
				"
			/>
		{/each}
	{/each}
</div>

<style>
	.grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.pixel {
		position: absolute;
		display: none;
	}
	.pixel.active {
		display: block;
	}
</style>
