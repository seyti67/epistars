<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import { onMount } from 'svelte';

	import '$lib/styles/global.css';
	import Nav from '$lib/components/nav.svelte';
	import Hamburger from '$lib/components/hamburger.svelte';
	import { afterNavigate } from '$app/navigation';
	onMount(() => {
		import('$lib/styles/lazy.css');
	});

	const pages = [
		{
			title: 'Accueil',
			path: '',
			cards: [0, 1, 2]
		},
		{
			title: 'Télécharger',
			path: 'telecharger/',
			cards: [3, 4, 5]
		},
		{
			title: 'Wiki',
			path: 'wiki/',
			cards: [6, 7, 8]
		}
	];
	pages.forEach((page) => {
		page.path = '/epistars/' + page.path;
	});

	let openNav = false;
	afterNavigate((nav) => {
		/* setTimeout(() => {
			openNav = false;
		}, 10); */
	});
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
