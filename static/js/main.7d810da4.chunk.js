(this.webpackJsonpclevergame=this.webpackJsonpclevergame||[]).push([[0],{19:function(e,c,s){},20:function(e,c,s){},23:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(12),l=s.n(a),r=(s(19),s(20),s(21),s(13)),j=s(9),d=s(7),i=s(8),x=s(4),o=s(10),b=s(0);var m=function(e){function c(e){console.log(e.target.getAttribute("dicenumber"))}return Object(b.jsx)(b.Fragment,{children:1===e.diceResult?Object(b.jsx)("div",{onClick:c,dicenumber:1,className:"dice first-face",style:{backgroundColor:e.bgColor},children:Object(b.jsx)("span",{className:"dot"})}):2===e.diceResult?Object(b.jsxs)("div",{onClick:c,dicenumber:2,className:"dice second-face",style:{backgroundColor:e.bgColor},children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}):3===e.diceResult?Object(b.jsxs)("div",{onClick:c,dicenumber:3,className:"dice third-face",style:{backgroundColor:e.bgColor},children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}):4===e.diceResult?Object(b.jsxs)("div",{onClick:c,dicenumber:4,className:"dice fourth-face",style:{backgroundColor:e.bgColor},children:[Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}),Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]})]}):5===e.diceResult?Object(b.jsxs)("div",{onClick:c,dicenumber:5,className:"dice fifth-face",style:{backgroundColor:e.bgColor},children:[Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}),Object(b.jsx)("div",{className:"column",children:Object(b.jsx)("span",{className:"dot"})}),Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]})]}):6===e.diceResult&&Object(b.jsxs)("div",{onClick:c,dicenumber:6,className:"dice sixth-face",style:{backgroundColor:e.bgColor},children:[Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]}),Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"})]})]})})};var O=function(e){var c=Object(t.useState)(),s=Object(o.a)(c,2);return s[0],s[1],Object(b.jsx)(b.Fragment,{children:e.rolled&&Object(b.jsx)(i.a,{children:["Yellow","Blue","White","Green","Orange","Purple"].map((function(e){return Object(b.jsx)(x.a,{children:Object(b.jsx)(m,{diceResult:Math.floor(6*Math.random())+1,bgColor:e})},e)}))})})},u=s(14);var h=function(){var e=Object(t.useState)(!0),c=Object(o.a)(e,2),s=c[0],n=c[1];return Object(t.useEffect)((function(){!1===s&&n(!0)})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.a,{style:{width:"18rem"},children:Object(b.jsxs)(d.a.Body,{children:[Object(b.jsx)(d.a.Title,{className:"d-flex justify-content-center",children:"How Clever Are You?"}),Object(b.jsx)(O,{rolled:s}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(u.a,{className:"mt-2",onClick:function(){n(!1)},children:"Roll Dice"})})]})})})};var f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(d.a,{style:{width:"18rem",borderColor:"#ffd900",borderWidth:"3px"},children:Object(b.jsx)(i.a,{children:[3,6,5,"X",2,1,"X",5,1,"X",2,4,"X",3,4,6].map((function(e){return Object(b.jsx)(x.a,{xs:3,sm:3,md:3,lg:3,xl:3,xxl:3,children:Object(b.jsx)("div",{className:"gameSquare d-flex justify-content-center",children:e})},e)}))})})})})};var g=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(d.a,{style:{width:"18rem",borderColor:"#0af",borderWidth:"3px"},children:Object(b.jsx)(i.a,{children:["x",2,3,4,5,6,7,8,9,10,11,12].map((function(e){return Object(b.jsx)(x.a,{xs:3,sm:3,md:3,lg:3,xl:3,xxl:3,children:Object(b.jsx)("div",{className:"gameSquare d-flex justify-content-center",children:e})},e)}))})})})})};var N=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(d.a,{style:{borderColor:"green",borderWidth:"3px"},children:Object(b.jsx)(i.a,{children:Object(b.jsx)(x.a,{className:"d-flex justify-content-evenly",children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"gameSquare",children:e},e),Object(b.jsx)("div",{className:"align-self-center",children:"\u2265"})]})}))})})})})})};var v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(d.a,{style:{borderColor:"orange",borderWidth:"3px"},children:Object(b.jsx)(i.a,{children:Object(b.jsx)(x.a,{className:"d-flex justify-content-evenly",children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"gameSquare"},e)})}))})})})})})};var p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(d.a,{style:{borderColor:"purple",borderWidth:"3px"},children:Object(b.jsx)(i.a,{children:Object(b.jsx)(x.a,{className:"d-flex justify-content-evenly",children:[1,2,3,4,5,6,7,8,9,10,11].map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"gameSquare"},e),Object(b.jsx)("div",{className:"align-self-center",children:">"})]})}))})})})})})};var C=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"d-flex justify-content-center mt-5",children:Object(b.jsx)(d.a,{style:{background:"rgba(255, 255, 255, 0.25)"},children:Object(b.jsxs)(i.a,{className:"mt-5 mb-5",children:[Object(b.jsx)(x.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,className:"d-flex justify-content-center",children:Object(b.jsx)(h,{})}),Object(b.jsx)(x.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(b.jsx)(f,{})}),Object(b.jsx)(x.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(b.jsx)(g,{})}),Object(b.jsx)(x.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(b.jsx)(N,{})}),Object(b.jsx)(x.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(b.jsx)(v,{})}),Object(b.jsx)(x.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(b.jsx)(p,{})})]})})})})};var y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(r.a,{fluid:!0,className:"d-flex justify-content-center",children:Object(b.jsx)("h1",{style:{color:"white"},children:"Clever Game"})}),Object(b.jsx)(C,{})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(c){var s=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),t(e),n(e),a(e),l(e)}))};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),k()}},[[23,1,2]]]);
//# sourceMappingURL=main.7d810da4.chunk.js.map