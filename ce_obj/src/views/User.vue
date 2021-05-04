<template>
  <div class="Theuser">
    <div class="top" @click="fui">
      <span
        ><svg
          t="1619888346372"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2025"
          width="24"
          height="24"
        >
          <path
            d="M383.410831 500.910431l325.737806 322.68119-39.673581 39.231513L343.573521 540.483728l0 0-38.268582-37.8347 374.901529-370.804211 38.268582 37.8347L383.410831 500.910431zM383.410831 500.910431"
            p-id="2026"
            fill="#8a8a8a"
          ></path></svg
      ></span>
      已有账号,返回登录
    </div>
    <div class="user">
      <van-field
        v-model="user.place"
        class="size-pad"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="user.password"
        class="size-pad"
        placeholder="请输入密码"
      />
      <van-field
        v-model="user.name"
        class="size-pad"
        placeholder="请输入姓名"
      />
      <van-field
        v-model="user.gender"
        class="size-pad"
        placeholder="请输入性别"
      />
      <van-field
        v-model="user.phone"
        class="size-pad"
        placeholder="请输入手机"
      />
      <van-field v-model="user.em" class="size-pad" placeholder="请输入邮箱" />
      <van-field
        v-model="user.card"
        class="size-pad"
        placeholder="请输入身份证"
      />
      <van-button class="buts-user" block round
        >注&nbsp;&nbsp;&nbsp;册</van-button
      >
    </div>
  </div>
</template>

<script>
import "../assets/less/Home.less";
export default {
  name: "User",
  data() {
    return {
      //登录账号
      user: {
        place: "",
        password: "",
        name: "",
        gender: "",
        phone: "",
        em: "",
        card: "",
      },
    };
  },
  methods: {
    fui() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="less" scoped>
.Theuser {
  box-shadow: 1px 1px 4px #facb67;
  margin: 40px auto;
  padding: 1px 100px 20px;
  width: 300px;
  border-radius: 20px;
}
/deep/ .van-cell {
  background-color: #fff;
  border: 0.5px solid #fcb51f;
  border-radius: 10px;
  margin: 20px auto;
}
.buts-user {
  background-color: #fcb51f;
}
.top {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: left;
  padding-left: 17px;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    top: 4.5px;
    left: 0px;
  }
}
</style>