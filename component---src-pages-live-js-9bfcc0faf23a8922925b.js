(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(56),a(212)),c=a(211),o=(a(228),a(229),a(274)),s=a.n(o);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Rose Hack 2020"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("img",{src:s.a,className:"animation"})))}},227:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},228:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(214);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={days:0,hours:0,min:0,sec:0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=this;this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)},l.componentWillUnmount=function(){this.stop()},l.calculateCountdown=function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var a={years:0,days:0,hours:0,min:0,sec:0};return t>=31557600&&(a.years=Math.floor(t/31557600),t-=365.25*a.years*86400),t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a},l.stop=function(){clearInterval(this.interval)},l.addLeadingZeros=function(e){for(e=String(e);e.length<2;)e="0"+e;return e},l.render=function(){var e=this.state;return r.a.createElement("div",{className:"Countdown"},r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.days)),r.a.createElement("span",null,1===e.days?"Day":"Days"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.hours)),r.a.createElement("span",null,"Hours"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.min)),r.a.createElement("span",null,"Min"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.sec)),r.a.createElement("span",null,"Sec"))))},n}(n.Component);l.defaultProps={date:new Date}},229:function(e,t,a){"use strict";var n=a(227),r=a(0),l=a.n(r),c=(a(28),a(37),a(21),a(17),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),o=r.createContext&&r.createContext(c),s=function(){return(s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function u(e){return function(t){return r.createElement(m,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,c=e.title,o=i(e,["attr","title"]);return r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:a,style:s({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(c)}var d=function(e){return u({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)};d.displayName="FaFacebookF";var h=function(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)};h.displayName="FaInstagram";var p=function(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)};p.displayName="FaLinkedinIn";var f=function(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)};f.displayName="FaTwitter";a(143),a(213),a(142),t.a=function(e){var t=e.children;n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("main",null,t),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"social row-item"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/rosehackucr/",target:"_blank"},l.a.createElement("h2",{className:"icon"}," ",l.a.createElement(d,null)," "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/rosehack_ucr",target:"_blank"},l.a.createElement("h2",{className:"icon"}," ",l.a.createElement(f,null)," "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/company/rose-hack/",target:"_blank"},l.a.createElement("h2",{className:"icon"}," ",l.a.createElement(p,null)," "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/rosehackucr/",target:"_blank"},l.a.createElement("h2",{className:"icon"}," ",l.a.createElement(h,null)," ")))),"Built with ❤️"," ","in Riverside, California")))}},274:function(e,t,a){e.exports=a.p+"static/liveAnimation-6451a1f6fe780c5f0a3e04ed0ab0f001.gif"}}]);
//# sourceMappingURL=component---src-pages-live-js-9bfcc0faf23a8922925b.js.map