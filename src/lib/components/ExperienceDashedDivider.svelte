<script lang="ts">
  type Direction = 'right' | 'left';
  export let direction: Direction;
</script>

<style lang="scss">
</style>

<div style="display: flex; align-items: center; flex-direction: column; margin: 10px 0;">
  {#if direction === 'right'}
      <div style="height: 15px; width: 80%; border: 1px dashed #fff; border-top: none; border-right: none;"></div>
      <div style="height: 15px; width: 80%; border: 1px dashed #fff; border-top: none; border-bottom: none; border-left: none;"></div>
  {/if}
  {#if direction === 'left'}
    <div style="height: 15px; width: 80%; border: 1px dashed #fff; border-top: none; border-left: none;"></div>
    <div style="height: 15px; width: 80%; border: 1px dashed #fff; border-top: none; border-bottom: none; border-right: none;"></div>
  {/if}
</div>
