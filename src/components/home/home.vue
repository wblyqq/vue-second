<template>
  <div class="container">
      <!-- 导航菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 头部区域 -->
      <HeadBar></HeadBar>
      <!-- 主内容区域 -->
      <Main></Main>
  </div>
</template>

<script>
import HeadBar from "../headbar/headbar"
import MenuBar from "../menubar/menubar"
import Main from "../main/main"
export default {
  components:{
        HeadBar,
        MenuBar,
        Main
  }
};
</script>

<style scoped lang="scss">
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #4b5f6e;
  }
</style>
