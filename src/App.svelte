<script>
	// import Component1 from './Component1.svelte';
	import Component3 from './Component3.svelte';
	export let name;

</script>

<main>
	<div class="table-container px-10">
		<Component3 />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.table-container {
    display: flex;
    justify-content: center;
  }

	.px-10{
		padding-left: 5rem;
		padding-right: 5rem;
	}
</style>