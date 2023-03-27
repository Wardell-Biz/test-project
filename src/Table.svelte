<div>
    <h2>{title}</h2>
    <table>
        <thead>
        <tr>
            {#each headers as header}
                <th>
                    {header}
                </th>
            {/each}

        </tr>
        </thead>
        <tbody>
        {#each rows as row}
            <tr>
                {#each Object.entries(row) as [name, value]}
                    <td>{value}</td>
                {/each}
            </tr>
        {/each}
        </tbody>

    </table>

</div>

<script>
    export let rows;
    export let title;

    let headers;

    function getHeaders(rows) {
        if (!rows.length) return []
        return Object
            .keys(rows[0])
            .map(head => head.replace('_', ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.substring(1))
                .join(' ')
            )
    }

    $: headers = getHeaders(rows)

</script>

<style lang="scss">
  table {
    width: 100%;
    border-spacing: 0;
    text-align: left;
  }

  table thead {
    background-color: #eee;
    color: #2f2f2f;
  }

  th, td {
    padding: 15px 5px 15px 15px;
  }

  td {
    color: #666666;
  }

  tbody tr {
    background-color: #fbfbfb;
  }

  tbody tr td {
    border-bottom: 1px solid #eee;
  }


</style>