<template>
  <div class="wrap">
    <div class="tip">请选择已下订单申请兑换</div>
    <div class="content">
      <van-checkbox-group v-model="checked">
        <van-checkbox :name="item.orderNum" icon-size="22px" v-for="item in list">
          <div class="order">
            <div class="orderNum">结算单号：{{item.orderNum}}</div>
            <div class="orderType">{{item.orderType}}</div>
          </div>
          <div class="product">
            <div class="productName">{{item.productName}}</div>
            <div class="productPrice">{{item.price?Number(item.price).toFixed(2):0}}</div>
          </div>
          <div class="shopName">{{item.shopName}}</div>
          <div class="time">{{item.time}}</div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="footer">
      <div class="allCheck">

      </div>
      <div class="total">
        <div class="total-left">
          <div class="total-text">提现金额</div>
          <div class="total-price">¥0.00</div>
        </div>
        <div class="total-right">
          <div class="btn">下一步</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allCheck",
  data(){
    return{
      list:[],
      checked:[],
      htmlString:`<div class="row1">第一行</div><div class="row2">第二行</div>`,
      num:1
    }
  },
  computed:{
    account(){
      return this.num * 2;
    },
    numPlus:{
      get(){
        return this.num + 1
      },
      set(val){
        console.log(val,'----111')
        this.num = val - 1
      }
    }
  },
  created(){
    this.list = [
      {orderNum:'2020052739110901',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
      {orderNum:'2020052739110902',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
      {orderNum:'2020052739110903',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
      {orderNum:'2020052739110904',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
      {orderNum:'2020052739110905',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
      {orderNum:'2020052739110906',orderType:'分佣收益',productName:'商品名称',price:'100',shopName:'xx-xx店',time:'2020-04-26 16:32:09'},
    ]
  },
  methods:{

  }
}
</script>
<style scoped lang="scss">
  .wrap{
    .tip{
      font-size:14px;
      color:#333;
      line-height:20px;
      font-family: PingFangSC-Regular, PingFang SC;
      text-align:left;
      box-sizing: border-box;
      padding-left:12px;
      padding-top:10px;
      padding-bottom:10px;
      border-bottom:1px solid #ccc;
    }
    .content{
      ::v-deep .van-checkbox-group{
        box-sizing: border-box;
        padding:0 12px;
        text-align:left;
        .van-checkbox{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top:20px;
          padding-bottom:18px;
          border-bottom:1px solid #ccc;
          .van-checkbox__icon{
            flex:1;
          }
          .van-checkbox__label{
            flex:9;
          }
        }
      }
      & .order{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:14px;
        line-height:14px;
        color:#333;
        margin-bottom:8px;
        font-family: PingFangSC-Regular, PingFang SC;
        .orderType{
          font-size: 12px;
          color:#666;
        }
      }
      & .product{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color:#333;
        line-height: 14px;
        margin-bottom:4px;
        //font-family:PingFangSC-Regular, PingFang SC;
        font-family: pingfangsc-regular, pingfang sc;
        .productPrice{
          font-size:20px;
          line-height:20px;
          font-weight:bolder;
          color:#333;
          font-family: DINAlternate-Bold, DINAlternate;
        }
      }
      .shopName,.time{
        font-size:12px;
        line-height:12px;
        color:#666;
        margin-bottom:4px;
        font-family: pingfangsc-regular,pingfang sc;
      }
    }
    .footer{
      .allCheck{
        width:100%;
        height:30px;
      }
      .total{
        width:100%;
        height:56px;
        display: flex;
        justify-content:space-between ;
        align-items: center;
        box-sizing: border-box;
        padding:0 12px;
        .total-left{
          .total-text{
            font-size:12px;
            color:#494949;
            font-family:PingFangSC-Regular,PingFang SC;
          }
          .total-price{
            font-size:20px;
            line-height:16px;
            color: #EA4F4F;
            font-family:PingFangSC-Semibold, PingFang SC;
          }
        }
      }
    }
  }
</style>
