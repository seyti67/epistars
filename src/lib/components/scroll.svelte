<div class="scroll">
	<slot />
</div>

<style>
	.scroll {
		margin-top: var(--nav-h);
		height: calc(100vh - var(--nav-h));
		overflow-y: auto;
		overflow-x: hidden;
		background-color: var(--bg-color);
	}
</style>
