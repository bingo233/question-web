import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import layout from '@/view/Layout/main'
import login from '@/view/login'
import sysMenu from '@/view/sys/sysMenu'
import errorPage from '@/view/jobs/404'
import auth from '@/utils/autor'
import store from '@/store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: layout,
      meta:{name:'主页面1', icon: 'personnel'}
    },
    {
      path: '/sys',
      component: layout,
      meta:{name:'系统管理', icon: 'personnel'},
      children:[
        {
          path: 'sysMenu',
          component: sysMenu,
          meta:{name:'系统菜单', icon: 'personnel'},
        }
      ]
    },
    {
      path: '*',
      component: errorPage
    }
  ]
});

const whiteList = ['/login','/500'];// 不重定向白名单

// 判断是否与访问权限
const checkRouter = function(to){
  const userMenus = store.getters.userMenus;
  let hasRole = false;
  userMenus.forEach(menu => {
    if (whiteList.includes(to.path) || menu.path === to.path) {
      hasRole = true;
      return false
    }
  });
  return hasRole;
};

router.beforeEach((to, from, next) => {
  if (auth.getToken()) {
    if(to.path === '/login') {
      // next({path:'/'})
      return next()
    }

    if(!store.getters.userMenus) {
      store.dispatch('getMenus').then(() => {
        next()
      })
    } else {
      if (checkRouter(to)) {
        next()
      } else {
        // next({path: '/500', query: {noPower: true}})
        next()
      }
    }
  }else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({path: '/login'})
    }
  }
});

export default router
