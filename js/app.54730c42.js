(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},o={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a61022ac","chunk-6a40e834":"1861c7e4","chunk-7ece8206":"24aa97d2"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-6a40e834":1,"chunk-7ece8206":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"04a5d20f","chunk-6a40e834":"04a5d20f","chunk-7ece8206":"04a5d20f"}[t]+".css",o=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===s||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],m.parentNode.removeChild(m),a(r)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=o[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1268:function(t,e,a){t.exports=a.p+"img/slider3.29e3ded0.png"},"21f6":function(t,e,a){},"29f0":function(t,e,a){"use strict";a("21f6")},"2a19":function(t,e,a){"use strict";a("4496")},"2ac7":function(t,e,a){},"3d7d":function(t,e,a){t.exports=a.p+"img/slider2.e758f303.png"},4496:function(t,e,a){},"4b93":function(t,e,a){},5357:function(t,e,a){"use strict";a("88ee")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("router-view"),a("Footer")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{ref:"nav",class:t.nav_classlist,attrs:{toggleable:"lg",type:"dark",variant:"primary-cstm"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{staticClass:"d-inline-block align-top",attrs:{src:"https://placekitten.com/g/30/30",alt:"Kitten"}}),t._v(" CSS Ninja ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[a("font-awesome-icon",{attrs:{icon:"home"}})],1),a("b-nav-item",{attrs:{to:"/portfolio"}},[t._v("Portafolio")]),a("b-nav-item",{attrs:{to:"/about"}},[t._v("About me")]),a("b-nav-item",{attrs:{to:"/contact"}},[t._v("Contact")])],1),a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("IT")])],1)],1)],1)],1)},i=[],c=(a("caad"),a("a434"),a("2532"),{name:"Nav",data:function(){return{nav_classlist:[""]}},methods:{scroll:function(){var t=this;window.onscroll=function(){window.pageYOffset>400?t.nav_classlist.includes("nav-scrolled")||t.nav_classlist.push("nav-scrolled"):t.nav_classlist.splice("nav-scrolled")}}},mounted:function(){this.scroll()}}),l=c,u=(a("29f0"),a("2877")),d=Object(u["a"])(l,r,i,!1,null,"5d1b8348",null),m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer font-small unique-color-dark"},[a("div",{staticClass:"prefooter"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row py-4 d-flex align-items-center"},[t._m(0),a("div",{staticClass:"col-md-6 col-lg-7 text-center text-md-right fs-18"},[a("a",{staticClass:"fb-ic mr-3"},[a("font-awesome-icon",{staticClass:"white-text",attrs:{icon:["fab","facebook-f"]}})],1),a("a",{staticClass:"tw-ic mr-3"},[a("font-awesome-icon",{staticClass:"white-text",attrs:{icon:["fab","twitter"]}})],1),a("a",{staticClass:"li-ic mr-3"},[a("font-awesome-icon",{staticClass:"white-text",attrs:{icon:["fab","linkedin-in"]}})],1),a("a",{staticClass:"ins-ic mr-3"},[a("font-awesome-icon",{staticClass:"white-text",attrs:{icon:["fab","instagram"]}})],1)])])])]),a("div",{staticClass:"container text-center text-md-left mt-5"},[a("div",{staticClass:"row mt-3"},[t._m(1),t._m(2),t._m(3),a("div",{staticClass:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"},[a("h6",{staticClass:"text-uppercase font-weight-bold"},[t._v("Contact")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("p",[a("font-awesome-icon",{attrs:{icon:"address-card"}}),t._v(" Sannicandro di Bari, BA 70028, IT")],1),a("p",[a("font-awesome-icon",{attrs:{icon:"mail-bulk"}}),t._v(" elyerrico@gmail.com")],1),a("p",[a("font-awesome-icon",{attrs:{icon:"phone-square"}}),t._v(" +39 392 523 8575")],1),a("p",[a("font-awesome-icon",{attrs:{icon:"phone-square"}}),t._v(" +39 392 523 8575")],1)])])]),t._m(4)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0"},[a("h6",{staticClass:"mb-0"},[t._v("Get connected with us on social networks!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase font-weight-bold"},[t._v("E. Errico")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("p",[t._v("Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase font-weight-bold"},[t._v("Products")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("p",[a("a",{attrs:{href:"#!"}},[t._v("MDBootstrap")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("MDWordPress")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("BrandFlow")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Bootstrap Angular")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase font-weight-bold"},[t._v("Useful links")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Your Account")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Become an Affiliate")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Shipping Rates")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Help")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2020 Copyright: "),a("a",{attrs:{href:"https://mdbootstrap.com/"}},[t._v(" MDBootstrap.com")])])}],b={name:"Footer"},v=b,h=(a("cb7e"),Object(u["a"])(v,p,f,!1,null,"637cc16a",null)),g=h.exports,C={name:"App",components:{Nav:m,Footer:g}},_=C,x=(a("034f"),Object(u["a"])(_,n,o,!1,null,null,null)),w=x.exports,y=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{},[a("Carousel")],1),a("Usps",{attrs:{uspsdata:t.usps}}),a("div",{staticClass:"container-fluid bg-primary-cstm py-5"},[a("h2",{staticClass:"text-white mt-0"},[t._v("Main Services")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("Cards",{attrs:{cardata:t.cards}})],1),a("div",{},[a("Carousel")],1),a("div",{staticClass:"container-fluid bg-primary-cstm py-5"},[a("h2",{staticClass:"text-white mt-0"},[t._v("Portfolio")]),a("hr",{staticClass:"light-blue accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("Cards",{attrs:{cardata:t.portfolio}})],1),a("div",{staticClass:"container"},[a("ContactForm")],1)],1)},E=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-group",{attrs:{clas:"my-custom",deck:""}},t._l(t.cardata,(function(t){return a("Card",{key:t.id,attrs:{card:t}})})),1)},S=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.card.ctitle,"img-src":t.card.img,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(" "+t._s(t.card.cdsc)+" ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"primary"}},[t._v(t._s(t.card.cbtn))])],1),a("b-modal",{attrs:{id:"modal-1",title:t.card.id}},[a("p",{staticClass:"my-4"},[t._v(t._s(t.card.cdsc))])])],1)},P=[],q={name:"Card",props:{card:Object}},$=q,L=(a("2a19"),Object(u["a"])($,O,P,!1,null,"c6cda1c6",null)),A=L.exports,B={name:"Cards",components:{Card:A},props:["cardata"]},D=B,T=(a("b843"),Object(u["a"])(D,j,S,!1,null,"47ae602f",null)),N=T.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-carousel",{staticClass:"carousel-height",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":a("fd2b")}}),s("b-carousel-slide",{attrs:{"img-src":a("3d7d")}}),s("b-carousel-slide",{attrs:{"img-src":a("1268")}}),s("div",{staticClass:"absolute-center"},[s("h1",[t._v("Ely Errico")])])],1)},M=[],U={name:"Carousel"},I=U,H=(a("7c7e"),Object(u["a"])(I,F,M,!1,null,"cc810f62",null)),Y=H.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"usp-main-container"},[a("h2",{staticClass:"usp-title d-none"},[t._v("Main Services")]),a("div",{staticClass:"usps-box"},t._l(t.uspsdata,(function(t){return a("Usp",{key:t.id,attrs:{usp:t}})})),1)])])},J=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"usp-item"},[a("div",{staticClass:"usp-icon"},[a("div",{staticClass:"icon"},[a("font-awesome-icon",{staticClass:"font-awesome-icon ",attrs:{icon:"home"}})],1),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-gauge-high"}})],1),a("div",{staticClass:"usp-title"},[a("h2",[t._v(t._s(t.usp.usptitle))])]),a("div",{staticClass:"usp-desc"},[a("p",[t._v(t._s(t.usp.uspdesc))])])])},z=[],Q={name:"Usp",props:{usp:Object}},R=Q,W=(a("6ab7"),Object(u["a"])(R,K,z,!1,null,"02ab83ff",null)),V=W.exports,X={name:"Usps",components:{Usp:V},props:["uspsdata"]},Z=X,tt=(a("5357"),Object(u["a"])(Z,G,J,!1,null,"bf9452c2",null)),et=tt.exports,at=a("5a93"),st={name:"Home",data:function(){return{seen:!0,cards:[{id:0,ctitle:"Frontend Development",cdsc:"Una basta experencia desarrollando el frontend de las paginas web, partiendo de borradores de diseño de graficos competentes",cbtn:"Leer mas",img:"https://picsum.photos/600/300/?image=2"},{id:1,ctitle:"Backend Development & API",cdsc:"Gracias a mi experencia de trabajo, alta competencia en cuanto tecnologia backend se refiere, su logica y como manipular los datos de una database",cbtn:"Leer mas",img:"https://picsum.photos/600/300/?image=9"},{id:2,ctitle:"Database Magnament",cdsc:"En una empresa como Full Stack, aprendi a trabajar con un database y armar querys mas complejas para obtener el resultado deseado",cbtn:"Leer mas",img:"https://picsum.photos/600/300/?image=7"}],portfolio:[{id:0,ctitle:"Progetto 1",cdsc:"Una basta experencia desarrollando el frontend de las paginas web, partiendo de borradores de diseño de graficos competentes",cbtn:"Leer mas",img:"https://picsum.photos/600/300"},{id:1,ctitle:"Progetto 2",cdsc:"Gracias a mi experencia de trabajo, alta competencia en cuanto tecnologia backend se refiere, su logica y como manipular los datos de una database",cbtn:"Leer mas",img:"https://picsum.photos/600/300"},{id:2,ctitle:"Progetto 3",cdsc:"En una empresa como Full Stack, aprendi a trabajar con un database y armar querys mas complejas para obtener el resultado deseado",cbtn:"Leer mas",img:"https://picsum.photos/600/300"}],usps:[{id:0,usptitle:"Quality",uspdesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. "},{id:1,usptitle:"Perfomance",uspdesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. "},{id:2,usptitle:"Best Tecnology",uspdesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. "}]}},components:{Usps:et,Cards:N,Carousel:Y,ContactForm:at["a"]}},nt=st,ot=Object(u["a"])(nt,k,E,!1,null,null,null),rt=ot.exports;s["default"].use(y["a"]);var it=[{path:"/",name:"Home",component:rt},{path:"/portfolio",name:"Portfolio",component:function(){return a.e("chunk-7ece8206").then(a.bind(null,"c9e5"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return a.e("chunk-6a40e834").then(a.bind(null,"b8fa"))}}],ct=new y["a"]({routes:it}),lt=ct,ut=(a("f9e3"),a("2dd8"),a("5f5b")),dt=a("b1e0"),mt=a("ecee"),pt=a("c074"),ft=a("ad3d"),bt=a("f2d1");mt["c"].add(pt["a"]),mt["c"].add(pt["e"]),mt["c"].add(pt["f"]),mt["c"].add(bt["b"]),mt["c"].add(bt["a"]),mt["c"].add(bt["d"]),mt["c"].add(bt["c"]),mt["c"].add(pt["d"]),mt["c"].add(pt["c"]),mt["c"].add(pt["g"]),mt["c"].add(pt["b"]),s["default"].component("font-awesome-icon",ft["a"]),s["default"].use(ut["a"]),s["default"].use(dt["a"]),s["default"].config.productionTip=!1,new s["default"]({router:lt,render:function(t){return t(w)}}).$mount("#app")},5864:function(t,e,a){},"5a93":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contact-form"},[a("h2",{staticClass:"h1-responsive font-weight-bold text-center my-4"},[t._v("Contact us")]),a("p",{staticClass:"text-center w-responsive mx-auto mb-5"},[t._v("Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("form",{attrs:{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"}}),a("label",{attrs:{for:"name"}},[t._v("Your name")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"email",name:"email"}}),a("label",{attrs:{for:"email"}},[t._v("Your email")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"subject",name:"subject"}}),a("label",{attrs:{for:"subject"}},[t._v("Subject")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form"},[a("textarea",{staticClass:"form-control md-textarea",attrs:{type:"text",id:"message",name:"message",rows:"2"}}),a("label",{attrs:{for:"message"}},[t._v("Your message")])])])])]),a("div",{staticClass:"text-center text-md-left"},[a("a",{staticClass:"btn btn-primary",attrs:{onclick:"document.getElementById('contact-form').submit();"}},[t._v("Send")])]),a("div",{staticClass:"status"})])])])}],o=(a("8691"),a("2877")),r={},i=Object(o["a"])(r,s,n,!1,null,"2f44e83f",null);e["a"]=i.exports},"6ab7":function(t,e,a){"use strict";a("dad5")},"7c7e":function(t,e,a){"use strict";a("9e29")},"85ec":function(t,e,a){},8691:function(t,e,a){"use strict";a("2ac7")},"88ee":function(t,e,a){},"9e29":function(t,e,a){},b843:function(t,e,a){"use strict";a("5864")},cb7e:function(t,e,a){"use strict";a("4b93")},dad5:function(t,e,a){},fd2b:function(t,e,a){t.exports=a.p+"img/slider.f0cce6ef.png"}});
//# sourceMappingURL=app.54730c42.js.map