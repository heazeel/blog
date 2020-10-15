<template>
  <div class="markdown-body">
    <component :is="currentComponent"> </component>
  </div>
</template>
<script>
//
// {
//   JS_A,JS_B,JS_C,JS_D,JS_E,JS_F,
//   JS_G,JS_H,JS_I,JS_J,JS_K,
//   JS_L,JS_M,JS_N,JS_O,
//   JS_P,JS_Q,JS_R,JS_S,JS_T,JS_U,JS_V,JS_W,JS_X,JS_Y,JS_Z,
//   JS_AA,JS_AB,JS_AC,JS_AD,JS_AE,
//   JS_AF,JS_AG,JS_AH,
//   JS_AI,JS_AJ,JS_AK,JS_AL,JS_AM,JS_AN,JS_AO,JS_AP,JS_AQ,JS_AR,
//   JS_AS,JS_AT,JS_AU,JS_AV,JS_AW,JS_AX,JS_AY,JS_AZ,JS_BA,JS_BB,JS_BC,JS_BD,JS_BE,JS_BF,JS_BG,
//   JS_BH,JS_BI,JS_BJ,JS_BK,JS_BL,JS_BM,JS_BN,JS_BO,JS_BP,JS_BQ,JS_BR
// }
// from '@/utils/import.js';
export default {
  data() {
    return {
      currentComponent: this.$route.params.id
    };
  },
  components: {
    // JS_A: () => import("@/markdown/JS/1.types/A.md"),
    // JS_B: () => import("@/markdown/JS/1.types/B.md"),
    // JS_C: () => import("@/markdown/JS/1.types/C.md"),
    // JS_D: () => import("@/markdown/JS/1.types/D.md"),
    // JS_E: () => import("@/markdown/JS/1.types/E.md"),
    // JS_F: () => import("@/markdown/JS/1.types/F.md"),
    JS_G: () => import("@/markdown/JS/2.operators/G.md"),
    JS_H: () => import("@/markdown/JS/2.operators/H.md"),
    JS_I: () => import("@/markdown/JS/2.operators/I.md"),
    JS_J: () => import("@/markdown/JS/2.operators/J.md"),
    JS_K: () => import("@/markdown/JS/2.operators/K.md"),
    JS_L: () => import("@/markdown/JS/3.features/L.md"),
    JS_M: () => import("@/markdown/JS/3.features/M.md"),
    JS_N: () => import("@/markdown/JS/3.features/N.md"),
    JS_O: () => import("@/markdown/JS/3.features/O.md"),
    JS_P: () => import("@/markdown/JS/4.stdlib/P.md"),
    JS_Q: () => import("@/markdown/JS/4.stdlib/Q.md"),
    JS_R: () => import("@/markdown/JS/4.stdlib/R.md"),
    JS_S: () => import("@/markdown/JS/4.stdlib/S.md"),
    JS_T: () => import("@/markdown/JS/4.stdlib/T.md"),
    JS_U: () => import("@/markdown/JS/4.stdlib/U.md"),
    JS_V: () => import("@/markdown/JS/4.stdlib/V.md"),
    JS_W: () => import("@/markdown/JS/4.stdlib/W.md"),
    JS_X: () => import("@/markdown/JS/4.stdlib/X.md"),
    JS_Y: () => import("@/markdown/JS/4.stdlib/Y.md"),
    JS_Z: () => import("@/markdown/JS/4.stdlib/Z.md"),
    JS_AA: () => import("@/markdown/JS/5.oop/AA.md"),
    JS_AB: () => import("@/markdown/JS/5.oop/AB.md"),
    JS_AC: () => import("@/markdown/JS/5.oop/AC.md"),
    JS_AD: () => import("@/markdown/JS/5.oop/AD.md"),
    JS_AE: () => import("@/markdown/JS/5.oop/AE.md"),
    JS_AF: () => import("@/markdown/JS/6.async/AF.md"),
    JS_AG: () => import("@/markdown/JS/6.async/AG.md"),
    JS_AH: () => import("@/markdown/JS/6.async/AH.md"),
    JS_AI: () => import("@/markdown/JS/7.dom/AI.md"),
    JS_AJ: () => import("@/markdown/JS/7.dom/AJ.md"),
    JS_AK: () => import("@/markdown/JS/7.dom/AK.md"),
    JS_AL: () => import("@/markdown/JS/7.dom/AL.md"),
    JS_AM: () => import("@/markdown/JS/7.dom/AM.md"),
    JS_AN: () => import("@/markdown/JS/7.dom/AN.md"),
    JS_AO: () => import("@/markdown/JS/7.dom/AO.md"),
    JS_AP: () => import("@/markdown/JS/7.dom/AP.md"),
    JS_AQ: () => import("@/markdown/JS/7.dom/AQ.md"),
    JS_AR: () => import("@/markdown/JS/7.dom/AR.md"),
    JS_AS: () => import("@/markdown/JS/8.bom/AS.md"),
    JS_AT: () => import("@/markdown/JS/8.bom/AT.md"),
    JS_AU: () => import("@/markdown/JS/8.bom/AU.md"),
    JS_AV: () => import("@/markdown/JS/8.bom/AV.md"),
    JS_AW: () => import("@/markdown/JS/8.bom/AW.md"),
    JS_AX: () => import("@/markdown/JS/8.bom/AX.md"),
    JS_AY: () => import("@/markdown/JS/8.bom/AY.md"),
    JS_AZ: () => import("@/markdown/JS/8.bom/AZ.md"),
    JS_BA: () => import("@/markdown/JS/8.bom/BA.md"),
    JS_BB: () => import("@/markdown/JS/8.bom/BB.md"),
    JS_BC: () => import("@/markdown/JS/8.bom/BC.md"),
    JS_BD: () => import("@/markdown/JS/8.bom/BD.md"),
    JS_BE: () => import("@/markdown/JS/8.bom/BE.md"),
    JS_BF: () => import("@/markdown/JS/8.bom/BF.md"),
    JS_BG: () => import("@/markdown/JS/8.bom/BG.md"),
    JS_BH: () => import("@/markdown/JS/9.events/BH.md"),
    JS_BI: () => import("@/markdown/JS/9.events/BI.md"),
    JS_BJ: () => import("@/markdown/JS/9.events/BJ.md"),
    JS_BK: () => import("@/markdown/JS/9.events/BK.md"),
    JS_BL: () => import("@/markdown/JS/9.events/BL.md"),
    JS_BM: () => import("@/markdown/JS/9.events/BM.md"),
    JS_BN: () => import("@/markdown/JS/9.events/BN.md"),
    JS_BO: () => import("@/markdown/JS/9.events/BO.md"),
    JS_BP: () => import("@/markdown/JS/9.events/BP.md"),
    JS_BQ: () => import("@/markdown/JS/9.events/BQ.md"),
    JS_BR: () => import("@/markdown/JS/9.events/BR.md")
    // JS_A,JS_B,JS_C,JS_D,JS_E,JS_F,
    // JS_G,JS_H,JS_I,JS_J,JS_K,
    // JS_L,JS_M,JS_N,JS_O,
    // JS_P,JS_Q,JS_R,JS_S,JS_T,JS_U,JS_V,JS_W,JS_X,JS_Y,JS_Z,
    // JS_AA,JS_AB,JS_AC,JS_AD,JS_AE,
    // JS_AF,JS_AG,JS_AH,
    // JS_AI,JS_AJ,JS_AK,JS_AL,JS_AM,JS_AN,JS_AO,JS_AP,JS_AQ,JS_AR,
    // JS_AS,JS_AT,JS_AU,JS_AV,JS_AW,JS_AX,JS_AY,JS_AZ,JS_BA,JS_BB,JS_BC,JS_BD,JS_BE,JS_BF,JS_BG,
    // JS_BH,JS_BI,JS_BJ,JS_BK,JS_BL,JS_BM,JS_BN,JS_BO,JS_BP,JS_BQ,JS_BR
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
