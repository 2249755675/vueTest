<template>
  <div class="wrap">
    这里是secondPage页面
    <router-link to="/homeManage/secondPage/secondPageOne">children1</router-link>
    <router-link to="/homeManage/secondPage/secondPageTwo">children2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "secondPage"
}
</script>

<style lang="scss" scoped>
.wrap{

}
</style>
