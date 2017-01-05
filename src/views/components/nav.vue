<template>
	<nav class="nav {{active}}" v-on:click.prevent>
		<li class="home"><a v-link="{ path: '/' }">首页</a></li>
		<li class="interest"><a v-link="{ path: '/quwei' }">趣味</a></li>
		<li class="joke"><a v-link="{ path: '/xiaohua' }">笑话</a></li>
		<li class="about"><a v-link="{ path: '/about' }">关于</a></li>
	</nav>
	<ul>{{test}}</ul>
</template>

<script>
	export default {
		props:['active'],
		data :function() {
			return {
			}
		},
		// methods: {
		// 	makeActive:function(item) {
		// 		this.active = item;
		// 	}

		// },
		events:{

		}
	}
</script>