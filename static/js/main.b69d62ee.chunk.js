(this["webpackJsonpten-steps"]=this["webpackJsonpten-steps"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(25),n(10)),s=n(6),l=n(8),u=n(3),m=(r.a.createContext(null),u),f=(n(26),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),m=l[0],f=l[1],p=Object(a.useState)(u.Transport.position),h=Object(i.a)(p,2),E=h[0],g=h[1];Object(a.useEffect)((function(){u.Transport.position=0,u.Transport.setLoopPoints(0,e.length),u.Transport.loop=o}),[e.length,o]),Object(a.useEffect)((function(){var e=u.Transport.scheduleRepeat((function(){g(u.Transport.position.split(".")[0])}),"128n","0m");return function(){u.Transport.clear(e),d()}}),[]);var d=function(){u.Transport.stop(),f(!1),c(!1)};return r.a.createElement("div",{className:"transport"},r.a.createElement("div",{className:"display"},E),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"play",onClick:function(){u.Transport.start(),f(!0)},disabled:m},"play"),r.a.createElement("button",{className:"loop",onClick:function(){c(!0),f(!0),u.Transport.start()},disabled:m},"play"),r.a.createElement("button",{onClick:d,disabled:!m},"stop")))});function p(){return(new m.Synth).toMaster()}function h(){var e=new m.Synth({oscillator:{type:"square4"}}).toMaster();return e.volume.value=-10,e}function E(){return new m.Synth({oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"sine"},envelope:{attackCurve:"exponential",attack:.05,decay:.2,sustain:.2,release:1.5},portamento:.025}).toMaster()}var g=function(){return Object(a.useEffect)((function(){var e=new p,t=new m.Loop((function(t){e.triggerAttackRelease("C4","4n",t)}),"4n");return t.start("0m").stop("1m"),function(){e.dispose(),t.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Beep beep beep beep",r.a.createElement("strong",null,"...")),r.a.createElement(f,{length:"1m"}))},d=function(){return Object(a.useEffect)((function(){var e=new p,t=["C4","D4","E4","F4"],n=new m.Loop((function(n){e.triggerAttackRelease(t[t.push(t.shift())-1],"4n",n)}),"4n");return n.start("0m").stop("1m"),function(){e.dispose(),n.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Do re mi fa"),"..."),r.a.createElement(f,{length:"1m"}))},v=function(){var e="1m";return Object(a.useEffect)((function(){var t=new p,n=["C4","D4","E4","F4"],a=new m.Loop((function(e){t.triggerAttackRelease(function(){var e=Math.floor(Math.random()*n.length);return n[e]}(),"4n",e)}),"4n");return a.start("0m").stop(e),function(){t.dispose(),a.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Do re mi fa... ",r.a.createElement("strong",null,"randomly.")),r.a.createElement(f,{length:e}))},b=function(){var e="1m";return Object(a.useEffect)((function(){var t=new h,n=["C4","D4","E4","F4"],a=new m.Loop((function(e){var a;t.triggerAttackRelease((a=n)[Math.floor(Math.random()*a.length)],"4n",e)}),"4n");return a.start("0m").stop(e),function(){t.dispose(),a.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Do re mi fa... randomly, using a ",r.a.createElement("strong",null,"different synth"),"."),r.a.createElement(f,{length:e}))},w=function(){var e="1m";return Object(a.useEffect)((function(){var t=[new p,new h],n=["C4","D4","E4","F4"],a=function(e){return e[Math.floor(Math.random()*e.length)]},r=new m.Loop((function(e){a(t).triggerAttackRelease(a(n),"4n",e)}),"4n");return r.start("0m").stop(e),function(){t.forEach((function(e){return e.dispose()})),r.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Do re mi fa... randomly, using ",r.a.createElement("strong",null,"two")," different synths."),r.a.createElement(f,{length:e}))},y={2:[2,1],3:[3,2],4:[4,3],5:[5,3],6:[6,5],7:[7,6],8:[8,6,5,4],9:[9,5],10:[10,7],11:[11,9],12:[12,11,10,4],13:[13,12,11,8],14:[14,13,12,2],15:[15,14],16:[16,14,13,11],17:[17,14],18:[18,11],19:[19,18,17,14],20:[20,17],21:[21,19],22:[22,21],23:[23,18],24:[24,23,22,17],25:[25,22],26:[26,6,2,1],27:[27,5,2,1],28:[28,25],29:[29,27],30:[30,6,4,1],31:[31,28]};function x(e,t){this.n=e||this.DEFAULT_LENGTH,this.taps=y[this.n],t||(t=this._defaultSeed(this.n));var n=parseInt(Array(this.n+1).join("1"),2);this.register=t&n}x.prototype={TAPS:y,DEFAULT_LENGTH:31,shift:function(){var e,t=this.taps.length,n=this.register>>this.n-this.taps[0];for(e=1;e<t;e++)n^=this.register>>this.n-this.taps[e];return n&=1,this.register=this.register>>1|n<<this.n-1,1&n},seq:function(e){for(var t=0,n=0;n<e;n++)t=t<<1|this.shift();return t},seqString:function(e){for(var t="",n=0;n<e;n++)t+=this.shift();return t},maxSeqLen:function(){var e=this.register,t=0;do{this.shift(),t++}while(e!==this.register);return t},_defaultSeed:function(e){if(!e)throw new Error("n is required");return new x(8,92914).seq(e)}};var C=x,j=function(){var e="1m";function t(e){var t=parseInt(e,2);return new C(e.length,t)}return Object(a.useEffect)((function(){var n=[new p,new h,new E],a=t("1001"),r=["C4","D4","E4","F4"],o=t("1001"),c=function(e,t){return e.shift(),t[e.register%t.length]},i=new m.Loop((function(e){c(a,n).triggerAttackRelease(c(o,r),"4n",e)}),"4n");return i.start("0m").stop(e),function(){n.forEach((function(e){return e.dispose()})),i.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Do re mi fa... ",r.a.createElement("strong",null,"deterministically"),", using"," ",r.a.createElement("strong",null,"three")," different synths.",r.a.createElement("span",{"aria-label":"musical notes",role:"img"},"\ud83c\udfb6"),"..."),r.a.createElement(f,{length:e}))},O=n(4),k=function(e){var t=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.exec(e),n=t[1],a=t[2];return{cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13}[n.toLowerCase()]+12*(parseInt(a,10)+1)},N=function(){var e="1m";function t(e){var t=parseInt(e,2);return new C(e.length,t)}var n=function(e){return[0,4,7].map((function(t){return m.Frequency(k(e)+t,"midi")}))};return Object(a.useEffect)((function(){var a=[new p,new h,new E],r=t("1001"),o=[].concat(Object(O.a)(n("C4")),Object(O.a)(n("F4"))),c=t("1001"),i=function(e,t){return e.shift(),t[e.register%t.length]},s=new m.Loop((function(e){i(r,a).triggerAttackRelease(i(c,o),"4n",e)}),"4n");return s.start("0m").stop(e),function(){a.forEach((function(e){return e.dispose()})),s.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Six notes of I and IV"),"... deterministically, using three different synths."),r.a.createElement(f,{length:e}))},S=function(){var e="1m";function t(e){var t=parseInt(e,2);return new C(e.length,t)}var n=function(e){return[0,4,7].map((function(t){return m.Frequency(k(e)+t,"midi")}))};return Object(a.useEffect)((function(){var a=[new p,new h,new E],r=t("1001"),o=[].concat(Object(O.a)(n("C4")),Object(O.a)(n("F4"))),c=t("1001"),i=function(e,t,n){return e.shift(),t[e.register%(t.length+(n||0))]},s=new m.Loop((function(e){var t=i(r,a,1);t&&t.triggerAttackRelease(i(c,o),"4n",e)}),"4n");return s.start("0m").stop(e),function(){a.forEach((function(e){return e.dispose()})),s.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Six notes of I and IV ",r.a.createElement("strong",null,"with rests"),"... deterministically, using three different synths."),r.a.createElement(f,{length:e}))},A=function(){var e="1m";function t(){return(new m.MembraneSynth).toMaster()}function n(){return(new m.NoiseSynth).toMaster()}function o(){var e=(new m.MetalSynth).toMaster();return e.volume.value=-20,e}function c(e){var t=parseInt(e,2);return new C(e.length,t)}var i=function(e){return[0,4,7].map((function(t){return m.Frequency(k(e)+t,"midi")}))},s=function(e){return Math.random()*e+(1-e)};return Object(a.useEffect)((function(){var a=[new p,new h,new E],r=c("100101"),l=[new t,new n,new o],u=[function(e){return l[0].triggerAttackRelease("C1","4n",e,s(.25))},function(e){return l[1].triggerAttackRelease("2n",e,s(.25))},function(e){return l[2].triggerAttackRelease("8n",e,s(.5))}],f=c("100101"),g=[].concat(Object(O.a)(i("C4")),Object(O.a)(i("F4"))),d=c("100101"),v=function(e,t,n){return e.shift(),t[e.register%(t.length+(n||0))]},b=new m.Loop((function(e){var t=v(r,a,1);t&&t.triggerAttackRelease(v(d,g),"4n",e)}),"4n");b.start("0m").stop(e);var w=new m.Loop((function(e){var t=v(f,u,1);t&&t(e)}),"4n");return w.start("0m").stop(e),function(){a.forEach((function(e){return e.dispose()})),l.forEach((function(e){return e.dispose()})),b.dispose(),w.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Six notes of I and IV with rests... deterministically, using three different synths and ",r.a.createElement("strong",null,"three percussion sounds"),"."),r.a.createElement(f,{length:e}))},M=function(){var e="1m";function t(){return(new m.MembraneSynth).toMaster()}function n(){return(new m.NoiseSynth).toMaster()}function o(){var e=(new m.MetalSynth).toMaster();return e.volume.value=-20,e}function c(e){var t=parseInt(e,2);return new C(e.length,t)}var i=function(e){return[0,4,7].map((function(t){return m.Frequency(k(e)+t,"midi")}))},s=function(e){return Math.random()*e+(1-e)};return Object(a.useEffect)((function(){var a=[new p,new h,new E],r=c("1001"),l=[new t,new n,new o],u=[function(e){return l[0].triggerAttackRelease("C1","4n",e,s(.25))},function(e){return l[1].triggerAttackRelease("2n",e,s(.25))},function(e){return l[2].triggerAttackRelease("8n",e,s(.5))}],f=c("1001"),g=[].concat(Object(O.a)(i("C4")),Object(O.a)(i("F4"))),d=c("1001"),v=function(e,t,n){return e.shift(),t[e.register%(t.length+(n||0))]},b=new m.Loop((function(e){var t=v(r,a,1);t&&t.triggerAttackRelease(v(d,g),"4n",e)}),"4n");b.start("0m").stop(e);var w=new m.Loop((function(e){var t=v(f,u,1);t&&t(e)}),"8n");return w.start("0m").stop(e),function(){a.forEach((function(e){return e.dispose()})),l.forEach((function(e){return e.dispose()})),b.dispose(),w.dispose()}}),[]),r.a.createElement("div",null,r.a.createElement("p",null,"Six notes of I and IV with rests... deterministically, using three different synths and three percussion sounds, with"," ",r.a.createElement("strong",null,"percussion played twice as frequently"),"."),r.a.createElement(f,{length:e}))},L="/example-1",R="/example-2",T="/example-3",I="/example-4",F="/example-5",D="/example-6",q="/example-7",V="/example-8",_="/example-9",B="/example-10";n(27);var G=function(e){var t=Object(a.useState)("suspended"===m.context.state),n=Object(i.a)(t,2),o=n[0],c=n[1];return o?r.a.createElement("main",{className:"app"},r.a.createElement("div",{className:"source"},r.a.createElement("a",{href:"https://github.com/abrie/ten-steps"},"source code")),r.a.createElement("h1",null,"Ten Steps to an Algorithmic Song"),r.a.createElement("hr",null),r.a.createElement(s.a,{basename:"/"},r.a.createElement("nav",{className:"examplesNav"},r.a.createElement(s.b,{to:L,activeClassName:"active"},"1"),r.a.createElement(s.b,{to:R,activeClassName:"active"},"2"),r.a.createElement(s.b,{to:T,activeClassName:"active"},"3"),r.a.createElement(s.b,{to:I,activeClassName:"active"},"4"),r.a.createElement(s.b,{to:F,activeClassName:"active"},"5"),r.a.createElement(s.b,{to:D,activeClassName:"active"},"6"),r.a.createElement(s.b,{to:q,activeClassName:"active"},"7"),r.a.createElement(s.b,{to:V,activeClassName:"active"},"8"),r.a.createElement(s.b,{to:_,activeClassName:"active"},"9"),r.a.createElement(s.b,{to:B,activeClassName:"active"},"10")),r.a.createElement("hr",null),r.a.createElement("section",{className:"activeExample"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:L,component:g}),r.a.createElement(l.a,{path:R,component:d}),r.a.createElement(l.a,{path:T,component:v}),r.a.createElement(l.a,{path:I,component:b}),r.a.createElement(l.a,{path:F,component:w}),r.a.createElement(l.a,{path:D,component:j}),r.a.createElement(l.a,{path:q,component:N}),r.a.createElement(l.a,{path:V,component:S}),r.a.createElement(l.a,{path:_,component:A}),r.a.createElement(l.a,{path:B,component:M}))))):r.a.createElement("button",{onClick:function(){m.start().then((function(){return c(!0)}))}},"click to permit AudioContext")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.b69d62ee.chunk.js.map