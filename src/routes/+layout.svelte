<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Mouse from '$lib/components/mouse.svelte';
	import Noise from '$lib/components/noise.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import '$lib/styles/global.css';
	import { onMount } from 'svelte';

	const pages = [
		{ title: 'Accueil', path: '' },
		{ title: 'Télécharger', path: 'telecharger/' },
		{ title: 'Wiki', path: 'wiki/' }
	];
	pages.forEach((page) => {
		page.path = '/epistars/' + page.path;
	});

	let currentPath: string;
	onMount(() => {
		currentPath = window.location.pathname;
	});
	afterNavigate((nav) => {
		currentPath = nav.to?.url.pathname as string;
	});
</script>

<Mouse />

<nav>
	<Noise hsl={[211, 58, 30]} size={32} />
	{#each pages as page}
		<a class:active={currentPath === page.path} href={page.path} data-state="clickable">
			{page.title}
		</a>
	{/each}
</nav>
<PageTransition>
	<Scroll>
		<slot />
	</Scroll>
</PageTransition>

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
		justify-content: center;
		align-items: center;
	}
	a {
		font-size: 2.5rem;
		color: white;
		text-shadow: 0.1rem 0.1rem 0 #aaa, 0.1rem 0.1rem 0.3rem #000;
		margin: 0 1rem;
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
		pointer-events: none;
	}
</style>
