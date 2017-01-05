<template>
	<nav-con :active="active"></nav-con>
	<joke></joke>
</template>

<script>
	import nav from './components/nav.vue'
	import joke from './components/joke.vue'
	export default {
		// data() {
		// 	return {}
		// },
		data :function() {
			return {
				active: 'joke'
			}
		},
		components: {
			'nav-con' : nav,
			'joke' : joke
		},
		methods: {

		}
	}
</script>