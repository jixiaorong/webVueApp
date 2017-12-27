<template>
    <div>
         <!-- 头部 -->
        <mu-appbar title=""><span class="icon-fanhui f_left goBack" @click="goBack"></span> {{idSir}}</mu-appbar>
        <!-- 聊天室 -->
        <div class="talkRoom">
            <!-- 需求简介 -->
            <!-- <div class="brief">

            </div> -->
            <!-- 聊天对话 -->
            <div class="dialogue">
                <ul>
                     <!-- <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好，请问，在们纷纷模仿干嘛 钢化膜湖南怀化按某月某日</p>
                    </li>
                    <li class="anotherTalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                         <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li> -->
                  <!--  <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li>
                    <li class="wetalk clearfix">
                        <img src="../../../static/images/girl.jpg" alt="">
                        <p class="talkCons">您好</p>
                    </li> -->
                    <li v-for="item in sessionList" :class="{clearfix:true,wetalk:item.name}">
                        <img :src="item.src" alt="">
                        <p class="talkCons">{{item.content}}</p>
                    </li>
                </ul>
            </div>  
        </div>

        <!-- 底部输入部分 -->
        <div :class="{keyBoard:true,clearfix:true,}" v-show="showKeyBoard">
            <div class="f_left keyWords" @click="changeBox">
                <span class="icon-message f_left"></span>
                <span>切换<br/>聊天</span>
            </div>
            <!-- 一键报价 -->
             <div class="one-key" v-show="oneKey">
                  <!-- <ul>
                        <li class="onekey-info">
                            <span>
                            </span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                    </ul> -->
             </div>
            <ul class="ablityKey" v-show="showAblityKey">
                <li>
                    <!-- <div class="one-key" v-show="oneKey"> -->
                        <!-- <mu-select-field v-model="game1" label="" :maxHeight="100" :autoWidth="false">
                             <mu-menu-item v-for="(text,index) in list" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                        
                        <mu-date-picker autoOk :underlineShow=false  hintText="选择开始日期"/>
                      
                        <mu-text-field type="number" max="100" hintText="(元/天)"/>
                        <span class="icon-send  enterCon"></span> -->
                        <!-- <ul>
                            <li class="onekey-info">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        </ul> -->
                    <!-- </div> -->
                    <p @click="toggleOneKey">一键报价</p>
          
                </li>
                <li>
                    <div class="time-tab" v-show="timeTab">

                    </div>
                    <p  @click="toggleTimeTab">档期</p>
                </li>
                <li>
                    <div class="quick-pay" v-show="quickPay"></div>
                    <p  @click="toggleQuickPay">快捷支付</p>
                </li>
            </ul>
            <!-- 输入框 -->
        
            <div class="inputBox" v-show="showInputBox">
                <div  id="btn">
                    <input type="text" class="reInput">
                </div>
                <span class="sendOver f_right">发送</span>
            </div>
     
             
        </div>
    </div>
</template>
<script>

import sessionInfo from '../../common/js/base.js'

const sessionList=sessionInfo.sessionInfo

export default{
    data:function(){
        return {
            idSir:"盒马先生",
             oneKey: false, // 几个对话框的显示
             timeTab:false,
            quickPay:false,
            game1:1, // 默认的选则
            list: ['室内中层一厅', '室外南广场'],// 场地数据
            showAblityKey:true,
            showInput:false,
            showKeyBoard:true,
            showInputBox:false,
            sessionList,
        }
    },
    methods: {
        goBack:function(){
            this.$router.push('/user/talking')
        },
        // 显示隐藏对话框
        toggleOneKey:function(){
            // this.oneKey=!this.oneKey
            // this.quickPay=false
            //  this.timeTab=false
        },
        toggleTimeTab:function(){
            //  this.timeTab=!this.timeTab
            //   this.oneKey=false
            //   this.quickPay=false
        },
        toggleQuickPay:function(){
            // this.quickPay=!this.quickPay
            //  this.oneKey=false
            //  this.timeTab=false
        },
        changeBox:function(){// 切换键盘盒子
        console.log(this.sessionList)
        if(this.showAblityKey){
            this.showAblityKey=false;
            this.showInputBox=true;
        }else{
            this.showAblityKey=true;
            this.showInputBox=false;
     
        }
        },

               
    },
    watch:{
        
    }
}
</script>
<style scoped>

#app{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
    position: relative;
}

