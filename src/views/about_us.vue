<template>
	<nav-con :active="active"></nav-con>
	<about></about>
</template>

<script>
	import nav from './components/nav.vue'
	import about from './components/about.vue'
	export default {
		data :function() {
			return {
				active: 'about'
			}
		},
		components: {
			'nav-con' : nav,
			'about' : about
		},
		methods: {


		}

	}
</script>