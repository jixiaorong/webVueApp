<template>
    <div>
        
       <div class="loginInfo">
           <div class="rowLogin">
               <div class="rowInput">
                   <input type="number" placeholder="手机号">
                    <span class="icon-shouji" color="#333"></span>
               </div>
           </div>
           <div class="rowLogin">
               <div class="rowInput">
                   <input type="number" placeholder="验证码">
                    <span class="icon-message"  color="#666"></span>
                    <button>获取验证码</button>
               </div>
           </div>
           <div class="rowLogin">
                <button @click="jump">登陆</button>
            </div>
       </div>
    </div>
</template>
<script scoped>

  document.addEventListener('plusready',function(){
        plus.navigator.setStatusBarBackground("#fff");
  },false);

 export default{
      methods: {
       jump:function(){
           this.$router.push('user/')
       }
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