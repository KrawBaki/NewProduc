<template>
  <div>
    <div class="flex justify-between items-center px-4 py-3">
      <router-link to="/">
        <img src="img/rightIcon/left.svg" alt="" />
      </router-link>
      <p class="font-semibold text-[15px]">Рубрики</p>
      <p class="text-white">321</p>
    </div>

    <div class="px-4 grid grid-cols-3 pb-[80px] gap-5 pt-[12px] bg-[#F4F4F9]">
      <div class="" v-for="rubric in rubrics" :key="rubric.id">
        <div class="flex min-w-[20px] flex-col pt-[10px] rounded-lg shadow-md bg-white h-[130px]">
          <div class="flex justify-center items-center pb-[14px]">
            <img :src="rubric.image" class="" alt="" />
          </div>
          <h3 class="text-center text-[12px] font-semibold">{{ rubric.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rubrics: [
        { id: 1, title: "Боль в спине", image: "img/illnes/illnes.svg" },
        { id: 2, title: "ЖКТ", image: "img/illnes/illnes2.svg" },
        { id: 3, title: "Печень", image: "img/illnes/illnes3.svg" },
        { id: 4, title: "Гинекология", image: "img/illnes/illnes4.svg" },
        { id: 5, title: "Аллергия", image: "img/illnes/illnes5.svg" },
        { id: 6, title: "Голованая боль", image: "img/illnes/illnes6.svg" },
        { id: 7, title: "Проблемы со зрением", image: "img/illnes/illnes7.svg" },
        { id: 8, title: "Выпадают волосы", image: "img/illnes/illnes8.svg" },
        { id: 9, title: "Проблемы с кожей", image: "img/illnes/illnes9.svg" },
        { id: 10, title: "Почки", image: "img/illnes/illnes10.svg" },
        { id: 11, title: "Боль в сердце", image: "img/illnes/illnes11.svg" },
        { id: 12, title: "Боль в горле", image: "img/illnes/illnes12.svg" },
        { id: 13, title: "Проблемы со сном", image: "img/illnes/illnes13.svg" },
        { id: 14, title: "Проблемы с зубами", image: "img/illnes/illnes14.svg" },
        { id: 15, title: "Последствия травм", image: "img/illnes/illnes15.svg" },
        { id: 16, title: "Детский врач", image: "img/illnes/illnes16.svg" },
        { id: 17, title: "Лёгкие", image: "img/illnes/illnes13.svg" },
        { id: 18, title: "Урология", image: "img/illnes/illnes18.svg" },
        { id: 19, title: "Проблемы с позвоночником", image: "img/illnes/illnes19.svg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
