webpackJsonp([2],{"+Vpd":function(t,e){},"4Yfd":function(t,e){},"9n10":function(t,e){},I5HO:function(t,e){},JaNr:function(t,e){},LT3s:function(t,e){},LqYn:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("R9Mj")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("b8UZ"),u={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n            "+this._s(this.city)+"\n            "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n        输入城市/景点/游玩主题\n    ")])}]};var p=i("VU/8")(u,d,!1,function(t){i("+Vpd")},"data-v-36ac4dbe",null).exports,h={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",autoplay:3e3,loop:!0}}},computed:{showSwiper:function(){return this.swiperList.length}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(e){return i("swiper-slide",{key:e.id},[i("img",{staticClass:"swiper-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"img"})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},staticRenderFns:[]};var v=i("VU/8")(h,f,!1,function(t){i("LT3s")},"data-v-4dd4d650",null).exports,m={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"icons"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"content"},[i("div",{staticClass:"icon"},[i("img",{staticClass:"icon-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-dsc"},[t._v(t._s(e.desc))])])}),0)])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var w=i("VU/8")(m,_,!1,function(t){i("NSVb")},"data-v-873a4f14",null).exports,C={name:"HomeRecommend",props:{recommendList:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("详情介绍")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(C,y,!1,function(t){i("PH9F")},"data-v-10a5ac84",null).exports,b={name:"HomeWeekend",props:{weekendList:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var L=i("VU/8")(b,k,!1,function(t){i("YnMS")},"data-v-0b17b6c6",null).exports,S=i("I29D"),$=i.n(S),x={name:"Home",components:{HomeHeader:p,HomeSwiper:v,HomeIcons:w,HomeRecommend:g,HomeWeekend:L},data:function(){return{lastCity:"",iconList:[],recommendList:[],swiperList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){"北京"!==this.city?$.a.get("api/index.json?city="+this.city).then(this.getHomeInfoSucc):$.a.get("api/beijing.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.iconList=e.iconList,this.recommendList=e.recommendList,this.swiperList=e.swiperList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo(),this.lastCity=this.city},activated:function(){this.city!==this.lastCity&&(this.getHomeInfo(),this.lastCity=this.city)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var T=i("VU/8")(x,H,!1,function(t){i("LqYn")},"data-v-2e74fc82",null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{staticClass:"titlt"},[this._v("城市选择")])],1)},staticRenderFns:[]};var O=i("VU/8")({name:"CityHeader"},E,!1,function(t){i("yGbS")},"data-v-09e0d085",null).exports,U=i("/QXl"),j={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null,hasNoData:!1}},methods:c()({handleCityClick:function(t){this.cityChange(t),this.$router.push("/")}},Object(l.b)(["cityChange"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.name.indexOf(t.keyword)>-1||i.spell.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e,t.list.length?t.hasNoData=!1:t.hasNoData=!0},100):this.list=[]}},mounted:function(){this.scroll=new U.a(this.$refs.list)}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入要搜索的城市"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"list",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var N=i("VU/8")(j,F,!1,function(t){i("JaNr")},"data-v-44ce12a6",null).exports,R={name:"CityList",props:{cities:Object,hot:Array,letter:String},computed:c()({},Object(l.c)(["city"])),methods:c()({handleCityClick:function(t){this.cityChange(t),this.$router.push("/")}},Object(l.b)(["cityChange"])),mounted:function(){this.scroll=new U.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"content"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"wrapper"},t._l(t.hot,function(e,s){return i("div",{key:s,staticClass:"content",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])}),0)])})],2)])},staticRenderFns:[]};var I=i("VU/8")(R,V,!1,function(t){i("4Yfd")},"data-v-93d1621a",null).exports,D={name:"CityAlphabet",data:function(){return{touchStatus:!1,startY:0}},props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer||(this.timer=setTimeout(function(){var i=t.touches[0].clientY,s=Math.floor((i-e.startY-79)/20),n=e.letters.length;s>=0&&s<n&&e.$emit("change",e.letters[s]),e.timer=null},16)))},handleTouchEnd:function(){this.touchStatus=!1}},updated:function(){this.startY=this.$refs.A[0].offsetTop}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"wrapper"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n        "+t._s(e)+"\n    ")])}),0)},staticRenderFns:[]};var Y={name:"City",components:{CityHeader:O,CitySearch:N,CityList:I,CityAlphabet:i("VU/8")(D,M,!1,function(t){i("lYzQ")},"data-v-4fb32bc7",null).exports},data:function(){return{cities:{},hot:[],letter:""}},methods:{getCityInfo:function(){$.a.get("api/city.json").then(this.handleCityInfo)},handleCityInfo:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hot=e.hotCities}},handleLetter:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hot,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetter}})],1)},staticRenderFns:[]};var P=i("VU/8")(Y,A,!1,function(t){i("I5HO")},"data-v-0227f218",null).exports;s.a.use(r.a);var z=new r.a({routes:[{path:"/",name:"Home",component:T},{path:"/city",name:"City",component:P},{path:"/detail/:id",name:"Detail",component:function(){return i.e(0).then(i.bind(null,"G9XZ"))}}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),G="哈尔滨";try{localStorage.city&&(G=localStorage.city)}catch(t){}var q={city:G},B={cityChange:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var J=new l.a.Store({state:q,actions:{cityChange:function(t,e){t.commit("cityChange",e)}},mutations:B}),Q=i("iDdd"),W=i.n(Q),X=i("41jX"),Z=i.n(X);i("aEDl"),i("9n10"),i("M6Sr"),i("TzC8");s.a.config.productionTip=!1,W.a.attach(document.body),s.a.use(Z.a),new s.a({el:"#app",router:z,store:J,components:{App:a},template:"<App/>"})},NSVb:function(t,e){},PH9F:function(t,e){},R9Mj:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},YnMS:function(t,e){},aEDl:function(t,e){},lYzQ:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},yGbS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fd9d9cba0b9558570aa5.js.map