(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Vue-tocode-apps/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"058c":function(t,e,n){},1935:function(t,e,n){"use strict";var r=n("058c"),i=n.n(r);i.a},1950:function(t,e,n){"use strict";var r=n("8bcb"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-content"},[n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"note-header",staticStyle:{margin:"36px 0","justify-content":"center"}},[n("p",[t._v(t._s(t.title))])]),t.message?n("message",{attrs:{message:t.message}}):t._e(),n("newNote",{attrs:{note:t.note},on:{addNote:t.addNote}}),n("div",{staticClass:"note-header",staticStyle:{margin:"36px 0"}},[n("h1",[t._v(t._s(t.title))]),n("search",{attrs:{value:t.search,placeholder:"Find your note"},on:{search:function(e){t.search=e}}}),n("div",{staticClass:"icons"},[n("svg",{class:{active:t.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!0}}},[n("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),n("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),n("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),n("svg",{class:{active:!t.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!1}}},[n("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),n("notes",{attrs:{notes:t.notesFilter,grid:t.grid},on:{remove:t.removeNote,editNote:t.editNote}})],1)])])])},o=[],a=(n("57e7"),n("d25f"),n("4f37"),n("386d"),n("0a0d")),s=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("p",[t._v(t._s(t.message))])])},l=[],d={props:{message:{type:String,required:!0}}},u=d,p=(n("9d40"),n("2877")),m=Object(p["a"])(u,c,l,!1,null,"4cd9fb30",null),v=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes"},t._l(t.notes,function(e,r){return n("div",{key:e.id,staticClass:"note",class:{full:!t.grid}},[n("div",{staticClass:"note-header",class:{full:!t.grid}},[e.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveNote(r)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.abortEdit()}],input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}}):n("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[n("p",{class:e.importance,on:{click:function(e){!t.editOneNote&&t.editNote(r)}}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")]),n("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.removeNote(r)}}},[t._v("x")])])]),n("div",{staticClass:"note-body"},[e.edit?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.descr,expression:"note.descr"}],domProps:{value:e.descr},on:{input:function(n){n.target.composing||t.$set(e,"descr",n.target.value)}}}):n("p",[t._v(t._s(e.descr))]),n("span",[t._v(t._s(e.date))])])])}),0)},h=[],g=n("5176"),y=n.n(g),w={data:function(){return{editOneNote:!1,tempNote:null}},props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote:function(t){console.log("Note id - ".concat(t," removed")),this.$emit("remove",t)},editNote:function(t){this.editOneNote=!0,this.tempNote=y()({},this.notes[t]),this.notes[t].edit=!0},saveNote:function(t){this.notes[t].date=new Date(s()()).toLocaleString(),this.$emit("editNote",this.notes[t]),this.editOneNote=!1},abortEdit:function(){this.$emit("editNote",this.tempNote),this.tempNote=null,this.editOneNote=!1}}},x=w,_=(n("1935"),Object(p["a"])(x,f,h,!1,null,null,null)),b=_.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-note"},[n("label",[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),n("label",[t._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.descr,expression:"note.descr"}],domProps:{value:t.note.descr},on:{input:function(e){e.target.composing||t.$set(t.note,"descr",e.target.value)}}}),n("p",{staticClass:"importance__title"},[t._v("Setting importance")]),n("div",{staticClass:"importance"},[n("div",{staticClass:"importance__item"},[n("label",{staticStyle:{color:"#402caf"},attrs:{for:"st"}},[t._v("standart")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.importance,expression:"note.importance"}],attrs:{type:"radio",name:"importangs",id:"st",value:"standart"},domProps:{checked:t._q(t.note.importance,"standart")},on:{change:function(e){return t.$set(t.note,"importance","standart")}}})]),n("div",{staticClass:"importance__item"},[n("label",{staticStyle:{color:"#e4f314"},attrs:{for:"imp"}},[t._v("important")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.importance,expression:"note.importance"}],attrs:{type:"radio",name:"importangs",id:"imp",value:"important"},domProps:{checked:t._q(t.note.importance,"important")},on:{change:function(e){return t.$set(t.note,"importance","important")}}})]),n("div",{staticClass:"importance__item"},[n("label",{staticStyle:{color:"#d30d3f"},attrs:{for:"vimp"}},[t._v("very important")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.importance,expression:"note.importance"}],attrs:{type:"radio",name:"importangs",id:"vimp",value:"veryImportant"},domProps:{checked:t._q(t.note.importance,"veryImportant")},on:{change:function(e){return t.$set(t.note,"importance","veryImportant")}}})])]),n("button",{staticClass:"btn btnPrimary",on:{click:t.addNote}},[t._v("New note")])])},k=[],C={props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}},S=C,O=(n("72c7"),Object(p["a"])(S,N,k,!1,null,null,null)),j=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper__search"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-icon"},[n("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),n("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},P=[],E={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("search",t)}}},D=E,q=(n("fa4a"),Object(p["a"])(D,$,P,!1,null,"86dd303c",null)),L=q.exports,M={components:{message:v,notes:b,newNote:j,search:L},data:function(){return{title:"Notes App",search:"",message:null,grid:!0,note:{title:"",descr:"",importance:"standart"},notes:[{title:"First Note",descr:"Description for first note",date:new Date(s()()).toLocaleString(),importance:"standart",edit:!1,id:1},{title:"Second Note",descr:"Description for second note",date:new Date(s()()).toLocaleString(),importance:"important",edit:!1,id:2},{title:"Third Note",descr:"Description for third note",date:new Date(s()()).toLocaleString(),importance:"veryImportant",edit:!1,id:3}]}},computed:{notesFilter:function(){var t=this.notes,e=this.search;return e?(e=e.trim().toLowerCase(),t=t.filter(function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t}),t):t}},methods:{addNote:function(){var t=this.note,e=t.title,n=t.descr,r=t.importance;if(""===e)return this.message="title can`t be blank!",!1;this.notes.push({title:e,descr:n,date:new Date(s()()).toLocaleString(),importance:r,edit:!1,id:Math.random()}),this.message=null,this.note.title="",this.note.descr="",this.note.importance="standart"},removeNote:function(t){this.notes.splice(t,1)},editNote:function(t){this.notes.filter(function(e){e.id===t.id&&(e.title=t.title,e.descr=t.descr,e.importance=t.importance,e.date=t.date,e.edit=!1)})}}},T=M,B=(n("1950"),Object(p["a"])(T,i,o,!1,null,"3d11c78f",null)),F=B.exports;n("c1c3");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(F)}}).$mount("#app")},6860:function(t,e,n){},"72c7":function(t,e,n){"use strict";var r=n("9cb3"),i=n.n(r);i.a},"8bcb":function(t,e,n){},"9cb3":function(t,e,n){},"9d40":function(t,e,n){"use strict";var r=n("6860"),i=n.n(r);i.a},c1c3:function(t,e,n){},db1e:function(t,e,n){},fa4a:function(t,e,n){"use strict";var r=n("db1e"),i=n.n(r);i.a}});