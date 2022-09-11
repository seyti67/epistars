<script>
	import Mouse from '$lib/components/mouse.svelte';
	import Scroll from '$lib/components/scroll.svelte';
	import '$lib/styles/global.css';
</script>

<Mouse />
<Scroll>
	<slot />
</Scroll>
