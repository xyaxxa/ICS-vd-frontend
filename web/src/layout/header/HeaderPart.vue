<template>
  <div class="header-wrapper">
    <div class="hamburger-wrapper">
        <hamburger-box />
    </div>
    <div class="breadcrumb-wrapper">

    </div>
    <div class="optionbox-wrapper">
        <option-box />
    </div>
  </div>
</template>

<script>
import HamburgerBox from './components/HamburgerBox.vue';
import OptionBox from './components/OptionBox.vue';

export default {
  name: 'HeaderPart',
  components: {
    HamburgerBox,
    OptionBox,
  },
};
</script>

<style>
.header-wrapper {
    height:100%;
    display:flex;
    align-items: center;
}
.humburger-wrapper {
    flex:1;
}
.breadcrumb-wrapper {
    flex:15;
}
.optionbox-wrapper {
    flex:1;
}
</style>
