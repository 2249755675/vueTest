<template>
  <div class="wrap">
    <draggable v-model="myArray" handle=".my-icon"  chosenClass="chosen" forceFallback="true" group="people" animation="1000" @start="onStart" @end="onEnd">
      <transition-group>
        <div class="item" v-for="element,index in myArray" :key="element.id">
          <span class="my-icon"></span>
          {{element.name}}
          <el-button type="text" @click="sortClick('up',index)" :disabled="index==0">上移</el-button><el-button type="text" @click="sortClick('down',index)" :disabled="index == myArray.length-1">下移</el-button>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  export default {
    name: "dragTest",
    components:{draggable},
    data(){
      return{
        //定义要被拖拽对象的数组
        // myArray:[
        //   {people:'cn',id:1,name:'www.itxst.com'},
        //   {people:'cn',id:2,name:'www.baidu.com'},
        //   {people:'cn',id:3,name:'www.taobao.com'},
        //   {people:'us',id:4,name:'www.google.com'}
        // ]
        myArray:[
          {name:'文字1',id:1},
          {name:'文字2',id:2},
          {name:'文字3',id:3},
        ],
        arr:[
          {name:'item1',seconde:
              [
                {subTitle:'13'},
                {subTitle:'11'},
                {subTitle:'14'},
                {subTitle:'12'},
              ]
          },
          {name:'item2',seconde:
              [
                {subTitle:'23'},
                {subTitle:'21'},
                {subTitle:'22'},
                {subTitle:'24'},
              ]
          }
        ]
      }
    },
    created() {

    },
    methods:{
      //开始拖拽事件
      onStart(e){
        console.log('拖拽开始',e,this.myArray)
        this.drag=true;
      },
      //拖拽结束事件
      onEnd(e) {
        console.log('拖拽结束',e,this.myArray)
        this.drag=false;
      },
      //点击排序
      sortClick(type,index){
        if(type == 'up'){//上移
          this.myArray.splice(index,1,...this.myArray.splice(index-1,1,this.myArray[index]))
        }else if(type == 'down'){//下移
          this.myArray.splice(index,1,...this.myArray.splice(index+1,1,this.myArray[index]))
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    /*被拖拽对象的样式*/
    .item {
      padding: 6px;
      background-color: #fdfdfd;
      /*border: solid 1px #eee;*/
      margin-bottom: 10px;
      cursor: move;
    }
    /*选中样式*/
    .chosen {
      /*border: solid 2px #3089dc !important;*/
    }
    .my-icon{
      background:url('../assets/logo.png') no-repeat;
      background-size: cover;
      width:20px;
      height:20px;
      display: block;
    }
  }
</style>
