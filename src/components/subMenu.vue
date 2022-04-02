<template>
  <!--左侧菜单栏递归组件-->
  <div class="wrap">
    <template v-for="item in list">
      <el-submenu :index="item.sortedId" v-if="item.resourceType==2&&item.childList&&item.childList.length">
        <template slot="title">{{item.menuName}}</template>
        <subMenu :list="item.childList"></subMenu>
      </el-submenu>
      <el-menu-item :index="item.sortedId" v-if="item.resourceType == 1">
        <template slot="title">{{item.menuName}}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import subMenu from './subMenu.vue'
export default {
  name: "subMenu",
  components:{subMenu},
  props:{
    list:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  ::v-deep .el-menu-vertical-demo,.el-menu{
    width:20%;
    .el-submenu__title,.el-menu-item{
      text-align: left;
    }
  }
}
</style>
