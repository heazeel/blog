<template>
  <div>
    <div class="header-wrap">
      <div class="header-main">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="content">
      <person :class="{fixed2:fixed2}"/>
      <articalPane/>
      <div :class="{fixed:fixed}" id="nav-menu">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item v-for="(item,index) in catalog" :key="item.id" :name="index+''">
            <template slot="title">
              <i :class="item.icon"></i>{{ item.name }}
            </template>
            <div v-for="(subItem,index2) in item.children" :class="isActive == index+''+index2 ? 'active' : ''" :key="subItem.id" @click="switchMd(subItem.num,index+''+index2)">
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
import person from "../Home/components/person";
import articalPane from "./components/articalPane"
export default {
  name: "works",
  components: {
    person,
    articalPane,
  },
  data () {
    return {
      title:"Heazeel的个人空间",
      activeNames: ['0'],
      isActive: "00",
      catalog:[
        {"icon": "el-icon-folder-opened", "name": "数据类型", 
        "children": [
          {"num":"A","title":"null,undefined和布尔值"},{"num":"B","title":"数值"},{"num":"C","title":"字符串"},
          {"num":"D","title":"对象"},{"num":"E","title":"函数"},{"num":"F","title":"数组"}
        ]},
        {"icon": "el-icon-folder", "name": "运算符", 
        "children": [
          {"num":"G","title":"算数运算符"},{"num":"H","title":"比较运算符"},{"num":"I","title":"布尔运算符"},
          {"num":"J","title":"二进制位运算符"},{"num":"K","title":"其他运算符，运算顺序"}
        ]},
        {"icon": "el-icon-folder", "name": "语法专题", 
        "children": [
          {"num":"L","title":"数据类型的转换"},{"num":"M","title":"错误处理机制"},{"num":"N","title":"编程风格"},
          {"num":"O","title":"console控制台"}
        ]},
        {"icon": "el-icon-folder", "name": "标准库", 
        "children": [
          {"num":"P","title":"Object对象"},{"num":"Q","title":"属性描述对象"},{"num":"R","title":"Array对象"},
          {"num":"S","title":"包装对象"},{"num":"T","title":"Boolean对象"},{"num":"U","title":"Number对象"},
          {"num":"V","title":"String对象"},{"num":"W","title":"Math对象"},{"num":"X","title":"Date对象"},
          {"num":"Y","title":"RegExp对象"},{"num":"Z","title":"JSON对象"}
        ]},
        {"icon": "el-icon-folder", "name": "面向对象编程",
        "children": [
           {"num":"AA","title":"实例对象与new命令"},{"num":"AB","title":"this关键字"},{"num":"AC","title":"对象的继承"},
           {"num":"AD","title":"Object对象的相关方法"},{"num":"AE","title":"严格模式"}
        ]},
        {"icon": "el-icon-folder", "name": "异步操作", 
        "children": [
          {"num":"AF","title":"概述"},{"num":"AG","title":"定时器"},{"num":"AH","title":"Promise对象"}
        ]},
        {"icon": "el-icon-folder", "name": "DOM", 
        "children": [
          {"num":"AI","title":"概述"},{"num":"AJ","title":"Node接口"},{"num":"AK","title":"NodeList、HTMLCollection"},
          {"num":"AL","title":"ParentNode、ChildNode"},{"num":"AM","title":"Document"},{"num":"AN","title":"Element"},
          {"num":"AO","title":"属性的操作"},{"num":"AP","title":"Text、DocumentFragment"},{"num":"AQ","title":"CSS操作"},
          {"num":"AR","title":"Mutation Observer API"}
        ]},
        {"icon": "el-icon-folder", "name": "BOM", 
        "children": [
          {"num":"AS","title":"概述"},{"num":"AT","title":"window对象"},{"num":"AU","title":"Navigator、Screen对象"},
          {"num":"AV","title":"Cookie"},{"num":"AW","title":"XMLHttpRequest对象"},{"num":"AX","title":"同源限制"},
          {"num":"AY","title":"CORS通信"},{"num":"AZ","title":"Storage对象"},{"num":"BA","title":"History对象"},
          {"num":"BB","title":"Location、URL对象"},{"num":"BC","title":"ArrayBuffer、Blob对象"},{"num":"BD","title":"File、FileList、FileReader"},
          {"num":"BE","title":"表单、FormData对象"},{"num":"BF","title":"IndexedDB API"},{"num":"BG","title":"Web Worker"}
        ]},
        {"icon": "el-icon-folder", "name": "事件", 
        "children": [
          {"num":"BH","title":"EventTarget接口"},{"num":"BI","title":"事件模型"},{"num":"BJ","title":"Event对象"},
          {"num":"BK","title":"鼠标事件"},{"num":"BL","title":"键盘事件"},{"num":"BM","title":"进度事件"},
          {"num":"BN","title":"表单事件"},{"num":"BO","title":"触摸事件"},{"num":"BP","title":"拖拉事件"},
          {"num":"BQ","title":"其他常见事件"},{"num":"BR","title":"GlobalEventHandlers接口"}
        ]},
      ],
      fixed:false,
      fixed2:false,
      tabOffsetTop: 0,
      scrollTop: 0
    }
  },
  methods: {
    //保存滚动值，这是兼容的写法
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(this.scrollTop>=70){
        this.fixed = true;
        this.fixed2 = true;
      }else{
        this.fixed = false;
        this.fixed2 = false;
      }
    },
    // 滚动条回到顶部
    backTop () {
      if (this.scrollTop > 10) {
        document.documentElement.scrollTop = 0
      }
    },
    handleChange(val) {
      //console.log(this.catalog[val] == undefined);
      //this.catalog[val].icon = "el-icon-folder-opened";
      if(this.catalog[val] !== undefined){
        this.catalog.forEach((elem)=>{
          elem.icon = "el-icon-folder";
        })
        this.catalog[val].icon = "el-icon-folder-opened";
      }else{
        this.catalog.forEach((elem)=>{
          elem.icon = "el-icon-folder";
        })
      }
    },
    switchMd(val,index){
      this.$router.push({ 
        name: 'artical', 
        path: '/artical',
        params: {id:val}
      });
      this.isActive = index;
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed () {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: homeTitle;
  src: url(../../assets/font/font.ttf)
}
.header-wrap{
  height: 70px;
  background-color: #fff;
  .header-main{
    width: 1580px !important;
    margin:0 auto;
    height:100%;
    h1{
      display: block;
      line-height: 70px;
      font-family: homeTitle;
      color:#000;
      font-size:40px;
      user-select: none;
    }
  }
}
.content{
  position: relative;
  box-sizing: border-box;
  width: 1580px;
  margin: 0 auto;
  padding-left: 280px;
  margin-top:30px;
  .person_card{
    margin-top: 0px;
  }
  .artical{
    width:860px;
    background-color: #fff;
    padding: 20px 50px;
    margin: 0 20px 40px 20px;
    float:left;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: .2);
  }
  #nav-menu{
    width: 300px;
    float: left;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: .2);
    i{
      margin-right:2px;
    }
    .active{
      background-color:#f3f3f3;
    }
  }
}
.fixed{
  position:fixed;
  top:20px;
  right:161px;
}
.fixed2{
  position:fixed;
  top:20px;
  left:161px;
  margin-left: 0;
}
</style>