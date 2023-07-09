<template>
  <div class="global-ui">
    <div class="qrcode_container" >
      <div class="tencent_code" >
        <h4 >关注公众号</h4>
        <p >和小伙伴们一起学习</p> <img src="/assets/gzh.jpg" alt="" >
      </div>
      <div class="group_code" >
        <h4 >加入技术交流群</h4>
        <p >扫描二维码 备注<span >加群</span></p> 
        <img
          class="wx"
          src="/assets/wx.jpg" alt="" >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

.qrcode_container {
    position: fixed;
    right: 0;
    top: 110px;
    width: 140px;
    padding: 20px 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: -1px 0 2px .5px rgba(0,127,255,.2)
}

.qrcode_container>div img {
    width: 140px
}

.qrcode_container>div h4 {
    font-size: 15px;
    color: #007fff;
    margin: 0
}


.qrcode_container>div p {
    font-size: 12px;
    margin: 10px 0
}
.qrcode_container>div p span {
    color: #007fff;
    font-weight: 700
}

.wx{
  width:140px;
  height:170px;
}
.tencent_code {
    margin-bottom: 40px
}

@media screen and (max-width: 1360px) {
    .qrcode_container {
        display:none
    }
}
</style>
  