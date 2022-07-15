<template>
  <div class="px-4 bg-[#F4F4F9]">
    <h3 class="text-[20px] pb-[16px] font-semibold">Трекер вашего здоровья</h3>
    <div
      class="bg-gradient-to-r from-[rgba(255,_97,_151,_1)] to-[rgba(255,_201,_97,_1)] rounded-lg shadow-lg"
    >
      <div>
        <div class="flex justify-center items-center pt-[20px]">
          <img src="img/trekerHeart.svg" class="mb-[30px]" alt="" />
        </div>
        <h4 class="text-[20px] px-4 font-semibold text-white text-center">
          Ваш план профилактического <br />
          осмотра
        </h4>

        <div class="flex justify-center py-[24px]">
          <button
            class="bg-white rounded-full px-[24px] py-[13px] text-[16px] font-[500] text-[#6197FF]"
          >
            Начать профилактику
          </button>
        </div>
      </div>
    </div>
    <div class="pt-[12px] pb-[24px]">
      <button class="flex items-center bg-white shadow-lg px-[20px] h-[64px] rounded-lg w-full">
        <img src="img/place.svg" class="pr-[12px]" alt="" />
        <p class="font-semibold whitespace-nowrap">Пункты вакцинации от коронавируса</p>
      </button>
      <button
        class="flex items-center whitespace-nowrap bg-white shadow-lg px-[20px] mt-[16px] h-[64px] rounded-lg w-full"
      >
        <img src="img/letters.svg" class="pr-[12px]" alt="" />
        <p class="font-semibold">Результаты пройденных анализов</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
