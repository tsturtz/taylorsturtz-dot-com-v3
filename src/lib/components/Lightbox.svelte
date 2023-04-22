<script lang="ts">
  import { fade } from 'svelte/transition';

  import XIcon from '$lib/components/Icons/XIcon.svelte';
  import Button from './Button.svelte';

  export let handleLightboxToggle: () => void;
  export let imagePath: string;
</script>

<style lang="scss">
  .dark-background {
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  }
  .x {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      z-index: 1;
      max-height: 80vh;
      max-width: 80vw;
      border-radius: 8px;
      border: 1px solid var(--accent1-dim);
    }
  }
</style>

<div class="dark-background" on:click={handleLightboxToggle}>
  <div class="x">
    <Button class="text" on:click={handleLightboxToggle}>
      <XIcon --size="64px"/>
    </Button>
  </div>
  <div class="wrapper" on:click={(e) => e.stopPropagation()}>
    <img src={imagePath} alt="Lightbox image of {imagePath}" />
  </div>
</div>
