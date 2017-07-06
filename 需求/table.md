## 数据格式

``` js
[
  { id: 1, name: 'Toy Story', release: '1995-11-22', director: 'John Lasseter', runtime: 80 },
  { id: 2, name: 'A Bug\'s Life', release: '1998-11-25', director: 'John Lasseter', runtime: 95 },
  { id: 3, name: 'Toy Story 2', release: '1999-11-24', director: 'John Lasseter', runtime: 92 },
  { id: 4, name: 'Monsters, Inc.', release: '2001-11-2', director: 'Peter Docter', runtime: 92 },
  { id: 5, name: 'Finding Nemo', release: '2003-5-30', director: 'Andrew Stanton', runtime: 100 }
]
```

## 调用方法

``` html
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
```

## TODO

* 自定义单元格          done
* checkbox            done
* 单行展开              done