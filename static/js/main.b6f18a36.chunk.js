(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{145:function(e,t,A){},169:function(e,t,A){},178:function(e,t,A){"use strict";A.r(t),t.default=A.p+"static/media/resume.ff0d758e.pdf"},179:function(e,t,A){"use strict";A.r(t);var a=A(0),r=A.n(a),i=A(28),n=A.n(i),o=(A(169),A(20)),s=(A(170),A(201)),c=A(196),l=A(198),d=A(2);function h(e){var t=e.navLinks,A=e.setCurrentLink,r=e.currentLink,i=e.contactSelected,n=e.setContactSelected,h=["jiggle","flash","shake","pulse","tada","bounce"],m=Object(a.useState)("About Me"),p=Object(o.a)(m,2),u=p[0],b=p[1];function j(e,t){var A=t.name;b(A),n(!1)}var f=Object(a.useState)({animation:h[0],duration:700}),g=Object(o.a)(f,2),O=g[0],x=g[1];return Object(a.useEffect)((function(){var e=Math.floor(7*Math.random());x({animation:h[e],duration:700,visible:!0})}),[O.visible]),Object(a.useEffect)((function(){document.title="".concat(r)}),[r]),Object(d.jsx)(s.a,{inverted:!0,style:{backgroundColor:"#001427",color:"#f7f7ff",textAlign:"center"},children:Object(d.jsxs)(c.a,{inverted:!0,pointing:!0,secondary:!0,children:[Object(d.jsx)(c.a.Item,{name:"myName",children:Object(d.jsx)(l.a,{animation:O.animation,duration:O.duration,visible:O.visible,children:Object(d.jsx)("span",{onClick:function(){x({visible:!1})},children:"Stephon Smith"})})}),t.map((function(e){return Object(d.jsx)(c.a.Item,{name:e,active:u===e,onClick:j,className:"".concat("Contact"===e?r===e&&n(!0)&&"navActive":r===e&&!i&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){A(e)},children:e})},e)}))]})})}var m=A(114),p=A(138),u=(A(145),A(194)),b=A(192),j=u.a.Group,f=u.a.Input,g=u.a.TextArea,O=u.a.Button,x=u.a.Field;function k(){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t=Object(a.useState)({firstName:"",lastName:"",email:"",message:""}),A=Object(o.a)(t,2),r=A[0],i=A[1],n=r.firstName,s=r.lastName,c=r.email,l=r.message,h=Object(a.useState)(""),k=Object(o.a)(h,2),v=k[0],y=k[1],C=function(t){if("email"===t.target.name){var A=e.test(String(t.target.email).toLowerCase());y(A?"":"Your email is invalid.")}"firstName"!==t.target.name||t.target.value.length?"lastName"!==t.target.name||t.target.value.length?"message"!==t.target.name||t.target.value.length?"email"!==t.target.name||t.target.value.length?y(""):y("An email is required."):y("A message is required."):y("Last name is required."):y("First name is required."),i(Object(p.a)(Object(p.a)({},r),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h1",{id:"contact-header",children:"Contact Me"}),Object(d.jsxs)(u.a,{children:[Object(d.jsxs)(j,{widths:"equal",children:[Object(d.jsx)(x,{id:"first-name",control:f,label:"First Name",placeholder:"First name",name:"firstName",defaultValue:n,onBlur:C}),Object(d.jsx)(x,{id:"last-name",control:f,label:"Last Name",name:"lastName",placeholder:"Last name",defaultValue:s,onBlur:C})]}),Object(d.jsx)(x,{id:"message",control:g,label:"Message",name:"message",placeholder:"Message",defaultValue:l,onBlur:C}),Object(d.jsx)(x,{id:"error-email",control:f,label:"Email",name:"email",placeholder:"joe@schmoe.com",defaultValue:c,onBlur:C}),v&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:v})}),Object(d.jsx)(x,{id:"form-button-control-public",control:O,content:"Submit",label:"Submit"})]})]})}var v=A(197),y=A(193),C=A(195),w=A(199),I=A(39),S=A.p+"static/media/drinkology.47d27ffb.png",Q=A.p+"static/media/pwaBudget.455b042a.png",q=A.p+"static/media/ollieWilliams.66e3205a.png",V=A.p+"static/media/teamProfile.a2be9953.jpg",P=A.p+"static/media/eCommerceRefactor.4354502b.png",J=A.p+"static/media/scriptifyQuiz.cb31de44.png",W=A.p+"static/media/readmeGenerator.ea4e40bc.png",z=A.p+"static/media/regexGist.ce3b739d.png";function B(){var e=I.drinkology,t=I.pwaBudget,A=I.soShul,r=I.ollieWilliamsWeather,i=I.teamProfileGenerator,n=I.reduxECommerceStore,s=I.scriptifyQuiz,c=I.readmeGenerator,l=I.regexGist,h={color:"#fc5130",textShadow:"2px 2px #001427",fontSize:"3em"},m=Object(a.useState)(!1),p=Object(o.a)(m,2),u=p[0],j=p[1],f=Object(a.useState)(""),g=Object(o.a)(f,2),O=g[0],x=g[1],k=Object(a.useState)(0),B=Object(o.a)(k,2),E=B[0],N=B[1],H=function(){return j(!1)},R=function(a){switch(["drinkology","pwaBudget","soShul","ollieWilliamsWeather","teamProfileGenerator","reduxECommerceStore","scriptifyQuiz","readmeGenerator","regexGist"].find((function(e){return e===a.target.name}))){case"drinkology":x(e),j(!0);break;case"pwaBudget":x(t),j(!0);break;case"soShul":x(A),j(!0);break;case"ollieWilliamsWeather":x(r),j(!0);break;case"teamProfileGenerator":x(i),j(!0);break;case"reduxECommerceStore":x(n),j(!0);break;case"scriptifyQuiz":x(s),j(!0);break;case"readmeGenerator":x(c),j(!0);break;case"regexGist":x(l),j(!0);break;default:console.log("Cannot find project!")}};return Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(v.a,{activeIndex:E,onSelect:function(e,t){N(e)},children:[Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:S,alt:"First slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:e.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"drinkology",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:Q,alt:"Third slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:t.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"pwaBudget",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:"data:image/png;base64,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",alt:"Third slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:A.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"soShul",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:q,alt:"Fourth slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:r.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"ollieWilliamsWeather",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:V,alt:"Fifth slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:i.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"teamProfileGenerator",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:P,alt:"Sixth slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:n.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"reduxECommerceStore",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:J,alt:"Seventh slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:s.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"scriptifyQuiz",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:W,alt:"Eighth slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:c.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"readmeGenerator",children:"Show More Info"})]})]}),Object(d.jsxs)(v.a.Item,{children:[Object(d.jsx)("img",{className:"d-block",src:z,alt:"Ninth slide"}),Object(d.jsxs)(v.a.Caption,{children:[Object(d.jsx)("h3",{style:h,children:l.header}),Object(d.jsx)(y.a,{variant:"primary",onClick:R,name:"regexGist",children:"Show More Info"})]})]})]}),Object(d.jsx)(d.Fragment,{children:!!O&&Object(d.jsxs)(C.a,{show:u,onHide:H,backdrop:"static",keyboard:!1,centered:!0,children:[Object(d.jsx)(C.a.Header,{closeButton:!0,children:Object(d.jsx)(C.a.Title,{children:O.header})}),Object(d.jsxs)(C.a.Body,{children:[Object(d.jsx)("h3",{children:"Description"}),O.description,Object(d.jsx)("h3",{children:"Competencies"}),Object(d.jsx)(w.a,{as:"ul",children:O.languages.map((function(e){return Object(d.jsx)(w.a.Item,{as:"li",children:e})}))}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:O.repository,children:"Repository"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:O.deployed,children:"Deployed"})})]}),Object(d.jsx)(C.a.Footer,{children:Object(d.jsx)(y.a,{variant:"secondary",onClick:H,children:"Close"})})]})})]})}var E=A(203),N=A(154),H=A(200),R=A.p+"static/media/homepage.663e4810.jpg",U=A.p+"static/media/profile.5dda5d34.jpg";function F(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b.a,{children:Object(d.jsxs)(E.a,{children:[Object(d.jsx)(E.a.Column,{width:7,children:Object(d.jsx)(N.a,{src:U,rounded:!0})}),Object(d.jsx)(E.a.Column,{width:9,children:Object(d.jsxs)(H.a,{style:{color:"#f7f7ff !important",fontSize:"1.5em !important"},children:[Object(d.jsx)("p",{children:"Hey!"}),Object(d.jsx)("p",{children:"My name is Stephon Smith and I'm a student at the University of Central Florida in their Coding Bootcamp program. I can remember coding websites made out of pure HTML when I was as young as 11 years old. I was (and still am) obsessed with technology and building websites on a popular platform like Geocities was a favorite past time of mine."}),Object(d.jsxs)("p",{children:["Like a tale as old as time; I grew older and less involved with the tech community as other interests took their hold. Interests that took me to London, England for an entire school year to study abroad and learn how to properly become a professional wrestler. Don't rub your eyes or think you saw that incorrectly. I ",Object(d.jsx)("em",{children:Object(d.jsx)("span",{style:{color:"#fc5130",fontWeight:"700"},children:"was"})})," a professional wrestler. For 10+ years I've traveled traveled the continental United States and abroad in spandex, patent leather boots, and stripes in my bid to work where I do now -- as a professional referee for World Wrestling Entertainment."]}),Object(d.jsx)("p",{children:"How does that fit into my developer story? Preparation. My journey has prepared me by teaching me how to be flexible, have an eye for detail, and how to push myself to develop the best experience for not only you but for the paying customer. I feel that a combination of my skills learned throughout my journey in wrestling and those learned throughout my bootcamp experience will make you and me the PERFECT tag team."}),Object(d.jsx)("p",{children:"So what do you say partner? Tag me in?"})]})})]})}),Object(d.jsx)(b.a,{style:{marginTop:"10px"},children:Object(d.jsx)(N.a,{src:R,rounded:!0})})]})}var D=A(152),M=A.p+"static/media/resume.9682db2b.png";function T(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),r=t[0],i=t[1],n=Object(a.useState)(""),s=Object(o.a)(n,2),c=s[0],l=s[1],h=function(){return i(!1)};return Object(d.jsxs)("section",{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h1",{style:{textAlign:"center",color:"#f7f7ff",fontSize:"4em"},children:"Click to Magnify"}),Object(d.jsx)(E.a,{columns:1,children:Object(d.jsx)(E.a.Column,{children:Object(d.jsx)(N.a,{name:"resume",src:M,onClick:function(e){return"resume"===e.target.name&&l(M),i(!0)},centered:!0})})})]}),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(C.a,{show:r,onHide:h,centered:!0,children:[Object(d.jsx)(C.a.Header,{closeButton:!0,children:Object(d.jsx)(C.a.Title,{children:"My Resume"})}),Object(d.jsx)(C.a.Body,{children:Object(d.jsx)(D.a,{src:c,zoomFactor:.4,mgShape:"square",mgHeight:500,mgWidth:600})}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(y.a,{variant:"secondary",onClick:h,children:"Close"}),Object(d.jsx)(y.a,{variant:"primary",onClick:h,children:Object(d.jsx)("a",{href:A(178),download:"Stephon Smith Resume",style:{color:"#f7f7ff"},children:"Save Resume"})})]})]})})]})}function X(){return Object(d.jsx)("footer",{children:Object(d.jsx)("div",{id:"footer-container",children:Object(d.jsx)(b.a,{id:"footer-container",children:Object(d.jsxs)(E.a,{columns:3,children:[Object(d.jsx)(E.a.Column,{children:Object(d.jsx)("a",{href:"https://www.github.com/SmithBWare89",children:Object(d.jsx)("i",{className:"fab fa-github fa-3x",id:"github"})})}),Object(d.jsx)(E.a.Column,{children:Object(d.jsx)("a",{href:"https://stackoverflow.com/users/13443220/smithbware89",children:Object(d.jsx)("i",{className:"fab fa-stack-overflow fa-3x",id:"stack-overflow"})})}),Object(d.jsx)(E.a.Column,{children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/stephonsmith89/",children:Object(d.jsx)("i",{className:"fab fa-linkedin fa-3x",id:"linked-in"})})})]})})})})}var L=function(){var e=Object(a.useState)(["About Me","Resume","Portfolio","Contact"]),t=Object(o.a)(e,1)[0],A=Object(a.useState)(t[0]),r=Object(o.a)(A,2),i=r[0],n=r[1],s=Object(a.useState)(!1),c=Object(o.a)(s,2),l=c[0],m=c[1];return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{navLinks:t,setCurrentLink:n,currentLink:i,contactSelected:l,setContactSelected:m}),"About Me"!==i||l?"Resume"!==i||l?"Portfolio"!==i||l?Object(d.jsx)(k,{}):Object(d.jsx)(B,{}):Object(d.jsx)(T,{}):Object(d.jsx)(F,{}),Object(d.jsx)(X,{})]})},K=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,204)).then((function(t){var A=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;A(e),a(e),r(e),i(e),n(e)}))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var A=e.installing;null!=A&&(A.onstatechange=function(){"installed"===A.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),K(),function(e){if("serviceWorker"in navigator){if(new URL("/REACT-Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/REACT-Portfolio","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(A){var a=A.headers.get("content-type");404===A.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},39:function(e){e.exports=JSON.parse('{"drinkology":{"id":1,"header":"Drinkology - Full Stack Project","altName":"drinkology","description":"Drinkology was created to allow end users to look up cocktail recipes, and master the art of mixology in the comfort of their own home. Members are able to sign in,save recipes to their account and leave reviews.","languages":["Node","Express","Handlebars","Bootstrap","HTML","Javascript","CSS"],"collaborators":[{"name":"Kristen Mayorga","repository":"https://github.com/Mayorgak"},{"name":"Leo Ayala","repository":"https://github.com/leo-ayala"}],"repository":"https://github.com/Mayorgak/drinkology","deployed":"https://damp-peak-42313.herokuapp.com/"},"pwaBudget":{"id":2,"header":"PWA Budget Tracker","altName":"pwaBudget","description":"This project is intended to be a demonstration of a progressive web application. It utilizes a service worker to register data caches in the browser to not only store files vital to the function of this app but also a snapshot of data so the user will be able to maintain an accurate budget when they\'re in low or no signal areas. Users will be to install this application on their desktop or on their mobile device from the browser.","languages":["Node","Express","MongoDB","HTML","Javascript","CSS"],"repository":"https://github.com/SmithBWare89/progressive-app-budget-tracker#languages","deployed":"https://progressive-budget-tracker-app.herokuapp.com/"},"soShul":{"id":3,"header":"NoSQL & REST API - So-Shul Network","altName":"soShul","description":"This project is intended to be a demonstration of a RESTful API using a combination of MongoDB, Express, Mongoose, and Moment. It\'s been expanded to include a minimalist front end to allow for a web app representation of the data being created in our database. Further developments for this project would be to update the formatting of the project along with streamlining the API routes.","languages":["Node","Express","MongoDB","Mongoose","Bcrypt","HTML","Javascript","CSS","SQL","NoSQL","Handlebars"],"repository":"https://github.com/SmithBWare89/so-shul-api","deployed":"https://so-shul.herokuapp.com/"},"ollieWilliamsWeather":{"id":4,"header":"Server-Side API - Weather Dashboard (Mobile Responsive)","altName":"ollieWilliams","description":"This project was intended to utilize both web and server-side APIs to leverage data retrieval and persistence for a mobile responsive application. Information is called from the OpenWeather API using the user inputted city which then dynamically renders the current weather forecast as well as the 5-day forecast for that city. Information persists in localStorage which allows the user to quickly recall previously searched cities.","languages":["HTML","Bootstrap","Javascript","CSS"],"repository":"https://github.com/SmithBWare89/ollie-williams-weather","deployed":"https://smithbware89.github.io/ollie-williams-weather/"},"teamProfileGenerator":{"id":5,"header":"Object-Oriented Programming - Team Profile Generator","altName":"teamProfile","description":"Utilized the Node package Inquirer and object-oriented programming best practices to create a command-line application that takes in information about employees on a software engineering team and then generates an HTML webpage to display a summary of each person within the organization.","languages":["HTML","Javascript","CSS","Node"],"repository":"https://github.com/SmithBWare89/team-profile-manager","deployed":"https://github.com/SmithBWare89/team-profile-manager/blob/master/dist/sample-html.html"},"reduxECommerceStore":{"id":6,"header":"Redux - eCommerce Refactor","altName":"eCommerceRefactor","description":"This project is intended to be a demonstration of refactoring a Context API to one that uses a Redux store. For this project we were provided starter code of an e-commerce side that we added state management to throughout the module. As students we were challenged with reading the Redux documentation to increase our understanding of another package that performs similar functionality while also increasing our exposure to how developers will have to parse through documentation they may be unfamiliar with to resolve an issue in development. It\'s intended that when reviewing the code behind this project that you\'ll find a refactored code document that uses Redux to handle state management for the web application.","languages":["Javascript","Node","React-Redux","Redux"],"repository":"https://github.com/SmithBWare89/Redux-E-Commerce-Refactor","deployed":"https://redux-ecommerce-refactor.herokuapp.com/"},"scriptifyQuiz":{"id":7,"header":"Web API - Scriptify Quiz","altName":"scriptifyQuiz","description":"This application is a coding challenge that\'s a part of the University of Central Florida\'s coding bootcamp. It\'s intended that this application will test my knowledge of Web API\'s as well as all information previously covered within this course. For this challenge I aim to create a website that generates a quiz on Javascript basics.","languages":["HTML","CSS","Javascript"],"repository":"https://github.com/SmithBWare89/scriptify-quizzes","deployed":"https://smithbware89.github.io/scriptify-quizzes/"},"readmeGenerator":{"id":8,"header":"Node - Professional Readme Generator","altName":"readmeGenerator","description":"This project is a part of the coursework for the University of Central Florida coding bootcamp. It\'s aimed at utilizing Node and javascript to be able to run a program using the command line. Users are asked a series of questions that are generated using the \\"Inquirer\\" package and then given the option to immediately view their generated readme. I hope that this will be able to assist individuals as well as myself in the future by making the creation of a professional readme simple, quick, and easy.","languages":["Javascript","Node"],"repository":"https://github.com/SmithBWare89/readme-generator","deployed":"https://www.youtube.com/watch?v=JOvcEToevro"},"regexGist":{"id":9,"header":"Gist - Regex Tutorial","altName":"regexTutorial","description":"Regular Expressions, or regex, are powerful and useful tools in web development and coding because the data that can be drawn from them can be used in multiple ways to enhance and simplify certain processes in regards to coding. The gist of this gist is to be able to break down what goes into the creation of a regex as well as identify how powerful this tool can be in capturing and validating the data we receive from users on the front end.","languages":["Regex","Readme"],"repository":"https://gist.github.com/SmithBWare89/9d121b06ea35a89aa46a4426e4697dd9","deployed":"https://gist.github.com/SmithBWare89/9d121b06ea35a89aa46a4426e4697dd9"}}')}},[[179,1,2]]]);
//# sourceMappingURL=main.b6f18a36.chunk.js.map