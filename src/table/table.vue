<template>
  <div>
    <div class="hidden-columns">
      <slot></slot>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="column && column.prop || index">{{column.name || column.prop || index}}</th>
        </tr>
      </thead>
        <d-table-body :columns="columns" :data="data" :uniqueKey="uniqueKey" :checkAble="checkAble" :expandTemplate="expandTemplate"></d-table-body>
    </table>
  </div>
</template>
<script>
import DTableBody from './table-body.vue'
export default {
  name: 'd-table',
  data() {
    return {
      // 每行column 期望格式： { prop: 'prop', map: {}, name: '' }
      columns: [],
      expandTemplate: null
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    uniqueKey: {
      type: String
    },
    checkAble: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addColumn(column) {
      this.columns.push(column)
    },
    setExpandTemplate(expandTemplate) {
      this.expandTemplate = expandTemplate
    }
  },
  components: {
    DTableBody
  }
  // mounted() {
  //   const prop = this.columns[0].prop
  //   console.log('prop:', prop)
  //   this.columns[0].renderCell({ prop })
  // }
}
</script>

