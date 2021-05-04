<template>
  <div class="car">
    <div class="top">
      <p>境内短期自驾租车保险平台</p>
      <div @click="jump_details">
        <svg
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
          ></path>
        </svg>
      </div>
    </div>
    <div class="feil">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="汽车名称"
          label="汽车名称"
          placeholder="汽车名称"
        />
        <van-field
          v-model="brand"
          type="brand"
          name="汽车品牌"
          label="汽车品牌"
          placeholder="汽车品牌"
        />
        <van-field
          v-model="mark"
          type="mark"
          name="汽车牌号"
          label="汽车牌号"
          placeholder="汽车牌号"
        />
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <div class="flei">
          <div>汽车类型</div>
          <p :class="flei == '轿车' ? 'active' : ''" @click="sub('轿车')">
            轿车
          </p>
          <p :class="flei == '轿跑' ? 'active' : ''" @click="sub('轿跑')">
            轿跑
          </p>
          <p :class="flei == 'suv' ? 'active' : ''" @click="sub('suv')">suv</p>
          <p :class="flei == 'mpv' ? 'active' : ''" @click="sub('mpv')">mpv</p>
          <p
            :class="flei == '其他类型' ? 'active' : ''"
            @click="sub('其他类型')"
          >
            其他类型
          </p>
        </div>
        <van-field
          v-model="zhangh"
          type="zhangh"
          name="商家账号"
          label="商家账号"
          placeholder="商家账号"
        />
        <van-field
          v-model="name"
          type="name"
          name="商家名称"
          label="商家名称"
          placeholder="商家名称"
        />
        <van-field
          v-model="address"
          type="address"
          name="商家地址"
          label="商家地址"
          placeholder="商家地址"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="联系电话"
          label="联系电话"
          placeholder="联系电话"
        />
        <van-field
          v-model="price"
          type="price"
          name="租车价格"
          label="租车价格"
          placeholder="租车价格"
        />
        <van-field
          v-model="carcolor"
          type="carcolor"
          name="车身颜色"
          label="车身颜色"
          placeholder="车身颜色"
        />
        <div class="flei">
          <div>出租状态</div>
          <p :class="ztai == '已出租' ? 'active' : ''" @click="sum('已出租')">
            已出租
          </p>
          <p :class="ztai == '维修中' ? 'active' : ''" @click="sum('维修中')">
            维修中
          </p>
          <p :class="ztai == '未出租' ? 'active' : ''" @click="sum('未出租')">
            未出租
          </p>
        </div>
        <van-field
          v-model="jies"
          type="jies"
          name="汽车介绍"
          label="汽车介绍"
          placeholder="汽车介绍"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Addcar",
  data() {
    return {
      username: "",
      brand: "",
      mark: "",
      flei: "",
      zhangh: "",
      name: "",
      address: "",
      phone: "",
      price: "",
      carcolor: "",
      ztai: "",
      jies: "",
      uploader: [],
    };
  },
  methods: {
    jump_details() {
      this.$router.push({
        name: "Pagedetails",
        params: { nan: "Pagedetails" },
      });
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    sub(a) {
      if (this.flei == a) {
        return;
      }
      this.flei = a;
    },
    sum(a) {
      if (this.ztai == a) {
        return;
      }
      this.ztai = a;
    },
  },
};
</script>

<style lang="less" scoped>
.car {
  width: 480px;
  margin: 0 auto;
  .top {
    position: relative;
    line-height: 30px;
    background-color: #fcc670;
    div {
      position: absolute;
      top: 5.5px;
      left: 20px;
    }
  }
}
.flei {
  display: flex;
  background-color: #fff;
  padding: 10px 0;
  div {
    font-size: 14px;
    text-indent: 18px;
    margin-right: 30px;
  }
  p {
    padding: 0 10px;
    margin: 0 10px;
    background-color: #fcc670;
    line-height: 30px;
    border-radius: 10px;
    cursor: pointer;
  }
  p.active {
    background-color: skyblue;
  }
}
</style>