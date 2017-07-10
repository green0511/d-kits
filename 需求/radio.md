```html
<d-radio v-model="gender">
  <d-radio-option v-for="option in options" :value="option.value">{{ option.text }}</d-radio-option>
</d-radio>

<d-radio v-model="gender">
  <d-radio-button v-for="option in options" :value="option.value">{{ option.text }}</d-radio-button>
</d-radio>
```

```js
gender: 0,
options: [
  { value: 0, text: 'female' },
  { value: 1, text: 'male' }
]
```