import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/base/login/login'
import notFound from '@/base/notfound/notfound'
import Home from '@/components/home/home'
import Intro from '@/views/Sys/Intro'
import httpapi from '@/http/api'
import store from '@/store/index'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'首页',
      component:Home,
      children:[
        { path: '', component: Intro, name: '系统介绍' },
        /*
        { path: '/Sys/user', component: User, name: '用户管理' },
        { path: '/dept', component: Dept, name: '机构管理' },
        { path: '/role', component: Role, name: '角色管理' },
        { path: '/menu', component: Menu, name: '菜单管理' },
        { path: '/log', component: Log, name: '日志管理' }
        */
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path:'/404',
      name:'notFound',
      component:notFound
    }
  ]
})
router.$addRoutes = (params) => {
  router.matcher = new Router().matcher;
  router.addRoutes(params)
}

function addDynamicMenuRoutes(menuList=[],routes=[]){
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
            let url = array[0].substring(0, 1).toUpperCase() + array[0].substring(1) + '/' + array[1].substring(0, 1).toUpperCase() + array[1].substring(1)
            route['component'] = resolve => require([`@/views/${url}`], resolve)
          } catch (e) {
          }
          routes.push(route)
        }
      }
      if (temp.length >= 1) {
        addDynamicMenuRoutes(temp, routes)
      } else {
        console.log(routes)
      }
      return routes
     }

function addDynamicMenuAndRoutes() {
  if(store.state.menuRoutedLoaded){
    console.log('动态菜单和路由已经存在')
    return
  }
  httpapi.menu.findMenuTree()
    .then(res=>{
      store.commit('setMenuTree',res.data)
      //添加动态路由
      let dynamicRoutes = addDynamicMenuRoutes(res.data)
      router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
      router.addRoutes(router.options.routes);
      store.commit('menuRouteLoaded',true)
  }).catch(function(res) {
    alert(res);
  });
}


router.beforeEach((to,from,next)=>{
  let user = sessionStorage.getItem('user')
  if(to.path =='/login'){
    if(user){
      next({path:'/'})
    }else{
      next()
    }
  }else{
    if(!user){
      next({path:'/login'})
    }else {
      addDynamicMenuAndRoutes()
      next()
    }
  }
})


export default router
