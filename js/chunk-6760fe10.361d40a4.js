(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6760fe10"],{"00b0":function(t,e,i){},"063f":function(t,e,i){"use strict";var a=i("5ca1"),n=i.n(a);n.a},"0857":function(t,e,i){"use strict";i("a0e0");var a=i("a013"),n=i("f425"),s=i("dad2"),o="toString",r=/./[o],c=function(t){i("e5ef")(RegExp.prototype,o,t,!0)};i("b6f1")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?c((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)})):r.name!=o&&c((function(){return r.call(this)}))},"11cc":function(t,e,i){"use strict";var a=i("dbf1"),n=i.n(a);n.a},"154f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playing-item-wrapper"},t._l(t.styles,(function(t,e){return i("div",{key:e,ref:"playingItem",refInFor:!0,staticClass:"playing-item",style:t})})),0)},n=[],s=(i("f763"),i("d4d5"),i("fa7d")),o={props:{number:Number},computed:{styles:function(){for(var t=new Array(this.number),e=0;e<t.length;e++)t[e]={height:Object(s["c"])(this.random())+"rem"};return t}},methods:{startAnimation:function(){var t=this;this.task=setInterval((function(){t.$refs.playingItem.forEach((function(e){e.style.height=Object(s["c"])(t.random())+"rem"}))}),200)},stopAnimation:function(){this.task&&clearInterval(this.task)},random:function(){return Math.ceil(10*Math.random())}}},r=o,c=(i("310c"),i("6691")),l=Object(c["a"])(r,a,n,!1,null,"05e64438",null);e["a"]=l.exports},"161d":function(t,e,i){},1711:function(t,e,i){},2125:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-wrapper",class:{"hide-play":!t.showPlay}},[t.showPlay?i("div",{staticClass:"bottom-playing-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onPlayingCardClick(e)}}},[i("div",{staticClass:"bottom-playing-left"},[i("div",{staticClass:"icon-play-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.togglePlay(e)}}},[t.isPlaying?i("span",{staticClass:"icon-play_pause"}):i("span",{staticClass:"icon-play_go"})])]),i("div",{staticClass:"bottom-playing-right"},[i("div",{staticClass:"bottom-playing-chapter-text"},[i("span",{staticClass:"chapter-label"},[t._v(t._s(t.chapter?t.chapter.label:""))]),t.currentSectionIndex&&t.currentSectionTotal?i("span",{staticClass:"bottom-playing-page-text"},[t._v("( "+t._s(t.currentSectionIndex)+" / "+t._s(t.currentSectionTotal)+" )")]):t._e()]),i("div",{staticClass:"bottom-playing-page-text"},[t._v(t._s(t.playInfo?t.playInfo.currentMinute:"00")+":"+t._s(t.playInfo?t.playInfo.currentSecond:"00")+" / "+t._s(t.playInfo?t.playInfo.totalMinute:"00")+":"+t._s(t.playInfo?t.playInfo.totalSecond:"00"))])])]):t._e(),i("div",{staticClass:"bottom-btn-wrapper"},[i("span",{staticClass:"bottom-btn-text"},[t._v(t._s(t.$t("detail.addOrRemoveShelf")))])])])},n=[],s=(i("d4d5"),{props:{chapter:Object,currentSectionIndex:Number,currentSectionTotal:Number,showPlay:Boolean,isPlaying:Boolean,playInfo:Object},methods:{togglePlay:function(){this.$parent.togglePlay()},onPlayingCardClick:function(){this.$emit("onPlayingCardClick")}}}),o=s,r=(i("d52c"),i("6691")),c=Object(r["a"])(o,a,n,!1,null,"f53ea660",null);e["a"]=c.exports},"21ea":function(t,e,i){"use strict";var a=i("9691"),n=i.n(a);n.a},2444:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"book-speak-mask-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.hide(e)}}},[i("transition",{attrs:{name:"popup-slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.speakCardVisible,expression:"speakCardVisible"}],staticClass:"book-speak-mask-card-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.hide(e)}}},[i("div",{staticClass:"pulldown-icon-wrapper",on:{click:t.hide}},[i("span",{staticClass:"icon-pull_down"})]),i("div",{staticClass:"card-title-wrapper"},[i("div",{staticClass:"icon-speak-wrapper"},[i("span",{staticClass:"icon-speak"})]),i("div",{staticClass:"speak-title-wrapper"},[i("span",{staticClass:"speak-title"},[t._v(t._s(t.$t("speak.voice")))])]),i("div",{staticClass:"read-fulltext-wrapper"},[i("span",{staticClass:"read-fulltext"},[t._v(t._s(t.$t("speak.read")))])])]),i("div",{staticClass:"card-section-title-wrapper"},[i("div",{staticClass:"card-section-title-text"},[t._v(t._s(t.title))]),t.currentSectionIndex?i("div",{staticClass:"card-section-sub-title-text"},[t._v(t._s(t.currentSectionIndex)+" /\n            "+t._s(t.currentSectionTotal)+"\n          ")]):t._e()]),i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"progress-wrapper"},[i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1"},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}})]),i("div",{staticClass:"progress-text"},[i("div",{staticClass:"progress-text-current"},[t._v(t._s(t.playInfo?t.playInfo.currentMinute:"00")+":"+t._s(t.playInfo?t.playInfo.currentSecond:"00")+"\n            ")]),i("div",{staticClass:"progress-text-left"},[t._v("-"+t._s(t.playInfo?t.playInfo.leftMinute:"00")+":"+t._s(t.playInfo?t.playInfo.leftSecond:"00")+"\n            ")])])]),i("div",{staticClass:"playing-wrapper"},[i("div",{staticClass:"icon-settings-wrapper"},[i("span",{staticClass:"icon-settings"}),i("div",{staticClass:"settings-text"},[t._v(t._s(t.$t("speak.settings")))])]),i("span",{staticClass:"icon-play_backward",class:{"not-use":t.currentSectionIndex<=1},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.prev(e)}}}),i("div",{staticClass:"icon-play-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.togglePlay(e)}}},[t.isPlaying?i("span",{staticClass:"icon-play_pause"}):i("span",{staticClass:"icon-play_go"})]),i("span",{staticClass:"icon-play_forward",class:{"not-use":t.currentSectionIndex>=t.currentSectionTotal},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.next(e)}}}),i("div",{staticClass:"icon-clock-wrapper"},[i("span",{staticClass:"icon-clock"}),i("div",{staticClass:"clock-text"},[t._v(t._s(t.$t("speak.timing")))])])]),i("div",{staticClass:"read-apply-wrapper"},[t._v("\n          "+t._s(t.$t("speak.apply"))+"\n        ")]),i("div",{staticClass:"read-title-wrapper"},[i("span",{staticClass:"line"}),i("div",{staticClass:"read-title-text"},[t._v(t._s(t.$t("speak.current")))]),i("span",{staticClass:"line"})]),i("div",{ref:"bookWrapper",staticClass:"book-wrapper"},[i("div",{attrs:{id:"book-read"}})])])])],1)])},n=[],s=(i("0857"),i("34a3"),i("d4d5"),i("fa7d")),o={props:{title:String,book:Object,section:Object,currentSectionIndex:Number,currentSectionTotal:Number,isPlaying:Boolean,playInfo:Object},data:function(){return{visible:!1,speakCardVisible:!1,progress:0,readHeight:0}},methods:{refreshProgress:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},updateText:function(t){var e=this;t.then((function(){var t=e.rendition.currentLocation(),i=e.section.cfiBase,a=t.start.cfi.replace(/.*!/,"").replace(/\)/,""),n=t.end.cfi.replace(/.*!/,"").replace(/\)/,"");e.book.getRange("epubcfi(".concat(i,"!,").concat(a,",").concat(n,")")).then((function(t){var i=t.toString();i=i.replace(/\s(2,)/g,""),i=i.replace(/\r/g,""),i=i.replace(/\n/g,""),i=i.replace(/\t/g,""),i=i.replace(/\f/g,""),e.$emit("updateText",i)}))}))},togglePlay:function(){this.$parent.togglePlay()},prev:function(){var t=this;this.currentSectionIndex>1&&(this.updateText(this.rendition.prev()),this.$emit("update:currentSectionIndex",this.currentSectionIndex-1),this.$parent.resetPlay(),setTimeout((function(){t.$parent.togglePlay()}),500))},next:function(){var t=this;this.currentSectionIndex<this.currentSectionTotal&&(this.updateText(this.rendition.next()),this.$emit("update:currentSectionIndex",this.currentSectionIndex+1),this.$parent.resetPlay(),setTimeout((function(){t.$parent.togglePlay()}),500))},display:function(){this.rendition?this.displayed=this.rendition.display(this.section.href):(this.rendition=this.book.renderTo("book-read",{width:window.innerWidth>640?640:window.innerWidth,height:this.readHeight,method:"default"}),this.displayed=this.rendition.display(this.section.href))},onProgressChange:function(t){},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},hide:function(){this.speakCardVisible=!1,this.visible=!1},show:function(){var t=this;this.visible=!0,this.speakCardVisible=!0,this.refresh(),this.$nextTick((function(){t.display()}))},refresh:function(){this.readHeight=.9*window.innerHeight-Object(s["d"])(40)-Object(s["d"])(54)-Object(s["d"])(46)-Object(s["d"])(48)-Object(s["d"])(60)-Object(s["d"])(44),this.$refs.bookWrapper.style.height=this.readHeight+"px"}}},r=o,c=(i("d361"),i("6691")),l=Object(c["a"])(r,a,n,!1,null,"572a0c28",null);e["a"]=l.exports},"310c":function(t,e,i){"use strict";var a=i("161d"),n=i.n(a);n.a},4785:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-title-wrapper",class:{"hide-shadow":t.ifHideShadow}},[i("div",{staticClass:"title-left-wrapper",on:{click:t.back}},[i("span",{staticClass:"icon-back"})]),i("div",{staticClass:"title-right-wrapper"},[t.showShelf?i("span",{staticClass:"icon-shelf icon",on:{click:t.showBookShelf}}):i("span",{staticClass:"icon-share"})]),t.title?i("div",{staticClass:"title-text"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e()])},n=[],s={props:{title:String,showShelf:{type:Boolean,default:!0}},data:function(){return{ifHideShadow:!0}},methods:{showBookShelf:function(){this.$router.push("/book-store/shelf")},showShadow:function(){this.ifHideShadow=!1},hideShadow:function(){this.ifHideShadow=!0},back:function(){this.$emit("back")}}},o=s,r=(i("063f"),i("6691")),c=Object(r["a"])(o,a,n,!1,null,"300d6c82",null);e["a"]=c.exports},"5ca1":function(t,e,i){},"7da0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover-title-wrapper"},[i("div",{staticClass:"cover-title-left-wrapper"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],staticClass:"cover-img"})]),i("div",{staticClass:"cover-title-right-wrapper"},[i("div",{staticClass:"detail-cover-title-wrapper"},[i("div",{staticClass:"cover-title-text"},[t._v(t._s(t.title))])]),i("div",{staticClass:"cover-author-wrapper"},[i("div",{staticClass:"cover-author-text"},[t._v(t._s(t.author))])]),i("div",{staticClass:"detail-cover-description-wrapper"},[i("div",{staticClass:"detail-cover-description-text"},[t._v(t._s(t.desc))])])])])},n=[],s={props:{cover:String,title:String,author:String,desc:String}},o=s,r=(i("21ea"),i("6691")),c=Object(r["a"])(o,a,n,!1,null,"2f256eb3",null);e["a"]=c.exports},9691:function(t,e,i){},a0e0:function(t,e,i){i("dad2")&&"g"!=/./g.flags&&i("ddf7").f(RegExp.prototype,"flags",{configurable:!0,get:i("f425")})},d361:function(t,e,i){"use strict";var a=i("1711"),n=i.n(a);n.a},d52c:function(t,e,i){"use strict";var a=i("00b0"),n=i.n(a);n.a},d740:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-speaking"},[i("detail-title",{ref:"title",on:{back:t.back}}),i("scroll",{ref:"scroll",staticClass:"content-wrapper",attrs:{top:42,bottom:t.scrollBottom,ifNoScroll:t.disableScroll},on:{onScroll:t.onScroll}},[i("book-info",{attrs:{cover:t.cover,title:t.title,author:t.author,desc:t.desc}}),i("div",{staticClass:"book-speak-title-wrapper"},[i("div",{staticClass:"icon-speak-wrapper"},[i("span",{staticClass:"icon-speak"})]),i("div",{staticClass:"speak-title-wrapper"},[i("span",{staticClass:"speak-title"},[t._v(t._s(t.$t("speak.voice")))])]),i("div",{staticClass:"icon-down-wrapper",on:{click:t.toggleContent}},[i("span",{class:{"icon-down2":!t.ifShowContent,"icon-up":t.ifShowContent}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"book-detail-content-wrapper"},[i("div",{staticClass:"book-detail-content-list-wrapper"},[this.navigation?t._e():i("div",{staticClass:"loading-text-wrapper"},[i("span",{staticClass:"loading-text"},[t._v(t._s(t.$t("detail.loading")))])]),i("div",{staticClass:"book-detail-content-item-wrapper"},t._l(t.flatNavigation,(function(e,a){return i("div",{key:a,staticClass:"book-detail-content-item",on:{click:function(i){return t.speak(e,a)}}},[t.playingIndex===a?i("speak-playing",{ref:"speakPlaying",refInFor:!0,attrs:{number:5}}):t._e(),e.label?i("div",{staticClass:"book-detail-content-navigation-text",class:{"is-playing":t.playingIndex===a}},[t._v(t._s(e.label)+"\n            ")]):t._e()],1)})),0)])]),i("audio",{ref:"audio",on:{canplay:t.onCanPlay,timeupdate:t.onTimeUpdate,ended:t.onAudioEnded}})],1),i("bottom",{attrs:{chapter:t.chapter,currentSectionIndex:t.currentSectionIndex,currentSectionTotal:t.currentSectionTotal,showPlay:t.showPlay,isPlaying:t.isPlaying,playInfo:t.playInfo},on:{"update:isPlaying":function(e){t.isPlaying=e},"update:is-playing":function(e){t.isPlaying=e},onPlayingCardClick:t.onPlayingCardClick}}),t._m(0),i("speak-window",{ref:"speakWindow",attrs:{title:this.chapter?this.chapter.label:"",book:t.book,section:t.section,currentSectionIndex:t.currentSectionIndex,currentSectionTotal:t.currentSectionTotal,isPlaying:t.isPlaying,playInfo:t.playInfo},on:{"update:currentSectionIndex":function(e){t.currentSectionIndex=e},"update:current-section-index":function(e){t.currentSectionIndex=e},"update:isPlaying":function(e){t.isPlaying=e},"update:is-playing":function(e){t.isPlaying=e},updateText:t.updateText}}),i("toast",{ref:"toast",attrs:{text:t.toastText}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-wrapper"},[i("div",{attrs:{id:"read"}})])}],s=i("de29"),o=s["a"],r=(i("11cc"),i("6691")),c=Object(r["a"])(o,a,n,!1,null,"60b6a3e1",null);e["default"]=c.exports},dbf1:function(t,e,i){},de29:function(t,e,i){"use strict";(function(t){i("34a3"),i("f763");var a=i("4785"),n=i("7da0"),s=i("4e1b"),o=i("154f"),r=i("2125"),c=i("2444"),l=i("ad72"),u=i("5de6"),p=i("b067"),d=i("101f"),h=i("fa7d"),f=i("4868");t.ePub=f["a"],e["a"]={components:{DetailTitle:a["a"],BookInfo:n["a"],Scroll:s["a"],SpeakPlaying:o["a"],Bottom:r["a"],SpeakWindow:c["a"],Toast:l["a"]},computed:{currentMinute:function(){var t=Math.floor(this.currentPlayingTime/60);return t<10?"0"+t:t},currentSecond:function(){var t=Math.floor(this.currentPlayingTime-60*parseInt(this.currentMinute));return t<10?"0"+t:t},totalMinute:function(){var t=Math.floor(this.totalPlayingTime/60);return t<10?"0"+t:t},totalSecond:function(){var t=Math.floor(this.totalPlayingTime-60*parseInt(this.totalMinute));return t<10?"0"+t:t},leftMinute:function(){var t=Math.floor((this.totalPlayingTime-this.currentPlayingTime)/60);return t<10?"0"+t:t},leftSecond:function(){var t=Math.floor(this.totalPlayingTime-this.currentPlayingTime-60*parseInt(this.leftMinute));return t<10?"0"+t:t},playInfo:function(){return this.audioCanPlay?{currentMinute:this.currentMinute,currentSecond:this.currentSecond,totalMinute:this.totalMinute,totalSecond:this.totalSecond,leftMinute:this.leftMinute,leftSecond:this.leftSecond}:null},lang:function(){return this.metadata?this.metadata.language:""},disableScroll:function(){return!!this.$refs.speakWindow&&this.$refs.speakWindow.visible},showPlay:function(){return this.playingIndex>=0},scrollBottom:function(){return this.showPlay?116:52},chapter:function(){return this.flatNavigation[this.playingIndex]},desc:function(){return this.description?this.description.substring(0,100):""},flatNavigation:function(){return this.navigation?Array.prototype.concat.apply([],Array.prototype.concat.apply([],this.doFlatNavigation(this.navigation.toc))):[]},category:function(){return this.bookItem?Object(u["h"])(this.bookItem.category):""},title:function(){return this.metadata?this.metadata.title:""},author:function(){return this.metadata?this.metadata.creator:""}},data:function(){return{bookItem:null,book:null,rendition:null,metadata:null,cover:null,navigation:null,description:null,ifShowContent:!0,playingIndex:-1,paragraph:null,currentSectionIndex:null,currentSectionTotal:null,section:null,isPlaying:!1,audio:null,audioCanPlay:!1,currentPlayingTime:0,totalPlayingTime:0,playStatus:0,toastText:"",isOnline:!1}},methods:{onAudioEnded:function(){this.resetPlay(),this.currentPlayingTime=this.$refs.audio.currentTime;var t=Math.floor(this.currentPlayingTime/this.totalPlayingTime*100);this.$refs.speakWindow.refreshProgress(t)},onTimeUpdate:function(){this.currentPlayingTime=this.$refs.audio.currentTime;var t=Math.floor(this.currentPlayingTime/this.totalPlayingTime*100);this.$refs.speakWindow.refreshProgress(t)},onCanPlay:function(){this.audioCanPlay=!0,this.currentPlayingTime=this.$refs.audio.currentTime,this.totalPlayingTime=this.$refs.audio.duration},findBookFromList:function(t){var e=this;Object(p["c"])().then((function(i){if(200===i.status){var a=i.data.data.filter((function(e){return e.fileName===t}));a&&a.length>0&&(e.bookItem=a[0],e.init())}}))},init:function(){var t=this,e=this.$route.query.fileName;this.bookItem||(this.bookItem=Object(u["f"])(e)),this.bookItem?Object(d["b"])(e,(function(e,i){if(e||!i){t.isOnline=!0;var a=t.$route.query.opf;a&&t.parseBook(a)}else t.isOnline=!1,t.parseBook(i)})):this.findBookFromList(e)},downloadBook:function(t){var e=this;Object(p["b"])(this.bookItem,(function(){Object(d["b"])(t,(function(t,i){t||e.parseBook(i)}))}))},parseBook:function(t){var e=this;this.book=new f["a"](t),this.book.loaded.metadata.then((function(t){e.metadata=t})),this.isOnline?this.book.coverUrl().then((function(t){e.cover=t})):this.book.loaded.cover.then((function(t){e.book.archive.createUrl(t).then((function(t){e.cover=t}))})),this.book.loaded.navigation.then((function(t){e.navigation=t})),this.display()},back:function(){this.$router.go(-1)},onScroll:function(t){t>Object(h["d"])(42)?this.$refs.title.showShadow():this.$refs.title.hideShadow()},toggleContent:function(){this.ifShowContent=!this.ifShowContent},display:function(){var t=.9*window.innerHeight-Object(h["d"])(40)-Object(h["d"])(54)-Object(h["d"])(46)-Object(h["d"])(48)-Object(h["d"])(60)-Object(h["d"])(44);this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:t,method:"default"}),this.rendition.display()},doFlatNavigation:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[];return t.forEach((function(t){t.deep=i,a.push(t),t.subitems&&t.subitems.length>0&&a.push(e.doFlatNavigation(t.subitems,i+1))})),a},speak:function(t,e){var i=this;this.resetPlay(),this.playingIndex=e,this.$nextTick((function(){i.$refs.scroll.refresh()})),this.chapter&&(this.section=this.book.spine.get(this.chapter.href),this.rendition.display(this.section.href).then((function(t){var e=i.rendition.currentLocation(),a=t.cfiBase,n=e.start.cfi.replace(/.*!/,"").replace(/\)/,""),s=e.end.cfi.replace(/.*!/,"").replace(/\)/,"");i.currentSectionIndex=e.start.displayed.page,i.currentSectionTotal=e.start.displayed.total;var o="epubcfi(".concat(a,"!,").concat(n,",").concat(s,")");i.book.getRange(o).then((function(t){var e=t.toLocaleString();e=e.replace(/\s(2,)/g,""),e=e.replace(/\r/g,""),e=e.replace(/\n/g,""),e=e.replace(/\t/g,""),e=e.replace(/\f/g,""),i.updateText(e)}))})))},showToast:function(t){this.toastText=t,this.$refs.toast.show()},togglePlay:function(){this.isPlaying?this.pausePlay():0===this.playStatus?this.play():2===this.playStatus&&this.continuePlay()},resetPlay:function(){1===this.playStatus&&this.pausePlay(),this.isPlaying=!1,this.playStatus=0},play:function(){this.createVoice(this.paragraph)},continuePlay:function(){var t=this;this.$refs.audio.play().then((function(){t.$refs.speakPlaying[0].startAnimation(),t.isPlaying=!0,t.playStatus=1}))},pausePlay:function(){this.$refs.audio.pause(),this.$refs.speakPlaying[0].stopAnimation(),this.isPlaying=!1,this.playStatus=2},onPlayingCardClick:function(){this.$refs.speakWindow.show()},updateText:function(t){this.paragraph=t},createVoice:function(t){var e=new XMLHttpRequest;e.open("GET","".concat("http://47.99.166.157:3000","/voice?text=").concat(t,"&lang=").concat(this.lang.toLowerCase()),!1),e.send();var i=e.responseText;if(i){var a=JSON.parse(i);a.path?(this.$refs.audio.src=a.path,this.continuePlay()):this.showToast("播放失败，未生成链接")}else this.showToast("播放失败")}},mounted:function(){this.init()}}}).call(this,i("f27d"))}}]);
//# sourceMappingURL=chunk-6760fe10.361d40a4.js.map