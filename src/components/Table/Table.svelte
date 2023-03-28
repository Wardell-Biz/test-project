<script>
  import TableComponent from './TableComponent.svelte'

  export let items = []
  export let title = ''
  export let headerFields = []
  export let isLoading = false

  let styles = ''
  let className = ''

  export { styles as style }
  export { className as class }


  $: classnames = ['core-table__wrapper', className].join(' ')
</script>

<div style="{styles}" class="{classnames}">
  {#if isLoading}
    <div class="core-table__loading">Loading...</div>
  {/if}
  {#if title}
    <h1 class="core-table__title">{title}</h1>
  {/if}
  <TableComponent
    {...$$restProps}
    items="{items}"
    isLoading="{isLoading}"
    headerFields="{headerFields}"
  />
</div>

<style>
</style>
