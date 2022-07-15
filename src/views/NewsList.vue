<template>
  <div>
    <div class="flex justify-between items-center px-4 py-3">
      <router-link to="/">
        <img src="img/rightIcon/left.svg" alt="" />
      </router-link>
      <p class="font-semibold">Новости</p>
      <p class="text-white">321</p>
    </div>
    <div class="bg-[#F4F4F9] p-4 pb-[80px]">
      <div class="" v-for="newsItem in news" :key="newsItem.id">
        <div class="flex mt-[12px] h-[105px] bg-white items-center shadow-lg rounded-lg">
          <div class="flex-shrink-0 w-[136px]">
            <img
              :src="newsItem.image"
              class="rounded-l-lg w-full h-[105px] object-contain"
              alt=""
            />
          </div>

          <div class="ml-[12px]">
            <p class="font-medium pb-2 text-sm overflow-ellipsis max-h-[60px] overflow-hidden">
              {{ newsItem.title }}
            </p>
            <p class="text-[14px] text-[rgba(43,_44,_58,_0.5)]">{{ newsItem.created_at }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async fetchGetNews() {
      const response = await axios.get("https://api.checkin.kg/api/v1/news");
      this.news = response.data.results;
      console.log(response.data.results);
    },
  },
  mounted() {
    this.fetchGetNews();
  },
};
</script>

<style lang="scss" scoped></style>
