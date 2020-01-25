import Api from '@/services/Api';

export default {
    create (params) {
        return Api().post('', params);
    },
    selectList () {
        return Api().get('/api/chat/selectList');
    },
};

