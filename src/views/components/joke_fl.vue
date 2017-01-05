<template>
	<div class="joke_fl" id="joke_fl">
		<div class="joke_fl_mark" v-if="showMark">
			<img src="../../assets/loading.gif">
		</div>
		<div v-if="showItem">
			<h2><i class="iconfont" @click="goBack('../../xiaohua')">&#xe66b;</i>{{$route.params.title | json}}</h2>
			<ul v-for="list in lists">
				<p @click='showMore($index)'>{{list.content}}</p>
				<ol class="clearfix">
					<li><i class="iconfont" @click="addLike($index)">&#xe600;</i>{{list.like}}</li>
					<li>{{list.time}}</li>
				</ol>
			</ul>
		</div>

	<!-- 	<div v-show="showCon"  class="showCon" >
			<h2><i class="iconfont" @click="showMore">&#xe66b;</i>{{$route.params.title | json}}</h2>
			<div id="text" class="text" :style="{width:allWidth,left:leftIndex}">
				<section  class="content" :style="{width:width}">
					<p>{{{lists[0].content}}}</p>

					<div class="page">
						<i class="iconfont" @click="toPrev($index)">&#xe606;</i>
						<span>{{$index}}</span>
						<i class="iconfont" @click="toNext($index)">&#xe607;</i>
					</div>
				</section>				
			</div>						
		</div> -->
		<!-- <div v-show="showCon"  class="showCon" >
			<h2><i class="iconfont" @click="showMore">&#xe66b;</i>{{$route.params.title | json}}</h2>
			<div id="text" class="text" :style="{width:allWidth,left:leftIndex}">
				<section v-for="list in lists" class="content" v-show="showIndex==0" :style="{width:width}">
					<p>{{{list.content | replaceCo list.content}}}</p>

					<div class="page">
						<i class="iconfont" @click="toPrev($index)">&#xe606;</i>
						<span>{{$index}}</span>
						<i class="iconfont" @click="toNext($index)">&#xe607;</i>
					</div>
				</section>				
			</div>						
		</div> -->


		<div v-show="showCon"  class="showCon" >
			<h2><i class="iconfont" @click="showMore">&#xe66b;</i>{{$route.params.title | json}}</h2>
			<div id="text" class="text" :style="{width:allWidth,left:leftIndex}">
				<section v-for="list in lists" class="content" :style="{width:width}">
					<p>{{{list.content | replaceCo list.content}}}</p>

					<div class="page">
						<i class="iconfont" @click="toPrev($index)">&#xe606;</i>
						<span>{{$index}}</span>
						<i class="iconfont" @click="toNext($index)">&#xe607;</i>
					</div>
				</section>				
			</div>						
		</div>
	</div>

</template>


<script>
	import api from '../../lib/api.js';
	export default {
		data: function() {
			return {
				isLike:false,
				showMark:false,
				showItem:true,
				showCon: false,
				showIndex: 0,
				flId: this.$route.params.link,
				lists :'',
				allWidth : '',
				width: '',
				leftIndex:''
			}
		},
		methods: {
			goBack: function(path) {
				this.$route.router.go(path);
			},
			addLike: function(index) {
				var joke = document.querySelector('#joke_fl');
				var allIcon = joke.querySelectorAll('i');
				this.isLike = !this.isLike;
				if(this.isLike&&this.lists[index+1].iskike !== true) {
					allIcon[index+1].style.color = 'red';
					this.lists[index].like+=1;
					this.lists[index+1].iskike !== true;
				}else {
					allIcon[index+1].style.color = '';
					this.lists[index].like-=1;
					this.lists[index+1].iskike !== false;
				}
			},
			showMore: function(index) {
				this.leftIndex = -index*100+'%';
				this.showItem = !this.showItem;
				this.showCon =!this.showCon;
				document.body.scrollTop = 0;
			},
			toNext: function(index) {
				var len = this.lists.length;
				if(index == len-1) {
					this.leftIndex = 0;
				}else {
					this.leftIndex = -(index+1)*100+'%';	
				}
				document.body.scrollTop = 0;
				
			},
			toPrev: function(index) {
				var len = this.lists.length;
				if(index == 0) {
					this.leftIndex = -(len-1)*100+'%';
				}else {
					this.leftIndex = -(index-1)*100+'%';	
				}
				document.body.scrollTop = 0;
			},
			setHeight: function(index){
				var joke = document.querySelector('#text');
				var show_con = document.querySelector('.showCon')
				console.log(show_con.offsetHeight);
				var allIcon = joke.querySelectorAll('.content');
				show_con.style.height = allIcon[index].offsetHeight +'px'; 
			}
		},
		created: function() {
			this.showMark = true;
		},
		ready: function() {
			var self = this;
			var reqUrl = self.flId;
			console.log(reqUrl);
			var resource = self.$resource(api[reqUrl]);


			resource.get()
				.then(function(res){
					var data = res.data.data;
					// console.log(data);
					var len = data.length;
					// console.log(data);
					self.allWidth = len*100+ "%";
					self.width = 100/len +"%";
					self.showMark = false;
					self.lists = data;
					console.log(self.lists[0].content);
				});

			self.showItem = true;
			
		},
		filters: {
			replaceCo: function(value) { 
				return value.replace(/[\r\n]+/g,'<br/>');
		
			}
		},
		destroyed: function(){
			this.showMark = false;
		}
	}
</script>