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
export default {
    name: 'chatRoom',
    watch: {
        txt: function(newVal) {
            console.log(newVal);
        }
    },
    data () {
        return {
            txt: ''
        }
    },
    mounted () {
        $('.summernote').summernote();
        this.txt = $('.note-editable card-block').text();
    },
    components: {
        'txt-edit': txtEdit
    }
}
</script>
