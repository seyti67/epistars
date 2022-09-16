<script lang="ts">
	import Smoke from '$lib/components/smoke.svelte';

	const stateConfigs: { [key: string]: { color?: string; size?: number } } = {
		default: {},
		bad: { color: '#7c1b1b' /* '#000b16' */, size: 1 }
	};

	let state = 'default';
	let smokeColor: string;
	let smokeSize: number;
	function update(e: MouseEvent) {
		state = (e.target as HTMLElement).getAttribute('data-state') || 'default';
		console.log(state);
		if (!stateConfigs[state]) {
			state = 'default';
		}
		smokeColor = stateConfigs[state].color || '#0d2d4c';
		smokeSize = stateConfigs[state].size || 1;
	}
</script>

<svelte:body on:mouseover={update} />
<Smoke {smokeColor} {smokeSize} lowperf={false} />
