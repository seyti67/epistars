<script lang="ts">
	export let tabTitle: string;
	export let title: string;
	export let description: string;
	export let keywords: string = '';
	export let image: string = '';
	export let url: string = '';
	export let type: string = 'website';
</script>

<svelte:head>
	<title>Hermita — {tabTitle}</title>
	<meta name="title" content="Hermita — {title}" />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content="Hermita — {title}" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content="Hermita — {title}" />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
