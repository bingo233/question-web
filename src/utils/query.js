import axios from 'axios'
import config from '@/config'
import {MessageBox, Message} from 'element-ui'

const api = config.api;

const Axios = axios.create({
  "baseURL": config.baseURL,
  "timeout": 60000,
  "withCredentials": true, // 意思是携带cookie信息,保持session的一致性
});

Axios.interceptors.response.use(response => {
  const res = response.data;
  if (res.code === 888) {
    try{
      MessageBox.alert('登录失效，请重新登录！', config.name, {
        confirmButtonText: '确定',
        showClose: false,
        callback: action => {

        }
      })
    }catch(e){
      console.log(e)
    }
  }
  if (res.code === 500) {
    Message.error(res.title)
  }
  return res;
}, error => {
  console.log(error)
});

export default{
  get(apiName,params) {
    return Axios({
      url: api[apiName],
      params: params,
      method: 'get'
    }).catch(e => {
      console.log(e)
    })
  },
  post(apiName,params) {
    return Axios({
      url: api[apiName],
      params: params,
      method: 'post'
    }).catch(e => {
      console.log(e)
    })
  }
}

