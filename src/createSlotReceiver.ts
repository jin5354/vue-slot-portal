import Vue, {ComponentOptions} from 'vue'

/**
 * createSlotReceiver
 *
 * @export
 * @param {Vue} store
 * @returns {ComponentOptions<Vue>}
 */
export default function createSlotReceiver(store: Vue): ComponentOptions<Vue> {
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