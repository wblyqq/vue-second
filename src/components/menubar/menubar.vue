<template>
    <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'">
        <img :src="this.logo" /> <div>{{$store.state.collapse?'':sysName}}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu default-active="1" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'" :collapse="$store.state.collapse" @open="handleopen" @close="handleclose" @select="handleselect">
      <menu-tree v-for="item in menuTreeData" :key="item.menuId" :menu="item">
      </menu-tree>
      <!--
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{$t("Sys.sysMng")}}</span>
        </template>
        <el-menu-item index="1-1" @click="$router.push('user')">{{$t("Sys.userMng")}}</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('dept')">{{$t("Sys.deptMng")}}</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('role')">{{$t("Sys.roleMng")}}</el-menu-item>
        <el-menu-item index="1-4" @click="$router.push('menu')">{{$t("Sys.menuMng")}}</el-menu-item>
        <el-menu-item index="1-5" @click="$router.push('log')">{{$t("Sys.logMng")}}</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{$t("Sys.sysMonitor")}}</span>
        </template>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">{{$t("Sys.nav3")}}</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">{{$t("Sys.nv4")}}</span>
      </el-menu-item>
      -->
    </el-menu>
    </div>
</template>

<script>
import MenuTree from "./menutree/menutree";
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      isCollapse: false,
      sysName: "",
      logo: "",
      menudata:''
    };
  },
    computed:{
      menudatavuex(){
          return this.$store.state.menuTreeData
      },
        ...mapState(['menuTreeData']) //两种方式 一种是数组一种是对象｛｝
    },
  methods: {
        ...mapActions({
            'setMenuTree':'setMenuTree'
      }),
    findMenuTree(){
      this.$api.menu.findMenuTree().then(res=>{
          // 直接通过...mapactions
          this.menupropose(res.data)
          console.log(res.data)
          //this.setMenuTree(res.data)
          let routes=this.addDynamicMenuRoutes(res.data)
          console.log(routes)
          for(var i =0;i<routes.length;i++){
              this.$router.options.routes[0].children.push(routes[i])
          }
          this.$router.addRoutes(this.$router.options.routes)
          //3直接通过方法
          //this.menupropose(res.data)
          //1.直接通过commit方法
          //this.$store.commit('setMenuTree',res.data)
          //2
          //this.menudata = res.data //直接通过赋值
          /*
           使用dispatch分发
           */
      }).catch(res=>{
          alert(res)
      })
    },
    handleopen() {
      console.log('handleopen');
    },
    handleclose() {
      console.log('handleclose');
    },
    handleselect(a, b) {
      console.log('handleselect');
    },
      menupropose(data){//通过dispatch 进行派发
        return this.$store.dispatch('setMenuTree',data)
    },
     addDynamicMenuRoutes(menuList=[],routes=[]){
     var temp = []
      for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].children && menuList[i].children.length >= 1) {
          temp = temp.concat(menuList[i].children)
        } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
            //alert(menuList[i].url)
          menuList[i].url = menuList[i].url.replace(/^\//, '')
            //alert(menuList[i].url)
          // 创建路由配置
          var route = {
            path: menuList[i].url,
            component: null,
            name: menuList[i].name,
            meta: {
              menuId: menuList[i].menuId,
              title: menuList[i].name,
              isDynamic: true,
              isTab: true,
              iframeUrl: ''
            }
          }
            try {
              // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
              // 如url="Sys/user"，则组件路径应是"@/views/Sys/user.vue",否则组件加载不到
              let array = menuList[i].url.split('/')
              let url = array[0].substring(0,1).toUpperCase()+array[0].substring(1) + '/' + array[1].substring(0,1).toUpperCase()+array[1]  .substring(1)
              route['component'] = resolve => require([`@/views/${url}`], resolve)
            } catch (e) {}
          routes.push(route)
        }
      }
      if (temp.length >= 1) {
        this.addDynamicMenuRoutes(temp, routes)
      } else {
        console.log(routes)
      }
      return routes
     }
  },
    components:{
        MenuTree
    },
  mounted() {
    this.sysName = "zrongwbl";
    this.logo = require("@/assets/logo.png");
    this.findMenuTree()
  }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
  .el-menu {
    position:absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position:absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background: #4b5f6e;
    img {
        width: 40px;
        height: 40px;
        border-radius: 0px;
        margin: 10px 10px 10px 10px;
        float: left;
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
      overflow: hidden;
    }
  }
   .menu-bar-width {
    width: 200px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>
