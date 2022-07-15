<template>
  <div class="px-4 pb-[50px] bg-[#F4F4F9]">
    <div class="flex justify-between items-center">
      <h3 class="text-[#2B2C3A] font-semibold text-[20px]">Новости сайта</h3>
      <router-link to="/news">
        <img src="img/rightIcon/right.svg" alt="" />
      </router-link>
    </div>

    <div class="" v-for="newsItem in news" :key="newsItem.id">
      <div class="flex mt-[12px] h-[105px] bg-white items-center rounded-lg">
        <div class="flex-shrink-0 w-[136px]">
          <img :src="newsItem.image" class="rounded-l-lg w-full h-[105px] object-contain" alt="" />
        </div>

        <div class="ml-[12px]">
          <p class="text-[14px] font-semibold mb-[8px]">
            {{ newsItem.title }}
          </p>
          <p class="text-[14px] text-[rgba(43,_44,_58,_0.5)]">{{ newsItem.created_at }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-[24px] pb-[30px]">
      <router-link to="/news" class="text-[#6197FF] text-[16px]">Посмотреть все</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
      page: 1,
      page_size: 4,
    };
  },
  methods: {
    async fetchGetNews() {
      const response = await axios.get("https://api.checkin.kg/api/v1/news", {
        params: {
          page_size: this.page_size,
          page: this.page,
        },
      });
      this.news = response.data.results;
    },
  },
  mounted() {
    this.fetchGetNews();
  },
};
</script>

<style lang="scss" scoped></style>
