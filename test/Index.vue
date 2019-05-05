<template>
  <div class="container">
    <p>demo test</p>
    <Level1></Level1>
    <SlotReceiver>
      <template v-slot:level5="slotProps">
        <div>slot content from Index receiver: {{slotProps.test}}</div>
      </template>
    </SlotReceiver>
  </div>
</template>

<script>
import Level1 from './Level1.vue'

export default {
  components: {
    Level1
  },
  data() {
    return {
      slotRoutes: [{
        com: 'Level5',
        slot: 'level5'
      }]
    }
  }
}
</script>

<style lang="scss">
</style>
