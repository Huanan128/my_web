<template>
  <div class="time">
    <Nav :navIndex='6'></Nav>
    <div class="content1 content3">
      <div class="mainTop">
        <div class="text">
          <div class="icon">
            <img class="allImg" src="@assets/images/lang/con2.png" alt="" />
          </div>
          <div>时光胶囊</div>
        </div>
        <p>一些伐</p>
      </div>
      <div class="center">
        <div v-for="(item, index) in timeData" :key="item.index">
          <div class="left" v-if="item.index % 2 == 0">
            <div class="text">
              <div>{{ item.text }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="icon">
              <!-- <img class="allImg" src alt /> -->
            </div>
            <div class="line"></div>
          </div>
          <div class="right" v-else-if="item.index % 2 == 1">
            <div class="text">
              <div>{{ item.text }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="icon">
              <!-- <img class="allImg" src alt /> -->
            </div>
            <div class="line"></div>
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
  name: "Home",
  components: {
    Nav,Foot
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
.center {
  margin-top: 100px;
}
.left,
.right {
  display: flex;
  position: relative;
  justify-content: start;
  align-items: center;
  padding-bottom: 40px;
  .text {
    width: 38%;
    padding: 15px;
    // background: @MC3;
    border:2px dashed @MC3;
    // color: white;
    margin: 0 15px;
    .time {
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
    background: @MC3;
    border-radius: 50%;
    z-index: 3;
    box-shadow: 0 0 5px @MC3;
    border: 2px solid white;
  }
  .line {
    height: 100%+10px;
    width: 8px;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    background: @MC3;
    z-index: 2;
    // top:2px;
    // border-radius: 8px;
  }
}
.right {
  justify-content: flex-end;
  .text {
    // background: @MC4;
    border:2px dashed @MC4;

  }
  .icon {
    background: @MC4;
    box-shadow: 0 0 5px @MC4;
  }
  .line {
    background: @MC4;
    // border-radius: 8px;
  }
}
// }
</style>