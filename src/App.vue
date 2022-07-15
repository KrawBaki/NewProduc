<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayoutVue from "./layout/MainLayout.vue";
import EmptyLayoutVue from "./layout/EmptyLayout.vue";
export default {
  components: { MainLayoutVue, EmptyLayoutVue },
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout-vue";
    },
  },
};
</script>

<style lang="scss" scoped></style>
