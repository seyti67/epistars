<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { circleClip } from '$lib/scripts/animations/circle-clip';
	import { keep } from '$lib/scripts/animations/keep';
	import Logo from './logo.svelte';

	const duration = 1000;
	const delay = 500;

	let key = 0;
	let transition = false;
	let startedAt = 0;
	beforeNavigate(() => {
		key += 1;
		transition = true;
		startedAt = Date.now();
	});
	afterNavigate(() => {
		setTimeout(() => {
			transition = false;
		}, delay + duration);
	});
</script>

<div class="wrap">
	{#key key}
		<div class="page" out:keep={{ duration }}>
			<slot />
		</div>
	{/key}
	{#if transition}
		<div class="curtain" in:circleClip={{ duration }} out:circleClip={{ duration, delay }}>
			<Logo {delay} />
		</div>
	{/if}
</div>

<style>
	.wrap {
		position: relative;
	}
	.curtain {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
