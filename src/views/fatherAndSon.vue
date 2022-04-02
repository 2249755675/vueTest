<template>
  <div class="wrap">
    <pt-input valueKey="jobId" :inputValue="form.jobId" @on-input="handleInput"></pt-input>
    <pt-input valueKey="phoneNum" :inputValue="form.phoneNum" @on-input="handleInput"></pt-input>
    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
import ptInput from '../components/pt-input';
export default {
  name: "fatherAndSon",
  components:{ptInput},
  data(){
    return{
      form:{
        jobId:'testName',
        phoneNum:'18573914144'
      }
    }
  },
  methods:{
    handleInput(value){
      console.log(value,'father----->>>>>')
      this.form = Object.assign(this.form,value);
    },
    submit(){
      console.log(this.form,'打印日志------>>>>>>')
    }
  }
}
</script>

<style lang="scss" scoped>
 .wrap{
   width:100%;
   height:auto;
   background:white;
 }
</style>
