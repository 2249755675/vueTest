<template>
  <div class="wrap">
    <div class="topHeader">
      <div class="topHeader-left">
<!--        <img src="../assets/my.jpg" :style="{width:imgWidth+'px'}" alt="">-->
        <div class="top-left">小区</div>
      </div>
      <div class="top-right">
        <el-dropdown trigger="click" @command="changeSelect">
          <span class="el-dropdown-link">
            退出<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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

  },
  methods:{
    changeSelect(val){
      console.log(val,'--')
      if(val == 'exit'){//退出
        localStorage.clear();
        this.$router.push({
          path:'/login'
        })
      }
    }
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
    .top-right{
      cursor: pointer;
    }
  }
}
</style>
