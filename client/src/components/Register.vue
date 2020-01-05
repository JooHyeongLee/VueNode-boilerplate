<template>
    <div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">IN+</h1>

            </div>
            <h3>Register to IN+</h3>
            <p>Create account to see it in action.</p>
            <form class="m-t" role="form" v-on:submit.prevent="register">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="name" placeholder="Name" required="">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" v-model="email" placeholder="Email" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Password" required="">
                </div>
                <div class="form-group">
                        <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> Agree the terms and policy </label></div>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

                <p class="text-muted text-center"><small>Already have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" >Login</a>
            </form>
            <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
</template>

<script>
import LoginService from '../services/LoginService.js';
export default {
    name: 'register',
    data: function() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async register () {
            const response = await LoginService.postRegister({
                name: this.name,
                email: this.email,
                password: this.password,
            });
            if(response.data === 'success') {
                alert('회원가입 성공');
            } else {
                alert('실패');
            }
        }
    }
}
</script>
