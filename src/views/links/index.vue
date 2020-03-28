<template>
    <el-main>
        <el-row :gutter="20" style="width: 100%" type="flex" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
        </el-row>
        <el-row class="mt-1em" :gutter="20" style="width: 100%" type="flex" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
        </el-row>
        <el-row class="mt-1em" :gutter="20" style="width: 100%" type="flex" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
        </el-row>
        <el-row class="mt-1em" :gutter="20" style="width: 100%" type="flex" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">1</div>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: 'Links'
    }
</script>

<style scoped>

    .el-col {
        border-radius: 4px;
        text-align: center;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 100px;
        line-height: 100px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
