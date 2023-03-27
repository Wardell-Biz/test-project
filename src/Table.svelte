<script>
  import { createEventDispatcher } from "svelte";


  export let rows = [];
  export let columns = {};
  const headers = Object.values(columns);

  const dispatch = new createEventDispatcher();

</script>

<table>
  <thead>
    <tr>
      {#each headers as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each Object.keys(columns) as key}
          {#if key == 'action'}
          <td>
            <button class="button edit-button" on:click={() => dispatch('edit', row)}>Edit</button>
            <button class="button delete-button" on:click={() => dispatch('delete', row)}>Delete</button>
          </td> 
          {:else}    
          <td>{row[key] || '' }</td>
          {/if}
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
    padding: 12px;
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

  .button{
    border: none;
    border-radius: 3px;
    color: white;
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
  }
  .edit-button {
    background-color: #4CAF50;
  }
  
  .delete-button {
    background-color: #f44336;
  }

</style>