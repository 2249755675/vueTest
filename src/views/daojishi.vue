<template>
  <div class="wrap">
    <div class="time">{{time}}</div>
  </div>
</template>

<script>
export default {
  name: "daojishi",
  data(){
    return{
      timer:null,
      time:'',
    }
  },
  created() {
    this.timer = setInterval(()=>{
      this.countTime('2021-12-21 10:00:00');
    },1000)
  },
  methods:{
    countTime(end){
      let nowTime = new Date().getTime();
      let endTime = new Date(end).getTime();
      let diff = (endTime - nowTime)/1000;
      let days = parseInt(diff/24/60/60);
      let h = parseInt((diff - days*24*60*60)/60/60);
      let m = parseInt((diff - days*24*60*60 - h*60*60)/60);
      let s = parseInt((diff - days*24*60*60 - h*60*60 - m*60));
      this.time = days + ' ' + h + ':' + m + ':' + s;
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  .time{

  }
}
</style>
