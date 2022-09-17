// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { gsap } from 'gsap/dist/gsap';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function animate(node, { type, refresh = () => {}, ...args }) {
	gsap.ticker.add(refresh);
	const method = gsap[type];
	return method(node, args).then(() => {
		gsap.ticker.remove(refresh);
	});
}
