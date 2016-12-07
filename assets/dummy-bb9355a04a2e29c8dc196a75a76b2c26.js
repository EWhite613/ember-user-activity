"use strict";define("dummy/app",["exports","ember","ember-application","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r,i){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=n.default.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:a.default}),(0,r.default)(l,i.default.modulePrefix),e.default=l}),define("dummy/components/event-display",["exports","ember-component","ember-service/inject","ember-array/utils"],function(e,t,n,a){e.default=t.default.extend({classNames:["eventDisplay"],userActivity:(0,n.default)(),eventName:"userActive",events:null,init:function(){this._super.apply(this,arguments),this.set("events",(0,a.A)())},didInsertElement:function(){this.get("userActivity").on(this.get("eventName"),this,this.registerActivity)},willDestroyElement:function(){var e=this.get("userActivity"),t=this.get("eventName");e.off(t,this,this.registerActivity),e.disableEvent(t)},registerActivity:function(e){this.get("events").unshiftObject(e.type)},actions:{close:function(){this.get("close")(this.get("eventName"))}}})}),define("dummy/components/idle-display",["exports","ember-component","ember-computed","ember-service/inject"],function(e,t,n,a){e.default=t.default.extend({classNames:["idleDisplay"],userIdle:(0,a.default)(),isIdle:n.default.readOnly("userIdle.isIdle"),status:(0,n.default)("isIdle",function(){return this.get("isIdle")?"idle":"not idle"})})}),define("dummy/controllers/index",["exports","ember-controller","ember-array/utils"],function(e,t,n){e.default=t.default.extend({eventNames:null,init:function(){this._super.apply(this,arguments),this.set("eventNames",(0,n.A)(["userActive","scroll","mousedown","keydown","touchstart"]))},actions:{addEvent:function(e,t){13!==t.which||this.get("eventNames").includes(e)||this.get("eventNames").pushObject(e)},removeEvent:function(e){this.get("eventNames").removeObject(e)}}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){return r}e.appVersion=a;var r=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n.default.APP,r=a.name,i=a.version;e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember-router","dummy/config/environment"],function(e,t,n){var a=t.default.extend({location:n.default.locationType});a.map(function(){}),e.default=a}),define("dummy/services/scroll-activity",["exports","ember-user-activity/services/scroll-activity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/user-activity",["exports","ember-user-activity/services/user-activity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/user-idle",["exports","ember-user-activity/services/user-idle"],function(e,t){e.default=t.default.extend({IDLE_TIMEOUT:1e4})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:1,column:0},end:{line:1,column:10}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/components/event-display",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:5,column:2},end:{line:9,column:2}},moduleName:"dummy/templates/components/event-display.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a},statements:[["content","event",["loc",[null,[7,6],[7,15]]],0,0,0,0]],locals:["event"],templates:[]}}();return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:1,column:0},end:{line:10,column:6}},moduleName:"dummy/templates/components/event-display.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3");e.setAttribute(n,"class","eventName");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","close");var a=e.createTextNode("x");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Events Fired: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","eventList");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(t,[0]),0,0),r[1]=e.createElementMorph(a),r[2]=e.createMorphAt(e.childAt(t,[4]),1,1),r[3]=e.createMorphAt(e.childAt(t,[6]),1,1),r},statements:[["content","eventName",["loc",[null,[1,22],[1,35]]],0,0,0,0],["element","action",["close"],[],["loc",[null,[2,20],[2,38]]],0,0],["content","events.length",["loc",[null,[3,17],[3,34]]],0,0,0,0],["block","each",[["get","events",["loc",[null,[5,10],[5,16]]],0,0,0,0]],[],0,null,["loc",[null,[5,2],[9,11]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/idle-display",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:1,column:0},end:{line:2,column:58}},moduleName:"dummy/templates/components/idle-display.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),a=e.createTextNode("Do nothing for 10 seconds to see your idle status change.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("User is ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","idleStatus");var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(".");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[2,1]),0,0),a},statements:[["content","status",["loc",[null,[2,36],[2,46]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:29,column:2},end:{line:31,column:2}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","event-display",[],["eventName",["subexpr","@mut",[["get","event",["loc",[null,[30,30],[30,35]]],0,0,0,0]],[],[],0,0],"close",["subexpr","action",["removeEvent"],[],["loc",[null,[30,42],[30,64]]],0,0]],["loc",[null,[30,4],[30,66]]],0,0]],locals:["event"],templates:[]}}();return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:1,column:0},end:{line:32,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1");e.setAttribute(n,"class","title");var a=e.createElement("a");e.setAttribute(a,"href","http://github.jhawk.co/ember-user-activity/"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("Ember User Activity Demo");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badges");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"class","badgeInner");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://travis-ci.org/elwayman02/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://travis-ci.org/elwayman02/ember-user-activity.svg?branch=master"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://emberobserver.com/addons/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://emberobserver.com/badges/ember-user-activity.svg"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://codeclimate.com/github/elwayman02/ember-user-activity"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://codeclimate.com/github/elwayman02/ember-user-activity/badges/gpa.svg"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("This demo is running EUA ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Scroll, click, or press keys to see events fire!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  Add ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://developer.mozilla.org/en-US/docs/Web/Events"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("another event");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(":\n  ");e.appendChild(n,a);var a=e.createElement("input");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","flexContainer");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[8,3]),r=new Array(6);return r[0]=e.createMorphAt(e.childAt(t,[4]),1,1),r[1]=e.createAttrMorph(a,"value"),r[2]=e.createAttrMorph(a,"oninput"),r[3]=e.createAttrMorph(a,"onkeydown"),r[4]=e.createMorphAt(t,10,10,n),r[5]=e.createMorphAt(e.childAt(t,[12]),1,1),r},statements:[["content","app-version",["loc",[null,[17,28],[17,43]]],0,0,0,0],["attribute","value",["get","newEvent",["loc",[null,[23,17],[23,25]]],0,0,0,0],0,0,0,0],["attribute","oninput",["subexpr","action",[["subexpr","mut",[["get","newEvent",["loc",[null,[23,50],[23,58]]],0,0,0,0]],[],["loc",[null,[23,45],[23,59]]],0,0]],["value","target.value"],["loc",[null,[null,null],[23,82]]],0,0],0,0,0,0],["attribute","onkeydown",["subexpr","action",["addEvent",["get","newEvent",["loc",[null,[23,113],[23,121]]],0,0,0,0]],[],["loc",[null,[null,null],[23,123]]],0,0],0,0,0,0],["content","idle-display",["loc",[null,[26,0],[26,16]]],0,0,0,0],["block","each",[["get","eventNames",["loc",[null,[29,10],[29,20]]],0,0,0,0]],[],0,null,["loc",[null,[29,2],[31,11]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-user-activity",version:"0.6.0"});