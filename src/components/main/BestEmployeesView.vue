<template>
  <div class="px-4 pb-[24px] bg-[#F4F4F9]">
    <h4 class="text-[20px] pb-[16px] font-semibold">Лучшие специалисты месяца</h4>
    <div class="bg-white shadow-lg rounded-lg">
      <div class="flex px-4 py-[12px]">
        <img src="img/doctorprofil.svg" alt="" />
        <div class="rounded-lg pl-[12px]">
          <h2 class="text-[16px] font-semibold">Мамыров Максат</h2>
          <span class="flex text-[rgba(43,_44,_58,_0.5)]"
            ><img src="img/profession.svg" alt="" />Терапевт</span
          >
          <span class="flex text-[rgba(43,_44,_58,_0.5)]"
            ><img src="img/diagnose.svg" alt="" />Диагностический центр</span
          >
          <div class="flex space-x-2 whitespace-nowrap">
            <span class="flex items-center -ml-[4px]"
              ><img src="img/stars.svg" class="w-[20px] pr-1" alt="" />4.8
              <span class="text-[rgba(43,_44,_58,_0.5)] pl-1">(14 отзывов)</span></span
            >
            <span class="flex items-center text-[12px] text-[#FF6197]"
              ><img src="img/sales.svg" class="w-[18px] pr-1" alt="" />Скидка<span class="pl-1"
                >8%</span
              >
            </span>
          </div>
        </div>
      </div>
      <div class="w-full text-center rounded-b-lg py-[12px] bg-[rgba(97,_151,_255,_0.1)] -px-4">
        <a href="" class="text-[#6197FF]">Записаться</a>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      bestEmployees: [],
    };
  },
  // methods: {
  //   async fetchBestEmployees() {
  //     const response = await axios.get("https://api.checkin.kg/api/v1/master/info");
  //     const data = response.data;
  //   },
  // },
  // mounted() {
  //   this.fetchBestEmployees();
  // },
};
</script>

<style scoped></style>
