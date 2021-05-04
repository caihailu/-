<template>
  <div class="Page">
    <div class="top">
      <div class="topnav">
        <p
          :class="active == 'Pagehome' ? 'active' : ''"
          @click="jump('Pagehome')"
        >
          首页
        </p>
        <p
          :class="active == 'Pagedetails' ? 'active' : ''"
          @click="jump('Pagedetails')"
        >
          汽车信息
        </p>
        <p
          :class="active == 'Pagerental' ? 'active' : ''"
          @click="jump('Pagerental')"
        >
          租凭订单
        </p>
        <p
          :class="active == 'Pageevaluation' ? 'active' : ''"
          @click="jump('Pageevaluation')"
        >
          归还评价
        </p>
        <p :class="active == 'Pagemy' ? 'active' : ''" @click="jump('Pagemy')">
          我的
        </p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      active: "Pagehome",
    };
  },
  methods: {
    jump(b) {
      if (this.active == b) {
        return;
      }
      this.active = b;
      this.$router.push({ name: b });
    },
  },
  created() {
    if (this.$route.path == "/page/") {
      return;
    }
    if (this.$route.params.nan != undefined) {
      this.active = this.$route.params.nan;
      return;
    }
    this.active = "Pagehome";
    this.$router.push({ name: "Pagehome" });
  },
};
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .topnav {
    width: 480px;
    margin: 0 auto;
    display: flex;
    padding: 0 100px;
    background-color: #fcc670;
    p {
      flex: 1;
      line-height: 60px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      color: #c7aa75;
    }
    p.active {
      color: #000;
    }
  }
}
.Page {
  padding-top: 60px;
  width: 680px;
  margin: 0 auto;
}
</style>