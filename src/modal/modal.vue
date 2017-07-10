<template>
  <transition name="modal-fade-down">
    <div class="d-modal" v-if="show">
      <div class="d-modal-header">
        <h5 class="d-modal-header__text">{{title}}</h5>
        <!-- TODO 关闭的icon -->
        <button class="d-modal-header__btn">X</button>
      </div>
      <div class="d-modal-body">
        <slot></slot>
      </div>
      <div class="d-modal-footer">
        <button class="d-modal-footer__close-btn">{{closeBtnText || 'close'}}</button>
        <button class="d-modal-footer__save-btn">{{mainBtnText || 'save'}}</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'DModal',
  props: {
    // 显示的状态
    show: {
      type: Boolean,
      default: false
    },
    // 左上角图标
    icon: String,
    // 弹窗标题
    title: String,
    // 主按钮文字
    mainBtnText: String,
    // 次按钮/关闭按钮文字
    closeBtnText: String
  }
}
</script>
