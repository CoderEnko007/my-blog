import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/Blog'
import SingleBlog from '@/views/SingleBlog'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog/:id',
        name: 'SingleBlog',
        component: SingleBlog
    }
  ]

})
