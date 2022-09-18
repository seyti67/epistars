<script lang="ts">
	import { onMount } from 'svelte';

	export let size = 20;
	export let hsl: number[];

	let canvas: any;
	let ctx: any;
	let nbW: number;
	let nbH: number;

	function update() {
		nbW = Math.ceil(canvas.clientWidth / size);
		nbH = Math.ceil(canvas.clientHeight / size);
		canvas.width = nbW;
		canvas.height = nbH;
	}

	function drawPixel(x: number, y: number) {
		ctx.fillStyle = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2] + 10 - Math.random() * 20}%)`;
		ctx.fillRect(x, y, 1, 1);
	}
	function paint() {
		for (let x = 0; x < nbW; x++) {
			for (let y = 0; y < nbH; y++) {
				drawPixel(x, y);
				console.log(x, y);
			}
		}
	}

	function refresh() {
		let x = Math.floor(Math.random() * nbW);
		let y = Math.floor(Math.random() * nbH);
		drawPixel(x, y);
	}

	onMount(() => {
		update();
		ctx = canvas.getContext('2d');
		paint();
		window.setInterval(refresh, 10);
		window.addEventListener('resize', update);
	});
</script>

<canvas bind:this={canvas} style:backgroundColor="hsl({hsl[0]},{hsl[1]}%,{hsl[2]}%)" />

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		image-rendering: pixelated;
	}
</style>
