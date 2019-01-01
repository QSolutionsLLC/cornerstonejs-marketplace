import Vue from 'vue'
import Router from 'vue-router'
// https://github.com/declandewet/vue-meta
import VueMeta from 'vue-meta'
// Adds a loading bar at the top during page loads.
import NProgress from 'nprogress/nprogress'

// Routes
import Home from './views/Home.vue'

//
import store from '@/store.js';

Vue.use(Router)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page',
})

const router = new Router({
  mode: 'history',
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
      meta: {
        beforeResolve(routeTo, routeFrom, next) {
          store
            .dispatch('getDetail', routeTo.params.slug)
            .then((detail) => {
              routeTo.params.detail = detail;

              store
                .dispatch('getDetailContent', detail.fullName)
                .then((detailContent) => {
                  routeTo.params.content = detailContent;
                  next()
                })
            })
            .catch(() => {
              // TODO: Notification
              next()
              // next({ name: '404', params: { resource: 'User' } })
            })
        }
      },
      // params.detail is set in `beforeResolve` guard
      // see `meta.beforeResolve`
      props: (route) => ({ 
        detail: route.params.detail,
        content: route.params.content
      }),
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
});

router.beforeEach((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if(routeFrom.name !== null) {
    NProgress.start();
  }

  return next();
})

// custom `beforeResolve` hook
// fires when `beforeRouteEnter` and `beforeRouteUpdate` would
// Allows us to ensure data is fetched even when params change.
// It's in "meta" because it's not a native vue-router hook.
// See `beforeEnter` navigation guard:
// https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done()
              }
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
  }
  // If a `beforeResolve` hook chose to redirect, just return.
  catch(error){
    return;
  }

  next();
})

router.afterEach((routeTo, reouteFrom) => {
  NProgress.done();
});

export default router;

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