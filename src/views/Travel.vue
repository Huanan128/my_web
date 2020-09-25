<template>
  <div class="travel">
    <Nav></Nav>
    <div class="content">
      <div class="top">
        <div class="title">
          <div class="icon">
            <img class="allImg" src="@assets/images/travel/logo.svg" alt="" />
          </div>
          <p>TRAVEL</p>
        </div>
        <p class="">旅行让你拥抱未知的世界，随遇而安，而不畏惧未知的世界。</p>
        <div class="">
          不管怎么样，每个人为不同目地去，回来时候，有人很满意，有人很失望觉得累，有没有意义，是什么意义，只有去了才能体会.我旅行的意义在于对未知的渴求，对刺激的追求，以及对美好生活的向往。
        </div>
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
  </div>
</template>

<script>
import Nav from "@components/nav.vue";
export default {
  name: "Travel",
  components: {
    Nav,
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
.content {
  background: white;
  border-radius: 20px 20px 0 0;
  margin: @mainTop+20px 100px 0 100px;
  .top {
    margin: 30px;
    .title {
      display: flex;
      align-items: center;
      > div {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        font-weight: bold;
      }
      > p {
        font-size: 20px;
        letter-spacing: 10px;
      }
    }
    p {
      font-size: 40px;
      font-weight: bold;
      margin: 20px 0;
    }
  }
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
}
</style>