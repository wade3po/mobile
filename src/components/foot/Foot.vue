<template>
  <div class="foot-wrap">
    <ul class="content">
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/user">我的</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
.foot-wrap{
  width: 100%;
  height: 80px;
  .content{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background: #fff;
  }
}
  .router-link-active{
    color: #FF4D4F;
  }
</style>