import axios from "../axios";
import config from "../config";
// 登录
export const login = (data) => {
    return axios({
        url:config.baseURI+'/login',
        method: 'post',
        data
    })
}

// 登出
export const logout = () => {
    return axios({
        url: '/logout',
        method: 'get'
    })
}

