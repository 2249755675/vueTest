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
        <el-button @click="searchClick">搜索</el-button>
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
      }
    };
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
    }
  }
}
</script>
