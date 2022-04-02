<template>
  <div class="wrap">
    <div class="content">
      <div class="content-left">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="menuSelect"
            @open="handleOpen"
            @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="leftAndRight/rightChildren1">菜单一</el-menu-item>
              <el-menu-item index="leftAndRight/rightChildren2">菜单二</el-menu-item>
              <el-submenu index="leftAndRight/rightChildren3">
                <template slot="title">菜单三</template>
                <el-menu-item index="leftAndRight/rightChildren3/children">选项1</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftAndRight",
  data(){
    return{
      selectPath:'',//选中菜单的路径
    }
  },
  create(){

  },
  watch:{
    selectPath(n,o){
      this.$router.push('/'+n);
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath,'打开外层菜单--');
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath,'关闭外层菜单--');
    },
    menuSelect(index,path){
      console.log(index,path,'选中的菜单')
      this.selectPath = index;
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  .content{
    display: flex;
    justify-content: space-between;
    .content-left{
      width:40%;
      height:100vh;
      background:white;
    }
    .content-right{
      width:60%;
    }
  }
}
</style>
