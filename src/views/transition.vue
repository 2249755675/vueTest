<template>
  <div class="wrap">
    <div class="btn" @click="btnClick">点击</div>
    <!--手动添加过渡-->
    <transition name="test">
      <div class="content" v-if="show"></div>
    </transition>
    <!--引入第三方样式，类名配置过渡-->
    <transition name="test2" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <div class="content" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "transitionTest",
  data(){
    return{
      show:false
    }
  },
  methods:{
    btnClick(){
      this.show = !this.show;
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  //手动添加过渡样式
  .test-enter-active, .test-leave-active{
    transition:opacity 1s;
  }
  .test-enter, .test-leave-to{
    opacity:0;
  }

  .content{
    width:50px;
    height:50px;
    background:orange;
    margin-bottom:50px;
  }
}
</style>
