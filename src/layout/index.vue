<template>
    <!-- 所有页面的入口模块 -->
    <el-container>
        <!-- 顶部导航栏 -->
        <el-header class="container header">
            <vue-header/>
        </el-header>
        <el-container class="container" style="margin-top: 1em;">
            <!-- 子页面在这里展示 -->
            <router-view/>
        </el-container>
    </el-container>
</template>

<script>
    import VueHeader from '@/components/Header'

    export default {
        name: 'Layout',
        components: { VueHeader },
        data() {
            return {
                index: 1
            }
        },
        methods: {
            goto(path, index) {
                this.index = index
                this.$router.push(path)
                    .catch(() => {
                    })
            }
        }
    }
</script>
<!-- 全局生效的 -->
<style>

</style>
<!-- 局部生效的 -->
<style scoped>
</style>
