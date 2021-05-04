<template>
  <div>
    <div class="seach">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入订单编号"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagerental",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
  },
};
</script>

<style lang="less" scoped>
</style>