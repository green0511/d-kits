<template>
  <div></div>
</template>
<script>
export default {
  name: 'd-table-column',
  props: {
    prop: {
      type: String
    },
    name: String,
    map: Object,
    type: String
  },
  created() {
    const { prop, name, map } = this
    const parent = this.$parent
    const self = this
    if (this.type == 'expand') {
      const expandTemplate = (data) => self.$scopedSlots.default ? self.$scopedSlots.default(data) : ''
      parent.setExpandTemplate(expandTemplate)
    }
    const renderCell = (data) => {
      return self.$scopedSlots.default ? self.$scopedSlots.default(data) : self.renderDefaultTemplate(data)
    }
    parent.addColumn({prop, name, map, renderCell})
  },
  methods: {
    renderDefaultTemplate({prop, name, map, data}) {
      return (
        <div>{data[prop]}</div>
      )
    }
  }
}
</script>

