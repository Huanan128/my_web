<template>
  <div class="nav">
    <div class="left">安安</div>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in liList"
          @click="changeLi(index)"
          :class="navIndex == index ? 'change' : ''"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right">
      <input v-model="search" type="text" placeholder="搜索" />
      <div>
        <img
          class="allImg"
          src="@assets/images/home/search.png"
          @click="navSearch"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      liList: ["首页", "技术栈", "绘画", "旅游", "生活", "留言板", "时光胶囊"],
      changeIndex: 0,
      search: "",
    };
  },
  props:{
    navIndex:Number
  },
  methods: {
    changeLi(i) {
      this.changeIndex = i;
      console.log(this.$route);
      let path = "";
      // fullPath
      if (i == 0) {
        path = "/";
      } else if (i == 1) {
        path = "/code";
      } else if (i == 2) {
        path = "/draw";
      } else if (i == 3) {
        path = "/travel";
      } else if (i == 4) {
        path = "/life";
      } else if (i == 5) {
        path = "/lang";
      } else if (i == 6) {
        path = "/time";
      }
      if (path == this.$route.fullPath) return;
      this.$router.push(path);
    },
    navSearch() {
      console.log("搜索了", this.search);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 56px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  box-shadow: 0 0 10px @GColor3;

  .left {
    font-weight: bold;
    padding: 0 20px;
    border-right: 2px solid #e2e2e2;
  }
  .content {
    flex: 1;
    ul {
      display: flex;
      li {
        cursor: pointer;
        padding: 0 25px;
        border-right: 1px dotted #e2e2e2; //dotted表示虚线
      }
      li:hover {
        color: @MPColor;
      }
      .change {
        color: @MPColor;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    input {
      border: solid 1px @GColor3;
      padding: 5px 10px;
      box-sizing: border-box;
      border-radius: 7px;
      outline-color: @MBColor; //设置input选中时边框颜色
      width: 260px;
      height: 35px;
    }
    > div {
      width: 20px;
      height: 20px;
      margin-left: 5px;
      position: relative;
      right: 30px;
    }
  }
}
</style>