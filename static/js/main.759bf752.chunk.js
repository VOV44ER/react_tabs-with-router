(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(8),i=c.n(s),b=c(4),r=c(1),a=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}];var j=c(2);function l(){var e=a;return Object(j.jsxs)("div",{className:"tabs",style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/tabs/".concat(e.id),style:function(e){return{color:e.isActive?"red":""}},children:e.title})},e.id)}))}),Object(j.jsx)(r.a,{})]})}function o(){var e,t=Object(r.h)(),c=(e=t.tabId,a.find((function(t){return t.id===e}))),s=Object(r.g)();return Object(n.useEffect)((function(){c||s("/tabs")}),[t]),Object(j.jsx)("div",{children:c&&c.content})}c(14),c(15);var d=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)(b.b,{style:function(e){return{color:e.isActive?"blue":""}},className:"navbar-item",to:"/home",children:"Home"}),Object(j.jsx)(b.b,{style:function(e){return{color:e.isActive?"blue":""}},className:"navbar-item",to:"/tabs",children:"Tabs"})]}),Object(j.jsx)(r.a,{})]})};i.a.render(Object(j.jsx)(b.a,{children:Object(j.jsx)(r.d,{children:Object(j.jsxs)(r.b,{path:"/",element:Object(j.jsx)(d,{}),children:[Object(j.jsxs)(r.b,{path:"tabs",element:Object(j.jsx)(l,{}),children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)("main",{style:{padding:"1rem"},children:Object(j.jsx)("p",{children:"Select a Tab!!"})})}),Object(j.jsx)(r.b,{path:":tabId",element:Object(j.jsx)(o,{})})]}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)("h1",{children:"Home Page"})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)("main",{style:{padding:"1rem"},children:Object(j.jsx)("p",{children:"There is nothing here!"})})})]})})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.759bf752.chunk.js.map