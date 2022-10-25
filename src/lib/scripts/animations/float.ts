import { backOut } from 'svelte/easing';

// (split * 100)% of the duration is spent on the first half of the animation
const split = 0.5;
export function float(node: HTMLElement, { duration = 2000, delay = 0 }) {
	return {
		duration,
		delay,
		css: (t: number) => {
			// reversed because out is the default
			const eased = backOut(t);
			return `
				transform: translateY(${eased});
			`;
		}
	};
}
