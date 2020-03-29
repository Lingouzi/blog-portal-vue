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
                    <article ref="article" v-highlight class="article" v-html="content"/>
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

            <el-card ref="tocCard" :class="{'mt-1em':true,'fixTop':fixed}" shadow="hover">
                <el-divider>目录</el-divider>
                <div class="tocs" v-html="result"/>
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

    import toc from '@/utils/toc'

    export default {
        name: 'Post',
        directives: { highlight },
        components: { Copyright },
        data() {
            return {
                fixed: false, // 目录是否置顶浮动
                content: '', // 正文内容
                toc: [], // 目录的数组结构
                result: '', // 目录变为html 结构
                listHeight: [],
                commentData: [ // 测试评论结构
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
            // 开启监听滑动
            window.addEventListener('scroll', this.handleScroll, true)
        },
        beforeDestroy() {
            // 移除监听
            window.removeEventListener('scroll', this.handleScroll, true)
        },
        mounted() {
            console.log('..')
        },
        methods: {
            handleScroll() {
                this.$nextTick(function () {
                    // 如果滚动区域高度大于410,那么就将目录进行浮动
                    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    this.fixed = scrollY > 410
                    this.listHeight.map((h, i) => {
                        let h1 = this.listHeight[i]
                        let h2 = this.listHeight[i + 1]
                        if (scrollY >= h1 && scrollY <= h2) {
                            // 点亮当前的h标签
                            // const data: Element = document.getElementsByClassName(`toc-link-#${i}`)[0] as Element // 获取文章滚动到目录的目标元素
                            // this.linkLists.forEach((list: Element) => {
                            //     let top: number = 0
                            //     top = i > 7 ? -28 * (i - 7) : 0
                            //     this.target[0].style.marginTop = `${top}px`
                            //     data == list ? list.classList.add('active') : list.classList.remove('active') // 其他移除active
                            // })
                        }
                    })
                    // const top = this.$refs.tocCard.$el.getBoundingClientRect().top
                    // 目录的ul li 随着滚动 active 样式
                    //
                })
            },
            getPostById() {
                getPostById({ id: 1005 })
                    .then(response => {
                        console.log(response)
                        const { content } = response.data
                        // 转换为html
                        this.content = showdown.makeHtml(content)
                        this.result = toc(this.toc)

                        this.$nextTick(function () {
                            this.getTitleHeight()
                        })
                    })
            },
            getTitleHeight() {
                // 得到每个h1标题的top位置数值,
                const elementsByTagName = this.$refs.article.querySelectorAll('h1,h2,h3,h4')
                console.log(elementsByTagName)
                elementsByTagName.forEach((item, index) => {
                    this.listHeight.push(item.offsetTop)
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
<style>

</style>
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

    .fixTop {
        position: fixed;
        top: 0;
    }

    .tocs >>> .catalog-list {
        font-weight: bold;
        padding-left: 20px;
        position: relative;
        font-size: 15px;
    }

    .tocs >>> .catalog-list ul > ul > li {
        font-weight: normal;
        font-size: 14px;
        color: #333333;
    }

    .tocs >>> .catalog-list ul > ul > ul > li {
        font-size: 13px;
        color: #333333;
    }

    .tocs >>> .catalog-list li:hover {
        cursor: pointer;
        color: #20a0ff;
    }

</style>
