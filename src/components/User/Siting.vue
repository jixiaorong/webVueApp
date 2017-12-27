<template>
    <div>
        <!-- 头部 -->
        <mu-appbar title="场地"></mu-appbar>
      
    </div>
</template>
<script>

export default{
    data(){
        return {
        }
    },

}
</script>
<style scoped>

.enterCon{
    font-size: 30px;
    color:red; 
}
#tab{
    position: absolute;
    top:44px;
    bottom:50px;
    width:100%;
    overflow: scroll;
}
   .tap{
        position: fixed;
        left: 0px;
        width:100%;
        height: 50px;
        padding:5px 10px;
        bottom:50px;
    }
    .tap input{
        width: 100%;
        height: 40px;
        border:1px solid red;
    }
</style>