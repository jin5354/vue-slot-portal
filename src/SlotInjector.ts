// currying

export default function SlotInjector(store) {
  return (WrappedComponent) => {
    return {
      props: WrappedComponent.props,
      render(h) {

        // distribute target slot
        const slotFunctions = {}
        for(let slotName in store.slotRoutes) {
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