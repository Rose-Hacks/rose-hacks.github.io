(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{222:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=(n(56),n(214)),r=n(213);n(230);t.default=function(){return o.a.createElement(s.a,null,o.a.createElement(r.a,{title:"Rose Hack 2020"}))}},230:function(e,t,n){"use strict";var a=n(0),o=n.n(a);n(216);var s=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={days:0,hours:0,min:0,sec:0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.componentDidMount=function(){var e=this;this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)},s.componentWillUnmount=function(){this.stop()},s.calculateCountdown=function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var n={years:0,days:0,hours:0,min:0,sec:0};return t>=31557600&&(n.years=Math.floor(t/31557600),t-=365.25*n.years*86400),t>=86400&&(n.days=Math.floor(t/86400),t-=86400*n.days),t>=3600&&(n.hours=Math.floor(t/3600),t-=3600*n.hours),t>=60&&(n.min=Math.floor(t/60),t-=60*n.min),n.sec=t,n},s.stop=function(){clearInterval(this.interval)},s.addLeadingZeros=function(e){for(e=String(e);e.length<2;)e="0"+e;return e},s.render=function(){var e=this.state;return o.a.createElement("div",{className:"Countdown"},o.a.createElement("p",{style:{textAlign:"center"}}," pressing start in "),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",{className:"timeText"},this.addLeadingZeros(e.days)),o.a.createElement("span",null,1===e.days?"Day":"Days"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.hours)),o.a.createElement("span",null,"Hours"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.min)),o.a.createElement("span",null,"Min"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.sec)),o.a.createElement("span",null,"Sec"))))},a}(a.Component);s.defaultProps={date:new Date},t.a=s}}]);
//# sourceMappingURL=component---src-pages-prizes-js-798392017e1bc9b64fce.js.map