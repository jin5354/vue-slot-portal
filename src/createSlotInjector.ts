import Vue, {ComponentOptions, VNodeData} from 'vue'


/**
 * createSlotInjector
 *
 * create hoc SlotInjector
 *
 * @export
 * @param {Vue} store
 * @returns {Function}
 */
export default function createSlotInjector(store: Vue): Function {
  return (WrappedComponent: ComponentOptions<Vue>): ComponentOptions<Vue> => {
    return {
      props: WrappedComponent.props,
      render(h) {

        // distribute target slot
        const slotFunctions: VNodeData['scopedSlots'] = {}
        for(let slotName in store.$data.slotRoutes) {
          if(store.$data.slotRoutes[slotName] === WrappedComponent.name && store.$data.slotFunctions[slotName] !== undefined) {
            slotFunctions[slotName] = store.$data.slotFunctions[slotName]
          }
        }

        return h(WrappedComponent, {
          props: this.$props,
          on: this.$listeners,
          attrs: this.$attrs,
          scopedSlots: slotFunctions
        })
      }
    }
  }
}