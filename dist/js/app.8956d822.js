(function(){"use strict";var e={4692:function(e,t,n){var o=n(9963),r=n(6252),i=n(1457),l=n(941);function a(e,t,n,o,a,u){const c=(0,r.up)("Generator");return(0,r.wg)(),(0,r.j4)(i.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})}var u=n(3577),c=n(9788),s=n(368),d=n(5911),f=n(990),p=n(7506),m=n(1669),h=n(9003),g=n(3379),w=n(2482),b=n(6393),k=n(1400),y=n(711);const v=(0,r._)("div",{class:"text-h6"},"You have been assigned:",-1),_={class:"px-8"},x=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," Gift Exchange Generator ",-1),O=(0,r._)("p",null," Gone are the days from picking names from a hat! Pick your Secret Santa as Code(SSaC)! ",-1),U=(0,r._)("p",null,[(0,r.Uk)(" Put requirements in the "),(0,r._)("kbd",null,"YML"),(0,r.Uk)(" field, specify the number of gifts you would like each person to get, then click "),(0,r._)("kbd",null,"Generate"),(0,r.Uk)(". Results will appear at the bottom of the page. ")],-1),j=(0,r._)("h4",{class:"mt-2"}," Example ",-1),C={style:{"white-space":"pre-wrap"}},P=(0,r._)("p",{class:"py-4"},[(0,r.Uk)(" Special thanks to "),(0,r._)("a",{href:"https://github.com/arcanis/secretsanta"},"arcanis' secretsanta"),(0,r.Uk)(" for inspiration. Browse this apps "),(0,r._)("a",{href:"https://github.com/FoxUSA/GiftExchange"},"source code on GitHub.")],-1),W=(0,r._)("p",null," Privacy: nothing is collected or stored by this app. The information is encoded in the link itself. ",-1),S=(0,r._)("p",{class:"py-4"}," © Jacob Liscom 2022. Distributed under MIT License. Dependencies distributed under their respective licenses. ",-1),N=(0,r.Uk)(" Generate "),E=(0,r._)("h2",{class:"headline font-weight-bold my-5"}," Results ",-1),R=(0,r._)("p",null,[(0,r.Uk)(" Send these links via your method of choice. For example: text message, email, Slack, Facebook, QR code....."),(0,r._)("br"),(0,r.Uk)(" Only open yours to not spoil the surprise! ")],-1),V={class:"pl-5 my-5"};function G(e,t,n,o,i,l){return(0,r.wg)(),(0,r.j4)(m.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w.v,{modelValue:e.errorNotification,"onUpdate:modelValue":t[0]||(t[0]=t=>e.errorNotification=t),timeout:"5000",color:"red darken-4"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.error),1)])),_:1},8,["modelValue"]),(0,r.Wm)(h.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(f.B,{transition:"dialog-top-transition","max-width":"600",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialog=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(s._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y.iv,{class:"pl-4",color:"green darken-4"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Hello "+(0,u.zw)(e.person)+"! ",1)])),_:1}),(0,r.Wm)(d.Z,{class:"px-8 py-6"},{default:(0,r.w5)((()=>[v,(0,r._)("p",_,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.picks,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e},(0,u.zw)(e),1)))),128))])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(h.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g.D,{cols:"12",md:"6"},{default:(0,r.w5)((()=>[x,O,U,j,(0,r.Wm)(s._,{color:"indigo darken-4",class:"pa-4"},{default:(0,r.w5)((()=>[(0,r._)("code",C,(0,u.zw)(e.example),1)])),_:1}),P,W,S])),_:1}),(0,r.Wm)(g.D,{cols:"12",md:"6"},{default:(0,r.w5)((()=>[(0,r.Wm)(b.h,{modelValue:e.giftCount,"onUpdate:modelValue":t[2]||(t[2]=t=>e.giftCount=t),type:"number",label:"Number of gifts you would like each person to get"},null,8,["modelValue"]),(0,r.Wm)(k.z,{clearable:"","clear-icon":"mdi-close-circle",label:"YML",modelValue:e.yml,"onUpdate:modelValue":t[3]||(t[3]=t=>e.yml=t),rows:"12",placeholder:`#Something like\n${e.example}`},null,8,["modelValue","placeholder"]),(0,r.Wm)(c.T,{color:"green darken-4",onClick:l.generateLinks},{default:(0,r.w5)((()=>[N])),_:1},8,["onClick"])])),_:1}),e.links?((0,r.wg)(),(0,r.j4)(g.D,{key:0,cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(p.J),E,R,(0,r._)("ul",V,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.links,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Uk)((0,u.zw)(t)+" ",1),(0,r._)("code",null,(0,u.zw)(e),1)])))),128))])])),_:1})):(0,r.kq)("",!0)])),_:1})])),_:1})}var T=n(1272);const D=1e4;var L={name:"Generator",data:()=>({errorNotification:!1,error:null,person:"",picks:[],dialog:!1,giftCount:1,yml:"",links:null,example:"mom:\n  exclude:\n    - dad\ndad:\n  exclude:\n    - mom\nsister:\nbrother:"}),mounted(){const e=new URL(window.location.href);try{this.person=decodeURIComponent(e.searchParams.get("person")),this.picks=JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(e.searchParams.get("picks"))))))}catch(t){}this.person&&this.picks&&this.picks.length&&(this.dialog=!0)},methods:{generateLinks(){if(!this.yml.length)return this.error="You need to input some YML",void(this.errorNotification=!0);this.links={};let e=null;try{e=this.match(T.ZP.load(this.yml),this.giftCount)}catch(t){this.links=null,this.error=t,this.errorNotification=!0}for(const n in e)this.links[n]=`${window.location.href.split("?")[0]}?person=${encodeURIComponent(n)}&picks=${encodeURIComponent(window.btoa(unescape(encodeURIComponent(JSON.stringify(e[n])))))}`},match(e,t=1){if(!Number.isInteger(t))throw new Error("Gift count must be a number");for(let n=0;n<D;n++){const n={},o={};for(const t in e)n[t]=[],o[t]=0;for(let i=0;i<t;i++){const r=[];for(const i in e){const l=[];for(const o in n)n[o].length>t||o===i||n[i].includes(o)||r.includes(o)||e[i]&&e[i].exclude&&e[i].exclude.length&&e[i].exclude.includes(o)||l.push(o);const a=l[Math.floor(Math.random()*l.length)];a&&(r.push(a),n[i].push(a),o[a]++)}}let r=!0;for(const e in o)o[e]!==t&&(r=!1);if(r)return console.log(`Matches:\n${T.ZP.dump(n)}`),console.log(`Counts:\n${T.ZP.dump(o)}`),n}throw new Error(`Failed to come up with a solution after ${D} attempts.`)}}},M=n(3744);const I=(0,M.Z)(L,[["render",G]]);var z=I,Y={name:"App",components:{Generator:z},data:()=>({})};const $=(0,M.Z)(Y,[["render",a]]);var A=$,F=(n(9773),n(2726)),Z=(0,F.Rd)({theme:{defaultTheme:"dark"}});async function q(){const e=await n.e(461).then(n.t.bind(n,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}q(),(0,o.ri)(A).use(Z).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<l&&(l=i));if(a){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){l[e]=function(){return o[e]}}));return l["default"]=function(){return o},n.d(i,l),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.959e5d1c.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="giftexchange:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),a=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,r[1](a)}};n.l(l,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],a=o[1],u=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var s=u(n)}for(t&&t(o);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkgiftexchange"]=self["webpackChunkgiftexchange"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4692)}));o=n.O(o)})();
//# sourceMappingURL=app.8956d822.js.map