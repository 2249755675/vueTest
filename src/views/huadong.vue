<template>
	<!-- 检测屏幕向上下左右哪个方向滑动 -->
	<div class="wrap">
		<div class="vwrap">
			<div class="topvideo"></div>
			<div class="video"></div>
			<div class="downvideo"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			
			this.sliderbackListener();
		},
		methods:{
			
			getAngle(angx, angy) {
			  return Math.atan2(angy, angx) * 180 / Math.PI;
			},
			
			//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
			getDirection(startx, starty, endx, endy) {
			  var angx = endx - startx;
			  var angy = endy - starty;
			  var result = 0;
			
			  //如果滑动距离太短
			  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
			    return result;
			  }
			
			  var angle = this.getAngle(angx, angy);
			  if (angle >= -135 && angle <= -45) {
			    result = 1;
			  } else if (angle > 45 && angle < 135) {
			    result = 2;
			  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
			    result = 3;
			  } else if (angle >= -45 && angle <= 45) {
			    result = 4;
			  }
			
			  return result;
			},
			
			sliderbackListener(){
			  //每天学习一点点。
			  var startx, starty;
			  //获得角度
			  //手指接触屏幕
			  document.querySelector('.video').addEventListener("touchstart", (e)=> {
			    startx = e.touches[0].pageX;
			    starty = e.touches[0].pageY;
			  }, false);
			  //手指离开屏幕
			  document.querySelector('.video').addEventListener("touchend", (e)=> {
			    var endx, endy;
			    endx = e.changedTouches[0].pageX;
			    endy = e.changedTouches[0].pageY;
			    var direction = this.getDirection(startx, starty, endx, endy);
			    switch (direction) {
			      case 0:
			                             alert("未滑动！");
			        break;
			      case 1:
			                             alert("向上！")
			        break;
			      case 2:
			                             alert("向下！")
			        break;
			      case 3:
			                             alert("向左！")
			        break;
			      case 4:
			                             alert("向右！")
			        break;
			      default:
			    }
			  }, false);
			}

		}
	}
</script>

<style lang='scss' scoped>
	.wrap{
		width:100%;
		height:100vh;
		padding:0;
		margin: 0;
		
		.vwrap{
			width:100%;
			height:100vh;
			
			.topvideo{
				width:100%;
				height:100vh;
				background:green;
				
			}
			.video{
				width:100%;
				height:100vh;
				background:rgba(0,0,0,.5);
				
			}
			.downvideo{
				width:100vh;
				height:100vh;
				background:orange;
			}
		}
	}
</style>
