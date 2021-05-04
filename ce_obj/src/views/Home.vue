<template>
  <div class="logo">
    <div class="home">
      <div class="The-user">
        <div class="copn-user">
          <p>欢迎{{ show ? "商家" : "用户" }}登录</p>
        </div>
      </div>
      <div class="field-user">
        <van-field
          v-model="user.place"
          class="size-pad"
          placeholder="请输入账号"
        />
        <van-field
          v-model="user.password"
          class="size-pad"
          placeholder="请输入密码"
        />
        <div class="mouser">
          <p @click="show = !show">切换登录用户类型</p>
        </div>
        <van-button class="buts-user" block round
          >登&nbsp;&nbsp;&nbsp;录</van-button
        >
        <div class="mouser">
          <p @click="jump_sj">注册商家</p>
          <p>|</p>
          <p @click="jump_yh">注册用户</p>
          <p>|</p>
          <p>忘记密码?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/Home.less";
export default {
  name: "Home",
  data() {
    return {
      //登录账号
      user: {
        place: "",
        password: "",
      },
      //用户类型选择控制
      show: false,
    };
  },
  methods: {
    //点击找回密码
    //登录
    //注册
    //商家注册
    jump_sj() {
      this.$router.push({ name: "Theuser" });
    },
    jump_yh() {
      this.$router.push("/user");
    },
  },
  components: {},
};
</script>
<style lang="less" scoped>
.logo {
  padding-top: 40px;
}
.home {
  width: 400px;
  border-radius: 20px;
  padding-bottom: 20px;
  box-shadow: 1px 1px 4px #facb67;
  margin: 20px auto;
}
/deep/ .van-cell {
  background-color: #fff;
  border: 0.5px solid #fcb51f;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
