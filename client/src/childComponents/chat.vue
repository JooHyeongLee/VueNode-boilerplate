<template>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>Chatting!</h2>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
            </ol>
        </div>
        <div class="col-lg-12 wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>채팅방 목록 </h5>
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
                            <div class="row">
                                <div class="col-sm-5 m-b-xs"><select class="form-control-sm form-control input-s-sm inline">
                                    <option value="0">Channel 1</option>
                                    <option value="1">Channel 2</option>
                                    <option value="2">Channel 3</option>
                                    <option value="3">Channel 4</option>
                                </select>
                                </div>
                                <div class="col-sm-4 m-b-xs">
                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-sm btn-white ">
                                            <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Day
                                        </label>
                                        <label class="btn btn-sm btn-white active">
                                            <input type="radio" name="options" id="option2" autocomplete="off"> Week
                                        </label>
                                        <label class="btn btn-sm btn-white">
                                            <input type="radio" name="options" id="option3" autocomplete="off"> Month
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="input-group"><input placeholder="Search" type="text" class="form-control form-control-sm"> <span class="input-group-append"> <button type="button" class="btn btn-sm btn-primary">Go!
                                    </button> </span></div>

                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>

                                        <th></th>
                                        <th>Title</th>
                                        <th>Completed </th>
                                        <th>Task</th>
                                        <th>생성일자</th>
                                        <th>인원수</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, idx) in list.data" :key="list.data.id" @click="room(item)">
                                        <td><div class="icheckbox_square-green checked" style="position: relative;"><input type="checkbox" checked="" class="i-checks" name="input[]" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"></ins></div></td>
                                        <td>{{item.title}}</td>
                                        <td>{{item.count}}</td>
                                        <td>{{item.count}}</td>
                                        <td>{{item.date}}</td>
                                        <td>{{item.count}}</td>
                                    </tr>

                                    <tr>
                                        <td><div class="icheckbox_square-green" style="position: relative;"><input type="checkbox" class="i-checks" name="input[]" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"></ins></div></td>
                                        <td>Gamma project</td>
                                        <td><span class="pie" style="display: none;">4,9</span><svg class="peity" height="16" width="16"><path d="M 8 8 L 8 0 A 8 8 0 0 1 15.48012994148332 10.836839096340286 Z" fill="#1ab394"></path><path d="M 8 8 L 15.48012994148332 10.836839096340286 A 8 8 0 1 1 7.999999999999998 0 Z" fill="#d7d7d7"></path></svg></td>
                                        <td>18%</td>
                                        <td>Jul 22, 2013</td>
                                        <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ChatService from '../services/ChattingService.js';
export default {
    name: 'chat',
    data () {
        return {
            list: []
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        async init() {
            this.list = await ChatService.selectList();
        },
        async room(item) {
            ChatService.join(item._id);
            this.$store.commit('setCurrentView', 'chat-room');
            this.$store.commit('setRoomInfo', item);
        }
    }

}
</script>
