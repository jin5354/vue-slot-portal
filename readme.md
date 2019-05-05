# vue-slot-portal

Vue plugin for across-component slot distribution.

![sample](https://user-images.githubusercontent.com/6868950/57189626-3a1d4700-6f43-11e9-930c-a52371fe0647.png)

## install

```bash
npm i vue-slot-portal
```

## usage

1. define slot routes (key: slotName, value: componentName)

```javscript
import slotPortal from 'vue-slot-portal'

const slotRoutes = {
  level5: 'Level5'
}

Vue.use(slotPortal, slotRoutes)
```

2. write slot content anywhich component in your project, with SlotReceiver

```html
// write your slot content anywhere as you need
// someComponent.vue

<template>
  <div class="somewhere">
    ...
    <SlotReceiver>
      <!-- 'level5' slot content -->
      <template v-slot:level5="slotProps">
        <div>slot content from Index receiver: {{slotProps.test}}</div>
      </template>
    </SlotReceiver>
  </div>
</template>
```

3. wrap your component who need the slot content with SlotInjector, when you reference this component.

```html
// Level5.vue
<template>
  <div class="level5">
    <slot name="level5" v-bind:test="test">
      default {{test}}
    </slot>
  </div>
</template>
```

```vue
// the component which references Level5
<template>
  <div class="level4">
    <Level5></Level5>
  </div>
</template>

<script>
import Level5 from './Level5.vue'
import slotPortal from 'vue-slot-portal'

export default {
  components: {
    // hoc
    Level5: slotPortal.SlotInjector(Level5)
  }
}
</script>

<style></style>
```

then, the slot content whose name is 'level5' will be transported to the component whose name is 'Level5', according to the slot routes.

## license

MIT