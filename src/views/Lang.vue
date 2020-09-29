<template>
  <div>
    <Nav></Nav>
    <div class="content1 content3">
      <div class="mainTop">
        <div class="text">
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
        <div class="text">26Comments</div>
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
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@components/nav.vue";
import Foot from "@components/foot.vue";

export default {
  name: "Lang",
  components: {
    Nav,Foot
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
.center {
  border: dashed 1px @GColor4;
  margin: 50px;
  margin-bottom: 0;
  .news {
    display: flex;
    align-items: center;
    border-bottom: dashed 1px @GColor4;
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
  margin-top: 10px;
  .text {
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
              img {
                border-radius: 50%;
              }
            }
            p {
              color: @MC1;
              font-weight: bold;
            }
          }
          .right {
            display: flex;
            align-items: center;
            text-align: center;
            p {
              text-align: center;
              margin-right: 8px;
              margin-top: 2px;
              color: @GColor3;
            }
            > div {
              cursor: pointer;
              color: @MC2;
              font-weight: bold;
              
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
</style>