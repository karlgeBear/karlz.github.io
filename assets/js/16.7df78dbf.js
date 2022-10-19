(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{458:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("开启TypeScript")]),s._v(" "),t("p",[s._v("学习TypeScript的开启之路")])]),s._v(" "),t("h2",{attrs:{id:"_1-获取typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取typescript"}},[s._v("#")]),s._v(" 1. 获取TypeScript")]),s._v(" "),t("h3",{attrs:{id:"_1-安装typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装typescript"}},[s._v("#")]),s._v(" 1. 安装TypeScript")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install typescript "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看版本号")]),s._v("\nnpm view typescript version\ntsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将ts编译为js")]),s._v("\ntsc fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_2-编译typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译typescript"}},[s._v("#")]),s._v(" 2. 编译TypeScript")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tsc helloworld.ts\n# helloworld.ts => helloworld.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3-自动编译将ts文件编译成js-并且运行js文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-自动编译将ts文件编译成js-并且运行js文件"}},[s._v("#")]),s._v(" 3. 自动编译将ts文件编译成js，并且运行js文件")]),s._v(" "),t("ul",[t("li",[t("ol",[t("li",[s._v("在 package.json 中加入 watch 指令,达到监听 .ts 文件变化，自动重新编译")])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' "scripts": {\n    "watch": "tsc -w"\n  },\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("ol",{attrs:{start:"2"}},[t("li",[s._v("安装 nodemon 插件，起到监听js文件发生改变自动运行的效果。")])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install nodemon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("ol",{attrs:{start:"3"}},[t("li",[s._v("在 package.json中添加指令并配置 nodemon 忽略文件")])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"scripts": {\n    "watch": "tsc -w",\n    "start": "nodemon node fileName.js"\n  },\n  "nodemonConfig": {\n    "ignore": [\n      "data/*"\n    ]\n  },\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("ol",{attrs:{start:"4"}},[t("li",[s._v("打开两个终端分别执行")])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm run watch\nnpm run start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("VS：如果不想两个终端同时使用的话可以安装concurrently,配置如下(之后运行npm run dev就能达到相同的效果)：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"scripts": {\n    "dev:watch": "tsc -w",\n    "dev:start": "nodemon node fileName.js",\n    "dev": "concurrently npm:dev:*"\n  },\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[t("ol",{attrs:{start:"5"}},[t("li",[s._v("最后修改ts文件，保存，自动编译ts为js，且运行js文件")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-typescript-官方在线学习地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-typescript-官方在线学习地址"}},[s._v("#")]),s._v(" 2. TypeScript 官方在线学习地址")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noopener noreferrer"}},[s._v("TypeScript Palyground"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);