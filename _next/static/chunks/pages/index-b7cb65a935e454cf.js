(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(79419)}])},10203:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(85893),r=t(67294);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=t(85466),s=t(22921),l=(0,s.zo)("div",{position:"fixed",top:0,left:0,width:50,height:50,border:"2px solid white",borderRadius:"100%",transform:"translate(-50%, -50%)",transition:"0.2s ease-out",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),c=(0,s.zo)("div",{position:"fixed",top:"50%",left:"50%",width:10,height:10,backgroundColor:"white",borderRadius:"100%",transform:"translate(-50%, -50%)",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),d=function(){var e=function(){var e=a(r.useState({x:0,y:0}),2),n=e[0],t=e[1];return r.useEffect((function(){var e=function(e){var n=e.clientX,i=e.clientY;t({x:n,y:i})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]),n}(),n=e.x,t=e.y,s=r.useContext(o.m),d=s.cursorType,h=s.cursorChangeHandler;return r.useEffect((function(){document.addEventListener("mousedown",(function(){return h("hovered")})),document.addEventListener("mouseup",(function(){return h("")})),Array.from(document.getElementsByTagName("a")).forEach((function(e){e.addEventListener("mouseover",(function(){return h("hovered")})),e.addEventListener("mouseout",(function(){return h("")}))}))})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{className:"ring "+d,style:{left:"".concat(n,"px"),top:"".concat(t,"px")}}),(0,i.jsx)(c,{className:"dot "+d,style:{left:"".concat(n,"px"),top:"".concat(t,"px")}})]})}},89105:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var i=t(85893),r=t(67294),a=t(22921),o=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@iPadPro":{flexDirection:"column",justifyContent:"center"}}),s=(0,a.zo)("div",{display:"flex",alignItems:"center","@iPadPro":{margin:"10px 0"}}),l=(0,a.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@iPadPro":{fontSize:"$2"}}),c=(0,a.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),d=(0,a.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),h=t(52006),m=t(47811),p=t(46702),u=t(20706),f=t(16268);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var e=x(r.useState(null),2),n=e[0],t=e[1];return r.useEffect((function(){var e=new Date;t(e.getFullYear())}),[]),(0,i.jsxs)(o,{children:[(0,i.jsx)(s,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)(h.Z,{})," with ",(0,i.jsx)(m.Z,{})," and"," ",(0,i.jsx)(d,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,i.jsxs)(s,{children:[(0,i.jsxs)(l,{children:["\xa9 ",n," Harsh Singh"]}),(0,i.jsx)(c,{href:"https://github.com/harshhhdev",target:"_blank",children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(c,{href:"https://twitter.com/harshhhdev",target:"_blank",children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(c,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,i.jsx)(f.Z,{})})]})]})}},88066:function(e,n,t){"use strict";var i=t(85893),r=(t(67294),t(9008));n.Z=function(e){var n=e.title,t=e.description,a="https://harshhhdev.github.io/";return(0,i.jsxs)(r.default,{children:[(0,i.jsxs)("title",{children:["Harsh Singh - ",n]}),(0,i.jsx)("meta",{property:"og:title",content:n}),(0,i.jsx)("meta",{property:"twitter:title",content:n}),(0,i.jsx)("meta",{name:"description",content:t}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:a}),(0,i.jsx)("meta",{property:"og:description",content:t}),(0,i.jsx)("meta",{property:"twitter:url",content:a}),(0,i.jsx)("meta",{property:"twitter:description",content:t}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"})]})}},22548:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var i=t(85893),r=t(67294),a=t(22921),o=(0,a.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"$dark",alignItems:"center",height:100,width:"100vw"}),s=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%","@Flip":{width:"85%",justifyContent:"space-around !important"},"@iPadPro":{width:"100vw",justifyContent:"center"}}),l=(0,a.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@Flip":{fontSize:"$2",display:"flex !important"},"@iPhoneSE":{fontSize:"$1"},"@iPadPro":{display:"none"}}),c=(0,a.zo)("div",{display:"flex","@Flip":{display:"none"}}),d=(0,a.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),h=(0,a.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),m=(0,a.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),p=(0,a.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),u=(0,a.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),f=t(90408);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var n=e.location,t=x(r.useState(!1),2),a=t[0],g=t[1],y=function(){g((function(e){return!e}))},b=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#designs",title:"Designs"},{link:"/#contact",title:"Contact"},{link:"/blog",title:"Blog"}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{className:a?"":"disabled",onClick:y,children:(0,i.jsx)(p,{children:b.map((function(e,n){return(0,i.jsx)(u,{href:e.link,onClick:y,children:e.title},n)}))})}),(0,i.jsx)(o,{children:(0,i.jsxs)(s,{children:[(0,i.jsxs)(l,{children:["~/harshsingh/",n]}),(0,i.jsx)(c,{children:b.map((function(e,n){return(0,i.jsx)(d,{href:e.link,children:e.title},n)}))}),(0,i.jsx)(h,{onClick:y,children:(0,i.jsx)(f.Z,{})})]})})]})}},37787:function(e,n,t){"use strict";var i=t(85893),r=t(67294);n.Z=function(){return r.useEffect((function(){var e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),e.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(e)}),[]),(0,i.jsx)(i.Fragment,{})}},89809:function(e,n,t){"use strict";t.d(n,{fM:function(){return r},dg:function(){return a},OY:function(){return o},cg:function(){return s},LZ:function(){return l},vU:function(){return c},Wn:function(){return d},Ej:function(){return h},YD:function(){return m},QE:function(){return p},cq:function(){return u}});var i=t(22921),r=(0,i.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:300,"@Flip":{marginTop:200,alignItems:"center"}}),a=(0,i.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$5",margin:"0 0 100px 200px","@Flip":{marginLeft:15}}),o=((0,i.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw"}),(0,i.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",margin:"100px 0","@Flip":{marginLeft:50}})),s=(0,i.zo)("div",{backgroundRepeat:"no-repeat",marginLeft:150,"@iPadPro":{marginLeft:50},"@iPad":{display:"none"}}),l=(0,i.zo)("div",{display:"flex",flexDirection:"column"}),c=(0,i.zo)("h1",{color:"$white",fontSize:"$5"}),d=(0,i.zo)("p",{fontFamily:"$primary",color:"$main2",fontSize:"$3",margin:"40px 0",width:340,"@media only screen and (max-width: 340px)":{width:"80%"}}),h=(0,i.zo)("p",{fontFamily:"$mono",color:"$main2",width:340,"@media only screen and (max-width: 500px)":{fontSize:"$1"}}),m=(0,i.zo)("div",{display:"flex",alignItems:"center",marginTop:50}),p=(0,i.zo)("a",{width:"fit-content",padding:20,userSelect:"none",fontSize:"$3",marginTop:60,cursor:"pointer",zIndex:"100",background:"none",border:"2px solid white",color:"white",fontFamily:"$primary",outline:"none",transition:"0.1s linear",borderRadius:5,textDecoration:"none","&:hover, &:focus":{background:"#ffffff30"}}),u=(0,i.zo)("a",{display:"flex",textDecoration:"none",color:"$white",marginLeft:30,transition:"0.1s linear","&:hover":{transform:"scale(1.1, 1.1)"}})},79419:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ge}});var i=t(85893),r=t(67294),a=t(88066),o=t(10203),s=t(37787),l=t(22548),c=t(77776),d=t(71317),h=t.n(d),m=t(46702),p=t(20706),u=t(16268),f=t(22921),x=(0,f.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",width:"105vw",maxHeight:1280,"@media only screen and (min-width: 3000px)":{height:"120vh"},"@media only screen and (max-width: 1800px)":{height:"110vh"},"@media only screen and (max-width: 1280px)":{height:"90vh"},"@Flip":{marginLeft:30,height:"120vh"}}),g=(0,f.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center"}),y=(0,f.zo)("p",{color:"$main",fontSize:"$4",fontFamily:"$primary",maxWidth:"90vw",background:"$gradient",width:"fit-content",display:"inline-block",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",variants:{mono:{true:{fontFamily:"$mono"}}}}),b=(0,f.zo)("h1",{display:"flex",width:"fit-content",color:"$white",fontSize:60,margin:"30px 0","@Flip":{fontSize:40}}),j=(0,f.zo)("div",{display:"flex",position:"absolute",marginRight:400,marginBottom:100,zIndex:"-100","@media only screen and (max-width: 767px)":{display:"none"}}),v=(0,f.zo)("div",{position:"absolute",display:"flex",alignItems:"center",zIndex:"-100",margin:"100px 0 0 500px",height:"200vh","@media only screen and (max-width: 767px)":{display:"none"}}),w=(0,f.zo)("div",{display:"flex",marginTop:30}),k=(0,f.zo)("a",{display:"flex",color:"$main",marginRight:20,transition:"0.1s linear","&:hover":{color:"$white",transform:"scale(1.15, 1.15)"}}),z=(0,f.zo)("a",{outline:"none","&:focus":{button:{background:"#ffffff30"}}}),I=(0,f.zo)("button",{width:"fit-content",padding:20,marginTop:60,fontSize:"$3",cursor:"pointer",zIndex:"100",background:"none",border:"2px solid white",color:"white",fontFamily:"$primary",outline:"none",transition:"0.1s linear",borderRadius:5,"&:hover":{background:"#ffffff30"},"&:focus":{background:"#ffffff30"}}),S=t(25766),$=t.n(S),_=function(){return(0,i.jsxs)(x,{id:"home",children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,delay:200,children:(0,i.jsx)(y,{mono:!0,children:"Hi, I'm"})}),(0,i.jsx)(h(),{animateIn:"animate__bounceInRight",delay:200,animateOnce:!0,children:(0,i.jsx)(b,{children:"Harsh Singh"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,delay:200,children:(0,i.jsx)(y,{children:"I am a web designer and developer"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,delay:200,children:(0,i.jsxs)(w,{children:[(0,i.jsx)(k,{href:"https://github.com/harshhhdev/",target:"_blank",children:(0,i.jsx)(m.Z,{})}),(0,i.jsx)(k,{href:"https://twitter.com/harshhhdev/",target:"_blank",children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(k,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,i.jsx)(u.Z,{})})]})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,delay:200,children:(0,i.jsx)(z,{href:"#contact",children:(0,i.jsx)(I,{children:"Let's Talk!"})})})]}),(0,i.jsx)(c.Xu,{children:(0,i.jsx)(j,{children:(0,i.jsx)(c.VS,{x:[-50,30],children:(0,i.jsx)("img",{src:$(),alt:"Paint Bucket",width:500,height:500})})})}),(0,i.jsx)(c.Xu,{children:(0,i.jsx)(v,{children:(0,i.jsx)(c.VS,{y:[-30,30],children:(0,i.jsx)("svg",{width:"363",height:"522",viewBox:"0 0 563 722",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"M183.141 52.3341C191.933 21.3676 220.212 0 252.403 0H539C552.255 0 563 10.7452 563 24V698C563 711.255 552.255 722 539 722H24.7631C8.83442 722 -2.67503 706.768 1.67567 691.445L183.141 52.3341Z",fill:"#2B2C2E"})})})})})]})},C=(0,f.zo)("div",{display:"flex",margin:"100px 100px",justifyContent:"center",alignItems:"center","@iPadPro":{margin:"100px 0"}}),P=(0,f.zo)("div",{display:"flex",flexDirection:"column",margin:"0 100px",width:600,marginRight:500,maxWidth:"100vw","@iPadPro":{margin:"0 30px",justifyContent:"center",alignItems:"center"}}),F=(0,f.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$5",margin:"50px 0"}),T=(0,f.zo)("p",{fontFamily:"$primary",color:"$white",fontSize:"$3",marginBottom:30,"@iPadPro":{width:"100%",fontSize:"$2"}}),E=(0,f.zo)("div",{display:"grid",gap:"1.5rem",width:400,gridTemplateColumns:"repeat(auto-fill, minmax(140px, 0fr))","@iPadPro":{width:"100%",gap:"1rem",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 0fr))"}}),O=(0,f.zo)("div",{fontFamily:"$primary",display:"flex",alignItems:"center",fontSize:"$3",color:"$white",width:140,"@iPadPro":{fontSize:"$2"}}),D=(0,f.zo)("div",{display:"flex",position:"absolute",width:300,"@iPadPro":{display:"none"}}),A=t(45169),Z=t(71166),L=t.n(Z),R=t(88008),X=t.n(R),B=t(52247),N=t.n(B),W=function(){return(0,i.jsxs)(C,{id:"about",children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(h(),{animateIn:"animate__bounceInRight",animateOnce:!0,children:(0,i.jsx)(F,{children:"About Me"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(T,{children:"Hi! I'm Harsh, a passionate self-taught programmer and designer from New York"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(T,{children:"I first started coding at 11, and overtime learnt many useful technologies and frameworks to make and design cool web apps"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(T,{children:"Here are a few technologies I've been working with recently:"})}),(0,i.jsx)(E,{children:["TypeScript","Node","React","PostgreSQL","PlanetScale","Prisma","Vercel","GraphQL"].map((function(e,n){return(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsxs)(O,{children:[(0,i.jsx)(A.Z,{style:{marginRight:5}}),e]})},n)}))})]}),(0,i.jsxs)(D,{style:{width:500,marginLeft:700},children:[(0,i.jsx)("img",{src:L(),alt:"Computer",width:580,height:450}),(0,i.jsxs)(c.Xu,{children:[(0,i.jsx)(D,{style:{marginLeft:300},children:(0,i.jsx)(c.VS,{x:[-30,30],children:(0,i.jsx)("img",{src:N(),alt:"Video Player",width:200,height:200})})}),(0,i.jsx)(D,{style:{marginTop:200},children:(0,i.jsx)(c.VS,{y:[-100,100],children:(0,i.jsx)("img",{src:X(),alt:"ID Card",width:150,height:90})})})]})]})]})},H=t(89809),G=t(76180),V=t.n(G),M=t(90853),Y=t.n(M),q=t(53412),Q=t.n(q),U=t(74545),J=t.n(U),K=t(21106),ee=t.n(K),ne=function(){var e=[{title:"NoteShack",image:V(),description:"An open-source full-stack project boilerplate",skills:"GraphQL React PostgreSQL TypeScript",github:"NoteShack",link:"www.figma.com/file/8UOFAwJvAZCXda3s3zXdO0/NoteShack?node-id=16%3A71"},{title:"Debutur",image:Y(),description:"Easily create, and personalise your portfolio",skills:"TypeScript Next.js Prisma MongoDB",github:"debutur",link:"dbtr.vercel.app"},{title:"SnipBin",image:Q(),description:"Lightweight website to paste code snippets",skills:"TypeScript Next Prisma GraphQL",github:"snip-bin",link:"snipbin.herokuapp.com"},{title:"Oponion",image:J(),description:"Creating, voting, & sharing polls made simple",skills:"React Firebase TypeScript ECharts",github:"oponion",link:"oponion.vercel.app"},{title:"SketchMessage",image:ee(),description:"Create and communicate through drawings",skills:"Socket Node Express",github:"sketch-message",link:"sketchmessage.herokuapp.com"}];return(0,i.jsxs)(H.fM,{id:"projects",children:[(0,i.jsx)(h(),{animateIn:"animate__bounceInRight",animateOnce:!0,children:(0,i.jsx)(H.dg,{children:"My Work"})}),e.map((function(e,n){return(0,i.jsxs)(H.OY,{children:[(0,i.jsxs)(H.LZ,{children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.vU,{children:e.title})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.Wn,{children:e.description})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.Ej,{children:e.skills})}),(0,i.jsxs)(H.YD,{children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.QE,{href:"/studies/".concat(e.title.toLowerCase()),target:"_blank",children:"View Project"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.cq,{href:"https://github.com/harshhhdev/".concat(e.github),target:"_blank",children:(0,i.jsx)(m.Z,{})})})]})]}),(0,i.jsx)(H.cg,{children:(0,i.jsx)("img",{src:e.image,alt:"Project Graphic",width:500,height:700})})]},n)}))]})},te=(0,f.zo)("div",{display:"flex",margin:"100px 100px",justifyContent:"center",flexDirection:"column","@Flip":{margin:"100px 10px"},"@iPhonePlus":{alignItems:"center"}}),ie=(0,f.zo)("div",{width:"95vw",display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 0fr))",overflow:"hidden","@iPhonePlus":{display:"flex",flexDirection:"column",alignItems:"center",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 0fr))"},"@iPad":{gridTemplateColumns:"repeat(auto-fill, minmax(300px, 0fr))"}}),re=(0,f.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$5",margin:"150px 0",textAlign:"center"}),ae=(0,f.zo)("div",{display:"flex",userSelect:"none",flexDirection:"column",background:"#232222",width:350,height:300,padding:30,color:"$main2",justifyContent:"space-between",transition:"0.1s linear",borderRadius:5,"&:hover":{transform:"translateY(-5px)"},"@iPad":{width:300},"@iPhoneSE":{width:280}}),oe=(0,f.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center"}),se=(0,f.zo)("div",{display:"flex"}),le=(0,f.zo)("a",{marginLeft:20,color:"$white",transition:"0.1s linear","&:hover":{transform:"scale(1.1, 1.1)"}}),ce=(0,f.zo)("div",{display:"flex",flexDirection:"column"}),de=(0,f.zo)("h3",{fontFamily:"$primary",fontSize:"$4",margin:"10px 0",color:"$white"}),he=(0,f.zo)("p",{color:"$main2",fontFamily:"$primary",fontSize:"$2"}),me=(0,f.zo)("p",{fontFamily:"$mono"}),pe=t(84442),ue=function(){return(0,i.jsxs)(te,{children:[(0,i.jsx)(h(),{animateIn:"animate__bounceInRight",animateOnce:!0,children:(0,i.jsx)(re,{children:"Other Things I've Built..."})}),(0,i.jsx)(ie,{children:[{title:"Geethoob",description:"View, and visualise your GitHub profile and stats with beautiful graphs",tags:"React Chart.js TypeScript",link:"geethoob.vercel.app",github:"harshhhdev/geethoob"},{title:"Glassmorphicssm",description:"Generate glassy CSS code for all your glassmorphism needs",tags:"React TypeScript",link:"harshhhdev.github.io/glassmorphicssm",github:"harshhhdev/glassmorphicssm"},{title:"Issure",description:"Fetch random issues from your GitHub repositories to work on",tags:"React Octokit TypeScript",link:"issure.vercel.app",github:"harshhhdev/issure"},{title:"Calvera",description:"A minimal portfolio + blog template for Abell.js",tags:"Abell",link:"harshhhdev.github.io/calvera",github:"harshhhdev/calvera"},{title:"Kraftuur",description:"A colour system for designing beautiful and accesible interfaces",tags:"React TypeScript Node",link:"harshhhdev.github.io/kraftuur",github:"harshhhdev/kraftuur"},{title:"pastemyst.js",description:"Complete REST API wrapper for pastemyst v2",tags:"Axios TypeScript node",link:"www.npmjs.com/package/pastemyst",github:"harshhhdev/pastemyst"},{title:"App Idea Generator",description:"Generate silly, or cool app ideas for inspiration",tags:"Svelte",link:"harshhhdev.github.io/app-idea-generator",github:"harshhhdev/app-idea-generator"}].map((function(e,n){return(0,i.jsx)(h(),{animateIn:"animate__fadeIn",animateOnce:!0,children:(0,i.jsxs)(ae,{children:[(0,i.jsxs)(ce,{children:[(0,i.jsxs)(oe,{children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#F4F4F5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),(0,i.jsxs)(se,{children:[(0,i.jsx)(le,{href:"https://".concat(e.link),target:"_blank",children:(0,i.jsx)(pe.Z,{})}),(0,i.jsx)(le,{href:"https://github.com/".concat(e.github),target:"_blank",children:(0,i.jsx)(m.Z,{})})]})]}),(0,i.jsx)(de,{children:e.title}),(0,i.jsx)(he,{children:e.description})]}),(0,i.jsx)(me,{children:e.tags})]},n)})}))})]})},fe=(0,f.zo)("div",{display:"flex",flexDirection:"column","@iPhonePlus":{alignItems:"center"}}),xe=(0,f.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$5",margin:"150px 100px",variants:{dribbble:{true:{margin:"50px 100px","@iPhonePlus":{margin:"50px 0"}}}},"@iPhonePlus":{margin:"150px 0"}}),ge=((0,f.zo)("div",{display:"flex",flexDirection:"column",alignItems:"flex-end",margin:0,marginBottom:200}),t(7810)),ye=t.n(ge),be=t(34810),je=t.n(be),ve=t(10893),we=t.n(ve),ke=function(){var e=[{title:"Robinhood",image:we(),description:"Giving a new look & personality to the Robinhood app",skills:"Figma Blender Photoshop"},{title:"Swiggy",image:je(),description:"A modern, dark redesign of the Swiggy app",skills:"Figma Blender"},{title:"Nike",image:ye(),description:"The Nike mobile app redesigned with a new & fluid look",skills:"Figma Photoshop"}];return(0,i.jsxs)(fe,{id:"designs",children:[(0,i.jsx)(h(),{animateIn:"animate__bounceInRight",animateOnce:!0,children:(0,i.jsx)(xe,{children:"Designing"})}),(0,i.jsx)(fe,{children:e.map((function(e,n){return(0,i.jsxs)(H.OY,{children:[(0,i.jsxs)(H.LZ,{children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.vU,{children:e.title})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.Wn,{children:e.description})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.Ej,{children:e.skills})}),(0,i.jsx)(H.YD,{children:(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(H.QE,{href:"/studies/".concat(e.title.toLowerCase()),target:"_blank",children:"View Project"})})})]}),(0,i.jsx)(H.cg,{children:(0,i.jsx)("img",{src:e.image,alt:"Project Graphic",width:500,height:700})})]},n)}))})]})};function ze(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){ze(e,n,t[n])}))}return e}function Se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $e=function(){var e=function(e,n,t,i){return e?t.test(e)?(l(Ie({},s,ze({},n,""))),!0):(l(Ie({},s,ze({},n,"Your ".concat(i," is not valid")))),!1):(l(Ie({},s,ze({},n,"Your ".concat(i," is required")))),!1)},n=function(n,t){switch(n){case"_replyto":return e(t,n,c,"Email");case"name":return e(t,n,d,"Name");case"message":return e(t,n,h,"Message")}},t=Se(r.useState({}),2),i=t[0],a=t[1],o=Se(r.useState({}),2),s=o[0],l=o[1],c=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,d=/^[a-zA-Z\s]*[^\s]$/gim,h=/^[\w\d][^<>/\\&]*$/gim;return{formData:i,errors:s,handleInput:function(e){e.preventDefault();var t=e.target,r=t.value,o=t.name;n(o,r),a(Ie({},i,ze({},o,r)))},handleMessageInput:function(e){e.preventDefault();var t=e.target,r=t.value,o=t.name;n(o,r),a(Ie({},i,ze({},o,r)))},isFormValid:function(){var e=Object.values(s);return 3===e.length&&0===e.filter(Boolean).length}()}},_e=(0,f.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",marginTop:100,marginBottom:400,"@iPadPro":{alignItems:"center"}}),Ce=(0,f.zo)("h1",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$5",margin:"75px 0",marginLeft:150,"@iPadPro":{marginLeft:0}}),Pe=(0,f.zo)("p",{fontFamily:"$primary",fontSize:"$5",color:"$white"}),Fe=(0,f.zo)("p",{fontFamily:"$primary",fontSize:"$2",color:"$white",width:300,margin:"20px 0",marginBottom:50,textAlign:"center"}),Te=(0,f.zo)("form",{display:"flex",flexDirection:"column",alignItems:"center"}),Ee=(0,f.zo)("input",{background:"$primary ",padding:30,outline:"none",border:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",width:500,margin:"20px 0",borderRadius:5,transition:"0.1s linear",zIndex:10,maxWidth:"90vw","&:focus":{transform:"scale(0.99, 0.99)"}}),Oe=(0,f.zo)("textarea",{background:"$primary ",padding:30,outline:"none",border:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",width:500,margin:"20px 0",resize:"none",borderRadius:5,zIndex:10,transition:"0.1s linear",maxWidth:"90vw","&:focus":{transform:"scale(0.99, 0.99)"}}),De=(0,f.zo)("button",{width:"fit-content",padding:20,fontSize:"$3",marginTop:60,cursor:"pointer",background:"none",border:"2px solid white",color:"white",fontFamily:"$primary",outline:"none",transition:"0.1s linear",borderRadius:5,textDecoration:"none",zIndex:10,"&:hover, &:focus":{background:"#ffffff30"}}),Ae=(0,f.zo)("div",{position:"absolute",display:"flex",justifyContent:"space-between",alignItems:"center",width:"105vw",marginTop:500,zIndex:-1,"@iPadPro":{display:"none"}}),Ze=((0,f.zo)("div",{position:"absolute",display:"flex",zIndex:-100}),t(22626)),Le=t.n(Ze),Re=t(36055),Xe=t.n(Re),Be=function(){var e=$e(),n=e.formData,t=e.errors,r=e.handleInput,a=e.handleMessageInput,o=e.isFormValid;return(0,i.jsxs)(_e,{id:"contact",children:[(0,i.jsx)(Ce,{children:"Contact"}),(0,i.jsx)(Ae,{className:"hands",children:(0,i.jsxs)(c.Xu,{children:[(0,i.jsx)(c.VS,{y:[-50,0],children:(0,i.jsx)("img",{src:Le(),alt:"hand",width:433,height:727})}),(0,i.jsx)(c.VS,{x:[-10,10],children:(0,i.jsx)("img",{src:Xe(),alt:"hand",width:434,height:1014})})]})}),(0,i.jsxs)(Te,{noValidate:!0,action:"https://formspree.io/f/mdoyezjy",method:"POST",children:[(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(Pe,{children:"\ud83d\udc4b Hello, what's up?"})}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(Fe,{children:"Whether you have a question, want to say hi, or anything else that it might be, my inbox is always open!"})}),(0,i.jsx)(Ee,{className:t._replyto&&"invalid",placeholder:"your@email.com",type:"email",onChange:function(){return r},value:n.email,id:"email",name:"_replyto",required:!0,autoComplete:"off"}),(0,i.jsx)(Ee,{placeholder:"Your Name",type:"text",className:t.name&&"invalid",onChange:function(){return r},value:n.name,name:"name",required:!0,autoComplete:"off"}),(0,i.jsx)(Oe,{placeholder:"What would you like to tell me?",className:t.message&&"invalid",onChange:function(){return a},value:n.message,name:"message",required:!0,autoComplete:"off"}),(0,i.jsx)(h(),{animateIn:"animate__flipInX",animateOnce:!0,children:(0,i.jsx)(De,{as:"button",type:"submit",value:"send",disabled:!o,children:"Send Email"})})]})]})},Ne=t(89105),We=function(){return r.useEffect((function(){window.$crisp=[],window.CRISP_WEBSITE_ID="c4a9cc71-06b1-4848-a426-96d011caa9bf";var e=document.createElement("script");e.src="https://client.crisp.chat/l.js",e.async=!0,document.getElementsByTagName("head")[0].appendChild(e)})),(0,i.jsx)(i.Fragment,{})},He=t(14637),Ge=(t(10015),function(){return(0,He.Z)(),(0,i.jsxs)(f.vs,{children:[(0,i.jsx)(l.Z,{location:"portfolio"}),(0,i.jsx)(a.Z,{title:"Home",description:"\ud83d\udc4b I'm Harsh, a 15yo web developer and designer."}),(0,i.jsx)(We,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(_,{}),(0,i.jsx)(W,{}),(0,i.jsx)(ne,{}),(0,i.jsx)(ue,{}),(0,i.jsx)(ke,{}),(0,i.jsx)(Be,{}),(0,i.jsx)(Ne.Z,{})]})})},14637:function(e,n,t){"use strict";var i=(0,t(22921).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden"},body:{background:"$dark",overflowX:"hidden",fontFamily:"GTWalsheimPro"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},ul:{marginLeft:20},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"},"@font-face":{fontFamily:"GTWalsheimPro",src:"url(/GTWalsheimPro-Regular.ttf)",fontStyle:"normal",fontWeight:400,fontDisplay:"swap"},".ring.hovered":{width:80,height:80}});n.Z=i},22921:function(e,n,t){"use strict";t.d(n,{zo:function(){return r},CO:function(){return a},F4:function(){return o},vs:function(){return s}});var i=(0,t(86744).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#191919",white:"#F4F4F5",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"GTWalsheimPro, sans-serif",mono:"JetBrains Mono, monospace"}},media:{iPadPro:"(max-width: 1024px)",iPad:"(max-width: 768px)",Flip:"(max-width: 600px)",iPhonePlus:"(max-width: 414px)",iPhone:"(max-width: 375px)",iPhoneSE:"(max-width: 320px)"}}),r=(i.css,i.styled),a=i.global,o=(i.getCssString,i.keyframes),s=r("div",{position:"relative",overflow:"hidden"})},90853:function(e){e.exports="/_next/static/images/Debutur-397ad37d98d844a96dd60fba1b41d798.png"},7810:function(e){e.exports="/_next/static/images/Nike-5209998cbc01b5cf3dd70d98c400e83e.png"},76180:function(e){e.exports="/_next/static/images/NoteShack-1660cb149a6ef53671bc7d30155ab6fb.png"},74545:function(e){e.exports="/_next/static/images/Oponion-7dd0630a9f09e999c5b802c9f9d4b1dd.png"},10893:function(e){e.exports="/_next/static/images/Robinhood-dd1738144e7704b88e7ae6fde8276532.png"},21106:function(e){e.exports="/_next/static/images/SketchMessage-3586bd4370f029c6cb595d634452f1f6.png"},53412:function(e){e.exports="/_next/static/images/SnipBin-5a33e41ff1b6edb098de9a99149d245d.png"},34810:function(e){e.exports="/_next/static/images/Swiggy-b1d46b9db2c09816b52f1c58ab46230d.png"},71166:function(e){e.exports="/_next/static/images/computer-18ebc9d3b9828871668bc93bddb562d8.png"},22626:function(e){e.exports="/_next/static/images/hand-2-6917b4ba2607fe7f87c818c7916aaff9.png"},36055:function(e){e.exports="/_next/static/images/hand-3-b8d2d60047e323256d5bbfb70801ec10.png"},88008:function(e){e.exports="/_next/static/images/idCard-1ee05806839d861de86a3c1115c57163.png"},25766:function(e){e.exports="/_next/static/images/paint-9fddb0c49181d7e4efcb397ee02d8e8a.png"},52247:function(e){e.exports="/_next/static/images/videoPlayer-d245622ea196a65284ecdf1744d1d6b1.png"}},function(e){e.O(0,[202,317,762,774,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);