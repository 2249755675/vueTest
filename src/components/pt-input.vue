<template>
 <div class="wrap">
   -----
   <el-input v-model="returnName" @input="handleInput" type="text" placeholder="请输入数字"></el-input>
 </div>
</template>

<script>
export default {
  name: "son",
  props:{
    inputValue:{
      type:String,
      default:''
    },
    valueKey:{
      type:String,
      default:''
    }
  },
  computed:{
    returnName:{
      get(){
        return this.name;
      },
      set(value){
        this.name = value;
      }
    }
  },
  data(){
    return{
      name:''
    }
  },
  created() {
    if(this.inputValue){
      this.name = this.inputValue;
    }
  },
  methods:{
    handleInput(e){
      console.log(e,'----->>>>>>>')
      if(e && this.valueKey == 'jobId'){
        let reg = /^\d*$/
        if(!reg.test(e)){
          console.log('不是数字-----')
          e = '';
          this.name = e;
        }
      }
      let data = new Object();
      if(this.valueKey){
        // console.log(this.valueKey,'+++++++')
        data[this.valueKey] = e;
        this.$emit('on-input',data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
}
</style>
