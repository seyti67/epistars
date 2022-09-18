import { fluids } from '$lib/components/smoke.svelte';
import { quadIn } from 'svelte/easing';

export function clipPath(node: HTMLElement, { duration = 1000, delay = 0 }) {
	return {
		delay,
		duration,
		css: (t: number) => {
			const eased = quadIn(t);

			setTimeout(() => {
				for (let i = 0; i < 3; i++) {
					fluids.splat(eased, eased, 100, 100);
				}
			}, t * duration);
			// from right
			return `clip-path: circle(${eased * 150}% at 0% 100%);`;
		}
	};
}
