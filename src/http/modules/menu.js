import axios from "../axios";
import config from "../config";
export const getMenu = data=>{
  return axios({
    url:config.baseURI+'/menu',
    method: 'post',
    data
  })
}

export const findMenuTree  =()=>{
   return axios({
        url: config.baseURI+'/menu/findMenuTree',
        method: 'get'
    })
}
