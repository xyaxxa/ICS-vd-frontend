<template>
  <div class="aside-wrapper">
    <div class="title-wrapper">
        <title-box />
    </div>
    <div class="menu-wrapper">
        <router-view name="menu"/>
    </div>
  </div>
</template>

<script>
import TitleBox from './components/TitleBox.vue';

export default {
  name: 'AsidePart',
  components: {
    TitleBox,
  },
};
</script>

<style scoped>
.aside-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.title-wrapper {
    height: 60px;
}
.menu-wrapper {
    flex: 1;
    background-color: #1F2D3D;
}
</style>

<style>
.el-menu {
    border-right: 0;
}
</style>
