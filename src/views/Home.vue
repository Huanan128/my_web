<template>
  <div class="home">
    <!-- <Nav></Nav> -->
    <div class="top">
      <div class="topContent">
        <div class="titleIcon">
          <img class="allImg" src="@assets/images/home/titleIcon.png" alt />
        </div>
        <div>你好，我是安安</div>
        <div class="welcom">欢迎光临我的小站</div>
      </div>

      <Nav class="homenav" :class="{homeNavBag:navBag}"></Nav>
    </div>
    <div class="content">
      <div class="left">
        <!-- 个人信息部分 -->
        <div class="personal">
          <div class="personalTop">
            <div class="hp">
              <img class="allImg" src="@assets/images/home/hp.jpg" alt />
            </div>
            <div>
              <div>安安</div>
              <div class="position">
                <div class="icon">
                  <img class="allImg" src="@assets/images/home/position.png" alt />
                </div>
                <p>福州</p>
              </div>
            </div>
          </div>
          <p class="text">愿生活明朗以梦为马不惧未来</p>
          <div class="personalCenter">
            <div v-for="(item,index) in iconList">
              <img class="allImg" :src="item" alt />
            </div>
          </div>
          <div class="personalBottom">
            <div>
              <p class="xingxing">
                <img class="allImg" src="@assets/images/home/icon.png" alt />
              </p>
              <p>网站已运行xx天</p>
            </div>
            <div>
              <p class="xingxing">
                <img class="allImg" src="@assets/images/home/icon.png" alt />
              </p>
              <p>作者活跃于x小时前</p>
            </div>
          </div>
        </div>
        <!-- 标签部分 -->
        <div class="label">
          <div v-for="(item,index) in labelList">{{item}}</div>
        </div>
      </div>
      <div class="right">
        <div class="classify">
          <div class="classifyTitle">我的空间小站</div>
          <div class="classifyContent">
            <div v-for="(item,index) in classifyList">
              <div class="fonts">
                <p>{{item.title}}</p>
                <p class="text">{{item.text}}</p>
              </div>
              <div class="classifyImg">
                <img class="allImg" :src="item.img" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="news">
          <div class="newsTitle">最近发布</div>
          <div class="newsContent">
            <div v-for="(item,index) in newsList">
              <div class="newsImg">
                <img class="allImg" :src="item.img" alt />
              </div>
              <div class="fonts">
                <p>{{item.title}}</p>
                <p class="text">{{item.text}}</p>
                <div class="bottom">
                  <p>2020/9/21 09:21:00</p>
                  <div>
                    <img class="allImg" src="@assets/images/home/look.png" alt />
                  </div>
                  <div>
                    <img class="allImg" src="@assets/images/home/pl.png" alt />
                  </div>
                </div>
              </div>
              <div class="smallIcon">
                <img class="allImg" v-if="item.status == 1" src="@assets/images/home/ify1.png" alt />
                <img
                  class="allImg"
                  v-else-if="item.status == 2"
                  src="@assets/images/home/ify2.png"
                  alt
                />
                <img
                  class="allImg"
                  v-else-if="item.status == 3"
                  src="@assets/images/home/ify3.png"
                  alt
                />
                <img
                  class="allImg"
                  v-else="item.status == 4"
                  src="@assets/images/home/ify4.png"
                  alt
                />
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
  name: "Home",
  components: {
    Nav,
  },
  data() {
    return {
      navBag:'',
      iconList: [
        require("@assets/images/home/github.png"),
        require("@assets/images/home/wechat.png"),
        require("@assets/images/home/webo.png"),
        require("@assets/images/home/email.png"),
      ],
      labelList: ["前端", "技术", "ae", "小技巧", "绘画", "记录心情"],
      classifyList: [
        {
          title: "前端",
          text: "码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。",
          img: require("@assets/images/home/ify1.png"),
        },
        {
          title: "旅游",
          text:
            "酷爱旅游的girl，旅游所为何？为的是让自己这颗沉浮于现实过于浮躁的心，平静几分。",
          img: require("@assets/images/home/ify2.png"),
        },
        {
          title: "生活",
          text: "记录平凡生活中的那一些不那么平凡之事，让生活更有仪式感。",
          img: require("@assets/images/home/ify3.png"),
        },
        {
          title: "绘画",
          text:
            "兴趣爱好有许多，由于前段时间花重金买了一个手绘板，为以督促自己练习，特为其开辟一个空间用以记录其成长！",
          img: require("@assets/images/home/ify4.png"),
        },
      ],
      newsList: [
        {
          title: "前端",
          text:
            "码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。码农的觉悟，该空间用于记录自己学习的过程、记录、心得等。该空间用于记录自己学习的过程、记录、心得等。",
          img: require("@assets/images/home/cha1.png"),
          status: 1,
        },
        {
          title: "旅游",
          text:
            "酷爱旅游的girl，旅游所为何？为的是让自己这颗沉浮于现实过于浮躁的心，平静几分。",
          img: require("@assets/images/home/cha2.png"),
          status: 2,
        },
        {
          title: "生活",
          text: "记录平凡生活中的那一些不那么平凡之事，让生活更有仪式感。",
          img: require("@assets/images/home/cha1.png"),
          status: 3,
        },
        {
          title: "绘画",
          text:
            "兴趣爱好有许多，由于前段时间花重金买了一个手绘板，为以督促自己练习，特为其开辟一个空间用以记录其成长！",
          img: require("@assets/images/home/cha3.png"),
          status: 4,
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      console.log(top);
      if(top >= 350){
        this.navBag = true;
      }else{
        this.navBag = false
      }
    },
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true)
  }
};
</script>
<style lang="less" scoped>
.homenav {
  background: none;
  /deep/.content ul li {
    color: white;
  }
  /deep/.left {
    color: white;
  }
  /deep/.content ul li:hover {
    color: @MPColor;
  }
}
.homeNavBag{
  background: white;
  /deep/.content ul li{
    color: @GColor1;
  }
  /deep/.left {
    color: @GColor1;
  }
  // /deep/.content ul li:hover {
  //   color: @MBColor;
  // }
}
.top {
  height: 500px;
  text-align: center;
  background: url("../assets/images/home/homeBg.jpg") no-repeat 100%;

  .topContent {
    padding-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .titleIcon {
      width: 100px;
    }
    > div {
      color: white;
      font-size: 20px;
      font-weight: blod;
      margin-bottom: 20px;
    }
    .welcom {
      padding: 10px 80px;
      border-top: 1px solid white;
    }
  }
}
.content {
  margin: 10px 200px;
  // background: bisque;
  display: flex;
  .left {
    width: 400px;
    // background: blueviolet;
    padding: 40px;
    box-sizing: border-box;
    .personal {
      .personalTop {
        display: flex;
        align-items: center;
        .hp {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-right: 20px;
          .allImg {
            border-radius: 50%;
          }
        }
        .position {
          display: flex;
          margin-top: 8px;
          align-items: center;
          .icon {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }
        }
      }
      .text {
        padding: 20px 0;
        border-bottom: 1px dashed @GColor4;
      }
      .personalCenter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        > div {
          width: 35px;
          height: 35px;
        }
      }
      .personalBottom {
        margin: 20px 0;
        > div {
          display: flex;
          align-items: center;
          .xingxing {
            width: 12px;
            height: 12px;
            margin: 10px 10px 10px 0;
          }
        }
      }
    }
    .label {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
      div {
        padding: 5px 10px;
        background: @MZColor;
        margin: 10px;
        color: white;
      }
    }
  }
  .right {
    flex: 1;
    .classify {
      width: 100%;
      .classifyTitle {
        font-size: 25px;
        margin: 10px;
        margin-left: 55px;
        font-weight: bold;
      }
      .classifyContent {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        > div {
          width: 350px;
          height: 200px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 0 10px @GColor3;
          .fonts {
            width: 250px;
            p {
              font-size: 20px;
              color: @MBColor;
              font-weight: bold;
              word-wrap: break-word;
            }
            .text {
              font-size: 14px;
              color: @GColor1;
              margin-top: 8px;
              line-height: 24px;
              font-weight: normal;
            }
          }
          .classifyImg {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
    .news {
      width: 100%;
      .newsTitle {
        font-size: 25px;
        margin: 25px 0 10px 0;
        margin-left: 55px;
        font-weight: bold;
      }
      .newsContent {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        > div {
          width: calc(100% - 150px);
          // height: 180px;
          display: flex;
          align-items: center;
          border-bottom: 1px dashed @GColor3;
          padding: 20px 0;

          .fonts {
            flex: 1;
            width: 250px;
            padding-left: 20px;
            .bottom {
              display: flex;
              align-items: center;
              > div {
                width: 17px;
                height: 17px;
                margin: 0 10px;
              }
            }
            > p {
              font-size: 20px;
              font-weight: bold;
              word-wrap: break-word;
            }

            .text {
              font-size: 16px;
              color: @GColor1;
              margin: 20px 0 50px 0;
              line-height: 26px;
              font-weight: normal;
              word-break: break-all;
              display: -webkit-box; /**对象作为伸缩盒子模型展示**/
              -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
              -webkit-line-clamp: 2; /**显示的行数**/
              overflow: hidden; /**隐藏超出的内容**/
            }
          }
          .newsImg {
            width: 240px;
            // height: 240px;
          }
          .smallIcon {
            width: 50px;
            height: 50px;
            position: relative;
            bottom: -80px;
            left: -5px;
          }
        }
      }
    }
  }
}
</style>
