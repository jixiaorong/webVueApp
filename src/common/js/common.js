
"use strict"

export default{

    setLocal:function(key,val){
        localStorage.setItem(key,val)
    },
    getLocal:function(key){
       return localStorage.getItem(key)
    }
}