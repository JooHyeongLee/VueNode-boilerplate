<template>
	<div id="wrapper">
		<navigation></navigation>
		<header-bar></header-bar>	
		<div class="wrapper wrapper-content">
			<main-content></main-content>	
		</div>
	</div>
</template>

<script>
import navigation from '../childComponents/navigation.vue'
import header from '../childComponents/header.vue'
import content from '../childComponents/content.vue'
export default {
	components: {
      'navigation': navigation,
      'header-bar': header,
      'main-content': content
	}
}

</script>
