<template>
<!--  对小区树结构做递归操作测试-->
 <div class="wrap">
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item  label="收益">
       <el-form-item prop="income.minIncome">
         <el-input v-model="ruleForm.income.minIncome"></el-input>
       </el-form-item>
       <el-form-item prop="income.maxIncome">
         <el-input v-model="ruleForm.income.maxIncome"></el-input>
       </el-form-item>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
       <el-button @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
   </el-form>

   <div class="search">
     <el-input v-model="inputValue" @input="inputVal('inputValue',$event)"></el-input>
     <el-button @click="clear">清空</el-button>
     <el-button @click="searchTreeNode">搜索</el-button>
   </div>
   <el-tree
       ref="tree"
       :data="treeListData"
       :props="props"
       show-checkbox
       node-key="treeNodeId"
       :default-checked-keys="defaultCheckedKeys"
       :default-expanded-keys="defaultExpandedKeys"
       :filter-node-method="filterNode"
       @node-click="nodeClick"
       @check-change="handleCheckChange">
   </el-tree>
   <div class="sticky">标签标题</div>

   <div class="layout-wrap">
     <div class="layout-item" v-for="(item,index) in layoutList">
       <div class="circle" v-if="(index+1) % 4 == 1"></div>
       <div class="block" v-if="(index+1) % 4 == 2 || (index+1) % 4 == 3"></div>
       <div class="circle" v-if="(index+1) % 4 == 0"></div>
     </div>
   </div>

   <div class="lanhu-wrap">
     <div class="lanhu-item" v-for="item,index in lanhuList">
       <img :src="item.img" alt="" v-if="(index+1) % 4 == 1">
       <div class="lanhu-right" v-if="(index+1) % 4 == 2 || (index+1) % 4 == 3">
         <div class="lanhu-item-name">{{item.name}}</div>
         <div class="lanhu-item-price">{{item.price}}</div>
         <div class="item-buy">立即购买</div>
       </div>
       <img :src="item.img" alt="" v-if="(index+1) % 4 == 0">
     </div>
   </div>
 </div>
</template>

<script>
import {treeListData} from "@/common/tree-list-data";

