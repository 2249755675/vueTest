<template>
  <div class="wrap">
    <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
              type="text"
              size="mini"
              @click="() => append(data,node)">
            添加
          </el-button>
          <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
   <!--elementui树状选择样式测试-->
   <div>
     <!--element半选样式-->
     <div class="test"></div>
     <!--element全选样式-->
     <div class="test2"></div>
   </div>
  </div>
</template>

<script>
let id = 1000;
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  name: "renderContent",
  data(){
    return{
      data:[{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],

      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods:{
    handleCheckAllChange(val) {
      console.log(val,'-----全选')
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value,'--------选择')
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      this.isIndeterminate = checkedCount < this.cities.length;
    },

    append(data,node) {
      // console.log(data,node,'--------')
      // return;
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      console.log(node,data,'+++++++++++')
      // return;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      const item = children.filter(d => d.id === data.id);
      // const item = children.find(d => d.id === data.id);
      console.log(index,item,'----------');
      return;
      children.splice(index, 1);
    },
  }
}
</script>

<style scoped lang="scss">
.wrap{
  .test{
    width:10px;
    height:10px;
    background:#409eff;
    position: relative;
  }
  .test:before{
    content:'';
    height:1px;
    background:white;
    position: absolute;
    left:0;
    right:0;
    top:50%;
    transform:translateY(-50%);
    transform: scale(0.5);
    display: block;
  }
  .test2{
    margin-top:15px;
    width:10px;
    height:10px;
    background:#409eff;
    /*element样式写法开始*/
    //position:relative;
    /*element样式写法结束*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test2:after{
    content:'';
    border:1px solid white;
    border-left:0;
    border-top:0;
    width:3px;
    height:6px;
    /*element实现写法开始*/
    //position: absolute;
    //left:50%;
    //top:50%;
    //margin-left:-30px;
    //margin-top:-35px;
    //transform: translate(-50%,-50%);
    //margin:0 auto;
    //transform: rotate(45deg) translateY(-20%);
    /*element实现写法结束*/
    transform:translateX(-5%) translateY(-20%) rotate(45deg);
    transform-origin: center;
  }
}
</style>
