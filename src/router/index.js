import Vue from "vue";
import VueRouter from "vue-router";;

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    hidden: true,
    redirect: "home"
  },
  {
    path: "/home",
    name: "Home",
    hidden:false,
    redirect: "all",
    component: () => import("../views/Home/index.vue"),
    children:[
      {
        path: "/all",
        name: "all",
        meta:{
          name: "全部"
        },
        component: () => import("../views/Home/components/all.vue")
      },
      {
        path: "/studies",
        name: "studies",
        meta:{
          name: "知识点"
        },
        component: () => import("../views/Home/components/studies.vue")
      },
      {
        path: "/notes",
        name: "notes",
        meta:{
          name: "笔记"
        },
        component: () => import("../views/Home/components/notes.vue")
      },
      {
        path: "/drafts",
        name: "drafts",
        meta:{
          name: "草稿箱"
        },
        component: () => import("../views/Home/components/drafts.vue")
      }
    ]
  },
  {
    path: "/works",
    name: "Works",
    hidden: true,
    redirect: '/artical/A',
    component: () => import("../views/works/index.vue"),
    children: [
      {
        path: "/artical/:id",
        name: "artical",
        meta: {
          name: "首页"
        },
        //component: () => import("../markdown/JS/A.md"),
        component: () => import("../views/works/components/artical.vue"),
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
