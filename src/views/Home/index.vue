<template>
  <div class="home">
    <div class="top_wrap">
      <div class="navigation">

      </div>
      <div class="swipper-wraper">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="middle_wrap">
      <person/>
      <div class="person_works">
        <nav class="operate_nav">
          <a href="#" class="nav_all on" rel="true">创作 · <span>0</span></a>
          <em></em>
          <a href="#" rel="8" class="jike jk" _rel="true">即刻 · <span>0</span></a>
          <em></em>
          <a href="#" class="collect" rel="true">收藏 · <span>0</span><i class="icon-unlock tag"></i></a>
          <em></em>
          <a href="#" class="zaned">赞过 · <span>0</span><i class="icon-unlock tag"></i></a>
        </nav>
        <div class="all_nav cl">
          <!-- <a href="javascript:;" class="nav_all">全部 · <span>0</span></a>
          <a href="javascript:;" class="nav_work">知识点 · <span>0</span></a>
          <a href="javascript:;" class="nav_exp">笔记 · <span>0</span></a>
          <a href="javascript:;" class="nav_file on">题目 · <span>1</span></a>
          <a href="javascript:;" class="nav_filed">草稿箱 · <span>0</span></a> -->
          <template v-for="item in routers">
            <div class="fileMenu" v-if="!item.hidden" :key="item.id">
              <router-link :to="subItem.name" v-for="subItem in item.children" :key="subItem.id">{{ subItem.meta.name }} · <span>0</span></router-link>
              <!-- <a v-for="subItem in item.children" :key="subItem.id" @click="changeMenu()">{{ subItem.meta.name }} · <span>0</span></a> -->
            </div>
          </template>
          <div class="y pos fileOrder" data-type="add_time"><span>最新更新</span>
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
          <router-view/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import person from "./components/person"
import studies from "./components/studies"
export default {
  name: "Home",
  components: {
    person,
    studies
  },
  data () {
    return {
      title: "Heazeel的个人空间",
      routers: this.$router.options.routes
    }
  },
  methods: {
    
  },
  mounted () {
    
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: homeTitle;
  src: url(../../assets/font/font.ttf)
}
.top_wrap{
  .navigation{
    position: absolute;
    width: 100%;
    top: 0;
  }
  .swipper-wraper{
    background: url(../../assets/home/new-top.png) no-repeat center top;
    background-size: auto 350px;
    width: 100%;
    height: 350px;
    h1{
      font-family: homeTitle;
      color:#fff;
      position: absolute;
      left: 37%;
      top:50px;
      font-size:60px;
      user-select: none;
    }
  }
}
.middle_wrap{
  position: relative;
  padding-left: 280px;
  box-sizing: border-box;
  width: 1480px;
  margin: 0 auto;
  .person_works{
    margin-top: -60px;
    width: 100%;
    float: left !important;
    .operate_nav{
      height: 60px;
      font-size: 0;
      display: block;
      a{
        display: inline-block;
        height: 60px;
        line-height: 60px;
        color: white;
        font-size: 16px;
        opacity: 0.5;
        padding: 0 30px;
      }
      em{
        display: inline-block;
        width: 1px;
        height: 24px;
        background: rgba(255,255,255,0.2);
        vertical-align: top;
        margin-top: 18px;
      }
    }
    .all_nav{
      font-size: 0;
      margin-top: 30px;
      margin-bottom: 30px;
      a{
        padding: 0 22px;
        height: 38px;
        line-height: 38px;
        display: inline-block;
        border: 1px solid rgba(191,196,205,.1);
        border-radius: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #BFC4CD;
        letter-spacing: 0;
        margin-left: 20px;
        vertical-align: middle;
      }
      a:hover{
        color: #3D7EFF;
        height: 38px;
        line-height: 38px;
        border-color: transparent;
        background-color: rgba(61,126,255,.1);
      }
      .fileMenu{
        display: inline-block;
      }
      .fileOrder{
        float: right !important;
        position: relative;
        width: 118px;
        text-align: center;
        border: 1px solid rgba(191,196,205,.3);
        font-family: PingFangSC-Medium;
        color: #909399;
        border-radius: 20px;
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
        span{
          display: inline-block;
          line-height: 38px;
        }
        ul{
          width: 120px;
          border-radius: 10px;
          position: absolute;
          left: -1px;
          top: -1px;
          box-shadow: 0 0 50px 0 rgba(48,49,51,0.10);
          background-color: white;
          overflow: hidden;
          display: none;
          height: auto;
          z-index: 15;
        }
      }
      .fileOrder:hover{
        ul{
          width: 120px;
          border-radius: 10px;
          float: right !important;
          box-shadow: 0 0 50px 0 rgba(48,49,51,0.10);
          background-color: white;
          overflow: hidden;
          display: block;
          height: auto;
          z-index: 15;
          li{
            width: 120px;
            line-height: 40px;
            color: white;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #BFC4CD;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            user-select: none;
          }
          li:hover{
            background-color: rgba(61,126,255,.1);
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #3D7EFF;
          }
        }
      }
    }
    .work_lists{
      width: 1200px;
      margin-top: 30px;
      position: relative;
      li.file{
        width: 280px;
        height: 310px;
        margin-left: 20px;
        border-radius: 10px;
        overflow: hidden;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        background: url(../../assets/home/li_bg.png) no-repeat center bottom;
        margin-bottom: 20px;
        background-size: 280px auto;
        position: relative;
        float: left !important;
        a{
          color: #369;
          outline: medium none;
          text-decoration: none;
        }
        .img_wrap{
          width: 280px;
          height: 210px;
          position: relative;
          overflow: hidden;
          img{
            width: 280px;
            height: 210px;
            object-fit: cover;
            display: block;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            position: absolute;
            border: 0;
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -o-transition: all 0.3s;
            -moz-transition: all 0.3s;
          }
        }
        .bt{
          height: 80px;
          line-height: 80px;
          padding-left: 15px;
          div.z{
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #303133;
            letter-spacing: 0;
            float: left !important;
            p{
              height: 20px;
              line-height: 20px;
              margin-top: 20px;
              margin-bottom: 5px;
            }
            div{
              height: 20px;
              line-height: 20px;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #BFC4CD;
              letter-spacing: 0;
              i{
                font-size: 14px;
                color: #BFC4CD;
                margin-right: 2px;
              }
              span{
                display: inline-block;
                margin-right: 8px;
              }
            }
          }
          p.y{
            height: 52px;
            margin-top: 48px;
            line-height: 60px;
            width: 72px;
            text-align: center;
            -webkit-transition: all 1s;
            transition: all 1s;
            text-indent: 9px;
            float: right !important;
            span{
              color: #3D7EFF;
              font-size: 14px;
            }
          }
        }
      }
      li:hover{
        transform: translateY(-5px);
        box-shadow: 0 20px 80px rgba(48, 49, 51, 0.15);
        p.y{
          background: url(../../assets/home/wan.png) no-repeat right bottom;
          background-size: auto 52px;
        }
        img{
          transform: scale(1.02);
        }
      }
    }
  }
}
</style>