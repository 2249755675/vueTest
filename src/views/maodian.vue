<template>
  <div class="wrap">
    <div class="city-wrap" v-for="item in names">
      <div class="title" :id="item.id">{{item.id}}</div>
      <div class="title">{{item.title}}</div>
      <div class="city-item-wrap">
        <div class="city-item" v-for="item2 in item.citys">{{item2}}</div>
      </div>
    </div>
    <div class="index-bar">
      <a :href="'#'+item" :class="activeIndex==index?'active-index':''" @click="itemClick(index)" v-for="(item,index) in city">{{item}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "maodian.vue",
    data(){
      return{
        city:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',],
        names:[
          {
            title:'朝阳区',
            id:'A',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'B',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'C',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'D',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'E',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'F',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'G',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'H',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'I',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'J',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'K',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'L',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'M',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'N',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'O',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'P',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'Q',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'R',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'S',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'T',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'U',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'V',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'W',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'X',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'Y',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
          {
            title:'朝阳区',
            id:'Z',
            citys:['幸福里','天宫院','天通苑','还呼吸里','珠江帝景']
          },
        ],
        activeIndex:null
      }
    },
    methods:{
      itemClick(index){
        this.activeIndex = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    overflow: scroll;
    .title{
      margin-left:15px;
      text-align: left;
      margin-bottom: 12px;
    }
    .city-item-wrap{
      display: flex;
      flex-wrap: wrap;
      .city-item{
        width:99px;
        height:32px;
        text-align: center;
        line-height: 32px;
        background:#ccc;
        border-radius: 15px;
        margin-right:12px;
        margin-bottom: 12px;
      }
    }
    .index-bar{
      position: fixed;
      top:50%;
      right:0;
      transform: translateY(-50%);
      a{
        display: block;
        color:green;
        width:16px;
        height:16px;
        text-align: center;
        line-height: 16px;
        margin-bottom: 5px;
      }
      .active-index{
        color:white;
        border-radius: 50%;
        background:green;
      }
    }
  }
</style>
