<template>
  <div class="wrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="销量">
        <el-form-item prop="minSale">
          <el-input v-model="ruleForm.minSale"></el-input>
        </el-form-item>
        <el-form-item prop="maxSale">
          <el-input v-model="ruleForm.maxSale"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="售价">
        <el-form-item prop="minPrice">
          <el-input v-model="ruleForm.minPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.maxPrice"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-select v-model="ruleForm.value1" @change="selectChange" placeholder="请选择">
          <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="ruleForm.value2" placeholder="请选择">
          <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchClick">搜索</el-button>
        <el-button @click="itemClick">单元格点击</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var maxPriceValidate = (rule, value, callback) => {
      if (value && Number(value) < this.ruleForm.minPrice) {
        callback(new Error('最大价格小于最小价格'));
      }else {
        callback();
      }
    }
    var maxSaleValidate = (rule, value, callback) => {
      if (value && Number(value) < this.ruleForm.minSale) {
        callback(new Error('最大销量小于最小销量'));
      }else {
        callback();
        this.$refs.ruleForm.clearValidate('minSale')
      }
    }
    var minPriceValidate = (rule, value, callback) => {
      if (this.ruleForm.maxPrice && Number(value) > this.ruleForm.maxPrice) {
        callback(new Error('最小价格大于最大价格'));
      }else {
        callback();
      }
    }
    var minSaleValidate = (rule, value, callback) => {
      if (this.ruleForm.maxSale && Number(value) > this.ruleForm.maxSale) {
        callback(new Error('最小销量大于最大销量'));
      }else {
        callback();
        this.$refs.ruleForm.clearValidate('maxSale')
      }
    }
    return {
      ruleForm: {
        name: '',
        minSale:'',
        maxSale:'',
        minPrice:'',
        maxPrice:'',
        value1:'',
        value2:'',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        maxSale:[
          {validator:maxSaleValidate,trigger:'change'},
        ],
        maxPrice:[
          {validator:maxPriceValidate,trigger:'change'},
        ],
        minSale:[
          {validator:minSaleValidate,trigger:'change'},
        ],
        minPrice:[
          {validator:minPriceValidate,trigger:'change'},
        ]
      },
      options1:[
        {label:'选项一',value:1},
        {label:'选项二',value:2},
        {label:'选项三',value:3},
      ],
      options2:[
        {label:'选项四',value:4},
        {label:'选项五',value:5},
        {label:'选项六',value:6},
      ]
    };
  },
  watch:{
    'ruleForm.value1':{
      handler(n,o){
        console.log(n,'iiiiii')
      },
      immediate:false,
      deep:true
    },
    'ruleForm.value2':{
      handler(n,o){
        console.log(n,'jjjjjjjj')
      },
      immediate:false,
      deep:true
    }
  },
  methods: {
    searchClick() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          alert('submit!');
        }
      });
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields();
    },
    itemClick(){
      this.ruleForm.value1 = 2;
      this.ruleForm.value2 = 4;
    },
    selectChange(val){
      console.log(val,'---')
      this.ruleForm.value2 = '';
    }
  }
}
</script>
