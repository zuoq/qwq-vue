<template>
	<ul id="joke" class="clearfix">
		<li v-for="item in items" :style="{background:item.bgcolor}" v-link="{name:'xiaohua',params:{ link:item.link, title:item.meg}}">{{item.meg}}</li>
	</ul>
</template>
<script>
	export default {
		data: function() {
			return {
				items:[
					{meg:'糗事',bgcolor:'#9755f6',link:'qiushi'},
					{meg:'神回复',bgcolor:'#0fc4d9',link:'shenhuifu'},
					{meg:'冷笑话',bgcolor:'#0fc4d9',link:'leng'},
					{meg:'经典笑话',bgcolor:'#84d018',link:'jingdian'},
					{meg:'极品笑话',bgcolor:'#ff6678',link:'jipin'},
					{meg:'爆笑笑话',bgcolor:'#ffcc33',link:'baoxiao'},
					{meg:'幽默笑话',bgcolor:'#eed2ee',link:'youmo'},
					{meg:'内涵笑话',bgcolor:'#d1eeee',link:'neihan'},
					{meg:'搞笑段子',bgcolor:'#add8e6',link:'duanzi'},
					{meg:'夫妻笑话',bgcolor:'#cdc1c5',link:'fuqi'},
					{meg:'男女笑话',bgcolor:'#ff7f50',link:'nannv'},
				]
			}
		}
	}
</script>