import { fluids } from '$lib/components/smoke.svelte';
import { quadOut, backIn } from 'svelte/easing';

// (split * 100)% of the duration is spent on the first half of the animation
const split = 0.3;

export function rotate(node: HTMLElement, { duration = 2000, out = true }) {
	const angle = out ? -360 : 360;

	return {
		delay: out ? 0 : duration,
		duration,
		css: (time: number) => {
			// reversed because out is the default
			const t = 1 - time;
			if (t < split) {
				const x = quadOut(t / split);
				return `
					transform: scale(${1 - x * 0.7}) rotate(${x * 90}deg);
				`;
			} else {
				const x = backIn((t - split) / (1 - split));
				if (x < 0.25 && out) {
					setTimeout(() => {
						for (let i = 0; i < 20; i++) {
							fluids.splat(0.55 - x * 0.4, 0.4 + 0.2 * Math.random(), x * -100, 0);
						}
					}, t * duration);
				}
				return `
					transform: scale(0.3) rotate(90deg) rotateX(${x * angle}deg);
				`;
			}
		}
	};
}
