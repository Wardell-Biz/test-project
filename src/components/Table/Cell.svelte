<script>
  export let row
  export let field
  export let index
  export let formatter
</script>

<td
  class="{`core-table__td core-table__td--${field.field} core-table__field--${field.field}`}"
  key="{`td_${index}`}"
  {...$$restProps}
>
  {#if formatter && Object.keys(formatter).includes('component')}
    <svelte:component
      this="{formatter.component}"
      {...formatter.props}
      on:click="{formatter.props.onClick}"
    />
  {:else if formatter}
    {formatter}
  {:else}
    {row[field.field]}
  {/if}
</td>

<style>
  .core-table__td {
    padding: 12px;
    text-align: left;
  }
  .core-table__td:last-child {
    text-align: right;
  }
</style>
