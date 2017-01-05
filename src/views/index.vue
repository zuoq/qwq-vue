<template>
	<nav-con :active="active"></nav-con>
	<home></home>
</template>

<script>
	import nav from './components/nav.vue'
	import home from './components/home.vue'
	export default {
		// data() {
		// 	return {}
		// },
		data :function() {
			return {
				active: 'home'
			}
		},
		components: {
			'nav-con' : nav,
			'home' : home
		},
		methods: {


		}

	}
</script>