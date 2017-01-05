<template>
	<ul id="joke" class="clearfix">
		<li v-for="item in items" :style="{background:item.bgcolor}">{{item.meg}}</li>
	</ul>
</template>
<script>
	export default {
		data: function() {
			return {
				items:[
					{meg:'趣事',bgcolor:'#9755f6'},
					{meg:'趣图',bgcolor:'#0fc4d9'},
					{meg:'冷笑话',bgcolor:'#0fc4d9'},
					{meg:'经典笑话',bgcolor:'#84d018'},
					{meg:'极品笑话',bgcolor:'#ff6678'},
					{meg:'爆笑笑话',bgcolor:'#ffcc33'},
					{meg:'幽默笑话',bgcolor:'#eed2ee'},
					{meg:'内涵笑话',bgcolor:'#d1eeee'},
					{meg:'搞笑段子',bgcolor:'#add8e6'},
					{meg:'夫妻笑话',bgcolor:'#cdc1c5'},
					{meg:'男女笑话',bgcolor:'#ff7f50'},
				]
			}
		}
	}
</script>