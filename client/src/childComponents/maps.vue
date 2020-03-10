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
                        <th>금지날짜</th>
                        <th>해당국가 코로나 상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>가봉</td>
                        <td>0309</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>그레나다</td>
                        <td>0307</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>나우루</td>
                        <td>0303</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>나이지리아</td>
                        <td>0227</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>네팔</td>
                        <td>0310</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>노르웨이</td>
                        <td>0307</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>뉴질랜드</td>
                        <td>0309</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>대만</td>
                        <td>0225</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>덴마크</td>
                        <td>0302</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>라오스</td>
                        <td>0227</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>라이베리아</td>
                        <td>0302</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>러시아</td>
                        <td>0303</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>레바논</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>루마니아</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
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
            map: ''
        }
    },
    mounted: function() {
    },
    methods: {
    }
}
</script>

