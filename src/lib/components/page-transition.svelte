<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { clipPath } from '$lib/scripts/animations/clip';
	import { keep } from '$lib/scripts/animations/keep';

	const duration = 1500;

	let key = 0;
	beforeNavigate(() => {
		key += 1;
	});
</script>

{#key key}
	<div class="circle" out:keep={{ duration }} in:clipPath={{ duration }}>
		<slot />
	</div>
{/key}

<style>
	.circle {
		position: absolute;
		left: 0;
		width: 100%;
	}
</style>
