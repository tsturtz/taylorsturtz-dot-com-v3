<script lang="ts">
	let buttonProps = {
    class: $$restProps.class
	}
  export let selected: boolean = false;
</script>

<style>
  button {
    cursor: pointer;
  }
  .text {
    border: none;
    padding: 0;
  }
  .text:hover {
    color: var(--accent1-dim);
    background-color: initial;
  }
  .text.selected {
    color: var(--accent1-dim);
    font-weight: bolder;
    /* border: 1px solid var(--accent1-dim); */
    /* background-color: var(--accent1-dim-semi-transparent); */
  }
</style>

<button on:click on:mouseover on:mouseenter on:mouseleave {...buttonProps} class:selected={selected}>
  <slot/>
</button>
