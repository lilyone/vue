import "../styles/usage/page/app.scss";

// views
import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import search from "./components/search.vue";
import photo from "./components/photo.vue";
import my from "./components/my.vue";
import exit from "./components/exit.vue";
import detail from "./components/detail.vue";

import commonUtil from "./utils/commonUtil";
commonUtil.myScroll();

// router
let router = new VueRouter();

import store from "./vuex/store";
let App = Vue.extend({
  store: store
});

router.map({
  '/': {
    component: guide
  },

  '/index': {
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/search': {
        component: search
      },
      '/photo': {
        component: photo
      },
      '/my': {
        component: my
      },
      '/exit': {
        component: exit
      }
    }
  },

  '/detail/:id': {
    name: 'detail',
    component: detail
  }
});

router.start(App, 'body');
