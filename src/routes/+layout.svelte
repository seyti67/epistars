<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import { onMount } from 'svelte';

	import '$lib/styles/global.css';
	import Nav from '$lib/components/nav.svelte';
	import Hamburger from '$lib/components/hamburger.svelte';
	onMount(() => {
		import('$lib/styles/lazy.css');
	});

	const pages = [
		{
			title: 'Accueil',
			path: '',
			cards: [
				[3, 0],
				[2, 0],
				[0, 1]
			]
		},
		{ title: 'Télécharger', path: 'telecharger/' },
		{ title: 'Wiki', path: 'wiki/' }
	];
	pages.forEach((page) => {
		page.path = '/epistars/' + page.path;
	});
	let openNav = false;
</script>

<Mouse />

<Hamburger bind:open={openNav} />
{#if openNav}
	<Nav {pages} />
{/if}

<PageTransition>
	<Scroll>
		<slot />
	</Scroll>
</PageTransition>
