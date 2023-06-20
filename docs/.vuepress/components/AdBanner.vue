<template>
    <div class="ad-banner">
      <img class="ad-image" src="../public/wx.png" alt="Advertisement" />
    </div>
  </template>
  
  <style scoped>
  .ad-banner {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
  }
  
  .ad-image {
    width: 200px; /* 根据需要设置广告图片的宽度 */
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 添加其他样式，例如背景颜色、边框等 */
  }
  </style>
  