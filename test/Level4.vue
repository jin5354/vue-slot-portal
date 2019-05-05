<template>
  <div class="level4">
    <Level5></Level5>
  </div>
</template>

<script>
import Level5 from './Level5.vue'
import slotPortal from '../dist/index'

export default {
  components: {
    Level5: slotPortal.SlotInjector(Level5)
  }
}
</script>

<style></style>
