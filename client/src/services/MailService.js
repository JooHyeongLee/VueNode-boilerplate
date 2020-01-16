import Api from '@/services/Api';

export default {
    getMail () {
        return Api().get('mail');
    },
};
