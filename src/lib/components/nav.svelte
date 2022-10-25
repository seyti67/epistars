<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let pages: { title: string; path: string }[];

	let currentPath: string;
	onMount(() => {
		currentPath = window.location.pathname;
	});
	afterNavigate((nav) => {
		currentPath = nav.to?.url.pathname as string;
	});
</script>

<nav>
	{#each pages as page}
		<a class:active={currentPath === page.path} href={page.path} data-state="clickable">
			{page.title}
		</a>
	{/each}
</nav>

<style>
	:global(:root) {
		--nav-h: 6rem;
	}
	nav {
		position: fixed;
		top: 0;
		z-index: 2;
		height: var(--nav-h);
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	a {
		font-size: 2.5rem;
		color: white;
		text-shadow: 0.1rem 0.1rem 0 #aaa, 0.1rem 0.1rem 0.3rem #000;
		text-decoration: none;
		font-family: 'VT323', monospace;
		text-transform: uppercase;
		z-index: 1;
		transition-property: transform, filter, text-shadow;
		transition-duration: 0.2s;
	}
	a:active {
		transform: scale(0.95);
		text-shadow: none;
	}
	a.active {
		filter: brightness(0.8);
		transform: scale(0.9);
		transform-origin: 0 50%;
		pointer-events: none;
	}
</style>
