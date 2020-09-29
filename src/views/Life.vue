<template>
  <div class="life">
    <Nav></Nav>
    <div class="content">
      <div class="top">
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
  </div>
</template>
<script>
import Nav from "@components/nav.vue";
export default {
  name: "left",
  components: {
    Nav,
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
.content {
  letter-spacing: 1px;
  background: white;
  border-radius: 20px 20px 0 0;
  margin: @mainTop+20px auto 0 auto;
  width: 80%;
  padding: 15px;
  > div {
    padding: 10px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  > .top {
    text-align: center;
    letter-spacing: 5px;
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      position: relative;
      padding-bottom: 10px;
      margin-bottom: 30px;
      .icon {
        width: 40px;
        height: 40px;
        margin-right: 7px;
      }
    }
    .text::before {
      content: "";
      width: 140px;
      height: 1px;
      background: @GColor4;
      position: absolute;
      border-radius: 20px;
      bottom: 0;
    }
  }
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
  .note {
    > .con {
      > .box {
        height: 200px;
        // background: cornflowerblue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px dashed @GColor4;
        .left {
          width: 70%;
          // background: cornsilk;
          > p {
            font-size: 18px;
            font-weight: bold;
          }
          > .con {
            margin: 18px 0 25px 0;
            letter-spacing: 1px;
            line-height: 28px;
            display: -webkit-box; /**对象作为伸缩盒子模型展示**/
            -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
            -webkit-line-clamp: 2; /**显示的行数**/
            overflow: hidden; /**隐藏超出的内容**/
          }
          > .foot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            >p{
              color:@GColor3;
            }
          }
        }
        .right {
          width: 25%;
          height: 80%;
          // background: crimson;
          > div {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>