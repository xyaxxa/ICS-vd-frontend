<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="250px">
        <aside-part />
      </el-aside>
      <el-container>
        <el-header height="60px">
          <header-part />
        </el-header>
        <el-main>
          <main-part />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderPart from './header/HeaderPart.vue';
import AsidePart from './aside/AsidePart.vue';
import MainPart from './main/MainPart.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderPart,
    AsidePart,
    MainPart,
  },
};
</script>

<style scoped>
.app-wrapper {
  height:100%;
}
.el-container {
  height:100%;
}
.el-header {
  box-shadow: 0 2px 2px 0 #eee;
}
</style>
