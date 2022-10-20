<template>
  <router-view v-slot='slotProps'>
    <transition name='fade-button' mode='out-in'>
      <component :is='slotProps.Component'></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  components: {
    // UsersList
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      userIsVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible
    },
    beforeEnter(el){
      console.log("Before element enter the HTML document")
      console.log(el)
      el.style.opacity=0
    },
    enter(el, done){
      console.log("When element enter the HTML document")
      let round = 1
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round += 1
        if(round > 100){
          clearInterval(this.enterInterval)
          done()
        }
      }, 20)
    },
    afterEnter(){
      console.log("After element enter the HTML document")
    },
    beforeLeave(){
      console.log("Before element leave the HTML document")
    },
    leave(el, done){
      let opacity = el.style.opacity
      let round = 0
      this.leaveInterval = setInterval(() => {
        el.style.opacity -= 0.02 * opacity
        round+=1
        if(round >= 50){
          done()
          clearInterval(this.leaveInterval)
        }
      }, 20)
    },
    enterCancelled(){
      clearInterval(this.enterInterval)
    },
    leaveCancelled(){
      clearInterval(this.leaveInterval)
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}


.animate {  /* animate rectangle */
  animation: slide-left 0.3s ease-out forwards; /* change to the state value in a regulated duration */
}

@keyframes slide-left { /* set up some states */
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(120px) scale(1.1);
  }

  100% {
    transform: translateX(150px) scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-button-enter-active {
  animation: fade-in 0.3s ease-out;
}

.fade-button-leave-active {
  animation: fade-in 0.3s ease-in reverse;
}

.route-enter-active {
  animation: slide-left 0.3s ease-out forwards;
}

.route-leave-active {
  animation: slide-right 0.3s ease-in reverse;
}
</style>
