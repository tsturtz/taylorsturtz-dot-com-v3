<script lang="ts">
  import { fade } from 'svelte/transition';

	export let text: string;
  let copied = false;

	const copy = () => {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  };
</script>

<style lang="scss">
  #copy {
    color: var(--accent1-bright);
    cursor: pointer;
    transition: .2s;
    &:hover {
      color: var(--accent1-dim);
    }
    filter: drop-shadow(rgba(255, 215, 77, 0.3) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.3) 1px 1px 2px);
  }
  #check {
    color: green;
  }
</style>

{#if !copied}
  <svg id="copy" on:click={copy} role="button" in:fade xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
{:else}
  <svg id="check" in:fade xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
{/if}
