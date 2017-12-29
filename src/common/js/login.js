
"use strict"

import urlJs from './url.js'//请求地址的js
import axios from 'axios'

export default{

    setLocal:function(obj){ // 设置token到本地local
        localStorage.setItem("userInfo",obj)
    },
    getLocal:function(key){//获取本地local信息
       return localStorage.getItem(key)
    },
    removeLocal:function(){
        localStorage.removeItem("userInfo")
    },
    isToken:function(){//判断是否存在token
       const token= this.getLocal("userInfo")
    //    window.axios = axios
    //    axios.defaults.baseURL = 'http://local.huodongbao.orange100.com'
    //    axios.defaults.autofaceURL = 'http://local.huodongbao.orange100.com'

       if(!token){
           return false;
       }
        axios.post(urlJs.reUserLogin,{},
            { headers: {'X-Access-Token':token}}
    )
        .then(res=>{
            console.log(res)
            if(res.status==200 && res.data.err_code==0){
                console.log(1)
            }
        })
       .catch(err=>{
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
            }
            console.log(err.config);
            return false;
    
       });


 
    },

}