import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import Blog from '@/components/Blog'
import Post from '@/components/Post'
import Cart from '@/components/Cart'
import Layout from '@/components/Layout'
import Checkout from '@/components/Checkout'
import Payment from '@/components/Payment'
import Confirmation from '@/components/Confirmation'
import SearchResults from '@/components/SearchResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'/',
          component:Home,
          name:'Home'
        },
        {
          path:'/shop',
          component:Shop,
          name:'Shop'
        },
        {
          path:'/product/:id',
          component:Product,
          name:'Product'
        },
        {
          path:'/blog',
          component:Blog,
          name:'Blog'
        },
        {
          path:'/post',
          component:Post,
          name:'Post'
        },
        {
          path:'/cart',
          component:Cart,
          name:'Cart'
        },
        {
          path:'/checkout',
          component:Checkout,
          name:'Checkout'
        },
        {
          path:'/payment',
          component:Payment,
          name:'Payment'
        },
        {
          path:'/confirmation',
          component:Confirmation,
          name:'Confirmation'
        },
        {
          path:'/search',
          component:SearchResults,
          name:'Search'
        }
      ]

    }
  ],
    mode:'history'
},

  )
