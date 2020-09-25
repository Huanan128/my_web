<template>
  <div class="time">
    <Nav></Nav>
    <div class="contnet">
      <!-- <div class="line"></div> -->
      <div v-for="(item, index) in timeData" :key="item.index">
        <div class="left" v-if="item.index % 2 == 0">
          <div class="text">
            <div>{{ item.text }}</div>
            <div class="title">{{ item.time }}</div>
          </div>
          <div class="icon">
            <!-- <img class="allImg" src alt /> -->
          </div>
          <div class="line"></div>
        </div>
        <div class="right" v-else-if="item.index % 2 == 1">
          <div class="text">
            <div>{{ item.text }}</div>
            <div class="title">{{ item.time }}</div>
          </div>
          <div class="icon">
            <!-- <img class="allImg" src alt /> -->
          </div>
          <div class="line"></div>
        </div>
      </div>

      <!-- <div class="right">
        <div class="text">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
        <div class="icon"></div>
      </div> -->
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
      timeData: [
        {
          time: "2020/01/12 08:09:21",
          text:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 1,
        },
        {
          time: "2020/01/12 08:09:21",
          text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 2,
        },
        {
          time: "2020/01/12 08:09:21",
          text:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 3,
        },
        {
          time: "2020/01/12 08:09:21",
          text: "哈哈哈哈哈哈哈哈哈哈哈",
          index: 4,
        },
        {
          time: "2020/01/12 08:09:21",
          text:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 5,
        },
        {
          time: "2020/01/12 08:09:21",
          text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 6,
        },
        {
          time: "2020/01/12 08:09:21",
          text:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 7,
        },
        {
          time: "2020/01/12 08:09:21",
          text: "哈哈哈哈哈哈哈哈哈哈哈",
          index: 8,
        },
        {
          time: "2020/01/12 08:09:21",
          text:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          index: 9,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.contnet {
  // width: 1500px;
  margin: @mainTop+20px 100px 0 100px;
  background: white;
  height: 800px;
  // margin: @mainTop + 19px auto 0 auto;
  border-radius: 20px 20px 0 0;
  padding: 50px 120px;
  overflow: hidden;
  //   .line {
  //     height: 100%;
  //     width: 8px;
  //     background: @GColor4;
  //     border-radius: 20px;
  //     position: absolute;
  //     transform: translateX(-50%);
  //     left: 50%;
  //   }
  .left,
  .right {
    display: flex;
    position: relative;
    justify-content: start;
    align-items: center;
    padding-bottom: 40px;
    .text {
      width: 500px;
      padding: 15px;
      background: #cbe5e3;
      // color: white;
      .title {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
      }
    }
    .icon {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      width: 25px;
      height: 25px;
      background: #cbe5e3;
      border-radius: 50%;
      z-index: 3;
      box-shadow: 0 0 5px #cbe5e3;
      border: 2px solid white;
    }
    .line {
      height: 100%+10px;
      width: 8px;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      background: #cbe5e3;
      z-index: 2;
      // top:2px;
      border-radius: 8px;
    }
  }
  .right {
    justify-content: flex-end;
    .text {
      background: #fdd9c3;
    }
    .icon {
      background: #fdd9c3;
      box-shadow: 0 0 5px #fdd9c3;
    }
    .line {
      background: #fdd9c3;
      border-radius: 8px;
    }
  }
}
</style>