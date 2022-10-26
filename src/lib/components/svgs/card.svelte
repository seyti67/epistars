<script lang="ts">
	import { fly } from 'svelte/transition';
	import A from './cards/0.svelte';
	import B from './cards/1.svelte';
	import C from './cards/2.svelte';
	import D from './cards/3.svelte';
	import E from './cards/4.svelte';
	import F from './cards/5.svelte';
	import G from './cards/6.svelte';
	import H from './cards/7.svelte';
	import I from './cards/8.svelte';

	const Cards = [A, B, C, D, E, F, G, H, I];

	export let cardNumber: number;
	export let nth: number;
	const duration = 500;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	width="908px"
	height="1358px"
	viewBox="-10 -10 898 1348"
>
	{#key cardNumber}
		<g class="wrap" out:fly={{ y: -150, duration }} in:fly={{ y: -150, duration, delay: duration }}>
			<svelte:component
				this={Cards[cardNumber]}
				duration={duration * 10}
				delay={duration + nth * 500}
			/>
		</g>
	{/key}
</svg>

<style lang="scss">
	svg {
		stroke: rgb(0, 0, 0);
		fill: rgb(255, 255, 255);
		stroke-width: 10;
	}
</style>
