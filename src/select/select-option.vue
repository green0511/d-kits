<template>
  <span></span>
</template>
<script>
export default {
  name: 'DSelectOption',
  data() {
    return {}
  },
  props: {
    value: Object
  },
  created() {
    const option = {
      value: this.value,
      template: this.$slots.default
    }
    this.$parent.addOptions(option)
  }
}
</script>
