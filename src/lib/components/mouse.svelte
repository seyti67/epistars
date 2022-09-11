<script lang="ts">
	import Smoke from '$lib/components/smoke.svelte';

	const stateConfigs: { [key: string]: { color?: string; size?: number } } = {
		default: {},
		text: { color: '#000b16', size: 5 }
	};

	let state = 'default';
	let smokeColor: string;
	let smokeSize: number;
	function update(e: MouseEvent) {
		state = window.getComputedStyle(e.target as Element).getPropertyValue('cursor');
		if (!stateConfigs[state]) {
			state = 'default';
		}
		smokeColor = stateConfigs[state].color || '#0d2d4c';
		smokeSize = stateConfigs[state].size || 1;
	}
</script>

<svelte:body on:mouseover={update} />
<Smoke {smokeColor} {smokeSize} />
