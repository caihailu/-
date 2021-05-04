<template>
  <div class="pagedetails">
    <div class="seach">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="but" @click="jump_car">
      <van-button class="buts-user" block round
        >新&nbsp;&nbsp;&nbsp;增</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagedetails",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    jump_car() {
      this.$router.push({ name: "Addcar" });
    },
  },
};
</script>

<style lang="less" scoped>
.but {
  position: fixed;
  bottom: 20px;
  left: 50%;
  .buts-user {
    background-color: #fcb51f;
  }
  // transform: translateX();
}
</style>