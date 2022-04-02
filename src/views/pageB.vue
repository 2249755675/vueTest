<template>
	<div>
		pageB页面
	</div>
</template>

<script>
	//首先跳转到pageA页面，输入框里填写，跳转到pageB页面，返回pageA页面，输入框保存，
	//首页跳转到pageA页面，输入框里填写，跳转到pageC页面，返回pageA页面，输入框不保存
	export default{
		data(){
			return{
				
			}
		},
		// beforeRouteLeave(to,from,next){
		// 	console.log(to,from)
		// 	to.meta.keepAlive = true;
		// 	next();
		// }
	}
</script>

<style>
</style>
