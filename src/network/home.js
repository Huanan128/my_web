import { request } from './request';

export function getLogindata(username, password) {
    return request({
        url: '/login',
        method: 'post',//默认不写，为get
        data: {
            username,
            password
        }
    })
}