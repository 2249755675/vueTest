<template>
  <div id="app">
    <div class="btn" @click="chooseUrl(1)">图片</div>
    <div class="btn" @click="chooseUrl(2)">doc</div>
    <div class="btn" @click="chooseUrl(3)">pdf</div>
    <div class="btn" @click="chooseUrl(4)">xls</div>
    <div class="btn" @click="chooseUrl(5)">txt</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data(){
    return {
      ulr:'',
    }
  },
  created() {
    // setTimeout(()=>{
    //   this.$preview({
    //     // url: 'https://cdns4.91hilife.com/agent/111-1638771326157.jpg', //图片
    //     //url: '', // xlsx
    //     // url: '', //pptx
    //     url: 'https://cdns4.91hilife.com/agent/111-1638771341253.doc', //doc,
    //     //url: 'https://testimg.tiangongy.com/100601/3b85b4f1c3accdb4bb9f7e42e1f9070e',
    //     // url: 'https://cdns4.91hilife.com/agent/111222-1638771354448.pdf',
    //     // url:'https://cdns4.91hilife.com/agent/excel1-1638772236768.xls',
    //     // url: 'https://cdns4.91hilife.com/agent/txt-1638771379407.txt',
    //     fid: '12121212'
    //   })
    // }, 2000);

  },
  methods:{
    chooseUrl(type){
      if(type == 1){
        this.$preview({
          url: 'https://cdns4.91hilife.com/agent/111-1638771326157.jpg', //图片
          fid: '12121211'
        })
      }else if(type == 2){
        this.$preview({
          url: 'https://cdns4.91hilife.com/agent/111-1638771341253.doc', //doc,
          fid: '12121212'
        })
      }else if(type == 3){
        this.$preview({
          url: 'https://cdns4.91hilife.com/agent/111222-1638771354448.pdf',
          fid: '12121213'
        })
      }else if(type == 4){
        this.$preview({
          url:'https://cdns4.91hilife.com/agent/excel1-1638772236768.xls',
          fid: '12121214'
        })
      }else if(type == 5){
        this.$preview({
          url: 'https://cdns4.91hilife.com/agent/txt-1638771379407.txt',
          fid: '12121215'
        })
      }
    }
  }
}
</script>

<style>
</style>
