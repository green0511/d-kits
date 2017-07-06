<script>
export default {
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: [],
      required: true
    },
    uniqueKey: {
      type: String,
      default: null
    },
    checkAble: {
      type: Boolean,
      default: false
    },
    expandTemplate: Object
  },
  created() {
  },
  methods: {
    checkboxChangeHandler(e) {

    }
  },
  render(h) {
    return (
      <tbody>
      {
        this.data.map((item, index) => {
          return (
            [
              <tr key={this.uniqueKey ? this.uniqueKey : index}>
                {
                  this.checkAble && (
                    <td>
                      <input type="checkbox" onChange={this.checkboxChangeHandler} />
                    </td>
                  )
                }
                { 
                  this.columns.map(column => (
                    <td>
                      { column.renderCell({data: item, prop: column.prop}) }
                    </td>
                  ))
                }
              </tr>,
              this.expandTemplate ? (
                this.expandTemplate({data: item})
              ) : ''
            ]
          )
        })
      }
      </tbody>
    )
  }
}
</script>
