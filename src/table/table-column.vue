<script>
export default {
  name: 'DTableColumn',
  props: {
    prop: {
      type: String,
      required: true
    },
    name: String,
    map: Object
  },
  created() {
    const { prop, name, map } = this
    this.$parent.addColumn({prop, name, map})
  }
}
</script>

