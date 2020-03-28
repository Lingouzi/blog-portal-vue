<template>
    <!-- https://juejin.im/post/5b41fb58f265da0f6d72b917-->
    <el-container>
        <el-container>
            <el-header class="header">
                <!-- 设置相同的line-height就可以居中 -->
                <el-breadcrumb separator=">" style="line-height: 60px;">
                    <el-breadcrumb-item>Search</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main style="padding: 0;">
                <ul class="entry-list" @scroll="handleScroll">
                    <li v-for="i in count" :key="i" class="item list">
                        <div class="entry-box">
                            <router-link to="/post/xxx" target="_blank">
                                <div class="entry">
                                    <div class="content-box">
                                        <div class="info-box">
                                            <div class="info-row meta-row">
                                                <ul class="mate-list">
                                                    <li class="item post">
                                                        <el-avatar size="small"/>
                                                    </li>
                                                    <li class="item username"><a href="/user/xxx" target="_blank">作者信息</a></li>
                                                    <li class="item time">时间</li>
                                                    <li class="item tag"><a href="/tag/xxx" target="_blank">标签</a></li>
                                                </ul>
                                            </div>
                                            <div class="info-row title-row">
                                                <router-link to="/post/xxx" class="title">我是标题</router-link>
                                            </div>
                                            <div class="info-row action-row">
                                                <ul class="action-list">
                                                    <li class="item comment"><i class="el-icon-s-comment"/>0</li>
                                                    <li class="item share"><i class="el-icon-share"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumb">
                                            <el-image style="width: 60px; height: 60px" fit="fit"/>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </el-main>
        </el-container>

        <!-- 右侧部分内容 -->
        <el-aside width="240px" style="padding-left: 1em;">
            <!-- 分类 -->
            <el-card shadow="hover" class="box-card">
                <div slot="header" class="clearfix title">
                    <span>分类</span>
                </div>
                <el-row v-for="i in 5" :key="i">
                    <el-col :span="24" class="item category-list">
                        <router-link to="/category/idxxx" target="_blank">
                            <div class="category-title">分类 {{ i + 5 }}</div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-card>
            <!-- 热门标签 -->
            <el-card shadow="hover" class="box-card mt-1em">
                <div slot="header" class="clearfix title">
                    <span>热门标签</span>
                    <el-button style="float: right; padding: 3px 0;font-size: 13px;" type="text">查看更多</el-button>
                </div>
                <el-link v-for="i in 20" :key="i" href="/tag/xxx" target="_blank" type="info" class="mr-20 line-height-24">#技术</el-link>
            </el-card>

            <!-- 版权声明组件 -->
            <copyright class="mt-1em"/>
        </el-aside>
    </el-container>
</template>

<script>
    import Copyright from '@/components/Copyright'

    export default {
        name: 'Index',
        components: { Copyright },
        data() {
            return {
                count: 5,
                /* 是否正在加载更多数据， */
                isMoreLoading: false
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        beforeDestroy() {
            // 移除监听， 也要加true，否则销毁不成功
            window.removeEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            handleScroll() {
                const scr = document.documentElement.scrollTop || document.body.scrollTop // 向上滚动的那一部分高度
                const clientHeight = document.documentElement.clientHeight // 屏幕高度也就是当前设备静态下你所看到的视觉高度
                const scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight // 整个网页的实际高度，兼容Pc端
                if (scr + clientHeight + 10 >= scrHeight) {
                    if (!this.isMoreLoading) {
                        // 没有加载更多，标记可以加载
                        this.list()
                    }
                }
            },
            list() {
                this.isMoreLoading = true
                // 防止其他请求同时来加载数据，
                if (this.isMoreLoading) {
                    setTimeout(() => {
                        this.count += 5
                        this.isMoreLoading = false
                    }, 4000)
                }
            }
        }
    }
</script>
<style scoped>

    /* 文章列表 */
    ul {
        margin: 0;
        padding: 0;
    }

    .clickable {
        cursor: pointer;
    }

    .el-aside .box-card .title {
        font-size: 14px;
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .el-aside .box-card .category-title {
        font-size: 14px;
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        padding: 10px;
        cursor: pointer;
        border-radius: 20px;
    }

    .el-aside .box-card .category-title:hover {
        background-color: #f1f1f1;
    }

    .category-list a {
        /* 继承上级的颜色 */
        color: inherit;
        /* 去除底部横线 */
        text-decoration: none;
    }

    .entry-box a {
        /* 继承上级的颜色 */
        color: inherit;
        /* 去除底部横线 */
        text-decoration: none;
    }

    .entry-list {
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: #ffffff;
    }

    .entry-list .item.list {
        border-bottom: 1px solid #f1f1f1;
    }

    .content-box {
        display: flex;
        align-items: center;
        padding: 1.5rem 2rem;
    }

    .thumb {
        flex: 0 0 auto;
        width: 5rem;
        height: 5rem;
        margin-left: 2rem;
        background-color: #fff;
        border-radius: 2px;
    }

    .info-box {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
    }

    .info-row {
        font-size: 1rem;
        color: #b2bac2;
    }

    .info-row.title-row {
        margin: .5rem 0 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .info-row.title-row .title {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
    }

    .mate-list {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .mate-list .item {
        display: flex;
        align-items: baseline;
        margin-right: 10px;
    }

    .item.username:hover {
        color: #20a0ff;
    }

    .item.tag:hover {
        color: #20a0ff;
    }

    .action-list {
        display: inline-flex;
        white-space: nowrap;
    }

    .action-list .item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 .8rem;
        height: 2rem;
        font-size: 1.083rem;
        line-height: 1;
        white-space: nowrap;
        color: #b2bac2;
        border-radius: 1px;
        border: 1px solid #edeeef;
    }

    .action-list .item.share {
        margin-left: -1px;
    }

    .line-height-24 {
        line-height: 24px;
    }

</style>
