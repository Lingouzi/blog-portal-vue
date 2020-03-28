<template>
    <el-row type="flex" :gutter="10">
        <el-col :span="3">
            <div style="font-size: 20px;">
                <router-link to="/">二狗子的窝</router-link>
            </div>
        </el-col>
        <el-col :span="12">
            <el-row :gutter="10" type="flex" class="font-tab">
                <el-col :span="4">
                    <router-link to="/index" :class="{'on':index===1}">首页</router-link>
                </el-col>
                <el-col :span="4">
                    <router-link to="/tag/开心" :class="{'on':index===2}">开心</router-link>
                </el-col>
                <el-col :span="4">
                    <router-link to="/tag/美丽" :class="{'on':index===3}">美丽</router-link>
                </el-col>
                <el-col :span="4">
                    <router-link to="/shop" :class="{'on':index===4}">小店</router-link>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="4">
            <el-input v-model.trim="keyword" clearable size="small" placeholder="搜索" @keyup.enter.native="search"/>
        </el-col>
        <el-col :span="5">
            <el-link href="mailto:664162337@qq.com?subject=【投稿】(from ybq87.top)" target="_blank" :underline="false" icon="el-icon-message" class="mr-20">投稿</el-link>
            <el-tooltip placement="top">
                <div slot="content"><img width="150" src="http://img.ybq87.top/static/img/qrcode.jpg" alt="ybq"/></div>
                <font-awesome-icon class="mr-20" :icon="['fab', 'weixin']" size="lg" :style="{ color: '#75b75e' }"/>
            </el-tooltip>
            <el-link :underline="false" class="mr-20" href="//github.com/Lingouzi/blog-portal-vue" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
            </el-link>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                keyword: ''
            }
        },
        computed: {
            index() {
                return this.$store.state.app.headerTabIndex
            }
        },
        methods: {
            search() {
                if (this.keyword) {
                    console.log('前往首页，并搜索结果')
                    this.$router.push('/search?t=1&k=' + this.keyword)
                }
            }
        }
    }
</script>

<style scoped>
    .font-tab {
        font-size: 1.3em;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .on {
        color: #20a0ff;
    }
</style>
