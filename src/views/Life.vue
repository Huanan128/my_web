<template>
  <div class="life">
    <Nav :navIndex='5'></Nav>
    <div class="content1 content3">
      <div class="mainTop">
        <div class="text">
          <div class="icon">
            <img class="allImg" src="@assets/images/lang/con2.png" alt="" />
          </div>
          <div>生活</div>
        </div>
        <p>记录自己平平淡淡的生活</p>
      </div>
      <div class="food">
        <p class="title">美食小屋</p>
        <div class="con">
          <div class="box" v-for="(item, index) in foodList">
            <div>
              <img :src="item.img" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="love">
        <p class="title">恋爱小屋</p>
        <div class="con">
          <div class="box" v-for="(item, index) in loveList">
            <div>
              <img :src="item.img" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="note">
        <p class="title">随笔</p>
        <div class="con">
          <div class="box" v-for="(item, index) in noteList">
            <div class="left">
              <p>{{ item.title }}</p>
              <div class="con">{{ item.text }}</div>
              <div class="foot">
                <p>时间：{{ item.time }}</p>
                <p>分类：{{ item.tag }}</p>
              </div>
            </div>
            <div class="right">
              <div>
                <img class="allImg" :src="item.img" alt="" />
              </div>
            </div>
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
  name: "left",
  components: {
    Nav,Foot
  },
  data() {
    return {
      foodList: [
        { title: "盐酒鸡", img: require("@assets/images/life/food1.jpg") },
        { title: "簸箕板", img: require("@assets/images/life/food2.jpg") },
        { title: "火锅", img: require("@assets/images/life/food3.jpg") },
        { title: "烤肉", img: require("@assets/images/life/food4.jpg") },
      ],
      loveList: [
        { title: "日常小情话", img: require("@assets/images/life/like1.png") },
        { title: "他说", img: require("@assets/images/life/like2.png") },
        { title: "直男", img: require("@assets/images/life/like3.png") },
        { title: "开心", img: require("@assets/images/life/like4.png") },
      ],
      noteList: [
        {
          time: "2020/12/09",
          title: "几个颜色搭配网站的推荐，非常实用！",
          text:
            "这是几个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的一个配色网站中我用到最多的一个配色网站中我用到最多的一个配色网站中我用到最多的一一个网站。下图是它的内容，鼠标放在相应的颜色上点击一下就可以复制颜色！",
          img: require("@assets/images/life/food1.jpg"),
        },
        {
          time: "2021/12/03",
          title: "今日小记，关于Logo",
          text:
            "之前那个Logo是在iconfont上找的一个猴子图标，我觉得那代表了程序员 [污] 然后昨天偶然发现有个大佬也使用了那个图标，让我立马色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配色网站中我用到最多的个配想起了一句话：撞衫（Logo）不可怕，谁丑（技术差）谁尴尬，我怕尴尬我要换！！",
          img: require("@assets/images/life/like2.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .food,
  .love {
    > .con {
      display: flex;
      justify-content: space-between;
      > .box {
        width: 20%;
        height: 220px;
        // background: orchid;
        > div {
          height: 180px;
          overflow: hidden;
          img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
        }
        > p {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
      }
    }
  }
// }
</style>