<script context="module">
	export let fluids = {
		setConfig: (key, value) => {},
		setColor: () => {},
		splat: (x, y, dx, dy, color) => {}
	};
</script>

<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	export let smokeColor = '';
	//convert hexcode to rgb array
	$: if (smokeColor) {
		let colorArr = smokeColor.match(/[A-Za-z0-9]{2}/g).map((v) => parseInt(v, 16) / 2000);
		fluids.setColor({ r: colorArr[0], g: colorArr[1], b: colorArr[2] });
	}

	export let smokeSize = 1;
	$: fluids.setConfig('SPLAT_RADIUS', 0.03 * smokeSize);
	onMount(async () => {
		fluids = await import('$lib/scripts/fluids');
		fluids.init();
	});
</script>

<canvas />
<svelte:head>
	<script>
		window.ga =
			window.ga ||
			function () {
				(ga.q = ga.q || []).push(arguments);
			};
		ga.l = +new Date();
	</script>
</svelte:head>

<style>
	canvas {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: transparent;
		pointer-events: none;
		z-index: 9999;
	}
</style>
