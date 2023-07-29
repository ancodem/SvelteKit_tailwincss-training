<script lang="ts">
	import Center from '$lib/Center.svelte';
	import NavBar from '$lib/NavBar/index.svelte';
	import '../app.css';
</script>

<main class="flex bg-slate-300 w-screen h-screen">
	<NavBar />
	<div class="w-10/12">
		<Center>
			<slot />
		</Center>
	</div>
</main>
