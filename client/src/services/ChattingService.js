import Api from '@/services/Api';

export default {
    create (params) {
        return Api().post('', params);
    },
    selectList () {
        return Api().get('/api/chat/selectList');
    },
    submit (params) {
        let result = new URLSearchParams();
        result.append('chat', params);
        return Api().post('/api/chat/submit', result);
    },
    join (params) {
        let result = new URLSearchParams();
        result.append('id', params);
        return Api().post('/api/chat/join', result);
    },
};

