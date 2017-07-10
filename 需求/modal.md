```html
<d-modal :icon="icon" title="title" :show="true" @close="modalCloseHandler" @mainBtnClick="mainBtnClickHandler" mainBtnText="save" closeBtnText="close">
  <div>
    <p>content</p>
  </div>
</d-modal>
```

额外功能点：

* props: animation-in/-out -- fade/fade-down/...
