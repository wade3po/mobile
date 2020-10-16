<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  .router-view {
    width: 100%;
    height: 100%;
    transition: all 1s ease;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(100%, 0 ,0);
  }
  .slide-left-enter-active,
  .slide-left-enter-to{
    
  }
</style>
