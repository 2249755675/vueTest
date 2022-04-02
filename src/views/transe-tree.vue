<template>
	<div class="wrap">
		<el-transfer v-model="value" :data="options"></el-transfer>
	</div>
</template>

<script>
	export default{
		data() {
			const generateData = _ => {
			        const data = [];
			        for (let i = 1; i <= 15; i++) {
			          data.push({
			            key: i,
			            label: `备选项 ${ i }`,
			            disabled: i % 4 === 0
			          });
			        }
			        return data;
			      };

		  return {
				options:[{
					label:'一级菜单',
					key:1,
					children:[{
						label:'一级子菜单',
						key:2
					}]
				}],
				value:[]
		  }
		}
	}
</script>

<style lang='scss' scoped>
	.wrap{
		padding-top:200px;
		background:white;
	}
</style>
