<script>
    export let data;
    export let columns;
</script>

<table>
    <thead>
        <tr>
            {#each columns as column}
                <th>{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row}
            <tr>
                {#each columns as column}
                    <td>{row[column]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    *,
    html,
    body {
        font-family: "Poppins", sans-serif;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    td {
        text-align: left;
        padding: 15px;
        color: rgb(97, 95, 95);
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: #d6d5d5;
        font-weight: 600;
        font-size: 15px;
    }

    tr {
        background-color: #f2f2f2;
        border-bottom: 1px solid #ddd;
    }

    /* Responsive styles */
    @media only screen and (max-width: 768px) {
        td,
        th {
            padding: 5px;
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 480px) {
        td,
        th {
            padding: 5px;
            font-size: 10px;
        }
    }
</style>
