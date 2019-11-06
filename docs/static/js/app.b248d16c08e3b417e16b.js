webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("mtWM"),s=n.n(r),i=n("e5sS"),o=n.n(i);class l{constructor(...t){let e;if(t.length>1){let[n,a,...r]=t;e=new Date(n,a-1,...r)}else e=new Date(...t);e.setHours(0,0,0,0),this._date=e}getMonth(){return this._date.getMonth()+1}getDay(){return this._date.getDay()+1}getMonthName(t="long"){var e=this._date.toLocaleString("fr-FR",{month:t});return e.charAt(0).toUpperCase()+e.slice(1)}getFullYear(){return this._date.getFullYear()}getDate(){return this._date.getDate()}getTime(){return this._date.getTime()}getDayName(t="long"){return this._date.toLocaleString("en-US",{weekday:t})}getNextDay(){let t=new this.constructor(this.getTime());return t.setDate(t.getDate()+1),t}getPrevDay(){let t=new this.constructor(this.getTime());return t.setDate(t.getDate()-1),t}setDate(t){return this._date.setDate(t),this.getTime()}happenThisMonth(t){return this.getMonth()===new this.constructor(t.start).getMonth()||this.getMonth()===new this.constructor(t.end).getMonth()}isInRange(t,e,n="never"){let a,r,s,i,o=new this.constructor(t),l=new this.constructor(e),d=this.getTime();switch(n){case"monthly":return a=new this.constructor(this.getFullYear(),this.getMonth(),o.getDate()).getTime(),i=d<=(r=new this.constructor(this.getFullYear(),this.getMonth(),l.getDate()).getTime()),(s=d>=a)&&i;case"yearly":return a=new this.constructor(this.getFullYear(),o.getMonth(),o.getDate()).getTime(),i=d<=(r=new this.constructor(this.getFullYear(),l.getMonth(),l.getDate()).getTime()),(s=d>=a)&&i;case"never":default:return s=d>=o.getTime(),i=d<=l.getTime(),s&&i}}toDateString(){return this._date.toDateString()}getNumberOfDaysInMonth(){return new this.constructor(this.getFullYear(),this.getMonth()+1,0).getDate()}getFirstWeekdayOfMonth(){return new this.constructor(this.getFullYear(),this.getMonth(),1).getDay()}}var d=n("JAoM"),h=n.n(d),c={name:"Calendar",data:()=>({today:new l,date:null,weekdays:null}),computed:{days(){let t=Array((this.startWeekDayOfMonth-this.firstDayOfWeek+7)%7).fill(null),e=Array(this.numberOfDays).fill().map((t,e)=>new l(this.selectedYear,this.selectedMonth,e+1));return t.concat(e)},startWeekDayOfMonth(){return this.date.getFirstWeekdayOfMonth()},numberOfDays(){return this.date.getNumberOfDaysInMonth()},selectedMonth(){return this.date.getMonth()},selectedMonthName(){return this.date.getMonthName()},selectedYear(){return this.date.getFullYear()}},methods:{prevMonth(){this.date=new l(this.selectedYear,this.selectedMonth-1,1)},nextMonth(){this.date=new l(this.selectedYear,this.selectedMonth+1,1)},generateWeekdayNames(t=1){let e=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];for(let n=2;n<=t;n++){let t=e.shift();e.push(t)}return e},generateDayStyle(t){let e={};for(let n of this.events)if(t.isInRange(n.start,n.end,n.repeat)){let t=this.eventCategories.find(t=>t.id===n.categoryId)||{};Object.assign(e,{color:t.id?t.textColor:null,backgroundColor:t.id?t.backgroundColor:null,fontWeight:t.id?"bold":"normal"})}return e},generateBeforeStyle(t){let e={};for(let n of this.events)if(t.isInRange(n.start,n.end,n.repeat)&&t.getPrevDay().isInRange(n.start,n.end,n.repeat)){let t=this.eventCategories.find(t=>t.id===n.categoryId)||{};Object.assign(e,{backgroundColor:t.backgroundColor})}return e},generateAfterStyle(t){let e={};for(let n of this.events)if(t.isInRange(n.start,n.end,n.repeat)&&t.getNextDay().isInRange(n.start,n.end,n.repeat)){let t=this.eventCategories.find(t=>t.id===n.categoryId)||{};Object.assign(e,{backgroundColor:t.backgroundColor})}return e},goToday(){this.date=this.today}},props:{initialDate:{type:String,default:null},firstDayOfWeek:{type:Number,default:1},eventCategories:{type:Array,default:()=>[]},events:{type:Array,default:()=>[]},offDays:{type:Array,default:()=>[1,7]}},beforeMount(){this.date=Date.parse(this.initialDate)?new l(this.initialDate):new l,this.weekdays=this.generateWeekdayNames(this.firstDayOfWeek)}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sweetCalendar"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"month"},[t._v(t._s(t.selectedMonthName))])]),t._v(" "),n("div",{staticClass:"body"},[t._l(t.weekdays,function(e,a){return n("div",{key:"day-name-"+(a+1),staticClass:"day-name",attrs:{title:e}},[t._v("\n        "+t._s(e.substring(0,3))+"\n      ")])}),t._v(" "),t._l(t.days,function(e,a){return n("div",{key:a,staticClass:"day-container"},[e?n("div",{staticClass:"before",style:t.generateBeforeStyle(e)},[t._v(" ")]):t._e(),t._v(" "),e?n("div",{class:["day","day-"+e.getDate()+",\n          weekday-"+e.getDay(),t.offDays.includes(e.getDay())?"off-day":null,e.toDateString()===t.today.toDateString()?"today":null],style:t.generateDayStyle(e)},[n("span",[t._v(t._s(e.getDate()))])]):t._e(),t._v(" "),e?n("div",{staticClass:"after",style:t.generateAfterStyle(e)},[t._v(" ")]):t._e()])})],2)])])},staticRenderFns:[]};var g=n("VU/8")(c,u,!1,function(t){n("ZBQq")},"data-v-03ceaad8",null).exports,f=(n("mVUJ"),{name:"Month",data:()=>({colors:[{id:1,title:"Grey",textColor:"white",backgroundColor:"#DEDEDE"},{id:2,title:"Purple",textColor:"white",backgroundColor:"#7C6AF2"},{id:3,title:"Yellow",textColor:"white",backgroundColor:"#F2CF6A"},{id:4,title:"Pink",textColor:"white",backgroundColor:"#E86AAB"},{id:5,title:"Blue",textColor:"white",backgroundColor:"#6ACBF2"}]}),computed:{legend(){var t=[],e=new l(this.initialDate);for(let a=0;a<this.events.length;a++)if(event=this.events[a],e.happenThisMonth(event)){var n=0;for(let e=0;e<t.length;e++)-1!=t[e].title.indexOf(event.title)&&(this.events[a].categoryId=t[e].categoryId,n=1);0===n&&(event.categoryId=t.length+2,t.push(event))}for(let e=0;e<t.length;e++)t[e].title.search("Vacances")>-1&&(t[e].categoryId=1);return t}},props:{initialDate:{type:String,default:null},events:{type:Array,default:null}},methods:{goToday(){this.$refs.calendar.goToday()},getColor(t){let e={};return Object.assign(e,{backgroundColor:this.colors[t.categoryId-1].backgroundColor}),e}},components:{Calendar:g}}),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"month"},[n("calendar",{ref:"calendar",attrs:{firstDayOfWeek:2,eventCategories:t.colors,events:t.events,initialDate:t.initialDate}}),t._v(" "),n("div",{staticClass:"legend"},[n("ul",t._l(t.legend,function(e,a){return n("li",{key:a},[n("span",{staticClass:"color",style:t.getColor(e)}),t._v(t._s(e.title))])}),0)])],1)},staticRenderFns:[]};var v=n("VU/8")(f,y,!1,function(t){n("Oor2")},null,null).exports,p={name:"Timeline",data:()=>({events:[]}),computed:{monthes(){for(var t=this.start.split("-"),e=this.end.split("-"),n=parseInt(t[0]),a=parseInt(e[0]),r=[],s=n;s<=a;s++)for(var i=s!=a?11:parseInt(e[1])-1,o=s===n?parseInt(t[1])-1:0;o<=i;o=o>12?o%12||11:o+1){var l=o+1,d=l<10?"0"+l:l;r.push([s,d,"01"].join("-"))}return r}},methods:{parseEvents(t){var e=o.a.parse(t),n=new o.a.Component(e).getAllSubcomponents("vevent");for(let t=0;t<n.length;t++){var a=new o.a.Event(n[t]);this.addEvent(a)}},addEvent(t){var e=new Date(t.startDate.toJSDate()),n=new Date(t.endDate.toJSDate());n.setHours(n.getHours()-1);var a={title:t.summary,start:e.toString(),end:n.toString()};this.events.push(a)}},mounted:function(){s.a.get("https://jeremiecook.com/calendar/index.php").then(t=>this.parseEvents(t.data))},components:{Carousel:h.a,Month:v},props:{start:{type:String,default:"2019-01-01"},end:{type:String,default:"2019-12-31"}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timeline"}},[n("carousel",{attrs:{dots:!1,stagePadding:100,rewind:!1,responsive:{0:{items:1,nav:!1},700:{items:2,nav:!0},1100:{items:3,nav:!0}}}},t._l(t.monthes,function(e,a){return n("div",{key:a},[n("month",{ref:"calendar",refInFor:!0,attrs:{initialDate:e,events:t.events}})],1)}),0)],1)},staticRenderFns:[]};var D={name:"PublicCalendar",components:{Timeline:n("VU/8")(p,m,!1,function(t){n("eYOW")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"public-calendar"},[e("h1",[this._v("Planning & disponibilités")]),this._v(" "),e("timeline",{attrs:{start:"2019-05-01",end:"2019-12-31"}})],1)},staticRenderFns:[]};var _=n("VU/8")(D,C,!1,function(t){n("ucYm")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:_},template:"<App/>"})},Oor2:function(t,e){},ZBQq:function(t,e){},eYOW:function(t,e){},mVUJ:function(t,e){},ucYm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b248d16c08e3b417e16b.js.map