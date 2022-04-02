<template>
  <div class="home">
    <input type="text" class="input">
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data(){
  	return{

	  }
  },
  mounted() {
    let dom = document.querySelector('.input');
    // dom.addEventListener('keyup',this.debounce(this.handler,1000,false))
    // dom.addEventListener('keyup',this.throttle(this.handler,1000,true))
    let inputthrottle = this.throttle(this.handler,1000,false);
    dom.addEventListener('keyup',(e)=>{
      inputthrottle(e,'历史',23,'男');
    })
  },
  methods:{
    handler(){
      console.log('请求');
    },
    // //非立即执行版
    // debounce(fn,delay){
    //   let timer;
    //   return function(){
    //     if(timer)clearTimeout(timer);
    //     timer = setTimeout(()=>{
    //       fn.apply(this,arguments);
    //     },delay);
    //   }
    // }

    // //立即执行版
    // debounce(fn,delay){
    //   let timer
    //   return function(){
    //     let _this = this;
    //     let arg = arguments;
    //     if(timer)clearTimeout(timer);
    //     if(!timer){
    //       fn.apply(_this,arg);
    //     }
    //     timer = setTimeout(()=>{
    //       timer = null;
    //     },delay);
    //   }
    // }

    // //结合版
    // debounce(fn,delay,type){
    //   let timer
    //   return function(){
    //     let _this = this;
    //     let arg = arguments;
    //     if(timer)clearTimeout(timer);
    //     if(type){
    //       if(!timer){
    //         fn.apply(_this,arg);
    //       }
    //       timer = setTimeout(()=>{
    //         timer = null;
    //       },delay)
    //     }else{
    //       timer = setTimeout(()=>{
    //         fn.apply(_this,arg);
    //       },delay)
    //     }
    //   }
    // }

    // //立即执行版
    // throttle(fn,delay){
    //   let time = 0;
    //   return function(){
    //     let _this = this;
    //     let arg = arguments;
    //     let now = new Date().getTime();
    //     if(now - time > delay){
    //       fn.apply(_this,arg);
    //       time = now;
    //     }
    //   }
    // }

      // //非立即执行版
      // throttle(fn,delay){
      //   let timer
      //   return function(){
      //     let _this = this;
      //     let arg = arguments;
      //     if(!timer){
      //       timer = setTimeout(()=>{
      //         fn.apply(_this,arg);
      //         timer = null;
      //       },delay)
      //     }
      //   }
      // }

    throttle(fn,delay,type){
      let time = 0;
      let timer
      return function(){
        let _this = this;
        let arg = arguments;
        console.log(arg,'3333')
        if(type){
          let now = new Date().getTime();
          if(now - time > delay){
            fn.apply(_this,arg);
            time = now;
          }
        }else{
          if(!timer){
            timer = setTimeout(()=>{
              fn.apply(_this,arg);
              timer = null;
            },delay)
          }
        }
      }
    }

  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 200px;
      height: 200px;
      background: grey;
      text-align: center;
      // line-height: 200px;
      img {
          width: 100px;
          height: 100px;
      }
    }
  }
}
</style>
