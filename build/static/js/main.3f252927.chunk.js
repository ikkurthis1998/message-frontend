(this["webpackJsonpmessage-frontend"]=this["webpackJsonpmessage-frontend"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(51),r=n.n(c),o=(n(61),n(62),n(34)),a=n(2),l=n(13),i=n.n(l),b=n(25),u=n(6),d=n(52),m=n(1),j=function(){var e=Object(u.b)(),t=e.loginWithRedirect,n=e.isLoading,s=Object(a.e)(),c=new d.a({domain:"dev-f20t0pcf.us.auth0.com",clientID:"v9RYiEYqLQlNROrknVYDYNGgeFxOojCD",redirectUri:"https://message-frontend.web.app/guestLogin",responseType:"code"}),r=function(){var e=Object(b.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.login({email:"test@test.com",password:"test123T@",realm:"Username-Password-Authentication"},(function(e,t){e&&console.error(e),console.log(t)}));case 2:s.push("/guestLogin");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"bg-white flex flex-col justify-center items-center mobile-sm:w-4/6 tablet:w-96 h-96 rounded-lg",children:[Object(m.jsx)("img",{className:"w-20",alt:"message",src:"https://firebasestorage.googleapis.com/v0/b/roc8-careers.appspot.com/o/18-Message%20(No%20Padding).png?alt=media&token=17bc37fd-03fa-48ba-9e68-1949220cd671"}),Object(m.jsx)("h1",{className:"text-5xl mb-5 font-bold font-rajdhani",children:"message"}),n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"mb-5",children:"Hold up a minute there..."}),Object(m.jsx)("div",{className:" flex justify-center items-center",children:Object(m.jsx)("div",{className:"animate-spin rounded-full h-28 w-28 border-b-2 border-gray-900"})})]}),!n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"mobile-sm:w-28 h-10 mobile-sm:text-base text-white font-bold bg-blue hover:bg-blue-600 rounded-lg mb-5",onClick:function(){return t()},children:"Lets Go!"}),Object(m.jsx)("button",{className:"mobile-sm:w-28 h-10 mobile-sm:text-base text-white font-bold bg-blue hover:bg-blue-600 rounded-lg mb-5",onClick:Object(b.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Guest login*"}),Object(m.jsxs)("p",{className:"text-red-500",children:["*If you are opting for guest login,",Object(m.jsx)("br",{})," please make sure cookies are allowed."]})]})]})},f=n(56),x=n(18),h=n(54),p=n.n(h)()("http://localhost:3000"),g=function(){var e=Object(s.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),o=Object(x.a)(r,2),a=o[0],l=o[1],d=Object(s.useState)(!1),j=Object(x.a)(d,2),h=j[0],g=j[1],O=Object(s.useRef)(null),v=Object(u.b)().user;return Object(s.useEffect)((function(){(function(){var e=Object(b.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,fetch("https://message-backend-r8.herokuapp.com/publicChats");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("Yes"),g(!1)}))}),[]),p.on("public",(function(e){l([].concat(Object(f.a)(a),[e])),function(e){var t;null===(t=e.current)||void 0===t||t.scrollIntoView()}(O)})),Object(m.jsxs)("div",{className:"w-96 h-5/6 border flex flex-col justify-end bg-gray-200 rounded m-5",children:[Object(m.jsxs)("div",{className:"overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 flex flex-col p-2",children:[a.map((function(e,t){return Object(m.jsxs)("div",{className:(null===v||void 0===v?void 0:v.sub)===e.sub?"flex flex-col self-end border bg-blue-300 min-w-md max-w-2/3 py-1 px-3 m-1 rounded":"flex flex-col self-start border bg-white min-w-md max-w-2/3 py-1 px-3 m-1 rounded",children:[Object(m.jsx)("p",{className:(null===v||void 0===v?void 0:v.sub)===e.sub?"text-sm self-end font-bold hidden":"text-sm self-start font-bold text-blue",children:e.name}),Object(m.jsx)("p",{className:(null===v||void 0===v?void 0:v.sub)===e.sub?"self-end text-lg":"self-start text-lg",children:e.message}),Object(m.jsx)("p",{className:(null===v||void 0===v||v.sub,e.sub,"self-end text-sm"),children:new Date(e.timeStamp).toLocaleString("en-US",{hour:"2-digit",minute:"2-digit"})})]},t)})),Object(m.jsx)("div",{ref:O,children:h?"Loading...":""})]}),Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n&&p.emit("public",{message:n,name:null===v||void 0===v?void 0:v.name,sub:null===v||void 0===v?void 0:v.sub,timeStamp:(new Date).toISOString()}),c("")}(e)},className:"mb-1 flex mx-2",children:[Object(m.jsx)("input",{required:!0,className:"flex-grow px-2 focus:outline-none focus:border-transparent rounded",type:"text",value:n,onChange:function(e){c(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"w-14 border bg-green-300 border border-green-300 rounded",children:"Send"})]})]})},O=function(){var e=Object(u.b)(),t=e.logout,n=e.user;return n?Object(m.jsxs)("div",{className:"flex flex-col justify-start items-center w-screen h-screen rounded-lg py-10 box-border bg-blue",children:[Object(m.jsx)("p",{className:"font-bold text-2xl",children:n.name}),Object(m.jsx)("button",{onClick:function(){return t({returnTo:"https://message-frontend.web.app"})},children:"Log Out"}),Object(m.jsx)(g,{})]}):null},v=function(){var e=Object(u.b)().loginWithRedirect,t=Object(s.useState)(!1),n=Object(x.a)(t,2),c=n[0],r=n[1];return Object(s.useEffect)((function(){window.location.search&&(console.log("Yes"),r(!0))}),[]),Object(m.jsx)("div",{className:"bg-blue flex justify-center items-center box-border w-screen h-screen p-5",children:Object(m.jsxs)("div",{className:"bg-white flex flex-col justify-center items-center mobile-sm:w-4/6 tablet:w-96 h-96 rounded-lg p-14",children:[Object(m.jsx)("h1",{className:"text-5xl font-bold mb-5",children:"Welcome!"}),Object(m.jsx)("p",{className:"text-lg mb-5",children:"This guest account is to try out different features of the app"}),Object(m.jsx)("p",{className:"text-lg mb-5",children:"Be friendly, kind, welcoming and respectful."}),Object(m.jsx)("button",{onClick:function(){return e()},className:"text-xl rounded-lg w-24 h-10 text-white ".concat(c?"bg-blue hover:bg-blue-600 ":"bg-blue-400 cursor-wait"),disabled:!c,children:"Lets Go"})]})})};var w=function(){var e=Object(u.b)().isAuthenticated;return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(a.a,{exact:!0,path:"/",children:Object(m.jsxs)("header",{className:"bg-blue flex justify-center items-center box-border w-screen h-screen px-10",children:[!e&&Object(m.jsx)(j,{}),e&&Object(m.jsx)(O,{})]})}),Object(m.jsx)(a.a,{path:"/guestLogin",children:Object(m.jsx)(v,{})})]})})};n(55).config(),console.log("dev-f20t0pcf.us.auth0.com"),r.a.render(Object(m.jsx)(u.a,{domain:"dev-f20t0pcf.us.auth0.com",clientId:"v9RYiEYqLQlNROrknVYDYNGgeFxOojCD",redirectUri:"https://message-frontend.web.app",children:Object(m.jsx)(w,{})}),document.getElementById("root"))},61:function(e,t,n){},62:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.3f252927.chunk.js.map