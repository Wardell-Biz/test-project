<script>
	// import Component1 from './Component1.svelte';
	// import Component2 from './Component2.svelte';
	import Table from "./Table.svelte";
	export let name;

	const data = [
    { id: 1, name: 'Load balancer 1', protocol: 'HTTP', port: 300, rule: 'Round Robin', attached_group: 'VM Groups', status: 'Starting' },
    { id: 2, name: 'Load balancer 2', protocol: 'HTTPS', port: 443, rule: 'Least Connections', attached_group: 'Container Groups', status: 'Running' },
    { id: 3, name: 'Load balancer 3', protocol: 'TCP', port: 8080, rule: 'Source IP Hash', attached_group: 'VM Groups', status: 'Stopping' },
    { id: 4, name: 'Load balancer 4', protocol: 'HTTP', port: 80, rule: 'Least Connections', attached_group: 'Container Groups', status: 'Stopped' },
    { id: 5, name: 'Load balancer 5', protocol: 'TCP', port: 3306, rule: 'Round Robin', attached_group: 'Database Servers', status: 'Error' },
  ];

  const header = ['ID', 'Name', 'Protocol', 'Port', 'Rule', 'Attached Group', 'Status'];


</script>

<main>
	<div class="table-container px-10">
		<Table rows={data} header={header} />
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