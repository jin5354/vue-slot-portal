import Vue from 'vue'

export default function SlotReceiver(store) {
  return {
    name: 'SlotReceiver',
    render(h) {
      // submit slot functions to store
      for(let key in this.$scopedSlots) {
        if(store.$data.slotFunctions[key] === undefined) {
          Vue.set(store.$data.slotFunctions, key, this.$scopedSlots[key])
        }
      }
      return h('div')
    }
  }
}