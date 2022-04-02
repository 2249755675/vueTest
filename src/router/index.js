import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pageA from '../views/pageA.vue'
import pageB from '../views/pageB.vue'
import pageC from '../views/pageC.vue'
import tree from '../views/tree.vue'
import lazyTree from '../views/lazyTree.vue'
import transTree from '../views/transe-tree.vue'
import huadong from '../views/huadong.vue'
import perfomence from "../views/perfomence";
import map from '../views/map'
import dragTest from '../views/dragTest';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/homeManage'
  },
  {
    path:'/homeManage',
    component:function(){
      return import('../views/homeManage')
    },
    children:[
      {
        path:'arrayMethods',
        component:function(){
          return import('../views/arrayMethods')
        }
      },
      {
        path:'about',
        component:function (){
          return import('../views/About')
        }
      },
      {
        path:'addressList',
        component:function(){
          return import('../views/addressList')
        }
      },
      {
        path:'allCheck',
        component:function(){
          return import('../views/allCheck')
        }
      },
      {
        path:'daojishi',
        component:function(){
          return import('../views/daojishi')
        }
      },
      {
        path:'debounceThrottle',
        component:function(){
          return import('../views/debounceThrottle')
        }
      },
      {
        path:'dragTest',
        component:function(){
          return import('../views/dragTest')
        }
      },
      {
        path:'excel',
        component:function(){
          return import('../views/excel')
        }
      },
      {
        path:'fatherAndSon',
        component:function(){
          return import('../views/fatherAndSon')
        }
      },
      {
        path:'home',
        component:function(){
          return import('../views/Home')
        }
      },
      {
        path:'huadong',
        component:function (){
          return import('../views/huadong')
        }
      },
      {
        path:'jsx',
        component:function(){
          return import('../views/jsx')
        }
      },
      {
        path:'layout',
        component:function(){
          return import('../views/layout')
        }
      },
      {
        path:'lazyTree',
        component:function(){
          return import('../views/lazyTree')
        }
      },
      {
        path:'leftAndRight',
        component:function(){
          return import('../views/leftAndRight')
        }
      },
      {
        path:'maodian',
        component:function (){
          return import('../views/maodian')
        }
      },
      {
        path:'map',
        component:function(){
          return import('../views/map')
        }
      },
      {
        path:'objectHandler',
        component:function(){
          return import('../views/objectHandler')
        }
      },
      {
        path:'pageA',
        component:function (){
          return import('../views/pageA')
        }
      },
      {
        path:'pageB',
        component:function(){
          return import('../views/pageB')
        }
      },
      {
        path:'pageC',
        component:function(){
          return import('../views/pageC')
        }
      },
      {
        path:'perfomence',
        component:function(){
          return import('../views/perfomence')
        }
      },
      {
        path:'poster',
        component:function(){
          return import('../views/poster')
        }
      },
      {
        path:'renderContent',
        component:function(){
          return import('../views/renderContent')
        }
      },
      {
        path:'rightChildren1',
        component:function (){
          return import('../views/rightChildren1')
        }
      },
      {
        path:'rightChildren2',
        component:function(){
          return import('../views/rightChildren2')
        }
      },
      {
        path:'rightChildren3',
        component:function(){
          return import('../views/rightChildren3')
        }
      },
      {
        path:'selectScroll',
        component:function(){
          return import('../views/select-scroll')
        }
      },
      {
        path:'sideMenu',
        component:function(){
          return import('../views/sideMenu')
        }
      },
      {
        path:'sticky',
        component:function(){
          return import('../views/sticky')
        }
      },
      {
        path:'transeTree',
        component:function(){
          return import('../views/transe-tree')
        }
      },
      {
        path:'transition',
        component:function(){
          return import('../views/transition')
        }
      },
      {
        path:'tree',
        component:function(){
          return import('../views/tree')
        }
      },
      {
        path:'xdoc',
        component:function(){
          return import('../views/xdoc')
        }
      },
      {
        path:'perfomence1/debounceThrottle1',
        component:function(){
          return import('../views/debounceThrottle')
        }
      },
      {
        path:'perfomence1/debounceThrottle2',
        component:function(){
          return import('../views/perfomence')
        }
      },
      {
        path:'secondPage',
        component:function (){
          return import('../views/secondPage')
        },
        children:[
          {
            path:'secondPageOne',
            component:function(){
              return import('../views/secondPageOne')
            }
          },
          {
            path:'secondPageTwo',
            component:function(){
              return import('../views/secondPageTwo')
            }
          }
        ]
      },
      {
        path:'regexp',
        component:function(){
          return import('../views/regexp')
        }
      },
      {
        path:'formValidate',
        component:function (){
          return import('../views/formValidate')
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path:'/pageA',
    component:pageA,
    meta:{
      keepAlive:true,
    }
  },
  {
    path:'/pageB',
    component:pageB
  },
  {
    path:'/pageC',
    component:pageC
  },
  {
    path:'/tree',
    component:tree
  },
  {
    path:'/lazytree',
    component:lazyTree
  },
  {
  	path:'/transTree',
  	component:transTree
  },
	{
		path:'/huadong',
		component:huadong
	},
  {
    path:'/perfomence',
    component:perfomence
  },
  {
    path: '/map',
    component: map
  },
  {
    path:'/dragTest',
    component:dragTest
  },
  {
    path: '/debounceThrottle',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/debounceThrottle.vue')
    }
  },
  {
    path: '/maodian',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/maodian.vue')
    }
  },
  {
    path: '/poster',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/poster.vue')
    }
  },
  {
    path: '/addressList',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/addressList.vue')
    }
  },
  {
    path: '/objectHandler',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/objectHandler.vue')
    }
  },
  {
    path: '/xdoc',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/xdoc.vue')
    }
  },
  {
    path: '/counttime',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/daojishi.vue')
    }
  },
  {
    path: '/jsx',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/jsx.vue')
    }
  },
  {
    path: '/renderContent',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/renderContent.vue')
    }
  },
  {
    path: '/leftAndRight',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/leftAndRight.vue')
    },
    children:[
      {
        path:'rightChildren1',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/rightChildren1.vue')
        },
      },
      {
        path:'rightChildren2',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/rightChildren2.vue')
        },
      },
      {
        path:'rightChildren3',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/rightChildren3.vue')
        },
        children:[
          {
            path:'children',
            component: function () {
              return import(/* webpackChunkName: "about" */ '../views/rightChildren3.vue')
            },
          }
        ]
      },
    ]
  },
  {
    path: '/allCheck',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/allCheck.vue')
    }
  },
  {
    path: '/transition',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/transition.vue')
    }
  },
  {
    path: '/fatherAndSon',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/fatherAndSon.vue')
    }
  },
  {
    path: '/arrayMethods',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/arrayMethods.vue')
    }
  },
  {
    path: '/sticky',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/sticky.vue')
    }
  },
  {
    path: '/excel',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/excel.vue')
    }
  },
  {
    path: '/selectScroll',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/select-scroll.vue')
    }
  },
  {
    path: '/sideMenu',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/sideMenu.vue')
    }
  },
]

// const routes = [
//   {
//     path: '/',
//     component:()=>import('../views/leftAndRight.vue'),
//     children:[
//       {
//         path:'/leftAndRight/rightChildren1',
//         component:()=>import('../views/rightChildren1.vue')
//       },
//       {
//         path:'/leftAndRight/rightChildren2',
//         component:()=>import('../views/rightChildren2.vue')
//       },
//       {
//         path:'/leftAndRight/rightChildren3',
//         component:()=>import('../views/rightChildren3.vue')
//       }
//     ]
//   }
// ]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
