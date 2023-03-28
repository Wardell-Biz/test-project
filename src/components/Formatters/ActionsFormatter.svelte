<script>
  import Buttons from "../Buttons.svelte";
  export let row;
  export let field;
  export let index;
</script>

<Buttons on:click> {row.status === 'active' ? 'Stop' : 'Start'} </Buttons>