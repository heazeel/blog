<template>
  <div>
    <li class="file z pos" v-for="item in studies" :key="item.id">
      <div class="new_operate2">
        <a href="javascript:;">
          <i class="icon-gengduo"></i>
        </a>
        <div class="slide_operate">
          <a href="javascript:;" class="top_file" data-top="0" title="置顶" data-mark="48324">
            <i class="icon-zhiding"></i>
          </a>
          <a href="javascript:;" data_hide="0" class="hid_file" title="隐藏" data-mark="48324">
            <i class="icon-eye"></i>
          </a>
          <a href="javascript:;" class="edit_mark" title="编辑收藏夹" data-mark="48324" data-type="1" data-pro="0">
            <i class="icon-icon_edit"></i>
          </a>
          <a href="javascript:;" class="cancle_mark" title="删除收藏夹" data-mark="48324" data-type="1" data-pro="0">
            <i class="icon-gr_del"></i>
          </a>
        </div>
      </div>
      <a target="_blank" href="#" class="shadow_cover hide">
        <div class="new_shadow"></div>
      </a>
      <router-link to="/works">
        <div class="img_wrap">
          <img :src="item.pic" class="file-ep">
        </div>
        <div class="cl bt">
          <div class="z">
            <p data-intro=""><i class="icon-Shoucangjia"></i>{{ item.study_title }}</p>
            <div>
              <i class="icon-icon_browse" title="浏览量"></i><span>{{ item.view_num }}</span>
              <i class="icon-inspiration_icon_like_nor" title="点赞量"></i><span>{{ item.like_num }}</span>
              <i class="icon-tool_icon_collection" title="关注量"></i><span>{{ item.follow_num }}</span>
            </div>
          </div>
          <p class="y"><span>0</span></p>
        </div>
      </router-link>
    </li>
  </div>
</template>
<script>
export default {
  name: "studies",
  data () {
    return {
      studies:[
        {"study_title":"JavaScript基础教程","pic":require('../../../assets/home/javascript.jpg'),"view_num":"0","like_num":"0","follow_num":"0"},
        {"study_title":"CSS3基础教程","pic":require('../../../assets/home/css3.jpg'),"view_num":"0","like_num":"0","follow_num":"0"},
        {"study_title":"HTML基础教程","pic":require('../../../assets/home/javascript.jpg'),"view_num":"0","like_num":"0","follow_num":"0"},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>