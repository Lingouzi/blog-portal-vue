<template>
    <!-- 网站站点信息 -->
    <el-card shadow="hover" class="box-card site-info">
        <el-row>
            <el-col>关注我们</el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="center">
            <el-col :span="6">
                <a href="https://weibo.com/linergouzi" target="_blank" title="@怎么了老弟">
                    <font-awesome-icon :icon="['fab', 'weibo']" size="2x" :style="{ color: 'red' }"/>
                </a>
            </el-col>
            <el-col :span="6">
                <el-tooltip placement="top">
                    <div slot="content"><img width="150" src="http://img.ybq87.top/static/img/qrcode.jpg" alt="微信"/>
                    </div>
                    <font-awesome-icon :icon="['fab', 'weixin']" size="2x" :style="{ color: '#75b75e' }"/>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <a href="https://github.com/Lingouzi/blog-portal-vue" target="_blank" title="github.com/Lingouzi/blog-portal-vue">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x" :style="{ color: 'black' }"/>
                </a>
            </el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="center">
            <el-col :span="8">
                <router-link to="/feedback">意见反馈</router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/about">关于</router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/links">友情链接</router-link>
            </el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="center">
            <el-col>©2020 YBQ & LY</el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="center">
            <el-col>All rights reserved.</el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col><a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备19145631号</a></el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: 'Copyright'
    }
</script>

<style scoped>
    .site-info {
        text-align: center;
    }

    .site-info .el-row {
        line-height: 24px;
    }

    .site-info .el-row a {
        line-height: 24px;
        color: inherit;
        text-decoration: none;
    }
</style>
