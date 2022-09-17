<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { fluids } from './smoke.svelte';

	const duration = 200;
	const delay = 100;

	let key = 0;
	beforeNavigate(() => {
		function smoke() {
			function randDirection() {
				return (Math.random() - 0.5) * 3000;
			}
			for (let i = 0; i < 20; i++) {
				fluids.splat(Math.random(), Math.random(), randDirection(), randDirection(), {
					r: 0.4,
					g: 0.4,
					b: 0.4
				});
			}
		}
		fluids.setConfig('SPLAT_RADIUS', 4);
		smoke();
		fluids.setConfig('SPLAT_RADIUS', 0.02);
		key += 1;
	});
</script>

{#key key}
	<div class="wrap" in:fade={{ delay: duration + delay, duration }} out:fade={{ duration, delay }}>
		<!-- in:animate={{ type: 'from', delay: duration, duration: duration * 5, x: '100%', ease }}
		out:animate={{ type: 'to', duration, x: '-100%' }} -->
		<slot />
	</div>
{/key}

<style>
	.wrap {
		background-color: var(--bg-color);
	}
</style>
