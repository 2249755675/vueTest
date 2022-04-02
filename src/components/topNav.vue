<template>
  <div class="wrap">
    <div class="topHeader">
      <div class="topHeader-left">
<!--        <img src="../assets/my.jpg" :style="{width:imgWidth+'px'}" alt="">-->
        <div class="top-left">小区</div>
      </div>
      <div class="top-right">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
  props:{
    imgWidth:{
      type:Number,
      default:null
    }
  },
  data(){
    return{

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
  .topHeader{
    width:100%;
    height:50px;
    border-bottom: 1px solid #999;
    display: flex;
    box-sizing: border-box;
    padding:0 15px;
    justify-content: space-between;
    align-items: center;
    padding-left:0;
    img{
      width:100px;
      height:50px;
      margin-right:15px;
    }
    .topHeader-left{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
