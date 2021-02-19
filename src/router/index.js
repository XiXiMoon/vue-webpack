import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由懒加载第一种方式
// const Login = (resolve) => {    //登录
//     import('views/login').then((module) => {
//         resolve(module)
//     })
// }

// const Registe = (resolve) => {    //注册
//     import('views/registe').then((module) => {
//         resolve(module)
//     })
// }

// const Index = (resolve) => {    //首页
//     import('views/Index').then((module) => {
//         resolve(module)
//     })
// }

// const ArticleList = (resolve) => {   //文章管理
//     import('views/func/articleList').then((module) => {
//         resolve(module)
//     })
// }

// const FeedbackList = (resolve) => {   //反馈管理
//     import('views/func/feedbackList').then((module) => {
//         resolve(module)
//     })
// }

// const MemberList = (resolve) => {   //会员管理
//     import('views/func/memberList').then((module) => {
//         resolve(module)
//     })
// }

// const PackageList = (resolve) => {   //套餐管理
//     import('views/func/packageList').then((module) => {
//         resolve(module)
//     })
// }

// const PermissionList = (resolve) => {   //权限管理
//     import('views/func/permissionList').then((module) => {
//         resolve(module)
//     })
// }

// const StaticbookList = (resolve) => {   //静态文案管理
//     import('views/func/staticBookList').then((module) => {
//         resolve(module)
//     })
// }

// const UserList = (resolve) => {   //用户管理
//     import('views/func/userList').then((module) => {
//         resolve(module)
//     })
// }

// const SystemLog = (resolve) => {   //系统权限
//     import('views/log/systemLog').then((module) => {
//         resolve(module)
//     })
// }

//路由懒加载第二种方式
//components处再用loadView('login')
//此种方式可能会导致重命名失败，可采用第三种
function loadView(view) {
    return () => import(/* webpackChunName: "view-[request]" */ `@/views/login`) //注意路径的修改
}





const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        component: resolve => require.ensure([], () => resolve(require('views/login')), 'login')
    },
    {
        path: '/registe',
        component: resolve => require.ensure([], () => resolve(require('views/registe')), 'registe')
    },
    {
        path: '/index',
        component: resolve => require.ensure([], () => resolve(require('views/index')), 'index')
    },
    {
        path: '/func',
        component: {render:h => h('router-view')},
        children: [
            {
                path: 'articleList',
                component: resolve => require.ensure([], () => resolve(require('views/func/articleList')), 'articleList')
            },
            {
                path: 'feedbackList',
                component: resolve => require.ensure([], () => resolve(require('views/func/feedbackList')), 'feedbackList')
            },
            {
                path: 'memberList',
                component: resolve => require.ensure([], () => resolve(require('views/func/memberList')), 'memberList')
            },
            {
                path: 'packageList',
                component: resolve => require.ensure([], () => resolve(require('views/func/packageList')), 'packageList')
            },
            {
                path: 'permissionList',
                component: resolve => require.ensure([], () => resolve(require('views/func/permissionList')), 'permissionList')
            },
            {
                path: 'staticBookList',
                component: resolve => require.ensure([], () => resolve(require('views/func/staticBookList')), 'staticBookList')
            },
            {
                path: 'userList',
                component: resolve => require.ensure([], () => resolve(require('views/func/userList')), 'userList')
            }
        ]
    },
    {
        path: '/log',
        component: {render:h => h('router-view')},
        children: [
            {
                path: 'systemLog',
                component: resolve => require.ensure([], () => resolve(require('views/log/systemLog')), 'systemLog')
            }
        ]
    }
]

const router = new Router({
    routes
})

//后续可打断点调试此文件，方便研究vue-router的源码
// console.log(Login)
// console.log(Router)
// console.log(Vue)
// console.log(routes)
// console.log(router)

export default router