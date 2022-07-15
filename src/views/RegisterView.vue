<template>
  <div class="">
    <div class="px-4 pt-2">
      <img src="img/CheckinLogo.svg" alt="" />
    </div>
    <div class="pt-[30px] px-4">
      <h2 class="text-[32px] font-semibold">Номер телефона</h2>
      <p class="text-base text-[rgba(43,_44,_58,_1)] leading-[17px] pt-[16px]">
        Для того, чтобы получить доступ к вашему личному кабинету вам нужно ввести свой номер
        телефона
      </p>
    </div>
    <div class="pt-[40px] px-4">
      <p class="text-[#8888e6] text-base leading-[15px]">Введите свой номер телефона</p>
      <form @submit.prevent class="flex justify-between items-center pt-[8px]">
        <input
          v-maska="'996#########'"
          placeholder="+996 (777) 438 992"
          class="border border-[#D2D0CE] w-full text-left px-3 h-[51px] rounded-lg"
          type="text"
        />
        <button
          @click="submitForm"
          type="submit"
          class="border bg-[#6197FF] flex items-center text-white h-[51px] rounded-lg font-bold ml-[8px] px-[20px]"
        >
          Далее
          <img src="    img/rightIcon/right2.svg" class="pl-[8px]" alt="" />
        </button>
      </form>
    </div>
  </div>

  <div class="" v-if="isStatus === 200">
    <div class="flex justify-between items-center px-4 py-3">
      <div @click="isVisible = true">
        <img src="img/rightIcon/left.svg" alt="" />
      </div>
      <p class="font-semibold text-base">Введите код</p>
      <p class="text-white">321</p>
    </div>

    <div class="px-4 pt-[40px]">
      <img src="img/CheckinLogo.svg" alt="" />
    </div>
    <div class="pt-[30px] text-base opacity-[0.7] px-4">
      <p>
        Вам на номер телефона {{ phone }} <br />
        выслан код подверждения, вам нужно ввести код
      </p>
    </div>
    <div class="pt-[40px] px-4">
      <p class="text-[#a3a3a3] text-base leading-[15px]">Введите код из СМС</p>
      <form @submit.prevent class="flex justify-between items-center pt-[8px]">
        <input
          v-maska="'996#########'"
          placeholder="+996 (777) 438 992"
          class="border border-[#D2D0CE] w-full text-left px-3 h-[51px] rounded-lg"
          type="text"
        />
        <button
          type="submit"
          class="border bg-[#6197FF] flex items-center text-white h-[51px] rounded-lg font-bold ml-[8px] px-[20px]"
        >
          Войти
          <img src="img/rightIcon/right2.svg" class="pl-[8px]" alt="" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      phone: "996 505 13 32 31",
      isStatus: 400,
      minSeconds: 60,
    };
  },
  methods: {
    submitForm() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
