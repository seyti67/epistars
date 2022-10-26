<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';
	import { gradientFade } from '$lib/scripts/animations/gradient-fade';
	import { fly, scale } from 'svelte/transition';
	import Card from './svgs/card.svelte';
	import { mouseDelta } from './mouse-position.svelte';

	export let pages: { title: string; path: string; cards: number[][] }[];

	let currentPath = writable('');
	afterNavigate((nav) => {
		currentPath.set(nav.to?.url.pathname as string);
	});

	const duration = 1000;
	let offsetTop = spring(100, { stiffness: 0.08, damping: 0.15 });
	let currentIndex = 0;
	onMount(() => {
		currentPath.set(window.location.pathname);

		setTimeout(() => {
			currentPath.subscribe((path) => {
				const currentA = document.querySelector(`a[href="${path}"]`) as HTMLElement;
				offsetTop.set(currentA.offsetTop);
				currentIndex = pages.findIndex((page) => page.path === path);
				const page = pages[currentIndex];
				if (page) cards = page.cards;
			});
		}, duration);
	});

	let cards: number[][] = [];
	const hoverLink = (e: MouseEvent) => {
		const a = e.target as HTMLAnchorElement;
		const index = a.dataset.index as unknown as number;

		// display the cards
		cards = pages[index].cards;

		// rotate the cursor
		const rotation = Math.sqrt(index) - Math.sqrt(currentIndex);
		console.log(rotation);
	};
</script>

<nav transition:gradientFade={{ duration }}>
	<div class="cards" transition:scale={{ duration: 300 }}>
		{#each cards as card, i}
			<div
				class="card"
				style="margin-left: {i * 4}rem; transform: translate({$mouseDelta.x *
					50 *
					(i / 2 + 1)}px, {$mouseDelta.y * 50 * (i / 2 + 1)}px) rotate({20 * (i - 1)}deg);"
			>
				<Card coords={card} />
			</div>
		{/each}
	</div>
	<div
		class="index"
		style:top="{$offsetTop}px"
		in:fly={{ x: -50, delay: duration }}
		out:fly={{ x: -50 }}
	>
		>
	</div>
	{#each pages as page, i}
		<div
			class="link"
			data-index={i}
			transition:fly={{ x: -200, duration: 500, delay: i * 200 }}
			on:mouseenter={hoverLink}
		>
			<a class:active={$currentPath === page.path} href={page.path} data-state="clickable">
				{page.title}
			</a>
		</div>
	{/each}
</nav>

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding: 2rem;
		background: rgba(0, 0, 0, 0.5);
	}
	.cards {
		z-index: -1;
		position: absolute;
		right: 0rem;
		height: 28rem;
		width: 28rem;
	}
	.card {
		position: absolute;
		transform-origin: 50% 100%;
		width: 285px;
		height: 435px;
		:global(svg) {
			width: 100%;
			height: 100%;
			position: relative;
		}
	}

	.index {
		position: absolute;
	}
	.link {
		width: fit-content;
	}
	a {
		margin-left: 3rem;
	}
	a,
	.index {
		font-size: 4rem;
		color: white;
		text-decoration: none;
		font-family: 'VT323', monospace;
		text-transform: uppercase;
		transition-property: transform, filter, text-shadow;
		transition-duration: 0.2s;
		transform-origin: 0 50%;
	}
	a:active {
		transform: scale(0.95);
		text-shadow: none;
	}
	a.active {
		filter: brightness(0.8);
		transform: scale(0.9);
		pointer-events: none;
	}
</style>
