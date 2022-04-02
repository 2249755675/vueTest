<template>
  <div class="wrap">
    <div class="wrap-content">
      <div class="lay-left">
        <img class="logo" src="../assets/logo.png" alt="">
<!--        <img class="logo" src="https://cdns4.91hilife.com/default/2022/03/29/488c38cc-37e9-4138-8d3c-a67022953f7a.jpg" alt="">-->
        <!--左侧菜单栏-->
        <el-menu
            class="own-menu"
            default-active="2"
            :unique-opened="true"
            text-color="#8b949d"
            active-text-color="white"
            background-color="#111"
            :router="true"
            @open="handleOpen"
            @close="handleClose">
          <template v-for="item in menuList">
            <el-submenu :index="item.path" v-if="item.resourceType==2&&item.childList&&item.childList.length">
              <template slot="title">{{item.menuName}}</template>
              <subMenuRoute :list="item.childList"></subMenuRoute>
            </el-submenu>
            <!--外网链接用iframe跳转-->
            <a target="appMainIframe" v-if="item.isLink" @click="menuClick(item)">
              <el-menu-item v-if="item.resourceType==1">
                <template slot="title">{{item.menuName}}</template>
              </el-menu-item>
            </a>
            <!--路径用path路由跳转-->
            <el-menu-item :index="item.path" v-if="item.resourceType==1 && !item.isLink" @click="menuClick(item)">
              <template slot="title">{{item.menuName}}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="lay-right">
        <!--顶部导航栏-->
        <topNav class="topNav" :imgWidth="imgWidth"></topNav>
        <!--右侧实际内容区-->
        <div class="lay-right-content">
          <router-view v-if="!isLink"></router-view>
          <iframe class="appMainIframe" v-else width="100%" :height="clientHeight" name="appMainIframe" frameborder="0" :src="iframeUrl"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subMenuRoute from "@/components/subMenuRoute";
import topNav from "@/components/topNav";
import {mapGetters} from "vuex";

