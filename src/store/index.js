import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
const store = new vuex.Store({
    state:{
        collapse:false,  // 导航栏收缩状态
        menuTreeData:'',
        menuRoutedLoaded:false
    },
    mutations:{  //必须是同步函数 不能是异步函数
        collapse(state){  // 改变收缩状态
            state.collapse = !state.collapse;
        },
      setMenuTree(state,data){
         state.menuTreeData = data
      },
      menuRouteLoaded(state,menuRouteLoaded){
        state.menuRoutedLoaded = menuRouteLoaded
      }
    },  //action提交的是mutations,而不是直接变更状态  可以执行异步
  actions:{//通过actions 调用mutations方法进行显示调用达到需求
       setMenuTree(context,data){
           context.commit('setMenuTree',data)
       },
    /*
      两种方式注册 ({commit})
     */
       setMenuTreeAsync({commit}){
         setTimeout(()=>{
           commit('setMenuTree')
         },1000)
       }
  },
  getters:{

  }
})

export default store

/*
由于 store 中的状态是响应式的，
在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
触发变化也仅仅是在组件的 methods 中提交 mutation
 */
