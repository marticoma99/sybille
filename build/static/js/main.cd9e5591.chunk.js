(this.webpackJsonpsybille=this.webpackJsonpsybille||[]).push([[0],{11:function(e,a,t){e.exports={audioContainer:"AudioPlayer_audioContainer__28Vfp",playButton:"AudioPlayer_playButton__3oDts",songAndArtist:"AudioPlayer_songAndArtist__1SRqi"}},15:function(e,a,t){e.exports={navBarContainer:"NavigationBar_navBarContainer__2F4gj",title:"NavigationBar_title__3jftM"}},17:function(e,a,t){e.exports={imageContainer:"LandingPage_imageContainer__3NC-3",coverImage:"LandingPage_coverImage__1kHkR"}},18:function(e,a,t){e.exports={footerGlobalContainer:"FooterLandingPage_footerGlobalContainer__1BZf1",footerContainer:"FooterLandingPage_footerContainer__3Vqoq"}},27:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(20),o=t.n(c),s=(t(27),t(15)),i=t.n(s),l=t(12),j=t(9),b=t.n(j),d=t(7),f=t(0);var h=function(e){var a=b.a.navBarContainer;return e.open||(a+=" "+b.a.navContainerClosed),Object(f.jsxs)("li",{className:a,children:[Object(f.jsx)(d.b,{to:"/",children:Object(f.jsx)("p",{children:"Home"})}),Object(f.jsx)(d.b,{to:"/shows",children:Object(f.jsx)("p",{children:"Shows"})}),Object(f.jsx)(d.b,{to:"/contact",children:Object(f.jsx)("p",{children:"Contact"})}),Object(f.jsx)(d.b,{to:"/about",children:Object(f.jsx)("p",{children:"About"})})]})};var u=function(e){var a=e.open,t=e.handleClick;return a?Object(f.jsx)("button",{onClick:t,className:b.a.button,children:Object(f.jsx)("i",{class:"fa fa-times fa-2x"})}):Object(f.jsx)("button",{onClick:t,className:b.a.button,children:Object(f.jsx)("i",{class:"fa fa-bars fa-2x"})})};var x=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(h,{open:t}),Object(f.jsx)(u,{open:t,handleClick:function(){r(!t)}})]})};var O=function(){return Object(f.jsxs)(d.b,{to:"/",className:i.a.navBarContainer,children:[Object(f.jsx)("h1",{className:i.a.title,children:"Sybille's On Jupiter"}),Object(f.jsx)(x,{})]})},p=t.p+"static/media/coverImage.473f7b49.jpg",m=t(17),_=t.n(m),v=t(18),g=t.n(v),C=t(11),N=t.n(C);var k=function(e){var a=e.audio,t=Object(n.useState)(!1),r=Object(l.a)(t,2),c=r[0],o=r[1];function s(){var e=document.getElementById("audio");o(!c),e.play()}function i(){var e=document.getElementById("audio");o(!c),e.pause()}var j=c?Object(f.jsx)("button",{className:N.a.playButton,onClick:i,children:Object(f.jsx)("i",{class:"fas fa-pause"})}):Object(f.jsx)("button",{className:N.a.playButton,onClick:s,children:Object(f.jsx)("i",{class:"fas fa-play"})});return Object(f.jsxs)("div",{className:N.a.audioContainer,children:[j,Object(f.jsx)("p",{className:N.a.songAndArtist,children:"Sybille's on Jupiter - Billet doux"}),Object(f.jsxs)("audio",{id:"audio",children:[Object(f.jsx)("source",{src:a,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})},y=t.p+"static/media/Revoluci\xf3.c8040139.mp3";var B=function(){return Object(f.jsxs)("div",{className:g.a.footerGlobalContainer,children:[Object(f.jsx)(k,{audio:y}),Object(f.jsxs)("div",{className:g.a.footerContainer,children:[Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-spotify fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-instagram fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-twitter fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-youtube fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-facebook fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-tiktok fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-amazon fa-2x",target:"_blank",rel:"noreferrer",children:" "}),Object(f.jsx)("a",{href:"http://localhost:3000",className:"fab fa-itunes fa-2x",target:"_blank",rel:"noreferrer",children:" "})]})]})};var A=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:_.a.imageContainer,children:Object(f.jsx)("img",{src:p,alt:"Cover",className:_.a.coverImage})}),Object(f.jsx)(B,{})]})};var P=function(){return Object(f.jsx)("h1",{children:"Contact Page"})},S=t(2);var w=function(){return Object(f.jsxs)(d.a,{children:[Object(f.jsx)("header",{children:Object(f.jsx)(O,{})}),Object(f.jsx)("main",{children:Object(f.jsxs)(S.c,{children:[Object(f.jsx)(S.a,{exact:!0,path:"/",children:Object(f.jsx)(A,{})}),Object(f.jsx)(S.a,{path:"/shows",children:Object(f.jsx)(A,{})}),Object(f.jsx)(S.a,{path:"/contact",children:Object(f.jsx)(P,{})}),Object(f.jsx)(S.a,{path:"/about",children:Object(f.jsx)(A,{})})]})})]})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={navBarContainer:"NavBar_navBarContainer__Q3yjO",button:"NavBar_button__1ASGo",navContainerClosed:"NavBar_navContainerClosed__1ao83"}}},[[34,1,2]]]);
//# sourceMappingURL=main.cd9e5591.chunk.js.map