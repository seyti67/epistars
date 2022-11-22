<script context="module">
	import { writable } from 'svelte/store';
	const scrollY = writable(0);
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';
	import Gears from './svg/gears/gears.svelte';

	onMount(() => {
		const container = document.getElementById('scroll-container') as HTMLElement;
		const content = document.getElementById('scroll-content') as HTMLElement;
		const lenis = new Lenis({
			wrapper: container,
			content,
			smooth: true,
			infinite: false
		});

		//get scroll value
		lenis.on('scroll', ({ scroll }) => {
			scrollY.set(scroll);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<Gears rotate={$scrollY} />
<div id="scroll-container">
	<div id="scroll-content">
		<slot />
	</div>
</div>

<style>
	#scroll-container {
		overflow-y: auto;
		max-height: 100vh;
		transform: scale(1);
	}
	#scroll-content {
		z-index: 1;
		overflow: hidden;
	}
</style>
