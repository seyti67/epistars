<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { circleClip } from '$lib/scripts/animations/circle-clip';
	import Logo from './logo.svelte';

	const duration = 500;
	const delay = 500;

	let transition = false;
	let startedAt = 0;
	beforeNavigate(() => {
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
	{#if transition}
		<div class="curtain" in:circleClip={{ duration }} out:circleClip={{ duration, delay }}>
			<Logo {delay} {duration} />
		</div>
	{/if}
</div>

<style>
	.wrap {
		z-index: 1;
		position: fixed;
		height: 100vh;
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
