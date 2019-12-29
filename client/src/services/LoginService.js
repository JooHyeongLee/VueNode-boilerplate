import Api from '@/services/Api';

export default {
    getLogin (params) {
        return Api().post('login', params);
    },
};
