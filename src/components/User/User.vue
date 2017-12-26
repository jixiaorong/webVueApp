<template>
    <div>
        <div  class="vue-footer">    
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="activity" to="/user/activity" title="活动" icon="home"/>
                    <mu-bottom-nav-item value="talking" to="/user/talking" title="洽谈" icon="favorite"/>
                    <mu-bottom-nav-item value="siting" title="场地" to="/user/siting" icon="location_on"/>
                    <mu-bottom-nav-item value="me" title="我" to="/user/me" icon="person_pin"/>
                </mu-bottom-nav>
            </mu-paper> 
    </div>
    <router-view keep-alive></router-view>  
    </div>  
</template>
<script scope>


document.addEventListener('plusready',function(){
        plus.navigator.setStatusBarBackground("#3f51b5");
  },false);
export default{

    data:function(){
        return {
      bottomNav: 'activity'
      }
    },
    methods: {
         handleChange (val) {
            this.bottomNav = val 
        },
    }
}

</script>
<style scoped>
#app{
    background-color: #fff;
}
  .vue-footer{
      width:100%;
      height: 48px;
      position: absolute;
      bottom: 0px;
      left: 0;
      z-index:55;
    }
    .vue-footer ul li{
      float: left;
      width:25%;
      text-align: center;
    }
    .vue-footer ul li a{
      color:black;
      width: 100%;
      font-size: 16px;
      display: block;
      line-height: 56px;
    }
</style>