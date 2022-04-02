<template>
  <div class="wrap">
    <input type="text " id="input">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    mounted() {
      var dom = document.getElementById('input');
      let res = this.throttle(this.handler,1000);
      dom.addEventListener('keyup',()=>{
        res(1,2,3,4,)
      });
    },
    methods:{
      handler(){
        console.log('请求');
      },
      //debounce
      // debounce(fn,delay){
      //   let timer;
      //   return function(){
      //     if(timer){
      //       clearTimeout(timer);
      //     }
      //     timer = setTimeout(()=>{
      //       fn.apply(this,arguments);
      //       // fn.call(this,arguments);
      //       // fn.bind(this)()
      //     },delay)
      //   }
      // },

      // //debounce 立即
      // debounce(fn,delay){
      //   let timer;
      //   return function(){
      //     if(timer){
      //       clearTimeout(timer);
      //     }
      //     if(!timer){
      //       fn.apply(this,arguments);
      //     }
      //     timer = setTimeout(()=>{
      //       timer = null;
      //     },delay)
      //   }
      // }


      // throttle(fn,delay){
      //   let time = 0;
      //   return function(){
      //     let now = new Date().getTime();
      //     if(now - time > delay){
      //       fn.apply(this,arguments);
      //       time = now;
      //     }
      //   }
      // }

      throttle(fn,delay){
        let timer;
        return function(){
          if(!timer){
            timer = setTimeout(()=>{
              fn.apply(this,argumens);
            },delay)
          }
        }
      }

    }
  }
</script>
<style>
  .wrap{
    background:white;
  }
</style>
