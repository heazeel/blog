<template>
  <div class="home">
    <div class="scrollbar"></div>
    <div class="top_wrap">
      <div class="navigation"></div>
      <div class="swipper-wraper">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="middle_wrap">
      <person />
      <div class="person_works">
        <nav class="operate_nav">
          <a href="#" class="nav_all on" rel="true">创作 · <span>0</span></a>
          <em></em>
          <a href="#" rel="8" class="jike jk" _rel="true"
            >即刻 · <span>0</span></a
          >
          <em></em>
          <a href="#" class="collect" rel="true"
            >收藏 · <span>0</span><i class="icon-unlock tag"></i
          ></a>
          <em></em>
          <a href="#" class="zaned"
            >赞过 · <span>0</span><i class="icon-unlock tag"></i
          ></a>
        </nav>
        <div class="all_nav cl">
          <template v-for="item in routers">
            <div class="fileMenu" v-if="!item.hidden" :key="item.id">
              <router-link
                :to="subItem.name"
                v-for="(subItem, index) in item.children"
                :key="subItem.id"
                :class="{ fileMenuStatus: $store.state.active == index }"
                @click.native="fileMenuClick(index)"
                >{{ subItem.meta.name }} · <span>0</span></router-link
              >
              <!-- <a v-for="subItem in item.children" :key="subItem.id" @click="changeMenu()">{{ subItem.meta.name }} · <span>0</span></a> -->
            </div>
          </template>
          <div class="y pos fileOrder" data-type="add_time">
            <span>最新更新</span>
            <i class="icon-down"></i>
            <ul>
              <li data-type="add_time" class="on">最新更新</li>
              <li data-type="create_time">最新创建</li>
              <li data-type="viewnum">浏览最高</li>
              <li data-type="likenum">点赞最高</li>
              <li data-type="favnum">关注最高</li>
            </ul>
          </div>
        </div>
        <ul class="work_lists cl">
          <router-view />
        </ul>
      </div>
      <div id="vcomments"></div>
      <div id="clear"></div>
    </div>
  </div>
</template>
<script>
import person from "./components/person";
import studies from "./components/studies";
import Valine from "valine";
export default {
  name: "Home",
  components: {
    person,
    // eslint-disable-next-line vue/no-unused-components
    studies
  },
  data() {
    return {
      title: "Heazeel的个人空间",
      routers: this.$router.options.routes
      //fileMenuStatus: computed(()=>this.$store.state.fileMenuStatus),
    };
  },
  methods: {
    //点击状态管理
    fileMenuClick(index) {
      this.$store.commit("SET_FILEMENUSTATUS", index);
      console.log(this.$store.state.active);
    },
    //初始化评论系统
    initValine() {
      new Valine({
        el: "#vcomments",
        appId: "URmdycfso0YukNoucAfLUw4e-gzGzoHsz",
        appKey: "YIjBiPpilaNgOV2mv8oDL3gz"
      });
    }
  },
  mounted() {
    //this.fileMenuStatus[1] = true;
    this.initValine();
  }
};
</script>

