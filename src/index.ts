import Vue from 'vue'
import SlotReceiver from './SlotReceiver'
import SlotInjector from './SlotInjector'

// use vue instance to store slotRoute infos
// for observable
const store = new Vue({
  data() {
    return {
      slotRoutes: {},
      slotFunctions: {}
    }
  }
})

const install = (Vue, slotRoutes = {}) => {
  store.$data.slotRoutes = slotRoutes
  const slotReceiverCom = SlotReceiver(store)
  Vue.component('SlotReceiver', slotReceiverCom)
}

export default {
  install,
  SlotInjector: SlotInjector(store)
}