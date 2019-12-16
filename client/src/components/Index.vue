<template>
	<div> 
		<main-component></main-component>
		<div class="wrapper">
			<!-- OpenRider -->
			<openrider-component></openrider-component>
			<!-- BpDiary -->
			<bpdiary-component></bpdiary-component>
			<!-- Members -->
			<members-component></members-component>
			<!-- Support -->
			<support-component></support-component>
			<!-- footer -->
			<footer-component></footer-component>
		</div>
	</div>
</template>

<script>
import mainComponent from '../childComponents/main.vue'
import openriderComponent from '../childComponents/openrider.vue'
import bpdiaryComponent from '../childComponents/bpdiary.vue'
import membersComponent from '../childComponents/members.vue'
import supportComponent from '../childComponents/support.vue'
import footerComponent from '../common/footer.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
  },
  components: {
    'main-component': mainComponent,
    'openrider-component': openriderComponent,
    'bpdiary-component': bpdiaryComponent,
    'members-component': membersComponent,
    'support-component': supportComponent,
    'footer-component': footerComponent
  }
}
</script>

<style scoped>
</style>
