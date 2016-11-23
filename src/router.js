/**
 * Created by jiaan.zhou on 2016/11/21.
 */

/*
* router info
* */
import Index from './view/Index.vue'
import Login from './view/Login.vue'
import Sign from './view/Sign.vue'



export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sign',
        component: Sign
    }
]