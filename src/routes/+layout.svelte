<script>
	import Mouse from '$lib/components/mouse.svelte';
	import Noise from '$lib/components/noise.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import '$lib/styles/global.css';

	const pages = [
		{ title: 'Accueil', path: '' },
		{ title: 'Télécharger', path: 'telecharger' },
		{ title: 'Wiki', path: 'wiki' }
	];
</script>

<Mouse />

<nav>
	<Noise hsl={[211, 58, 30]} />
	{#each pages as page}
		<a href="/epistars/{page.path}" data-state="clickable">{page.title}</a>
	{/each}
</nav>
<PageTransition>
	<Scroll>
		<slot />
	</Scroll>
</PageTransition>

<style>
	:global(:root) {
		--nav-h: 5rem;
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
	}
</style>
