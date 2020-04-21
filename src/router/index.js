import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = (resolve) => {    //登录
    import('views/login').then((module) => {
        resolve(module)
    })
}

const Registe = (resolve) => {    //注册
    import('views/registe').then((module) => {
        resolve(module)
    })
}

const Index = (resolve) => {    //首页
    import('views/Index').then((module) => {
        resolve(module)
    })
}

const ArticleList = (resolve) => {   //文章管理
    import('views/func/articleList').then((module) => {
        resolve(module)
    })
}

const FeedbackList = (resolve) => {   //反馈管理
    import('views/func/feedbackList').then((module) => {
        resolve(module)
    })
}

const MemberList = (resolve) => {   //会员管理
    import('views/func/memberList').then((module) => {
        resolve(module)
    })
}

const PackageList = (resolve) => {   //套餐管理
    import('views/func/packageList').then((module) => {
        resolve(module)
    })
}

const PermissionList = (resolve) => {   //权限管理
    import('views/func/permissionList').then((module) => {
        resolve(module)
    })
}

const StaticbookList = (resolve) => {   //静态文案管理
    import('views/func/staticBookList').then((module) => {
        resolve(module)
    })
}

const UserList = (resolve) => {   //用户管理
    import('views/func/userList').then((module) => {
        resolve(module)
    })
}

const SystemLog = (resolve) => {   //系统权限
    import('views/log/systemLog').then((module) => {
        resolve(module)
    })
}


const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registe',
        component: Registe
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/func',
        component: {render:h => h('router-view')},
        children: [
            {
                path: 'articleList',
                component: ArticleList
            },
            {
                path: 'feedbackList',
                component: FeedbackList
            },
            {
                path: 'memberList',
                component: MemberList
            },
            {
                path: 'packageList',
                component: PackageList
            },
            {
                path: 'permissionList',
                component: PermissionList
            },
            {
                path: 'staticBookList',
                component: StaticbookList
            },
            {
                path: 'userList',
                component: UserList
            }
        ]
    },
    {
        path: '/log',
        component: {render:h => h('router-view')},
        children: [
            {
                path: 'systemLog',
                component: SystemLog
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