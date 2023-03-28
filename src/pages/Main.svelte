<script>
  import Table from '../components/Table';
  import ActionsFormatter from '../components/Formatters/ActionsFormatter.svelte';

  const statusFormatter = (_row, field, _index) => field.charAt(0).toUpperCase() + field.slice(1);

  
  
  let headerFields = [
    {
      field: 'name',
      name: 'Name'
    },
    {
      field: 'protocol',
      name: 'Protocol'
    },
    {
      field: 'port', 
      name: 'Port'
    },
    {
      field: 'rule',
      name: 'Rule'
    },
    {
      field: 'groups',
      name: 'Attached Groups'
    },
    {
      field: 'status',
      name: 'Status'
    },
    {
      field: 'actions',
      name: 'Actions'
    }
  ]

  const toggleStatus = index => () => {
    let tmpData = [...data];
    if(tmpData[index].status === 'active') {
      tmpData[index].status = 'changing';
      data = tmpData;
      setTimeout(() => {
        tmpData[index].status = 'disabled'
        data = [...tmpData];
      }, 2000)
    } else {
      tmpData[index].status = 'changing';
      data = tmpData;
      setTimeout(() => {
        tmpData[index].status = 'active'
        data = [...tmpData];
      }, 2000)
    }
  }

  $: data = [
    {name: 'Load Balancer 3', protocol: 'HTTP', port: '3000', rule: 'Round robin', groups: 'Kevins VM Groups', status: 'disabled'},
    {name: 'Load Balancer 1', protocol: 'HTTP', port: '443', rule: 'Round robin', groups: 'Maureens VM Groups', status: 'starting'},
    {name: 'Load Balancer 2', protocol: 'HTTP', port: '80', rule: 'DNS Delegation', groups: 'Andrews VM Groups', status: 'active'},
    {name: 'Load Balancer 6', protocol: 'HTTP', port: '3000', rule: 'Round robin', groups: 'Marcs VM Groups', status: 'disabled'},
    {name: 'Load Balancer 4', protocol: 'HTTP', port: '443', rule: 'Round robin', groups: 'Mels VM Groups', status: 'disabled'},
    {name: 'Load Balancer 5', protocol: 'HTTP', port: '80', rule: 'DNS Delegation', groups: 'Ronjas VM Groups', status: 'disabled'},
  ];

</script>

<section>
  <div class='tt-balancers__wrapper'>
    <Table 
      title={'Test table'} 
      items={data} 
      headerFields={headerFields}
      formatters={{
        status: statusFormatter,
        actions: (row, field, index) => ({ component: ActionsFormatter, props: { row, field, index, onClick: toggleStatus(index) } })
      }}
      style={'border-bottom: 1px solid red'} 
      class={'tt-balancers__table-wrapper'}
    /> 
  </div>
</section>

<style>
  :global(.tt-balancers__table-wrapper) {
    margin-top: 100px;
  }
  .tt-balancers__wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>