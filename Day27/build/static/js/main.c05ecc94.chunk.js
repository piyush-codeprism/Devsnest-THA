(this.webpackJsonpday20=this.webpackJsonpday20||[]).push([[0],{21:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(8),r=n.n(a),i=(n(21),n(6)),d=n(3),j=n(1),s=function(){var t=Object(d.b)(),e=Object(c.useState)(""),n=Object(i.a)(e,2),o=n[0],a=n[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"input-area",children:[Object(j.jsx)("input",{type:"text",value:o,onChange:function(t){return a(t.target.value)},placeholder:"Add todo.."}),Object(j.jsx)("button",{onClick:function(){if(""===o)return"";t(function(t){return{type:"ADD_TODO",payload:t}}(o)),a("")},children:"Add Todo"})]})})},O=n(15),b=n(4),u=function(t){var e=t.index,n=t.todo,o=Object(d.b)(),a=Object(c.useState)(b.a),r=Object(i.a)(a,2),s=r[0],u=r[1],l=Object(c.useState)("todo todo-remaining"),x=Object(i.a)(l,2),h=x[0],p=x[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:h,children:[Object(j.jsx)("span",{className:"todo-text",children:n}),Object(j.jsx)(O.a,{onClick:function(){s===b.a?(u(b.b),p("todo todo-done")):s===b.b&&(o({type:"REMOVE_TODO",payload:e}),u(b.a),p("todo todo-remaining"))},icon:s})]})})},l=function(){var t=Object(d.c)((function(t){return t.todos}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"todo-list",children:t.map((function(t,e){return Object(j.jsx)(u,{todo:t,index:e},e)}))})})};var x=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(s,{}),Object(j.jsx)(l,{})]})})},h=n(10),p=n(16),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"ADD_TODO"===e.type?t=[].concat(Object(p.a)(t),[e.payload]):"REMOVE_TODO"===e.type&&(t=t.filter((function(t,n){return n!==e.payload}))),t},m=Object(h.a)({todos:f}),v=Object(h.b)(m);r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(d.a,{store:v,children:Object(j.jsx)(x,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c05ecc94.chunk.js.map