export default {
  name: "sideMenu",
  components:{subMenuRoute,topNav},
  data(){
    return{
      menuList:[],
      imgWidth:0,
      clientHeight:0
    }
  },
  computed:{
    ...mapGetters(['isLink','iframeUrl']),
  },
  mounted() {
    this.$nextTick(()=>{
      this.imgWidth = document.querySelector('.el-submenu').offsetWidth;
      this.clientHeight = document.body.clientHeight;
    })
    this.getMenu();
    this.$store.dispatch('actionsGetTime',{name:'zhangsan',age:13})
  },
  methods:{
    getMenu(){
      let res = {"code":200,"msg":"请求成功","data":[
          {"id":1,"sortedId":1,"menuName":"数组方法","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/arrayMethods'},
          {"id":2,"sortedId":2,"menuName":"关于页面","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/about'},
          {"id":3,"sortedId":3,"menuName":"省市区","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/addressList'},
          {"id":4,"sortedId":4,"menuName":"全选","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/allCheck'},
          // {"id":5,"sortedId":5,"menuName":"倒计时","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/daojishi'},
          {"id":6,"sortedId":6,"menuName":"性能","childList":[
              {"id":'',"sortedId":'',"menuName":"防抖节流","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/perfomence1/debounceThrottle1'},
              {"id":'',"sortedId":'',"menuName":"性能防抖节流","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/perfomence1/debounceThrottle2'},
            ],"linkUrl":"","resourceType":2,path:''},
          {"id":7,"sortedId":7,"menuName":"拖拽","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/dragTest'},
          {"id":8,"sortedId":8,"menuName":"excel表格","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/excel'},
          {"id":9,"sortedId":9,"menuName":"父子组件","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/fatherAndSon'},
          {"id":10,"sortedId":10,"menuName":"原home页","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/Home'},
          {"id":11,"sortedId":11,"menuName":"滑动","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/huadong'},
          {"id":12,"sortedId":12,"menuName":"jsx","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/jsx'},
          {"id":13,"sortedId":13,"menuName":"layout","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/layout'},
          {"id":14,"sortedId":14,"menuName":"lazyTree","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/lazyTree'},
          {"id":15,"sortedId":15,"menuName":"菜单","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/leftAndRight'},
          {"id":16,"sortedId":16,"menuName":"锚点","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/maodian'},
          {"id":17,"sortedId":17,"menuName":"地图","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/map'},
          {"id":18,"sortedId":18,"menuName":"对象处理","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/objectHandler'},
          {"id":19,"sortedId":19,"menuName":"pageA","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/pageA'},
          {"id":20,"sortedId":20,"menuName":"pageB","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/pageB'},
          {"id":21,"sortedId":21,"menuName":"pageC","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/pageC'},
          // {"id":22,"sortedId":22,"menuName":"性能防抖节流","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/perfomence'},
          {"id":23,"sortedId":23,"menuName":"海报","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/poster'},
          {"id":24,"sortedId":24,"menuName":"renderContent","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/renderContent'},
          {"id":25,"sortedId":25,"menuName":"rightChildren1","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/rightChildren1'},
          {"id":26,"sortedId":26,"menuName":"rightChildren2","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/rightChildren2'},
          {"id":27,"sortedId":27,"menuName":"rightChildren3","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/rightChildren3'},
          {"id":28,"sortedId":28,"menuName":"下拉框分页","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/selectScroll'},
          {"id":29,"sortedId":29,"menuName":"左侧菜单栏","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/sideMenu'},
          {"id":30,"sortedId":30,"menuName":"粘性布局","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/sticky'},
          {"id":31,"sortedId":31,"menuName":"transeTree","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/transeTree'},
          {"id":32,"sortedId":32,"menuName":"过渡样式","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/transition'},
          {"id":33,"sortedId":33,"menuName":"tree","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/tree'},
          {"id":34,"sortedId":34,"menuName":"xdoc","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/xdoc'},
          {"id":35,"sortedId":35,"menuName":"倒计时","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/daojishi'},
          {"id":36,"sortedId":36,"menuName":"嵌套路由children","childList":[
              {"id":'',"sortedId":'',"menuName":"secondPage","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/secondPage'},
              {"id":'',"sortedId":'',"menuName":"children1","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/secondPage/secondPageOne'},
              {"id":'',"sortedId":'',"menuName":"children2","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/secondPage/secondPageTwo'},
            ],"linkUrl":"","resourceType":2,path:''},
          {"id":37,"sortedId":37,"menuName":"iframe链接","childList":[],"linkUrl":"","resourceType":1,path:'https://blog.csdn.net/qq_24992475/article/details/112244883',isLink:true},
          // {"id":37,"sortedId":37,"menuName":"iframe链接","childList":[],"linkUrl":"","resourceType":1,path:'https://test.91hiwork.com/analysisacceptance/index#/propertyPerformance',isLink:true},
          {"id":38,"sortedId":38,"menuName":"0-1000000","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/regexp'},
          {"id":39,"sortedId":39,"menuName":"表单校验","childList":[],"linkUrl":"","resourceType":1,path:'/homeManage/formValidate'},
        ]
      }
      if(res.code == 200){
        this.menuList = res.data;
        this.menuList.forEach((item)=>{
          item.sortedId = String(item.sortedId);
          if(item.childList){
            this.changeString(item.childList,'+++')
          }
        })
        this.menuList = res.data;
      }
      console.log(this.menuList,'------')
    },
    changeString(data){
      console.log(data,'data------>>>>>>>')
      if(data){
        data.forEach((item)=>{
          item.sortedId = String(item.sortedId);
          if(item.childList){
            this.changeString(item.childList)
          }
        })
      }
      console.log(this.menuList,'000000+++++++++')
    },
    menuClick(data){
      console.log(data,'菜单点击')
      if(data.isLink){//外网链接，用a标签iframe跳转
        this.$store.commit('setLink',data)
      }else{
        this.$store.commit('setLink',data)
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  ::v-deep .el-menu-vertical-demo,.el-menu{
    width:20%;
    height:calc(100vh);
    overflow: scroll;
    .el-submenu__title,.el-menu-item{
      text-align: left;
    }
  }
  .own-menu{
    width:260px;
    text-align: left;
  }
  .lay-right{
    width:100%;
    height:100vh;
    overflow: scroll;
    .topNav{
      text-indent: 15px;
      ::v-deep .topHeader{
        border:none;
      }
    }
    .lay-right-content{
      box-sizing: border-box;
      padding:20px 20px;
      background:#f1f1f1;
      overflow-x:hidden;
      .appMainIframe{
      }
    }
  }
  .wrap-content{
    display: flex;
    .logo{
      width:100%;
      height:50px;
      background: transparent;
      background-color: black;
      vertical-align: bottom;
    }
  }
}
</style>
