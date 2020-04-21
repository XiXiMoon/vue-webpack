import Vue from 'vue'
import Router from 'vue-router'

import Login from "views/login"  //登录
import Registe from "views/registe"   //注册
import Index from "views/index" //首页
import ArticleList from "views/func/articleList"    //文章管理
import FeedbackList from "views/func/feedbackList"  //反馈管理
import MemberList from "views/func/memberList"      //会员管理
import PackageList from "views/func/packageList"    //套餐管理
import PermissionList from "views/func/permissionList"  //权限管理
import StaticbookList from "views/func/staticBookList"  //静态文案管理
import UserList from "views/func/userList"  //用户管理
import SystemLog from "views/log/systemLog"    //系统权限

Vue.use(Router)

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

export default router