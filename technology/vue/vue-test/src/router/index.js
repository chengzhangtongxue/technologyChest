import Vue from 'vue'
import Router from 'vue-router'
/**
 * @ 在webpack.base.conf.js中做的别名配置  @ 表示的就是src 这个目录路径
 */
import Rank from '@/components/rank/rank';
import Recommend from '@/components/recommend/recommend';
import Search from '@/components/search/search';
import Singer from '@/components/singer/singer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rank',
      component: Rank
    }
  ]
})
