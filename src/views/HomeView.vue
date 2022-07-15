<template>
  <div>
    <NavbarView :isUser="isUser" />
    <SearchLetters />
    <CategoriesService />
    <ChildrenHealth />
    <TrekerHealth />
    <EmployeesView />
    <NewsPaper />
  </div>
</template>

<script>
import CategoriesService from "@/components/main/CategoriesService.vue";
import NavbarView from "@/components/main/NavbarView.vue";
import SearchLetters from "@/components/main/SearchLetters.vue";
import ChildrenHealth from "@/components/main/ChildrenHealth.vue";
import TrekerHealth from "@/components/main/TrekerHealth.vue";
import EmployeesView from "@/components/main/BestEmployeesView.vue";
import NewsPaper from "@/components/main/NewsPaper.vue";
export default {
  components: {
    NavbarView,
    SearchLetters,
    CategoriesService,
    ChildrenHealth,
    TrekerHealth,
    EmployeesView,
    NewsPaper,
  },
  name: "HomeView",
  data() {
    return {
      isUser: true,
    };
  },
};
</script>

<style></style>
