(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(151),l=n(159),i=n(154),s=(n(76),n(77),n(74),n(7)),c=n.n(s),m=(n(200),n(150)),p=m.b.div.withConfig({displayName:"MentorItem__MentorCard",componentId:"sc-1k9wsnk-0"})(["background:white;width:400px;margin-bottom:24px;border-radius:4px;border-top:6px solid #e68dcb;position:relative;"]),u=m.b.div.withConfig({displayName:"MentorItem__MentorCardWrapper",componentId:"sc-1k9wsnk-1"})(["padding:36px;"]),d=m.b.h1.withConfig({displayName:"MentorItem__MentorName",componentId:"sc-1k9wsnk-2"})(["font-family:Lato,sans-serif;margin-bottom:0px;"]),h=m.b.h3.withConfig({displayName:"MentorItem__MentorCompany",componentId:"sc-1k9wsnk-3"})(["font-family:Lato,sans-serif;color:#9c9c9c;"]),f=m.b.div.withConfig({displayName:"MentorItem__SkillsContainer",componentId:"sc-1k9wsnk-4"})(["display:flex;flex-wrap:wrap;margin-bottom:12px;"]),y=m.b.div.withConfig({displayName:"MentorItem__Skill",componentId:"sc-1k9wsnk-5"})(["font-family:Lato,sans-serif;background:#89647b;padding:5px;border-radius:4px;margin-right:6px;margin-bottom:6px;color:white;"]),g=m.b.div.withConfig({displayName:"MentorItem__ContactButton",componentId:"sc-1k9wsnk-6"})(["font-family:Montserrat,sans-serif;background:#775b95;position:absolute;width:100%;color:white;bottom:0;text-align:center;cursor:pointer;padding:6px;"]),k=function(e){var t=e.mentor;return r.a.createElement(p,null,r.a.createElement(u,null,r.a.createElement(d,null,t.name),r.a.createElement(h,null,t.company),r.a.createElement(f,null,t.skills.split(",").map(function(e){return r.a.createElement(y,null,e)}))),r.a.createElement(g,null,"Message me!"))},w=m.b.section.withConfig({displayName:"Mentors__MentorsWrapper",componentId:"f2ua9v-0"})(["display:flex;flex-wrap:wrap;justify-content:space-evenly;"]),E=m.b.input.withConfig({displayName:"Mentors__Input",componentId:"f2ua9v-1"})(["font-family:'Lato',sans-serif;margin-bottom:36px;display:block;margin-left:auto;"]),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={searchQuery:"",mentors:[{name:"Sirina Nabhan",company:"NASA JPL",skills:"presentation, idea formulation, VBA/MatLAB, some C++"},{name:"Raelene Gonzales",company:"Google",skills:"Java, python, design, database, dart, JavaScript, html, css, sql, informatics"},{name:"Melanie Whalen",company:"Esri",skills:"ArcGIS Runtime SDKs, python, C#, Java"},{name:"Christopher Curtis",company:"Esri",skills:"C++, C#, Python, ArcGIS"},{name:"Morgan Zhang",company:"Esri",skills:"esri, arcgis"},{name:"Lauren Boyd",company:"Esri",skills:".NET, Java, Android, JavaScript, Esri products"},{name:"Dhrumil Shah",company:"Esri",skills:"JavaScript, C#"},{name:"Roxana González-Burgos",company:"NASA JPL",skills:"web development, JS, CSS, HTML, Angular, D3.js, underscore/lodash, node.js, Python, java, c++"},{name:"Eric\tOij",company:"NASA JPL",skills:"python, java, networking"},{name:"Jesse Mendoza",company:"NASA JPL",skills:"Python"}]},t.onChangeSearch=function(e){t.setState({searchQuery:e.target.value})},t.filterMentors=function(e){return e.skills.split(",").map(function(e){return e.toLowerCase()}).some(function(e){return!!e.includes(t.state.searchQuery)})},t.mentorsSearch=function(){return""===t.state.searchQuery?t.state.mentors:t.state.mentors.filter(t.filterMentors)},t}return c()(t,e),t.prototype.render=function(){var e=this.state.searchQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onChange:this.onChangeSearch,value:e,placeholder:"javascript"}),r.a.createElement(w,null,this.mentorsSearch().map(function(e){return r.a.createElement(k,{mentor:e})}),0===this.mentorsSearch().length&&r.a.createElement(i.d,null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"sad"},"😭"))),r.a.createElement("h1",null,"No mentors with that skill"),r.a.createElement("p",null,"Ask for help in the"," ",r.a.createElement(i.a,{href:"https://rosehack2019.slack.com/messages/CEZTAFJG0/",target:"_blank"},"#mentors")," ","channel on Slack."))))},t}(a.Component);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Mentors",keywords:["mentors","help","skills"]}),r.a.createElement(i.c,null,"Mentors"),r.a.createElement(i.f,null,r.a.createElement(b,null)))}},151:function(e,t,n){"use strict";var a=n(152),r=n(0),o=n.n(r),l=n(4),i=n.n(l),s=n(153),c=n(150),m=n(156),p=n(157),u=(n(158),c.b.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-1iy3hlk-0"})(["max-width:960px;margin:0 auto 100px auto;"])),d=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null,o.a.createElement(m.a,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(o.a.Fragment,null,t)),o.a.createElement(p.a,null))},data:a})};d.propTypes={children:i.a.node.isRequired},t.a=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Rose Hack 2019"}}}}}}]);
//# sourceMappingURL=component---src-pages-mentors-js-1ab8e33c86741f65273d.js.map