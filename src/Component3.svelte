
<script>
  // Please build a dynamic table component, based on the design provided plus an action column.
  import Table from "./Table.svelte";

  const data = [
    { id: 1, name: 'Load balancer 1', protocol: 'HTTP', port: 300, rule: 'Round Robin', attached_group: 'VM Groups', status: 'Starting' },
    { id: 2, name: 'Load balancer 2', protocol: 'HTTPS', port: 443, rule: 'Least Connections', attached_group: 'Container Groups', status: 'Running' },
    { id: 3, name: 'Load balancer 3', protocol: 'TCP', port: 8080, rule: 'Source IP Hash', attached_group: 'VM Groups', status: 'Stopping' },
    { id: 4, name: 'Load balancer 4', protocol: 'HTTP', port: 80, rule: 'Least Connections', attached_group: 'Container Groups', status: 'Stopped' },
    { id: 5, name: 'Load balancer 5', protocol: 'TCP', port: 3306, rule: 'Round Robin', attached_group: 'Database Servers', status: 'Error' },
  ];

  const header = ['ID', 'Name', 'Protocol', 'Port', 'Rule', 'Attached Group', 'Status', ''];

</script>

<Table rows={data} {header} />
