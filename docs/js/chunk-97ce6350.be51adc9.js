(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97ce6350"],{"03a8":function(t,e,n){"use strict";n("bd16")},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,u,l){var f=n+t.length,h=s.length,p=c;return void 0!==u&&(u=r(u),p=o),i.call(l,p,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=u[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>h){var l=a(c/10);return 0===l?r:l<=h?void 0===s[l-1]?i.charAt(1):s[l-1]+i.charAt(1):r}o=s[c-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2d3b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"search-nav"},[n("form",{attrs:{action:"/"}},[n("van-search",{staticClass:"search-box",attrs:{"show-action":"",shape:"round",placeholder:t.placeholderText},on:{input:t.onInput,search:t.onSearch,focus:t.onFocus},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",{staticClass:"back",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.push("/home/classify")}}})]},proxy:!0},t.showSearch?{key:"action",fn:function(){return[n("div",{staticClass:"search",on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[n("van-icon",{staticClass:"shopping-car",attrs:{name:"shopping-cart-o",badge:t.carBadgeNum},on:{touchend:function(e){return t.$router.push("./home/shoppingcar")}}})]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t.showList?t._e():n("div",{staticClass:"search-likeVal"},[n("van-list",t._l(t.likeValList,(function(e){return n("van-cell",{key:e,attrs:{title:e},on:{click:function(n){return t.clickLikeVal(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title",domProps:{innerHTML:t._s(t.markVal(e))}})]},proxy:!0}],null,!0)})})),1)],1),t.showList?n("div",{staticClass:"search-content"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.searchList,(function(e){return n("GoodsPanel",t._b({key:e._id,attrs:{num:t.counterMap[e.id],noFly:!0}},"GoodsPanel",e,!1))})),1)],1):t._e(),t.showList||0!==t.likeValList.length?t._e():n("div",{staticClass:"search-history"},[n("History",{attrs:{list:t.historyList},on:{search:function(e){return t.searchByHistory(e)}}})],1)])},a=[],i=n("2909"),o=n("1da1"),c=n("5530"),s=(n("96cf"),n("13d5"),n("07ac"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("9767"),n("7db0"),n("99af"),n("1e2c")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history"},[n("h4",[t._v("历史记录：")]),t._l(t.list,(function(e){return n("div",{key:e.time,staticClass:"history-item",on:{click:function(n){return t.$emit("search",e.value)}}},[t._v(t._s(e.value))])}))],2)},l=[],f={props:{list:Array}},h=f,p=(n("be97"),n("2877")),d=Object(p["a"])(h,u,l,!1,null,"22ca6c8b",null),v=d.exports,g=n("c40e"),x=n("2f62"),y={components:{GoodsPanel:s["a"],History:v},data:function(){return{placeholderText:"水",value:"",likeValList:[],timer:null,searchList:[],loading:!1,finished:!1,nowPage:1,showList:!1,showSearch:!0,historyList:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(x["d"])(["counterMap"])),{},{carBadgeNum:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return 0===t?"":t>=100?"99+":t}}),methods:{searchByHistory:function(t){this.value=t,this.onSearch()},clickLikeVal:function(t){this.value=t,this.onSearch()},markVal:function(t){var e=new RegExp(this.value,"g");return t.replace(e,this.value.fontcolor("red"))},onInput:function(){var t=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.value?this.timer=setTimeout(Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].getLikeSearch({likeValue:t.value});case 2:n=e.sent,t.likeValList=n.result;case 4:case"end":return e.stop()}}),e)}))),300):this.likeValList=[]},onSearch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return""===t.value&&(t.value=t.placeholderText),t.showSearch=!t.showSearch,e.next=4,g["a"].getSearch({type:t.value,page:1,size:10});case 4:n=e.sent,t.searchList=n.list,t.showList=!0,r=t.historyList.find((function(e){return e.value===t.value})),r?(r.time=(new Date).getTime(),t.historyList.sort((function(t,e){return e.time-t.time}))):(t.historyList.push({value:t.value,time:(new Date).getTime()}),t.historyList.length>10&&t.historyList.pop()),localStorage.setItem("searchHistory",JSON.stringify(t.historyList));case 10:case"end":return e.stop()}}),e)})))()},onLoad:function(){var t=this;this.nowPage+=1,g["a"].getSearch({type:this.value,page:this.nowPage,size:10}).then((function(e){t.searchList=[].concat(Object(i["a"])(t.searchList),Object(i["a"])(e.list)),t.loading=!1,t.searchList.length>=e.total&&(t.finished=!0)}))},onFocus:function(){this.showList&&(this.showSearch=!this.showSearch),this.searchList=[],this.showList=!1}},created:function(){this.historyList=JSON.parse(localStorage.getItem("searchHistory"))||[]}},b=y,m=(n("03a8"),Object(p["a"])(b,r,a,!1,null,"1242163d",null));e["default"]=m.exports},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),i=n("94ca"),o=n("7156"),c=n("9bf2").f,s=n("241c").f,u=n("44e7"),l=n("ad6d"),f=n("9f7f"),h=n("6eeb"),p=n("d039"),d=n("69f3").set,v=n("2626"),g=n("b622"),x=g("match"),y=a.RegExp,b=y.prototype,m=/a/g,E=/a/g,S=new y(m)!==m,w=f.UNSUPPORTED_Y,k=r&&i("RegExp",!S||w||p((function(){return E[x]=!1,y(m)!=m||y(E)==E||"/a/i"!=y(m,"i")})));if(k){var L=function(t,e){var n,r=this instanceof L,a=u(t),i=void 0===e;if(!r&&a&&t.constructor===L&&i)return t;S?a&&!i&&(t=t.source):t instanceof L&&(i&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=o(S?new y(t,e):y(t,e),r?this:b,L);return w&&n&&d(c,{sticky:n}),c},R=function(t){t in L||c(L,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},_=s(y),I=0;while(_.length>I)R(_[I++]);b.constructor=L,L.prototype=b,h(a,"RegExp",L)}v("RegExp")},"50a9":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),c=n("1d80"),s=n("8aa5"),u=n("0cb2"),l=n("14c3"),f=Math.max,h=Math.min,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=d?"$":"$0";return[function(n,r){var a=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!d&&v||"string"===typeof r&&-1===r.indexOf(g)){var c=n(e,t,this,r);if(c.done)return c.value}var x=a(t),y=String(this),b="function"===typeof r;b||(r=String(r));var m=x.global;if(m){var E=x.unicode;x.lastIndex=0}var S=[];while(1){var w=l(x,y);if(null===w)break;if(S.push(w),!m)break;var k=String(w[0]);""===k&&(x.lastIndex=s(y,i(x.lastIndex),E))}for(var L="",R=0,_=0;_<S.length;_++){w=S[_];for(var I=String(w[0]),P=f(h(o(w.index),y.length),0),T=[],C=1;C<w.length;C++)T.push(p(w[C]));var O=w.groups;if(b){var $=[I].concat(T,P,y);void 0!==O&&$.push(O);var A=String(r.apply(void 0,$))}else A=u(I,y,P,T,O,r);P>=R&&(L+=y.slice(R,P)+A,R=P+I.length)}return L+y.slice(R)}]}))},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").find,i=n("44d2"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"857a":function(t,e,n){var r=n("1d80"),a=/"/g;t.exports=function(t,e,n,i){var o=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+o+"</"+e+">"}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),s=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],h=u||f||l;h&&(s=function(t){var e,n,a,i,s=this,h=l&&s.sticky,p=r.call(s),d=s.source,v=0,g=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",p)),f&&(n=new RegExp("^"+d+"$(?!\\s)",p)),u&&(e=s.lastIndex),a=o.call(h?n:s,g),h?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=s.lastIndex,s.lastIndex+=a[0].length):s.lastIndex=0:u&&a&&(s.lastIndex=s.global?a.index+a[0].length:e),f&&a&&a.length>1&&c.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=s},9767:function(t,e,n){"use strict";var r=n("23e7"),a=n("857a"),i=n("af03");r({target:"String",proto:!0,forced:i("fontcolor")},{fontcolor:function(t){return a(this,"font","color",t)}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bd16:function(t,e,n){},be97:function(t,e,n){"use strict";n("50a9")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),s=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=i(t),v=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!g||"replace"===t&&(!u||!l||h)||"split"===t&&!p){var x=/./[d],y=n(d,""[t],(function(t,e,n,r,a){return e.exec===o?v&&!a?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=y[0],m=y[1];r(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-97ce6350.be51adc9.js.map