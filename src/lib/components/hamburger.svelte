<script>
	export let open = false;
</script>

<!-------- Thanks José Rosário for the codepen  -------->
<!-- https://codepen.io/JoseRosario/pen/BWqMwK -->
<div
	class:open
	class="wrapper-menu"
	on:click={() => {
		open = !open;
	}}
>
	<div class="line-menu half start" />
	<div class="line-menu" />
	<div class="line-menu half end" />
</div>

<style>
	.wrapper-menu {
		position: fixed;
		z-index: 3;
		top: 1rem;
		left: 1rem;
		width: 50px;
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
		transition: transform 330ms ease-out;
	}

	.wrapper-menu.open {
		transform: rotate(-45deg);
	}

	.line-menu {
		background-color: #fff;
		border-radius: 5px;
		width: 100%;
		height: 6px;
	}

	.line-menu.half {
		width: 50%;
	}

	.line-menu.start {
		transition: transform 200ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
		transform-origin: right;
	}

	.open .line-menu.start {
		transform: rotate(-90deg) translateX(3px);
	}

	.line-menu.end {
		align-self: flex-end;
		transition: transform 200ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
		transform-origin: left;
	}

	.open .line-menu.end {
		transform: rotate(-90deg) translateX(-3px);
	}
</style>
