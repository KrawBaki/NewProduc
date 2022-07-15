<template>
  <div>
    <router-view />

    <footer class="px-3 py-1 z-[999] fixed bottom-0 left-0 right-0 shadow bg-white">
      <ul class="flex justify-around py-2 items-center">
        <router-link
          v-for="sidebar in sidebars"
          :key="sidebar.title"
          :to="sidebar.link"
          class="flex px-3 rounded-full py-2 items-center"
          :class="{ 'bg-[#6197FF]': isActive(sidebar) }"
        >
          <img :src="isActive(sidebar) ? sidebar.urlSelect : sidebar.url" alt="" />
          <p
            :class="isActive(sidebar) ? `${sidebar.width} flex-shrink-0  mx-[8px]` : ' '"
            class="text-white duration-300 whitespace-nowrap w-0"
          >
            {{ sidebar.title }}
          </p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebars: [
        {
          title: "Главная",
          url: "img/sidebarHome.svg",
          urlSelect: "img/sidebarHomeSelect.svg",
          link: "/",
          width: "w-[56px]",
        },
        {
          title: "Медицинская карта",
          url: "img/sidebarHealhy.svg",
          urlSelect: "img/sidebarHealhySelect.svg",
          link: "/card",
          width: "w-[136px]",
        },
        {
          title: "Профиль",
          url: "img/sidebarProfil.svg",
          urlSelect: "img/sidebarProfilSelect.svg",
          link: "/healthy",
          width: "!w-[65px]",
        },
      ],
    };
  },
  methods: {
    isActive(e) {
      return e.link === this.$route.fullPath;
    },
  },
};
</script>

<style scoped></style>
