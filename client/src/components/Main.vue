<template>
	<div id="wrapper">
		<navigation v-if="this.profile" v-bind:profile-url="this.profile"></navigation>
		<div id="page-wrapper" class="gray-bg">
			<header-bar></header-bar>	
            <keep-alive>
                <!-- sub Component 위치 -->
                <component v-bind:is="$store.state.currentView"></component>
            </keep-alive>
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
import dashboard from '../childComponents/dashboard.vue';
import chat from '../childComponents/chat.vue';
import chatRoom from '../childComponents/chatRoom.vue';
// service
import LoginService from '../services/LoginService.js';
export default {
    name: 'main-page',
    data () {
        return {
            profile: '/static/img/profile_small.jpg',
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
                if(response.data.result && response.data.info.profile_url) {
                    this.profile = response.data.info.profile_url;
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
        'Inbox': mailBox,
        'dashboard': dashboard,
        'chat': chat,
        'chat-room': chatRoom,
        'dashboard': dashboard
    }
}

</script>

