<template>
  <div class="px-4 flex justify-between items-center space-x-3 pb-[14px] pt-[80px]">
    <MyRecords />
    <SearchDoctors />
  </div>
</template>

<script>
import SearchDoctors from "./SearchDoctors.vue";
import MyRecords from "./MyRecords.vue";

export default { components: { SearchDoctors, MyRecords } };
</script>
