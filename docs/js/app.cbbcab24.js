(function(t){function e(e){for(var s,n,a=e[0],r=e[1],u=e[2],l=0,g=[];l<a.length;l++)n=a[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&g.push(o[n][0]),o[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(g.length)g.shift()();return c.push.apply(c,u||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],s=!0,n=1;n<i.length;n++){var a=i[n];0!==o[a]&&(s=!1)}s&&(c.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},o={app:0},c=[];function a(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-97ce6350":"be51adc9"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i={"chunk-97ce6350":1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var s="css/"+({}[t]||t)+"."+{"chunk-97ce6350":"805b9708"}[t]+".css",o=r.p+s,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===o))return e()}var g=document.getElementsByTagName("style");for(a=0;a<g.length;a++){u=g[a],l=u.getAttribute("data-href");if(l===s||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete n[t],d.parentNode.removeChild(d),i(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var c=new Promise((function(e,i){s=o[t]=[e,i]}));e.push(s[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=a(t);var g=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var i=o[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;g.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",g.name="ChunkLoadError",g.type=s,g.request=n,i[1](g)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var d=l;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1e2c":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods-panel"},[i("div",{staticClass:"img-box"},[i("img",{ref:"img",attrs:{src:t.images[0]}})]),i("div",{staticClass:"content"},[i("h3",{staticClass:"goods-title text-overflow"},[t._v(t._s(t.title))]),i("p",{staticClass:"goods-desc text-overflow"},[t._v(t._s(t.desc))]),i("div",{staticClass:"goods-tags text-overflow"},t._l(t.tags,(function(e){return i("div",{key:e,staticClass:"goods-tags-item"},[t._v(" "+t._s(e)+" ")])})),0),i("div",{staticClass:"goods-price"},[t._v("￥"+t._s(t.price))]),i("div",{staticClass:"goods-counter"},[t.num?i("div",{on:{click:function(e){return t.changeNum(t.id,-1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png",alt:""}})]):t._e(),t.num?i("div",{staticClass:"number"},[t._v(t._s(t.num))]):t._e(),i("div",{on:{click:function(e){return t.changeNum(t.id,1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png",alt:""}})])])])])},n=[],o=i("5530"),c=i("2f62"),a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.exist?i("div",{staticClass:"item",style:{transform:"translate("+t.moveX+"px,"+t.moveY+"px) scale("+t.sx+","+t.sy+")",width:t.width+"px",height:t.height+"px",opacity:t.opacity}},[i("img",{attrs:{src:t.imgSrc}})]):t._e()},u=[],l={},g=l,d=(i("3935"),i("2877")),p=Object(d["a"])(g,r,u,!1,null,"0e8521e8",null),m=p.exports,h=a["a"].extend(m),f=function(t){var e=t.startX,i=t.startY,s=t.endX,n=t.endY,o=t.imgSrc,c=t.width,a=t.height,r=new h({el:document.createElement("div"),data:function(){return{moveX:e,moveY:i,sx:1,sy:1,opacity:1,exist:!0,imgSrc:o,width:c,height:a}}});document.body.appendChild(r.$el),setTimeout((function(){r.moveX=s,r.moveY=n,r.sx=0,r.sy=0,r.opacity=0}),0),setTimeout((function(){r.exist=!1}),1e3)},b=i("d399"),v={props:["title","images","desc","tags","price","id","num","noFly","isShoppingCar"],methods:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["changeStorage"])),{},{changeNum:function(t,e){if(this.isShoppingCar&&1===this.num&&-1===e)Object(b["a"])("不能再减了哦");else if(this.changeStorage({id:t,val:e}),!this.noFly){var i=this.$refs.img,s=i.clientWidth,n=i.clientHeight,o=this.$refs.img.getBoundingClientRect(),c=o.left,a=o.top,r=document.getElementById("shoppingCar"),u=r.getBoundingClientRect(),l=u.left,g=u.top;-1!==e&&f({startX:c,startY:a,endX:l,endY:g,imgSrc:this.$refs.img.src,width:s,height:n})}}})},y=v,j=(i("ff42"),Object(d["a"])(y,s,n,!1,null,"0a89fd0b",null));e["a"]=j.exports},2395:function(t,e,i){},"23be":function(t,e,i){},"27fa":function(t,e,i){"use strict";i("b20b")},"2c0a":function(t,e,i){},3935:function(t,e,i){"use strict";i("f460")},"3e74":function(t,e,i){},"4e9c":function(t,e,i){},5433:function(t,e,i){"use strict";i("2c0a")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=i("b970"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transName,mode:"slideLeft"===t.transName?"in-out":"out-in"}},[i("router-view",{staticClass:"view"})],1)],1)},c=[],a=i("5530"),r=(i("b0c0"),i("2f62")),u={methods:Object(a["a"])({},Object(r["c"])(["setCounterMap"])),data:function(){return{transName:"slideLeft"}},created:function(){var t=JSON.parse(localStorage.getItem("goodsCounterMap"))||{};this.setCounterMap(t)},watch:{$route:function(t,e){"search"===t.name&&"classify"===e.name?this.transName="slideLeft":"classify"===t.name&&"search"===e.name?this.transName="slideRight":this.transName=""}}},l=u,g=(i("7c55"),i("2877")),d=Object(g["a"])(l,o,c,!1,null,null,null),p=d.exports,m=(i("d3b7"),i("3ca3"),i("ddb0"),i("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("router-view"),i("TabBar")],1)},f=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{attrs:{icon:"wap-home-o",to:"/home/index"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{icon:"apps-o",to:"/home/classify"}},[t._v("分类")]),i("van-tabbar-item",{attrs:{icon:"shopping-cart-o",to:"/home/shoppingcar",id:"shoppingCar",badge:t.carBadgeNum}},[t._v("购物车")]),i("van-tabbar-item",{attrs:{icon:"user-circle-o",to:"/home/mine"}},[t._v("我的")])],1)},v=[],y=(i("13d5"),i("07ac"),{data:function(){return{active:0}},computed:Object(a["a"])(Object(a["a"])({},Object(r["d"])(["counterMap"])),{},{carBadgeNum:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return 0===t?"":t>=100?"99+":t}})}),j=y,L=Object(g["a"])(j,b,v,!1,null,null,null),k=L.exports,O={components:{TabBar:k}},x=O,_=(i("de16"),Object(g["a"])(x,h,f,!1,null,null,null)),C=_.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("van-notice-bar",{attrs:{"left-icon":"volume-o",text:"欢迎来到“生鲜超值购”商城，更多丰富功能即将上线，敬请期待！"}}),i("div",{staticClass:"msg"},[t._v("首页 待完善")])],1)},w=[],G=(i("e71c"),{}),T=Object(g["a"])(G,R,w,!1,null,null,null),S=T.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"classify"},[i("router-link",{staticClass:"search-btn",attrs:{tag:"div",to:"/search"}},[i("van-icon",{attrs:{name:"search"}}),i("span",[t._v("荔枝水果9.99")])],1),i("ScrollTab"),t.isLoading?i("van-loading",{staticClass:"loading",attrs:{type:"spinner",color:"#ff1a90",size:"60"}}):[i("SideBar"),i("GoodsList")]],2)},B=[],M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollBar",staticClass:"scroll-tab"},t._l(t.menuList,(function(e,s){return i("div",{key:e.title,staticClass:"tab",class:{active:t.activeIndex===s},on:{click:function(i){return t.scrollTo(s,e.title)}}},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e.imgURL}})]),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),0)},$=[];function I(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"scrollLeft",n=0,o=e<0?-5:5,c=setInterval((function(){n+=o,i[s]=t+n,Math.abs(n)>=Math.abs(e)&&(i[s]=t+e,clearInterval(c))}),1)}var E={moveTo:I},P={data:function(){return{activeIndex:0,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},computed:Object(a["a"])({},Object(r["d"])(["goodsType","sideBarList","goodsList"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["c"])(["setIsLoading","resetGoodList","setGoodsType"])),Object(r["b"])(["getGoodsList"])),{},{scrollTo:function(t,e){var i=this;this.activeIndex=t,this.setIsLoading(!0),this.$store.dispatch("getSideBarList",e).then((function(){setTimeout((function(){i.resetGoodList(),i.setGoodsType(i.sideBarList[0]),i.getGoodsList({type:i.goodsType,page:1}).then((function(){console.log(i.goodsList)})),i.setIsLoading(!1)}),500)}));var s=this.$refs.scrollBar,n=s.children[t],o=n.getBoundingClientRect().left,c=n.offsetWidth,a=s.offsetWidth,r=o+c/2-a/2;E.moveTo(s.scrollLeft,r,s,"scrollLeft"),this.resetGoodList(),this.$store.dispatch("getGoodsList",{type:this.goodsType,page:1})}}),created:function(){this.$store.dispatch("getSideBarList",this.menuList[0].title)}},N=P,A=(i("e39b"),Object(g["a"])(N,M,$,!1,null,"d591a21a",null)),H=A.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"sideBar",staticClass:"side-bar"},t._l(t.sideBarList,(function(e,s){return i("div",{key:e,class:{active:t.activeIndex===s},on:{touchend:function(i){return t.scrollTo(s,e)}}},[t._v(" "+t._s(0===s?"全部":e)+" ")])})),0)},Y=[],D={data:function(){return{activeIndex:0}},computed:Object(a["a"])({},Object(r["d"])(["sideBarList"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["c"])(["resetGoodList","setIsGet"])),Object(r["b"])(["getGoodsList"])),{},{scrollTo:function(t,e){var i=this;this.activeIndex=t,this.resetGoodList(),this.getGoodsList({type:e,page:1}).then((function(){console.log(i.$store.state.goodsList),i.setIsGet(!0)}));var s=this.$refs.sideBar,n=s.children[t],o=n.getBoundingClientRect().top,c=n.offsetHeight,a=s.offsetTop,r=s.offsetHeight,u=o+c/2-a-r/2;E.moveTo(s.scrollTop,u,s,"scrollTop")}}),watch:{sideBarList:function(){var t=this;this.resetGoodList(),this.getGoodsList({type:this.sideBarList[0],page:1}).then((function(){console.log(t.$store.state.goodsList)}))}}},z=D,J=(i("5433"),Object(g["a"])(z,X,Y,!1,null,"3c6e08d0",null)),W=J.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods-list-wrap"},[i("div",{staticClass:"list-header"},[i("div",{class:{active:"all"===t.sort},on:{click:function(e){return t.sortByType("all")}}},[t._v(" 综合 ")]),i("div",{class:{active:"sale"===t.sort},on:{click:function(e){return t.sortByType("sale")}}},[t._v(" 销量 ")]),i("div",{staticClass:"price",class:{active:t.sort.startsWith("price"),"price-up":"price-up"===t.sort,"price-down":"price-down"===t.sort},on:{click:function(e){return t.sortByType("price")}}},[t._v(" 价格 ")])]),i("div",{staticClass:"list-content",on:{scroll:t.scrollHandle}},[i("van-pull-refresh",{attrs:{"success-text":"刷新成功","head-height":"90"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.goodsList,(function(e){return i("GoodsPanel",t._b({key:e._id,attrs:{num:t.counterMap[e.id]}},"GoodsPanel",e,!1))})),1)],1)])},q=[],K=i("1e2c"),Q={components:{GoodsPanel:K["a"]},data:function(){return{sort:"all",isLoading:!1,nowPage:1,timer:null}},computed:Object(a["a"])({},Object(r["d"])(["goodsList","goodsTotal","goodsType","isGet","counterMap"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["c"])(["changeSortType","resetGoodList","setIsGet"])),Object(r["b"])(["getGoodsList"])),{},{sortByType:function(t){"price"===t?"price-up"===this.sort?this.sort="price-down":this.sort="price-up":this.sort=t,this.changeSortType(this.sort),this.onRefresh()},onRefresh:function(){var t=this;this.resetGoodList(),this.nowPage=1,this.getGoodsList({type:this.goodsType,page:this.nowPage}).then((function(){console.log(t.goodsTotal),console.log(t.goodsList),t.isLoading=!1,t.setIsGet(!0)}))},scrollHandle:function(t){var e=this,i=t.target,s=i.scrollHeight,n=i.scrollTop,o=i.clientHeight,c=s-n-o;c<100&&this.isGet&&this.goodsList&&(this.setIsGet(!1),this.nowPage+=1,this.getGoodsList({type:this.goodsType,page:this.nowPage}).then((function(){e.goodsList.length>=e.goodsTotal?(e.setIsGet(!1),e.nowPage=1):e.setIsGet(!0),console.log(e.goodsList)})))}})},V=Q,Z=(i("86eb"),Object(g["a"])(V,F,q,!1,null,"62ca21cc",null)),tt=Z.exports,et={components:{ScrollTab:H,SideBar:W,GoodsList:tt},data:function(){return{menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},computed:Object(a["a"])({},Object(r["d"])(["isLoading"]))},it=et,st=(i("27fa"),Object(g["a"])(it,U,B,!1,null,"3d6373fc",null)),nt=st.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"car-wrap"},[i("div",{staticClass:"car-header"},[i("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.onDel}})],1),0!==t.counterMapLen?i("div",{staticClass:"car-content"},[i("div",{staticClass:"car-list"},[i("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.list,(function(e){return i("div",{key:e._id,staticClass:"checkbox-wrap"},[i("van-checkbox",{staticClass:"checkbox",attrs:{name:e.id}}),i("GoodsPanel",t._b({attrs:{num:t.counterMap[e.id],isShoppingCar:!0}},"GoodsPanel",e,!1))],1)})),0)],1),i("div",{staticClass:"car-submit"},[i("van-submit-bar",{attrs:{price:t.totalMoney,"button-text":"去结算("+t.totalNum+")"},on:{submit:t.onSubmit}},[i("van-checkbox",{on:{click:t.selectAll},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)]):i("div",{staticClass:"empty"},[i("van-empty",{attrs:{image:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/shopping_bg.jpg","image-size":"100%"}},[i("van-button",{staticClass:"bottom-button",attrs:{round:"",type:"danger"},on:{click:function(e){return t.$router.push({name:"classify"})}}},[t._v("来选购吧")])],1)],1)])},ct=[],at=i("1da1"),rt=(i("96cf"),i("4de4"),i("caad"),i("2532"),i("b64b"),i("a15b"),i("159b"),i("c40e")),ut=i("d399"),lt=i("2241"),gt={components:{GoodsPanel:K["a"]},data:function(){return{result:[],list:[],checked:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(r["d"])(["counterMap"])),{},{totalMoney:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){return e+(Math.floor(i.price*t.counterMap[i.id]*100)||0)}),0);return i},totalNum:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){return e+(t.counterMap[i.id]||0)}),0);return i},counterMapLen:function(){return Object.keys(this.counterMap).length}}),methods:Object(a["a"])(Object(a["a"])({},Object(r["c"])(["changeStorage"])),{},{selectAll:function(){this.result.length===this.list.length?this.$refs.checkboxGroup.toggleAll(!1):this.$refs.checkboxGroup.toggleAll(!0)},onSubmit:function(){Object(ut["a"])("付款功能待实现")},getAllDate:function(){var t=this;return Object(at["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object.keys(t.counterMap),e.next=3,rt["a"].getGoodsByIds({value:i.join()});case 3:s=e.sent,t.list=s.list,0!==t.list.length&&t.$nextTick((function(){t.$refs.checkboxGroup.toggleAll(!0)}));case 6:case"end":return e.stop()}}),e)})))()},onDel:function(){var t=this;return Object(at["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.result.length){e.next=3;break}return Object(ut["a"])("你还没有选中任何商品哦"),e.abrupt("return");case 3:return e.prev=3,e.next=6,lt["a"].confirm({title:"注意",message:"确认要删除选中的商品吗？"});case 6:t.result.forEach((function(e){t.changeStorage({id:e,val:-1/0})})),t.list=t.list.filter((function(e){return!t.result.includes(e.id)})),t.result=[],e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),Object(ut["a"])("您已取消删除");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}),watch:{result:function(t){t.length!==this.list.length?this.checked=!1:this.checked=!0}},created:function(){this.getAllDate()}},dt=gt,pt=(i("fdb6"),Object(g["a"])(dt,ot,ct,!1,null,"12387ac0",null)),mt=pt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("van-notice-bar",{attrs:{"left-icon":"volume-o",text:"欢迎来到“生鲜超值购”商城，更多丰富功能即将上线，敬请期待！"}}),i("div",{staticClass:"msg"},[t._v("我的 待完善")])],1)},ft=[],bt=(i("dfb4"),{}),vt=Object(g["a"])(bt,ht,ft,!1,null,null,null),yt=vt.exports;s["a"].use(m["a"]);var jt=[{path:"/home",redirect:"/home/classify",component:C,children:[{path:"index",component:S},{path:"classify",name:"classify",component:nt},{path:"shoppingcar",component:mt},{path:"mine",component:yt}]},{path:"/search",name:"search",component:function(){return i.e("chunk-97ce6350").then(i.bind(null,"2d3b"))}},{path:"*",redirect:"/home"}],Lt=new m["a"]({mode:"hash",base:"",routes:jt}),kt=Lt,Ot=i("2909");i("99af");s["a"].use(r["a"]);var xt=new r["a"].Store({state:{sideBarList:[],goodsList:[],goodsTotal:0,sortType:"all",goodsType:"",size:10,isLoading:!1,isGet:!0,counterMap:{}},mutations:{getSideBarList:function(t,e){t.sideBarList=e},getGoodsList:function(t,e){t.goodsList=e},getGoodsTotal:function(t,e){t.goodsTotal=e},resetGoodList:function(t){t.goodsList=[]},changeSortType:function(t,e){t.sortType=e},setGoodsType:function(t,e){t.goodsType=e},setIsLoading:function(t,e){t.isLoading=e},setIsGet:function(t,e){t.isGet=e},setCounterMap:function(t,e){t.counterMap=e},changeStorage:function(t,e){var i=e.id,n=e.val;t.counterMap[i]?-1===n&&1===t.counterMap[i]||n===-1/0?s["a"].delete(t.counterMap,i):s["a"].set(t.counterMap,i,t.counterMap[i]+n):t.counterMap[i]||-1===n||s["a"].set(t.counterMap,i,1),localStorage.setItem("goodsCounterMap",JSON.stringify(t.counterMap))}},actions:{getSideBarList:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t.commit,i.next=3,rt["a"].getSideBar({type:e});case 3:n=i.sent,s("getSideBarList",n);case 5:case"end":return i.stop()}}),i)})))()},getGoodsList:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function i(){var s,n,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t.state,n=t.commit,n("setGoodsType",e.type),i.next=4,rt["a"].getGoods(Object(a["a"])({sort:s.sortType,size:s.size,type:s.goodsType},e));case 4:o=i.sent,n("getGoodsList",[].concat(Object(Ot["a"])(s.goodsList),Object(Ot["a"])(o.list))),n("getGoodsTotal",o.total);case 7:case"end":return i.stop()}}),i)})))()}},modules:{}});i("23be"),i("499a"),i("157a");s["a"].use(n["a"]),s["a"].config.productionTip=!1,new s["a"]({router:kt,store:xt,render:function(t){return t(p)}}).$mount("#app")},"7c55":function(t,e,i){"use strict";i("2395")},"86eb":function(t,e,i){"use strict";i("8a9d")},"8a9d":function(t,e,i){},"8d91":function(t,e,i){},ad01:function(t,e,i){},b20b:function(t,e,i){},b574:function(t,e,i){},c40e:function(t,e,i){"use strict";var s=i("bc3a"),n=i.n(s),o=n.a.create({baseURL:"https://mallapi.duyiedu.com/goods/",params:{appkey:"allen-he_1615964041245"}});o.interceptors.response.use((function(t){return t.data}));var c=o;e["a"]={getSideBar:function(t){return c.get("/getsidebar",{params:t})},getGoods:function(t){return console.log(t),c.get("/getGoodsList",{params:t})},getLikeSearch:function(t){return c.get("/likeSearch",{params:t})},getSearch:function(t){return c.get("/search",{params:t})},getGoodsByIds:function(t){return c.get("/getGoodsByIds",{params:t})}}},de16:function(t,e,i){"use strict";i("8d91")},dfb4:function(t,e,i){"use strict";i("ea3d")},e39b:function(t,e,i){"use strict";i("ad01")},e71c:function(t,e,i){"use strict";i("4e9c")},ea3d:function(t,e,i){},f460:function(t,e,i){},fdb6:function(t,e,i){"use strict";i("b574")},ff42:function(t,e,i){"use strict";i("3e74")}});
//# sourceMappingURL=app.cbbcab24.js.map