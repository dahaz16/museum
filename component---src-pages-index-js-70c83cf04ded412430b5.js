webpackJsonp([35783957827783],{658:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function c(){return"undefined"==typeof v&&"undefined"!=typeof window&&window.IntersectionObserver&&(v=new window.IntersectionObserver(function(e){e.forEach(function(e){k.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(v.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),v}t.__esModule=!0;var s=a(5),o=l(s),r=a(9),i=l(r),n=a(8),d=l(n),u=a(106),f=l(u),p=a(6),m=l(p),h=a(1),b=l(h),y=a(2),x=l(y),g=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},_={},w=function(e){var t=g(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!_[a]||(_[a]=!0,!1)},v=void 0,k=[],z=function(e,t){c().observe(e),k.push([e,t])},j=null,E=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.sizes?'sizes="'+e.sizes+'" ':"",c=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",i=e.opacity?e.opacity:"1",n=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+o+r+t+a+s+c+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+n+";opacity:"+i+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},Y=function(e){var t=e.style,a=e.onLoad,l=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,m.default)({},l,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};Y.propTypes={style:x.default.object,onLoad:x.default.func};var S=function(e){function t(a){(0,o.default)(this,t);var l=(0,i.default)(this,e.call(this,a)),c=!0,s=!0,r=!1,n=w(a);return!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=!1,s=!1,r=!0),"undefined"==typeof window&&(c=!1,s=!1),l.state={isVisible:c,imgLoaded:s,IOSupported:r},l.handleRef=l.handleRef.bind(l),l}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=g(this.props),a=t.title,l=t.alt,c=t.className,s=t.outerWrapperClassName,o=t.style,r=void 0===o?{}:o,i=t.imgStyle,n=void 0===i?{}:i,d=t.placeholderStyle,u=void 0===d?{}:d,f=t.sizes,p=t.resolutions,h=t.backgroundColor,y=t.Tag,x=void 0;x="boolean"==typeof h?"lightgray":h;var _=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},n,u),w=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},n);if(f){var v=f;return v.srcWebp&&v.srcSetWebp&&E()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),b.default.createElement(y,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(y,{className:(c?c:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},b.default.createElement(y,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&b.default.createElement(Y,{alt:l,title:a,src:v.base64,style:_}),v.tracedSVG&&b.default.createElement(Y,{alt:l,title:a,src:v.tracedSVG,style:_}),x&&b.default.createElement(y,{title:a,style:{backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(Y,{alt:l,title:a,srcSet:v.srcSet,src:v.src,sizes:v.sizes,style:w,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,m.default)({alt:l,title:a},v))}})))}if(p){var k=p,z=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},r);return"inherit"===r.display&&delete z.display,k.srcWebp&&k.srcSetWebp&&E()&&(k.src=k.srcWebp,k.srcSet=k.srcSetWebp),b.default.createElement(y,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(y,{className:(c?c:"")+" gatsby-image-wrapper",style:z,ref:this.handleRef},k.base64&&b.default.createElement(Y,{alt:l,title:a,src:k.base64,style:_}),k.tracedSVG&&b.default.createElement(Y,{alt:l,title:a,src:k.tracedSVG,style:_}),x&&b.default.createElement(y,{title:a,style:{backgroundColor:x,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&b.default.createElement(Y,{alt:l,title:a,width:k.width,height:k.height,srcSet:k.srcSet,src:k.src,style:w,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,m.default)({alt:l,title:a,width:k.width,height:k.height},k))}})))}return null},t}(b.default.Component);S.defaultProps={fadeIn:!0,alt:"",Tag:"div"},S.propTypes={responsiveResolution:x.default.object,responsiveSizes:x.default.object,resolutions:x.default.object,sizes:x.default.object,fadeIn:x.default.bool,title:x.default.string,alt:x.default.string,className:x.default.oneOfType([x.default.string,x.default.object]),outerWrapperClassName:x.default.oneOfType([x.default.string,x.default.object]),style:x.default.object,imgStyle:x.default.object,placeholderStyle:x.default.object,position:x.default.string,backgroundColor:x.default.oneOfType([x.default.string,x.default.bool]),onLoad:x.default.func,Tag:x.default.string},t.default=S},876:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=a(1),o=l(s),r=a(33),i=l(r),n=function(e){return o.default.createElement(i.default,c({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z"})))};t.default=n,e.exports=t.default},271:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=a(1),o=l(s),r=a(33),i=l(r),n=function(e){return o.default.createElement(i.default,c({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m36.4 21.4q0 1.2-0.9 2.1l-14.5 14.5q-0.9 0.8-2 0.8-1.2 0-2-0.8l-1.7-1.7q-0.9-0.8-0.9-2t0.9-2l6.5-6.6h-15.7q-1.1 0-1.9-0.8t-0.7-2v-2.9q0-1.2 0.7-2t1.9-0.9h15.7l-6.5-6.5q-0.9-0.8-0.9-2t0.9-2l1.7-1.7q0.8-0.9 2-0.9 1.2 0 2 0.9l14.5 14.5q0.9 0.8 0.9 2z"})))};t.default=n,e.exports=t.default},272:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=a(1),o=l(s),r=a(33),i=l(r),n=function(e){return o.default.createElement(i.default,c({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m4.4 37.1h6.4v-6.4h-6.4v6.4z m7.8 0h7.2v-6.4h-7.2v6.4z m-7.8-7.8h6.4v-7.2h-6.4v7.2z m7.8 0h7.2v-7.2h-7.2v7.2z m-7.8-8.6h6.4v-6.4h-6.4v6.4z m16.4 16.4h7.1v-6.4h-7.1v6.4z m-8.6-16.4h7.2v-6.4h-7.2v6.4z m17.2 16.4h6.4v-6.4h-6.4v6.4z m-8.6-7.8h7.1v-7.2h-7.1v7.2z m-7.9-19.3v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m16.5 19.3h6.4v-7.2h-6.4v7.2z m-8.6-8.6h7.1v-6.4h-7.1v6.4z m8.6 0h6.4v-6.4h-6.4v6.4z m0.7-10.7v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.2 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z"})))};t.default=n,e.exports=t.default},273:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=a(1),o=l(s),r=a(33),i=l(r),n=function(e){return o.default.createElement(i.default,c({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"})))};t.default=n,e.exports=t.default},487:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=a(10),s=l(c),o=a(2),r=l(o),i=a(1),n=l(i),d=a(488),u=l(d),f=function(e){var t=e.posts,a=e.theme;return n.default.createElement(n.default.Fragment,null,n.default.createElement("main",{className:s.default.dynamic([["3489809510",[a.space.inset.default,"calc("+a.space.default+" * 1.5) 0 calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 1.5)",a.text.maxWidth.tablet,a.text.maxWidth.desktop]]])+" main"},n.default.createElement("ul",{className:s.default.dynamic([["3489809510",[a.space.inset.default,"calc("+a.space.default+" * 1.5) 0 calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 1.5)",a.text.maxWidth.tablet,a.text.maxWidth.desktop]]])},t.map(function(e){var t=e.node,l=e.node.fields.slug;return n.default.createElement(u.default,{key:l,post:t,theme:a})}))),n.default.createElement(s.default,{styleId:"3489809510",css:[".main.__jsx-style-dynamic-selector{padding:0 "+a.space.inset.default+";}","ul.__jsx-style-dynamic-selector{list-style:none;margin:0 auto;padding:"+("calc("+a.space.default+" * 1.5) 0 calc("+a.space.default+" * 0.5)")+";}","@media screen and (min-width:601px){.main.__jsx-style-dynamic-selector{padding:0 "+("0 calc("+a.space.default+" * 1.5)")+";}ul.__jsx-style-dynamic-selector{max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1025px){ul.__jsx-style-dynamic-selector{max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+" * 1.5) 0 calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 1.5)",a.text.maxWidth.tablet,a.text.maxWidth.desktop]}))};f.propTypes={posts:r.default.array.isRequired,theme:r.default.object.isRequired},t.default=f,e.exports=t.default},488:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=a(10),s=l(c),o=a(271),r=l(o),i=a(272),n=l(i),d=a(134),u=l(d),f=a(273),p=l(f),m=a(658),h=l(m),b=a(38),y=l(b),x=a(2),g=l(x),_=a(1),w=l(_),v=function(e){var t=e.theme,a=e.post,l=a.excerpt,c=a.fields,o=c.slug,i=c.prefix,d=a.frontmatter,f=d.title,m=d.category,b=d.author,x=d.cover.children,g=x[0].sizes;return w.default.createElement(w.default.Fragment,null,w.default.createElement("li",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},w.default.createElement(y.default,{to:o,key:o,className:"link"},w.default.createElement(h.default,{sizes:g}),w.default.createElement("h1",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},f," ",w.default.createElement(r.default,{className:"arrow"})),w.default.createElement("p",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])+" meta"},w.default.createElement("span",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},w.default.createElement(n.default,{size:18})," ",i),w.default.createElement("span",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},w.default.createElement(p.default,{size:18})," ",b),m&&w.default.createElement("span",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},w.default.createElement(u.default,{size:18})," ",m)),w.default.createElement("p",{className:s.default.dynamic([["893077714",[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]]])},l))),w.default.createElement(s.default,{styleId:"893077714",css:[".link{width:100%;color:"+t.text.color.primary+";}","li.__jsx-style-dynamic-selector{border:1px solid transparent;border-radius:"+t.size.radius.default+";margin:"+("calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)")+";padding:"+t.space.inset.s+";position:relative;-webkit-transition:all "+t.time.duration.default+";-webkit-transition:all "+t.time.duration.default+";transition:all "+t.time.duration.default+";background:transparent;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper{border-radius:"+t.size.radius.default+";border:1px solid "+t.line.color+";overflow:hidden;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper img{z-index:-1;}","li.__jsx-style-dynamic-selector:after{border-top:1px solid "+t.line.color+';content:"";height:0;position:absolute;bottom:'+("calc("+t.space.default+" * -1.5)")+";left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+t.time.duration.default+";-webkit-transition:all "+t.time.duration.default+";transition:all "+t.time.duration.default+";width:50%;}","li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{border-top:1px solid "+t.line.color+';content:"";height:0;position:absolute;top:'+("calc("+t.space.default+" * -1.5)")+";left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+t.time.duration.default+";-webkit-transition:all "+t.time.duration.default+";transition:all "+t.time.duration.default+";width:50%;}","h1.__jsx-style-dynamic-selector{padding:"+t.space.m+" "+t.space.s+" 0;line-height:"+t.blog.h1.lineHeight+";font-size:"+t.blog.h1.size+";}","h1.__jsx-style-dynamic-selector .arrow{display:none;}",'h1.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.11em;}',".meta.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;font-size:0.8em;padding:"+t.space.m+" "+t.space.s+";background:transparent;}",".meta.__jsx-style-dynamic-selector svg{fill:"+t.icon.color+";margin:"+t.space.inline.xs+";}",".meta.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;margin:"+t.space.xs+" "+t.space.s+" "+t.space.xs+" 0;}","p.__jsx-style-dynamic-selector{line-height:1.5;padding:0 "+t.space.s+";}",'p.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.42em;}','p.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.36em;}',"@media screen and (min-width:600px){li.__jsx-style-dynamic-selector{margin:"+("calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)")+";padding:"+t.space.default+";}li.__jsx-style-dynamic-selector:after{bottom:"+("calc("+t.space.default+" * -2)")+";}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:"+("calc("+t.space.default+" * -1.75)")+";}h1.__jsx-style-dynamic-selector{font-size:"+("calc("+t.blog.h1.size+" * 1.2)")+";padding:"+("calc("+t.space.default+" * 1.5) "+t.space.default+" 0")+";-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.meta.__jsx-style-dynamic-selector{padding:"+("calc("+t.space.m+" * 1.5) "+t.space.m)+";}p.__jsx-style-dynamic-selector{padding:0 "+t.space.default+";}}","@media screen and (min-width:1024px){li.__jsx-style-dynamic-selector{margin:"+("calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)")+";padding:0 0 "+("calc("+t.space.default+" * 2)")+";}li.__jsx-style-dynamic-selector:after{bottom:"+("calc("+t.space.default+" * -1.5)")+";}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:"+("calc("+t.space.default+" * -2.75)")+";}.blogItemLink:first-child>li.__jsx-style-dynamic-selector:before{top:"+("calc("+t.space.default+" * -2.75)")+";}h1.__jsx-style-dynamic-selector{font-size:2.5em;padding:"+("calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0")+";}.meta.__jsx-style-dynamic-selector{padding:"+("calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)")+";}p.__jsx-style-dynamic-selector{padding:"+("0 calc("+t.space.default+" * 2)")+";}@media (hover:hover){li.__jsx-style-dynamic-selector:hover{border:1px solid "+t.line.color+";-webkit-box-shadow:0px 3px 2px rgba(0,0,0,.03);box-shadow:0px 3px 2px rgba(0,0,0,.03);}li.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:"+("calc("+t.space.default+" * -2.5)")+";}li.__jsx-style-dynamic-selector:hover .gatsby-image-wrapper{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:all "+t.time.duration.default+";-webkit-transition:all "+t.time.duration.default+";transition:all "+t.time.duration.default+";}li.__jsx-style-dynamic-selector:hover h1.__jsx-style-dynamic-selector{color:"+t.blog.h1.hoverColor+";}li.__jsx-style-dynamic-selector:hover .arrow{opacity:1;-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}li.__jsx-style-dynamic-selector .arrow{display:inline-block;fill:"+t.color.special.attention+";opacity:0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}}"],dynamic:[t.text.color.primary,t.size.radius.default,"calc("+t.space.default+" * 2) 0 calc("+t.space.default+" * 3)",t.space.inset.s,t.time.duration.default,t.size.radius.default,t.line.color,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.line.color,"calc("+t.space.default+" * -1.5)",t.time.duration.default,t.space.m,t.space.s,t.blog.h1.lineHeight,t.blog.h1.size,t.space.m,t.space.s,t.icon.color,t.space.inline.xs,t.space.xs,t.space.s,t.space.xs,t.space.s,"calc("+t.space.default+" * 3) 0 calc("+t.space.default+" * 4)",t.space.default,"calc("+t.space.default+" * -2)","calc("+t.space.default+" * -1.75)","calc("+t.blog.h1.size+" * 1.2)","calc("+t.space.default+" * 1.5) "+t.space.default+" 0","calc("+t.space.m+" * 1.5) "+t.space.m,t.space.default,"calc("+t.space.default+" * 4) 0 calc("+t.space.default+" * 5)","calc("+t.space.default+" * 2)","calc("+t.space.default+" * -1.5)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * -2.75)","calc("+t.space.default+" * 1.2) calc("+t.space.default+" * 2) 0","calc("+t.space.default+" * 1.5) calc("+t.space.default+" * 2)\n              calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 2)",t.line.color,"calc("+t.space.default+" * -2.5)",t.time.duration.default,t.blog.h1.hoverColor,t.color.special.attention]}))};v.propTypes={post:g.default.object.isRequired,theme:g.default.object.isRequired},t.default=v,e.exports=t.default},489:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=a(487);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(c).default}}),e.exports=t.default},496:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=a(10),s=l(c),o=a(1),r=l(o),i=a(2),n=l(i),d=a(876),u=l(d),f=function(e){var t=e.scrollToContent,a=e.backgrounds,l=e.theme;return r.default.createElement(r.default.Fragment,null,r.default.createElement("section",{className:s.default.dynamic([["2850302347",[l.hero.background,a.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.time.duration.long,a.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,a.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])+" hero"},r.default.createElement("h1",{className:s.default.dynamic([["2850302347",[l.hero.background,a.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.time.duration.long,a.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,a.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},"This is a demo site of the ",r.default.createElement("strong",{className:s.default.dynamic([["2850302347",[l.hero.background,a.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.time.duration.long,a.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,a.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},"heroBlog")," GatsbyJS starter"),r.default.createElement("button",{onClick:t,"aria-label":"scroll",className:s.default.dynamic([["2850302347",[l.hero.background,a.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.time.duration.long,a.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,a.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])
},r.default.createElement(u.default,null))),r.default.createElement(s.default,{styleId:"2850302347",css:[".hero.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:"+l.hero.background+";background-image:url("+a.mobile+");background-size:cover;color:"+l.text.color.primary.inverse+";display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;height:100px;padding:"+l.space.inset.l+";padding-top:"+l.header.height.homepage+";}","h1.__jsx-style-dynamic-selector{text-align:center;font-size:"+l.hero.h1.size+";margin:"+l.space.stack.l+";color:"+l.hero.h1.color+";line-height:"+l.hero.h1.lineHeight+";}","h1.__jsx-style-dynamic-selector strong{position:relative;}",'h1.__jsx-style-dynamic-selector strong:after,h1.__jsx-style-dynamic-selector strong:before{content:"›";color:'+l.text.color.attention+";margin:0 "+l.space.xs+" 0 0;text-shadow:0 0 "+l.space.s+" "+l.color.neutral.gray.k+";}",'h1.__jsx-style-dynamic-selector strong:after{content:"‹";margin:0 0 0 '+l.space.xs+";}",'h1.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.11em;}',"button.__jsx-style-dynamic-selector{background:"+l.background.color.brand+";border:0;border-radius:50%;font-size:"+l.font.size.m+";padding:"+l.space.s+" "+l.space.m+";cursor:pointer;width:"+l.space.xl+";height:"+l.space.xl+";}","button.__jsx-style-dynamic-selector:focus{outline-style:none;background:"+l.color.brand.primary.active+";}","button.__jsx-style-dynamic-selector svg{fill:"+l.color.neutral.white+";-webkit-animation-duration:"+l.time.duration.long+";-webkit-animation-duration:"+l.time.duration.long+";animation-duration:"+l.time.duration.long+";-webkit-animation-name:buttonIconMove;-webkit-animation-name:buttonIconMove-__jsx-style-dynamic-selector;animation-name:buttonIconMove-__jsx-style-dynamic-selector;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}","@-webkit-keyframes buttonIconMove{0%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%.__jsx-style-dynamic-selector{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@-webkit-keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@media screen and (min-width:600px){.hero.__jsx-style-dynamic-selector{background-image:url("+a.tablet+");}h1.__jsx-style-dynamic-selector{max-width:90%;font-size:"+("calc("+l.hero.h1.size+" * 1.3)")+";}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.l+";}}","@media screen and (min-width:1024px){.hero.__jsx-style-dynamic-selector{background-image:url("+a.desktop+");}h1.__jsx-style-dynamic-selector{max-width:80%;font-size:"+("calc("+l.hero.h1.size+" * 1.5)")+";}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.xl+";}}"],dynamic:[l.hero.background,a.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.time.duration.long,a.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,a.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]}))};f.propTypes={scrollToContent:n.default.func.isRequired,backgrounds:n.default.object.isRequired,theme:n.default.object.isRequired},t.default=f,e.exports=t.default},497:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=a(496);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(c).default}}),e.exports=t.default},518:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.guery=void 0;var r=a(10),i=l(r),n=a(2),d=l(n),u=a(1),f=l(u),p=a(43),m=a(489),h=l(m),b=a(497),y=l(b),x=a(70),g=l(x),_=function(e){function t(){var a,l,o;c(this,t);for(var r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];return a=l=s(this,e.call.apply(e,[this].concat(i))),l.separator=f.default.createRef(),l.scrollToContent=function(e){l.separator.current.scrollIntoView({block:"start",behavior:"smooth"})},o=a,s(l,o)}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.data,a=t.posts.edges,l=void 0===a?[]:a,c=t.bgDesktop.resize.src,s=t.bgTablet.resize.src,o=t.bgMobile.resize.src,r=t.site.siteMetadata.facebook,n={desktop:c,tablet:s,mobile:o};return f.default.createElement(f.default.Fragment,null,f.default.createElement(p.ThemeContext.Consumer,null,function(t){return f.default.createElement(y.default,{scrollToContent:e.scrollToContent,backgrounds:n,theme:t})}),f.default.createElement("hr",{ref:this.separator,className:"jsx-311820556"}),f.default.createElement(p.ThemeContext.Consumer,null,function(e){return f.default.createElement(h.default,{posts:l,theme:e})}),f.default.createElement(g.default,{facebook:r}),f.default.createElement(i.default,{styleId:"311820556",css:["hr.jsx-311820556{margin:0;border:0;}"]}))},t}(f.default.Component);_.propTypes={data:d.default.object.isRequired},t.default=_;t.guery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-70c83cf04ded412430b5.js.map