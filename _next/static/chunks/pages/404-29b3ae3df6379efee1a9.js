(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{49933:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(85893),o=n(67294),r=n(13391);var a=n(9454),s=n(97184),c=(0,s.zo)("div",{position:"fixed",top:0,left:0,width:50,height:50,border:"2px solid white",borderRadius:"100%",transform:"translate(-50%, -50%)",transition:"0.2s ease-out",zIndex:999,pointerEvents:"none"}),l=(0,s.zo)("div",{position:"fixed",top:"50%",left:"50%",width:10,height:10,backgroundColor:"white",borderRadius:"100%",transform:"translate(-50%, -50%)",zIndex:999,pointerEvents:"none"}),d=function(){var e=function(){var e=o.useState({x:0,y:0}),t=(0,r.Z)(e,2),n=t[0],i=t[1];return o.useEffect((function(){var e=function(e){var t=e.clientX,n=e.clientY;i({x:t,y:n})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]),n}(),t=e.x,n=e.y,s=o.useContext(a.m),d=s.cursorType,u=s.cursorChangeHandler;return o.useEffect((function(){document.addEventListener("mousedown",(function(){return u("hovered")})),document.addEventListener("mouseup",(function(){return u("")})),Array.from(document.getElementsByTagName("a")).forEach((function(e){e.addEventListener("mouseover",(function(){return u("hovered")})),e.addEventListener("mouseout",(function(){return u("")}))}))})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{className:"ring "+d,style:{left:"".concat(t,"px"),top:"".concat(n,"px")}}),(0,i.jsx)(l,{className:"dot "+d,style:{left:"".concat(t,"px"),top:"".concat(n,"px")}})]})}},56165:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(85893),o=n(13391),r=n(67294),a=n(97184),s=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@media only screen and (max-width: 1024px)":{flexDirection:"column",justifyContent:"center"}}),c=(0,a.zo)("div",{display:"flex",alignItems:"center","@media only screen and (max-width: 1024px)":{margin:"10px 0"}}),l=(0,a.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@media only screen and (max-width: 1024px)":{fontSize:"$2"}}),d=(0,a.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),u=(0,a.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),h=n(52006),m=n(47811),f=n(46702),x=n(20706),p=n(16268),g=function(){var e=r.useState(null),t=(0,o.Z)(e,2),n=t[0],a=t[1];return r.useEffect((function(){var e=new Date;a(e.getFullYear())}),[]),(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)(h.Z,{})," with ",(0,i.jsx)(m.Z,{})," and"," ",(0,i.jsx)(u,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,i.jsxs)(c,{children:[(0,i.jsxs)(l,{children:["\xa9 ",n," Harsh Singh"]}),(0,i.jsx)(d,{href:"https://github.com/harshhhdev",target:"_blank",children:(0,i.jsx)(f.Z,{})}),(0,i.jsx)(d,{href:"https://twitter.com/harshhhdev",target:"_blank",children:(0,i.jsx)(x.Z,{})}),(0,i.jsx)(d,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,i.jsx)(p.Z,{})})]})]})}},37346:function(e,t,n){"use strict";var i=n(85893),o=(n(67294),n(9008));t.Z=function(e){var t=e.title,n=e.description,r="https://harshhhdev.github.io/";return(0,i.jsxs)(o.default,{children:[(0,i.jsxs)("title",{children:["Harsh Singh - ",t]}),(0,i.jsx)("meta",{property:"og:title",content:t}),(0,i.jsx)("meta",{property:"twitter:title",content:t}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:r}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"twitter:url",content:r}),(0,i.jsx)("meta",{property:"twitter:description",content:n}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"})]})}},97055:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(85893),o=n(13391),r=n(67294),a=n(97184),s=(0,a.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"$dark",alignItems:"center",height:100,width:"100vw"}),c=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%","@media only screen and (max-width: 600px)":{width:"85%",justifyContent:"space-around !important"},"@media only screen and (max-width: 1024px)":{width:"100vw",justifyContent:"center"}}),l=(0,a.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@media only screen and (max-width: 600px)":{fontSize:"$2",display:"flex !important"},"@media only screen and (max-width: 320px)":{fontSize:"$1"},"@media only screen and (max-width: 1024px)":{display:"none"}}),d=(0,a.zo)("div",{display:"flex","@media only screen and (max-width: 600px)":{display:"none"}}),u=(0,a.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),h=(0,a.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),m=(0,a.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),f=(0,a.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),x=(0,a.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),p=n(90408),g=function(e){var t=e.location,n=r.useState(!1),a=(0,o.Z)(n,2),g=a[0],y=a[1],v=function(){y((function(e){return!e}))},j=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#designs",title:"Designs"},{link:"/#contact",title:"Contact"},{link:"/blog",title:"Blog"}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{className:g?"":"disabled",onClick:v,children:(0,i.jsx)(f,{children:j.map((function(e,t){return(0,i.jsx)(x,{href:e.link,onClick:v,children:e.title},t)}))})}),(0,i.jsx)(s,{children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(l,{children:["~/harshsingh/",t]}),(0,i.jsx)(d,{children:j.map((function(e,t){return(0,i.jsx)(u,{href:e.link,children:e.title},t)}))}),(0,i.jsx)(h,{onClick:v,children:(0,i.jsx)(p.Z,{})})]})})]})}},96233:function(e,t,n){"use strict";var i=n(85893),o=n(67294);t.Z=function(){return o.useEffect((function(){var e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),e.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(e)}),[]),(0,i.jsx)(i.Fragment,{})}},9454:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});var i=n(85893),o=n(67294),r=(0,o.createContext)({cursorType:"",cursorChangeHandler:function(){}});t.Z=function(e){var t=e.children,n=(0,o.useState)(""),a=n[0],s=n[1];return(0,i.jsx)(r.Provider,{value:{cursorType:a,cursorChangeHandler:function(e){s(e)}},children:t})}},50745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(85893),o=(n(67294),n(37346)),r=n(49933),a=n(96233),s=n(97055),c=n(97184),l=(0,c.zo)("div",{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"center"}),d=(0,c.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$6",margin:"50px 0"}),u=(0,c.zo)("p",{color:"$white",fontFamily:"$primary",fontSize:"$3"}),h=(0,c.zo)("a",{color:"#5CC2E5",position:"relative",textDecoration:"none","&:before":{content:"",width:0,height:"0.1em",position:"absolute",bottom:0,left:0,background:"#5CC2E5",transition:"0.3s all"},"&:hover:before":{width:"100%",left:0,background:"#5CC2E5"}}),m=function(){return(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{children:"I can't find the page you're looking for"}),(0,i.jsxs)(u,{children:["Mind checking out my ",(0,i.jsx)(h,{href:"/blog",children:"Blog?"})]})]})},f=n(56165),x=n(42366),p=(n(16061),function(){return(0,x.Z)(),(0,i.jsxs)(c.vs,{children:[(0,i.jsx)(s.Z,{location:"404"}),(0,i.jsx)(o.Z,{title:"404",description:"Whoops! You hit a route that doesn't exist \ud83d\ude36"}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{}),(0,i.jsx)(m,{}),(0,i.jsx)(f.Z,{})]})})},42366:function(e,t,n){"use strict";var i=(0,n(97184).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden"},body:{background:"$dark",overflowX:"hidden",fontFamily:"GTWalsheimPro"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},ul:{marginLeft:20},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"},"@font-face":{fontFamily:"GTWalsheimPro",src:"url(/GTWalsheimPro-Regular.ttf)",fontStyle:"normal",fontWeight:400,fontDisplay:"swap"},".ring.hovered":{width:80,height:80}});t.Z=i},97184:function(e,t,n){"use strict";n.d(t,{zo:function(){return o},CO:function(){return r},F4:function(){return a},vs:function(){return s}});var i=(0,n(34995).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#191919",white:"#F4F4F5",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"GTWalsheimPro, sans-serif",mono:"JetBrains Mono, monospace"}}}),o=(i.css,i.styled),r=i.global,a=(i.getCssString,i.keyframes),s=o("div",{position:"relative",overflow:"hidden"})},9014:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(50745)}])}},function(e){e.O(0,[774,180],(function(){return t=9014,e(e.s=t);var t}));var t=e.O();_N_E=t}]);