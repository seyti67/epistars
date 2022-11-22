<script lang="ts" context="module">
	import { spring } from 'svelte/motion';

	export const mouseDelta = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.5
		}
	); // -1 to 1
</script>

<script lang="ts">
	const throttle = (fn: Function, wait: number) => {
		let time = Date.now();
		return function (args: any) {
			if (time + wait - Date.now() < 0) {
				fn(args);
				time = Date.now();
			}
		};
	};
	const update = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;

		const x = clientX;
		const y = clientY;

		const dx = x - innerWidth / 2;
		const dy = y - innerHeight / 2;

		mouseDelta.set({ x: dx / innerWidth, y: dy / innerHeight });
	};
</script>

<svelte:body on:mousemove={throttle(update, 30)} />
