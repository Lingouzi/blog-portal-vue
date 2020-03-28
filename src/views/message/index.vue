<template>
    <el-container>
        <el-container>
            <el-header class="header">
                <!-- 设置相同的line-height就可以居中 -->
                <el-breadcrumb separator=">" style="line-height: 60px;">
                    <el-breadcrumb-item :to="{ path: '/' }">留言板</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main style="padding: 0;">
                <comment :comments="commentData"/>
            </el-main>
        </el-container>

        <el-aside width="240px" style="padding-left: 1em;">
            <copyright/>
        </el-aside>
    </el-container>
</template>

<script>
    import Comment from '@/components/Comment'
    import Copyright from '@/components/Copyright'

    export default {
        name: 'MessageBoard',
        components: { Comment, Copyright },
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
        },
        created() {
            console.log(this.comments)
        }
    }
</script>
