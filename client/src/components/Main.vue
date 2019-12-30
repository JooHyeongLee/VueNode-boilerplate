<template>
	<div id="wrapper">
		<navigation v-if="this.profile" v-bind:profile-url="this.profile"></navigation>
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
import LoginService from '../services/LoginService.js';
export default {
    name: 'name',
    data () {
        return {
            profile: ''
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        async init () {
            const response = await LoginService.getInit();
            try {
                if(response.data.length) {
                    this.profile = response.data[0].profile_url;
                }
            } catch(error) {
                console.log(error);
            }
        }
    },
    components: {
        'navigation': navigation,
        'header-bar': header,
        'footer-bar': footer,
        'main-content': content
    }
}

</script>

