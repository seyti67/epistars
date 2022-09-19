<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { rotate } from '$lib/scripts/animations/rotate';

	const duration = 3000;

	let key = 0;
	beforeNavigate(() => {
		key += 1;
	});
</script>

<div class="wrap">
	{#key key}
		<div class="page" out:rotate={{ duration }} in:rotate={{ out: false, duration }}>
			<slot />
		</div>
	{/key}
</div>

<style>
	.wrap {
		perspective: 10000px;
		transform-style: preserve-3d;
		perspective-origin: 50% 0%;
	}
	.page {
	}
</style>
