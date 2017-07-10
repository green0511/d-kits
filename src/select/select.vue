<script>
export default {
  name: 'DSelect',
  data() {
    return {
      data: null,
      showOptions: false,
      options: []
    }
  },
  props: {
    value: Object,
    placeholder: {
      type: String,
      default: '请选择'
    },
  },
  watch: {
    value(val) {
      if([].slice.call(this.options).filter(option => option.value === val).length) {
        this.data = val
      }
    }
  },
  methods: {
    changeData(value) {
      this.data = value
      this.$emit('input', value)
    },
    addOptions(option) {
      this.options.push(option)
    },
    clickOptionHandler(option) {
      return ($event) => {
        this.changeData(option.value)
      }
    },
    toggleOptionsState() {
      this.showOptions = !this.showOptions
    }
  },
  render() {
    return (
      <div class="d-select">
        <div class="d-select-panel" onClick={this.toggleOptionsState}>
          <input placeholder={this.placeholder} type="text" readonly autocomplete="off"></input>
          <button>down</button>
        </div>
        {
          this.showOptions && <ul class="d-select-options">
            { 
              this.options.map(option => {
                return (
                  <li class="d-select-option" onClick={this.clickOptionHandler(option)}>
                    { option.template }
                  </li>
                )
              })
            }
          </ul>
        }
        <div>{ this.$slots.default }</div>
      </div>
    )
  }
}
</script>
