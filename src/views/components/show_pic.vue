<template>
	<h2>图片内容</h2>
	<img v-bind:src="content" alt="" :style="{backgroundImage: 'url('+content+')'}" >
	<ol class="clearfix">
		<li>123</li>
		<li>2016.7.24</li>
	</ol>
	<ul class="showPic" v-if="imgopen" transition="picts"> 
		<img v-bind:src="imgsrc" alt="" @dbclick="test">
	</ul>
</template>

<script>
	export default {
		props: ['imgopen','imgsrc','content'],
		methods: {
			test: function() {
				console.log('sdsd');
			}
		}
	}
</script>