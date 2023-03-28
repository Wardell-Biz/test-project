<script>
  import { flip } from 'svelte/animate'

  import Head from './Head.svelte'
  import Cell from './Cell.svelte'

  let styles = ''
  let className = ''
  let itemsToDisplay = []

  export let items = []
  export let formatters = {}
  export { styles as style }
  export let isLoading = false
  export let headerFields = []
  export { className as class }
  export let onClickRow = undefined
  export let noDataMessage = 'No data to display'

  const onClickTr = (row) => {
    if (onClickRow) {
      onClickRow(row)
    }
  }

  $: classnames = ['core-table__wrapper', className].join(' ')
  $: displayedFields = headerFields
  $: itemsToDisplay = items
</script>

<div style="{styles}" class="{classnames}">

  <table
    class="core-table__table"
  >
    <Head headerFields="{displayedFields}" />
    <tbody class="core-table__tbody">
      {#if !items.length}
        {#if !isLoading}
          <tr class="core-table__tr">
            <td class="core-table__td core-table__empty-message" colspan="{displayedFields.length}">
              {noDataMessage}
            </td>
          </tr>
        {/if}
      {:else}
        {#each itemsToDisplay as row, index (row.id || index)}
          <tr
            animate:flip="{{ duration: 300 }}"
            class="core-table__tr"
            class:-is-interactive="{!!onClickRow}"
            on:click="{() => onClickTr(row)}"
          >
            {#each displayedFields as field, columnIndex}
              <Cell
                row="{row}"
                index="{index}"
                field="{field}"
                formatter="{formatters[field.field] &&
                  formatters[field.field](row, row[field.field], index)}"
                style="--cell-title: '{displayedFields[columnIndex]
                  ? displayedFields[columnIndex].name
                  : ''}';"
              />
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  .core-table__table {
    width: 100%;
    border: none;
    border-collapse: collapse
  }

</style>
