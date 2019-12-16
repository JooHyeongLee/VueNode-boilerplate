<template>
	<div>
		<preload-component></preload-component>	
		<header-component></header-component>
	</div>
</template>

<script>
import headerComponent from './header.vue'
import preloadComponent from './preload.vue'
export default {
	components: {
		'header-component': headerComponent,
		'preload-component': preloadComponent
	}
}
</script>
