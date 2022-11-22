<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';
	import { gradientFade } from '$lib/scripts/animations/gradient-fade';
	import { fly } from 'svelte/transition';

	export let pages: { title: string; path: string }[];

	let currentPath = writable('');
	beforeNavigate((nav) => {
		currentPath.set(nav.to?.url.pathname as string);
	});

	const duration = 1000;
	let offsetTop = spring(-70, { stiffness: 0.08, damping: 0.15 });
	let currentIndex = 0;
	onMount(() => {
		currentPath.set(window.location.pathname);
		setTimeout(() => {
			currentPath.subscribe((path) => {
				const currentA = document.querySelector(`a[href="${path}"]`) as HTMLElement;
				const { top } = currentA.getBoundingClientRect();
				offsetTop.set(top);
				currentIndex = pages.findIndex((page) => page.path === path);
				cursorAngle = 0;
			});
		}, duration);
	});

	let cursorAngle = 0;
	const hoverLink = (e: MouseEvent) => {
		const a = e.target as HTMLAnchorElement;
		const index = a.dataset.index as unknown as number;

		// rotate the index
		const diff = index - currentIndex;
		cursorAngle = Math.sign(diff) * (Math.sqrt(Math.abs(diff)) * 45);
	};
</script>

<nav transition:gradientFade={{ duration }}>
	<div
		class="index"
		style:top="{$offsetTop}px"
		style:--rotation="{cursorAngle}deg"
		in:fly={{ x: -50, delay: duration }}
		out:fly={{ x: -50 }}
	>
		<span>></span>
	</div>
	{#each pages as page, i}
		<div
			class="link"
			data-index={i}
			class:active={$currentPath === page.path}
			transition:fly={{ x: -200, duration: 500, delay: i * 200 }}
			on:pointerenter={hoverLink}
			on:pointerdown={(e) => {}}
		>
			<a href={page.path} data-state="clickable">
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
		gap: 3rem;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.5);
	}
	.index {
		position: absolute;
		border-radius: 1rem 0 0 1rem;
		z-index: 2;
		span {
			display: block;
			transition: transform 300ms var(--elastic);
			transform: rotate(var(--rotation));
		}
	}
	.link {
		width: fit-content;
		transition: transform 300ms var(--elastic);
		transform-origin: 0% 50%;
	}
	.link:hover {
		transform: scale(1.05);
	}
	.link:active {
		transform: scale(0.95);
	}
	.link.active {
		filter: brightness(0.8);
		transform: translateX(-0.5rem) scale(0.9);
	}
	a {
		margin-left: 4rem;
	}
	a,
	.index {
		font-size: 3rem;
		color: black;
		background-color: white;
		border: solid 3px black;
		padding: 0.3rem 1rem;
		text-decoration: none;
		font-family: 'VT323', monospace;
		text-transform: uppercase;
		transition-property: filter 400ms;
	}
</style>
