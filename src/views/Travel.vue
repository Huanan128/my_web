<template>
  <div class="travel">
    <Nav :navIndex='3'></Nav>
    <div class="content1 content3">
      <div class="mainTop">
        <div class="text">
          <div class="icon">
            <img class="allImg" src="@assets/images/lang/con2.png" alt="" />
          </div>
          <div>旅行</div>
        </div>
        <p>旅行让你拥抱未知的世界，随遇而安，而不畏惧未知的世界。</p>
      </div>
      <div class="mainContent">
        <div class="box" v-for="(item, index) in boxList">
          <div class="mao">
            <img class="img" :src="item.img" alt="" />
          </div>
          <img class="img" :src="item.img" alt="" />
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@components/nav.vue";
import Foot from "@components/foot.vue";
export default {
  name: "Travel",
  components: {
    Nav,
    Foot,
  },
  data() {
    return {
      boxList: [
        {
          img: require("@assets/images/travel/f1.jpg"),
          title: "平潭",
          text: "最美海滩",
        },
        {
          img: require("@assets/images/travel/f2.jpg"),
          title: "泉州",
          text: "最美海滩",
        },
        {
          img: require("@assets/images/travel/f3.jpg"),
          title: "厦门",
          text: "最美海滩",
        },
        {
          img: require("@assets/images/travel/f4.jpg"),
          title: "福州",
          text: "最美海滩",
        },
        {
          img: require("@assets/images/travel/f5.jpg"),
          title: "杭州",
          text: "最美海滩",
        },
        {
          img: require("@assets/images/travel/f6.jpg"),
          title: "黄山",
          text: "最美海滩",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.mainContent {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box {
    width: 350px;
    height: 350px;
    margin: 30px;
    position: relative;
    transition: all 0.6s;
    z-index: 1;
    overflow: hidden;
    .img {
      width: 350px;
      height: 350px;
      object-fit: cover;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .title {
      font-size: 26px;
      color: white;
      letter-spacing: 5px;
      margin-bottom: 10px;
    }
    p {
      font-size: 0px;
      color: white;
      letter-spacing: 1px;
    }
    .mao {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  .box:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .box:hover p {
    font-size: 17px;
  }
  .box:hover .mao {
    filter: blur(10px);
  }
}
</style>