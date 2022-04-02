<template>
  <div class="wrap">
    <div class="top">头部1</div>
    <div class="content">内容1</div>
    <div class="foot">尾部1</div>
  </div>
</template>

<script>
export default {
  name: "rightChildren1",
  created() {
    console.log('走进了children1')
  }
}
</script>

<style scoped lang="scss">
.wrap{
  background:#ccc;
  .top{
    width:100%;
    height:20%;
    margin-bottom: 20px;
  }
  .foot{
    width:100%;
    height:20%;
    margin-top:20px;
  }
}
</style>
