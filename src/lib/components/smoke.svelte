<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	export let lowperf = true;

	export let smokeColor = '';
	//convert hexcode to rgb array
	$: colorArr = (smokeColor || '#0d2d4c')
		.match(/[A-Za-z0-9]{2}/g)
		.map((v) => parseInt(v, 16) / 100);

	export let smokeSize = 1;
	/* $: config.SPLAT_RADIUS = 0.00008 * smokeSize; */
	onMount(async () => {
		await import('$lib/scripts/fluids');
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
		ga('create', 'UA-105392568-1', 'auto');
		ga('send', 'pageview');
	</script>
	<!-- <script src="epistars/fluids/script.js" defer></script> -->
</svelte:head>

<style>
	canvas {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: transparent;
	}
</style>
