<template>
  <div :class="{ 'd-input-componen__container': true, 'd-input__container_disabled': disabled }">
    <input class="d-input__input" :type="type" :placeholder="placeholder" :disabled="disabled" @change="changeHandler" :value="value"></input>
    <i :class="['d-icon', icon ? `d-icon__${icon}` : '']"></i>
    <ul class="d-input__suggestion-list" v-if="suggestions && suggestions.length">
      <li class="d-input__suggestion-item" v-for="(item, index) in suggestions" :key="index">{{item.text ? item.text : item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DInput',
  data() {
    return {
      value: null,
      suggestions: []
    }
  },
  props: {
    'type': {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'textarea', 'password'].indexOf(value) > -1
      }
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean
    },
    getSuggestions: {
      type: Function
    }
  },
  methods: {
    changeHandler($event) {
      // 异步加载 搜索建议
      // getSuggestions 应当是一个 promise
      // 返回 suggestions 应当是一个数组，格式可能有如下两种：
      //   1. ['建议1', '建议2']
      //   2. [{text: '建议1', value: 1}, {text: '建议2', value: 2}] 
      if (this.getSuggestions) {
        this.getSuggestions().then(suggestions => this.suggestions = suggestions)
      }
    }
  }
}
</script>
