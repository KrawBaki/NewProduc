<template>
  <div class="fixed w-full bg-white p-4 border-b-[1.5px]">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="flex items-center">
          <div
            v-if="isUser"
            class="text-[18px] border-[1px] z-10 border-white flex items-center justify-center text-white font-semibold w-[33px] h-[33px] bg-[#D82B88] rounded-full"
          >
            М
          </div>
          <div
            class="flex justify-center -ml-2 items-center bg-[#6197FF] rounded-full w-[32px] h-[32px] text-white"
          >
            <i class="fal fa-plus mb-[2px] text-2xl" style="font-weight: thin"></i>
          </div>
        </div>
        <h2 class="text-[20px] font-semibold text-[#2B2C3A] pl-[10px]">Мамыров Максат</h2>
      </div>
      <div>
        <i class="fa-regular fa-bell text-[20px] text-[#7a7979]"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarView",
  props: {
    isUser: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
