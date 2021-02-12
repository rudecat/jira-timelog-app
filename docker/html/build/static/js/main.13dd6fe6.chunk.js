(this.webpackJsonptimelog=this.webpackJsonptimelog||[]).push([[0],{36:function(e,t,r){},38:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),s=r.n(a),c=r(28),i=r.n(c),o=(r(36),r(8)),u=r.n(o),l=r(12),m=r(19),j=r(15),d=(r(38),r(39),r(13)),b=r.n(d),h=r(66),p=r(30),g=r(63),O=r(29),x=r(67),y=r(65),f=r(64),J=[{Jkey:"DBPB-80",Jurl:"https://jira.sandstone.com.au/browse/DBPB-80",Jsummary:"Sprint Meetings - Daily Standup",comment:"Atlas Daily Standup",estimate:15,isRecurring:!0},{Jkey:"DBPB-80",Jurl:"https://jira.sandstone.com.au/browse/DBPB-80",Jsummary:"Sprint Meetings - Iteration Planning",comment:"Atlas Iteration Planning",estimate:15,isRecurring:!0},{Jkey:"DBPB-80",Jurl:"https://jira.sandstone.com.au/browse/DBPB-80",Jsummary:"Sprint Meetings - Iteration Retro",comment:"Atlas Iteration Retro",estimate:30,isRecurring:!0},{Jkey:"DBPB-80",Jurl:"https://jira.sandstone.com.au/browse/DBPB-80",Jsummary:"Sprint Meetings - Grooming",comment:"Atlas Grooming",estimate:60,isRecurring:!0},{Jkey:"DBPB-79",Jurl:"https://jira.sandstone.com.au/browse/DBPB-79",Jsummary:"General Meetings - FY 21",estimate:30,isRecurring:!0},{Jkey:"DBPB-96",Jurl:"https://jira.sandstone.com.au/browse/DBPB-96",Jsummary:"SoS meetings - FY 21",comment:"Scrum of Scrums meeting",estimate:60,isRecurring:!0},{Jkey:"DBPB-1795",Jurl:"https://jira.sandstone.com.au/browse/DBPB-1795",Jsummary:"Scrum Master Activities - FY 21",estimate:60,isRecurring:!0}];function v(e){return{comment:e.target.workcomment.value,timeSpent:"".concat(e.target.timelog.value,"m")}}var k=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(0),i=Object(j.a)(c,2),o=i[0],d=i[1],k=Object(a.useState)([]),B=Object(j.a)(k,2),D=B[0],w=B[1],S=function(e){return Object(n.jsx)("div",{children:e.profiles.map((function(e){return Object(n.jsx)(P,Object(m.a)({},e),e.Jsummary)}))})},P=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{onSubmit:I,children:Object(n.jsxs)(h.a.Row,{children:[Object(n.jsx)(h.a.Label,{column:!0,sm:"3",children:Object(n.jsxs)("a",{href:e.Jurl,target:"_blank",rel:"noreferrer",children:[e.Jkey,"-",e.Jsummary]})}),Object(n.jsx)(p.a,{sm:"2",children:Object(n.jsxs)(g.a,{className:"mb-2",children:[Object(n.jsx)(O.a,{id:"timelog",type:"number",defaultValue:e.estimate,required:!0}),Object(n.jsx)(g.a.Append,{children:Object(n.jsx)(g.a.Text,{children:"mins"})})]})}),Object(n.jsx)(p.a,{sm:"2",children:Object(n.jsx)(O.a,{id:"workcomment",type:"text",placeholder:"Comment",defaultValue:e.comment})}),Object(n.jsx)(p.a,{sm:"1",children:Object(n.jsx)(x.a,{variant:"info",type:"submit",children:"Log time"})}),Object(n.jsx)(O.a,{id:"Jkey",type:"hidden",value:e.Jkey}),Object(n.jsx)(O.a,{id:"Jsummary",type:"hidden",value:e.Jsummary}),e.isRecurring?null:Object(n.jsx)(p.a,{sm:"1",children:Object(n.jsx)(x.a,{type:"Button",variant:"danger",onClick:T,children:"Remove"})})]})}),Object(n.jsx)("br",{})]})})},F=function(e){return Object(n.jsx)(y.a,{children:e.logitems.map((function(e){return Object(n.jsx)(R,Object(m.a)({},e),e.Jkey)}))})},R=function(e){return Object(n.jsxs)(y.a.Item,{children:[e.Jkey," - ",e.Jsummary," --- ",e.timeLogged]})};function C(){return(C=Object(l.a)(u.a.mark((function e(t){var r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://localhost/jira/search?jql=filter%3D"+t,e.next=3,b.a.get(r);case 3:return n=e.sent,a=[],n.data.issues.map((function(e){var t={Jkey:e.key,Jurl:"https://jira.sandstone.com.au/browse/"+e.key,Jsummary:e.fields.summary};a.push(t)})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r="https://localhost/jira/issue/".concat(t.target.Jkey.value,"/worklog"),n=v(t),e.next=5,b.a.post(r,n);case 5:e.sent,a={Jkey:t.target.Jkey.value,Jsummary:t.target.Jsummary.value,timeLogged:t.target.timelog.value+" minutes"},D.push(a),d(Number(o)+Number(t.target.timelog.value)),w(D);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(){return(L=Object(l.a)(u.a.mark((function e(t){var n,a,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://localhost/jira/issue/".concat(t),e.next=3,b.a.get(n);case 3:return a=e.sent,console.log(a),s={Jkey:t,Jsummary:a.data.fields.summary,Jurl:"https://jira.sandstone.com.au/browse/"+t},console.log(s),(c=[]).push(s),console.log(c),e.abrupt("return",c.concat(r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){e.preventDefault(),console.log(e);var t=r.filter((function(t){return t.Jkey!==e.target.parentNode.parentNode.childNodes[4].value}));s(t)},A=function(e){e.preventDefault(),w([]),d(0)},M=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(p.a,{sm:"5",children:Object(n.jsxs)("h1",{class:"page-header",children:["Total time logged --- ",o," / 450 minutes"]})})," ",Object(n.jsx)(x.a,{onClick:A,children:"Clear Log"})]})})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsx)("h2",{children:"Recurring Tasks"}),Object(n.jsx)(S,{profiles:J}),Object(n.jsx)("h2",{children:"Filtered Tasks"}),Object(n.jsxs)(h.a.Row,{children:[Object(n.jsx)(p.a,{sm:"3",children:Object(n.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),function(e){return L.apply(this,arguments)}(e.target.addTicket.value).then((function(e){s(e)}))},children:[Object(n.jsx)(h.a.Group,{controlId:"addTicket",children:Object(n.jsx)(h.a.Control,{type:"string",placeholder:"Jira Ticket"})}),Object(n.jsx)(x.a,{variant:"primary",type:"submit",children:"Add ticket"})]})}),Object(n.jsx)(p.a,{sm:"0.5",children:" OR "}),Object(n.jsx)(p.a,{sm:"3",children:Object(n.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),function(e){return C.apply(this,arguments)}(e.target.loadFilter.value).then((function(e){s(e)}))},children:[Object(n.jsx)(h.a.Group,{controlId:"loadFilter",children:Object(n.jsx)(h.a.Control,{type:"string",placeholder:"Jira Filter"})}),Object(n.jsx)(x.a,{variant:"primary",type:"submit",children:"Load Filter"})]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(S,{profiles:r}),Object(n.jsx)("h2",{children:"Log History"}),Object(n.jsx)(F,{logitems:D})]})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,68)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),B()}},[[61,1,2]]]);
//# sourceMappingURL=main.13dd6fe6.chunk.js.map