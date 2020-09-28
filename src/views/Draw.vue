<template>
  <div class="draw">
    <Nav></Nav>
    <div class="content">
      <div class="left">
        <div class="like">
          <p class="title">最佳新作</p>
          <div class="con">
            <div class="box" v-for="(item, index) in likeList">
              <img class="allImg" :src="item.img" alt="" />
            </div>
          </div>
        </div>
        <div class="flag">
          <div class="top">
            <p class="title">flag</p>
            <div class="nav">
              <div
                :class="index == flagTitleChange ? 'gTC' : ''"
                v-for="(item, index) in flagTitle"
                @click="flagTitleBtn(index)"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div class="con">
            <div
              v-for="(item, index) in flagList"
              :class="index == 0 ? 'pad0' : ''"
            >
              <p>{{ item.text }}</p>
              <div>
                <img
                  class="allImg"
                  v-if="item.status == 1"
                  src="@assets/images/draw/success.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- <div class="con">
            <div :class="i == 1 ? 'boxBorder' : ''">
              <p>{{ it }}</p>
              <div>
                
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="right">
        <div class="picture">
          <p class="title">图集</p>
          <div>
            <div class="box" v-for="(item, index) in pictureList">
              <img :src="item.img" alt="" />
              <div>
                <p>{{ item.name }}</p>
                <div>
                  <div>
                    <div class="icon">
                      <img
                        class="allImg"
                        src="@assets/images/draw/eye.png"
                        alt=""
                      />
                    </div>
                    <p>{{ item.like }}</p>
                  </div>
                  <div>
                    <div class="icon">
                      <img
                        class="allImg"
                        src="@assets/images/draw/like.png"
                        alt=""
                      />
                    </div>
                    <p>{{ item.look }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="note">
          <p class="title">笔记</p>
          <div class="con">
            <ul>
              <li v-for="(item, index) in noteList">
                <p>{{ item.title }}</p>
                <div>
                  <p v-for="(i, ind) in item.tag">{{ i }}</p>
                </div>
                <p>{{ item.time }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@components/nav.vue";
export default {
  name: "draw",
  components: {
    Nav,
  },
  data() {
    return {
      noteList: [
        {
          title: "小小白需知",
          tag: ["初学", "技能"],
          index: "",
          time: "2020/04/23 09:21:09",
        },
        {
          title: "Q版小课堂01",
          tag: ["Q版", "技能", "明天"],
          index: "",
          time: "2020/04/23 09:21:09",
        },
        {
          title: "小小白需知",
          tag: ["初学", "技能"],
          index: "",
          time: "2020/04/23 09:21:09",
        },
      ],
      flagTitle: ["周", "月", "年"],
      likeList: [
        { img: require("@assets/images/travel/pic01.jpg") },
        { img: require("@assets/images/travel/pic01.jpg") },
        { img: require("@assets/images/travel/pic01.jpg") },
      ],
      pictureList: [
        {
          name: "描线",
          text: "一些描线练习",
          img: require("@assets/images/travel/pic01.jpg"),
          index: "1",
          like: 12,
          look: 14,
        },
        {
          name: "上色",
          text: "一些上色练习",
          img: require("@assets/images/travel/pic02.jpg"),
          index: "2",
          like: 12,
          look: 14,
        },
        {
          name: "临摹",
          text: "一些临摹练习",
          img: require("@assets/images/travel/pic03.jpg"),
          index: "3",
          like: 12,
          look: 14,
        },
        {
          name: "原创",
          text: "一些自己的原创",
          img: require("@assets/images/travel/pic07.jpg"),
          index: "4",
          like: 12,
          look: 14,
        },
        {
          name: "描线",
          text: "一些描线练习",
          img: require("@assets/images/travel/pic08.jpg"),
          index: "5",
          like: 12,
          look: 14,
        },
        {
          name: "描线",
          text: "一些描线练习",
          img: require("@assets/images/travel/pic09.jpg"),
          index: "6",
          like: 12,
          look: 14,
        },
      ],
      flagList: [
        { text: "描线3张", status: 1 },
        { text: "描线3张", status: 0 },
        { text: "描线3张", status: 1 },
      ],
      flagTitleChange: 0,
    };
  },
  methods: {
    flagTitleBtn(i) {
      this.flagTitleChange = i;
    },
  },
};
</script>

<style lang="less" scoped>
.draw {
  .content {
    width: 80%;
    margin: @mainTop+20px auto 0 auto;
    // background: white;
    display: flex;
    justify-content: center;
    .title {
      font-size: 25px;
      letter-spacing: 2px;
      margin-bottom: 20px;
      //   background: cornflowerblue;
    }
    .left {
      > div {
        border-bottom: 1px dashed @GColor4;
        padding-bottom: 20px;
        margin-bottom: 10px;
      }
      width: 25%;
      background: white;
      padding: 10px;
      margin-right: 10px;
      > .like {
        > .con {
          > .box {
            margin: 0 auto;
            width: 90%;
            height: 300px;
            border-radius: 10px 10px 0 0;
            img {
              border-radius: 10px 10px 0 0;
            }
          }
        }
      }
      > .flag {
        > .top {
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          > p {
            font-size: 20px;
            margin: 10px 0;
          }
          > .nav {
            display: flex;
            margin: 10px 0;
            > div {
              width: 30px;
              height: 30px;
              border-radius: 50%;

              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
            }
            > .gTC {
              background: wheat;
              color: white;
            }
          }
          //   margin-left: calc((100% - 300px) / 2);
        }

        > .con {
          display: flex;
          > div {
            width: 20px;
            padding: 0 15px 0 15px;
            border-right: 1px dashed @GColor4;
          }
          .pad0 {
            border-left: 1px dashed @GColor4;
          }
        }
      }
    }
    > .right {
      padding: 20px;
      width: 65%;
      background: white;
      > div {
        border-bottom: 1px dashed @GColor4;
        padding: 0 0 20px 0;
        margin-bottom: 10px;
      }
      .picture {
        > div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          > .box {
            width: 43%;
            height: 250px;
            background: white;
            margin: 20px;
            position: relative;
            border-radius: 10px 10px 0 0;
            > img {
              width: 100%;
              height: 200px;
              border-radius: 10px 10px 0 0;
            }
            > div {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 5px;
              p {
                font-size: 16px;
                letter-spacing: 3px;
              }
              > div {
                display: flex;
                align-items: center;
                > div {
                  display: flex;
                  align-items: center;
                  .icon {
                    width: 30px;
                    height: 30px;
                    //   line-height: 30px;
                    display: flex;
                    justify-content: center;
                  }
                }
              }
            }
          }
        }
      }

      > .note {
        .con {
          > ul {
            > li {
              display: flex;
              align-items: center;
              margin: 13px 0;
              > div {
                margin: 0 20px;
                display: flex;
                > p {
                  color: white;
                  padding: 2px 5px;
                  //   border-radius: 5px;
                  background: coral;
                  margin: 0 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>