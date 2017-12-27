"use strict"
// 模拟数据

export default{
    sessionInfo:[//聊天对话框的数据 
        {name:true,src:"/static/images/girl.jpg",content:'您好，我是谁岁'},
        {name:false,src:"/static/images/girl.jpg",content:'您好'}
    ],
    activityInfo:[// 活动页的渲染列表
        // name 客户姓名
        // src 图片地址
        // isCallMe 是否有人@我
        // infoTime 记录的时间(4)
        // expectTime 预计时间
        // allTime 总计时间 
        // budget 预算
        // siteNeed 场地需求
        // activityPosition 活动位置
        // isShou 是否收藏
        // currentPerson 当前多少人抢单


        {name:"和马先生",src:"/static/images/girl.jpg",isCallMe:true,infoTime:"6/25",expectTime:"2017/10/3-2017/10/7",allTime:"4天",budget:"3~5万",siteNeed:" 能力的蓝枫 在的啦 啦  考虑ask我惊愕进或者在是符合符合发证",
    activityPosition:["室内一层","室外南广场"],isShou:true,currentPerson:"56"},
    {name:"米奇小姐",src:"/static/images/girl.jpg",isCallMe:true,infoTime:"6/25",expectTime:"2017/10/3-2017/10/7",allTime:"4天",budget:"3~5万",siteNeed:" 能力的蓝枫 在的啦 啦  考虑ask我惊愕进或者在是符合符合发证",
    activityPosition:["室内一层","室外南广场"],isShou:true,currentPerson:"56"},
    {name:"蓝月亮",src:"/static/images/girl.jpg",isCallMe:true,infoTime:"6/25",expectTime:"2017/10/3-2017/10/7",allTime:"4天",budget:"3~5万",siteNeed:" 能力的蓝枫 在的啦 啦  考虑ask我惊愕进或者在是符合符合发证",
    activityPosition:["室内一层","室外南广场"],isShou:true,currentPerson:"56"},
    ],
}
