(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(76),n(211)),i=(n(216),n(217),n(210)),s=n(220),l=n.n(s);n(221),n(107);var c=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleBox=function(){n.setState((function(e){return{isBoxVisible:!e.isBoxVisible}}))},n.state={isToggleOn:!0},n.handleClick=n.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.handleClick=function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},o.render=function(){return r.a.createElement("button",{className:this.state.isToggleOn?"tab":"answer",onClick:this.handleClick},r.a.createElement("div",null,r.a.createElement("p",{className:this.state.isToggleOn?"preText":"postText"},this.props.question)),this.state.isToggleOn?null:r.a.createElement("div",null,r.a.createElement("p",{className:"answerText"},this.props.answer)))},a}(a.Component),u=n(225),d=n.n(u);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Rose Hack 2020"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("img",{src:l.a,className:"animation"}),r.a.createElement("div",{className:"centerButton"},r.a.createElement("a",{href:"https://rosehack.typeform.com/to/ZQx66Q",style:{fontFamily:"Press Start 2P, cursive"},className:"apply-button"}," Apply")),r.a.createElement("h1",{className:"date"}," January 18 - 19, 2020")),r.a.createElement("section",{className:"title",id:"about"},r.a.createElement("h1",null,"About "),r.a.createElement("p",null,"Rose Hack is UC Riverside’s women-centric hackathon, founded by the female leaders of the Association for Computing Machinery (ACM-W) and the Society of Women Engineers (SWE). Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to create a strong network together through their shared passions in Science and Technology. Come for a lively weekend of innovation, face masks, discovering and creating new technology, networking, mentorship, and much more.")),r.a.createElement("section",{className:"title",id:"questions"},r.a.createElement("h1",{style:{textAlign:"center"}},"FAQs"),r.a.createElement("div",{className:"questionContainer"},r.a.createElement("div",{className:"half"},r.a.createElement(c,{question:"What is a hackathon?",answer:"A hackathon is a tech-focused event where individuals come together to build projects over the weekend. Projects can be an app, website, or anything that you want to build!"}),r.a.createElement(c,{question:"Who can attend?",answer:"All high school students or undergraduate students in any major are eligible to apply! Priority will be given to women or other underrepresented groups in tech."}),r.a.createElement(c,{question:"How much do I have to pay?",answer:"Rose Hack is completely free! You'll get a weekend's worth of swag, snacks, meals, drinks and a place to sleep. Free parking is also provided! "}),r.a.createElement(c,{question:"What should I bring?",answer:"Make sure to bring your laptop, chargers, toiletries, student ID, and anything else you need for 24 hours of hacking."}),r.a.createElement(c,{question:"Do I have to be on a team?",answer:"Though it is not required, we highly recommend that you form or join a team. We will have a team formation session if you cannot find a team before then."})),r.a.createElement("div",{className:"half"},r.a.createElement(c,{question:"Are there travel reimbursements?",answer:"Unfortunately, we won't be able to provide travel reimbursements this year. However, participants will be provided with parking permits to park at UC Riverside for free."}),r.a.createElement(c,{question:"What if I don't know how to code?",answer:"Rose Hack is open to all skill levels! We will also host workshops and provide awesome mentors that can help you learn and build your amazing project!"}),r.a.createElement(c,{question:"Can I start hacking before the event?",answer:"All projects for Rose Hack must be made during the weekend. Planning and gathering resources before the hackathon is allowed."}),r.a.createElement(c,{question:"I am not female. Should I still apply?",answer:"Absolutely! All high school and undergraduate students from any background and ethnicities are welcome to apply!"}),r.a.createElement(c,{question:"When should I show up/leave?",answer:"Participants should plan to arrive early Saturday morning(Jan 18) and leave Sunday afternoon(Jan 19). A detailed schedule will be released soon!"}))),r.a.createElement("p",{className:"title",style:{position:"relative",top:"30px"}},"Still have questions? Feel free to send us a ",r.a.createElement("a",{href:"mailto:rosehackucr@gmail.com"},"message"),"!")),r.a.createElement("section",{className:"title",id:"sponsors"},r.a.createElement("h1",{className:"sponsorTitle"},"Sponsors"),r.a.createElement("div",{className:"sponsorContainer"},r.a.createElement("a",{href:"https://balsamiq.com/",target:"_blank",rel:"noopener"},r.a.createElement("img",{className:"sponsor",src:d.a,alt:"Balsamiq"}))),r.a.createElement("p",null,"Interested in sponsoring Rose Hack 2020? Contact ",r.a.createElement("a",{href:"mailto:rosehackucr@gmail.com"},"us")," or view our ",r.a.createElement("a",{target:"_blank",href:"https://drive.google.com/file/d/1FhW65cbSZtFP4D2GwONYR08pLqQpoGaN/view?usp=sharing"},"sponsorship package"),".")))}},216:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},217:function(e,t,n){"use strict";n(16),n(12),n(8),n(80),n(145),n(218);var a=n(18);t.__esModule=!0,t.default=void 0;var r,o=a(n(78)),i=a(n(79)),s=a(n(143)),l=a(n(144)),c=a(n(0)),u=a(n(46)),d=function(e){var t=(0,l.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},p=Object.create({}),A=function(e){var t=d(e),n=f(t);return p[n]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:o}),c.default.createElement("source",{media:r,srcSet:n,sizes:o}))}))}function v(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:a})}))}function w(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var S=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+i+s+n+a+t+o+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,o=c.default.createElement(j,(0,l.default)({src:t},r));return n.length>1?c.default.createElement("picture",null,a(n),o):o},j=c.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,o=e.style,i=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:a,src:r},p,{onLoad:i,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));j.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var Q=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=h&&A(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!g&&m&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||h&&(g||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)(n)),n.handleRef=n.handleRef.bind((0,o.default)(n)),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=f(t),p[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,o=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,A=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,S=e.draggable,Q=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:Q?1:0,transition:P?"opacity "+m+"ms":"none"},s),z="boolean"==typeof h?"lightgray":h,B={transitionDelay:m+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&B,{},s,{},f),k={title:t,alt:this.state.isVisible?"":n,style:L,className:p};if(A){var D=A,T=D[0];return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&B)}),T.base64&&c.default.createElement(I,{src:T.base64,spreadProps:k,imageVariants:D,generateSources:O}),T.tracedSVG&&c.default.createElement(I,{src:T.tracedSVG,spreadProps:k,imageVariants:D,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(D),c.default.createElement(j,{alt:n,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:n,title:t,loading:w},T,{imageVariants:D}))}}))}if(g){var H=g,R=H[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},o);return"inherit"===o.display&&delete W.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},z&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:z,width:R.width,opacity:this.state.imgLoaded?0:1,height:R.height},P&&B)}),R.base64&&c.default.createElement(I,{src:R.base64,spreadProps:k,imageVariants:H,generateSources:O}),R.tracedSVG&&c.default.createElement(I,{src:R.tracedSVG,spreadProps:k,imageVariants:H,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(H),c.default.createElement(j,{alt:n,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:n,title:t,loading:w},R,{imageVariants:H}))}}))}return null},t}(c.default.Component);Q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});Q.propTypes={resolutions:P,sizes:N,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=Q;t.default=z},218:function(e,t,n){"use strict";n(219)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},219:function(e,t,n){var a=n(1),r=n(9),o=n(38),i=/"/g,s=function(e,t,n,a){var r=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},220:function(e,t,n){e.exports=n.p+"static/Heroanimation-8b306f0d637c1108d7280312735e1b91.gif"},221:function(e,t,n){"use strict";n(75),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Flippy",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"FrontSide",{enumerable:!0,get:function(){return o.FrontSide}}),Object.defineProperty(t,"BackSide",{enumerable:!0,get:function(){return o.BackSide}}),t.default=void 0;var a,r=(a=n(222))&&a.__esModule?a:{default:a},o=n(224);var i=r.default;t.default=i},222:function(e,t,n){"use strict";n(57),n(77),n(30),n(56),n(16),n(12),n(8),n(22),n(17),n(45),n(29),n(75),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(223));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(213);var A=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=u(t).call(this,e),n=!r||"object"!==i(r)&&"function"!=typeof r?d(a):r,p(d(n),"toggle",(function(){n.setState({isFlipped:!n.state.isFlipped})})),p(d(n),"handleFooterDotClick",(function(e,t){n.setState({isFlipped:0===e})})),p(d(n),"handleHoverOn",(function(e){n.setState({isFlipped:!0}),n.props.onMouseEnter(e)})),p(d(n),"handleTouchStart",(function(e){n.setState({isFlipped:!0,isTouchDevice:!0}),n.props.onTouchStart(e)})),p(d(n),"handleTouchEnd",(function(e){n.setState({isFlipped:!1}),n.props.onTouchEnd(e)})),p(d(n),"handleHoverOff",(function(e){n.setState({isFlipped:!1}),n.props.onMouseLeave(e)})),n.state={isFlipped:!1,isTouchDevice:!1},n}var n,o,A;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,A=[{key:"getDerivedStateFromProps",value:function(e,t){return l({},t,{isFlipped:"boolean"==typeof e.isFlipped?e.isFlipped:t.isFlipped})}}],(o=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,o=e.flipDirection,i=e.flipOnHover,c=e.flipOnClick,u=this.state,d=u.isFlipped,f=u.activeCardIndex,p=u.isTouchDevice,A=i?{onMouseEnter:this.handleHoverOn,onMouseLeave:this.handleHoverOff,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}:c?{onClick:this.toggle}:{};return a.default.createElement("div",s({className:"flippy-container",style:l({},n)},A),a.default.createElement("div",{className:"flippy-cardContainer-wrapper ".concat(o)},a.default.createElement("div",{className:"flippy-cardContainer ".concat(d?"isActive":""," ").concat(p?"istouchdevice":"")},t),this.props.showNavigation&&a.default.createElement(r.default,{onDotClick:this.handleFooterDotClick,activeCardIndex:f,cards:this.props.children})))}}])&&c(n.prototype,o),A&&c(n,A),t}(a.default.Component);t.default=A,A.defaultProps={showNavigation:!1,flipDirection:"horizontal",flipOnHover:!1,flipOnClick:!0,usePrettyStyle:!0,onMouseEnter:function(){},onMouseLeave:function(){},onTouchStart:function(){},onTouchEnd:function(){},onClick:function(){}}},223:function(e,t,n){"use strict";n(58),n(24),n(75),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(0))&&a.__esModule?a:{default:a};t.default=function(e){var t=e.cards,n=e.activeCardIndex,a=e.onDotClick;return r.default.createElement("div",{className:"flippy-footer"},t.map((function(e,t){return r.default.createElement("span",{key:"flippyFooterItem".concat(t),className:"flippy-footer-item".concat(n===t?" isActive":""),onClick:a.bind(null,t)},"*")})))}},224:function(e,t,n){"use strict";n(57),n(77),n(19),n(30),n(56),n(16),n(12),n(8),n(22),n(45),n(29),n(17),n(75),Object.defineProperty(t,"__esModule",{value:!0}),t.BackSide=t.FrontSide=void 0;var a,r=(a=n(0))&&a.__esModule?a:{default:a};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cardType,a=e.style,o=e.elementType,i=e.animationDuration,l=c(e,["className","cardType","style","elementType","animationDuration"]);return r.default.createElement(o||"div",s({className:"flippy-card flippy-".concat(n," ").concat(t||"")},l,{style:s({},a||{},{transitionDuration:"".concat(i/1e3,"s")})}),this.props.children)}}])&&u(n.prototype,a),o&&u(n,o),t}(r.default.Component);t.FrontSide=function(e){e.isFlipped;var t=e.style,n=e.animationDuration,a=c(e,["isFlipped","style","animationDuration"]);return r.default.createElement(A,o({},a,{style:s({},t||{}),animationDuration:n,cardType:"front"}))};t.BackSide=function(e){e.isFlipped;var t=e.style,n=c(e,["isFlipped","style"]);return r.default.createElement(A,o({},n,{style:s({},t||{}),cardType:"back"}))},A.defaultProps={animationDuration:600}},225:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-ce0243facfe6aea08ec7.js.map