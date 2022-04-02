<template>
  <!--左侧菜单栏递归组件-->
  <div class="wrap">
    <template v-for="item in list">
      <el-submenu :index="item.path" v-if="item.resourceType==2&&item.childList&&item.childList.length">
        <template slot="title">{{item.menuName}}</template>
        <subMenuRoute :list="item.childList"></subMenuRoute>
      </el-submenu>
      <!--外网链接用iframe跳转-->
      <a target="appMainIframe" v-if="item.isLink" @click="menuClick(item)">
        <el-menu-item v-if="item.resourceType == 1">
          <template slot="title">{{item.menuName}}</template>
        </el-menu-item>
      </a>
      <!--路径用path路由跳转-->
      <el-menu-item :index="item.path" v-if="item.resourceType==1 && !item.isLink" @click="menuClick(item)">
        <template slot="title">{{item.menuName}}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "subMenuRoute",
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
  },
  methods:{
    menuClick(data){
      console.log(data,'菜单点击---------')
      if(data.isLink){//外网链接，用iframe跳转
        store.commit('setLink',data)
      }else{
        store.commit('setLink',data)
      }
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
