<template>
    <div class="col-md-12 wrapper wrapper-content animated fadeInRight">
        <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>All form elements <small>With custom checbox and radion elements.</small></h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Config option 1</a>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <div class="form-group row"><label class="col-sm-2 col-form-label">User name</label>

                                <div class="col-sm-10 row">
                                        <div class="input-group col-md-10"><input type="text" class="form-control" v-model="chat" v-on:keyup.enter="submit(chat)"> <span class="input-group-append"> <button type="button" v-on:click="submit(chat)" class="btn btn-primary">Go!
                                    </button> </span></div>
                                </div>
                                <div class="col-sm-12 row" style="margin-top:30px;">
                                        <div class="input-group col-md-10"><input type="text" v-model = 'msg' class="form-control"> <span class="input-group-append"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import ChattingService from '../services/ChattingService.js';
export default {
    name: 'txtEdit',
    watch: {
        enter : function(val)  {
            this.chat = '';
        }
    },
    data () {
        return {
            chat : '',
            enter: true,
            msg: '',
        }
    },
    mounted () {
    },
    methods: {
        // 채팅 보내기
        async submit(chat) {
            this.enter = !this.enter;
            let res = await ChattingService.submit(chat, this.$store.state.roomInfo._id);
            if(res) {
                this.msg = res.data;
            }
        },
    },
    components: {
    }
}
</script>

