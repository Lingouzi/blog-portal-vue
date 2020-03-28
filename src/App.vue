<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
<style>
    html {
        font-size: 12px;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        text-rendering: optimizeLegibility;
        color: #333;
        background-color: #f4f5f5;
    }

    body {
        display: block;
        margin: 0px;
    }

    .header {
        border-bottom: 1px solid #f1f1f1;
    }

    .container {
        background-color: #ffffff;
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 960px;
    }

    .el-header, .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #f4f5f5;
    }

    .mt-20 {
        margin-top: 20px;
    }

    .mt-1em {
        margin-top: 1em;
    }

    .ml-20 {
        margin-left: 20px;
    }

    .mr-20 {
        margin-right: 20px;
    }

</style>
