<template>
<div class="gray-bg" style="min-height: 1291px;">
    <div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>채팅방입니다. ( {{this.$store.state.roomInfo.title}} )</h2>
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="index.html">Home</a>
            </li>
        </ol>
    </div>
    <txt-edit></txt-edit>
</div>

</div>
</template>
<script>
import txtEdit from './txtEdit.vue';
import mqtt from 'mqtt';
export default {
    name: 'chatRoom',
    watch: {
    },
    data () {
        return {
            txt: ''
        }
    },
    mounted () {
        const client = mqtt.connect('mqtt://localhost:1883');
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString())
            client.end()
        })
        client.on('connect', () => {
            client.subscribe('listener', function (err) {
                if (!err) {
                    client.publish('listener', 'Hello mqtt')
                }
            })
        })
        $('.summernote').summernote();
        this.txt = $('.note-editable card-block').text();
    },
    components: {
        'txt-edit': txtEdit
    }
}
</script>
