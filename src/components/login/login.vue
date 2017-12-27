<template>
    <div>
        
       <div class="loginInfo">
           <div class="rowLogin">
               <div class="rowInput">
                   <input type="number" placeholder="手机号" v-model="phone">
                    <span class="icon-shouji" color="#333"></span>
               </div>
           </div>
           <!-- <div class="rowLogin">
               <div class="rowInput">
                   <input type="type" placeholder="验证码" v-model="code">
                    <span class="icon-message"  color="#666"></span>
                    <button>获取验证码</button>
               </div>
           </div> -->
            <div class="rowLogin">
               <div class="rowInput">
                   <input type="password" placeholder="输入密码" v-model="password">
                    <span class="icon-message"  color="#666"></span>
               </div>
            </div>
           <div class="rowLogin">
                <button @click="jump">登陆</button>
            </div>
       </div>
       <!-- toast 提示 -->
       <mu-toast v-if="toast" :message="tipMessage" @close="hideToast"/>
    </div>
</template>
<script scoped>

  document.addEventListener('plusready',function(){
        plus.navigator.setStatusBarBackground("#fff");
  },false);

import baseUrl from '../../common/js/url.js'// url地址
import commonJs from '../../common/js/common.js' // 工具箱
import axios from 'axios' // 导入axios
const tryUrl=baseUrl.tryUrl //手机号密码登录的地址

 export default{
     data:function(){
         return{
             phone:'',//手机号
             code:'',//验证码
             password:'',//密码
             toast:false,// 弹出框初始化
             tipMessage:'',//弹出的提示信息
         }
     },
      methods: {
        showToast () { //显示弹出框
             this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
             this.toastTimer = setTimeout(() => { this.toast = false }, 10000)
        },
        hideToast () {// 隐藏弹出框
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
       jump:function(){// 请求成功登陆
            const phone=this.phone;
            const password=this.password
            if(!(/^1[345789]\d{9}$/.test(this.phone))){// 手机号码验证
                this.showToast();
                this.tipMessage="号码有误请重新输入。。"
                return false;
            }
            // if(this.code==""){
            //      this.showToast();
            //     this.tipMessage="验证码有误"
            //     return false;
            // }
                if(this.password==""){
                 this.showToast();
                this.tipMessage="请输入密码"
                return false;
            }
            axios.post(tryUrl,{
                mobile:phone,
                password:password
                })
                .then(res=>{
                    
                    console.log(res)
                    if(res.status==200&&res.data.err_msg=="success"){
                        setLocal(token,res.dara.access_token)
                            // this.$router.push('user/')
                    }
        
                })
                .catch(err=>{
                     this.showToast();
                    this.tipMessage=err.response.data.err_msg  
                });

       

       },
    
     }
 }
</script>
<style>

#app{
    background-color: #fff;
}
button{
        width:100%;
        color:#fff;
        background-color:#ff8a65;
        height:100%;
        border-radius: 5px;
        font-size: 0.16rem;
    }
.demo-divider-form {
    margin-bottom: 0;
    margin-left: 20px;
  }

  /* 登录信息 */
  .loginInfo{
      width:100%;
      padding-top:1.75rem;
  }
  .rowLogin{
      width:100%;
      height:0.52rem;
      padding:2px 0.1rem;
      margin-bottom:0.2rem;
      
  }
  .rowLogin input{
      height:100%;
      width:100%;
      padding-left:0.44rem;
  }
  .rowLogin  span{
      font-size: 0.28rem;
      position: absolute;
      top:2px;
      left:0.1rem;
  }
  .rowInput{
      border-radius: 5px;
      height:100%;
      width:100%;
      overflow: hidden;
      position: relative;
      border:1px solid #eaeaea;
  }
  .rowInput button{
      position: absolute;
      right: 0px;
      top:0px;
      width:0.8rem;
      color:green;
      background-color: #fff;
      border-left:1px solid #eaeaea;
      font-size: 0.14rem;
  }
</style>