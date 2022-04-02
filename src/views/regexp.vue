<template>
  <div class="wrap">
    <el-input v-model="inputValue"></el-input>
    <el-button @click="inputHandler">校验</el-button>
  </div>
</template>

<script>
export default {
  name: "regexp",
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    inputHandler(){
      //0-1000000,最多保留两位小数
      // let reg = /(^[1-9]\d{0,5}(\.[0-9]{1,2})?$)|(^[0](\.\d{1,2})?$)|(^[1][0]{6}(\.[0]{1,2})?$)/

      let reg = /(^[1-9]\d{0,6}(\.[0-9]{1,2})?$|(^[0](\.\d{1,2})?$))|(^[1][0]{7}(\.[0]{1,2})?$)/
      if(reg.test(this.inputValue)){
        console.log('满足---')
      }else{
        console.log('不满足---')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
