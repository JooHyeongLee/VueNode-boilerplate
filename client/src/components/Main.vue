<template>
	<div id="wrapper">
		<navigation v-if="this.profile" v-bind:profile-url="this.profile"></navigation>
		<div id="page-wrapper" class="gray-bg">
			<header-bar></header-bar>	
            <!-- sub Component 위치 -->
            <mail-box></mail-box>
            <!-- -->
			<footer-bar></footer-bar>
		</div>
	</div>
</template>

<script>
// 공통 컴포넌트
import navigation from '../common/navigation.vue';
import header from '../common/header.vue';
import footer from '../common/footer.vue';
// 서브 컴포넌트
import mailBox from '../childComponents/mailbox.vue';
// service
import LoginService from '../services/LoginService.js';
export default {
    name: 'name',
    data () {
        return {
            profile: '',
            contentsComponent: '',
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
        'mail-box': mailBox,
    }
}

</script>

