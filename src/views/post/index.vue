<template>
    <el-container>
        <el-container>
            <el-header class="header">
                <!-- 设置相同的line-height就可以居中 -->
                <el-breadcrumb separator=">" style="line-height: 60px;">
                    <el-breadcrumb-item :to="{ path: '/' }">Blog</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/posts/xxx' }">当前标题</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main>
                <div class="main-area">
                    <article v-highlight class="article" v-html="content"/>

                    <!-- 上一篇，下一篇推荐 -->
                </div>
            </el-main>
        </el-container>

        <el-aside width="240px" style="padding-left: 1em;">
            <el-card shadow="hover">
                <el-row :gutter="10" type="flex" justify="center">
                    <el-col :span="6">
                        <el-avatar/>
                    </el-col>
                </el-row>
                <el-row :gutter="10" type="flex" justify="center">
                    <el-col>作者名称</el-col>
                </el-row>
                <el-row :gutter="10" type="flex" justify="center">
                    <el-col>作者名称</el-col>
                </el-row>
            </el-card>

            <!-- 关于我们 -->
            <copyright class="mt-1em"/>

            <el-card class="mt-1em" shadow="hover">
                <el-divider>目录</el-divider>
                <div>
                    <p v-for="(t,index) in toc" :key="index" :class="handleStyle(t.level)" @click="gotoAnchor(t.anchor)">{{ t.text }}</p>
                </div>
            </el-card>

        </el-aside>
    </el-container>
</template>

<script>
    import Copyright from '@/components/Copyright'
    import { getPostById } from '@/api/post/post'
    import highlight from '@/directive/highlight'
    import { showdown } from 'vue-showdown/dist/vue-showdown.esm'
    import showdownToc from 'showdown-toc'

    export default {
        name: 'Post',
        directives: { highlight },
        components: { Copyright },
        data() {
            return {
                content: '',
                toc: [],
                commentData: [
                    {
                        id: 'comment0001',
                        date: '2018-07-05 08:30',
                        ownerId: 'talents100020',
                        fromId: 'errhefe232213',
                        fromName: '犀利的评论家',
                        fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                        likeNum: 3,
                        content: '非常靠谱的程序员',
                        reply: [
                            {
                                id: '34523244545',
                                commentId: 'comment0001',
                                fromId: 'observer223432',
                                fromName: '夕阳红',
                                fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
                                toId: 'errhefe232213',
                                toName: '犀利的评论家',
                                toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',
                                content: '赞同，很靠谱，水平很高',
                                date: '2018-07-05 08:35'
                            },
                            {
                                id: '23132',
                                commentId: 'comment0001',
                                fromId: 'observer567422',
                                fromName: '清晨一缕阳光',
                                fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
                                toId: 'observer223432',
                                toName: '夕阳红',
                                toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
                                content: '大神一个！',
                                date: '2018-07-05 08:50'
                            }
                        ]
                    },
                    {
                        id: 'comment0002',
                        date: '2018-07-05 08:30',
                        ownerId: 'talents100020',
                        fromId: 'errhefe232213',
                        fromName: '毒蛇郭德纲',
                        fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
                        likeNum: 0,
                        content: '从没见过这么优秀的人',
                        reply: []
                    }
                ]
            }
        },
        created() {
            this.getPostById()
            showdown.setFlavor('github')
            // 生成目录插件
            showdown.Converter({ extensions: [showdownToc({ toc: this.toc })] })
        },
        methods: {
            getPostById() {
                getPostById({ id: 1005 })
                    .then(response => {
                        console.log(response)
                        const { content } = response.data
                        // 转换为html
                        this.content = showdown.makeHtml(content)
                    })
            },
            gotoAnchor(anchor) {
                // 快速跳到 锚点
                document.querySelector('#' + anchor)
                    .scrollIntoView(true)
            },
            handleStyle(level) {
                // 定义目录的样式
                if (parseInt(level) === 1) {
                    return {
                        'catalog-1': true
                    }
                } else if (parseInt(level) === 2) {
                    return {
                        'catalog-2': true
                    }
                } else if (parseInt(level) === 3) {
                    return {
                        'catalog-3': true
                    }
                } else if (parseInt(level) === 4) {
                    return {
                        'catalog-4': true
                    }
                }
                return {}
            }
        }
    }
</script>

<style scoped>
    /* markdown解析成html后的样式 */
    @import "~@/assets/css/markdown-vue.css";

    .catalog-1 {
        cursor: pointer;
        margin-left: 0;
        font-size: 16px
    }

    .catalog-2 {
        cursor: pointer;
        margin-left: 20px;
        font-size: 14px
    }

    .catalog-3 {
        cursor: pointer;
        margin-left: 40px;
        font-size: 12px
    }

    .catalog-4 {
        cursor: pointer;
        margin-left: 60px;
        font-size: 10px
    }
</style>
