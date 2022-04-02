<template>
  <div class="about">
<!--	<button @click="question2">点击</button>-->
      <div v-for="item in testArr"
        :id="'item'+ item"
           @click="itemClick('itemStatus'+item)"
           v-if="!itemStatus['itemStatus'+item]"
      >
          {{item}}
      </div>
      <div class="img">我是图片</div>
      <van-button type="primary">主要按钮</van-button>
      <div class="dialog" @click="dialogClick">弹窗</div>
			<div class="is_local" v-if='is_local == "false"'>我是占位的</div>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				state:false,
				testArr:[4,5,6,7,8],
				itemStatus:{},
				is_local:'false'
			}
		},
		watch:{
			'$route'(to,from){
				console.log(to,from,'33333');
			}
		},
		created(){
			this.name = this.$route.query.name;
			this.is_local = this.$route.query.is_local;
			console.log(this.is_local,typeof this.is_local,'111');
			window.vue = this
		},
		methods:{
			question1(){
				return new Promise((resolve,reject)=>{
					setTimeout(()=>{
						let num = Math.random();
						if(num > 0.5){
							this.state = true;
							resolve(this.state)
						}else{
							this.state = false;
							resolve(this.state);
						}
					},3000)
				})
			},
			question2(){
				this.question1().then((res)=>{
					if(res){
						alert("成功");
					}else{
						alert("失败");
					}
				})
			},
            itemClick(id){
			    // this.$set(this.itemStatus,id,true);
            },
            dialogClick(){
                this.$dialog.confirm({
                    title: '标题',
                    message: '弹窗内容<img class="closeImg" src="../assets/my.jpg"/>',
                    showCancelButton:true
                })
                    .then(() => {
                        // on confirm
                    })
                    .catch(() => {
                        // on cancel
                    });

            }
		}
	}
</script>
<style lang="scss">
    .color{
        color:red;
    }
    .img{
        width:100%;
        height:40px;
        background:orange;
        overflow: hidden;
    }
</style>
