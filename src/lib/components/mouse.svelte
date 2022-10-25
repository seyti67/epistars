<script lang="ts">
	import Smoke from '$lib/components/smoke.svelte';

	const stateConfigs: { [key: string]: { color?: string; size?: number } } = {
		default: {},
		text: { color: '#000b16' },
		bad: { color: '#8c1c1c' },
		clickable: { color: '#000000' }
	};

	let state = 'default';
	let smokeColor: string;
	let smokeSize: number;
	function update(e?: MouseEvent) {
		if (e) state = (e.target as HTMLElement).getAttribute('data-state') || 'default';
		else state = 'default';
		if (!stateConfigs[state]) {
			state = 'default';
		}
		smokeColor = stateConfigs[state].color || '#1b588e';
		smokeSize = stateConfigs[state].size || 1;
	}
</script>

<svelte:body on:mouseover={update} />
<Smoke {smokeColor} {smokeSize} />
