<template>
  <div class="wrap">
    <div class="wrap-content">
      <div class="lay-left">
        <img class="logo" src="../assets/logo.png" alt="">
        <!--左侧菜单栏-->
        <el-menu
            class="own-menu"
            default-active="2"
            :unique-opened="true"
            text-color="#8b949d"
            active-text-color="white"
            background-color="#111"
            @open="handleOpen"
            @close="handleClose">
          <template v-for="item in menuList">
            <el-submenu :index="item.sortedId" v-if="item.resourceType==2&&item.childList&&item.childList.length">
              <template slot="title">{{item.menuName}}</template>
              <subMenu :list="item.childList"></subMenu>
            </el-submenu>
            <el-menu-item :index="item.sortedId" v-if="item.resourceType==1">
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
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subMenu from "@/components/subMenu";
import topNav from "@/components/topNav";
export default {
  name: "sideMenu",
  components:{subMenu,topNav},
  data(){
    return{
      menuList:[],
      imgWidth:0
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.imgWidth = document.querySelector('.el-submenu').offsetWidth;
    })
    this.getMenu();
  },
  methods:{
    getMenu(){
      // let res = {"code":200,"msg":"请求成功","data":[{"id":1,"sortedId":10,"menuName":"整体经营业绩","childList":[{"id":14,"sortedId":10,"menuName":"智慧小镇整体经营业绩汇总","childList":[],"linkUrl":"/overallPerformance","resourceType":1},{"id":15,"sortedId":20,"menuName":"智慧小镇经营业绩","childList":[],"linkUrl":"/platformPerformance","resourceType":1},{"id":3,"sortedId":60,"menuName":"物业两算一控","childList":[{"id":18,"sortedId":9,"menuName":"物业整体经营业绩","childList":[],"linkUrl":"/index#/propertyPerformance","resourceType":2},{"id":4,"sortedId":10,"menuName":"小区业绩结算汇报","childList":null,"linkUrl":"/index#/summaryTable","resourceType":1},{"id":5,"sortedId":20,"menuName":"绩效工单管理","childList":null,"linkUrl":"/index#/permormanceMange","resourceType":1},{"id":6,"sortedId":30,"menuName":"工单单价管理","childList":null,"linkUrl":"/index#/positionManagement","resourceType":1},{"id":7,"sortedId":40,"menuName":"自营员工管理","childList":null,"linkUrl":"/index#/employeeSalary","resourceType":1},{"id":23,"sortedId":45,"menuName":"外判公司列表","childList":null,"linkUrl":"/index#/expatriateCompany","resourceType":1},{"id":8,"sortedId":50,"menuName":"外判组织管理","childList":null,"linkUrl":"/index#/companyManagement","resourceType":1},{"id":19,"sortedId":60,"menuName":"收益管理","childList":null,"linkUrl":"/index#/income","resourceType":1},{"id":39,"sortedId":60,"menuName":"工单扣罚审核","childList":null,"linkUrl":"/index#/orderAudit","resourceType":1},{"id":24,"sortedId":70,"menuName":"外判公司补发/补扣","childList":null,"linkUrl":"/index#/patchingPayment","resourceType":1},{"id":25,"sortedId":80,"menuName":"发票信息管理","childList":null,"linkUrl":"/index#/invoiceManagement","resourceType":1},{"id":26,"sortedId":90,"menuName":"工资会签表","childList":null,"linkUrl":"/index#/payroll","resourceType":1},{"id":13,"sortedId":100,"menuName":"结算管理","childList":null,"linkUrl":"/index#/settlementManage","resourceType":1}],"linkUrl":null,"resourceType":2},{"id":40,"sortedId":75,"menuName":"业财对账结算","childList":[{"id":41,"sortedId":10,"menuName":"业财对账","childList":null,"linkUrl":"/reconciliationSettlement#/reconciliation","resourceType":1},{"id":42,"sortedId":20,"menuName":"物业账面利润表","childList":null,"linkUrl":"/reconciliationSettlement#/propertyProfit","resourceType":1},{"id":43,"sortedId":30,"menuName":"社区科技账面利润表","childList":null,"linkUrl":"/reconciliationSettlement#/technologyProfit","resourceType":1}],"linkUrl":"","resourceType":2},{"id":20,"sortedId":80,"menuName":"绩效管理","childList":[{"id":29,"sortedId":30,"menuName":"指标库","childList":null,"linkUrl":"/performanceManagement#/indexLibrary","resourceType":1},{"id":30,"sortedId":40,"menuName":"指标分配","childList":null,"linkUrl":"/performanceManagement#/indexAllocation","resourceType":1},{"id":31,"sortedId":50,"menuName":"目标管理","childList":null,"linkUrl":"/performanceManagement#/targetManagement","resourceType":1},{"id":32,"sortedId":60,"menuName":"流程设置","childList":null,"linkUrl":"/performanceManagement#/setProcess","resourceType":1},{"id":33,"sortedId":70,"menuName":"指标审批","childList":null,"linkUrl":"/performanceManagement#/examinApproval","resourceType":1},{"id":35,"sortedId":80,"menuName":"绩效汇总","childList":null,"linkUrl":"/performanceManagement#/achievementsSummary","resourceType":1}],"linkUrl":"","resourceType":2},{"id":9,"sortedId":90,"menuName":"系统配置","childList":[{"id":10,"sortedId":10,"menuName":"用户管理","childList":null,"linkUrl":"/systemConfig#/userConfig","resourceType":1},{"id":11,"sortedId":20,"menuName":"角色管理","childList":null,"linkUrl":"/systemConfig#/roleConfig","resourceType":1},{"id":28,"sortedId":40,"menuName":"模板管理","childList":null,"linkUrl":"/systemConfig#/templateManage","resourceType":1},{"id":36,"sortedId":90,"menuName":"结算配置","childList":null,"linkUrl":"/performanceManagement#/settleConfig","resourceType":1},{"id":37,"sortedId":100,"menuName":"企业入驻","childList":null,"linkUrl":"/systemConfig#/enterprises","resourceType":1},{"id":27,"sortedId":110,"menuName":"报表导入","childList":null,"linkUrl":"/index#/excelImport","resourceType":1}],"linkUrl":null,"resourceType":2}],"linkUrl":null,"resourceType":2}]}
      let res = {"code":200,"msg":"请求成功","data":
                  [
                    {"id":1,"sortedId":10,"menuName":"整体经营业绩","childList":
                      [
                        {"id":14,"sortedId":10,"menuName":"智慧小镇整体经营业绩汇总","childList":[],"linkUrl":"/overallPerformance","resourceType":1,path:'/arrayMethods'},
                        {"id":15,"sortedId":20,"menuName":"智慧小镇经营业绩","childList":[],"linkUrl":"/platformPerformance","resourceType":1},
                        {"id":3,"sortedId":60,"menuName":"物业两算一控","childList":
                          [
                            {"id":18,"sortedId":9,"menuName":"物业整体经营业绩","childList":[],"linkUrl":"/index#/propertyPerformance","resourceType":2},
                            {"id":4,"sortedId":10,"menuName":"小区业绩结算汇报","childList":null,"linkUrl":"/index#/summaryTable","resourceType":1},
                            {"id":5,"sortedId":20,"menuName":"绩效工单管理","childList":null,"linkUrl":"/index#/permormanceMange","resourceType":1},
                            {"id":6,"sortedId":30,"menuName":"工单单价管理","childList":null,"linkUrl":"/index#/positionManagement","resourceType":1},
                            {"id":7,"sortedId":40,"menuName":"自营员工管理","childList":null,"linkUrl":"/index#/employeeSalary","resourceType":1},
                            {"id":23,"sortedId":45,"menuName":"外判公司列表","childList":null,"linkUrl":"/index#/expatriateCompany","resourceType":1},
                            {"id":8,"sortedId":50,"menuName":"外判组织管理","childList":null,"linkUrl":"/index#/companyManagement","resourceType":1},
                            {"id":19,"sortedId":60,"menuName":"收益管理","childList":null,"linkUrl":"/index#/income","resourceType":1},
                            {"id":39,"sortedId":60,"menuName":"工单扣罚审核","childList":null,"linkUrl":"/index#/orderAudit","resourceType":1},
                            {"id":24,"sortedId":70,"menuName":"外判公司补发/补扣","childList":null,"linkUrl":"/index#/patchingPayment","resourceType":1},
                            {"id":25,"sortedId":80,"menuName":"发票信息管理","childList":null,"linkUrl":"/index#/invoiceManagement","resourceType":1},
                            {"id":26,"sortedId":90,"menuName":"工资会签表","childList":null,"linkUrl":"/index#/payroll","resourceType":1},
                            {"id":13,"sortedId":100,"menuName":"结算管理","childList":null,"linkUrl":"/index#/settlementManage","resourceType":1}
                          ],"linkUrl":null,"resourceType":2},
                        {"id":40,"sortedId":75,"menuName":"业财对账结算","childList":
                          [
                            {"id":41,"sortedId":10,"menuName":"业财对账","childList":null,"linkUrl":"/reconciliationSettlement#/reconciliation","resourceType":1},
                            {"id":42,"sortedId":20,"menuName":"物业账面利润表","childList":null,"linkUrl":"/reconciliationSettlement#/propertyProfit","resourceType":1},
                            {"id":43,"sortedId":30,"menuName":"社区科技账面利润表","childList":null,"linkUrl":"/reconciliationSettlement#/technologyProfit","resourceType":1}
                          ],"linkUrl":"","resourceType":2},
                        {"id":20,"sortedId":80,"menuName":"绩效管理","childList":
                          [
                            {"id":29,"sortedId":30,"menuName":"指标库","childList":null,"linkUrl":"/performanceManagement#/indexLibrary","resourceType":1},
                            {"id":30,"sortedId":40,"menuName":"指标分配","childList":null,"linkUrl":"/performanceManagement#/indexAllocation","resourceType":1},
                            {"id":31,"sortedId":50,"menuName":"目标管理","childList":null,"linkUrl":"/performanceManagement#/targetManagement","resourceType":1},
                            {"id":32,"sortedId":60,"menuName":"流程设置","childList":null,"linkUrl":"/performanceManagement#/setProcess","resourceType":1},
                            {"id":33,"sortedId":70,"menuName":"指标审批","childList":null,"linkUrl":"/performanceManagement#/examinApproval","resourceType":1},
                            {"id":35,"sortedId":80,"menuName":"绩效汇总","childList":null,"linkUrl":"/performanceManagement#/achievementsSummary","resourceType":1}
                          ],"linkUrl":"","resourceType":2},
                        {"id":9,"sortedId":90,"menuName":"系统配置","childList":
                          [
                            {"id":10,"sortedId":10,"menuName":"用户管理","childList":null,"linkUrl":"/systemConfig#/userConfig","resourceType":1},
                            {"id":11,"sortedId":20,"menuName":"角色管理","childList":null,"linkUrl":"/systemConfig#/roleConfig","resourceType":1},
                            {"id":28,"sortedId":40,"menuName":"模板管理","childList":null,"linkUrl":"/systemConfig#/templateManage","resourceType":1},
                            {"id":36,"sortedId":90,"menuName":"结算配置","childList":null,"linkUrl":"/performanceManagement#/settleConfig","resourceType":1},
                            {"id":37,"sortedId":100,"menuName":"企业入驻","childList":null,"linkUrl":"/systemConfig#/enterprises","resourceType":1},
                            {"id":27,"sortedId":110,"menuName":"报表导入","childList":null,"linkUrl":"/index#/excelImport","resourceType":1}
                          ],"linkUrl":null,"resourceType":2
                        }
                      ],"linkUrl":null,"resourceType":2}
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
    menuClick(){
      console.log('菜单点击')
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
    height:calc(100vh - 50px);
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
    .topNav{
      text-indent: 15px;
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
