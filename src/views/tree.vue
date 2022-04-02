<template>
<!--  新增编辑的同套表单弹窗校验，类型的校验错误，可以使用v-if为新增、编辑弹窗各设置变量，解决-->
	<div class='wrap' ref='wrap'>
		<el-input
		  placeholder="输入关键字进行过滤"
		  v-model="filterText">
		</el-input>
    <button @click="clearSearch">清空</button>
		<button @click='search'>搜索</button>
		<button @click='getKeys'>获取选中key</button>
		<el-tree
		  ref='tree'
		  :data="listdata"
		  show-checkbox
		  node-key="treeNodeId"

      :default-expanded-keys="expandedKeys"
      :default-checked-keys="defaultCheckedKeys"
		  @node-click="nodeClick"
		  :props="defaultProps">
		</el-tree>

    <el-button type="primary" @click="addClick">添加</el-button>
    <el-button type="primary" @click="editClick">编辑</el-button>
    <el-dialog
        v-if="addShow"
        title="添加"
        :visible.sync="addDialog"
        width="30%">
      <el-form :model="form" :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-select v-model="form.name" placeholder="请选择活动区域">
            <el-option label="区域一" :value="1"></el-option>
            <el-option label="区域二" :value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
        title="编辑"
        v-if="editShow"
        :visible.sync="editDialog"
        width="30%">
      <el-form :model="form" :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-select v-model="form.name" multiple placeholder="请选择活动区域">
            <el-option label="区域一" :value="1"></el-option>
            <el-option label="区域二" :value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button @click="totalClick">所有</el-button>

    <div>时间：{{getNow}}{{new Date().getTime()}}</div>
    <el-button @click="handChange">修改</el-button>
    <el-checkbox :indeterminate="isIndeterminate" v-model="isAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="item in cities" :label="item" :key="item">{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  import {treeListData} from "@/common/tree-list-data";
  import mixin from '../mixin/log';
  export default {
	    data() {
        var validatePass = (rule, value, callback) => {
          console.log(rule,'ppppppppp')
          if (value === '' || (value && !value.length)) {
            callback(new Error('请输入名字'));
          } else {
            callback();
          }
        };
        return {
          listdata:treeListData,//穿梭框数据
	        defaultProps: {
            children: 'children',
            label: 'objectName'
	        },
          filterText:"",
          expandedKeys:[],//默认展开的节点
          defaultCheckedKeys:[
            "269931278217394676665406",
            "269931278217394676639121",
            "269931278217394676678658"
          ],//默认选中的节点
          form:{
	          // name:['shanghai','beijing']
	          name:''
          },
          rules:{
            name: [
              {required:true,message:'请输入名字', trigger: 'blur' },
              // {validator:validatePass, trigger: 'blur' },
            ]
          },
          addDialog:false,
          editDialog:false,
          addShow:false,
          editShow:false,
          findNum:0,//总共查找了多少次

          isIndeterminate:false,
          cities:['北京','广州','深圳','上海'],
          checkedCities:[],
	      };
	    },
		watch: {
		  filterText(val) {
			  // this.$refs.tree.filter(val);
		  },
		},
    computed:{
      isAll:{
        get(){
          console.log('get--')
          let checkedLen = this.checkedCities.length;
          let allLen = this.cities.length;
          if(checkedLen == allLen){
            this.isIndeterminate = false;
            return true;
          }else{
            if(checkedLen){this.isIndeterminate = true}
            return false;
          }
        },
        set(val){
          console.log(val,'set--')
        }
      },
      getNow(){
        return Date.now();
      }
    },
    mixins:[mixin],
		created(){
      /***正则test***/
			// let totalHeight = this.$refs.wrap.offsetHeight;
			// console.log(totalHeight,'----')
      // let str = 'https://test.91hiwork.com/vshop/getpagelist/tree?access_token=2LOVE1forever&name=zhangsan&age=23';
      // let reg = /(?<=access_token=).*(?=&{0,})/
      // let str = 'https://test.91hiwork.com/vshop/getpagelist/tree?access_token=2love1forever&name=123zhangzhang';
      // let reg = /(?<=access_token=).*(?=&name=[0-9]{3})/
      // let str = 'https://test.91hiwork.com/vshop/getpagelist/tree?access_token=2love1forever&name=zhangsan&age=23&personID=4465';
      // let str = 'https://test.91hiwork.com//vshopwebmobile/productDetails/productDetails.html?access_token=2love1forever#/?productId=8296291543198943483&companyID=269931278217394676665406&companyInfoID=2699312782173946766&appcode=9927&agentID=6116524916432782951&activityId=1235059653877647333&agentGroupId=2039980100753769913&partnerId=4078226057824780387&VNK=6c361ac8'
      // let reg = /(?<=access_token=)\w*(?=(&.+=.*)*)/ //链接取参数值的，暂时测试能正常取到的
      // let reg = /(?<=access_token=)[^&]*(?=(?:&.+=.*)*)/ //链接取参数值的，暂时测试能正常取到的
      // let reg = /(?<=access_token=)[^&]*(?=&|)/ //链接取参数值的，暂时测试能正常取到的（原本最开始的写法）
      // let reg = /access_token=.*(&.+=.*)*/
      // console.log(str.match(reg),'匹配------------')
      // let str = 'https://test.91hiwork.com/vshop/getpagelist/tree?access_token=2love1forever&name=zhangsan&age=23'
      // let url = str.substring(str.indexOf('?'));
      // let reg2 = new RegExp("(^|&)access_token=([^&]*)(&|$)");
      // let res = url.substr(1).match(reg2);
      // let res2 = reg2.exec(url.substr(1));
      // console.log(res,'jjjj----')
      // console.log(res2,'-------')
      let str = 'https://test.91hiwork.com//vshopwebmobile/productDetails/productDetails.html?access_token=#2love1forever##/' +
      '?productId=8296291543198943483' +
      '&companyID=269931278217394676665406' +
      '&companyInfoID=2699312782173946766' +
      '&appcode=9927' +
      '&agentID=6116524916432782951' +
      '&activityId=1235059653877647333' +
      '&agentGroupId=2039980100753769913' +
      '&partnerId=4078226057824780387' +
      '&VNK=#6c36#/1ac8###/'
      let url = str.substring(str.indexOf("?"));
      console.log(this.getValue(str,'VNK'),'hahah------')
      console.log(this.getValue(str,'access_token'),'hahah------')

      // let reg3 = new RegExp('(?<=VNK=)((?!#\/$)[^&])*(?=&|#\/|$)');
      let reg3 = new RegExp('(?<=VNK=)((?!#\/$)[^&])*(?=&|)');
      // console.log('&VNK=#6C361AC8##/'.match(reg3),'++++')
      console.log('VNK=#6C3#/61AC8#/#/'.match(reg3),'++++')
      /***正则test***/
      // let obj = [{name:'name1',age:'age1'},{name:'name2',age:'age2'},{name:'name3',age:'age3'}];
      // // let r = obj.find((item)=>{
      // //   return item.name4;
      // // })
      // let r = obj.findIndex((item)=>{
      //   return item.name == 'name2'
      // })
      // console.log(r,'llll')
		},
		mounted(){
			let totalHeight = this.$refs.wrap.offsetHeight;
			let clientHeight = document.documentElement.clientHeight;
			console.log('totalHeight:',totalHeight,'clientHeight:',clientHeight)
		},
		methods:{
	      async totalClick(){
	        for(let i = 0;i < 10;i++){
	          await this.netRequest(i);
          }
        },
      netRequest(i){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log('请求完毕第'+(i+1)+'次')
            resolve();
          },3000)
        })
      },
      // totalClick(){
      //   for(var i = 0;i < 10;i++){
      //     this.netRequest(i);
      //   }
      // },
      // netRequest(i){
      //   console.log(i)
      // },

      //全选
      handleCheckAllChange(val){
	        console.log(val,'全选值')
        if(val){
          this.checkedCities = ['北京','上海','广州','深圳'];
        }else{
          this.checkedCities = [];
        }
      },
      //选中变化
      handleCheckedCitiesChange(val){
	        console.log(val,'选中值')
        if(val.length && val.length != this.cities.length){
          this.isIndeterminate = true;
        }else{
          this.isIndeterminate = false;
        }
      },
      //手动修改isAll的set
      handChange(){
	      this.isAll = !this.isAll;
      },


      //自己写的零宽断言获取链接参数
      getValue(url,name){
        url = url.substr(url.indexOf('?'));
        // let reg = new RegExp('(?<='+name+'=)[^&]*(?=&|)');
        let reg = new RegExp('(?<='+name+'=)((?!#\/)[^&])*(?=&|)');
        console.log(reg,'yyyy')
        let res = url.match(reg);
        if(res != null){
          return res[0]
        }
        return null;
      },
      //项目中获取链接参数
      getString(sUrl, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = sUrl.substr(1).match(reg);
        if (r != null) {
          return unescape(r[2]);
        }
        return null;
      },
      addClick(){
        this.addShow = true;
        this.editShow = false;
        // this.form = {}
        this.form.name = 1;
        // this.rules.name[0].type = 'integer'
        this.addDialog = true;
      },
      editClick(){
        this.editShow = true;
        this.addShow = false;
        // this.form = {}
        this.form.name = [1,2]
        // this.rules.name[0].type = 'array'
        this.editDialog = true;
      },
      submit(){
        this.$refs['form'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },



			getKeys(){
				let keys = this.$refs.tree.getCheckedKeys();
				console.log(keys);
			},
      //官网的树过滤，返回的只能是当前匹配的节点，节点下的子集不会返回
			filterNode(value, data) {
			  console.log(data,'[[[[[[')
			  let allNodes = this.$refs.tree.store._getAllNodes();
			  console.log(allNodes,'---')
			  if (!value) return true;
			  // return data.objectName.indexOf(value) !== -1;
			  if(data.objectName.indexOf(value) !== -1){
          return false
			  }
      },
      clearSearch(){
        this.filterText = '';
      },
      //自定义筛选
			search(){
        //获取全部节点
				this.allNodes = this.$refs.tree.store._getAllNodes();
				console.log(this.allNodes,'>>>>>>>>>>>')
        //节点全部隐藏
			  for(var i=0;i<this.allNodes.length;i++){
			  	 this.allNodes[i].visible = false;
			  }
			  this.filterMethod(this.listdata,this.filterText)
			},
			//判断当前匹配节点是否还有父节点，有展示出来
			isParent(val){//参数为树的key
				let parentId = ''
				for(var i=0;i<this.allNodes.length;i++){
					if(val == this.allNodes[i].key){
						this.allNodes[i].visible = true;//节点展示
						this.allNodes[i].expanded = true;//节点展开
						parentId = this.allNodes[i].parent.key;
					}
				}
				if(parentId){
					this.isParent(parentId);
				}
			},
      //判断当前匹配节点下是否还有子集，子集全部展示
			isSon(val){//参数为树的key
        for(var i = 0;i < this.allNodes.length;i++){
          if(val == this.allNodes[i].key){//当前传入值的节点
            if(this.allNodes[i].childNodes && this.allNodes[i].childNodes.length){
              this.allNodes[i].childNodes.forEach((item)=>{
                item.visible = true;//节点展示
                if(item.childNodes && item.childNodes.length){
                  this.isSon(item.key);
                }
              })
            }
          }
        }
			},
			//自定义过滤
			filterMethod(arr,txt){
			  arr.forEach((val)=>{
				  console.log(val,"==")
          let hasFinded = false;
          //当前匹配上的节点
				  if(val.objectName.indexOf(txt) !== -1){
            hasFinded = true;
					 //当前节点显示
					 for(var i=0;i<this.allNodes.length;i++){
					 	if(val.treeNodeId == this.allNodes[i].key){
							console.log(val.treeNodeId,val.objectName)
					 		this.allNodes[i].visible = true;//节点展示
              //查看当前匹配节点下面是否有子项，有子项的话显示出来
              if(val.children&&val.children.length){
                this.allNodes[i].childNodes.forEach((item)=>{
                  item.visible = true;//节点展示
                  console.log(item,'pppppp---------')
                  this.isSon(item.key);
                })
              }
					 	}
					 }
					 //判断是否有父节点并且不为根节点
					 if(val.parentId && (val.parentId != 'root')){
						this.isParent(val.parentId);
					 }
				  }
				  if(val.children&&val.children.length>0){
				    if(hasFinded){return};//符合过滤条件节点的所有自节点不再查找
					  this.filterMethod(val.children,txt);
				  }
			  })
			  console.log(this.listdata)
			},
			nodeClick(value,data,node){
				console.log(value,data,node,'click')
			}
		}
  };
</script>

<style lang="scss" scoped>
	.wrap{
		width:100%;
		height:1000px;
		background:#999;
	}
</style>
