(window.webpackJsonp=window.webpackJsonp||[]).push([[24,19],{491:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("388c3865",content,!0,{sourceMap:!1})},499:function(e,t,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("e96499d0",content,!0,{sourceMap:!1})},503:function(e,t,n){"use strict";n(491)},504:function(e,t,n){var r=n(59)(!1);r.push([e.i,".mt-05[data-v-45994358]{margin-top:.05rem}",""]),e.exports=r},506:function(e,t,n){"use strict";n.r(t);var r=n(9),l=n(489),c=n(519),o=n(492),m=n(559),d=Object(r.defineComponent)({props:{event:{type:Object,required:!0},weekStatus:{type:String,default:"current"}},setup:function(e){var t=Object(r.computed)((function(){return Object(l.a)(Object(c.a)(e.event.datetime.start))||Object(o.a)(Object(c.a)(e.event.datetime.start))}));return{format:m.a,isFutureEvent:t}}}),f=(n(503),n(15)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:"current"===e.weekStatus&&e.isFutureEvent?"text-pink-600":"text-gray-300",attrs:{icon:"calendar-day"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureEvent}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/event/"+e.event.id}},[e._v(e._s(e.event.title))])],1),e._v(" "),n("p",[e._v("\n      "+e._s(e.format(new Date(e.event.datetime.start),"MMM d"))+"\n    ")])])])}),[],!1,null,"45994358",null);t.default=component.exports;installComponents(component,{TIcon:n(160).default})},507:function(e,t,n){"use strict";n.r(t);var r=n(9),l=Object(r.defineComponent)({props:{weekStatus:{type:String,default:"current"},events:{type:Array,default:function(){}}},setup:function(){return{}}}),c=n(15),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-1 text-xs",class:{"opacity-75":"past"===e.weekStatus}},e._l(e.events,(function(t){return n("li",{key:t.slug},[e._t("event",null,{event:t})],2)})),0)}),[],!1,null,null,null);t.default=component.exports},508:function(e,t,n){"use strict";n.r(t);var r=n(9),l=n(489),c=n(492),o=n(559),m=Object(r.defineComponent)({props:{milestone:{type:Object,required:!0}},setup:function(e){var t=Object(r.computed)((function(){return Object(l.a)(new Date(e.milestone.deadline))||Object(c.a)(new Date(e.milestone.deadline))}));return{format:o.a,isFutureMilestone:t}}}),d=n(15),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:e.isFutureMilestone?"text-pink-600":"text-gray-300",attrs:{icon:"cutoff"===e.milestone.type?"exclamation-circle":"check-square"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureMilestone}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/milestone/"+e.milestone.slug}},[e._v(e._s(e.milestone.title))])],1),e._v(" "),n("p",[e._v("Due "+e._s(e.format(new Date(e.milestone.deadline),"MMM d")))])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(160).default})},512:function(e,t,n){"use strict";n(499)},513:function(e,t,n){var r=n(59)(!1);r.push([e.i,".mt-05[data-v-683883f6]{margin-top:.05rem}",""]),e.exports=r},515:function(e,t,n){"use strict";n.r(t);n(43);var r=n(526),l=n(496),c=n(559),o=n(502),m=n(527),d=n(511),f=n(9),v=Object(f.defineComponent)({props:{week:{type:Object,required:!0}},setup:function(e){var t=Object(f.computed)((function(){return new Date(e.week.week)})),n=Object(f.computed)((function(){return Object(r.a)(new Date,t.value,{weekStartsOn:1})?"current":Object(l.a)(t.value)?"past":"future"})),v=Object(f.computed)((function(){return"".concat(Object(c.a)(Object(o.a)(t.value,{weekStartsOn:1}),"MMM d")," → ").concat(Object(c.a)(Object(m.a)(t.value,{weekStartsOn:1}),"MMM d"))}));return{format:c.a,weekStatus:n,weekDates:v,clsx:d.a}}}),w=(n(512),n(15)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-start space-x-2"},[n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tl"},expression:"{ theme: 'tl' }"}],staticClass:"relative flex items-center justify-center flex-none w-10 h-10 font-mono text-sm font-semibold border rounded-lg shadow",class:e.clsx({"text-pink-600":"current"===e.weekStatus,"bg-gray-100 text-gray-500":"past"===e.weekStatus,"bg-white":"future"===e.weekStatus}),attrs:{content:e.weekDates}},[e._v("\n    W"+e._s(e.week.number)+"\n    "),["current","past"].includes(e.weekStatus)?[n("TIcon",{staticClass:"absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1",class:"current"===e.weekStatus?"text-pink-600":"text-gray-700",attrs:{icon:"current"===e.weekStatus?"hourglass-half":"check-circle"}})]:e._e()],2),e._v(" "),n("div",[e.week.events.length||e.week.milestones.length?[e.week.events.length?n("TimelineWeekItems",{attrs:{events:e.week.events},scopedSlots:e._u([{key:"event",fn:function(t){var r=t.event;return[n("TimelineWeekEvent",{attrs:{event:r,"week-status":e.weekStatus}})]}}],null,!1,1570511934)}):e._e(),e._v(" "),e.week.milestones.length?n("TimelineWeekItems",{attrs:{events:e.week.milestones},scopedSlots:e._u([{key:"event",fn:function(e){var t=e.event;return[n("TimelineWeekMilestone",{attrs:{milestone:t}})]}}],null,!1,1244855301)}):e._e()]:n("p",{staticClass:"text-xs italic text-gray-400"},[e._v("—")])],2)])}),[],!1,null,"683883f6",null);t.default=component.exports;installComponents(component,{TIcon:n(160).default,TimelineWeekEvent:n(506).default,TimelineWeekItems:n(507).default,TimelineWeekMilestone:n(508).default})},518:function(e,t,n){"use strict";(function(e){var r=n(5),l=(n(32),n(9));t.a=Object(l.defineComponent)({setup:function(){Object(l.useMeta)().title.value="Timeline";var t=Object(l.useContext)(),n=t.$content,c=t.$store,o=Object(l.ref)([]),m=Object(l.ref)([]),d=Object(l.ref)([]),f=Object(l.ref)(),v=Object(l.ref)("public"===e.env.SCOPE);return Object(l.useFetch)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.value=c.events,d.value=c.milestones,m.value=c.timeline,e.next=5,n("announcement").fetch();case 5:f.value=e.sent;case 6:case"end":return e.stop()}}),e)})))),{events:o,timeline:m,milestones:d,isPublic:v,announcement:f}},head:{}})}).call(this,n(77))},525:function(e,t,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("24812411",content,!0,{sourceMap:!1})},529:function(e,t,n){"use strict";n.r(t);n(26),n(25),n(34),n(21),n(39);var r=n(13),l=(n(35),n(22),n(9)),c=n(481),o=n(539),m=n(556),d=n(526);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=Object(l.defineComponent)({props:{timeline:{type:Array,required:!0},events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(e){return{compiledTimeline:Object(l.ref)(function(t,n){if(!t)return[];var r=n;return t.map((function(t){var n=Object(c.a)(new Date(t.dates.start)),l=Object(o.a)(new Date(t.dates.end)),f=Object(m.a)({start:n,end:l},{weekStartsOn:1}).map((function(t){var n=r,l=function(e,t){return t.filter((function(t){return Object(d.a)(new Date(e),new Date(t.datetime.start),{weekStartsOn:1})}))}(t,e.events),c=function(e,t){return t.filter((function(t){return Object(d.a)(new Date(e),new Date(t.deadline),{weekStartsOn:1})}))}(t,e.milestones);return r++,{number:n,events:l,milestones:c,week:t}}));return v(v({},t),{},{weeks:f})}))}(e.timeline,1))}}}),O=n(15),component=Object(O.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"w-full p-8 mx-auto bg-white border shadow-lg rounded-xl"},[e.compiledTimeline.length?n("ul",{staticClass:"space-y-8"},e._l(e.compiledTimeline,(function(t){return n("li",{key:t.id},[n("h3",{staticClass:"\n            flex\n            items-center\n            justify-between\n            mb-4\n            text-xs\n            font-semibold\n            tracking-wide\n            uppercase\n          "},[n("span",[e._v(e._s(t.title))]),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",theme:"tl"},expression:"{ placement: 'right', theme: 'tl' }"}],staticClass:"py-1 pl-2 text-gray-500",attrs:{content:t.description}},[n("TIcon",{attrs:{icon:"question-circle"}})],1)]),e._v(" "),n("div",{staticClass:"space-y-4"},e._l(t.weeks,(function(e){return n("TimelineWeek",{key:e.number,attrs:{week:e}})})),1)])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(160).default,TimelineWeek:n(515).default})},537:function(e,t,n){"use strict";n(525)},538:function(e,t,n){var r=n(59)(!1);r.push([e.i,'.main-grid[data-v-5d9cde36]{display:grid;grid-template-rows:auto auto;grid-template-columns:1fr;grid-template-areas:"events" "timeline"}@media (min-width:768px){.main-grid[data-v-5d9cde36]{grid-column-gap:1rem;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;grid-template-areas:"timeline events"}}@media (min-width:1024px){.main-grid[data-v-5d9cde36]{grid-gap:2rem}}.timeline[data-v-5d9cde36]{grid-area:timeline}.events[data-v-5d9cde36]{grid-area:events}',""]),e.exports=r},566:function(e,t,n){"use strict";n.r(t);var r=n(518).a,l=(n(537),n(15)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"h-full bg-gray-50"},[e.$fetchState.pending?e._e():n("div",{staticClass:"w-full",class:e.isPublic?"max-w-2xl mx-auto":"main-grid"},[e.isPublic?e._e():n("div",{staticClass:"w-64 mx-auto timeline"},[n("h3",{staticClass:"md:hidden title-with-lines"},[e._v("Timeline")]),e._v(" "),n("Timeline",{attrs:{timeline:e.timeline,events:e.events,milestones:e.milestones}})],1),e._v(" "),n("div",{staticClass:"events"},[e.events&&e.events.length?n("div",[n("ClientOnly",[n("Events",{attrs:{events:e.events,milestones:e.milestones}})],1)],1):e._e()])])])}),[],!1,null,"5d9cde36",null);t.default=component.exports;installComponents(component,{Timeline:n(529).default,Events:n(555).default})}}]);