<template>
    <div id="map" style="width:80%; height:80%">
    hello 
    </div>
</template>

<script>
import config from '../../config/keys.js';
import MapService from '../services/MapService.js';

export default {
    name: 'maps',
    data () {
        return {
            map: ''
        }
    },
    mounted: function() {
        this.initMap();
    },
    methods: {
        async initMap() {
            // TODO: client id 값 동적으로 setting 가능하게끔 수정 필요
            let mapDiv = document.getElementById('map');
            this.map = new naver.maps.Map('map', {
                zoom: 3,
                center: new naver.maps.LatLng(36.0207091, 127.9204629)
            });
        },
    }
}
</script>

