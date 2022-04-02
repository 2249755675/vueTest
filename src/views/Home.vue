<template>
  <div class="home">
      这是测试页面
      <div class="content">
      <div v-for="item in contentData">
        <!-- <img src="../assets/my.JPG" alt=""> -->
        <img :src="item.pic" alt="" @click.prevent>
        <p>{{item.title}}</p>
      </div>
    </div>
    <input type="hidden" id='time' :value="false">
    <div class="btn" @click="reqClick">点击请求</div>
    <div @click="goPage">点击跳转</div>
    _________________________________
    <button id='showModalBtn' ref='btn'>点击</button>
    <input id='input' v-if='showInput' type="text" ref="input" autofocus="autofocus">
    <div class="imgWrap">
      <img id="img" src="../assets/my.jpg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {},
  data(){
	  return{
		  contentData:[
			  {pic:require('../assets/my.jpg'),title:"头像1"},
			  {pic:require('../assets/my.jpg'),title:"头像2"},
			  {pic:require('../assets/my.jpg'),title:"头像3"},
		  ],
			imgLink:[{"fileName":"review/other/1614070282435/9c313b4e-3c46-4bc9-bacc-521b717b0e99.png","fileSize":741865,"fileType":1,"fileSuffix":"image/png","originalCDNAddr":"review/other/1614070282435/9c313b4e-3c46-4bc9-bacc-521b717b0e99.png","cdnDomainHTTP":"https://files1.91helife.com/review/other/1614070282435/9c313b4e-3c46-4bc9-bacc-521b717b0e99.png?e=1614073885&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:7MvJjZITuYCE7ODDNf5IPN_vjts=","cdnDomainHTTPS":"https://files1.91helife.com/review/other/1614070282435/9c313b4e-3c46-4bc9-bacc-521b717b0e99.png?e=1614073885&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:7MvJjZITuYCE7ODDNf5IPN_vjts=","fileID":"7974762065802447692","cdnPath":"https://files1.91helife.com/review/other/1614070282435/9c313b4e-3c46-4bc9-bacc-521b717b0e99.png?e=1614073885&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:7MvJjZITuYCE7ODDNf5IPN_vjts=","cdnID":"user_private","id":"c09d57ca-0c26-455d-b769-a2ce7591e293"},{"fileName":"review/other/1614070282436/dd9bdcc5-df97-4638-950f-f4c4a81dc8c7.png","fileSize":755443,"fileType":1,"fileSuffix":"image/png","originalCDNAddr":"review/other/1614070282436/dd9bdcc5-df97-4638-950f-f4c4a81dc8c7.png","cdnDomainHTTP":"https://files1.91helife.com/review/other/1614070282436/dd9bdcc5-df97-4638-950f-f4c4a81dc8c7.png?e=1614073886&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:limH9V3YbvqUnKCaybVoo4DISLU=","cdnDomainHTTPS":"https://files1.91helife.com/review/other/1614070282436/dd9bdcc5-df97-4638-950f-f4c4a81dc8c7.png?e=1614073886&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:limH9V3YbvqUnKCaybVoo4DISLU=","fileID":"3995090805015070732","cdnPath":"https://files1.91helife.com/review/other/1614070282436/dd9bdcc5-df97-4638-950f-f4c4a81dc8c7.png?e=1614073886&token=ZIq3vwIqfwWVhZ_Yz9SQPn49GtvyeiejZCYzO9HW:limH9V3YbvqUnKCaybVoo4DISLU=","cdnID":"user_private","id":"dc84a47b-8466-4177-bc88-3ee172f2572e"}],
			age:0,
			sex:'',
			showInput:false,
	  }
  },
	mounted() {
    //阻止图片默认事件
    document.querySelector('#img').addEventListener('touchstart',(e)=>{
      e.preventDefault()
      console.log(this,'-------')
    })
    // document.querySelector('#img').addEventListener('touchmove',(e)=>{
    //   e.preventDefault()
    // })
    // document.querySelector('#img').addEventListener('touchend',(e)=>{
    //   e.preventDefault()
    // })

    var time = document.getElementById('time').value;
		console.log(typeof time)
		this.imgLink.forEach((item)=>{
			let indexHttps = 0;
			let indexHttp = 0;
			indexHttps = item.cdnDomainHTTPS.indexOf('.com',0);
			indexHttp = item.cdnDomainHTTP.indexOf('.com',0);
			item.cdnDomainHTTPS = item.cdnDomainHTTPS.substr(0,indexHttps+4);
			item.cdnDomainHTTP = item.cdnDomainHTTP.substr(0,indexHttp+4);
		})
		console.log(this.imgLink,'11111');
		let res = {
			name:'zhansan',
			attr:{
				age:22,
				sex:'man'
			}
		}
		//解构赋值
		let {age,sex} = res.attr;
		console.log(age,sex,'2222')
		// 	document.getElementById("showModalBtn").addEventListener("click", () => {
		// 		this.showInput = true;
		// 		//使用nextTick，让input框自动聚焦（ios和安卓手机都可以）
		// 		this.$nextTick(() => {
		// 				this.$refs.inputRef.focus();
		// 		});

		// 		//this.$refs.input.focus(); //没有作用 不懂原因？ 之前有试过这样写是可以让input聚焦的

		// 		// focus方法写在setTimeout里面不起作用
		// 		// setTimeout(() => {
		// 		//this.$refs.input.focus();
		// 		// }, 1000);
		// })
		// var dom = document.getElementById('showModalBtn');
		// this.$refs.btn.addEventListener('click',()=>{
		// 	this.showInput = true;
		// 	this.$nextTick(()=>{
		// 		this.$refs.input.focus();
		// 	})
		// })
		this.returnFinish().then((res)=>{
			console.log(res,'9999');
			this.showInput = true;
			this.$nextTick(()=>{
				this.$refs.input.focus();
				this.$refs.input.focusin = ()=>{
					alert();
				}
			})
		})
	},
	methods:{
		//setTimeout的promise
		returnFinish(){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve('ok')
				},3000)
			})
		},
		reqClick(){
			let res = this.response();
			console.log(res,'111');
		},
		response(){
			return  {
				name:'zhansan',
				attr:{
					age:22,
					sex:'man'
				}
			};
		},
		goPage(){
			window.location.href = 'http://localhost:8080/#/about?name=zhansan&is_local=false'
		}
	}
}
</script>
<style lang="scss">
	.home{
		width:100%;
		.content{
			width:100%;
			display: flex;
			justify-content: center;
			align-items: center;
			div{
				width:200px;
				height:200px;
				background:grey;
				text-align: center;
				// line-height: 200px;
				img{
					width:100px;
					height:100px;
				}
			}
		}
    .imgWrap{
      width:100px;
      height:100px;
      margin:0 auto;
      img{
        width:100%;
        height:100%;
      }
    }
	}
</style>
