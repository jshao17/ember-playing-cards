define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,a,t,r,n){"use strict";a["default"].MODEL_FACTORY_INJECTIONS=!0;var d=a["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:t["default"]});r["default"](d,n["default"].modulePrefix),e["default"]=d}),define("dummy/components/playing-card",["exports","ember-playing-cards/components/playing-card"],function(e,a){"use strict";e["default"]=a["default"]}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,a,t){"use strict";var r=t["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,n){var d=r(n.toString());t["default"].libraries.register(d,a["default"].APP.version)}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,a,t){"use strict";function r(e,r){var n=a["default"].String.classify(t["default"].modulePrefix);t["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,a,t){"use strict";var r=a["default"].Router.extend({location:t["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/routes/application",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Route.extend({model:function(){return{suits:["heart","diamond","spade","club"],ranks:["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"]}}})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(e,a,t){var r=a.dom,n=a.hooks,d=n.get,i=n.inline;r.detectNamespace(t);var c;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var l=r.createMorphAt(c,0,1,t);return i(a,l,e,"playing-card",[],{rank:d(a,e,"rank"),suit:d(a,e,"suit")}),c}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createTextNode("");e.appendChild(a,t);var t=e.createTextNode("");return e.appendChild(a,t),a},render:function(a,t,r){var n=t.dom,d=t.hooks,i=d.get,c=d.block;n.detectNamespace(r);var l;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(l=this.build(n),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=n.cloneNode(this.cachedFragment,!0))):l=this.build(n),this.cachedFragment&&n.repairClonedNode(l,[0,1]);var p=n.createMorphAt(l,0,1,r);return c(t,p,a,"each",[i(t,a,"ranks")],{keyword:"rank"},e,null),l}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Random Cards");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Random Numbered Cards");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Random Faces");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Random Kings");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Normal Cards");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Jokers");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createElement("div"),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("h1"),n=e.createTextNode("Invalid Card (defaults to ace of spades with smaller center)");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(a,t,r){var n=t.dom,d=t.hooks,i=d.inline,c=d.content,l=d.get,p=d.block;n.detectNamespace(r);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var h=n.childAt(o,[0]),u=n.childAt(o,[2]),s=n.childAt(o,[4]),m=n.childAt(o,[6]),v=n.childAt(o,[10]),f=n.createMorphAt(h,2,3),C=n.createMorphAt(h,3,4),g=n.createMorphAt(h,4,5),x=n.createMorphAt(h,5,6),N=n.createMorphAt(u,2,3),T=n.createMorphAt(u,3,4),y=n.createMorphAt(u,4,5),b=n.createMorphAt(u,5,6),k=n.createMorphAt(s,2,3),A=n.createMorphAt(s,3,4),M=n.createMorphAt(m,2,3),F=n.createMorphAt(m,3,4),E=n.createMorphAt(m,4,5),R=n.createMorphAt(n.childAt(o,[8]),2,-1),w=n.createMorphAt(v,2,3),P=n.createMorphAt(v,3,4),z=n.createMorphAt(n.childAt(o,[12]),2,3);return i(t,f,a,"playing-card",[],{suit:"club"}),c(t,C,a,"playing-card"),c(t,g,a,"playing-card"),c(t,x,a,"playing-card"),i(t,N,a,"playing-card",[],{rank:"number",suit:"heart"}),i(t,T,a,"playing-card",[],{rank:"number",suit:"diamond"}),i(t,y,a,"playing-card",[],{rank:"number"}),i(t,b,a,"playing-card",[],{rank:"number"}),i(t,k,a,"playing-card",[],{rank:"face"}),i(t,A,a,"playing-card",[],{rank:"face"}),i(t,M,a,"playing-card",[],{rank:"king"}),i(t,F,a,"playing-card",[],{rank:"king"}),i(t,E,a,"playing-card",[],{rank:"king"}),p(t,R,a,"each",[l(t,a,"suits")],{keyword:"suit"},e,null),i(t,w,a,"playing-card",[],{rank:"big-joker"}),i(t,P,a,"playing-card",[],{rank:"little-joker"}),i(t,z,a,"playing-card",[],{rank:"unknown"}),o}}}())}),define("dummy/config/environment",["ember"],function(e){var a="dummy";try{var t=a+"/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-playing-cards",version:"0.0.5.cc4bf02b"});