// import Vue from 'vue'
// const context = require.context('../markdown/JS', true, /\.md$/)
// const lib = [];
// //key是相对路径名
// files.keys().forEach(key => {
//     lib.push(files(key).default.__file);
// })
// lib.forEach(elem =>{
//   // name = elem.split("/");
//   // realname = name[3];
//   //console.log(import(elem));
// })
// export default lib
import A from "@/markdown/JS/types/A.md";
import B from "@/markdown/JS/types/B.md";
import C from "@/markdown/JS/types/C.md";
import D from "@/markdown/JS/types/D.md";
import E from "@/markdown/JS/types/E.md";
import F from "@/markdown/JS/types/F.md";

//const lib = [JS1,JS2];

export {
  A,B,C,D,E,F
};