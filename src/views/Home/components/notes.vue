<template>
  <div>
    <li class="file z pos" v-for="item in studies" :key="item.id">
      <div class="new_operate2">
        <a href="javascript:;">
          <i class="icon-gengduo"></i>
        </a>
        <div class="slide_operate">
          <a
            href="javascript:;"
            class="top_file"
            data-top="0"
            title="置顶"
            data-mark="48324"
          >
            <i class="icon-zhiding"></i>
          </a>
          <a
            href="javascript:;"
            data_hide="0"
            class="hid_file"
            title="隐藏"
            data-mark="48324"
          >
            <i class="icon-eye"></i>
          </a>
          <a
            href="javascript:;"
            class="edit_mark"
            title="编辑收藏夹"
            data-mark="48324"
            data-type="1"
            data-pro="0"
          >
            <i class="icon-icon_edit"></i>
          </a>
          <a
            href="javascript:;"
            class="cancle_mark"
            title="删除收藏夹"
            data-mark="48324"
            data-type="1"
            data-pro="0"
          >
            <i class="icon-gr_del"></i>
          </a>
        </div>
      </div>
      <a target="_blank" href="#" class="shadow_cover hide">
        <div class="new_shadow"></div>
      </a>
      <router-link to="/works">
        <div class="img_wrap">
          <img :src="item.pic" class="file-ep" />
        </div>
        <div class="cl bt">
          <div class="z">
            <p class="title">{{ item.note_title }}</p>
            <p class="tag">原创</p>
            <div>
              <i class="el-icon-view" title="浏览数"></i
              ><span>{{ item.view_num }}</span>
              <i class="el-icon-star-off" title="收藏数"></i
              ><span>{{ item.follow_num }}</span>
              <i class="el-icon-apple" title="点赞数"></i
              ><span>{{ item.like_num }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </li>
  </div>
</template>
<script>
export default {
  name: "studies",
  data() {
    return {
      studies: [
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        },
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        },
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        },
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        },
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        },
        {
          note_title: "a",
          pic: require("../../../assets/home/empty_new.png"),
          view_num: "0",
          follow_num: "0",
          like_num: "0"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
li.file {
  background-color: white;
}
</style>
