(this.webpackJsonphrnet=this.webpackJsonphrnet||[]).push([[5],{281:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(20);function i(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,i=!1,r=void 0;try{for(var b,o=e[Symbol.iterator]();!(t=(b=o.next()).done)&&(n.push(b.value),!a||n.length!==a);t=!0);}catch(s){i=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(i)throw r}}return n}}(e,a)||Object(t.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},468:function(e,a,n){},823:function(e,a,n){"use strict";n.r(a);var t=n(281),i=n(0),r=(n(468),n(18)),b=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],o=[{name:"Sales"},{name:"Marketing"},{name:"Engineering"},{name:"Human Resources"},{name:"Legal"}],s=n(19),c=n(3);a.default=function(){var e=Object(r.c)(),a=Object(i.useState)(""),n=Object(t.a)(a,2),m=n[0],u=n[1],l=Object(i.useState)(""),v=Object(t.a)(l,2),j=v[0],h=v[1],O=Object(i.useState)(""),d=Object(t.a)(O,2),p=d[0],f=d[1],x=Object(i.useState)(""),y=Object(t.a)(x,2),g=y[0],S=y[1],C=Object(i.useState)(""),M=Object(t.a)(C,2),N=M[0],A=M[1],I=Object(i.useState)(""),D=Object(t.a)(I,2),w=D[0],E=D[1],k=Object(i.useState)(""),V=Object(t.a)(k,2),W=V[0],P=V[1],T=Object(i.useState)(""),H=Object(t.a)(T,2),L=H[0],R=H[1],K=Object(i.useState)(""),F=Object(t.a)(K,2),Y=F[0],G=F[1];return Object(c.jsxs)("div",{className:"Create-Employee-Page",children:[Object(c.jsx)("h1",{children:"HRnet"}),Object(c.jsx)(s.b,{to:"/employees",className:"View-Employees-btn",children:"View Current Employees"}),Object(c.jsx)("h2",{children:"Create Employee"}),Object(c.jsxs)("form",{onSubmit:function(a){return function(a){a.preventDefault(),alert("Employee Created"),e({type:"NEW_EMPLOYEE",employe:{firstName:m,lastName:j,birthDate:p,startDate:g,street:N,city:w,state:W,zipCode:L,departement:Y}})}(a)},children:[Object(c.jsx)("span",{children:"First name"}),Object(c.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("span",{children:"Last name"}),Object(c.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("span",{children:"Date of birth"}),Object(c.jsx)("input",{type:"date",onChange:function(e){return f(e.target.value)}}),Object(c.jsx)("span",{children:"Start date"}),Object(c.jsx)("input",{type:"date",onChange:function(e){return S(e.target.value)}}),Object(c.jsxs)("div",{className:"Adresse",children:[Object(c.jsx)("h3",{children:"Adresse"}),Object(c.jsx)("span",{children:"Street"}),Object(c.jsx)("input",{type:"text",onChange:function(e){return A(e.target.value)}}),Object(c.jsx)("span",{children:"City"}),Object(c.jsx)("input",{type:"text",onChange:function(e){return E(e.target.value)}}),Object(c.jsx)("span",{children:"State"}),Object(c.jsx)("select",{onChange:function(e){return P(e.target[e.target.selectedIndex].text)},children:b.map((function(e){return Object(c.jsx)("option",{value:e.abbreviation,children:e.name})}))}),Object(c.jsx)("span",{children:"Zip code"}),Object(c.jsx)("input",{type:"number",onChange:function(e){return R(e.target.value)}})]}),Object(c.jsx)("span",{children:"Departament"}),Object(c.jsx)("select",{onChange:function(e){return G(e.target.value)},children:o.map((function(e){return Object(c.jsxs)("option",{value:e.name,children:[" ",e.name," "]})}))}),Object(c.jsx)("button",{children:"Save"})]})]})}}}]);
//# sourceMappingURL=5.33a6e47b.chunk.js.map