export default {
  name: "arrayMethods",
  data(){
    return {
      num:836703788659393157,
      stringCode: '1,3,5,7',
      arrayCode: ['1', '3', '5', '7'],
      list: [{id: 2, name: '北京市'}, {id: 3, name: '河北省'}, {id: 15, name: '吉林省'}],
      //树
      inputValue:'',
      treeListData:treeListData,
      props:{
        label:'objectName',
        children:'children'
      },
      findTreeNode:[],
      concatTreeNode:[],
      allNodes:[],
      defaultCheckedKeys:[],
      defaultExpandedKeys:[],

      ruleForm: {
        income: {
          maxIncome:'',
          minIncome:''
        }
      },
      rules: {
        'income.minIncome': [
          { required: true, message: '请输入最小值', trigger: 'blur' },
        ],
        'income.maxIncome':[
          {required:true,message:'请输入最大值',trigger:'blur'},
        ]
      },
      layoutList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      lanhuList:[
        {img:require('../assets/my.jpg')},
        {name:"Trinity戒指 小号款18K白金 18K黄金 18K玫瑰金",price:'4240',img:require('../assets/my.jpg')},
        {name:"Trinity de Cartier戒指 18k白金",price:'7450',img:require('../assets/my.jpg')},
        {img:require('../assets/my.jpg')},
        {name:"GUCCI古驰22年春夏男士虎头银手镯",price:'4240',img:require('../assets/my.jpg')},
        {name:"GUCCI古驰22年春夏男士虎头银手镯",price:'4240',img:require('../assets/my.jpg')},
      ]
    }
  },
  watch:{
    'ruleForm.income.minIncome':{
      handler(newName,oleName){
        if(/^0*/.test(newName)){
          let res = newName.replace(/^0+/,0);
          this.ruleForm.income.minIncome = res;
          if(/^0+[1-9]+/.test(res)){
            this.ruleForm.income.minIncome = res.replace(/^0+/,'');
          }
        }
      },
      immediate:false,
      deep:true
    },
    'ruleForm.income.maxIncome':{
      handler(newName,oldName){
        let str = newName.replace(/^0+/,0);
        str = str.replace(/^0[1-9]/,str.replace(/^0/,''))
        this.ruleForm.income.maxIncome = str;
      },
      immediate:false,
      deep:true
    }
  },
  created(){
    this.$http.get('/someUrl', []).then(function(response){
      // 响应成功回调
      console.log('success---')
    }, function(response){
      // 响应错误回调
      console.log('failed-----')
    });
    // this.dealMethods();
    // this.findChild('269931278217394676697066',treeListData)
    // this.handleChild('269931278217394676697066',treeListData)
    // this.findAnyTreeNode('272662899907903779159',treeListData);
    // this.myDeal();
    // this.defaultExpandedKeys = ['738729877539145294283']
    // this.defaultExpandedKeys = ['269931278217394676646018']

  },
  // async mounted() {
  //   // let res1 = await this.askOne();
  //   // console.log(res1,'++++77')
  //   // let res2 = await this.askTow();
  //   // console.log(res2,'++++77')
  //
  //   // let res1 = await this.askOne().catch((e)=>{console.log(e)})
  //   // console.log(res1,'77__----')
  //   // let res2 = await this.askTow().catch((e)=>{console.log(e)})
  //   // console.log(res2,'77__--')
  //
  //   try{
  //     let res1 = await this.askOne();
  //     console.log(res1,'00-----')
  //     let res2 = await this.askTow();
  //     console.log(res2,'00-----')
  //   }catch(e){
  //     console.log(e,'=======')
  //     // return;
  //   }
  //   try{
  //     this.arrayCode.forEach((item)=>{
  //       if(item == 3){
  //         throw new Error('筛选完成---')
  //       }
  //       console.log(item,'--------')
  //     })
  //   }catch(e){
  //     console.log(e)
  //   }
  //   let str = '10.123456789';
  //   let reg = new RegExp('.','gm');
  //   let res = str.replace(/\./gm,'');
  //   if(reg.test(str)){
  //     console.log('包含点点---')
  //     let nres = str.replace(reg,'');
  //     console.log(str,nres,'========')
  //   }
  //   console.log(reg,res,'++++++')
  //
  //   let reg2 = new RegExp('.','g');
  //   let str2 = str.replace(reg2,'')
  //   console.log(reg2,str2,'000000---')
  //
  //   //1,3,5,7
  //   let sub = this.stringCode.substr(6);
  //   // let sub = this.stringCode.substring(6);
  //   // let sub = this.stringCode.slice(6)
  //   console.log(sub,'8888')
  //   // this.concatWordOne().then((res)=>{
  //   //   this.concatWordTwo().then((res)=>{
  //   //     this.concatWordThree().then(()=>{
  //   //       this.concatWordFore().then(()=>{
  //   //         this.concatWordFive()
  //   //       })
  //   //     }).catch((e)=>{console.log(e)})
  //   //   })
  //   // }).catch((e)=>{console.log(e)})
  //
  //   // this.concatWordOne().then(()=>{
  //   //   return this.concatWordTwo();
  //   // }).then(()=>{
  //   //   return this.concatWordThree();
  //   // }).then(()=>{
  //   //   return this.concatWordFore();
  //   // }).then(()=>{
  //   //   return this.concatWordFive();
  //   // }).then((res)=>{
  //   //   console.log(res)
  //   // }).catch((e)=>{
  //   //   console.log(e)
  //   // })
  //
  //   this.paint();
  // },
  methods:{
    //控制台console图形打印
    paint(){
      let str = ''
      // for(var i = 0;i < 10;i++){
      //   for(var j = 0;j < i + 1;j++){
      //     str += '*'
      //   }
      //   str += '\n'
      // }

      // for(var i = 0;i < 10;i++){
      //   for(var j = 9; j - i >0;j--){
      //     str += '*'
      //   }
      //   str += '\n'
      // }

      // for(var i = 0;i < 3;i++){
      //   for(var j = 0;j < 2 - i;j ++){
      //     str += ' '
      //   }
      //   for(var k = 0;k < 2 * (i + 1) - 1;k++){
      //     str += '*'
      //   }
      //   str += '\n'
      // }
      // for(var i = 0;i < 2;i++){
      //   for(var j = 0;j < i+1;j ++){
      //     str += ' '
      //   }
      //   for(var k = 0;k < 3-2*i;k++){
      //     str+='*'
      //   }
      //   str += '\n'
      // }

      for(var i = 1;i <= 7;i++){
        for(var j = 1;j <= 7 - i;j++){
          str += ' '
        }
        for(var k = 1;k <= i;k++){
          str += '*'
        }
        str += '\n'
      }
      for(var i = 6;i >= 1;i--){
        for(var j = 1;j <= 7-i;j++){
          str += ' '
        }
        for(var k = 1;k <= i;k++){
          str += '*'
        }
        str += '\n'
      }

      console.log(str)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 禁止input框输入表情
    inputVal(type,e){
      console.log(type,e,'--------')
      let reg = /([0-9|*|#]\uFE0F\u20E3)|([0-9|#]\u20E3)|([\u203C-\u3299]\uFE0F\u200D)|([\u203C-\u3299]\uFE0F)|([\u2122-\u2B55])|(\u303D)|([(\A9)|(\AE)]\u3030)|(\uA9)|(\uAE)|(\u3030)|([\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF])|([\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F])/g;
      setTimeout(() => {
        this[type] = e.replace(reg,"");
      }, 0);
    },
    dealMethods(){
      ////不改变原字符串
      // let numberRes = this.stringCode.split(',').map(Number);
      // let stringRes = this.stringCode.split(',').map(String);
      // let booleanRes = this.stringCode.split(',').map(Boolean);
      // console.log(numberRes,stringRes,booleanRes,this.stringCode,'---->>>>')

      ////不改变原数组
      // let numberRes = this.arrayCode.map(Number);
      // let stringRes = this.arrayCode.map(String);
      // let booleanRes = this.arrayCode.map(Boolean);
      // console.log(numberRes,stringRes,booleanRes,this.arrayCode,'---->>>>')

      ////不改变原数组
      // let numberRes = this.list.map(item=>Number(item.id));
      // let stringRes = this.list.map(item=>String(item.id));
      // let booleanRes = this.list.map(item=>Boolean(item.id));
      // console.log(numberRes,stringRes,booleanRes,this.list,'---->>>>')

      // //改变原数组了
      // let numberRes = this.list.map(item=>{item.code = item.id;return Number(item.code)});
      // let stringRes = this.list.map(item=>{item.code = item.id;return String(item.code)});
      // let booleanRes = this.list.map(item=>{item.code = item.id;return Boolean(item.code)});
      // console.log(numberRes,stringRes,booleanRes,this.list,'---->>>>')

      // //改变原数组了
      // let returnRes = this.list.filter(item=>{item.code = item.id; return item.id == 15});
      // console.log(returnRes,this.list,'--->>>')

      //改变原数组了
      let returnRes = this.list.forEach(item=>{item.code = item.id;return item.id});
      console.log(returnRes,this.list,'--->>>')
    },
    myDeal(){
      // let res = this.list.filter((item)=>{
      //   return item.name.indexOf('吉林') != -1
      // })

      // let res = this.list.find((item)=>{
      //   return item.name.indexOf('吉林') != -1
      // })

      // let res = this.arrayCode.find((item)=>{
      //   return item.indexOf('7') != -1;
      // })

      // let res = this.stringCode.split(',').find((item)=>{
      //   return item == 3
      // })

      // let arr = this.stringCode.split(',');
      // let res = arr.map((item)=>{
      //   return item + 3
      // })

      let res = this.list.map((item)=>{
        return item.name + 3
      })

      // let res = this.list.forEach((item)=>{
      //   item.name = item.name + 3
      // })
      console.log(res,this.list,'_______________')
    },
    nodeClick(value,data,node){
      console.log(value,data,node,'999999')
    },
    handleCheckChange(data, checked, indeterminate){
      console.log(data,checked,indeterminate);
    },
    findChild(id,data){
      if(!data){return}
      data.forEach((item)=>{
        if(item.treeNodeId == id){
          console.log(item.objectName,'---完成--->')
        }else{
          if(item.children){
            this.findChild(id,item.children)
          }
        }
      })
    },
    //查找一个最底部的树节点，向上一级一级组成一个完整的树节点
    handleChild(id,data){
      data.forEach((item)=>{
        if(item.treeNodeId == id){
          // this.findTreeNode.push(item);
          if(!item.children){
            this.findTreeNode.push(item);
          }else{
            item.children = this.findTreeNode[0];
            this.findTreeNode = [];
            this.findTreeNode.push(item);
          }
          if(item.parentId != 'root'){
            this.handleChild(item.parentId,treeListData);
          }
        }else if(item.children){
          this.handleChild(id,item.children)
        }
      })
      console.log(this.findTreeNode,'++++++++')
    },
    //搜任意树节点，向上一级一级组装完整树结构
    findAnyTreeNode(id,data){
      data.forEach((item)=>{
        if(item.treeNodeId == id){
          if(!this.findTreeNode.length){
            this.findTreeNode.push(item)
          }else{
            let find = item;
            find.children = this.findTreeNode[0];
            this.findTreeNode = [];
            this.findTreeNode.push(find);
          }
          if(item.parentId != 'root'){
            this.findAnyTreeNode(item.parentId,treeListData);
          }
        }else if(item.children){
          this.findAnyTreeNode(id,item.children);
        }
      })
      console.log(this.findTreeNode,'----------')
    },
    //清空
    clear(){
      this.inputValue = '';
      this.allNodes.forEach((item)=>{
        item.expanded = false;
      })
      this.defaultExpandedKeys = [];
    },
    //按名称搜索，查询树节点
    searchTreeNode(){
      // this.$refs.tree.filter(this.inputValue);
      // if(!this.inputValue){return}
      //获取全部的节点（这里的全部节点，指的就是每一项children的子项都包含在内）
      this.allNodes = this.$refs.tree.store._getAllNodes()
      this.allNodes.forEach((item)=>{
        item.expanded = false;
      })
      this.defaultExpandedKeys = [];
      this.findNode(this.inputValue,this.allNodes);
    },
    //查找符合条件的树
    findNode(name,data){
      console.log(name,data,'+++____++++')
      //data.forEach其实就是处理的所有的节点，不用在操作每一项的children了，每一项的children就包含在data里
      data.forEach((item)=>{
        if(item.label.indexOf(name) != -1){
          // item.visible = true;
          this.defaultExpandedKeys.push(item.key);
        }
      })
    },
    filterNode(value,data){

    },
    callSelf(id){
      let area = {
        "id":"269931278217394676697066",
        "treeNodeId":"269931278217394676697066",
        "parentId":"272662899907903779159",
        "objectName":"康景社区1",
        "pid":2,
        "children":null,
        "companyLocationManagementOutputModelList":null
      }
    },
    askOne(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let res = {code:'200',data:{name:'zhansan',age:18,sex:'man'}}
          // resolve(res)
          reject('接口1请求错误--')
        },2000)
      })
    },
    askTow(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let res = {code:'200',data:{list:[1,2,3,4,5]}}
          // resolve(res)
          reject('接口2请求错误--')
        },5000)
      })
    },
    concatWordOne(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('老')
          resolve('ok1')
        },1000)
      })
    },
    concatWordTwo(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('鼠')
          resolve('ok2')
        },1000)
      })
    },
    concatWordThree(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('爱');
          resolve('ok3')
          // reject('no3')
        },1000)
      })
    },
    concatWordFore(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('大');
          resolve('ok4')
        },1000)
      })
    },
    concatWordFive(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log('米');
          resolve('ok5')
        },1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  position: relative;
  height:auto;
  background:white;
  .search{
    display: flex;
  }
  .demo-ruleForm{
    ::v-deep .el-input{
      width:100px;
    }
  }
  .layout-wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding:0 10px;
    .layout-item{
      margin:20px 0;
      .circle{
        width:50px;
        height:50px;
        border-radius: 50%;
        border:2px solid black;
      }
      .block{
        width:250px;
        height:50px;
        border:2px solid black;
      }
    }
  }
  .lanhu-wrap{
    box-sizing: border-box;
    padding:0 .2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .lanhu-item{
      display: flex;
      align-items: center;
      margin-bottom: .2rem;
      img{
        width:1.2rem;
        height:1.2rem;
      }
      .lanhu-right{
        width:1.96rem;
        .lanhu-item-name{
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          line-height: 18px;
          color:#333;
          margin-bottom: .1rem;
        }
        .lanhu-item-price{
          font-size: 16px;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color:#333;
          margin-bottom: .21rem;
        }
        .item-buy{
          width:1.08rem;
          height:.28rem;
          background:#000;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          color:white;
          text-align: center;
          line-height: .28rem;
          margin: 0 auto;
        }
      }
    }
  }
  .sticky{
    background:orange;
    position: sticky;
    top:0px;
  }
}
</style>
