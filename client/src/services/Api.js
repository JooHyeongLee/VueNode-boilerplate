import axios from 'axios';

export default() => {
    // TODO 고정 아이피일때만 가능하므로 검토필요
    return axios.create({
        baseURL: 'http://localhost:8081',
    });
};
