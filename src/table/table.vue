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
      <tbody>
        <tr v-for="(item, dataIndex) in data" :key="key ? item[key] : dataIndex">
          <td v-for="(column, columnIndex) in columns" :key="column && column.prop || columnIndex">{{column.map ? column.map[data[column.prop]] : item[column.prop]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'd-table',
  data() {
    return {
      // 每行column 期望格式： { prop: 'prop', map: {}, name: '' }
      columns: []
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    uniqueKey: {
      type: String
    }
  },
  methods: {
    addColumn(column) {
      this.columns.push(column)
    }
  }
}
</script>

