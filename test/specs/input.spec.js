import Vue from 'vue'
import { createTest, createVue, destroyVM } from '../util'
import DInput from '../../src/input'

describe('Input 组件', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('测试创建及默认值', () => {
    vm = createTest(DInput, {
      
    }, true)
    expect(vm.$el.querySelector('input').type).to.equal('text')
    expect(vm.$el.querySelector('input').placeholder).to.equal('')
    // expect(vm.$el.classList.contains('el-alert--info')).to.true;
  });

  it('测试 prop: type', () => {
    let type = 'password'
    vm = createTest(DInput, {
      type
    }, true)
    expect(vm.$el.querySelector('input').type).to.equal(type)
  });

  it('测试 prop: placeholder', () => {
    let placeholder = 'placeholder';
    vm = createTest(DInput, {
      placeholder
    }, true)
    expect(vm.$el.querySelector('input').placeholder).to.equal(placeholder)
  });

  it('测试 prop: disabled', (done) => {
    let disabled = true;
    vm = createTest(DInput, {
      disabled
    }, true)
    expect(vm.$el.querySelector('input').disabled).to.be.equal(disabled);
    expect(vm.$el.classList.contains('d-input__container_disabled')).to.be.true;
    vm.disabled = false;
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('input').disabled).to.be.equal(!disabled)
      done()
    })
  });

  it('测试 getSuggestions 调用', (done) => {
    let suggestions = [true]
    let getSuggestions = function() {
      return new Promise((resolve, reject) => {
        resolve(suggestions)
      })
    }
    vm = createTest(DInput, {
      getSuggestions
    }, true)
    vm.changeHandler()
    vm.$nextTick(() => {
      expect(vm.suggestions).to.be.equal(suggestions)
      done()
    })
  })


});