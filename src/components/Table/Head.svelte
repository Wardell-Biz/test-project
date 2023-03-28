<script>
  export let headerFields


</script>

<thead class="core-table__thead">
  <tr>
    {#each headerFields as field}
      <th
        class="{[
          `core-table__th`,
          `core-table__th--${field.field}`,
          `core-table__field--${field.field}`,
          field.isAlignedRight ? `-align-right` : '',
        ].join(' ')}"
      >
        <div class="core-table__th-wrapper">
          <div class="text">
            {field.name}
          </div>
        </div>
      </th>
    {/each}
  </tr>
</thead>

<style>
  .core-table__thead {
    background-color:#e0e0e0;
  }
  .core-table__th {
    font-weight: 600;
    text-align: left;
    padding: 12px;
  }
  .core-table__th:last-child {
    text-align: right;
  }
</style>
