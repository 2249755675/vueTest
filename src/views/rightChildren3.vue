<template>
  <div class="wrap">
    <div class="top">头部3</div>
    <div class="content">内容3</div>
    <div class="foot">尾部3</div>
  </div>
</template>

<script>
export default {
  name: "rightChildren3",
  created() {
    console.log('走进了children3')
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
