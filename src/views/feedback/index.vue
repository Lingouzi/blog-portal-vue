<template>
    <el-main>
        <el-divider content-position="left">意见反馈</el-divider>
        <el-form ref="feedBackForm" :model="form" label-width="80px">
            <el-form-item label="昵称" prop="name" required :rules="{required: true,message:'请填写昵称'}">
                <el-input v-model="form.name" show-word-limit maxlength="10" placeholder="请问怎么称呼您？"/>
            </el-form-item>
            <el-form-item label="联系方式" prop="connect">
                <el-input v-model="form.connect" show-word-limit maxlength="50" placeholder="您愿意保持沟通嘛？"/>
            </el-form-item>
            <el-form-item label="反馈内容" prop="content" required :rules="{required: true,message:'请填写反馈内容'}">
                <el-input v-model="form.content" show-word-limit maxlength="500" type="textarea" rows="8"
                          placeholder="请填写反馈内容"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交反馈</el-button>
            </el-form-item>
        </el-form>
    </el-main>
</template>

<script>
    export default {
        name: 'Feedback',
        data() {
            return {
                form: {
                    name: '',
                    connect: '',
                    content: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.feedBackForm.validate(v => {
                    if (v) {
                        // 提交数据到后台
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
