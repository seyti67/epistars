<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import { onMount } from 'svelte';

	import '$lib/styles/global.css';
	import Nav from '$lib/components/nav.svelte';
	import Hamburger from '$lib/components/hamburger.svelte';
	import { afterNavigate } from '$app/navigation';
	import Layers from '$lib/components/layers.svelte';
	onMount(() => {
		import('$lib/styles/lazy.css');
	});

	const pages = [
		{
			title: 'Accueil',
			path: ''
		},
		{
			title: 'Télécharger',
			path: 'telecharger/'
		},
		{
			title: 'Wiki',
			path: 'wiki/'
		}
	];
	pages.forEach((page) => {
		page.path = '/epistars/' + page.path;
	});

	let openNav = false;
	afterNavigate((nav) => {
		setTimeout(() => {
			openNav = false;
		}, 500);
	});
</script>

<Mouse />
<Layers nbLayers={3} density={0.003} />

<Hamburger bind:open={openNav} />
{#if openNav}
	<Nav {pages} />
{/if}

<Scroll>
	<slot />
</Scroll>
<PageTransition />
