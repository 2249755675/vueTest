<template>
  <div class="wrap">
    <div @click="add">添加</div>
  </div>
</template>

<script>
export default {
  name: "objectHandler",
  data(){
    return{
      obj:[
        {shopName:'店铺1',tableData:[{name:'商品1'}]}
      ],
      tableData:[
        {shopName:'店铺1',tableData:[
            {name:'商品1'},
            {name:'商品2'},
            {name:'商品3'},
          ]},
        {shopName:'店铺2',tableData:[
            {name:'商品4'},
            {name:'商品5'},
            {name:'商品6'},
          ]}
      ],
      data:[],
      arr:['32','18','90','34','57','87','40'],
      arr2:[
        {approNode:3,approName:'节点三'},
        {approNode:1,approName:'节点一'},
        {approNode:4,approName:'节点四'},
        {approNode:2,approName:'节点二'},
      ],
    }
  },
  created(){
    // this.arrMethod();
    // this.arrObj();
    // this.arrCheck();
    this.returnValue();
  },
  methods:{
    returnValue(){
      // for(var i = 0;i < 10;i++){
      //   if(i == 3){
      //     return;
      //   }
      //   console.log(i);
      // }

      // for(var i = 0;i < 3;i++){
      //   for(var j = 0;j < 5;j++){
      //     if(j == 2){
      //       continue;
      //     }
      //     console.log(i + '-' + j);
      //   }
      // }

      let arr = [
        {name:'商品2'},
        {name:'商品7'},
        {name:'商品8'},
        {name:'商品1'},
        {name:'商品9'},
      ]
      // arr.forEach((item,index1)=>{
      //   this.tableData.forEach((item2,index2)=>{
      //     if(item2.tableData){
      //       item2.tableData.forEach((item3,index3)=>{
      //         if(item.name == item3.name){
      //           return;
      //         }
      //         console.log(index1 + '-' + index2 + '-' + index3)
      //       })
      //     }
      //   })
      // })

      // this.arr2.forEach((item)=>{
      //   this.arr.forEach((item2)=>{
      //     if(item2 == 18){
      //       return;
      //     }
      //     console.log(item.approName + '-' + item2);
      //   })
      // })

      try{
       let num = 0;
       arr.forEach((item)=>{
         this.tableData.forEach((item2)=>{
           if(item2.tableData){
             item2.tableData.forEach((item3)=>{
               if(item.name == item3.name){
                 throw new Error('终止循环')
               }
               num++;
               console.log(num)
             })
           }
         })
       })
      }catch(e){
        console.log(e,'错误提示')
      }
    },
    add(){
      let arr = [
          {name:'商品2',shopName:'店铺1'},
          {name:'商品3',shopName:'店铺1'},
          {name:'商品4',shopName:'店铺1'},
          {name:'商品2',shopName:'店铺2'},
          {name:'商品2',shopName:'店铺3'},
      ]
      arr.forEach((item)=>{
        let index = this.obj.findIndex((val,index)=>{
          return val.shopName == item.shopName
        })
        console.log(index,'返回值----')
        if(index != -1){
          this.obj[index].tableData.push({name:item.name})
        }else{
          this.obj.push({shopName: item.shopName,'tableData':[{name:item.name}]})
        }
      })
      console.log(this.obj,'=====')
    },
    arrCheck(){
      let arr = [
        {name:'商品2'},
        {name:'商品7'},
        {name:'商品8'},
        {name:'商品1'},
        {name:'商品9'},
      ]
      let index = -1;
      arr.forEach((item)=>{
        this.tableData.forEach((item2,indexNum)=>{
          if(item2.tableData){
            item2.tableData.forEach((item3)=>{
              if(item.name == item3.name){
                index = indexNum;
              }
              console.log('-------')
            })
          }
        })
      })
      console.log(index)
    },
    //数字数组排序
    arrMethod(){
      this.arr.sort(function (a,b){
        return a - b;//升序
      })
      console.log(this.arr)
    },
    //对象数组排序
    arrObj(){
      this.arr2.sort((a,b)=>{
        return a.approNode - b.approNode//升序
      })
      console.log(this.arr2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{

  }
</style>
