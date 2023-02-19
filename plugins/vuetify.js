import Vue from "vue";
// import Vuetify from "vuetify";
import VueMask from "v-mask";
// import VueToastr from "vue-toastr";
// import VTooltips from "vuetify/lib/components/VTooltip";

// 修理: v-tooltip activator要素はbeforeDestroyで削除され、方向感覚を失わせる効果を生み出します
// const fix = (Component, inlineClassName = "d-inline") => ({
//   extends: Component,
//   methods: {
//     genActivator() {
//       const activatorNode = Component.options.methods.genActivator.call(this);
//       this.activatorNode = [];

//       return activatorNode;
//     },
//   },
//   render(h) {
//     const vnode = Component.options.render.call(this, h);
//     vnode.data.class[inlineClassName] = true;

//     return vnode;
//   },
// });

// Vue.use(Vuetify);
Vue.use(VueMask);
// Vue.component("VTooltipCustom", fix(VTooltips, "v-tooltip--attached"));

// Vue.use(VueToastr, {
//   defaultTimeout: 5000,
//   defaultProgressBar: false,
//   defaultStyle: { "font-size": "18px", top: "50px" },
//   defaultClassNames: ["fadeIn"],
// });
