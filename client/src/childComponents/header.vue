<template>
	<header>
		<nav-component></nav-component>	
		<revSlider-component></revSlider-component>
	</header>
</template>

<script>
import navComponent from './nav.vue'
import revSliderComponent from './revSlider.vue'
export default {
  components: {
    'nav-component': navComponent,
    'revSlider-component': revSliderComponent
  }
}

</script>
