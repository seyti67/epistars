import { fluids } from '$lib/components/smoke.svelte';
import { quadIn } from 'svelte/easing';

export function clipPath(node: HTMLElement, { duration = 1000, delay = 0 }) {
	return {
		delay,
		duration,
		css: (t: number) => {
			const eased = 1 - quadIn(t);

			setTimeout(() => {
				for (let i = 0; i < 3; i++) {
					fluids.splat(eased, 0.5, -100, 0);
				}
			}, t * duration);
			// from right
			return `clip-path: polygon(${eased * 100}% 0%, 100% 0%, 100% 100%, ${eased * 100}% 100%);`;
		}
	};
}
