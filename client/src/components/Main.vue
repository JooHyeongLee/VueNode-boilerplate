<template>
	<div>
		<navigation></navigation>
		<div class="wrapper wrapper-content">
			<main-content></main-content>	
		</div>
	</div>
</template>

<script>
import navigation from '../childComponents/navigation.vue'
import content from '../childComponents/content.vue'
export default {
	components: {
      'navigation': navigation,
      'main-content': content
	}
}

</script>
