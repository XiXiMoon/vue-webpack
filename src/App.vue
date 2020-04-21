<template>
	<div class="app-container">
		<div class="app-container-left">

			<div class="project-title">
				救援中心后台管理系统
			</div>

			<div class="slide-bar-left">
				<slide-bar></slide-bar>
				<router-link to="/login">登录</router-link>
				<router-link to="/registe">注册</router-link>
				<router-link to="/index">首页</router-link>
				<div>功能模块</div>
				<router-link to="/func/articleList">文章管理</router-link>
				<router-link to="/func/feedbackList">反馈管理</router-link>
				<router-link to="/func/memberList">会员管理</router-link>
				<router-link to="/func/packageList">套餐管理</router-link>
				<router-link to="/func/permissionList">权限管理</router-link>
				<router-link to="/func/staticBookList">静态文案管理</router-link>
				<router-link to="/func/userList">用户管理</router-link>
				<div>日志管理</div>
				<router-link to="/log/systemLog">系统日志</router-link>
			</div>

		</div>

		<div class="app-container-right">

			<div class="breadcrumb-nav">
				<breadcrumb></breadcrumb>
			</div>

			<div class="openpage-nav">
				<page-nav></page-nav>
			</div>

			<div class="page-view">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import SlideBar from "antM/slide-bar"
import Breadcrumb from "antM/breadcrumb"
import PageNav from "antM/page-nav"

export default {
	name:'App',
	components: {
		SlideBar,
		Breadcrumb,
		PageNav
	}
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.app-container{
	width:100%;
	height:100%;
	font-size: @FontSize_1;
}
</style>