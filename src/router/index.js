import Vue from 'vue'
// 路由整合
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入对应的路由
import Discovery from '../views/Discovery.vue'
const Played = () => import('../views/Played')
import Playlists from '../views/Playlists.vue'
import Songs from '../views/Songs.vue'
import Mvs from '../views/Mvs.vue'
import Result from '../views/Result.vue'
import Playlist from '../views/Playlist.vue'
import Mv from '../views/Mv.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/discovery'
        },
        {
            // 发现音乐
            path: '/discovery',
            component: Discovery
        },
        {
            // 试听列表
            path: '/played',
            component: Played
        },
        {
            // 推荐歌单
            path: '/playlists',
            component: Playlists
        },
        {
            // 推荐歌单
            path: '/playlist',
            component: Playlist
        },
        {
            // 最新音乐
            path: '/songs',
            component: Songs
        },
        {
            // 最新音乐
            path: '/mvs',
            component: Mvs
        },
        // mv详情
        {
            path: '/mv',
            component: Mv
        },
        // 搜索结果页
        {
            path: '/result',
            component: Result
        }
    ]
})

export default router

