<template>
    <div>
        <div class="app-title">
            <mu-appbar title="活动"></mu-appbar>
            <mu-icon-menu icon="more_vert" slot="right"   :anchorOrigin="rightTop" :targetOrigin="rightBottom" style="position:fixed;top:0px;right:0px;z-index:9;color:#fff;">
                <mu-menu-item  title="全部活动"/>
                <mu-menu-item title="快闪店"/>
                <mu-menu-item title="主题展"/>
                <mu-menu-item title="其他"/>
            </mu-icon-menu>
        </div>
        
        <div class="app-content">
            <!-- 中间的tab栏 -->
        <mu-tabs class="myMuTabs" :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" title="时间" ref="a" />
            <mu-tab value="tab2" title="热度"  />
        </mu-tabs>
        <span class="bottom-border"></span>
        <!-- tab栏的主体 -->
        <div v-if="activeTab === 'tab1'" class="timeTab">
            <ul>
                <!-- 列表的数据遍历 -->
                <li v-for="(item,index) in activityInfo">
                     <!-- 单个活动的上部 -->
                    <div class="singleATop clearfix">
                       <div class="singleATop-left">
                          <img :src="item.src" alt="">
                       </div>
                        <div class="singleATop-right ">
                           <p class="activity-title">
                               <span class="activity-name">{{item.name}}</span>
                                <span><span v-show=item.isCallMe> [@了我] </span></span>
                                <span class="publish-time">{{item.infoTime}}</span>
                            </p>
                            <ul>
                                <li>
                                    <span class="w4">期望时间</span>
                                    <span>：</span>
                                    <p><span style="letter-spacing:0;">{{item.expectTime}}</span><span>({{item.allTime}})</span></p>
                                </li>
                                <li><span class="w4">场地预算</span>
                                    <span>：</span>
                                    <p>{{item.budget}}</p>
                                </li>
                                    
                                <li class="space-require"><span class="w4">场地需求</span>
                                    <span>：</span>
                                    <p>{{item.siteNeed}}</p>
                                </li>
                                    
                                <li class="find-position"><span class="w4">询价位置</span>
                                    <span>：</span>
                                    <p>
                                        <span v-for="single in item.activityPosition">
                                            {{single}}
                                        </span>
                                    </p>
                                </li>
                                <li><span class="w4">活动方案</span>
                                    <span>：</span>
                                    <p>
                                        <img src="../../../static/images/bc.png" alt="">
                                    </p>
                                </li>
                            </ul>
                       </div>
                       <span class="hold-number">已有{{item.currentPerson}}人抢单</span>
                    </div>
                    <!-- 单个活动的下部分 --> 
                   <div class="singleABottom">
                       <ul>
                           <li><p>立即抢单</p></li>
                           <li @click="Collect(index)">
                                <span :class="{'icon-shoucang':true,shoucang:item.isShou}"></span>
                           </li>
                           <li>
                               <span class="icon-fenxiang2"></span>
                           </li>
                       </ul>
                   </div>
                </li>
            </ul>
        </div>
        <div v-if="activeTab === 'tab2'" class="timeTab">
                
        </div>  
        </div>
    </div>
</template>
<script>
import baseInfo from '../../common/js/base.js'
export default {
  data() {
    return {
      activeTab: "tab1",
    //   isShou:false,
      rightBottom: {horizontal: 'right', vertical: 'bottom'},
      rightTop: {horizontal: 'right', vertical: 'top'},
      activityInfo:baseInfo.activityInfo,// 获取的数据列表
    };
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    },
    Collect:function(index){
        console.log(index)
        this.activityInfo[index].isShou=!this.activityInfo[index].isShou
        console.log(this.activityInfo)
    }
  },

};
</script>
<style scoped>
#app{
    position: relative;
}
.app-title{
    position: absolute;
    z-index: 55;
    top:0px;
}
.timeTab{
    background-color: #fff;
}
.mu-appbar-title span {
  display: block;
  text-align: center;
  font-size: 0.18rem;

}
.bottom-border[data-v-65217b80]{
    height:0px;
}
.mu-appbar {
  background-color: #3f51b5;
  height:44px;
  line-height: 44px;
}
.lightLine{
    background-color: #ff8a65;
}

.myMuTabs{
    background-color: #fff;
    text-align: center;
    position: fixed;
    z-index: 55;
}
.mu-tab-link{
    color:#333;
      font-size: 0.14rem;
    font-weight: 700;
}

.mu-tab-active{
    color:#ff8a65
}
.mu-appbar .left{
    width:48px;
}
.mu-appbar .right{
    width:48px;
}
.bottom-border{
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ccc;
}
.timeTab{
    padding:0.05rem;
    margin-top:50px;
}

/* 中间内容区域 */
.timeTab>ul>li{
    display: block;
    border:1px solid #ccc;
    width:100%;
    margin-bottom:6px;
}
/* 单个活动上部 */
.singleATop{
    /* height: 2.6rem; */
    padding-top:0.12rem;
    position: relative;
}
.singleATop-left{
    float:left;
    width: 0.56rem;
    height: 2rem;
    text-align: center;
    
}
.singleATop-left img{
    width:0.42rem;
    height: 0.42rem;
}
.singleATop-left p{
    font-size: 12px;
    line-height: 0;
    color:rgba(0,0,0,.87);
}
.activity-title span{
    display:inline-block;
    overflow: hidden;
    font-size: 0.14rem;
}
.activity-title span:nth-child(2) span{
    width:1.66rem;
    display:inline-block;
    color:#e51c23;
    line-height: 0.15rem;
     font-size: 0.12rem;
}
.publish-time{
    color:#ccc;
    font-size: 12px;
}
.activity-name{
    font-size: 14px;
    font-weight: 700;
    width:0.92rem;
    text-align: center;
}
.singleATop-right li{
      font-size: 0.15rem;
      margin-bottom:2px;
        color:rgba(0,0,0,.87);
}
.singleATop-right li p{
    display:inline-block;
    width:2.1rem;
    vertical-align: top;
    color:#999;
    letter-spacing:0;
}

.find-position p span{
    display: block;
    color:#57629e;
     letter-spacing:0;
}
.hold-number{
    position: absolute;
    right:0.14rem;
    color:#999;
    bottom:0.1rem;
    font-size: 10px;
}
/* 单个活动底部 */
.singleABottom{
    height:44px;
    width:100%;
    border-top:1px solid #ccc; 
}
.singleABottom ul li{
    float:left;
    height:44px;
    text-align: center;
  
}
.singleABottom li:nth-child(1){
    width:68%;
    color:#fff;
     background-image: linear-gradient(to right,#e64b20,#eb9982)
}
.singleABottom li:nth-child(1) p{
    font-size: 14px;
    line-height: 44px;
    
}
.singleABottom li:nth-child(2),.singleABottom li:nth-child(3){
    width:15%;
    padding:1px 0;
    /* border-left:1px solid #ccc; */
}
.singleABottom li:nth-child(3){
    padding:5px 0;
}
.singleABottom li:nth-child(3) span{
   font-size: 21px;
   color:#000;   
}
.shoucang{
    color:red;
}
.singleABottom li:nth-child(2) span{
    font-size: 26px;
}

/* tab2 */
.userLogo{
    width:0.5rem;
    height:0.5rem;
}
.mu-item.show-right{
    padding-right:48px;
}
</style>