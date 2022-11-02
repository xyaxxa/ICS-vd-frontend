<template>
    <div class="main-wrapper">
        <div class="login-box">
            <h2>工控漏洞挖掘系统</h2>
            <el-form>
                <el-form-item>
                    <el-input
                        placeholder="用户名"
                        prefix-icon="el-icon-user"
                        v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        placeholder="密码"
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                        show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        round>登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

<style scoped lang="scss">
.main-wrapper {
    height:100%;
    background-color: #2D3A4B;
    padding:10px;
}
.login-box {
    width: 500px;
    border:1px solid #eee;
    border-radius:20px;
    margin: auto;
    margin-top:100px;
    padding:20px;
    color: white;
}

.el-input ::v-deep .el-input__inner {
    background-color: #283443;
    border: 1px solid #374352;
    color: #eee;
}

.el-button {
    width:100%;
}
</style>
