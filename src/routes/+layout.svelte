<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import { onMount } from 'svelte';

	import '$lib/styles/global.css';
	import Nav from '$lib/components/nav.svelte';
	onMount(() => {
		import('$lib/styles/lazy.css');
	});

	const pages = [
		{ title: 'Accueil', path: '' },
		{ title: 'Télécharger', path: 'telecharger/' },
		{ title: 'Wiki', path: 'wiki/' }
	];
	pages.forEach((page) => {
		page.path = '/epistars/' + page.path;
	});
</script>

<Mouse />

<Nav {pages} />
<PageTransition>
	<Scroll>
		<slot />
	</Scroll>
</PageTransition>
