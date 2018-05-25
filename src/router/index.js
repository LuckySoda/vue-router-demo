import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import doc from '../components/doc.vue'
import about from '../components/about.vue'
import person from '../components/person.vue'
import com from '../components/com.vue'
import hobbit from '../components/hobbit.vue'
import error from '../components/error.vue'
import user from '../components/user.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'*',  //if筛选未配置的路由（除了下面配置的路由，其他都走这里）
      redirect(to){ //重定向
        console.log(to)  // fullpath:'/'  path:'/'
        if(to.path == '/'){
          return '/home'  //默认跳转到home
        }else{
          return '/error'
        }
      }  
    },
    {
      path:'/error', 
      component:error  
    },
    {
      name:'home',
      path: '/home',
      components: { //components实现多个组件
        left:home,
        default:error
      },
      beforeEnter(to, from, next){ //针对于单个路由的钩子函数
        next()
      }
    }, 
    {
      path: '/doc',
      component: doc,
      meta: { //路由元信息
        login: true
      }
    }, 
    {
      path: '/user/:id?',  // ?代表可以匹配后面有id的也可以匹配没有id的
      component: user
    }, 
    {
      path: '/about',
      component: about,
      children: [
        {
          path: 'person',
          component: person
        },
        {
          path: 'hobbit',
          component: hobbit
        },
        {
          path: 'com',
          component: com
        }
      ]
    }
  ],
  mode: 'hash', // hash(默认值) abstract(在node环境下的默认值) history(调用history.back())
  linkActiveClass:'active-link'
})

//router实例钩子函数
router.beforeEach(function(to, from, next){
  // console.log(to, from)
  if(to.path === '/doc'){
    if(to.meta.login){  //meta模拟用户是否登录来判断跳转页面
      next()
    }else{
      next('/home')
    }
  }else{
    next()
  }
})

export default router
