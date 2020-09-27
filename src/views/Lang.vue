<template>
  <div>
    <Nav></Nav>
    <div class="content">
      <div class="top">
        <div class="title">
          <div class="icon">
            <img class="allImg" src="@assets/images/lang/con2.png" alt="" />
          </div>
          <div>留言板</div>
        </div>
        <p>有什么想说的话~在这里告诉我吧</p>
      </div>

      <div class="center">
        <div class="news">
          <div>
            <div>
              <img class="allImg" src="@assets/images/lang/name3.png" alt="" />
            </div>
            <input placeholder="请输入您的用户名" type="text" />
          </div>
          <div>
            <div>
              <img class="allImg" src="@assets/images/lang/email3.png" alt="" />
            </div>
            <input type="text" placeholder="请输入您的邮箱" />
          </div>
        </div>
        <div class="con">
          <textarea name="" id="" rows="12"></textarea>
        </div>
      </div>

      <div class="lang">
        <div class="title">26Comments</div>
        <div class="langcon">
          <div v-for="(Fitem, Findex) in langList">
            <div
              class=""
              v-for="(item, index) in Fitem"
              :class="index === 0 ? 'change' : ''"
            >
              <div class="top">
                <div class="left">
                  <div class="hp">
                    <img :src="item.img" class="allImg" alt="" />
                  </div>
                  <p v-if="item.id == 1">{{ item.name }}&nbsp(博主)</p>
                  <p v-else>{{ item.name }}</p>
                </div>
                <div class="right">
                  <p>{{ item.time }}</p>
                  <div>回复</div>
                </div>
              </div>
              <div class="con">
                {{ item.con }}
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div>加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@components/nav.vue";

export default {
  name: "Lang",
  components: {
    Nav,
  },
  data() {
    return {
      langList: [
        [
          {
            name: "Mary",
            img: require("@assets/images/lang/ph2.jpg"),
            con: "你好",
            id: 2,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            img: require("@assets/images/home/hp.jpg"),
            con: "你好!",
            id: 1,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            id: 2,
            img: require("@assets/images/lang/ph2.jpg"),
            con: "很高兴认识你",
            time: "2020/09/27 12:12:09",
          },
        ],
        [
          {
            name: "Mary",
            img: require("@assets/images/lang/ph2.jpg"),
            con: "你好",
            id: 3,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            img: require("@assets/images/home/hp.jpg"),
            con: "你好",
            id: 1,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            img: require("@assets/images/lang/ph2.jpg"),
            con: "你好",
            id: 3,
            time: "2020/09/27 12:12:09",
          },
        ],
        [
          {
            name: "Mary",
            img: require("@assets/images/lang/ph2.jpg"),
            con: "你好",
            id: 4,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            img: require("@assets/images/home/hp.jpg"),
            con: "你好",
            id: 1,
            time: "2020/09/27 12:12:09",
          },
          {
            name: "Mary",
            img: require("@assets/images/lang/ph2.jpg"),
            con: "你好",
            id: 4,
            time: "2020/09/27 12:12:09",
          },
        ],
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
  > .top {
    text-align: center;
    letter-spacing: 5px;
    .title {
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
    .title::before {
      content: "";
      width: 140px;
      height: 1px;
      background: @GColor4;
      position: absolute;
      border-radius: 20px;
      bottom: 0;
    }
  }
  .center {
    border: dashed 1px @GColor4;
    // padding: 0 30px;
    margin: 50px;
    .news {
      display: flex;
      align-items: center;
      // padding:0 20px;
      border-bottom: dashed 1px @GColor4;
      // margin: 20px 0;
      justify-content: space-around;
      > div {
        display: flex;
        align-items: center;
        > div {
          width: 40px;
          height: 40px;
          margin-right: 7px;
        }
        input {
          width: 500px;
          height: 50px;
          border: none;
          outline: none;
          font-size: 15px;
        }
      }
    }
    .con {
      text-align: center;
      textarea {
        width: 97%;
        padding: 10px 5px;
        outline: none;
        border: none;
        font-size: 15px;
        resize: none;
      }
    }
  }
  .lang {
    margin: 50px;
    .title {
      font-size: 18px;
    }
    .langcon {
      > div {
        border-bottom: 1px dashed @GColor4;
        padding: 20px 0;
        > div {
          margin-left: 70px;
          .top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 15px 0;
            .left {
              display: flex;
              align-items: center;
              .hp {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                margin-right: 10px;
                img{
                  border-radius: 50%;
                }
              }
              p {
                color: #a1c1b6;
              }
            }
            .right {
              display: flex;
              align-items: center;
              p {
                margin-right: 5px;
                color: @GColor3;
              }
              > div {
                cursor: pointer;
              }
            }
          }
          .con {
            margin-left: 75px;
            padding-bottom: 10px;
          }
        }
        .change {
          margin-left: 0px;
        }
      }
    }
    .foot {
      margin: 10px;
      display: flex;
      justify-content: center;
      > div {
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: @MBColor;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>