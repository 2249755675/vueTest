<template>
  <div class="wrap">
    <div class="header-top"></div>
    <div class="content-title">标题</div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "sticky"
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
  display: block;
  height:2000px;
  .header-top{
    width:100%;
    height:100px;
  }
  .content-title{
    width:100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    background:orange;
    position: -webkit-sticky;
    position:sticky;
    top:0;
  }
  .content{
    //height:2000px;
  }
}
</style>
