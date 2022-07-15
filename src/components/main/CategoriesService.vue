<template>
  <div class="px-4 bg-[#F4F4F9]">
    <div class="flex justify-between items-center pt-[16px]">
      <h2 class="text-[#2B2C3A] font-semibold text-[20px]">Рубрики</h2>
      <router-link to="/rubric" href="#">
        <img src="img/rightIcon/right.svg" alt="" />
      </router-link>
    </div>
    <div class="flex justify-between items-center space-x-3 pt-[16px] pb-[20px]">
      <div class="flex justify-between items-center bg-[#FF6197] h-[76px] w-3/6 px-4 rounded-lg">
        <h3 class="text-white text-[14px] leading-[20px]">
          Боль <br />
          в сердце
        </h3>
        <img src="img/heart.svg" alt="" />
      </div>
      <div class="flex justify-between items-center w-3/6 bg-[#FFC961] h-[76px] px-4 rounded-lg">
        <h3 class="text-white text-[14px] leading-[20px]">
          Детский <br />
          врач
        </h3>
        <img src="img/doctor.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
