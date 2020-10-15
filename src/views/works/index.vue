<template>
  <div>
    <div class="header-wrap">
      <div class="header-main">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="content">
      <info :class="{ fixed2: fixed2 }" />
      <articalPane />
      <div :class="{ fixed: fixed }" id="nav-menu">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item
            v-for="(item, index) in catalog"
            :key="item.id"
            :name="index + ''"
          >
            <template slot="title">
              <i
                :class="[
                  active == index ? 'el-icon-folder-opened' : 'el-icon-folder'
                ]"
              ></i
              >{{ item.name }}
            </template>
            <div
              v-for="(subItem, index2) in item.children"
              :class="isActive == index + '' + index2 ? 'active' : ''"
              :key="subItem.id"
              @click="switchMd(subItem.num, index + '' + index2)"
            >
              <i class="el-icon-document"></i>
              {{ subItem.title }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import info from "./components/info";
import articalPane from "./components/articalPane";
export default {
  name: "works",
  components: {
    info,
    articalPane
  },
  data() {
    return {
      title: "Heazeel的个人空间",
      activeNames: ["0"],
      active: 0,
      isActive: "00",
      catalog: [
        {
          name: "数据类型",
          children: [
            { num: "JS_A", title: "null,undefined和布尔值" },
            { num: "JS_B", title: "数值" },
            { num: "JS_C", title: "字符串" },
            { num: "JS_D", title: "对象" },
            { num: "JS_E", title: "函数" },
            { num: "JS_F", title: "数组" }
          ]
        },
        {
          name: "运算符",
          children: [
            { num: "JS_G", title: "算数运算符" },
            { num: "JS_H", title: "比较运算符" },
            { num: "JS_I", title: "布尔运算符" },
            { num: "JS_J", title: "二进制位运算符" },
            { num: "JS_K", title: "其他运算符，运算顺序" }
          ]
        },
        {
          name: "语法专题",
          children: [
            { num: "JS_L", title: "数据类型的转换" },
            { num: "JS_M", title: "错误处理机制" },
            { num: "JS_N", title: "编程风格" },
            { num: "JS_O", title: "console控制台" }
          ]
        },
        {
          name: "标准库",
          children: [
            { num: "JS_P", title: "Object对象" },
            { num: "JS_Q", title: "属性描述对象" },
            { num: "JS_R", title: "Array对象" },
            { num: "JS_S", title: "包装对象" },
            { num: "JS_T", title: "Boolean对象" },
            { num: "JS_U", title: "Number对象" },
            { num: "JS_V", title: "String对象" },
            { num: "JS_W", title: "Math对象" },
            { num: "JS_X", title: "Date对象" },
            { num: "JS_Y", title: "RegExp对象" },
            { num: "JS_Z", title: "JSON对象" }
          ]
        },
        {
          name: "面向对象编程",
          children: [
            { num: "JS_AA", title: "实例对象与new命令" },
            { num: "JS_AB", title: "this关键字" },
            { num: "JS_AC", title: "对象的继承" },
            { num: "JS_AD", title: "Object对象的相关方法" },
            { num: "JS_AE", title: "严格模式" }
          ]
        },
        {
          name: "异步操作",
          children: [
            { num: "JS_AF", title: "概述" },
            { num: "JS_AG", title: "定时器" },
            { num: "JS_AH", title: "Promise对象" }
          ]
        },
        {
          name: "DOM",
          children: [
            { num: "JS_AI", title: "概述" },
            { num: "JS_AJ", title: "Node接口" },
            { num: "JS_AK", title: "NodeList、HTMLCollection" },
            { num: "JS_AL", title: "ParentNode、ChildNode" },
            { num: "JS_AM", title: "Document" },
            { num: "JS_AN", title: "Element" },
            { num: "JS_AO", title: "属性的操作" },
            { num: "JS_AP", title: "Text、DocumentFragment" },
            { num: "JS_AQ", title: "CSS操作" },
            { num: "JS_AR", title: "Mutation Observer API" }
          ]
        },
        {
          name: "BOM",
          children: [
            { num: "JS_AS", title: "概述" },
            { num: "JS_AT", title: "window对象" },
            { num: "JS_AU", title: "Navigator、Screen对象" },
            { num: "JS_AV", title: "Cookie" },
            { num: "JS_AW", title: "XMLHttpRequest对象" },
            { num: "JS_AX", title: "同源限制" },
            { num: "JS_AY", title: "CORS通信" },
            { num: "JS_AZ", title: "Storage对象" },
            { num: "JS_BA", title: "History对象" },
            { num: "JS_BB", title: "Location、URL对象" },
            { num: "JS_BC", title: "ArrayBuffer、Blob对象" },
            { num: "JS_BD", title: "File、FileList、FileReader" },
            { num: "JS_BE", title: "表单、FormData对象" },
            { num: "JS_BF", title: "IndexedDB API" },
            { num: "JS_BG", title: "Web Worker" }
          ]
        },
        {
          name: "事件",
          children: [
            { num: "JS_BH", title: "EventTarget接口" },
            { num: "JS_BI", title: "事件模型" },
            { num: "JS_BJ", title: "Event对象" },
            { num: "JS_BK", title: "鼠标事件" },
            { num: "JS_BL", title: "键盘事件" },
            { num: "JS_BM", title: "进度事件" },
            { num: "JS_BN", title: "表单事件" },
            { num: "JS_BO", title: "触摸事件" },
            { num: "JS_BP", title: "拖拉事件" },
            { num: "JS_BQ", title: "其他常见事件" },
            { num: "JS_BR", title: "GlobalEventHandlers接口" }
          ]
        }
      ],
      fixed: false,
      fixed2: false,
      tabOffsetTop: 0,
      scrollTop: 0
    };
  },
  methods: {
    handleScroll() {
      //保存滚动值，这是兼容的写法
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      /***
       * 如果滚动的距离大于70px，将元素设置为fixed固定在屏幕中反之随屏幕滚动
       */
      if (this.scrollTop >= 70) {
        this.fixed = true;
        this.fixed2 = true;
      } else {
        this.fixed = false;
        this.fixed2 = false;
      }
    },
    backTop() {
      // 滚动条回到顶部
      if (this.scrollTop > 10) {
        document.documentElement.scrollTop = 0;
      }
    },
    handleChange(val) {
      // 切换右侧导航栏文件夹图标样式
      if (val !== "") {
        this.active = val;
      } else {
        this.active = -1;
      }
    },
    switchMd(val, index) {
      // 路由传参，切换markdown
      this.$router.push({
        name: "artical",
        path: "/artical",
        params: { id: val }
      });
      this.isActive = index;
    }
  },
  mounted() {
    // 页面挂载完成后为滚动条设置监听事件
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: homeTitle;
  src: url(../../assets/font/font.ttf);
}
.header-wrap {
  height: 70px;
  background-color: #fff;
  .header-main {
    width: 1580px !important;
    margin: 0 auto;
    height: 100%;
    h1 {
      display: block;
      line-height: 70px;
      font-family: homeTitle;
      color: #000;
      font-size: 40px;
      user-select: none;
    }
  }
}
.content {
  position: relative;
  box-sizing: border-box;
  width: 1580px;
  margin: 0 auto;
  padding-left: 280px;
  margin-top: 30px;
  .person_card {
    margin-top: 0px;
  }
  .artical {
    width: 860px;
    background-color: #fff;
    padding: 20px 50px;
    margin: 0 20px 40px 20px;
    float: left;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
  }
  #nav-menu {
    width: 300px;
    float: left;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
    i {
      margin-right: 2px;
    }
    .active {
      background-color: #f3f3f3;
    }
  }
}
.fixed {
  position: fixed;
  top: 20px;
  right: 165px;
}
.fixed2 {
  position: fixed;
  top: 20px;
  left: 165px;
  margin-left: 0;
}
</style>
