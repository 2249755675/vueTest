<template>
  <div class="wrap">
<!--    canvas绘制海报-->
<!--    <qrcode :options="{height:50,width:50}" :value="qrCodeUrl"></qrcode>-->

    <div class="hidden" style="display: none;">
<!--      <canvas id="mycanvas" :width="w" :height="h" />-->
      <canvas id="mycanvas" :width="w" :height="h"/>
      <img class="goodsImg" src alt="" crossOrigin="Anonymous">
      <div class="qrCode"><img id="qrCode"></div>
    </div>
    <qrcode style="display: none" id="qrComponent" :options="{height:50,width:50}" :value="qrCodeUrl"></qrcode>
    <img class="postImg" src alt>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: "poster",
  data(){
    return{
      qrCodeUrl:'https://blog.csdn.net/qq_24992475/article/details/115343040?spm=1001.2014.3001.5501',
      poster:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F09_Website_appreciate%2F10-07-11%2F1278861720_g.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638600241&t=83275d3cc61d24652963976a1ec4a13f',
      poster1:require('../assets/img.png'),
      w: 375,
      h: 375,
      info:{
        url:'https://blog.csdn.net/qq_24992475/article/details/115343040?spm=1001.2014.3001.5501',
        goodsImg:require('../assets/img.png'),
        sharePrice1:159.00,
        sharePrice2:0.02,
        afterPrice1:100,
        afterPrice2:99,
        title:'植物学家沐浴露清爽型'
      },
      canvasShow:false,
    }
  },
  created() {
  },
  mounted() {
    // this.draw();
    let img = new Image();
    img.src = this.poster1;
    let _this = this;
    img.onload = function(e){
      console.log(this.width,this.height,'[[[[[[')
      _this.w = this.width;
      _this.h = this.height;
      _this.init();
    }
    // this.init();
  },
  methods:{
    toDataURL(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    },
    draw() {
      // 这里可以添加一个loading

      let qrImg = new Image()  // 创建二维码图片对象
      // qrImg.src = this.info.url  // 二维码 base64 链接码
      qrImg.crossOrigin = 'Anonymous'
      // this.toDataURL(this.info.url,(res)=>{
      //   console.log(res,'=====')
      //   qrImg.src = res;
      // })

      let goodsImg = ''
      goodsImg =  document.querySelector('.goodsImg')
      // goodsImg.src = this.info.goodsImg  // 网络图片地址

      // 开始绘制
      goodsImg.onload = () => {
        let canvas = document.getElementById('mycanvas')
        let ctx = canvas.getContext('2d', {
          antialias: true  // 是画质更清晰  其他配置可以参考文档
        })

        // 填充背景色
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, 650, 1200)

        // 绘制价格
        ctx.fillStyle = '#E85700'  // 设置字体颜色
        ctx.font = '24px PingFang SC'  // 字体、字体大小
        ctx.fillText('￥', 50, 720)  // 文字内容和位置  相当于绝对定位left 和top值  定位参照位置是canvas区域左上角
        ctx.font = '36px PingFang SC'
        ctx.fillText(`100.01`, 75, 720)  // 价格涉及到小数点，所以对价格做了处理，拼在一起是一个完整的价格
        ctx.fillStyle = 'rgba(153,153,153,1)'   // 切换颜色 绘制原价
        ctx.font = '24px PingFangSC-Regular,PingFang SC'
        ctx.fillText(`原价：￥110.00`, 220, 720)

        // 绘制标题
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        ctx.font = '36px PingFangSC-Regular,PingFang SC'
        /*  标题分了两行绘制，因为标题长度是随机的，只绘制一行，
          效果不好；
          所以这里写了一个方法，可以截取固定字节的字符串
          标题长度超过28字节，截取前28字节的字符串，在第
          一行绘制；
          然后拿到剩余的字符串second，截取固定26字节字符串
          strSecond，对比两者的的长度是否一致，或者两者的
          内容是否完全一样。如果一样，second== strSecond,
          可以直接绘制 second； 如果 second > strSecond,
          可以在 strSecond 后面 + '...' ，再绘制，达到溢出
          省略的效果。
        */
        let first = '第一'
        ctx.fillText(first, 50, 780)
        let second = this.info.title.substr(first.length)
        let strSecond = '第二'

        if (second == strSecond) {
          ctx.fillText(second, 50, 830)
        } else {
          ctx.fillText(strSecond + '...', 50, 830)
        }

        // 绘制提示语
        ctx.fillStyle = 'rgba(153,153,153,1)'
        ctx.font = '24px PingFangSC-Regular,PingFang SC'
        ctx.fillText('长按或扫描查看', 232, 1110)

        ctx.drawImage(qrImg, 211, 872, 209, 209)  // 绘制二维码
        // ctx.drawImage(proImg, 0, 0, 650, 650) // 绘制商品图片
        let Url = document.getElementById('mycanvas').toDataURL('image/png')  // 转base64
        document.querySelector('.postImg').src = Url  // 展示图片

        // 哈哈，这里又写了一遍，因为出现二维码没有绘制出来的情况
        qrImg.onload = () => {
          ctx.drawImage(qrImg, 211, 872, 209, 209)
          // ctx.drawImage(proImg, 0, 0, 650, 650)
          let Url = document.getElementById('mycanvas').toDataURL('image/png')
          document.querySelector('.postImg').src = Url

          // 绘制完成 清除loading   什么loading，我也不知道
        }
        qrImg.src = this.info.url;
      }
      goodsImg.src = this.info.goodsImg;
    },
    init(){
      let _this = this;
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');

      var img = new Image();
      var qrImg = new Image();
      // img.src = this.poster;
      img.src = this.poster1;
      img.onload = function(){
        console.log(_this.w,'0-0-0-0-0-0-0-')
        ctx.drawImage(img,0,0);
        ctx.font = '16px PingFangSC-Regular,PingFang SC'
        ctx.textAlign = 'center';//水平居中
        ctx.textBaseline = 'middle';//垂直居中
        ctx.fillText('标题文字',_this.w/2,200)


        let qrUrl = document.getElementById('qrComponent').toDataURL('image/png');
        qrImg.src = qrUrl;
        qrImg.onload = function(){
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.drawImage(qrImg,_this.w/2-this.width/2,240);
          let Url = document.getElementById('mycanvas').toDataURL('image/png')//转成base64
          let postImg = document.querySelector('.postImg');
          postImg.src = Url;
        }

        ctx.font = '18px PingFangSC-Regular,PingFang SC'
        ctx.fillText('长按保存图片',_this.w/2,350)

      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  .postImg{
    width:150px;
    height:auto;
  }
}
</style>
