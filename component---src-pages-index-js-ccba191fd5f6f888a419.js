(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=a("USkh"),l=null,s="https://api.emailjs.com";function i(e,t,a){return void 0===a&&(a={}),new Promise((function(r,l){var s=new XMLHttpRequest;for(var i in s.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):l(t)})),s.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),s.open("POST",e,!0),a)s.setRequestHeader(i,a[i]);s.send(t)}))}function o(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function c(e,t){l=e,s=t||"https://api.emailjs.com"}function u(e,t,a,n){var r={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:o(a)};return i(s+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function m(e,t,a,n){var o;if("string"==typeof a&&(a=document.querySelector("#"!==(o=a)[0]?"#"+o:o)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||l),i(s+"/api/v1.0/email/send-form",c).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}t.init=c,t.send=u,t.sendForm=m,t.default={init:c,send:u,sendForm:m}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),s=a("dI71"),i=a("D5Hz"),o=a.n(i),c=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",message:""},t.formValidation=function(){alert("Email has been sent!")},t.handleChange=function(e,a){var n;t.setState(((n={})[e]=a.target.value,n))},t}Object(s.a)(t,e);var a=t.prototype;return a.handleSubmit=function(e){e.preventDefault(),o.a.sendForm("gmail","template_xHJcuAgG",e.target,"user_kf5tCn32h6RcPBUNDdmal").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),this.formValidation(),this.resetForm()},a.resetForm=function(){this.setState({name:"",email:"",message:""})},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"contact_form",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("h2",null,"Contact me"),r.a.createElement("div",{className:"form_group"},r.a.createElement("label",{htmlFor:"name"}," "),r.a.createElement("input",{type:"text",className:"form_control",name:"from_name",value:this.state.name,onChange:this.handleChange.bind(this,"name"),placeHolder:"Name"})),r.a.createElement("div",{className:"form_group"},r.a.createElement("label",{htmlFor:"email"}," "),r.a.createElement("input",{type:"text",className:"form_control",name:"reply_to",value:this.state.email,onChange:this.handleChange.bind(this,"email"),placeHolder:"Email"})),r.a.createElement("div",{className:"form_group"},r.a.createElement("label",{htmlFor:"message"}," "),r.a.createElement("textarea",{type:"text",className:"form_control",rows:"2",name:"message_html",value:this.state.message,onChange:this.handleChange.bind(this,"message"),placeHolder:"Message"})),r.a.createElement("button",{type:"submit",className:"form_button"},"Send")))},t}(n.Component),u=a("Wbzz"),m=function(e){var t=e.description,a=e.name,n=e.url,l=e.tech;e.gif;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},a)," ",": ",l),r.a.createElement("div",null,r.a.createElement("p",null,t)),r.a.createElement("div",null),r.a.createElement("hr",{style:{borderbottom:"1px solid #eee",width:"100%",margin:"1rem 0"}}))},d=function(){var e=Object(u.useStaticQuery)("3840144688").allDataJson.edges;return console.log(e,"data"),r.a.createElement("div",{className:"project-card"},e.map((function(e){var t=e.node,a=t.name,n=t.description,l=t.url,s=t.image.childImageSharp.fluid.src,i=t.tech,o=t.gif.relativePath;return r.a.createElement(m,{key:a,name:a,description:n,url:l,tech:i,image:s,gif:o})})))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"JourneyPure - July 2020 -",">"," Current - Admissions Coordinator"),r.a.createElement("p",null,"- Handle new inquiries for admissions to a JourneyPure Outpatient Programs",r.a.createElement("br",null),"- Operational and administrative duties necessary to complete each admission",r.a.createElement("br",null),"- Administrative duties associated with the admission process"),r.a.createElement("h4",null,"Nashville Software School - May 2019 -",">"," November 2019 - Full Stack Software Developer"),r.a.createElement("p",null,"- Using React, Javascript, CSS, and HTML, built browser-based single page applications",r.a.createElement("br",null),"- Source code version control via Git/GitHub and managing with GitHub projects",r.a.createElement("br",null),"- JavaScript fundamentals using dry, modular code and reusable components",r.a.createElement("br",null),"- Experience using Bootstrap, Semantic UI, Jquery, and CSS to style web applications",r.a.createElement("br",null),"- Leverage SQL to build and interact with databases",r.a.createElement("br",null),"- Utilize Python and Django to build web applications",r.a.createElement("br",null),"- Experience using Django REST to build an API",r.a.createElement("br",null),"- Hands on application of object oriented programming fundamentals through group and individual projects reflecting real-world business problems",r.a.createElement("br",null)),r.a.createElement("h4",null,"Murphy’s Motor Works - August 2013 -",">"," March 2019 - Owner"),r.a.createElement("p",null,"- Built customer relations, Income and expense accounts, managed parts and supplies ",r.a.createElement("br",null),"- Acquired an Auto dealers license- bought, listed, and sold vehicles ",r.a.createElement("br",null)," - Managed employees, accounted for taxes and payroll with Quickbooks ",r.a.createElement("br",null),"- Diagnosis and repair of multiplex 12vdc electrical systems with OE and aftermarket interface ",r.a.createElement("br",null),"- Developed new revenue streams like rebuilding hybrid batteries and custom metal fabrication ",r.a.createElement("br",null)," - Managed expected repair time per vehicle due to having a small shop with lots of customers with varying repair times"," ",r.a.createElement("br",null),"- Wired CAT5/CAT6 surveillance/networking systems and 3 phase 220v machinery ",r.a.createElement("br",null),"- Solved simple shop issues with a Raspberry Pi and running PiHole on the network router to have an ad-free YouTube channel for the shop"),r.a.createElement("h4",null,"Rook Industries - Jan 2012 -",">"," June 2013 - Product design and fabrication - Co-owner"),r.a.createElement("p",null,"- Obtained a patent-pending license for a product I designed ",r.a.createElement("br",null),"- Developed and fabricated chassis bracing products ",r.a.createElement("br",null)," - Utilized AutoCad and SolidWorks for design ",r.a.createElement("br",null)," - Promoted business via social media for events and influencers"),r.a.createElement("h4",null,"Education"),r.a.createElement("h4",null,"- Nashville Software School - Full Stack Software Developer"),r.a.createElement("h4",null,"- Nashville Auto Diesel College - Automotive Repair and Diesel Specialties"),r.a.createElement("hr",{style:{borderBottom:"1px solid #eee",width:"100%",margin:"1rem 0"}}))};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(c,null))}},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n}}]);
//# sourceMappingURL=component---src-pages-index-js-ccba191fd5f6f888a419.js.map