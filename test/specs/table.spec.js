import { createVue, triggerEvent, destroyVM, createElm } from '../util';
import Vue from 'vue'
const getTestData = function() {
  return [
    { id: 1, name: 'Toy Story', release: '1995-11-22', director: 'John Lasseter', runtime: 80 },
    { id: 2, name: 'A Bug\'s Life', release: '1998-11-25', director: 'John Lasseter', runtime: 95 },
    { id: 3, name: 'Toy Story 2', release: '1999-11-24', director: 'John Lasseter', runtime: 92 },
    { id: 4, name: 'Monsters, Inc.', release: '2001-11-2', director: 'Peter Docter', runtime: 92 },
    { id: 5, name: 'Finding Nemo', release: '2003-5-30', director: 'Andrew Stanton', runtime: 100 }
  ];
};

let testArr = []

getTestData().forEach(data => {
  Object.keys(data).forEach(key => testArr.push(data[key]))
})

describe('Table 组件', () => {
  describe('测试数据显示', () => {

    const vm = createVue({
      template: `
        <d-table :data="testData">
          <d-table-column prop="id" name="编号">
          </d-table-column>
          <d-table-column prop="name" name="姓名">
          </d-table-column>
          <d-table-column prop="release" name="发行日">
          </d-table-column>
          <d-table-column prop="director" name="导演">
          </d-table-column>
          <d-table-column prop="runtime" name="时长">
          </d-table-column>
        </d-table>
      `,
      data() {
        return {
          testData: []
        }
      },
      created() {
        this.testData = getTestData()
      }
    })

    it('测试表头数据', done => {
      // 在状态改变后和断言 DOM 更新前等待一刻
      vm.$nextTick(() => {
        // console.log(vm.$el)
        const ths = [].slice.call(vm.$el.querySelectorAll('thead th'))
        
        expect(ths.map(node => node.textContent).filter(o => o)).to.eql(['编号', '姓名', '发行日', '导演', '时长'])
        done();
      })
    });


    it('测试数据量', () => {
      expect(vm.$el.querySelectorAll('tbody tr')).to.length(getTestData().length);
    });

    it('测试数据内容', () => {
      console.log(vm.$el)
      const cells = [].slice.call(vm.$el.querySelectorAll('tbody td div'))
        .map(node => node.textContent);
      expect(cells.join('')).to.eql(testArr.join(''));
    });
  })
})

