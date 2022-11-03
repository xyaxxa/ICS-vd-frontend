<template>
  <div>
    <el-dropdown>
        <span class="el-dropdown-link">
            <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'OptionBox',
};
</script>

<style>
.el-dropdown-link {
    cursor: pointer;
}
</style>
