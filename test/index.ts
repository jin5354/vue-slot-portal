import Vue from 'vue'
import Index from './Index.vue'
import slotPortal from '../dist/index'

const slotRoutes = {
  level5: 'Level5'
}

Vue.use(slotPortal, slotRoutes)

new Vue({
  template: `<Index></Index>`,
  components: {
    Index
  }
}).$mount('#app')