<template>
   <div>

       <!-- 头部 -->
        <mu-appbar title="洽谈"></mu-appbar>

        <!-- 聊天记录 -->
        <mu-sub-header>最近聊天记录</mu-sub-header>
        <!-- 聊天列表 -->
        <ul class="talkList">
            <li class="clearfix" @click="goTalk">
               <div class="userHead f_left">
                   <img src="../../../static/images/girl.jpg" alt="">
                   <span class="unread">1</span>
                </div>    
                <div class="userTalk f_right">
                    <h3>美团</h3>
                    <p>您的外卖已送达啦啊当初叫你付款链接发感慨呢共赴国难流浪男子</p>
                    <span class="newTime">12:22</span>
                </div>
            </li>
            <li class="clearfix">
               <div class="userHead f_left">
                   <img src="../../../static/images/girl.jpg" alt="">
                   <span class="unread"></span>
                </div>    
                <div class="userTalk f_right">
                    <h3>天猫</h3>
                    <p>您的包裹已签收</p>
                    <span class="newTime">12:22</span>
                </div>
            </li>
        </ul>
   </div>
</template>
<script>

export default {
    data:function(){
        return {
            unreads:false,// 有没有未读信息
        }
    },
    methods: {
        goTalk:function(){
            this.$router.push('/session/')
        },
  },


}


</script>
<style>
.talkList{
    width: 100%;
    padding:0 0.1rem;
    background-color: #fff;
}
.talkList li{
    border-bottom:1px solid #eaeaea;
    padding:0.1rem 0;
}
.userHead {
     width:0.5rem;
    height:0.5rem;
    position: relative;
}
.userTalk{
    width:2.9rem;
    position: relative;
}
.userTalk h3{
    font-size:0.15rem;
    font-weight: 700;
}
.userTalk p{
    font-size: 0.14rem;  
    color:#999;  
}
.userTalk h3,.userTalk p{
    width:2.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.newTime{
    position: absolute;
    top:0;
    right:0px;
    color:#999;
    font-size: 10px;
}
.userHead img{
    width:100%;
    height:100%;
}
.unread{
    position: absolute;
    display: block;
   padding:0px 5px;
    border-radius: 16px;
    top: -8px;
    right:-8px;
    background-color: red;
    color:#fff;
    font-size: 10px;
}
</style>
