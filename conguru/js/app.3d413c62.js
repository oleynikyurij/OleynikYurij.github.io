(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/conguru/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0034":function(t,e,a){},"04aa":function(t,e,a){t.exports=a.p+"img/event-4.d63e2069.jpg"},"0541":function(t,e,a){t.exports=a.p+"img/3.eae17d3e.jpg"},"0d29":function(t,e,a){t.exports=a.p+"img/linkedin.4b475fb3.svg"},"0dab":function(t,e,a){t.exports=a.p+"img/like.8ce6711a.svg"},"15ce":function(t,e,a){t.exports=a.p+"img/marker.893d2b57.svg"},"1e2e":function(t,e,a){"use strict";var s=a("3fef"),i=a.n(s);i.a},"282f":function(t,e,a){t.exports=a.p+"img/facebook.c0cd1382.svg"},"2c36":function(t,e,a){"use strict";var s=a("8df5"),i=a.n(s);i.a},"2d59":function(t,e,a){t.exports=a.p+"img/no-ok.91da3331.svg"},"3fef":function(t,e,a){},4857:function(t,e,a){"use strict";var s=a("e761"),i=a.n(s);i.a},4861:function(t,e,a){},"4a7d":function(t,e,a){"use strict";var s=a("da28"),i=a.n(s);i.a},"4d2d":function(t,e,a){"use strict";var s=a("eb29"),i=a.n(s);i.a},"4da4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"content"},[a("HeaderBlock"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("FooterBlock")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("header",{staticClass:"header"},[s("div",{staticClass:"header__logo"},[s("h1",{staticClass:"header__h1"},[s("router-link",{attrs:{to:"/"}},[t._v(" CONGU"),s("span",[t._v("RU")])])],1)]),s("span",{staticClass:"line"}),s("button",{staticClass:"header__btn header__btn--world",on:{click:t.searchCity}},[t._v(" "+t._s(t.city)+" "),s("img",{attrs:{src:a("15ce"),alt:"marker"}})]),s("input",{staticClass:"header__search",attrs:{type:"text",placeholder:"conferences, events, topics, speakers…"}}),t._m(0),s("span",{staticClass:"line"}),s("router-link",{staticClass:"header__btn",attrs:{tag:"button",to:"/login"}},[s("img",{staticClass:"people",attrs:{src:a("6b3b"),alt:"people"}})])],1)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"header__btn"},[s("img",{staticClass:"like",attrs:{src:a("0dab"),alt:"like"}})])}],o={name:"HeaderBlock",data:function(){return{city:"world"}},created:function(){var t=this;Yt.$on("enterCity",(function(e){return t.city=e}))},beforeDestroy:function(){$eventBus.$off("enterCity")},methods:{searchCity:function(){Yt.$emit("searchCityModal")}},computed:{}},l=o,u=(a("1e2e"),a("2877")),d=Object(u["a"])(l,r,c,!1,null,"73fde7a1",null),v=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("p",{staticClass:"footer__title"},[t._v(" © "),a("span",[t._v("CONGURU.HR")])]),a("ul",{staticClass:"footer__menu"},[a("li",{staticClass:"menu__item"},[a("a",{staticClass:"menu__link"},[t._v("Terms of Service")])]),a("li",{staticClass:"menu__item"},[a("a",{staticClass:"menu__link"},[t._v("Privacy Policy")])]),a("li",{staticClass:"menu__item"},[a("a",{staticClass:"menu__link"},[t._v("Send Feedback")])]),a("li",{staticClass:"menu__item"},[a("a",{staticClass:"menu__link"},[t._v("Help Center")])]),a("li",{staticClass:"menu__item"},[a("a",{staticClass:"menu__link"},[t._v("Support")])])])])}],g={name:"HeaderBlock",data:function(){return{}}},h=g,p=(a("4a7d"),Object(u["a"])(h,m,f,!1,null,"332c0675",null)),_=p.exports,C={name:"App",components:{HeaderBlock:v,FooterBlock:_}},b=C,k=(a("5c0b"),Object(u["a"])(b,i,n,!1,null,null,null)),y=k.exports,$=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("h3",{staticClass:"events__title"},[t._v("Conferences: "+t._s(this.loaderShow?"Loading..":t.Events.length))]),a("div",{staticClass:"event__filter"},[a("div",{staticClass:"search-block"},[a("button",{staticClass:"btn__filters btn",class:{active:t.searchActiveDate},on:{click:function(e){return e.preventDefault(),t.searchDates(e)}}},[t._v("all dates")]),a("button",{staticClass:"btn__filters btn",class:{active:t.searchActiveTags},on:{click:function(e){return e.preventDefault(),t.searchTags(e)}}},[t.countTag>0?a("span",{staticClass:"count"},[t._v(t._s(t.countTag))]):t._e(),0==t.countTag?a("span",[t._v("all")]):t._e(),t._v(" tags ")]),a("button",{staticClass:"btn__filters btn",class:{active:t.searchActiveSpeakers},on:{click:function(e){return e.preventDefault(),t.searchSpeakers(e)}}},[t.countSpeakers>0?a("span",{staticClass:"count"},[t._v(t._s(t.countSpeakers))]):t._e(),0==t.countSpeakers?a("span",[t._v("all")]):t._e(),t._v(" speakers ")]),t.searchActiveDate?a("SearchDate"):t._e(),t.searchActiveTags?a("SearchTag"):t._e(),t.searchActiveSpeakers?a("SearchSpeakers"):t._e()],1),t._m(0)]),this.loaderShow?a("Loader"):a("div",{staticClass:"events__blocks"},t._l(t.Events,(function(t){return a("EventBlock",{key:t.id,attrs:{item:t}})})),1),a("router-link",{attrs:{to:"/form"}},[a("span",{staticClass:"btn__add"},[t._v("TELL US ABOUT MISSED HR EVENT")])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showModal?a("div",{staticClass:"modal",on:{click:t.closemodal}},[a("div",{staticClass:"popup",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"top"},[a("span",{staticClass:"close",on:{click:t.closemodal}},[t._v("×")]),a("h5",[t._v(t._s(t.enterCity))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localCity,expression:"localCity"}],staticClass:"search",attrs:{type:"text"},domProps:{value:t.localCity},on:{input:[function(e){e.target.composing||(t.localCity=e.target.value)},function(e){return t.searchCity(e)}],focus:t.clearInput}}),a("p",[t._v("WORLD")]),a("div",{staticClass:"city-list"},t._l(t.city,(function(e,s){return a("span",{key:s,staticClass:"city-item",on:{click:function(e){return t.checkCity(e)}}},[t._v(t._s(e))])})),0)]),a("div",{staticClass:"city-btn"},[a("button",{staticClass:"btn btn__clear",on:{click:t.resetFilter}},[t._v("clear")]),a("button",{staticClass:"btn btn__apply",on:{click:t.filterEvent}},[t._v("apply")])])])]):t._e()])],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn__popular active"},[t._v("popular")]),a("span",{staticClass:"line"}),a("button",{staticClass:"btn btn__popular"},[t._v("nearest")])])}],x=(a("ac6a"),a("96cf"),a("3b8d")),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item item-cursor",on:{click:function(e){return e.preventDefault(),t.goEvent(t.item.id)}}},[a("div",{staticClass:"item__logo"},[t.item.logo_show?a("img",{attrs:{alt:"logo event",src:"image/"+t.item.logo}}):a("div",{staticClass:"item__title"},[t._v(t._s(t.item.name))])]),a("div",{staticClass:"line"}),a("div",{staticClass:"item__date"},[t._v(t._s(t._f("date")(t.item.date)))]),a("div",{staticClass:"item__count"},[a("span",[t._v(t._s(t.item.attehds))]),t._v(" attendes ")]),a("div",{staticClass:"item__locate"},[t._v(t._s(t.item.venue)+", "+t._s(t.item.city))])])},T=[],E={name:"EventBlock",props:["item"],data:function(){return{nameEvent:"NAME",itemLogoShow:!0}},computed:{},methods:{goEvent:function(t){this.$router.push({name:"Event",params:{id:t}})}}},O=E,j=(a("4857"),Object(u["a"])(O,L,T,!1,null,null,null)),D=j.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-loader"},[a("div",{staticClass:"preloader"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])}],P={},M=P,N=(a("aed7"),Object(u["a"])(M,A,I,!1,null,"282379e6",null)),q=N.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"search",mode:"in-out"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"filter-block"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSpeaker,expression:"searchSpeaker"}],staticClass:"search",attrs:{type:"text"},domProps:{value:t.searchSpeaker},on:{input:function(e){e.target.composing||(t.searchSpeaker=e.target.value)}}})]),t.selectedSpeakers.length>0?a("div",{staticClass:"selected"},t._l(t.selected,(function(e,s){return a("div",{key:s,staticClass:"selected-item"},[a("span",[t._v(t._s(e))]),a("span",{staticClass:"close",on:{click:function(a){return t.deleteSpeaker(e)}}},[t._v("×")])])})),0):a("div",{staticClass:"selected"},[a("div",{staticClass:"selected-info"},[t._v(" select speakers ")])]),a("div",{staticClass:"list"},t._l(t.speakers,(function(e,s){return a("div",{key:s,staticClass:"list-item",on:{click:function(a){return t.addSpeaker(e)}}},[t._v(t._s(e))])})),0),a("div",{staticClass:"search-btn"},[a("button",{staticClass:"btn btn__clear",on:{click:t.clearSpeakers}},[t._v("clear")]),a("button",{staticClass:"btn btn__apply"},[t._v("apply")])])])])])},B=[];a("6762"),a("ac4d"),a("8a81");function H(t){var e=[],a=!0,s=!1,i=void 0;try{for(var n,r=t[Symbol.iterator]();!(a=(n=r.next()).done);a=!0){var c=n.value;e.includes(c)||e.push(c)}}catch(o){s=!0,i=o}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return e}var U=H,F={name:"SearchSpeakers",data:function(){return{selectedSpeakers:[],speakerList:[],searchSpeaker:""}},created:function(){this.speakerList=this.$store.getters.speakers},beforeDestroy:function(){Yt.$off("countSpeakers")},methods:{addSpeaker:function(t){this.selectedSpeakers.push(t),Yt.$emit("countSpeakers",U(this.selectedSpeakers).length)},deleteSpeaker:function(t){var e=this.selectedSpeakers.indexOf(t);this.selectedSpeakers.splice(e,1),Yt.$emit("countSpeakers",U(this.selectedSpeakers).length)},clearSpeakers:function(){this.selectedSpeakers=[],this.searchSpeaker="",Yt.$emit("countSpeakers",U(this.selectedSpeakers).length)}},computed:{speakers:function(){var t=this,e=this.speakerList.filter((function(e){return e.toLowerCase().trim().indexOf(t.searchSpeaker.toLowerCase().trim())>-1}));return e},selected:function(){return U(this.selectedSpeakers)}}},K=F,V=(a("6f92"),Object(u["a"])(K,R,B,!1,null,"1ed9d70e",null)),J=V.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"search",mode:"in-out"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"filter-block"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTag,expression:"searchTag"}],staticClass:"search",attrs:{type:"text"},domProps:{value:t.searchTag},on:{input:function(e){e.target.composing||(t.searchTag=e.target.value)}}})]),t.addTags.length>0?a("div",{staticClass:"selected"},t._l(t.selected,(function(e,s){return a("div",{key:s,staticClass:"selected-item"},[a("span",[a("span",[t._v(t._s(e))]),a("span",{staticClass:"close",on:{click:function(a){return t.deleteTag(e)}}},[t._v("×")])])])})),0):a("div",{staticClass:"selected"},[a("div",{staticClass:"selected-info"},[t._v("select tags")])]),a("div",{staticClass:"list"},t._l(t.tags,(function(e,s){return a("div",{key:s,staticClass:"list-item",on:{click:function(a){return t.addTag(e)}}},[t._v(t._s(e))])})),0),a("div",{staticClass:"search-btn"},[a("button",{staticClass:"btn btn__clear",on:{click:t.clearTags}},[t._v("clear")]),a("button",{staticClass:"btn btn__apply",on:{click:t.addSelectTag}},[t._v("apply")])])])])])},W=[],z={name:"SearchTag",data:function(){return{addTags:[],tagsList:[],searchTag:""}},created:function(){this.tagsList=this.$store.getters.tags},beforeDestroy:function(){Yt.$off("countTag")},methods:{addTag:function(t){this.addTags.push(t),Yt.$emit("countTag",U(this.addTags).length)},deleteTag:function(t){var e=this.addTags.indexOf(t);this.addTags.splice(e,1),Yt.$emit("countTag",U(this.addTags).length)},clearTags:function(){this.addTags=[],this.searchTag="",this.$store.dispatch("selectTag",[]),Yt.$emit("countTag",U(this.addTags).length)},addSelectTag:function(){this.$store.dispatch("selectTag",this.addTags)}},computed:{tags:function(){var t=this,e=this.tagsList;return e=this.tagsList.filter((function(e){return e.toLowerCase().trim().indexOf(t.searchTag.toLowerCase().trim())>-1})),e},selected:function(){return U(this.addTags)}}},Q=z,X=(a("2c36"),Object(u["a"])(Q,G,W,!1,null,"fb2a54b2",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"search",mode:"in-out"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"filter-block"},[a("div",{staticClass:"select-interval"},[a("button",{staticClass:"btn active"},[t._v("2 weeks")]),a("button",{staticClass:"btn"},[t._v("3 month")]),a("button",{staticClass:"btn"},[t._v("1 year")]),a("button",{staticClass:"btn"},[t._v("all dates")])]),a("div",{staticClass:"select-date"},[a("v-date-picker",{attrs:{"is-inline":"",mode:"range",color:"red"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),a("div",{staticClass:"search-btn"},[a("button",{staticClass:"btn btn__clear"},[t._v("clear")]),a("button",{staticClass:"btn btn__apply",on:{click:t.applyDateFilter}},[t._v("apply")])])])])])},tt=[],et={name:"SearchDate",data:function(){return{dates:new Date}},methods:{applyDateFilter:function(){console.log("start:",this.dates.start.toISOString().substring(0,10),"end:",this.dates.end.toISOString().substring(0,10))}}},at=et,st=(a("4d2d"),a("5724"),Object(u["a"])(at,Z,tt,!1,null,"56f730aa",null)),it=st.exports,nt={name:"HomePage",components:{EventBlock:D,Loader:q,SearchSpeakers:J,SearchTag:Y,SearchDate:it},data:function(){return{localCity:"",enterCity:"world",listEvents:[],filteredEvents:[],city:[],countTag:0,countSpeakers:0,showModal:!1,changeEventsList:!1,changeCityList:!1,searchActiveSpeakers:!1,searchActiveDate:!1,searchActiveTags:!1}},created:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getEvents");case 2:this.listEvents=this.$store.getters.getEventsList,this.city=this.$store.getters.getCityList,Yt.$on("searchCityModal",this.Modal);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeUpdate:function(){var t=this;Yt.$on("countTag",(function(e){return t.countTag=e})),Yt.$on("countSpeakers",(function(e){return t.countSpeakers=e}))},beforeDestroy:function(){Yt.$off("searchCityModal"),Yt.$off("enterCity"),Yt.$off("countTag"),Yt.$off("countSpeakers")},computed:{loaderShow:function(){return this.$store.getters.getLoader},Events:function(){var t=this.listEvents,e=this.$store.getters.selectTag,a=this.listEvents.filter((function(t){var a=!1;return t.tags.forEach((function(t){for(var s=0;s<e.length;s++)e[s]==t&&(a=!0)})),a}));return a.length>0?a:t}},methods:{Modal:function(){this.showModal=!0,this.localCity="",Yt.$emit("enterCity",this.enterCity),this.enterCity="world",this.changeCityList&&(this.changeCityList=!1),this.changeEventsList&&(this.changeEventsList=!1)},checkCity:function(t){this.localCity=this.enterCity=t.target.innerHTML,Yt.$emit("enterCity",this.enterCity)},clearInput:function(){this.localCity="",this.enterCity="world",Yt.$emit("enterCity",this.enterCity)},searchCity:function(t){var e=t.target.value.toLowerCase(),a=this.cityList.filter((function(t){return"world"==e||""==e||t.toLowerCase().indexOf(e)>-1}));this.changeCityList=!0,this.cityList=a},filterEvent:function(){var t=this,e=this.listEvents.filter((function(e){return e.city.toLowerCase().trim()==t.enterCity.toLowerCase()}));this.showModal=!1,Yt.$emit("enterCity",this.enterCity),this.changeEventsList=!0,this.listEvents=e},resetFilter:function(){this.localCity="",this.enterCity="world",Yt.$emit("enterCity",this.enterCity)},closemodal:function(){this.showModal=!1,this.clearInput(),this.resetFilter(),this.localCity=this.enterCity="world",Yt.$emit("enterCity",this.enterCity)},searchSpeakers:function(){this.searchActiveSpeakers=!this.searchActiveSpeakers,this.searchActiveTags=this.searchActiveDate=!1},searchTags:function(){this.searchActiveTags=!this.searchActiveTags,this.searchActiveSpeakers=this.searchActiveDate=!1},searchDates:function(){this.searchActiveDate=!this.searchActiveDate,this.searchActiveTags=this.searchActiveSpeakers=!1}}},rt=nt,ct=(a("721c"),Object(u["a"])(rt,w,S,!1,null,"43394207",null)),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("h3",{staticClass:"form__title"},[t._v("TELL US ABOUT MISSED HR EVENT")]),a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"name"}},[t._v("Event name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],class:{error:t.$v.name.$error},attrs:{id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.name.$dirty&&!t.$v.name.required?a("small",[t._v("Required field")]):t.$v.name.$dirty&&!t.$v.name.minLength?a("small",[t._v("Minimum length should be "+t._s(t.$v.name.$params.minLength.min))]):t.$v.name.$dirty&&!t.$v.name.maxLength?a("small",[t._v("Maximun length should be "+t._s(t.$v.name.$params.maxLength.max))]):t._e()]),a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"logo"}},[t._v("Event logo")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.logo,expression:"logo",modifiers:{trim:!0}}],attrs:{type:"text",id:"logo",disabled:""},domProps:{value:t.logo},on:{input:function(e){e.target.composing||(t.logo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"date"}},[t._v("Dates")]),a("v-date-picker",{staticClass:"wrap-inp",attrs:{mode:"range",color:"red",popover:{placement:"bottom",visibility:"click"},"min-date":new Date,"input-props":{class:"inp",placeholder:"Select date event",readonly:!0}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"venue"}},[t._v("Venue")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.venue,expression:"venue",modifiers:{trim:!0}}],class:{error:t.$v.venue.$error},attrs:{id:"venue"},domProps:{value:t.venue},on:{input:function(e){e.target.composing||(t.venue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.venue.$dirty&&!t.$v.venue.required?a("small",[t._v("Required field")]):t.$v.venue.$dirty&&!t.$v.venue.minLength?a("small",[t._v("Minimum length should be "+t._s(t.$v.name.$params.minLength.min))]):t.$v.name.$dirty&&!t.$v.name.maxLength?a("small",[t._v("Maximun length should be "+t._s(t.$v.name.$params.maxLength.max))]):t._e()]),a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"city"}},[t._v("City")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.city,expression:"city",modifiers:{trim:!0}}],class:{error:t.$v.city.$error},attrs:{type:"text",id:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.city.$dirty&&!t.$v.city.required?a("small",[t._v("Required field")]):t.$v.city.$dirty&&!t.$v.city.minLength?a("small",[t._v("Minimum length should be "+t._s(t.$v.city.$params.minLength.min))]):t.$v.name.$dirty&&!t.$v.name.maxLength?a("small",[t._v("Maximun length should be "+t._s(t.$v.name.$params.maxLength.max))]):t._e()]),a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item"},[a("label",{attrs:{for:"attendes"}},[t._v("Attendees")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.attehds,expression:"attehds",modifiers:{trim:!0}}],class:{error:t.$v.attehds.$error},attrs:{id:"attendes"},domProps:{value:t.attehds},on:{input:function(e){e.target.composing||(t.attehds=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.attehds.$dirty&&!t.$v.attehds.required?a("small",[t._v("Required field")]):t.$v.attehds.$dirty&&!t.$v.attehds.integer?a("small",[t._v("The field should contain only integer number")]):t.$v.attehds.$dirty&&!t.$v.attehds.minValue?a("small",[t._v("The number must be greater "+t._s(t.$v.attehds.$params.minValue.min))]):t._e()]),t._m(0)])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item__wrap"},[a("p",{staticClass:"form__item form__item--last"},[a("button",{staticClass:"btn__submint",attrs:{type:"submit"}},[t._v("send")])])])}],dt=(a("7f7f"),a("aede")),vt=a("b5ae"),mt=a("9530"),ft=a.n(mt);function gt(){var t=Object(dt["a"])(["\n            mutation(\n              $city: String!\n              $date: String!\n              $attehds: Int!\n              $logo: String\n              $logoShow: Boolean\n              $name: String!\n              $venue: String!\n              $dates: [String]!\n            ) {\n              insert_events(\n                objects: [\n                  {\n                    attehds: $attehds\n                    city: $city\n                    date: $date\n                    logo: $logo\n                    logo_show: $logoShow\n                    name: $name\n                    venue: $venue\n                    dates: $dates\n                  }\n                ]\n              ) {\n                returning {\n                  id\n                  attehds\n                  city\n                  date\n                  logo\n                  logo_show\n                  name\n                  venue\n                  dates\n                }\n              }\n            }\n          "]);return gt=function(){return t},t}var ht={name:"FormPage",components:{},data:function(){return{name:"",logo:"",date:"",venue:"",city:"",attehds:"",disabledDates:{to:new Date}}},validations:{name:{required:vt["required"],minLength:Object(vt["minLength"])(2),maxLength:Object(vt["maxLength"])(250)},venue:{required:vt["required"],minLength:Object(vt["minLength"])(2),maxLength:Object(vt["maxLength"])(250)},city:{required:vt["required"],minLength:Object(vt["minLength"])(1),maxLength:Object(vt["maxLength"])(250)},attehds:{required:vt["required"],integer:vt["integer"],minValue:Object(vt["minValue"])(10)}},methods:{submitForm:function(t){var e=this;if(this.$v.$invalid)return this.$v.$touch(),void console.log(this.date.start.toISOString().substring(0,10),this.date.end.toISOString().substring(0,10));var a=JSON.stringify([this.date.start.toISOString().substring(0,10),this.date.end.toISOString().substring(0,10)]);console.log(a),this.$apollo.mutate({mutation:ft()(gt()),variables:{attehds:this.attehds,city:this.city,date:this.date.start.toISOString().substring(0,10),dates:a,logo:this.logo,logoShow:!!this.logoShow,name:this.name,venue:this.venue}}).then((function(){e.name="",e.logo="",e.date="",e.venue="",e.city="",e.attehds=""})).catch((function(t){console.log(t)})),t.target.reset()}},filters:{},computed:{}},pt=ht,_t=(a("90b9"),a("8d4d"),Object(u["a"])(pt,lt,ut,!1,null,"a2d82750",null)),Ct=_t.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"left"},[s("div",{staticClass:"extended"},[s("img",{attrs:{src:a("0dab"),alt:"like"},on:{click:t.like}}),s("img",{attrs:{src:a("8096"),alt:"like"},on:{click:t.shared}})]),s("div",{staticClass:"item"},[s("div",{staticClass:"item__logo"},[t.item.logo_show?s("img",{attrs:{alt:"logo event",src:t.img}}):s("div",{staticClass:"item__title"},[t._v(t._s(t.item.name))])]),s("div",{staticClass:"item__date"},[t._v(t._s(t._f("date")(t.item.date)))]),s("div",{staticClass:"item__locate"},[t._v(t._s(t.item.venue)+", "+t._s(t.item.city))]),s("div",{staticClass:"item__count"},[s("span",[t._v(t._s(t.item.attehds))]),t._v(" attendes ")])]),s("button",{staticClass:"btn"},[t._v("buy tickets")]),s("div",{staticClass:"like-block"},[s("div",{staticClass:"like-item"},[s("a",[s("img",{attrs:{src:a("5a9a"),alt:"like"},on:{click:t.ok}})]),s("span",{staticClass:"count"},[t._v(t._s(t.liked))])]),s("div",{staticClass:"like-item"},[s("a",[s("img",{attrs:{src:a("2d59"),alt:"dislike"},on:{click:t.noOk}})]),s("span",{staticClass:"count"},[t._v(t._s(t.dislike))])])]),s("div",{staticClass:"tags-block"},[s("div",{staticClass:"tag"},[t._v("HRD")]),s("div",{staticClass:"tag"},[t._v("digital HR")]),s("div",{staticClass:"tag"},[t._v("seminar")]),s("div",{staticClass:"tag"},[t._v("leadership")]),s("div",{staticClass:"tag"},[t._v("401k plan")]),s("div",{staticClass:"tag"},[t._v("HR transformation")]),s("div",{staticClass:"tag"},[t._v("expo")]),s("div",{staticClass:"tag"},[t._v("stay positive")]),s("div",{staticClass:"tag"},[t._v("benefits")]),s("div",{staticClass:"tag"},[t._v("KPI")]),s("div",{staticClass:"tag"},[t._v("student loan")]),s("div",{staticClass:"tag"},[t._v("sexual harassment")]),s("div",{staticClass:"tag"},[t._v("AI hire")]),s("div",{staticClass:"tag"},[t._v("cultural of feedback")]),s("div",{staticClass:"tag"},[t._v("strategic HR")]),s("div",{staticClass:"tag"},[t._v("mental health")]),s("div",{staticClass:"tag"},[t._v("workplace")]),s("div",{staticClass:"tag"},[t._v("sertification")]),s("div",{staticClass:"tag"},[t._v("employee motivation")]),s("div",{staticClass:"tag"},[t._v("change management")]),s("div",{staticClass:"tag"},[t._v("cultural cransformation")]),s("div",{staticClass:"tag"},[t._v("wage")]),s("div",{staticClass:"tag"},[t._v("hours")]),s("div",{staticClass:"tag"},[t._v("compliance")]),s("div",{staticClass:"tag"},[t._v("talent retention")]),s("div",{staticClass:"tag"},[t._v("attraction")]),s("div",{staticClass:"tag"},[t._v("future of work")]),s("div",{staticClass:"tag"},[t._v("get sued")]),s("div",{staticClass:"tag"},[t._v("get sued")]),s("div",{staticClass:"tag"},[t._v("legalized marijuana")]),s("div",{staticClass:"tag"},[t._v("conflict")]),s("div",{staticClass:"tag"},[t._v("HR workshop")]),s("div",{staticClass:"tag"},[t._v("global expansión")]),s("div",{staticClass:"tag"},[t._v("creativity")]),s("div",{staticClass:"tag"},[t._v("Inovation")]),s("div",{staticClass:"tag"},[t._v("cultural cransformation")]),s("div",{staticClass:"tag"},[t._v("wage")]),s("div",{staticClass:"tag"},[t._v("hours")]),s("div",{staticClass:"tag"},[t._v("benefits")]),s("div",{staticClass:"tag"},[t._v("KPI")]),s("div",{staticClass:"tag"},[t._v("student loan")]),s("div",{staticClass:"tag"},[t._v("sexual harassment")]),s("div",{staticClass:"tag"},[t._v("AI hire")]),s("div",{staticClass:"tag"},[t._v("cultural of feedback")]),s("div",{staticClass:"tag"},[t._v("strategic HR")]),s("div",{staticClass:"tag"},[t._v("mental health")]),s("div",{staticClass:"tag"},[t._v("workplace")]),s("div",{staticClass:"tag"},[t._v("sertification")]),s("div",{staticClass:"tag"},[t._v("employee motivation")]),s("div",{staticClass:"tag"},[t._v("change management")]),s("div",{staticClass:"tag"},[t._v("cultural cransformation")]),s("div",{staticClass:"tag"},[t._v("wage")]),s("div",{staticClass:"tag"},[t._v("hours")]),s("div",{staticClass:"tag"},[t._v("compliance")]),s("div",{staticClass:"tag"},[t._v("talent retention")]),s("div",{staticClass:"tag"},[t._v("attraction")]),s("div",{staticClass:"tag"},[t._v("future of work")])])]),s("div",{staticClass:"right"},[s("ul",{staticClass:"nav"},[s("li",[s("a",{staticClass:"link"},[t._v("TOPICS")])]),s("li",[s("a",{staticClass:"link"},[t._v("SPEAKERS")])]),s("li",[s("a",{staticClass:"link"},[t._v("ATTENDEES")])]),s("li",[s("a",{staticClass:"link"},[t._v("TICKETS")])]),s("li",[s("a",{staticClass:"link"},[t._v("NEWS")])]),s("li",[s("a",{staticClass:"link active"},[t._v("NETWORKNG")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"content__item"},[t._v("Mr. Jeremy looking for")]),s("div",{staticClass:"content__item"}),s("div",{staticClass:"content__item"})])])])])],1)},kt=[],yt={name:"Event",props:["id"],data:function(){return{item:[],liked:121,dislike:18}},created:function(){if("undefined"!=localStorage.getItem("item"))this.item=JSON.parse(localStorage.getItem("item"));else{this.item=this.$store.getters.getEventById(this.id);var t=JSON.stringify(this.item);localStorage.setItem("item",t)}},beforeDestroy:function(){localStorage.setItem("item","undefined")},computed:{img:function(){return a("67b6")("./"+this.item.logo)}},methods:{like:function(){this.$store.getters.getAuth?console.log("Auth OK"):this.$router.push({name:"Login"})},shared:function(){this.$store.getters.getAuth?console.log("Auth OK"):this.$router.push({name:"Login"})},ok:function(){this.liked+=1},noOk:function(){0!==this.dislike&&(this.dislike-=1)}}},$t=yt,wt=(a("87e9"),Object(u["a"])($t,bt,kt,!1,null,"503927df",null)),St=wt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("div",{staticClass:"login"},[s("h5",{staticClass:"title"},[t._v("Sign in")]),s("div",[s("p",[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"email"}})]),s("p",[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"enter you password"}})]),s("p",[s("button",{staticClass:"btn"},[t._v("next")])])]),s("p",[s("a",{staticClass:"passw"},[t._v("forgot password?")])]),s("p",{staticClass:"sign-up"},[t._v(" dont't have an account? "),s("a",{staticClass:"passw"},[t._v("sign up")])]),s("p",[t._v("or")]),s("div",{staticClass:"social-btn"},[s("a",{staticClass:"link"},[s("img",{attrs:{src:a("ccc8"),alt:"google"}}),t._v("continue with google ")]),s("a",{staticClass:"link"},[s("img",{attrs:{src:a("0d29"),alt:"linkedin"}}),t._v("continue with linkedin ")]),s("a",{staticClass:"link"},[s("img",{attrs:{src:a("282f"),alt:"facebook"}}),t._v("continue with facebook ")])])])])],1)},Lt=[],Tt={},Et=Tt,Ot=(a("960e"),Object(u["a"])(Et,xt,Lt,!1,null,"0826d1d4",null)),jt=Ot.exports;s["default"].use($["a"]);var Dt=new $["a"]({mode:"history",base:"/conguru/",routes:[{path:"/",name:"HomePage",component:ot},{path:"/form",name:"FormPage",component:Ct},{path:"/login",name:"Login",component:jt},{path:"/event/:id",name:"Event",component:St,props:!0}]}),At=a("2f62"),It=(a("7514"),a("74ca")),Pt=a("478e"),Mt=a("2bf2"),Nt=Object(Pt["a"])({uri:"https://vue-hasura-test.herokuapp.com/v1/graphql",headers:{"x-hasura-admin-secret":"hasuratest"}}),qt=new It["a"]({link:Nt,cache:new Mt["a"]});a("af87");function Rt(){var t=Object(dt["a"])(["\n          {\n            events {\n              id\n              city\n              logo\n              logo_show\n              name\n              venue\n              date\n              attehds\n              tags\n              speakers\n            }\n          }\n        "]);return Rt=function(){return t},t}var Bt={state:{eventList:[],cityList:[],loader:!0},mutations:{setEventList:function(t,e){t.eventList=e},setCityList:function(t,e){t.cityList=e},setLoader:function(t,e){t.loader=e}},actions:{getEvents:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){var e=[],a=!0,s=!1,i=void 0;try{for(var n,r=t[Symbol.iterator]();!(a=(n=r.next()).done);a=!0){var c=n.value;e.includes(c.city)||e.push(c.city)}}catch(o){s=!0,i=o}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return e},a=e.commit,s=e.dispatch,t.next=4,qt.query({query:ft()(Rt())});case 4:i=t.sent,console.log("ops query"),a("setEventList",i.data.events),a("setCityList",n(i.data.events)),s("tags",i.data.events),s("speakers",i.data.events),a("setLoader",!1);case 11:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setData:function(t){t.commit}},getters:{getEventsList:function(t){return t.eventList},getCityList:function(t){return t.cityList},getLoader:function(t){return t.loader},getEventById:function(t){return function(e){return t.eventList.find((function(t){return t.id==e}))}}}},Ht=(a("5df3"),a("4f7f"),a("75fc")),Ut={state:{tags:[],speakers:[],selectTag:[]},mutations:{tags:function(t,e){t.tags=e},speakers:function(t,e){t.speakers=e},selectTag:function(t,e){t.selectTag=e}},actions:{tags:function(t,e){var a,s=t.commit,i=e.map((function(t){return t.tags}));i=Object(Ht["a"])(new Set((a=[]).concat.apply(a,Object(Ht["a"])(i)))),s("tags",i)},speakers:function(t,e){var a,s=t.commit,i=e.map((function(t){return t.speakers}));i=Object(Ht["a"])(new Set((a=[]).concat.apply(a,Object(Ht["a"])(i)))),s("speakers",i)},selectTag:function(t,e){var a=t.commit;a("selectTag",e)}},getters:{tags:function(t){return t.tags},speakers:function(t){return t.speakers},selectTag:function(t){return t.selectTag}}},Ft={state:{auth:!1},mutations:{},actions:{},getters:{getAuth:function(t){return t.auth}}};s["default"].use(At["a"]);var Kt=new At["a"].Store({modules:{events:Bt,filter:Ut,auth:Ft}}),Vt=a("9483");Object(Vt["a"])("".concat("/conguru/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("2fdb");function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",a={};e.includes("date")&&(a.day="2-digit",a.month="long",a.year="numeric");var s=new Intl.DateTimeFormat("en-Us",a).format(new Date(t));return console.log(s),s}var Gt=a("1dce"),Wt=a.n(Gt),zt=a("5887"),Qt=a.n(zt),Xt=a("522d");a.d(e,"eventBus",(function(){return Yt}));var Yt=new s["default"],Zt=Object(Pt["a"])({uri:"https://vue-hasura-test.herokuapp.com/v1/graphql",headers:{"x-hasura-admin-secret":"hasuratest"}}),te=new Mt["a"],ee=new It["a"]({link:Zt,cache:te}),ae=new Xt["a"]({defaultClient:ee});s["default"].use(Qt.a),s["default"].use(Wt.a),s["default"].use(Xt["a"]),s["default"].filter("date",Jt),s["default"].config.productionTip=!1,new s["default"]({router:Dt,store:Kt,apolloProvider:ae,render:function(t){return t(y)}}).$mount("#app")},5724:function(t,e,a){"use strict";var s=a("0034"),i=a.n(s);i.a},5799:function(t,e,a){t.exports=a.p+"img/event-1.d63e2069.jpg"},5995:function(t,e,a){},"5a9a":function(t,e,a){t.exports=a.p+"img/ok.ffd458f9.svg"},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"67b6":function(t,e,a){var s={"./3.jpg":"0541","./event-1.jpg":"5799","./event-2.jpg":"f626","./event-4.jpg":"04aa"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="67b6"},"6b3b":function(t,e,a){t.exports=a.p+"img/people.9bf9e89b.svg"},"6f92":function(t,e,a){"use strict";var s=a("4da4"),i=a.n(s);i.a},"721c":function(t,e,a){"use strict";var s=a("d14a"),i=a.n(s);i.a},"7ca2":function(t,e,a){},"7e79":function(t,e,a){},8096:function(t,e,a){t.exports=a.p+"img/share.5eec5200.svg"},"87e9":function(t,e,a){"use strict";var s=a("5995"),i=a.n(s);i.a},"8d4d":function(t,e,a){"use strict";var s=a("7ca2"),i=a.n(s);i.a},"8df5":function(t,e,a){},"90b9":function(t,e,a){"use strict";var s=a("7e79"),i=a.n(s);i.a},"960e":function(t,e,a){"use strict";var s=a("4861"),i=a.n(s);i.a},"9c0c":function(t,e,a){},aed7:function(t,e,a){"use strict";var s=a("d3df"),i=a.n(s);i.a},ccc8:function(t,e,a){t.exports=a.p+"img/google.09aea0f5.svg"},d14a:function(t,e,a){},d3df:function(t,e,a){},da28:function(t,e,a){},e761:function(t,e,a){},eb29:function(t,e,a){},f626:function(t,e,a){t.exports=a.p+"img/event-2.60017fbe.jpg"}});