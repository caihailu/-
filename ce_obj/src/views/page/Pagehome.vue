<template>
  <div class="home">
    <div class="swipe-box">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        touchable
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="box-top">汽车信息推荐</div>
    <div class="qcxxtj">
      <div class="box-p" v-for="(v, i) in 4" :key="i">
        <p>汽车名称</p>
        <div class="image"><img src="../../assets/imge/1.jpeg" alt="" /></div>
      </div>
    </div>
    <div class="box-top">
      保险信息
      <div>查看更多</div>
    </div>
    <div class="bxxx">
      <div class="box-p" v-for="(v, i) in 6" :key="i">
        <p>汽车名称</p>
        <div class="image"><img src="../../assets/imge/1.jpeg" alt="" /></div>
      </div>
    </div>
    <div class="box-top">
      公告信息
      <div>查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagehome",
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box-top {
  width: 100%;
  height: 30%;
  font-size: 14px;
  line-height: 30px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: #fc9900;
  position: relative;
  div {
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 20px;
    float: right;
    cursor: pointer;
  }
}
.qcxxtj {
  width: 100%;
  display: flex;
  .box-p {
    flex: 1;
    margin: 10px 10px 0;
    background-color: #f6ebd1;
    border-radius: 20px;
    padding: 5px;
    p {
      font-size: 12px;
      line-height: 30px;
    }
    .image {
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 127px;
        display: block;
      }
    }
  }
}
.bxxx {
  width: 100%;
  display: flex;
  .box-p {
    flex: 1;
    margin: 10px 10px 0;
    background-color: #f6ebd1;
    border-radius: 20px;
    padding: 5px;
    p {
      font-size: 12px;
      line-height: 30px;
    }
    .image {
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 127px;
        display: block;
      }
    }
  }
}
</style>