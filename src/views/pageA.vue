<template>
	<div>
		<div>pageA页面</div>
		<input type="text" v-model="name">
	</div>
</template>

<script>
	//首先跳转到pageA页面，输入框里填写，跳转到pageB页面，返回pageA页面，输入框保存，
	//首页跳转到pageA页面，输入框里填写，跳转到pageC页面，返回pageA页面，输入框不保存
	export default{
		data(){
			return{
				name:''
			}
		},
		created(){
			
		},
		beforeRouteEnter(to,from,next){
			console.log(to,from)
			//这里没有this
			console.log(this)
			// if(from.path == '/pageC'){
			// 	alert()
			// 	this.$route.meta.keepAlive = false;
			// }else{
			// 	this.$route.meta.keepAlive = true;
			// }
			if(from.path == "/pageB"){
				// alert("1")
				to.meta.keepAlive = true;
			}else{
				// alert("2")
				to.meta.keepAlive = false;
			}
			next();
		}
	}
</script>
<style>
	
</style>
