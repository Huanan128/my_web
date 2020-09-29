<template>
  <div class="code">
    <Nav :navIndex='1'></Nav>
    <div class="content1 content2">
      <div class="left">
        <div class="mainTop">
          <div class="text">
            <div class="icon">
              <img class="allImg" src="@assets/images/lang/con2.png" alt="" />
            </div>
            <div>技术栈</div>
          </div>
          <p>一些伐</p>
        </div>
        <div class="classify">
          <p class="title">分类</p>
          <div class="con">
            <div class="box" v-for="(item, index) in classifyList">
              <p>{{ item.title }}</p>
              <div>{{ item.num }}</div>
            </div>
          </div>
        </div>
        <div class="art">
          <p class="title">热门文章</p>
          <div class="con">
            <div class="box" v-for="(item, index) in artList">
              <div class="icon">{{ index }}</div>
              <div>{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="note">
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
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@components/nav.vue";
import Foot from "@components/foot.vue";
export default {
  name: "code",
  components: {
    Nav,
    Foot,
  },
  data() {
    return {
      artList: [
        { title: "这是几个配色网站中我用到最多的个配色网站中" },
        { title: "今日小记，关于Logo" },
        { title: "AJAX的使用以及原生JavaScript实现AJAX简单封装中" },
        { title: "关于JavaScript中的深浅拷贝" },
        { title: "这是几个配色网站中我用到最多的个配色网站中" },
      ],
      classifyList: [
        { title: "HTML/CSS", num: "4" },
        { title: "JS", num: "5" },
        { title: "Vue.js", num: "3" },
        { title: "Node.js", num: "7" },
        { title: "Git", num: "3" },
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
.classify {
  .con {
    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
  }
}
.art {
  .box {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    height: 50px;
    > .icon {
      //   width: 30px;
      //   height: 30px;
      //   border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      //   background: cornflowerblue;
      margin-right: 10px;
      line-height: 25px;
      font-size: 25px;
      color: @MC1;
    }
  }
}

.right {
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
          > p {
            color: @GColor3;
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
</style>