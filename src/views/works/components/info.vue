<template>
  <div class="person_card">
    <div class="person_card_bottom">
      <div class="person_head">
        <img src="../../../assets/home/personal_pic.jpg" />
      </div>
      <div class="person_name">Heazeel</div>
      <div class="person_intro">Keep Learning</div>
      <div class="person_icon">
        <img src="../../../assets/home/pic1.svg" />
        <img src="../../../assets/home/pic2.svg" />
        <img src="../../../assets/home/pic3.svg" />
      </div>
    </div>
    <div class="operator">
      <router-link class="back_to_home" :to="back[$store.state.active]">
        <i class="el-icon-s-home" />
        <p class="">回到主页</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  //name:"person"
  data() {
    return {
      back: { 0: "/all", 1: "/studies", 2: "/notes", 3: "/drafts" }
    };
  }
};
</script>
<style lang="scss" scoped>
.person_card {
  width: 280px;
  margin-top: -159px;
  margin-left: -280px;
  float: left !important;
  .person_card_bottom {
    background-color: white;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
    padding: 30px 0;
    .person_head {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: auto;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .person_name {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: #303133;
      line-height: 1;
    }
    .person_intro {
      font-size: 14px;
      color: #bfc4cd;
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
    .person_icon {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      img {
        width: 22px;
        height: auto;
        margin: 0 2px;
      }
    }
  }
  .operator {
    background-color: white;
    margin-top: 10px;
    text-align: center;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
    .back_to_home {
      padding: 15px;
      display: block;
      i {
        color: #d3dce6;
        display: inline-block;
        font-size: 20px;
        transition: all 0.3s ease;
        line-height: 20px;
      }
      p {
        display: inline-block;
        margin-left: 8px;
        transition: all 0.3s ease;
        line-height: 20px;
        color: black;
      }
    }
    .back_to_home:hover {
      cursor: pointer;
      i {
        transform: translateX(34px) scale(1.4);
        color: #3d7eff;
      }
      p {
        transform: translateX(34px);
        opacity: 0;
      }
    }
  }
}
</style>
