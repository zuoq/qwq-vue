<template>
	<nav-con :active="active"></nav-con>
	<interset></interset>
</template>

<script>
	import nav from './components/nav.vue'
	import interest from './components/interest.vue'
	export default {
		data :function() {
			return {
				active:'interest'
			}
		},
		components: {
			'nav-con' : nav,
			'interset' : interest
		},
		methods: {

		}
	}
</script>