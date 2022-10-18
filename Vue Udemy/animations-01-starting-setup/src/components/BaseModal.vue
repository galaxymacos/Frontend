<template>
  <div class="backdrop" @click="$emit('close')" v-if='on'></div>
  <transition>
    <dialog open v-if='on'>
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['on'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.v-enter-active {
  animation: modal 1s ease-out;
}

.v-leave-active {
  animation: modal 1s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0
  }
  to {
    opacity: 100
  }
}
</style>
