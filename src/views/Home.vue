<template>
	<div class="home">
		<homePage />
	</div>
</template>

<script>
	// @ is an alias to /src
	/* import HelloWorld from '@/components/HelloWorld.vue' */
	import homePage from '@/views/homePage/homePage.vue'
	import {
		cityList
	} from "../axios/user.js"

	export default {
		name: 'Home',
		components: {
			homePage
		},
		data() {
			return {
				cites: []
			}
		},
		created() {
			cityList().then(res => {
				if (res.data) {
					this.cites = res.data.cityList;
					console.log(this.cites)
				}
			})

		}
	}
</script>
