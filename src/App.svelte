<script>
    import Table from './Table.svelte'

    let posts = [];

    let todos = [];

    let balancers = [
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 3000,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 443,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 80,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 3000,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 443,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 80,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load balancer 2",
            "protocol": "HTTP",
            "port": 3456,
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled",
        }
    ];

    let isLoaded = false;

    (async () => {
        const [tR, pR] = await Promise.all(
            [
                fetch('https://jsonplaceholder.typicode.com/todos'),
                fetch('https://jsonplaceholder.typicode.com/posts')
            ])
        const t = await tR.json()
        const p = await pR.json()
        todos = t;
        posts = p;
        isLoaded = true;
    })()


</script>

<main>
    {#if (isLoaded)}
        <Table rows={balancers} title="Balancers"/>
        <Table rows={posts} title="Table 1"/>
        <Table rows={todos} title="Table 2"/>
    {:else }
        <div>
            Loading...
        </div>
    {/if}
</main>

<style>
    main {
        text-align: center;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>