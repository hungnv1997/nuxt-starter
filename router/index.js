import Vue from "vue";
import Router from "vue-router";
import KSBM000 from "~/pages/menu/KSBM000.vue";
// import KSBM000A from "~/pages/menu/KSBM000A.vue";
// import KSBM001 from "~/pages/menu/KSBM001.vue";
// import KSBM011 from "~/pages/master/KSBM011.vue";
// import KSBM012 from "~/pages/master/KSBM012.vue";
// import KSBM013 from "~/pages/master/KSBM013.vue";
// import PLAN_ENTRY from "~/pages/goods-receipt/PlanEntry.vue";
// import SKSBM104 from "~/pages/goods-receipt/SKSBM104.vue";
// import RESULT_UPDATE_RECEIPT from "~/pages/goods-receipt/ResultUpdate.vue";
// import SKSBM109 from "~/pages/goods-receipt/SKSBM109.vue";
// import SKSBM110 from "~/pages/goods-receipt/SKSBM110.vue";
// import KSBM202 from "~/pages/goods-issue/KSBM202.vue";
// import KSBM203 from "~/pages/goods-issue/KSBM203.vue";
// import KSBM201 from "~/pages/goods-issue/KSBM201.vue";
// import KSBM206 from "~/pages/goods-issue/KSBM206.vue";
import { CONSTANT } from "~/assets/js/constant.js";

Vue.use(Router);

const routes = [
  {
    path: CONSTANT.ROUTER.MENU.KSBM000,
    component: KSBM000,
  },
  // {
  //   name: CONSTANT.ROUTER.MENU.KSBM000A,
  //   path: CONSTANT.ROUTER.MENU.KSBM000A,
  //   component: KSBM000A,
  // },
  // {
  //   path: CONSTANT.ROUTER.MENU.KSBM001,
  //   component: KSBM001,
  // },
  // {
  //   path: CONSTANT.ROUTER.MASTER.KSBM011,
  //   component: KSBM011,
  // },
  // {
  //   path: CONSTANT.ROUTER.MASTER.KSBM012,
  //   component: KSBM012,
  // },
  // {
  //   path: CONSTANT.ROUTER.MASTER.KSBM013,
  //   component: KSBM013,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM101,
  //   component: PLAN_ENTRY,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM102,
  //   component: PLAN_ENTRY,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM103,
  //   component: PLAN_ENTRY,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM104,
  //   component: SKSBM104,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM105,
  //   component: RESULT_UPDATE_RECEIPT,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM106,
  //   component: RESULT_UPDATE_RECEIPT,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM107,
  //   component: RESULT_UPDATE_RECEIPT,
  // },

  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM109,
  //   component: SKSBM109,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_RECEIPT.SKSBM110,
  //   component: SKSBM110,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_ISSUE.KSBM202,
  //   component: KSBM202,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_ISSUE.KSBM203,
  //   component: KSBM203,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_ISSUE.KSBM201,
  //   component: KSBM201,
  // },
  // {
  //   path: CONSTANT.ROUTER.GOODS_ISSUE.KSBM206,
  //   component: KSBM206,
  // },
];

const router = new Router({
  mode: "history",
  routes,
});

// router.afterEach((to) => {
// });

export function createRouter() {
  return router;
}
