<template>
  <div class="wrap">
    <div class="tap">
      <el-tabs v-model="activeIndex" @tab-click="handleClick">
        <el-tab-pane label="商品1" name="1"></el-tab-pane>
        <el-tab-pane label="商品2" name="2"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Service from '../../service/index'
export default {
  name: "axios",
  data(){
    return{
      activeIndex:'1'
    }
  },
  created(){
    // this.token();
    // this.noKey();
    this.fetchToken();
  },
  watch:{
    'activeIndex':{
      handler(n,o){

      },
      immediate:false,
      deep:true
    }
  },
  methods:{
    handleClick(tab,event){
      //切换时终止前一个请求
      window._axiosPromiseArr.forEach((ele,index)=>{
        if(ele.url.indexOf('/oauth/oauth/token') > -1){//清除指定的接口（不见判断条件，为取消全部接口）
          ele.cancel('终止接口请求');
          delete window._axiosPromiseArr[index];
        }
      })
      if(this.activeIndex == 1){//商品1
        this.product1();
      }else if(this.activeIndex == 2){//商品2
        this.product1();
        this.product2();
      }
    },
    //登录接口
    token(){
      axios({
        url: 'https://cbec.91hiwork.com/oauth/oauth/token',
        method: 'post',
        data:{
          username:'admin',
          password:'123456',
          scope:'all',
          grant_type:'password'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
        headers: {
          'Authorization': 'Basic aGlsaWZlQnVkZ2V0OjlkMmNjNTljYjUzMjcyMTVkMGY3M2VhYzcwZGFhYjFj',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res)=>{
        console.log(res,'token接口打印------>>>>>>>>')
      })
    },
    //传输组，要求只穿数组，不穿键？(不传key，只传值的数组参数，应该为下方传餐方式)
    noKey(){
      let params = ['https://www.baidu.com']
      axios({
        url:'https://cbec.91hiwork.com/oauth/oauth/token',
        method:'post',
        data:params,
        headers:{
          'Authorization': 'Basic aGlsaWZlQnVkZ2V0OjlkMmNjNTljYjUzMjcyMTVkMGY3M2VhYzcwZGFhYjFj',
          'Content-Type':'application/json'
        }
      })
    },
    //fetch中的封装请求接口
    fetchToken(){
      let params = {
        username:'admin',
        password:'123456',
        scope:'all',
        grant_type:'password'
      }
      Service.getToken(params).then((res)=>{
        console.log(res,'数据返回---------')
      })
    },
    //模拟商品1请求接口
    product1(){
      let params = {
        username:'admin',
        password:'123456',
        grant_type:'password',
        scope:'all'
      }
      Service.getToken(params).then((res)=>{
        console.log(res,'模拟商品1接口请求----');
      })
    },
    product2(){
      let params = {
        endTime: "",
        pageNum: 1,
        pageSize: 10,
        ruleAdmin: "",
        ruleName: "",
        startTime: "",
        status: ""
      }
      let url = 'https://test.91hiwork.com/agent/agentInfo/findProceedsRule?hID=3557051484063089897&dajiaID=1400087150541293551_1649302931205';
      Service.findProceedsRule(params,url).then((res)=>{
        console.log('模拟商品2接口请求----')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{

  }
</style>
