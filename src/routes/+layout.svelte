<script lang="ts">
	import '../app.css';
  import NavBar from "../lib/NavBar/index.svelte";
</script>

<main class="flex w-screen h-screen">
  <NavBar />
	<div class="w-10/12">
		<slot />
	</div>
</main>
