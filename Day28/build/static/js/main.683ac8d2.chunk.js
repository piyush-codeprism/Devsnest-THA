(this.webpackJsonpday28=this.webpackJsonpday28||[]).push([[0],{11:function(c,e,t){"use strict";t.r(e);var s=t(1),a=t.n(s),n=t(4),i=t.n(n),r=t(3),d=(t(9),t(0));var l=function(){var c=Object(s.useState)(""),e=Object(r.a)(c,2),t=e[0],a=e[1],n=Object(s.useState)({}),i=Object(r.a)(n,2),l=i[0],j=i[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-12 form",children:[Object(d.jsx)("input",{type:"text",value:t,onChange:function(c){a(c.target.value)}}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){fetch("https://api.weatherapi.com/v1/current.json?key=0992870c262c4f55a51161444212008&q="+t).then((function(c){return c.json()})).then((function(c){j(c)}))},children:"submit"})]}),Object(d.jsx)("div",{className:"offset-md-4 col-12 col-md-4 weather",children:Object(d.jsx)("div",{className:"card",children:l.location?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:l.current.condition.icon,alt:""}),Object(d.jsxs)("div",{className:"card-temp",children:[l.current.temp_c,"\xb0"]}),Object(d.jsx)("div",{className:"card-condition",children:l.current.condition.text}),Object(d.jsx)("div",{className:"card-place",children:l.location.name}),Object(d.jsx)("div",{className:"container card-bottom",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:["wind speed",Object(d.jsxs)("div",{className:"card-data",children:[l.current.wind_kph," ",Object(d.jsx)("span",{className:"card-unit",children:"km"})," "]})]}),Object(d.jsxs)("div",{className:"col",children:["Humidity",Object(d.jsxs)("div",{className:"card-data",children:[l.current.humidity,Object(d.jsx)("span",{className:"card-unit",children:"%"})," "]})]}),Object(d.jsxs)("div",{className:"col",children:["Precipitation",Object(d.jsxs)("div",{className:"card-data",children:[l.current.precip_in,Object(d.jsx)("span",{className:"card-unit",children:"%"})," "]})]})]})})]}):Object(d.jsx)("div",{className:"place-not-found",children:"Place not found"})})})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))},9:function(c,e,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.683ac8d2.chunk.js.map