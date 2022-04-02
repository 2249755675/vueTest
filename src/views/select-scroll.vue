<template>
  <div class="wrap">
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
      <span v-if="loading" style="display: flex;justify-content: center">加载中...</span>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "select-scroll",
  data(){
    return{
      options: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      },{
        value: '6',
        label: '黄金糕'
      },{
        value: '7',
        label: '双皮奶'
      }, {
        value: '8',
        label: '蚵仔煎'
      }, {
        value: '9',
        label: '龙须面'
      }, {
        value: '10',
        label: '北京烤鸭'
      }],
      value: '',
      loading:false,
      list:[],
      pageNum: 1,
      total:null
    }
  },
  mounted() {

    //不异步请求
    // this.forAskNo()
    //异步请求
    // this.forAsk();
    document.querySelector('.el-scrollbar__wrap').addEventListener('scroll',(e)=>{
      // console.log(e,'----->>>>')
      console.log(e.target.scrollHeight,e.target.clientHeight,e.target.scrollTop,'0000')
      if(e.target.scrollHeight == e.target.clientHeight + e.target.scrollTop){
        console.log('请求------')
        if(this.options.length < 30 && !this.loading){
          this.loading = true;
          setTimeout(()=>{
            let arr = []
            for(let i = 0;i < 10;i++){
              arr.push({value:Math.random()*10000+'',label:'文字'+i})
            }
            this.options = this.options.concat(arr)
            this.loading = false;
          },3000)
        }
        console.log(this.loading,'=======')
      }
    })
  },
  methods:{
    getList(){
      return new Promise((resolve,reject)=>{
        let params = {
          endTime: "",
          pageNum: this.pageNum,
          pageSize: 10,
          ruleAdmin: "",
          ruleName: "",
          startTime: "",
          status: ""
        }
        axios.post(
            'https://test.91hiwork.com/agent/agentInfo/findProceedsRule?access_token=ae8d0211-a529-48f0-9f39-82e517a6cff1&hID=4679261095252148542&dajiaID=8767752046512849711_1647324805481',
            params
        ).then((res)=>{
          console.log(res)
          if(res.data.code == 200){
            this.total = res.data.data.total;
            if(this.list.length < this.total){
              this.list = this.list.concat(res.data.data.list)
              this.pageNum++
            }
          }
          resolve()
        })
      })
    },
    //不加async awai
    forAskNo(){
      for(let i = 0;i < 10;i++){
        this.getList()
      }
      console.log(this.list,'------')
    },
    //加async awai
    async forAsk(){
      for(let i = 0;i < 10;i++){
        await this.getList()
      }
      console.log(this.list,'------')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  ::v-deep .el-select-dropdown__list{
    overflow: scroll;
  }
}
</style>
