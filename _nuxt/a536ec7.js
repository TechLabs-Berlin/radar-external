(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,12,14,21],{477:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1eb89c8e",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:t.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:t.resource.url,target:"_blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(157).default})},482:function(t,e,n){"use strict";n(477)},483:function(t,e,n){var r=n(59)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},484:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(9),o=n(487),l=n(490),c=n(507),f=n(494),d=function(t){var e=Object(r.computed)((function(){return Object(o.a)(t.date)})),n=Object(r.computed)((function(){return Object(l.a)(t.date)}));return{isLive:Object(r.computed)((function(){var e=Object(c.a)(new Date,t.date);return e>=0&&e<=120})),isFutureDate:e,isTodayDate:n,isInOneHour:Object(r.computed)((function(){var e=Object(c.a)(t.date,new Date);return e<=60&&e>=0})),isPastDate:Object(r.computed)((function(){return Object(f.a)(t.date)}))}}},485:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(482),n(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},486:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("054b0600",content,!0,{sourceMap:!1})},488:function(t,e,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("8048a682",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n.r(e);n(26),n(25),n(22),n(34),n(21),n(39);var r=n(13),o=(n(255),n(556)),l=n(9),c=n(484);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(l.defineComponent)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.datetime.start),n=Object(c.a)(d(d({},t.tlEvent),{},{date:e})),r=n.isPastDate,f=n.isFutureDate,v=n.isLive,m=n.isInOneHour,h=Object(l.computed)((function(){for(var e=0,n=Object.values(t.tlEvent.links);e<n.length;e++){if(n[e].length)return!0}})),O=Object(l.computed)((function(){return v.value?"Taking":r.value?"Took":"Takes"}));return{format:o.a,eventDate:e,hasResources:h,isInOneHour:m,isLive:v,isPastDate:r,isFutureDate:f,verb:O}}}),m=(n(495),n(15)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastDate&&!t.isLive,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.eventDate}}):t._e(),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.id}},[n("h2",{staticClass:"\n              relative\n              inline-block\n              mb-1\n              text-2xl\n              font-bold\n              hover:underline\n            "},[t._v("\n            "+t._s(t.tlEvent.title)+"\n            "),n("div",{staticClass:"\n                absolute\n                top-0\n                right-0\n                hidden\n                pl-2\n                text-base text-blue-600\n                transform\n                translate-x-full translate-y-1\n                icon\n              "},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.title)+"\n        ")])],t._v(" "),n("div",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.verb)+" place on\n          "+t._s(t.format(t.eventDate,"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.tlEvent.content.html)}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[(t.isInOneHour||t.isLive)&&t.tlEvent.links.meetings&&t.tlEvent.links.meetings.length?[n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.meetings,title:"Meeting Rooms"}})]:t.isCurrentEvent?[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n          Other event links will be posted soon!\n        ")])]:t._e(),t._v(" "),t.isLive||t.isPastDate||t.showResources||t.tlEvent.showResources?[t.tlEvent.links.forms&&t.tlEvent.links.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.links.other&&t.tlEvent.links.other.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.other,title:"Resources"}}):t._e()]:t._e()],2):t._e()],1)])}),[],!1,null,"522f9d46",null);e.default=component.exports;installComponents(component,{Stamp:n(492).default,TIcon:n(157).default,EventListItemResourceList:n(493).default,WrapperContentBox:n(485).default})},492:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(484),l=Object(r.defineComponent)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(o.a)({date:t.date}),n=e.isLive,l=e.isFutureDate,c=e.isTodayDate,text=Object(r.computed)((function(){return n.value?"live!":c.value?"today!":"next"})),f=Object(r.computed)((function(){return l.value&&!c.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:l,isTodayDate:c,text:text,classNames:f,isLive:n}}}),c=n(15),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(481).default})},495:function(t,e,n){"use strict";n(486)},496:function(t,e,n){var r=n(59)(!1);r.push([t.i,".title-link:hover .icon[data-v-522f9d46]{display:inline-block}",""]),t.exports=r},498:function(t,e,n){"use strict";n(488)},499:function(t,e,n){var r=n(59)(!1);r.push([t.i,".milestone-grid[data-v-ba052d18]{display:grid;grid-gap:1rem;grid-template-columns:auto 1fr}.shadow-inner-pink[data-v-ba052d18]{--tw-shadow:inset 0 4px 8px 0 rgba(250,30,90,0.15);box-shadow:0 0 #fa1e5a,0 0 #fa1e5a,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #fa1e5a),var(--tw-ring-shadow,0 0 #fa1e5a),var(--tw-shadow)}.title-link:hover .icon[data-v-ba052d18]{display:inline-block}",""]),t.exports=r},503:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(556),l=Object(r.defineComponent)({props:{milestone:{type:Object,required:!0},alwaysShowTasks:Boolean},setup:function(){var t=Object(r.ref)(!1);return{showTasks:t,toggleTasks:function(){return t.value=!t.value},format:o.a}}}),c=(n(498),n(15)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 bg-pink-100 border shadow-inner-pink lg:p-6 rounded-xl"},[n("article",{staticClass:"relative pt-8 lg:pt-0 milestone-grid"},[n("div",{staticClass:"-mt-1 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("header",{staticClass:"flex items-center space-x-4"},[n("div",[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.milestone.id}},[n("h2",{staticClass:"\n              relative\n              inline-block\n              mb-1\n              text-2xl\n              font-bold\n              text-pink-900\n              hover:underline\n            "},[t._v("\n            "+t._s(t.milestone.title)+"\n            "),n("div",{staticClass:"\n                absolute\n                top-0\n                right-0\n                hidden\n                pl-2\n                text-base text-pink-600\n                transform\n                translate-x-full translate-y-1\n                icon\n              "},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("ClientOnly",[n("p",{staticClass:"text-lg"},[t._v("\n            Due\n            "+t._s(t.format(new Date(t.milestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n          ")])])],1)]),t._v(" "),n("div"),t._v(" "),n("main",{staticClass:"space-y-8"},[n("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.milestone.content.html)}}),t._v(" "),t.milestone.tasks.length?[t.alwaysShowTasks?t._e():n("p",[t.showTasks?n("button",{staticClass:"\n              px-2\n              py-1\n              text-sm\n              font-semibold\n              tracking-wide\n              text-pink-900\n              uppercase\n              border-2 border-pink-900\n              rounded-lg\n              focus:outline-none\n              active:outline-none\n            ",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"\n              px-2\n              py-1\n              text-sm\n              font-semibold\n              tracking-wide\n              text-pink-900\n              uppercase\n              border-2 border-pink-900\n              rounded-lg\n              focus:outline-none\n              active:outline-none\n            ",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks||t.alwaysShowTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.milestone.tasks,(function(e){return n("li",{key:e.id,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-pink-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.title))]),t._v(" "),e.links.length?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.links,(function(link){return n("li",{key:link.id},[n("ResourceListItem",{attrs:{resource:link,"on-pink":""}})],1)})),0):t._e()])])})),0):t._e()]:t._e()],2)])])}),[],!1,null,"ba052d18",null);e.default=component.exports;installComponents(component,{TIcon:n(157).default,ResourceListItem:n(481).default})},512:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("3fc5c28a",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";n(512)},518:function(t,e,n){var r=n(59)(!1);r.push([t.i,".link-grid[data-v-a01bf206]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}",""]),t.exports=r},527:function(t,e,n){"use strict";n.r(e);n(26),n(25),n(34),n(21),n(39);var r=n(13),o=(n(35),n(22),n(159),n(9)),l=n(494),c=n(487);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(o.defineComponent)({props:{milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=t.milestones.map((function(t){return d(d({},t),{},{deadline:new Date(t.deadline)})})),n=Object(o.computed)((function(){return e.filter((function(t){var e=t.deadline;return Object(l.a)(e)}))})),r=Object(o.computed)((function(){return e.filter((function(t){var e=t.deadline;return Object(c.a)(e)})).sort((function(a,b){return a.deadline-b.deadline}))})),f=Object(o.computed)((function(){return r.value&&r.value.length?r.value[0]:null}));return{pastMilestones:n,futureMilestones:r,currentMilestone:f}}}),m=(n(517),n(15)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentMilestone?n("MilestoneListItem",{attrs:{milestone:t.currentMilestone}}):t._e()],1)}),[],!1,null,"a01bf206",null);e.default=component.exports;installComponents(component,{MilestoneListItem:n(503).default})},528:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{show:{type:Boolean},events:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(r.ref)(!1);return{showEvents:t,toggle:function(){return t.value=!t.value}}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[t.show?n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.id},[n("EventListItem",{attrs:{"tl-event":t,"is-past-event":"","show-resources":"","show-permalink":""}})],1)})),0):t._e()]:n("div",[n("p",[t._v("No Past Events.")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EventListItem:n(491).default})},529:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{events:{type:Array,default:function(){return[]}}},setup:function(){return{}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[n("div",{staticClass:"flex justify-end mb-8"},[n("div",{staticClass:"flex space-x-4 text-gray-500 focus:outline-none active:outline-none"},[n("p",{staticClass:"text-center"},[t._v("Future Events")]),t._v(" "),n("p",{staticClass:"text-center"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}})],1)])]),t._v(" "),n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.slug},[n("EventListItem",{attrs:{"tl-event":t,"show-permalink":""}})],1)})),0)]:n("div",[n("p",[t._v("No Future Events :(")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(157).default,EventListItem:n(491).default})},552:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(26),n(25),n(34),n(21),n(39),n(13)),l=(n(35),n(22),n(158),n(494)),c=n(490),f=n(487),d=n(537),v=n(478);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(r.defineComponent)({props:{events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=function(t){var e=Object(r.computed)((function(){return t.map((function(t){return h(h({},t),{},{datetime:h(h({},t.datetime),{},{start:new Date(t.datetime.start)})})}))})),n=Object(r.computed)((function(){return e.value.filter((function(t){var e=t.datetime.start;return Object(l.a)(e)&&!Object(c.a)(e)}))})),o=Object(r.computed)((function(){return e.value.filter((function(t){var e=t.datetime.start;return Object(f.a)(e)||Object(c.a)(e)}))})),m=Object(r.computed)((function(){var t=o.value.map((function(t){return t.datetime.start})),e=Object(d.a)(new Date,t);return o.value.find((function(t){var n=t.datetime.start;return Object(v.a)(n,e)}))}));return{events:e,pastEvents:n,currentEvent:m,futureEvents:o,isToday:c.a,isFuture:f.a,isPast:l.a,isSameDay:v.a}}(t.events);return{pastEvents:e.pastEvents,currentEvent:e.currentEvent,futureEvents:e.futureEvents,isToday:e.isToday,showPastEvents:Object(r.ref)(!1)}}}),y=n(15),component=Object(y.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-8"},[t.milestones.length?n("Milestones",{attrs:{milestones:t.milestones}}):t._e()],1),t._v(" "),t.pastEvents.length?n("div",[n("div",{staticClass:"flex items-start justify-end h-8"},[n("button",{staticClass:"\n          flex\n          space-x-4\n          text-gray-500\n          focus:outline-none\n          active:outline-none\n        ",on:{click:function(e){t.showPastEvents=!t.showPastEvents}}},[n("p",{staticClass:"text-center"},[t._v("\n          "+t._s(t.showPastEvents?"Hide":"Show")+" Past Events\n        ")]),t._v(" "),n("p",{staticClass:"text-center"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.showPastEvents?"eye-slash":"chevron-up"}})],1)])]),t._v(" "),n("EventsPast",{attrs:{events:t.pastEvents,show:t.showPastEvents}})],1):t._e(),t._v(" "),t.currentEvent?n("div",{staticClass:"mb-8"},[n("ClientOnly",[n("EventListItem",{attrs:{"tl-event":t.currentEvent,"is-current-event":"","show-permalink":""}})],1)],1):t._e(),t._v(" "),t.futureEvents.length?n("EventsFuture",{attrs:{events:t.futureEvents.filter((function(e){return e.id!==t.currentEvent.id}))}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Milestones:n(527).default,TIcon:n(157).default,EventsPast:n(528).default,EventListItem:n(491).default,EventsFuture:n(529).default})}}]);