<template>
	<div class="app-container">
		<div class="app-container-left">

			<div class="project-title">
				救援中心后台管理系统
			</div>

			<div class="slide-bar-left">
				<slide-bar></slide-bar>
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
				存放页面地方
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