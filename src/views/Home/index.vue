<template>
  <div class="home">
    <div class="top_wrap">
      <div class="navigation">

      </div>
      <div class="swipper-wraper"></div>
    </div>
    <div class="middle_wrap">
      <div class="person_card">
        <div class="person_card_top">
          <a class="hot_num" title="人气" href="https://talk.ui.cn/detail/4823">
            <i class="icon-hot"></i>0
          </a>
          <div class="person_head pos">
            <img src="../../assets/home/max.png">
          </div>
        </div>
        <div class="person_card_bottom">
          <div class="person_name">Anone</div>
          <div class="person_intro">Keep Learning</div>
          <div class="person_fans">
            <a href="#" class="fans">
              <span>0</span><br>粉丝
            </a>
            <em></em>
            <a href="#" target="_blank">
              <span>0</span><br>关注
            </a>
            <em></em>
            <a href="#">
              <span>0</span><br>颜值
            </a>
          </div>
          <div class="edit">
            <a href="#">编辑资料</a>
            <a href="#">我的简历</a>
          </div>
          <ul class="myself_card">
            <li><h3>个人名片</h3></li>
            <li>0岁</li>
            <li>1520800291@qq.com</li>
            <li>h13625885485</li>
            <li>heazeel</li> 
          </ul>
        </div>
      </div>
      <div class="person_works">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
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
  }
}
.middle_wrap{
  position: relative;
  padding-left: 280px;
  box-sizing: border-box;
  width: 1480px;
  margin: 0 auto;
  .person_card{
    width: 280px;
    margin-top: -159px;
    margin-left: -280px;
    .person_card_top{
      height: 159px;
      background: url(../../assets/home/t_bg.png) no-repeat center top;
      background-size: 280px auto;
      margin-bottom: -1px;
      .hot_num{
        width: 95px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #303133;
        font-size: 18px;
        margin: 0 auto;
        font-weight: bold;
        display: block;
        i{
          color: #ff5542;
          font-size: 22px;
          display: inline-block;
          margin-right: 2px;
          font-family: "iconfont" !important;
          font-size: 16px;
          color: #b8c4ce;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: 0.2px;
        }
      }
      .person_head{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 22px auto 0;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .person_card_bottom{
      background-color: white;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      .person_name{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #303133;
        line-height: 1;
      }
      .person_intro{
        font-size: 14px;
        color: #BFC4CD;
        text-align: center;
        line-height: 20px;
        padding: 0 20px;
        box-sizing: border-box;
        margin-top: 9px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      .person_fans{
        height: 60px;
        a{
          font-size: 12px;
          color: #909399;
          width: 92px;
          text-align: center;
          display: inline-block;
          span{
            font-size: 22px;
            font-weight: bold;
            color: #303133;
            display: inherit;
            padding:9px 0px;
          }
        }
        em{
          display: inline-block;
          width: 1px;
          height: 30px;
          background: #EDEFF2;
        }
      }
      .edit{
        padding: 30px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #EDEFF2;
        font-size: 0;
        text-align: center;
        a{
          display: inline-block;
          width: 98px;
          height: 38px;
          text-align: center;
          line-height: 38px;
          border: 1px solid #BFC4CD;
          color: #BFC4CD;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        a:last-of-type{
          border: 1px solid #3D7EFF;
          background-color: #3D7EFF;
          margin-left: 20px;
          color: white;
        }
      }
      .myself_card{
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #EDEFF2;
        li{
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #909399;
          font-size: 14px;
        }
        li:first-of-type{
          height: 50px;
          line-height: 50px;
          h3{
            color: #303133;
            font-size: 16px;
            font-weight: 500;
            line-height: 50px;
          }
        }
      }
    }
  }
  .person_works{

  }
}
</style>
