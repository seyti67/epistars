import { fluids } from '$lib/components/smoke.svelte';
import { quadIn } from 'svelte/easing';

export function clipPath(node: HTMLElement, { duration = 1000, delay = 0 }) {
	const fromTop = window.innerHeight < window.innerWidth;
	console.log('fromTop', fromTop);
	return {
		delay,
		duration,
		css: (t: number) => {
			const eased = 1 - quadIn(t);

			setTimeout(() => {
				for (let i = 0; i < 6; i++) {
					if (fromTop) fluids.splat(0.5, eased, 0, -10);
					else fluids.splat(eased, 0.5, -10, 0);
				}
				for (let i = 0; i < 20; i++) {
					const y = Math.random();
					if (fromTop) fluids.splat(y, eased, 0, -100);
					else fluids.splat(eased, y, -100, 0);
				}
			}, t * duration);
			if (fromTop) {
				return `clip-path: polygon(0 0, 100% 0, 100% ${100 - eased * 100}%, 0 ${
					100 - eased * 100
				}%);`;
			} else {
				return `clip-path: polygon(0 0, ${eased * 100}% 0, ${eased * 100}% 100%, 0 100%);`;
			}
		}
	};
}
