<template>
	<div id="wrapper">
		<navigation></navigation>
		<div id="page-wrapper" class="gray-bg">
			<header-bar></header-bar>	
			<footer-bar></footer-bar>
		</div>
	</div>
</template>

<script>
import navigation from '../common/navigation.vue'
import header from '../common/header.vue'
import footer from '../common/footer.vue'
import content from '../childComponents/content.vue'
export default {
	components: {
      'navigation': navigation,
      'header-bar': header,
      'footer-bar': footer,
      'main-content': content
	}
}

</script>