<style lang="scss">
@import "../../styles/config.scss";
@font-face {
  font-family: homeTitle;
  src: url(../../assets/font/font.ttf);
}
.top_wrap {
  .navigation {
    position: absolute;
    width: 100%;
    top: 0;
  }
  .swipper-wraper {
    background: url(../../assets/home/new-top.png) no-repeat center top;
    background-size: auto 350px;
    width: 100%;
    height: 350px;
    h1 {
      font-family: homeTitle;
      color: #fff;
      position: absolute;
      left: 37%;
      top: 50px;
      font-size: 60px;
      user-select: none;
    }
  }
}
.middle_wrap {
  position: relative;
  padding-left: 280px;
  box-sizing: border-box;
  width: 1480px;
  margin: 0 auto;
  #clear {
    clear: both;
  }
  .person_works {
    margin-top: -60px;
    width: 100%;
    float: left !important;
    .operate_nav {
      height: 60px;
      font-size: 0;
      display: block;
      a {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        color: white;
        font-size: 16px;
        opacity: 0.5;
        padding: 0 30px;
      }
      em {
        display: inline-block;
        width: 1px;
        height: 24px;
        background: rgba(255, 255, 255, 0.2);
        vertical-align: top;
        margin-top: 18px;
      }
    }
    .all_nav {
      font-size: 0;
      margin-top: 30px;
      margin-bottom: 30px;
      a {
        padding: 0 22px;
        height: 38px;
        line-height: 38px;
        display: inline-block;
        border: 1px solid rgba(191, 196, 205, 0.1);
        border-radius: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #bfc4cd;
        letter-spacing: 0;
        margin-left: 20px;
        vertical-align: middle;
      }
      a:hover {
        color: $mainColor;
        height: 38px;
        line-height: 38px;
        border-color: transparent;
        background-color: rgba(61, 126, 255, 0.1);
      }
      .fileMenu {
        display: inline-block;
        .fileMenuStatus {
          color: $mainColor;
          height: 38px;
          line-height: 38px;
          border-color: transparent;
          background-color: rgba(61, 126, 255, 0.1);
        }
      }
      .fileOrder {
        float: right !important;
        position: relative;
        width: 118px;
        text-align: center;
        border: 1px solid rgba(191, 196, 205, 0.3);
        font-family: PingFangSC-Medium;
        color: #909399;
        border-radius: 20px;
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
        span {
          display: inline-block;
          line-height: 38px;
        }
        ul {
          width: 120px;
          border-radius: 10px;
          position: absolute;
          left: -1px;
          top: -1px;
          @include webkit(box-shadow, 0 0 50px 0 rgba(48, 49, 51, 0.1));
          background-color: white;
          overflow: hidden;
          display: none;
          height: auto;
          z-index: 15;
        }
      }
      .fileOrder:hover {
        ul {
          width: 120px;
          border-radius: 10px;
          float: right !important;
          @include webkit(box-shadow, 0 0 50px 0 rgba(48, 49, 51, 0.1));
          background-color: white;
          overflow: hidden;
          display: block;
          height: auto;
          z-index: 15;
          li {
            width: 120px;
            line-height: 40px;
            color: white;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #bfc4cd;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            user-select: none;
          }
          li:hover {
            background-color: rgba(61, 126, 255, 0.1);
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #3d7eff;
          }
        }
      }
    }
    .work_lists {
      width: 1200px;
      margin-top: 30px;
      position: relative;
      li.file {
        width: 280px;
        height: 310px;
        margin-left: 20px;
        border-radius: 10px;
        overflow: hidden;
        @include webkit(transition, all 0.3s);
        margin-bottom: 20px;
        position: relative;
        float: left !important;
        a {
          color: #369;
          outline: medium none;
          text-decoration: none;
        }
        .img_wrap {
          width: 280px;
          height: 210px;
          position: relative;
          overflow: hidden;
          img {
            width: 280px;
            height: 210px;
            object-fit: cover;
            display: block;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            position: absolute;
            border: 0;
            @include webkit(transition, all 0.3s);
          }
        }
        .bt {
          height: 100px;
          line-height: 100px;
          padding-left: 15px;
          position: relative;
          div.z {
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #303133;
            letter-spacing: 0;
            float: left !important;
            p {
              height: 20px;
              line-height: 20px;
              margin-bottom: 5px;
            }
            .title {
              margin-top: 10px;
              font-size: 16px;
            }
            .tag {
              font-size: 14px;
              width: 40px;
              text-align: center;
              color: #3d7eff;
              border-radius: 10px;
              border: 1px solid #3d7eff;
            }
            div {
              height: 20px;
              line-height: 20px;
              font-family: PingFangSC-Regular;
              font-size: 18px;
              color: #bfc4cd;
              letter-spacing: 0;
              position: absolute;
              bottom: 10px;
              i {
                font-size: 18px;
                color: #bfc4cd;
                margin-right: 4px;
              }
              span {
                display: inline-block;
                margin-right: 15px;
              }
            }
          }
          p.y {
            height: 52px;
            margin-top: 48px;
            line-height: 60px;
            width: 72px;
            text-align: center;
            @include webkit(transition, all 1s);
            text-indent: 9px;
            float: right !important;
            span {
              color: #3d7eff;
              font-size: 16px;
            }
          }
        }
      }
      li:hover {
        @include webkit(transform, translateY(-5px));
        @include webkit(box-shadow, translateY(-5px));
        img {
          @include webkit(transform, scale(1.1));
        }
      }
    }
  }
  #vcomments {
    float: left;
    width: 1180px;
    box-sizing: border-box;
    margin: 20px 0px 20px 20px;
    .vpanel {
      background-color: #fff;
      border-radius: 10px;
      padding: 15px 15px 5px 15px;
      margin-bottom: 10px;
    }
    .vpower {
      display: none;
    }
  }
}
</style>
