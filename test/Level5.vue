<template>
  <div class="level5">
    <slot name="level5" v-bind:test="test">
      default {{test}}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Level5',
  data() {
    return {
      test: 'test level5 content'
    }
  }
}
</script>

<style></style>
