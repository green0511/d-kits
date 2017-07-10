import Vue from 'vue'
import { createTest, createVue, destroyVM } from '../util'
import { DSelect, DSelectOption } from '../../src'

describe('Select 组件', () => {
  // afterEach(() => {
  //   destroyVM(vm)
  // })

  const options = [
    { id: 1, text: 'Kevin' },
    { id: 2, text: 'Allen' },
    { id: 3, text: 'Curry' },
    { id: 4, text: 'Green' }
  ]

  let vm, listEls, panelEl

  before((done) => {
    vm = createVue({
      template: `
        <d-select placeholder="select one thing" v-model="selectedThing">
          <d-select-option v-for="option in options" :key="option.id" :value="option">
            <span>{{option.text}}</span>
          </d-select-option>
        </d-select>
      `,
      data() {
        return {
          selectedThing: null,
          options,
        }
      }
    })
    vm.$nextTick(() => {
      listEls = vm.$el.querySelectorAll('li')
      panelEl = vm.$el.querySelector('.d-select-panel')
      done()
    })
  })

  it('初始时 options 列表不显示', done => {
    vm.$nextTick(() => {
      expect(listEls.length).to.equal(0)
      // const str = [].slice.call(listEls).map(el => el.querySelector('span').textContent).join('')
      // expect(str).to.equals(options.map(option => option.text).join(''))
      done();
    })
  });

  it('点击后显示 options 列表', done => {
    panelEl.click()
    vm.$nextTick(() => {
      listEls = vm.$el.querySelectorAll('li')
      // 验证长度
      expect(listEls.length).to.equal(options.length)
      // 验证内容
      const str = [].slice.call(listEls).map(el => el.querySelector('span').textContent).join('')
      expect(str).to.equals(options.map(option => option.text).join(''))
      done();
    })
  });

  it('测试 options 列表的点击事件', (done) => {
    const testIndex = 0
    const testLi = listEls[testIndex]
    testLi.click()
    vm.$nextTick(() => {
      expect(vm.selectedThing).to.equals(options[testIndex])
      done()
    })
  })

  it('再次点击应关闭 options 列表', (done) => {
    panelEl.click()
    vm.$nextTick(() => {
      listEls = vm.$el.querySelectorAll('li')
      // 验证长度
      expect(listEls.length).to.equal(0)
      done()
    })
  })

  // it('测试双向绑定', (done) => {
  //   const testIndex = 1
  //   vm.selectedThing = options[testIndex]
  // })
})