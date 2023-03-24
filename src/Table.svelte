<script>
  export let rows = [];
  export let header = [];
</script>

<table>
  <thead>
    <tr>
      {#each header as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each Object.values(row) as value}
          <td>{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>


<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th {
    background-color: #cfcccc;
    font-weight: bold;
    padding: 8px;
    text-align: left;
  }
  
  td {
    border-bottom: 1px solid #d6d2d2;
    padding: 8px;
    text-align: left;
		background-color: #f1eded;
  }
  
  /* tr:nth-child(even) {
    background-color: #f9f9f9;
  } */
</style>