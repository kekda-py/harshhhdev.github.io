(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{56833:function(t,e,n){"use strict";n.d(e,{Ex:function(){return o},$O:function(){return a},xx:function(){return s},JG:function(){return c},IN:function(){return l},eT:function(){return d},YL:function(){return u},Wm:function(){return h},iY:function(){return m},t9:function(){return f},Aj:function(){return p},zq:function(){return x},Tz:function(){return g},u:function(){return v},qS:function(){return b}});var i=n(97184),r=(0,i.F4)({"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0,transform:"translateY(-40px)"}}),o=(0,i.zo)("div",{position:"fixed",top:0,left:0,width:"0%",height:10,overflow:"hidden",zIndex:9999}),a=(0,i.zo)("div",{width:"100%",height:"100%",position:"absolute",background:"$gradient"}),s=(0,i.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center"}),c=(0,i.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",marginTop:100}),l=(0,i.zo)("div",{display:"flex",width:"70%",flexDirection:"column",margin:"50px 0","@iPad":{width:"90%"}}),d=(0,i.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$6"}),u=(0,i.zo)("div",{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20}),h=(0,i.zo)("div",{display:"flex",alignItems:"center"}),m=(0,i.zo)("a",{display:"flex",alignItems:"center",color:"$white",fontFamily:"$primary",fontSize:"$2",marginRight:30,textDecoration:"none",svg:{marginRight:10},"@Flip":{fontSize:"$1",marginRight:5,svg:{marginRight:5,width:20}}}),f=(0,i.zo)("div",{color:"$white",margin:"40px 0","h1, h2, h3, h4, h5, h6, h7, p, a, strong":{fontFamily:"$primary"},"h1, pre":{margin:"30px 0"},h2:{marginTop:30},pre:{borderRadius:12,width:"100%","@Flip":{maxWidth:"90vw"}},code:{},p:{fontSize:"$2",margin:"10px 0"},img:{borderRadius:10,maxWidth:"60vw"},a:{color:"#5CC2E5",position:"relative",textDecoration:"none","&:before":{content:"",width:0,height:"0.1em",position:"absolute",bottom:0,left:0,background:"#5CC2E5",transition:"0.3s all"},"&:hover:before":{width:"100%",left:0,background:"#5CC2E5"}}}),p=(0,i.zo)("div",{margin:"30px 0",display:"flex"}),x=(0,i.zo)("h1",{fontFamily:"$primary",color:"$white"}),g=(0,i.zo)("a",{color:"$main",display:"flex",justifyContent:"center",alignItems:"center",marginRight:20,transition:"0.1s linear","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"},".animate":{animation:"".concat(r," 0.5s linear")}}),v=(0,i.zo)("p",{color:"$white",fontFamily:"$primary",position:"absolute",opacity:0}),b={borderRadius:6,padding:20,fontFamily:"JetBrain Mono, monospace"}},49933:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(85893),r=n(67294),o=n(13391);var a=n(9454),s=n(97184),c=(0,s.zo)("div",{position:"fixed",top:0,left:0,width:50,height:50,border:"2px solid white",borderRadius:"100%",transform:"translate(-50%, -50%)",transition:"0.2s ease-out",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),l=(0,s.zo)("div",{position:"fixed",top:"50%",left:"50%",width:10,height:10,backgroundColor:"white",borderRadius:"100%",transform:"translate(-50%, -50%)",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),d=function(){var t=function(){var t=r.useState({x:0,y:0}),e=(0,o.Z)(t,2),n=e[0],i=e[1];return r.useEffect((function(){var t=function(t){var e=t.clientX,n=t.clientY;i({x:e,y:n})};return document.addEventListener("mousemove",t),function(){document.removeEventListener("mousemove",t)}}),[]),n}(),e=t.x,n=t.y,s=r.useContext(a.m),d=s.cursorType,u=s.cursorChangeHandler;return r.useEffect((function(){document.addEventListener("mousedown",(function(){return u("hovered")})),document.addEventListener("mouseup",(function(){return u("")})),Array.from(document.getElementsByTagName("a")).forEach((function(t){t.addEventListener("mouseover",(function(){return u("hovered")})),t.addEventListener("mouseout",(function(){return u("")}))}))})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{className:"ring "+d,style:{left:"".concat(e,"px"),top:"".concat(n,"px")}}),(0,i.jsx)(l,{className:"dot "+d,style:{left:"".concat(e,"px"),top:"".concat(n,"px")}})]})}},56165:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(85893),r=n(13391),o=n(67294),a=n(97184),s=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@iPadPro":{flexDirection:"column",justifyContent:"center"}}),c=(0,a.zo)("div",{display:"flex",alignItems:"center","@iPadPro":{margin:"10px 0"}}),l=(0,a.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@iPadPro":{fontSize:"$2"}}),d=(0,a.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),u=(0,a.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),h=n(52006),m=n(47811),f=n(46702),p=n(20706),x=n(16268),g=function(){var t=o.useState(null),e=(0,r.Z)(t,2),n=e[0],a=e[1];return o.useEffect((function(){var t=new Date;a(t.getFullYear())}),[]),(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)(h.Z,{})," with ",(0,i.jsx)(m.Z,{})," and"," ",(0,i.jsx)(u,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,i.jsxs)(c,{children:[(0,i.jsxs)(l,{children:["\xa9 ",n," Harsh Singh"]}),(0,i.jsx)(d,{href:"https://github.com/harshhhdev",target:"_blank",children:(0,i.jsx)(f.Z,{})}),(0,i.jsx)(d,{href:"https://twitter.com/harshhhdev",target:"_blank",children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(d,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,i.jsx)(x.Z,{})})]})]})}},37346:function(t,e,n){"use strict";var i=n(85893),r=(n(67294),n(9008));e.Z=function(t){var e=t.title,n=t.description,o="https://harshhhdev.github.io/";return(0,i.jsxs)(r.default,{children:[(0,i.jsxs)("title",{children:["Harsh Singh - ",e]}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"twitter:title",content:e}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:o}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"twitter:url",content:o}),(0,i.jsx)("meta",{property:"twitter:description",content:n}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"})]})}},97055:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var i=n(85893),r=n(13391),o=n(67294),a=n(97184),s=(0,a.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"$dark",alignItems:"center",height:100,width:"100vw"}),c=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%","@Flip":{width:"85%",justifyContent:"space-around !important"},"@iPadPro":{width:"100vw",justifyContent:"center"}}),l=(0,a.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@Flip":{fontSize:"$2",display:"flex !important"},"@iPhoneSE":{fontSize:"$1"},"@iPadPro":{display:"none"}}),d=(0,a.zo)("div",{display:"flex","@Flip":{display:"none"}}),u=(0,a.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),h=(0,a.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),m=(0,a.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),f=(0,a.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),p=(0,a.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),x=n(90408),g=function(t){var e=t.location,n=o.useState(!1),a=(0,r.Z)(n,2),g=a[0],v=a[1],b=function(){v((function(t){return!t}))},y=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#designs",title:"Designs"},{link:"/#contact",title:"Contact"},{link:"/blog",title:"Blog"}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{className:g?"":"disabled",onClick:b,children:(0,i.jsx)(f,{children:y.map((function(t,e){return(0,i.jsx)(p,{href:t.link,onClick:b,children:t.title},e)}))})}),(0,i.jsx)(s,{children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(l,{children:["~/harshsingh/",e]}),(0,i.jsx)(d,{children:y.map((function(t,e){return(0,i.jsx)(u,{href:t.link,children:t.title},e)}))}),(0,i.jsx)(h,{onClick:b,children:(0,i.jsx)(x.Z,{})})]})})]})}},96233:function(t,e,n){"use strict";var i=n(85893),r=n(67294);e.Z=function(){return r.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),t.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(t)}),[]),(0,i.jsx)(i.Fragment,{})}},31980:function(t,e,n){"use strict";var i=n(13391),r=n(67294);e.Z=function(){var t=!0,e=function(){return{width:window.innerWidth,height:window.innerHeight}},n=r.useState(e()),o=(0,i.Z)(n,2),a=o[0],s=o[1];return r.useEffect((function(){var t=function(){s(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[t]),a}},9454:function(t,e,n){"use strict";n.d(e,{m:function(){return o}});var i=n(85893),r=n(67294),o=(0,r.createContext)({cursorType:"",cursorChangeHandler:function(){}});e.Z=function(t){var e=t.children,n=(0,r.useState)(""),a=n[0],s=n[1];return(0,i.jsx)(o.Provider,{value:{cursorType:a,cursorChangeHandler:function(t){s(t)}},children:e})}},56430:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return F},default:function(){return Z}});var i=n(85893),r=n(67294),o=n(37346),a=n(49933),s=n(96233),c=n(97055),l=n(13391),d=n(31980),u=n(71317),h=n.n(u),m=n(56833),f=n(90791),p=n(91140),x=n(32655),g=n(20706),v=n(51591),b=n(84442),y=n(60682),j=n(30724),w=n.n(j),z=n(10445),k=n(26671),$=function(t){var e=t.value,n=t.language;return(0,i.jsx)(z.Z,{wrapLines:!0,customStyle:m.qS,style:k.FE,language:n,children:e})},C=function(t){var e=t.BlogContent,n=r.useState(" "),o=(0,l.Z)(n,2),a=o[0],s=o[1],c=r.useRef(null),u=r.useRef(null),j=(0,d.Z)(),z=j.height,k=j.width,C=r.useRef(null);return r.useEffect((function(){s("https://github.com/harshhhdev/harshhhdev.github.io/blob/master/".concat(window.location.pathname,".md")),C.current.addEventListener("animationend",(function(){C.current.classList.remove("animate")})),c.current.style.minWidth="".concat(k,"px"),window.onscroll=function(){var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),e=z,n=(pageYOffset||(document.documentElement.clientHeight?document.documentElement.scrollTop:document.body.scrollTop))/(t-e)*100;u.current.style.width="".concat(n,"%")};var t=document.createElement("script");t.setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("repo","harshhhdev/harshhhdev.github.io"),t.setAttribute("theme","dark-blue"),t.setAttribute("issue-term","url"),document.querySelector(".blog-box").appendChild(t)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Ex,{ref:u,children:(0,i.jsx)(m.$O,{ref:c})}),(0,i.jsx)(m.xx,{children:(0,i.jsx)(m.JG,{children:(0,i.jsxs)(m.IN,{className:"blog-box",children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",delay:200,animateOnce:!0,children:(0,i.jsx)(m.eT,{children:e.title})}),(0,i.jsxs)(m.YL,{children:[(0,i.jsxs)(m.Wm,{children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",delay:200,animateOnce:!0,children:(0,i.jsxs)(m.iY,{children:[(0,i.jsx)(f.Z,{}),e.readingTime," min"]})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",delay:200,animateOnce:!0,children:(0,i.jsxs)(m.iY,{children:[(0,i.jsx)(p.Z,{}),e.formattedDate]})})]}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",delay:200,animateOnce:!0,children:(0,i.jsxs)(m.iY,{href:a,target:"_blank",children:[(0,i.jsx)(x.Z,{}),"Edit On GitHub"]})})]}),(0,i.jsx)(m.t9,{children:(0,i.jsx)(w(),{source:e.contentHtml,escapeHtml:!1,renderers:{code:$}})}),(0,i.jsx)(m.zq,{children:"Share \u2764\ufe0f"}),(0,i.jsxs)(m.Aj,{children:[(0,i.jsx)(m.Tz,{href:'http://twitter.com/share?text="'.concat(e.title,'" - &url=https://harshhhdev.github.io/blog/').concat(e.id,"/"),target:"_blank",children:(0,i.jsx)(g.Z,{})}),(0,i.jsx)(m.Tz,{href:"https://facebook.com/sharer/sharer.php?u=https://harshhhdev.github.io/blog/".concat(e.id,"/"),target:"_blank",children:(0,i.jsx)(v.Z,{})}),(0,i.jsxs)(m.Tz,{onClick:function(){(0,y.v)(window.location.href.toString()),C.current.classList.add("animate")},children:[(0,i.jsx)(m.u,{ref:C,children:"Copied"}),(0,i.jsx)(b.Z,{})]})]})]})})})]})},E=n(56165),S=n(42366),F=(n(16061),!0),Z=function(t){var e=t.blogData;return(0,S.Z)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{location:"blog"}),(0,i.jsx)(o.Z,{title:e.title,description:e.description}),(0,i.jsx)(a.Z,{}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(C,{BlogContent:e}),(0,i.jsx)(E.Z,{})]})}},42366:function(t,e,n){"use strict";var i=(0,n(97184).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden"},body:{background:"$dark",overflowX:"hidden",fontFamily:"GTWalsheimPro"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},ul:{marginLeft:20},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"},"@font-face":{fontFamily:"GTWalsheimPro",src:"url(/GTWalsheimPro-Regular.ttf)",fontStyle:"normal",fontWeight:400,fontDisplay:"swap"},".ring.hovered":{width:80,height:80}});e.Z=i},97184:function(t,e,n){"use strict";n.d(e,{zo:function(){return r},CO:function(){return o},F4:function(){return a},vs:function(){return s}});var i=(0,n(34995).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#191919",white:"#F4F4F5",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"GTWalsheimPro, sans-serif",mono:"JetBrains Mono, monospace"}},media:{iPadPro:"(max-width: 1024px)",iPad:"(max-width: 768px)",Flip:"(max-width: 600px)",iPhonePlus:"(max-width: 414px)",iPhone:"(max-width: 375px)",iPhoneSE:"(max-width: 320px)"}}),r=(i.css,i.styled),o=i.global,a=(i.getCssString,i.keyframes),s=r("div",{position:"relative",overflow:"hidden"})},17921:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return n(56430)}])}},function(t){t.O(0,[774,180,317,724,125],(function(){return e=17921,t(t.s=e);var e}));var e=t.O();_N_E=e}]);