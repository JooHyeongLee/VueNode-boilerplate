<template>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>대한민국 입국금지 국가</h2>
        </div>
        <div class="col-lg-6">
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
            corona: []
        }
    },
    mounted: async function() {
        const response = await MapService.init();
        this.corona = response.data;
    },
    methods: {
    }
}
</script>

