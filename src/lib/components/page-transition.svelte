<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { fade, scale } from 'svelte/transition';
	import Pixelator from './pixelator.svelte';

	const duration = 600;
	const delay = 100;

	let key = 0;
	let active = false;
	beforeNavigate(() => {
		active = true;
		setTimeout(() => {
			active = false;
		}, duration + delay);
		key += 1;
	});
</script>

{#key key}
	<div
		class="wrap"
		in:fade={{ delay: duration + delay, duration }}
		out:scale={{ duration, delay, start: 1, opacity: 1 }}
	>
		<slot />
	</div>
{/key}
<Pixelator {active} {duration} />

<style>
	.wrap {
		background-color: var(--bg-color);
	}
</style>
