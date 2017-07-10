```html
<d-select placeholder="select one thing" v-model="selectedThing">
  <d-select-option v-for="option in options" :key="option.id" :value="option">
    <!--slot for template-->
    <span>{{option.text}}</span>
  </d-select-option>
</d-select>
```
```js
export default {
  data() {
    return {
      selectedThing: null,
      options: [
        { id: 1, text: 'Kevin' },
        { id: 2, text: 'Allen' },
        { id: 3, text: 'Curry' },
        { id: 4, text: 'Green' },
      ],

    }
  }
}
```