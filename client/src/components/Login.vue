<template>
   <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>
                <h1 class="logo-name">Hello</h1>
            </div>
            <h3>로그인 페이지 입니다.</h3>
            <p>
            </p>
            <p>Login in. To see it in action.</p>
            <form class="m-t" v-on:submit.prevent="login">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Username" v-model="email" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" v-model="password" required="">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p class="text-muted text-center"><small>Do not have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
            </form>
            <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
        </div>
    </div> 
</template>

<script>
import LoginService from '../services/LoginService.js';
export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: '',
        }
    },
    mounted () {
    },
    methods: {
        async login () {
            const response = await LoginService.getLogin({
                email: this.email,
                password: this.password,
            });
            try {
                if(response.data === 'success') {
                    alert('로그인 성공');
                } else {
                    alert('로그인 실패');
                }
            } catch(error) {
                console.log(error);
            }
        }
    },
    components: {
    },
}
</script>
