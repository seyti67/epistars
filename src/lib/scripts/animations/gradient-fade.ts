import { quadOut } from 'svelte/easing';

export function gradientFade(
	node: HTMLElement,
	{ duration = 1000, delay = 0, direction = 'right', endOpacity = 0.5 }
) {
	return {
		duration,
		delay,
		css: (t: number) => {
			// reversed because out is the default
			const eased = quadOut(t);
			return `
				background: linear-gradient(to ${direction}, rgba(0,0,0,${eased * endOpacity}) ${
				eased * 100
			}%, rgba(0,0,0,0));
			`;
		}
	};
}
