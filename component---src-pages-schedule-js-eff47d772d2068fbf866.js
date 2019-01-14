(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(151),o=n(159),s=(n(79),n(32),n(301)),d=n.n(s),u=(n(330),n(175)),l=n.n(u),c=n(154),p=(n(74),n(331),n(7)),h=n.n(p),w=n(150),m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).processTime=function(e){var t,n=e.start,r=e.end;n=n.toString(),r=r.toString();var a=function(e){var n=e.split(":");return parseInt(n[0])>12?(t="PM",n[0]=n[0]-12):12===parseInt(n[0])?(t="PM",n[0]=12):t="AM",n.join(":")+" "+t};return n=n.split(" ")[4].split(":").slice(0,2).join(":"),r=r.split(" ")[4].split(":").slice(0,2).join(":"),a(n)+" - "+a(r)},t}return h()(t,e),t.prototype.render=function(){var e=this,t=this.props.events;return a.a.createElement(g,null,t.map(function(t){return a.a.createElement(y,{key:t.id,className:t.type.toLowerCase()},a.a.createElement("p",null,e.processTime(t)),a.a.createElement("p",null,t.title),a.a.createElement("p",null,t.resourceId))}))},t}(r.Component),g=w.b.div.withConfig({displayName:"Agenda__EventsContainer",componentId:"uff95r-0"})(["display:flex;justify-content:space-between;flex-direction:column;"]),y=w.b.div.withConfig({displayName:"Agenda__EventItem",componentId:"uff95r-1"})(["display:grid;grid-template-columns:repeat(3,1fr);margin-bottom:12px;background:white;padding:12px;border-radius:3px;p{margin:0;color:white !important;}p:nth-of-type(3){text-align:right;}"]),D=[{id:0,resourceId:"Bytes",title:"Check In & Breakfast",start:new Date("1/19/2019 9:00"),end:new Date("1/19/2019 11:00"),type:"Logistic"},{id:2,resourceId:"Chung 138",title:"Opening Ceremony",start:new Date("1/19/2019 10:30"),end:new Date("1/19/2019 12:00"),type:"Logistic"},{id:3,resourceId:"Bytes",title:"Lunch",start:new Date("1/19/2019 12:00"),end:new Date("1/19/2019 13:00"),type:"Food"},{id:4,resourceId:"Chung 205/206",title:"Sponsors Room Open",start:new Date("1/19/2019 12:00"),end:new Date("1/19/2019 17:00"),type:"Logistic"},{id:5,resourceId:"Chung 138",title:"Team Building",start:new Date("1/19/2019 12:00"),end:new Date("1/19/2019 12:30"),type:"Logistic"},{id:6,resourceId:"Chung 143",title:"Intro to Git & GitHub Workshop",start:new Date("1/19/2019 12:30"),end:new Date("1/19/2019 13:30"),type:"Workshop"},{id:7,resourceId:"Chung 142",title:"Android Development Workshop",start:new Date("1/19/2019 13:30"),end:new Date("1/19/2019 14:30"),type:"Workshop"},{id:8,resourceId:"Chung 144",title:"iOS Development Workshop",start:new Date("1/19/2019 13:30"),end:new Date("1/19/2019 14:30"),type:"Workshop"},{id:9,resourceId:"Chung 139",title:"Game Design Workshop",start:new Date("1/19/2019 14:30"),end:new Date("1/19/2019 15:30"),type:"Workshop"},{id:10,resourceId:"Chung 143",title:"Web Development Workshop",start:new Date("1/19/2019 14:30"),end:new Date("1/19/2019 15:30"),type:"Workshop"},{id:11,resourceId:"Chung 141",title:"Data Science Workshop",start:new Date("1/19/2019 15:30"),end:new Date("1/19/2019 16:30"),type:"Workshop"},{id:12,resourceId:"Chung 142",title:"Esri's GIS Workshop",start:new Date("1/19/2019 15:30"),end:new Date("1/19/2019 16:30"),type:"Workshop"},{id:13,resourceId:"Chung 145",title:"MongoDB's Build a Web App with MongoDB Workshop",start:new Date("1/19/2019 16:30"),end:new Date("1/19/2019 17:30"),type:"Workshop"},{id:14,resourceId:"Chung 143",title:"Google's Tech Talk",start:new Date("1/19/2019 16:30"),end:new Date("1/19/2019 17:30"),type:"Workshop"},{id:15,resourceId:"Chung 142",title:"Auth0's Security Workshop",start:new Date("1/19/2019 17:30"),end:new Date("1/19/2019 18:30"),type:"Workshop"},{id:16,resourceId:"Bytes",title:"Dinner",start:new Date("1/19/2019 18:30"),end:new Date("1/19/2019 20:00"),type:"Food"},{id:17,resourceId:"Chung 142",title:"Group Therapy",start:new Date("1/19/2019 21:00"),end:new Date("1/19/2019 22:00"),type:"Activity"},{id:18,resourceId:"Chung 205/206",title:"MLH's Cup Stacking",start:new Date("1/19/2019 23:00"),end:new Date("1/20/2019 00:00"),type:"Activity"},{id:19,resourceId:"Bytes",title:"Midnight Face Masks",start:new Date("1/20/2019 00:00"),end:new Date("1/20/2019 01:00"),type:"Activity"},{id:20,resourceId:"Chung 143",title:"Ocean's 8 Movie Showing",start:new Date("1/20/2019 01:30"),end:new Date("1/20/2019 03:00"),type:"Activity"},{id:21,resourceId:"Chung Patio",title:"Swag Pinata",start:new Date("1/20/2019 04:00"),end:new Date("1/20/2019 05:00"),type:"Activity"},{id:22,resourceId:"Chung Patio",title:"Morning Yoga",start:new Date("1/20/2019 07:00"),end:new Date("1/20/2019 08:00"),type:"Activity"},{id:23,resourceId:"Bytes",title:"Breakfast",start:new Date("1/20/2019 08:00"),end:new Date("1/20/2019 09:30"),type:"Food"},{id:24,resourceId:"Chung 141",title:"UI/UX Workshop",start:new Date("1/20/2019 08:00"),end:new Date("1/20/2019 09:00"),type:"Workshop"},{id:25,resourceId:"Chung 142",title:"Technical Interview Workshop",start:new Date("1/20/2019 09:00"),end:new Date("1/20/2019 10:00"),type:"Workshop"},{id:26,resourceId:"Chung 145",title:"Women in Tech Panel",start:new Date("1/20/2019 10:00"),end:new Date("1/20/2019 11:00"),type:"Activity"},{id:27,resourceId:"Bytes",title:"Lunch",start:new Date("1/20/2019 12:00"),end:new Date("1/20/2019 13:00"),type:"Food"},{id:28,resourceId:"Chung 138",title:"Demos",start:new Date("1/20/2019 13:00"),end:new Date("1/20/2019 14:30"),type:"Logistic"},{id:29,resourceId:"Chung 138",title:"Closing Ceremony",start:new Date("1/20/2019 15:00"),end:new Date("1/20/2019 16:00"),type:"Logistic"}],I=Object.assign({},s.defaultSubHeaderLabelFormats,{hourShort:"h A",hourLong:"h A",minuteLong:"h:mm A"}),k=function(){var e,t,n,r=[],i=[];return e={},t=[],n=0,D.forEach(function(r){var a=-1;r.resourceId in e?a=e[r.resourceId]:(e[r.resourceId]=n,t.push({id:n,title:r.resourceId}),a=n,n++);var o={id:r.id,group:a,title:r.title,start_time:r.start,end_time:r.end,className:r.type.toLowerCase()};i.push(o)}),r=t,console.log(i),a.a.createElement(c.f,null,a.a.createElement(d.a,{subHeaderLabelFormats:I,sidebarContent:"Location",groups:r,items:i,defaultTimeStart:l()("1/19/2019 7:00"),defaultTimeEnd:l()("1/19/2019 10:00"),dragSnap:!0,lineHeight:64,minZoom:144e5,canMove:!1,canChangeGroup:!1,stackItems:!0,timeSteps:{second:1,minute:30,hour:1,day:1,month:1,year:1}},a.a.createElement(s.TimelineMarkers,null,a.a.createElement(s.TodayMarker,null))),a.a.createElement(c.c,null,"Agenda View"),a.a.createElement(m,{events:D}))};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Schedule",keywords:["schedule","events","workshops"]}),a.a.createElement(c.c,null,"Schedule"),a.a.createElement(k,null))}},151:function(e,t,n){"use strict";var r=n(152),a=n(0),i=n.n(a),o=n(4),s=n.n(o),d=n(153),u=n(150),l=n(156),c=n(157),p=(n(158),u.b.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-1iy3hlk-0"})(["max-width:960px;margin:0 auto 100px auto;"])),h=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement(l.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(i.a.Fragment,null,t)),i.a.createElement(c.a,null))},data:r})};h.propTypes={children:s.a.node.isRequired},t.a=h},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Rose Hack 2019"}}}}},330:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-schedule-js-eff47d772d2068fbf866.js.map