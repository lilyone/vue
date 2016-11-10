<template>
  <div>
    <div class="index-container">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="curIndex == $index ? 'active' : ''"
            
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import { changeIndex } from '../vuex/actions';
  import { getIndex } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        curIndex: getIndex
      },
      actions: {
        change: changeIndex
      }
    },
    data() {
      return {
        tablist: [
          {path: '/index', icon: '&#xe6bb;', name: '首页'},
          {path: '/index/search', icon: '&#xe65c;', name: '发现'},
          {path: '/index/photo', icon: '&#xe664;', name: ''},
          {path: '/index/my', icon: '&#xe735;', name: '我的'},
          {path: '/', icon: '&#xe603;', name: '退出'}
        ]
      }
    },

    methods: {
//    changPage(i) {
//      
//    }
    }
  }
</script>
