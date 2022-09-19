<script lang="ts">
	export let title: string;
	export let description: string;
	export let keywords: string = '';
	export let image: string = '';
	export let url: string = '';
	export let type: string = 'website';
</script>

<svelte:head>
	<title>{title} - Hermita</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	{#if url}
		<meta property="og:url" content={url} />
	{/if}
	<meta property="og:type" content={type} />
</svelte:head>
