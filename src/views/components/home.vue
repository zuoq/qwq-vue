<template>
	<section v-for="item in items" class="home-con clearfix">
		<ul v-if="item.xtype==1" @click="showPic($index)">
			<!-- <h2>图片内容</h2>
			<img v-bind:src="item.content" alt="" :style="{backgroundImage: 'url('+item.content+')'}" >
			<ol class="clearfix">
				<li>123</li>
				<li>2016.7.24</li>
			</ol>
			<ul class="showPic" v-if="imgOpen" transition="picts"> 
				<img v-bind:src="imgSrc" alt="">
			</ul> -->
			<show-pic :imgopen="imgOpen" :imgsrc="imgSrc" :content="item.content"><show-pic>	
		</ul>
		<ul v-if="item.xtype==2">
			<h2>视屏内容</h2>
			<!-- <a v-bind:href="item.content" :style="{backgroundImage: 'url('+item.cover+')'}"></a> -->
			<video  alt=""></video>
			<ol class="clearfix">
				<li>123</li>
				<li>2016.7.24</li>
			</ol>
		</ul>
		<ul v-if="item.xtype==0">
			<h2>文字内容</h2>
			<p class="text" :style="{height:textHeight}" @click="showText">{{item.content}}</p>
			<ol class="clearfix">
				<li>123</li>
				<li>2016.7.24</li>
			</ol>

			<div v-if="textOpen"  class="textOpen">
				<h2><i class="iconfont" @click="showMore">&#xe66b;</i>{{$route.params.id | json}}</h2>
				<section v-for="list in lists" class="content" :style="{width:width}">
					<p>{{item.content | replaceCo list.content}}</p>
				</section>									
			</div>
		</ul>
		
	</section>
</template>

<script>
	import api from '../../lib/api.js';
	import show_pic from './show_pic.vue';
	export default {
		data :function() {
			return {
				imgOpen : false,
				textOpen: false,
				textHeight:"40px",
				imgSrc: '',
				items: [
					// {	
					// 	type:1,
					// 	src:'http://img5.imgtn.bdimg.com/it/u=2805319622,2331480379&fm=21&gp=0.jpg'
					// },
					// {
					// 	type:2,
					// 	src: 'http://static.ihuopo.com/uploads/videos/1469423124.mp4'
					// },
					// {
					// 	type:3,
					// 	text: '本人女，不胜酒力。啤酒一杯就困得不省人事。一天老公买了两瓶菠萝啤给我，吃饭时我喝了一瓶，饭毕不想刷锅，就躺在沙发上装醉。尼玛的，老公硬生生把我揪起来让我看酒瓶上的那行字：本饮料不含酒精……'
					// }
				]
			}
		},
		components: {
			'show-pic': show_pic
		},
		methods: {
			showText: function() {
				if(!this.textOpen) {
					this.textHeight = "auto";
					this.textOpen = !this.textOpen;
				}else {
					this.textHeight = "1.25rem";
					this.textOpen = !this.textOpen;
				}
				
				// this.style.height = "auto";
			},
			showPic: function(index) {
				this.imgOpen = !this.imgOpen;
				this.imgSrc = this.items[index].content;
			}
		},
		ready: function() {
			var resource = this.$resource(api.recommend);
			resource.get()
				.then(function(res) {
					var data = res.data;
					this.items = data;
					console.log(this.items);
				});
		}
	}
</script>