<template>
    <div>
        <!-- 头部 -->
        <mu-appbar title="我"></mu-appbar>
        <!-- 个人信息 -->
        <div class="personMessage">
            <!-- 用户信息 -->
            <div class="personInfo">
                <img src="../../../static/images/timg.jpg" alt="">
            </div>

            <!-- 基础设置 -->
            <div class="baseSetting">
                <mu-list>
                    <div data-v-11723709="" v-for="item in list">
                        <div class="mu-item-wrapper" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                            <div class="" style="margin-left: 0px;">
                                <div class="mu-ripple-wrapper"></div> 
                                <div class="mu-item show-left show-right has-avatar">
                                    <div class="mu-item-left"> 
                                        <div data-v-11723709="" class="mu-avatar">
                                            <div class="mu-avatar-inner"> <span :class="item.icons"></span> 
                                        </div>
                                    </div>
                                </div> 
                                <div class="mu-item-content">
                                    <div class="mu-item-title-row">
                                        <div class="mu-item-title">{{item.val}}</div>
                                    <div class="mu-item-after"></div>
                                    </div>
                                </div> 
                                <div class="mu-item-right"><i data-v-11723709="" class="mu-icon material-icons">keyboard_arrow_right</i> </div>
                            </div>
                            </div>
                     </div>
                    </div>
                 </mu-list>
            </div>
            <div class="exitLogin" @click="exit">
                <button>退出登录</button>
            </div>
        </div>

    </div>
</template>
<script>
import baseJs from '../../common/js/base.js'
import loginJs from '../../common/js/login.js'
import Me from './Me.js'
export default {
  data() {
    return {
        list:baseJs.personMessage,
    };
  },
  methods: {
      exit:function(){// 退出清楚local 并进入登陆页
          loginJs.removeLocal()
          this.$router.push('/login')
      }
  }
};
</script>
<style scoped>
.personMessage {
  width: 100%;
  padding-top: 60px;
}
.personInfo {
  width: 100%;
  height: 1.22rem;
  padding: 0 0.12rem;
}
.personInfo img {
  width: 100%;
  height: 100%;
}
/* 基础设置 */
.baseSetting{
    padding-bottom:1.2rem;
}
/* 退出按钮 */
.exitLogin{
    width:100%;
    height:44px;
    border:1px solid #eaeaea;
    line-height: 42px;
    text-align: center;
}
.exitLogin button{
    color:red;
    font-size: 0.14rem;
    background-color: #fff;
}
</style>