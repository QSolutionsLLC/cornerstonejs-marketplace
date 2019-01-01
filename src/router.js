import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    // Scroll to Anchor
    if(to.hash){
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 }
      }
    }
    // Scroll to saved
    else if (savedPosition) {
      return savedPosition
    } 
    // Scroll to Top
    else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/plugins/:category?',
      name: 'plugin-list',
      component: () => import(/* webpackChunkName: "plugins-list" */ './views/PluginList.vue'),
      props: true
    },
    {
      path: '/plugins/item/:slug',
      name: 'plugin-detail',
      component: () => import(/* webpackChunkName: "product" */ './views/PluginDetail.vue'),
      props: true
    },
    {
      path: '/learning-materials',
      name: 'learning-materials',
      component: () => import(/* webpackChunkName: "learning-materials" */ './views/LearningMaterials.vue'),
    },
    {
      path: '/find-experts',
      name: 'find-experts',
      component: () => import(/* webpackChunkName: "find-experts" */ './views/FindExperts.vue'),
    },
    // HELP
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "legal" */ './views/Help.vue'),
    },
    {
      path: '/help-author',
      name: 'help-author',
      component: () => import(/* webpackChunkName: "legal" */ './views/HelpAuthor.vue'),
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import(/* webpackChunkName: "legal" */ './views/Sitemap.vue'),
    },
    // LEGAL
    {
      path: '/legal/:content?',
      name: 'legal',
      component: () => import(/* webpackChunkName: "legal" */ './views/Legal.vue'),
      props: true,
    },
    {
      path: '/licenses',
      name: 'licenses',
      component: () => import(/* webpackChunkName: "legal" */ './views/Licenses.vue'),
    },
    // ADMIN
    {
      path: '/connect',
      name: 'connect',
      component: () => import(/* webpackChunkName: "connect" */ './views/Connect.vue'),
    },
  ]
})

// Home
// Start Selling
//  - Legal: Author Terms
// Contact
// Plugins
//  - All
//  - Annotation
//  - Drag
//  - Multi-Touch / Gesture
//  - Scroll
//  - Overlay
//  - Brush
//  - Image Loaders
//  - Misc.
// Learning Materials
// For Hire