import Vue, {ComponentOptions, PropOptions} from 'vue'
import createSlotReceiver from './createSlotReceiver'
import createSlotInjector from './createSlotInjector'

export interface slotRoutes {
  [slotName: string]: string
}

// use vue instance to store slotRoute infos
// for observable
const store: Vue = new Vue({
  data() {
    return {
      slotRoutes: {},
      slotFunctions: {}
    }
  }
})

const SlotReceiver: ComponentOptions<Vue> = createSlotReceiver(store)
const SlotInjector: ComponentOptions<Vue> = createSlotInjector(store)

const install = (Vue, slotRoutes: slotRoutes = {}): void => {
  store.$data.slotRoutes = slotRoutes
  Vue.component('SlotReceiver', SlotReceiver)
}

export default {
  install,
  SlotInjector,
  SlotReceiver
}