import Api from '@/services/Api';

export default {
    getLogin (params) {
        return Api().post('login', params);
    },
    getInit () {
        return Api().get();
    },
    postRegister (params) {
        return Api().post('register', params);
    },
};
