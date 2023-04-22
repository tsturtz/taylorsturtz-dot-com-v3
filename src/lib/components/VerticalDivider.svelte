<script lang="ts">
  export let text: string = "";
</script>

<style>
  .wrapper {
    display: flex;
    width: 30px;
    min-width: 30px;
  }

  .separator {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  .text {
    white-space: nowrap;
    margin: 10px 0;
    writing-mode: vertical-lr;
    transform: scale(-1);
  }

  .line {
    border-left: 1px solid #fff;
    flex-grow: 1;
    width: 1px;
  }
</style>

<div class="wrapper">
  <div class="separator">
    <div class="line"></div>
    <div class="text">{text}</div>
    <div class="line"></div>
  </div>
</div>
