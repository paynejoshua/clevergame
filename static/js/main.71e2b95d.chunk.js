(this.webpackJsonpclevergame=this.webpackJsonpclevergame||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),l=n(14),a=n.n(l),s=(n(31),n(32),n(33),n(15)),i=n(10),o=n(17),u=n(16),d=n(7),j=n(8),b=n(4),h={BlankDice:n.p+"static/media/BlankDice.c9a23931.svg",OneDice:n.p+"static/media/1Dice.4317f750.svg",TwoDice:n.p+"static/media/2Dice.ecbbdad5.svg",ThreeDice:n.p+"static/media/3Dice.60f30f07.svg",FourDice:n.p+"static/media/4Dice.fea982a2.svg",FiveDice:n.p+"static/media/5Dice.51fc3d70.svg",SixDice:n.p+"static/media/6Dice.6d064eb7.svg"},O=1,f=2,x=3,m="White",v="Yellow",g="Blue",S="Green",D="Orange",p="Purple",y=1,C=2,N=3,w=4,k=n(1);var P=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("img",{src:function(){switch(e.dice.number){case 1:return h.OneDice;case 2:return h.TwoDice;case 3:return h.ThreeDice;case 4:return h.FourDice;case 5:return h.FiveDice;case 6:return h.SixDice;default:return""}}(),alt:"".concat(e.dice.number," dice"),className:"dice ".concat(e.dice.markedForPlatter?"markForPlatter":"diceBorder","  ").concat(e.turnState===f?"selectedPulse":""," ").concat(e.disabledClick?"nonSelectable":""),onClick:function(){return t=e.dice,e.plusOneActivated&&e.setPlusOneActivated(!1),void e.onDiceSelect(t);var t},style:{backgroundColor:e.dice.color}})})};var B=function(e){return Object(k.jsx)(k.Fragment,{children:Object(s.a)(Array(3)).map((function(t,n){return Object(k.jsx)("div",{children:e.selectedDice.length>n?Object(k.jsx)("div",{className:"".concat(e.plusOneActivated?"selectedPulse":""),children:Object(k.jsx)(P,{onDiceSelect:e.onDiceSelect,plusOneActivated:e.plusOneActivated,setPlusOneActivated:e.setPlusOneActivated,dice:e.selectedDice[n]})}):Object(k.jsx)("div",{className:"gameSquare",style:{backgroundColor:"white"}})},n)}))})};var F=function(e){var t=e.availableDices;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{children:t.map((function(t,n){return Object(k.jsx)(b.a,{xs:4,children:Object(k.jsx)("div",{className:"d-flex justify-content-center ".concat(e.plusOneActivated?"selectedPulse":""),children:Object(k.jsx)(P,{turnState:e.turnState,onDiceSelect:e.onDiceSelect,dice:t})})},n)}))})})};var A=function(e){var t=function(){return e.availableDices.length>0&&e.rollNumber<3};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.a,{children:Object(k.jsxs)(d.a.Body,{children:[Object(k.jsx)(d.a.Title,{className:"d-flex justify-content-center",children:"How Clever Are You?"}),Object(k.jsx)(F,{plusOneActivated:e.plusOneActivated,turnState:e.turnState,availableDices:e.availableDices,onDiceSelect:e.onDiceSelect}),Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(u.a,{disabled:e.turnState!==O,className:"mt-2 ".concat(e.turnState===O?"selectedPulse":""),onClick:t()?e.onRoll:e.onTurnComplete,children:t()?"Roll Dice":"Reset Dice"})})]})})})},E=n(13),T=n(12),W=[3,6,5,"X",2,1,"X",5,1,"X",2,4,"X",3,4,6],R=[1,2,3,4,5,6,7,8,9,10,11,12],z=[1,2,3,4,5,1,2,3,4,5,6],G=[1,2,3,4,5,6,7,8,9,10,11],Y=[1,2,3,4,5,6,7,8,9,10,11],q=function(e,t,n,c){return X(e,c.yellowState)||L(e,t,n,c.blueState)||Q(e,c.greenState)||Z(e,c.orangeState)||ee(e,c.purpleState)},M=function(e,t,n){return t===x&&J(e,n)},X=function(e,t){for(var n=0;n<W.length;n++)if(J(W[n],e)&&void 0===t[n])return!0;return!1},J=function(e,t){return t.number===e&&("Yellow"===t.color||"White"===t.color)},H=function(e,t,n,c,r){return r===x&&I(e,t,n,c)},L=function(e,t,n,c){for(var r=0;r<R.length;r++)if(I(R[r],e,t,n)&&void 0===c[r])return!0;return!1},I=function(e,t,n,c){return n.number+c.number===e&&("Blue"===t.color||"White"===t.color)},K=function(e,t,n,c,r){var l=c.length;return n===x&&r===l&&U(e,t)},Q=function(e,t){var n=t.length;return!!(n<z.length&&U(z[n],e))},U=function(e,t){return("Green"===t.color||"White"===t.color)&&t.number>=e},V=function(e,t,n,c){var r=n.length;return t===x&&c===r&&$(e)},Z=function(e,t){return!!(t.length<G.length&&$(e))},$=function(e){return"Orange"===e.color||"White"===e.color},_=function(e,t,n,c){var r=n.length;return t===x&&c===r&&te(e,n)},ee=function(e,t){return!!(t.length<Y.length&&te(e,t))},te=function(e,t){return("Purple"===e.color||"White"===e.color)&&(0===t.length||e.number>t[t.length-1].number||6===t[t.length-1].number)};var ne=function(e){return Object(k.jsx)(T.a,{onClick:e.onClick,className:"mt-3",children:Object(k.jsx)(d.a,{style:{height:"20rem",borderColor:"#ffd900",borderWidth:"3px"},children:Object(k.jsx)(j.a,{children:W.map((function(t,n){return Object(k.jsx)(b.a,{xs:3,sm:3,md:3,lg:3,xl:3,xxl:3,children:Object(k.jsx)("div",{className:"d-flex justify-content-center",children:e.state.length>n&&e.state[n]?Object(k.jsx)(P,{disabledClick:!0,dice:e.state[n]}):Object(k.jsx)("div",{onClick:function(){return function(t,n){if(M(t,e.turnState,e.lastSelectedDice)){var c=Object(E.a)({},e.lastSelectedDice);c.color="Yellow",c.isPlaced=!0,e.state[n]=c,e.onDicePlaced(e.lastSelectedDice,"Yellow"),e.state[0]&&e.state[5]&&e.state[10]&&e.state[15]&&e.onBonusEarned(C),e.state[13]&&e.state[14]&&e.state[15]&&e.onBonusEarned(w)}}(t,n)},style:{fontSize:"2rem"},className:"gameSquare d-flex justify-content-center ".concat(M(t,e.turnState,e.lastSelectedDice)?"selectedPulse yellowBorder":""),children:t})})},n)}))})})})},ce=n.p+"static/media/BlueWhiteCombo.e12a8c30.svg";var re=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{height:"20rem",borderColor:"#0af",borderWidth:"3px"},children:Object(k.jsx)(j.a,{children:R.map((function(t,n){return Object(k.jsx)(b.a,{xs:3,children:Object(k.jsx)("div",{className:"d-flex justify-content-center",children:1===t?Object(k.jsx)("img",{alt:"blue and white dice only in this field",src:ce}):e.state.length>n&&e.state[n]?Object(k.jsx)("div",{className:"gameSquare d-flex justify-content-center",style:{backgroundColor:"blue",color:"white",fontSize:"2rem"},children:t}):Object(k.jsx)("div",{onClick:function(){return function(e,t,n){if(H(e,n.lastSelectedDice,n.blueDice,n.whiteDice,n.turnState)){var c=Object(E.a)({},n.lastSelectedDice);c.color="Blue",c.index=t,n.state[t]=c,n.onDicePlaced(n.lastSelectedDice,"Blue"),n.state[4]&&n.state[8]?n.onBonusEarned(y):n.state[3]&&n.state[7]&&n.state[11]?n.onBonusEarned(C):n.state[8]&&n.state[9]&&n.state[10]&&n.state[11]&&n.onBonusEarned(w)}}(t,n,e)},style:{fontSize:"2rem"},className:"gameSquare d-flex justify-content-center ".concat(H(t,e.lastSelectedDice,e.blueDice,e.whiteDice,e.turnState)?"selectedPulse blueBorder":""),children:t})})},t)}))})})})})};var le=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{borderColor:"green",borderWidth:"3px"},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{xs:3,md:2,lg:1,className:"d-flex justify-content-center",children:Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:"->"})}),z.map((function(t,n){return Object(k.jsx)(b.a,{className:"d-flex justify-content-center",xs:3,md:2,lg:1,children:e.state.length>n?Object(k.jsx)("div",{className:"greenSelected d-inline-block text-center",children:"X"}):Object(k.jsxs)("div",{onClick:function(){return function(e,t,n){if(K(e,n.lastSelectedDice,n.turnState,n.state,t)){var c=Object(E.a)({},n.lastSelectedDice);c.color="Green",n.state.push(c),n.onDicePlaced(n.lastSelectedDice,"Green"),9===t?n.onBonusEarned(y):3===t?n.onBonusEarned(C):6===t&&n.onBonusEarned(w)}}(t,n,e)},style:{fontSize:"2rem"},className:"gameSquare d-inline-block ".concat(K(t,e.lastSelectedDice,e.turnState,e.state,n)?"selectedPulse greenBorder":""),children:[t,Object(k.jsx)("span",{children:"\u2265"})]})},n)}))]})})})})};var ae=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{borderColor:"orange",borderWidth:"3px"},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{xs:3,md:2,lg:1,className:"d-flex justify-content-center",children:Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:"->"})}),G.map((function(t,n){return Object(k.jsx)(b.a,{xs:3,md:2,lg:1,children:Object(k.jsx)("div",{className:"d-flex justify-content-center",children:e.state.length>n?Object(k.jsx)(P,{disabledClick:!0,dice:e.state[n]}):Object(k.jsx)("div",{onClick:function(){return function(t){if(V(e.lastSelectedDice,e.turnState,e.state,t)){var n=Object(E.a)({},e.lastSelectedDice);n.color="Orange",e.state.push(n),e.onDicePlaced(e.lastSelectedDice,"Orange",t),2===t?e.onBonusEarned(y):5===t?e.onBonusEarned(C):7===t&&e.onBonusEarned(w)}}(n)},className:"gameSquare d-inline-block ".concat(V(e.lastSelectedDice,e.turnState,e.state,n)?"selectedPulse orangeBorder":""),style:{textAlign:"center",fontSize:"2rem",color:"orange",fontWeight:"bold"},children:3===n||6===n||8===n?"x2":10===n?"x3":""})})},n)}))]})})})})};var se=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{borderColor:"purple",borderWidth:"3px"},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{xs:3,md:2,lg:1,className:"d-flex justify-content-center",children:Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:"->"})}),Y.map((function(t,n){return Object(k.jsx)(b.a,{className:"d-flex justify-content-center",xs:3,md:2,lg:1,children:e.state.length>n?Object(k.jsx)(P,{disabledClick:!0,dice:e.state[n]}):Object(k.jsx)("div",{onClick:function(){return function(t){if(_(e.lastSelectedDice,e.turnState,e.state,t)){var n=Object(E.a)({},e.lastSelectedDice);n.color="Purple",e.state.push(n),e.onDicePlaced(e.lastSelectedDice,"Purple"),2===t||7===t?e.onBonusEarned(y):4===t||10===t?e.onBonusEarned(C):6===t&&e.onBonusEarned(w)}}(n)},style:{fontSize:"2rem",textAlign:"center"},className:"gameSquare d-inline-block ".concat(_(e.lastSelectedDice,e.turnState,e.state,n)?"selectedPulse purpleBorder":""),children:1===t?"":Object(k.jsx)("span",{children:">"})})},t)}))]})})})})};var ie=function(e){function t(e){switch(e){case 1:return h.OneDice;case 2:return h.TwoDice;case 3:return h.ThreeDice;case 4:return h.FourDice;case 5:return h.FiveDice;case 6:return h.SixDice;default:return""}}return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d.a,{style:{width:"18rem",height:"6rem"},children:Object(k.jsxs)(d.a.Body,{children:[Object(k.jsx)(d.a.Title,{children:"Left Over Dice will go here"}),Object(k.jsx)("div",{className:"d-flex flex-row justify-content-around",children:Object(s.a)(Array(5)).map((function(n,c){return Object(k.jsx)("div",{xs:2,children:e.leftOverDice.length>c?Object(k.jsx)("img",{onClick:function(){return function(t,n){if(e.plusOneActivated){var c={color:n,number:t};e.onDiceSelect(c),e.setPlusOneActivated(!1)}}(e.leftOverDice[c].number,e.leftOverDice[c].color)},src:t(e.leftOverDice[c].number),alt:"".concat(e.leftOverDice[c].number," dice"),className:"dice-small ".concat(e.plusOneActivated?"selectedPulse":""),style:{backgroundColor:e.leftOverDice[c].color}}):Object(k.jsx)("div",{style:{backgroundColor:"white"}})},c)}))})]})})})},oe={yellowState:[],blueState:[],greenState:[],orangeState:[],purpleState:[],reRollState:[],plusOneState:[]},ue=function(e){var t=0;return void 0!==e[0]&&void 0!==e[4]&&void 0!==e[8]&&(t+=10),void 0!==e[1]&&void 0!==e[5]&&void 0!==e[13]&&(t+=14),void 0!==e[2]&&void 0!==e[10]&&void 0!==e[14]&&(t+=16),void 0!==e[7]&&void 0!==e[11]&&void 0!==e[15]&&(t+=20),console.log("yellow",t),t},de=function(e){for(var t=0,n=0;n<e.length;n++)void 0!==e[n]&&t++;if(0===t)return 0;var c=t-1;return console.log("blue",c*(c+1)/2+1),c*(c+1)/2+1},je=function(e){for(var t=0,n=0;n<e.length;n++)void 0!==n&&t++;return console.log("green",t*(t+1)/2),t*(t+1)/2},be=function(e){for(var t=0,n=0;n<e.length&&void 0!==e[n];n++)t+=3===n||6===n||8===n?2*e[n].number:10===n?3*e[n].number:e[n].number;return console.log("orange",t),t},he=function(e){for(var t=0,n=0;n<e.length&&void 0!==e[n];n++)t+=e[n].number;return console.log("purple",t),t},Oe=n(18);var fe=function(e){var t=function(t){for(var n=0;n<e.state.length;n++)if(!0===e.state[n])return n===t},n=function(n){return e.turnState===f&&(e.turnState===f&&t(n))};return console.log("reRoll",e.state),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{borderColor:"white",borderWidth:"3px"},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{className:"d-flex align-items-center",children:Object(k.jsx)("div",{children:"ReRoll"})}),[1,2,3,4,5,6,7].map((function(c,r){return Object(k.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(k.jsx)("div",{onClick:function(){return function(n){t(n)&&(e.setRollNumber((function(e){return e-1})),e.setTurnState(O),e.state[n]=!1)}(r)},className:"".concat(n(r)?"selectedPulse":""," gameCircle d-flex justify-content-center"),style:e.state.length>r&&!0===e.state[r]?{backgroundColor:"green"}:e.state.length>r&&!1===e.state[r]?{backgroundColor:"red"}:{}})},r)}))]})})})})};var xe=function(e){var t=function(t){for(var n=0;n<e.state.length;n++)if(!0===e.state[n])return n===t},n=function(n){return console.log("plus one pulse",e.turnState),e.turnState===O&&(e.turnState===O&&t(n))};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{className:"mt-3",children:Object(k.jsx)(d.a,{style:{borderColor:"white",borderWidth:"3px"},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(b.a,{className:"d-flex align-items-center",children:Object(k.jsx)("div",{children:"Plus One"})}),[1,2,3,4,5,6,7].map((function(c,r){return Object(k.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(k.jsx)("div",{onClick:function(){return function(n){e.turnState===O&&t(n)&&(e.setTurnState(f),e.setPlusOneActivated(!0),e.state[n]=!1)}(r)},className:"".concat(n(r)?"selectedPulse":""," gameCircle d-flex justify-content-center"),style:e.state.length>r&&!0===e.state[r]?{backgroundColor:"green"}:e.state.length>r&&!1===e.state[r]?{backgroundColor:"red"}:{}})},r)}))]})})})})},me=(n(35),n(25)),ve=n(26);var ge=function(){var e=Object(c.useState)(O),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(c.useState)([]),a=Object(i.a)(l,2),h=a[0],P=a[1],F=Object(c.useState)([]),E=Object(i.a)(F,2),T=E[0],W=E[1],R=Object(c.useState)([]),z=Object(i.a)(R,2),G=z[0],Y=z[1],M=Object(c.useState)(oe),X=Object(i.a)(M,2),J=X[0],H=X[1],L=Object(c.useState)(),I=Object(i.a)(L,2),K=I[0],Q=I[1],U=Object(c.useState)(),V=Object(i.a)(U,2),Z=V[0],$=V[1],_=Object(c.useState)(),ee=Object(i.a)(_,2),te=ee[0],ce=ee[1],ge=Object(c.useState)(0),Se=Object(i.a)(ge,2),De=Se[0],pe=Se[1],ye=Object(c.useState)(0),Ce=Object(i.a)(ye,2),Ne=Ce[0],we=Ce[1],ke=Object(c.useState)(0),Pe=Object(i.a)(ke,2),Be=Pe[0],Fe=Pe[1],Ae=Object(c.useState)(),Ee=Object(i.a)(Ae,2),Te=Ee[0],We=Ee[1],Re=Object(c.useState)(!1),ze=Object(i.a)(Re,2),Ge=ze[0],Ye=ze[1],qe=Object(c.useState)(),Me=Object(i.a)(qe,2),Xe=Me[0],Je=Me[1],He=Object(c.useState)(0),Le=Object(i.a)(He,2),Ie=Le[0],Ke=Le[1],Qe=function(){n===O&&(pe((function(e){return e+1})),_e(),r(f))},Ue=function(){ce(void 0)},Ve=function(e){if(console.log("heres your dice",e),n===f)if(q(e,Z,K,J)){var t=Object(s.a)(T);t.push(e),W(t);var c=h.filter((function(t){return t.color!==e.color}));P(c),Ze(e,c),r(x)}else ce(e);else if(n===x){var l=T[T.length-1],a=T.filter((function(e){return e.color!==l.color}));if(e.markedForPlatter=!1,q(e,Z,K,J)){a.push(e),W(a);var i=h.filter((function(t){return t.color!==e.color}));i.push(l),P(i),Ze(e,i)}else ce(e)}else if(n===O&&!Ge)return},Ze=function(e,t){for(var n=Object(s.a)(t),c=0,r=0;r<n.length;r++)e.number>n[r].number?(n[r].markedForPlatter=!0,c++):n[r].markedForPlatter=!1;c>0&&Object(Oe.b)("Just be aware that the dice in red will be moved to the left over pile. You can still select these dice as your choice if you want. Just make sure to make the most clever choice."),P(n)},$e=function(e,t){for(var n=Object(s.a)(G),c=0;c<t.length;c++)e.number>t[c].number&&n.push(t[c]);Y(n);var r=Object(s.a)(t);r=r.filter((function(e){return!n.includes(e)})),P(r)},_e=function(){for(var e=[],t=0;t<h.length;t++){var n=h[t];n.number=Math.floor(6*Math.random())+1,e.push(n),"White"===n.color?Q(n):"Blue"===n.color&&$(n)}P(e)},et=function(e,t,n){Fe(function(e){return ue(e.yellowState)+de(e.blueState)+je(e.greenState)+be(e.orangeState)+he(e.purpleState)}(J)),Je(function(e){var t=[ue(e.yellowState),de(e.blueState),je(e.greenState),be(e.orangeState),he(e.purpleState)];return Math.min.apply(Math,t)}(J)),$e(e,h),r(O),Ne>Te&&Fe((function(e){return e+Ie*Xe})),console.log("lowest score",Xe)},tt=function(){var e=Ne+1;pe(0),we(e),Y([]),W([]),nt(),1===e||3===e?ct(y):2===e&&ct(C)},nt=function(){for(var e=[m,v,g,S,D,p],t=[],n=0;n<e.length;n++)t.push({color:e[n],number:Math.floor(6*Math.random())+1});P(t)},ct=function(e,t,n){if(e===y){Ne>1&&Object(Oe.b)("Congratulations you have earned a reroll bonus!");var c=J;c.reRollState.push(!0),H(c)}else if(e===C){Object(Oe.b)("Congratulations you have earned a plus one bonus!");var r=J;r.plusOneState.push(!0),H(r)}else e===N||e===w&&(Object(Oe.b)("Congratulations you have earned a fox bonus!"),Ke((function(e){return e+1})))};return Object(c.useEffect)((function(){We(6),tt()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Oe.a,{position:"top-right",autoClose:5e3,pauseOnHover:!0,closeOnClick:!0}),Object(k.jsxs)(d.a,{style:{background:"rgba(255, 255, 255, 0.25)",width:"100%",height:"auto"},children:[Object(k.jsxs)(j.a,{children:[Object(k.jsxs)(b.a,{xs:11,children:[Object(k.jsx)(d.a.Title,{className:"text-center",style:{color:"white",fontSize:"4rem"},children:"Clever Game"}),Object(k.jsxs)(d.a.Title,{style:{color:"white"},children:["Score: ",Be]}),Object(k.jsxs)(d.a.Title,{style:{color:"white"},children:["Round: ",Ne," / ",Te]})]}),Object(k.jsx)(b.a,{xs:1,children:Object(k.jsx)(me.a,{size:"5x",color:"white",icon:ve.a})})]}),Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{xs:12,md:12,lg:5,children:Object(k.jsx)(fe,{state:J.reRollState,turnState:n,setTurnState:r,onDiceRoll:Qe,setRollNumber:pe})})}),Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{xs:12,md:12,lg:5,children:Object(k.jsx)(xe,{state:J.plusOneState,turnState:n,setTurnState:r,rollNumber:De,setPlusOneActivated:Ye})})}),Object(k.jsxs)(j.a,{className:"mt-5 mb-5",children:[Object(k.jsxs)(b.a,{xs:12,md:6,lg:6,className:"d-flex flex-row",children:[Object(k.jsx)("div",{children:Object(k.jsx)(B,{onDiceSelect:Ve,selectedDice:T,plusOneActivated:Ge,setPlusOneActivated:Ye})}),Object(k.jsx)(A,{plusOneActivated:Ge,turnState:n,onRoll:Qe,onTurnComplete:tt,rollNumber:De,round:Ne,availableDices:h,onDiceSelect:Ve})]}),Object(k.jsx)(b.a,{xs:12,md:6,lg:6,className:"d-flex justify-content-center",children:Object(k.jsx)(ie,{onDiceSelect:Ve,leftOverDice:G,plusOneActivated:Ge,setPlusOneActivated:Ye})}),Object(k.jsx)(b.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(k.jsx)(ne,{onBonusEarned:ct,turnState:n,lastSelectedDice:T[T.length-1],state:J.yellowState,onDicePlaced:et})}),Object(k.jsx)(b.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(k.jsx)(re,{onBonusEarned:ct,whiteDice:K,blueDice:Z,turnState:n,lastSelectedDice:T[T.length-1],state:J.blueState,onDicePlaced:et})}),Object(k.jsx)(b.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(k.jsx)(le,{onBonusEarned:ct,turnState:n,lastSelectedDice:T[T.length-1],state:J.greenState,onDicePlaced:et})}),Object(k.jsx)(b.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(k.jsx)(ae,{onBonusEarned:ct,turnState:n,lastSelectedDice:T[T.length-1],state:J.orangeState,onDicePlaced:et})}),Object(k.jsx)(b.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(k.jsx)(se,{onBonusEarned:ct,turnState:n,lastSelectedDice:T[T.length-1],state:J.purpleState,onDicePlaced:et})})]})]}),Object(k.jsxs)(o.a,{show:void 0!==te,onHide:function(){return Ue()},children:[Object(k.jsx)(o.a.Body,{children:"Do you want to select this dice? There is no place to put it"}),Object(k.jsx)(u.a,{onClick:function(){return function(){var e=Object(s.a)(T);e.push(te),W(e);var t=h.filter((function(e){return e.color!==te.color}));P(t),$e(te,t),r(O),ce(void 0)}()},children:"Yes"}),Object(k.jsx)(u.a,{onClick:function(){return Ue()},children:"No"})]}),Object(k.jsxs)(o.a,{show:Ne>Te,children:[Object(k.jsx)(o.a.Title,{children:"Game Over"}),Object(k.jsxs)(o.a.Body,{children:["Great Game! You scored: ",Be," points"]}),Object(k.jsx)(u.a,{onClick:function(){window.location.reload(!1)},children:"Play Again!"})]})]})};var Se=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(ge,{})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),l(e),a(e)}))};a.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Se,{})}),document.getElementById("root")),De()}},[[42,1,2]]]);
//# sourceMappingURL=main.71e2b95d.chunk.js.map