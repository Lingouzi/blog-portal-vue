<template>
    <el-container>
        <el-container>
            <el-header class="header">
                <!-- 设置相同的line-height就可以居中 -->
                <el-breadcrumb separator=">" style="line-height: 60px;">
                    <el-breadcrumb-item :to="{ path: '/' }">Blog</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/post/xxx' }">当前标题</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main>
                <div class="main-area">
                    <article>
                        <meta itemprop="url" content="https://juejin.im/post/5e4a3a20e51d45270c277754"/>
                        <meta itemprop="headline" content="巧妙实现带圆角的渐变边框"/>
                        <meta itemprop="keywords" content="CSS,前端"/>
                        <meta itemprop="datePublished" content="2020-02-17T07:08:00.447Z"/>
                        <meta itemprop="image" content="https://user-gold-cdn.xitu.io/2020/2/17/17051f3262e55f5b?w=293&amp;h=307&amp;f=png&amp;s=53573"/>
                        <div itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                            <meta itemprop="name" content="chokcoco"/>
                            <meta itemprop="url" content="https://juejin.im/user/574fa4b3e4fd690054c55d9d"/>
                        </div>
                        <div itemprop="publisher" itemscope="itemscope" itemtype="http://schema.org/Organization">
                            <meta itemprop="name" content="掘金"/>
                            <div itemprop="logo" itemscope="itemscope" itemtype="https://schema.org/ImageObject">
                                <meta itemprop="url" content="https://b-gold-cdn.xitu.io/icon/icon-white-180.png"/>
                                <meta itemprop="width" content="180"/>
                                <meta itemprop="height" content="180"/>
                            </div>
                        </div>
                        <div>大图地址</div>
                        <h1>title</h1>
                        <div data-v-55484a2b="" data-id="5e4a3bd0f265da57127e3e59" itemprop="articleBody" class="article-content">
                            <p>如何实现下面这个渐变的边框效果：</p>
                            <figure>
                                <img alt="image" class="lazyload inited loaded"
                                     data-src="https://user-gold-cdn.xitu.io/2020/2/17/17051f2ed9d25fbb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="218"
                                     data-height="112" src="https://user-gold-cdn.xitu.io/2020/2/17/17051f2ed9d25fbb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"/>
                                <figcaption/>
                            </figure>
                            <p>这个问题本身不难，实现的方法也有一些，主要是有一些细节需要注意。</p>
                            <h2 class="heading" data-id="heading-0">border-image</h2>
                            <p><code>border-image</code> 是 CSS 规范 <a target="_blank" href="https://drafts.csswg.org/css-backgrounds-3/#border-images" rel="nofollow noopener noreferrer">CSS
                                Backgrounds and Borders Module Level 3</a> (最新一版的关于 background 和 border 的官方规范) 新增的一个属性值。</p>
                            <p>解释一下：<code>clip-path: inset(0 round 10px)</code> 。</p>
                            <ul>
                                <li>clip-path: inset() 是矩形裁剪</li>
                                <li>inset() 的用法有多种，在这里 <code>inset(0 round 10px)</code> 可以理解为，实现一个父容器大小（完全贴合，垂直水平居中于父容器）且 <code>border-radius: 10px</code> 的容器，将这个元素之外的所有东西裁剪掉（即不可见）。</li>
                            </ul>
                            <p>非常完美，效果如下：</p>
                            <p>如果还有什么疑问或者建议，可以多多交流，原创文章，文笔有限，才疏学浅，文中若有不正之处，万望告知。</p>
                        </div>
                    </article>
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
            <el-card class="mt-1em" shadow="hover">
                <div>目录</div>
            </el-card>

            <copyright class="mt-1em"/>
        </el-aside>
    </el-container>
</template>

<script>
    import Copyright from '@/components/Copyright'

    export default {
        name: 'Post',
        components: { Copyright },
        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>
