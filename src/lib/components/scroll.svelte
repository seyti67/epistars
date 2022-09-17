<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {});
</script>

<div class="scroll">
	<slot />
</div>

<style>
	.scroll {
		margin-top: var(--nav-h);
		height: calc(100vh - var(--nav-h));
		overflow-y: auto;
		overflow-x: hidden;
		background-color: var(--bg-color);
	}
</style>