.mu-appbar .left,.mu-appbar .right{
    width:0;
}
.mu-appbar-title{
    padding:0px;
}
.goBack{
    font-size:0.18rem;
    color:#fff;
}
/* 聊天室主要内容 */
.talkRoom{
    width:100%;
 overflow: auto;
 position: absolute;
 top:52px;
 bottom:0.5rem;
 left:0px;
}
.brief{
    width:100%;
    height:20px;
    background-color: red;
}
/* 聊天对话 */
.dialogue{
    padding:0.1rem 0.14rem;
}
.dialogue li{
    margin-bottom:10px;
}
.dialogue li img{
    width:0.46rem;
    height: 0.46rem;
}

.dialogue li img{
    float:right;
     margin-left: 15px;
}
.dialogue .wetalk img{
    float: left;
    margin-right: 15px;
    margin-left: 0px;
}
.dialogue li p{
    border:1px solid #eaeaea;
    border-radius: 3px;
    position: relative;
    float:right;
    padding:10px 10px;
    background-color: #fff;
    max-width:2.6rem;
}
.dialogue .wetalk p{
    float:left;
}

/* 底部聊天部分 */
.keyBoard{
    height:0.5rem;
    width:100%;
    position: absolute;
    bottom:0px;
    left: 0px;
    z-index:99999;
    border-top:1px solid #eaeaea;
    border-bottom:1px solid #eaeaea;
    background-color: #fff;
}
.keyBoard ul,.keyBoard .inputBox{
    width:100%;
    height:100%;
}
/* 输入框 */
.keyBoard .inputBox{
    padding-left:0.58rem;
    position: relative;
}
.inputBox>div{
    width:2.8rem;
    height:100%;
    padding:7px 10px;
}

 .inputBox .reInput{
     width:100%;
     height:100%;
     border:1px solid #eaeaea;
     padding:5px 2px;
 }


/* 切换聊天 */
.keyWords{
    width: 16%;
    height:100%;
    position: relative;
    z-index:666;
}
.keyWords span:nth-child(1){
    font-size: 32px;
    margin-top:2px;
}
.keyWords span:nth-child(2){
    line-height: 14px;
    font-size: 10px;
    padding-top:14px;
    display: inline-block;
}
.keyBoard>ul>li{
    width: 28%;
    height:100%;
    border-left:1px solid #eaeaea;
    float:left;
    box-shadow: 1px 1px 2px #ccc;
    position: relative;
}
 .ablityKey p{
     text-align: center;
     line-height: 0.5rem;
 }
.sendOver{
    display: inline-block;
    position: absolute;
    top:0px;
    right:0px;
    height:100%;
    line-height: 0.5rem;
    padding-right:10px;
}
 /* 一键报价 */
 .one-key,.time-tab,.quick-pay{
      width: 3.75rem;
     position: absolute;
     background-color: #fff;
     bottom:0.58rem;
 }
 .one-key{
     padding:0 0.06rem;
 }
 
/* .mu-select-field.no-empty-state{
    width:1rem;
}
.mu-text-field{
    width:0.8rem;
    display: inline-block;
    position: relative;
    top:-10px;
}
 .mu-menu-destop .mu-menu-item{
     padding:0 2px;
 }
 .mu-date-picker{
    position: relative;
    top:-10px;
    width:0.7rem;
     display:inline-block;
 } */
.onekey-info span{
    display: inline-block;
    background-color:red;
    height:0.4rem;
}
.onekey-info span:nth-child(1){
    width:1.22rem;
    margin-left:0px;
}
.onekey-info span:nth-child(2),.onekey-info span:nth-child(3){
    width:0.9rem;
}
.onekey-info span:nth-child(4),.onekey-info span:nth-child(5){
    width:0.24rem;
}
 /* 档期 */
 .time-tab{
     height:80px;
    left:-1.66rem;
 }
 .quick-pay{
      height:80px;
    left:-2.71rem;
 }
.one-key::after{
    content:"";
    position: absolute;
	bottom:-7px;
	left: 0.93rem;
	width: 10px;
	height: 10px;
	border-width: 10px 10px 0px 10px;
	border-style: solid;
	border-top-color: #fff;
    border-left-color: transparent;
    border-right-color: transparent;
}
.time-tab::after{
    content:"";
    position: absolute;
	bottom:-7px;
	left: 1.93rem;
	width: 10px;
	height: 10px;
	border-width: 10px 10px 0px 10px;
	border-style: solid;
	border-top-color: #fff;
    border-left-color: transparent;
    border-right-color: transparent;
}
.quick-pay::after{
    content:"";
    position: absolute;
	bottom:-7px;
	left: 2.98rem;
	width: 10px;
	height: 10px;
	border-width: 10px 10px 0px 10px;
	border-style: solid;
	border-top-color: #fff;
    border-left-color: transparent;
    border-right-color: transparent;
}

.enterCon{
    font-size: 30px;
}
</style>
