import { quadIn } from 'svelte/easing';

export function circleClip(node: HTMLElement, { duration = 2000, delay = 0 }) {
	return {
		duration,
		delay,
		css: (t: number) => {
			// reversed because out is the default
			const eased = quadIn(t);
			return `
				clip-path: circle(${150 * eased}% at 50% 50%);
			`;
		}
	};
}
