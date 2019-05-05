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

const slotReceiverCom = SlotReceiver(store)

const install = (Vue, slotRoutes = {}) => {
  store.$data.slotRoutes = slotRoutes
  Vue.component('SlotReceiver', slotReceiverCom)
}

export default {
  install,
  SlotInjector: SlotInjector(store),
  slotReceiverCom
}