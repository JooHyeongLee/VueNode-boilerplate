import Api from '@/services/Api';

export default {
    getLogin () {
        return Api().get('login');
    },
};
