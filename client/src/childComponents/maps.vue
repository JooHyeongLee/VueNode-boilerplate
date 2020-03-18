<template>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-12">
            <h2>코로나 19 - 대한민국 입국금지 국가</h2>
            <div class="form-group row"><label class="col-lg-2 col-form-label">국가 검색</label>
                <div class="col-lg-4">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="word" @keyup.enter="search"> 
                        <span class="input-group-append"> 
                            <button type="button" class="btn btn-primary" v-on:click="search" >Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
        <div class="ibox ">
            <div class="ibox-title">
                <h5>한국발 입국자 제한</h5>
            </div>
            <div class="ibox-content">

                <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>국가명</th>
                        <th>내용1</th>
                        <th>내용2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- <tr v-if="searchedData.index">
                        <td>{{searchedData.index}}</td>
                        <td>{{searchedData.country}}</td>
                        <td>{{searchedData.content1.length < 3 ? searchedData.content2 : searchedData.content1 }}</td>
                        <td>{{searchedData.content1.length < 3 ? searchedData.content3 : ''}}</td>
                    </tr> -->
                    <tr v-for="(item, index) in corona" :key="corona.index">
                        <td>{{item.index}}</td>
                        <td>{{item.country}}</td>
                        <td>{{ item.content1.length < 3 ? item.content2 : item.content1 }}</td>
                        <td>{{item.content1.length < 3 ? item.content3 : ''}}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import MapService from '../services/MapService.js';

export default {
    name: 'maps',
    data () {
        return {
            corona: [],
            word: '',
            searchedData: {}
        }
    },
    mounted: async function() {
        const response = await MapService.init();
        this.corona = response.data;
    },
    methods: {
        // 국가명 검색
        search() {
            this.corona.map((obj, idx)=>{
                if(obj.country === this.word) {
                    this.corona.splice(idx, 1);
                    this.corona.unshift(obj);
                    return;
                }
            })
        }
    }
}
</script>

