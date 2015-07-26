//weakmap and mutationobserver polyfill for old browsers and ie9
"WeakMap" in this||function(e){"use strict";function t(){var e=[],t=[];return S(b,{"delete":{value:x.call(a,v,h,e,t)},get:{value:x.call(r,v,h,e,t)},has:{value:x.call(u,v,h,e,t)},set:{value:x.call(o,v,h,e,t)}})}function n(){var e=[],t=[];return S(k,{"delete":{value:x.call(a,v,d,e,t)},get:{value:x.call(r,v,d,e,t)},has:{value:x.call(u,v,d,e,t)},set:{value:x.call(o,v,d,e,t)}})}function l(){var e=[],t=[],n=x.call(u,v,d,t,e);return S(W,{"delete":{value:x.call(a,v,d,t,e)},has:{value:n},add:{value:x.call(c,v,d,n,t)}})}function a(e,t,n,l){return u(e,t,n,l)&&(t.splice(s,1),n.splice(s,1)),s>-1}function r(e,t,n,l){return u(e,t,n,l)?n[s]:f}function u(e,t,n,l){if(e&&l!==g(l))throw new TypeError("not a non-null object");return s=i.call(t,l),s>-1}function o(e,t,n,l,a){u(e,t,n,l)?n[s]=a:n[t.push(l)-1]=a}function c(e,t,n,l){!t(l)&&!!n.push(l)}function i(e){if(e!=e||0===e)for(s=this.length;s--&&!w(this[s],e););else s=j.call(this,e);return s}function p(){}var f,s,v=null,h=!0,d=!1,y="undefined"==e,M=y?this:global,e=y?{}:exports,g=M.Object,b=t.prototype,k=n.prototype,W=l.prototype,w=(g.defineProperty,[].slice,g.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}),x=t.bind||function(e,t,n,l){var a=this;return function(r,u){return a.call(e,t,n,l,r,u)}},S=g.create||function(e,t){p.prototype=e;var n,l=new p;for(n in t)l[n]=t[n].value;return l},j=[].indexOf||function(e){for(s=this.length;s--&&this[s]!==e;);return s};t.prototype=b=t(),n.prototype=k=n(),l.prototype=W=l(),M.WeakMap=e.WeakMap=M.WeakMap||t,M.Map=e.Map=M.Map||n,M.Set=e.Set=M.Set||l}.call(this,typeof exports);
(function(e){function u(e){o.push(e);if(!s){s=true;n(f)}}function a(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function f(){s=false;var e=o;o=[];e.sort(function(e,t){return e.uid_-t.uid_});var t=false;e.forEach(function(e){var n=e.takeRecords();l(e);if(n.length){e.callback_(n,e);t=true}});if(t)f()}function l(e){e.nodes_.forEach(function(n){var r=t.get(n);if(!r)return;r.forEach(function(t){if(t.observer===e)t.removeTransientObservers()})})}function c(e,n){for(var r=e;r;r=r.parentNode){var i=t.get(r);if(i){for(var s=0;s<i.length;s++){var o=i[s];var u=o.options;if(r!==e&&!u.subtree)continue;var a=n(u);if(a)o.enqueue(a)}}}}function p(e){this.callback_=e;this.nodes_=[];this.records_=[];this.uid_=++h}function d(e,t){this.type=e;this.target=t;this.addedNodes=[];this.removedNodes=[];this.previousSibling=null;this.nextSibling=null;this.attributeName=null;this.attributeNamespace=null;this.oldValue=null}function v(e){var t=new d(e.type,e.target);t.addedNodes=e.addedNodes.slice();t.removedNodes=e.removedNodes.slice();t.previousSibling=e.previousSibling;t.nextSibling=e.nextSibling;t.attributeName=e.attributeName;t.attributeNamespace=e.attributeNamespace;t.oldValue=e.oldValue;return t}function y(e,t){return m=new d(e,t)}function b(e){if(g)return g;g=v(m);g.oldValue=e;return g}function w(){m=g=undefined}function E(e){return e===g||e===m}function S(e,t){if(e===t)return e;if(g&&E(e))return g;return null}function x(e,t,n){this.observer=e;this.target=t;this.options=n;this.transientObservedNodes=[]}var t=new WeakMap;var n=window.msSetImmediate;if(!n){var r=[];var i=String(Math.random());window.addEventListener("message",function(e){if(e.data===i){var t=r;r=[];t.forEach(function(e){e()})}});n=function(e){r.push(e);window.postMessage(i,"*")}}var s=false;var o=[];var h=0;p.prototype={observe:function(e,n){e=a(e);if(!n.childList&&!n.attributes&&!n.characterData||n.attributeOldValue&&!n.attributes||n.attributeFilter&&n.attributeFilter.length&&!n.attributes||n.characterDataOldValue&&!n.characterData){throw new SyntaxError}var r=t.get(e);if(!r)t.set(e,r=[]);var i;for(var s=0;s<r.length;s++){if(r[s].observer===this){i=r[s];i.removeListeners();i.options=n;break}}if(!i){i=new x(this,e,n);r.push(i);this.nodes_.push(e)}i.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){var n=t.get(e);for(var r=0;r<n.length;r++){var i=n[r];if(i.observer===this){i.removeListeners();n.splice(r,1);break}}},this);this.records_=[]},takeRecords:function(){var e=this.records_;this.records_=[];return e}};var m,g;x.prototype={enqueue:function(e){var t=this.observer.records_;var n=t.length;if(t.length>0){var r=t[n-1];var i=S(r,e);if(i){t[n-1]=i;return}}else{u(this.observer)}t[n]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;if(t.attributes)e.addEventListener("DOMAttrModified",this,true);if(t.characterData)e.addEventListener("DOMCharacterDataModified",this,true);if(t.childList)e.addEventListener("DOMNodeInserted",this,true);if(t.childList||t.subtree)e.addEventListener("DOMNodeRemoved",this,true)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;if(t.attributes)e.removeEventListener("DOMAttrModified",this,true);if(t.characterData)e.removeEventListener("DOMCharacterDataModified",this,true);if(t.childList)e.removeEventListener("DOMNodeInserted",this,true);if(t.childList||t.subtree)e.removeEventListener("DOMNodeRemoved",this,true)},addTransientObserver:function(e){if(e===this.target)return;this.addListeners_(e);this.transientObservedNodes.push(e);var n=t.get(e);if(!n)t.set(e,n=[]);n.push(this)},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];e.forEach(function(e){this.removeListeners_(e);var n=t.get(e);for(var r=0;r<n.length;r++){if(n[r]===this){n.splice(r,1);break}}},this)},handleEvent:function(e){e.stopImmediatePropagation();switch(e.type){case"DOMAttrModified":var t=e.attrName;var n=e.relatedNode.namespaceURI;var r=e.target;var i=new y("attributes",r);i.attributeName=t;i.attributeNamespace=n;var s=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;c(r,function(e){if(!e.attributes)return;if(e.attributeFilter&&e.attributeFilter.length&&e.attributeFilter.indexOf(t)===-1&&e.attributeFilter.indexOf(n)===-1){return}if(e.attributeOldValue)return b(s);return i});break;case"DOMCharacterDataModified":var r=e.target;var i=y("characterData",r);var s=e.prevValue;c(r,function(e){if(!e.characterData)return;if(e.characterDataOldValue)return b(s);return i});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var r=e.relatedNode;var o=e.target;var u,a;if(e.type==="DOMNodeInserted"){u=[o];a=[]}else{u=[];a=[o]}var f=o.previousSibling;var l=o.nextSibling;var i=y("childList",r);i.addedNodes=u;i.removedNodes=a;i.previousSibling=f;i.nextSibling=l;c(r,function(e){if(!e.childList)return;return i})}w()}};e.JsMutationObserver=p;if(!e.MutationObserver)e.MutationObserver=p})(this);

//device as html class
function css_browser_selector(e){var t=e.toLowerCase(),n=function(e){return t.indexOf(e)>-1},r="gecko",i="webkit",s="safari",o="opera",u="mobile",a=document.documentElement,f=[!/opera|webtv/i.test(t)&&/msie\s(\d)/.test(t)?"ie ie"+RegExp.$1:n("firefox/2")?r+" ff2":n("firefox/3.5")?r+" ff3 ff3_5":n("firefox/3.6")?r+" ff3 ff3_6":n("firefox/3")?r+" ff3":n("gecko/")?r:n("opera")?o+(/version\/(\d+)/.test(t)?" "+o+RegExp.$1:/opera(\s|\/)(\d+)/.test(t)?" "+o+RegExp.$2:""):n("konqueror")?"konqueror":n("blackberry")?u+" blackberry":n("android")?u+" android":n("chrome")?i+" chrome":n("iron")?i+" iron":n("applewebkit/")?i+" "+s+(/version\/(\d+)/.test(t)?" "+s+RegExp.$1:""):n("mozilla/")?r:"",n("j2me")?u+" j2me":n("iphone")?u+" iphone":n("ipod")?u+" ipod":n("ipad")?u+" ipad":n("mac")?"mac":n("darwin")?"mac":n("webtv")?"webtv":n("win")?"win"+(n("windows nt 6.0")?" vista":""):n("freebsd")?"freebsd":n("x11")||n("linux")?"linux":"","js"];c=f.join(" ");a.className+=" "+c;return c}css_browser_selector(navigator.userAgent);(function(){var e,t,n,r,i,s,o,u,a,f;e=window.device,window.device={},n=window.document.documentElement,f=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return r("iphone")},device.ipod=function(){return r("ipod")},device.ipad=function(){return r("ipad")},device.android=function(){return r("android")},device.androidPhone=function(){return device.android()&&r("mobile")},device.androidTablet=function(){return device.android()&&!r("mobile")},device.blackberry=function(){return r("blackberry")||r("bb10")||r("rim")},device.blackberryPhone=function(){return device.blackberry()&&!r("tablet")},device.blackberryTablet=function(){return device.blackberry()&&r("tablet")},device.windows=function(){return r("windows")},device.windowsPhone=function(){return device.windows()&&r("phone")},device.windowsTablet=function(){return device.windows()&&r("touch")},device.fxos=function(){return(r("(mobile;")||r("(tablet;"))&&r("; rv:")},device.fxosPhone=function(){return device.fxos()&&r("mobile")},device.fxosTablet=function(){return device.fxos()&&r("tablet")},device.meego=function(){return r("meego")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=e,this},r=function(e){return-1!==f.indexOf(e)},s=function(e){var t;return t=new RegExp(e,"i"),n.className.match(t)},t=function(e){return s(e)?void 0:n.className+=" "+e},u=function(e){return s(e)?n.className=n.className.replace(e,""):void 0},device.ios()?device.ipad()?t("ios ipad tablet"):device.iphone()?t("ios iphone mobile"):device.ipod()&&t("ios ipod mobile"):device.android()?device.androidTablet()?t("android tablet"):t("android mobile"):device.blackberry()?device.blackberryTablet()?t("blackberry tablet"):t("blackberry mobile"):device.windows()?device.windowsTablet()?t("windows tablet"):device.windowsPhone()?t("windows mobile"):t("desktop"):device.fxos()?device.fxosTablet()?t("fxos tablet"):t("fxos mobile"):device.meego()?t("meego mobile"):t("desktop"),i=function(){return device.landscape()?(u("portrait"),t("landscape")):(u("landscape"),t("portrait"))},a="onorientationchange"in window,o=a?"orientationchange":"resize",window.addEventListener?window.addEventListener(o,i,!1):window.attachEvent?window.attachEvent(o,i):window[o]=i,i()}).call(this);

//ajax record
(function(e){e.ajaxRecordList={};e(document).ajaxSend(function(t,n,r){e.each(e.ajaxRecordList,function(t){var r=e.Deferred();n.ajaxExecutingRecording=r;e.ajaxRecordList[t].push(r)})});e(document).ajaxComplete(function(e,t,n){if(t.ajaxExecutingRecording){t.ajaxExecutingRecording.resolve()}});e.ajaxRecord=function(t){e.ajaxRecordList[t]=e.ajaxRecordList[t]||[]};e.ajaxStopRecord=function(t){var n=e.ajaxRecordList[t]||[];delete e.ajaxRecordList[t];return n};e.ajaxGetRecords=function(t){return e.ajaxRecordList[t]||[]};e.ajaxExecuted=function(t){var n=e.Deferred();var r=[];e.each(e.ajaxGetRecords(t),function(e,t){r.push(t)});e.when.apply(e,r).done(function(){n.resolve()});e.ajaxStopRecord(t);return n}})(jQuery);

//start is here 
(function($) {

	window.ControllerManagerClass = function(){
		
		window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver; //unify mutation obj
		
		var _this = this;

		this.config = {
			observeRoot : "body", //root of items to manage
			observeSettings : {
				subtree: true, //in case new items added 
			    childList: true, //to make sure all DOM is observed
			    attributes: true, //in case attribute was added to item
			    attributeFilter: ["data-controller"] //to save performance
			},
			enableItemObservers : true, //enable filters for items without data-controller attr (for example when you want every item to have some controller)
			debug : 0
		};


		//list of types of controllers initialized
		this.controllersInitialized = [];
		this.loadedLibs = []; //info about js libs that are loaded in case of deps
		
		//info about libs that are loading but not loaded yet (in case many elements depending at same time on one lib)
		//this is plain object with key of lib src and value of Defferad object resolved when lib is evaluated
		this.loadingLibs = {}; 

		//this mensure how many times pause/play was used to avoid some nested pause to resume main pause		
		this.observerPauseDeep = 0;

		//list of selectors to watch to add controllers
		this.itemObservers = {};

		//mutation observer instance with callback of handling mutations
		this.controllerObserver = new MutationObserver(function(mutations) {
			_this.filterMutations(mutations);			
		});
		
		

		//on document ready - initialize Controller Manager	
		$(function(){
			//get all libs we have now
			$("script[src]").each(function(){
				_this.loadedLibs.push( $(this).attr("src") );
			});			

			//_this.stopObserver();

			_this.startObserver();
			$.when( _this.init( $( _this.config.observeRoot ) ) ).done(function(){
				$("body").addClass("controllers-initialized").triggerHandler('controller.firstinit.done');
			})


		});

	}



	window.ControllerManagerClass.prototype = {
		helpers : {
			//take input like "myobj.someFunc" and return what would console return, but prevent from any state change like myobj++ or myobj = sth
			interpretVariableAddress : function(input) {
				var reg = /\+|\-|\*|\/|\(|\=|\+/; //if any action
				if ( input.match(reg) ) return false;
				var result = eval(input);
				if ( result ) {
					result.sourceVariable = input;					
					return result;
				} else {
					return false;
				}
			}
		},
		//start new controllers observer
		startObserver : function(){
			this.observerPauseDeep++;			
			if ( this.observerPauseDeep >= 0 ) {				
				this.controllerObserver.observe(document, this.config.observeSettings); //observe DOM for new items
			}
		},
		//stop observer
		stopObserver : function(){
			this.observerPauseDeep--;
			this.controllerObserver.disconnect();
		},
		loadLib : function(libSrc) {			
			var _this = this;			
			
			var loadingLib = $.Deferred();
			if ( _this.loadedLibs.indexOf(libSrc) !== -1 ) {				
				return loadingLib.resolve();
			};
			//check if it is loading by something else
			if ( typeof _this.loadingLibs[libSrc] !== "undefined" ) {				
				$.when( _this.loadingLibs[libSrc] ).done(function(){
					loadingLib.resolve();
				});
			} else { //we need to load script				
				//let other know we're loading this script
				_this.loadingLibs[libSrc] = loadingLib;

				var scr  = document.createElement('script');				   
				scr.src = libSrc;
				scr.async = false; // optionally

				$("head").append(scr);


				loadingLib.resolve();	//resolve promise

				
			};	
			return loadingLib;			
		},
		loadLibs : function(arrayOfLibSrc) {
			var loadingLibs = $.Deferred();



			var _this = this;
			var libsLoadingsArray = [];
			
			if ( !arrayOfLibSrc.length ) {
				loadingLibs.resolve();
				return loadingLibs;
			} 

			

			$.each(arrayOfLibSrc, function(i, libSrc){				
				$.when.apply( $ , libsLoadingsArray ).done(function(){					
					var libLoading = _this.loadLib(libSrc);
					libsLoadingsArray.push(libLoading);
					//if started to load last lib
					if ( i == arrayOfLibSrc.length - 1 ) {
						$.when(libLoading).done(function(){							
							loadingLibs.resolve();
						});						
					}					
				}).fail(function(){	

					loadingLibs.reject();
				})
			});



			return loadingLibs;
		},
		applyItemObservers : function(items) {
			var observers = this.itemObservers;
			var cacheItems = items;

			items.add("*",items).each(function(){
				var t = $(this);
				$.each( observers , function(selector, controllerVariable){
					if ( t.is(selector) ) {
						t.addController(controllerVariable);
					}
				});
			});

			return items;
		},
		//addItemObserver("input", "mycontrollers.input") will make every input on page have proper controller
		addItemObserver : function(selector, controller) {
			//get actual selector observers
			var arrayOfControllers = typeof this.itemObservers[selector] == "undefined" ? [] : this.itemObservers[selector];
			//add new
			arrayOfControllers.push(controller);
			this.itemObservers[selector] = arrayOfControllers; //save data
			if ( this.config.enableItemObservers ) $(selector).addController(controller); //if already have some items to manage - apply new controllers
		},
		filterMutations : function(mutations){
			//analize if mutation is correct
			//filter items to init (not [controllers-loading], not [controllers-loaded]) having data-controller attr
			//send items to handleSIngleItemMutation
			
			var filteredItems = $();
			for (var i = 0; i < mutations.length; i++) {
				var mutation = mutations[i];

				//make sure we're not analizing not proper mutation (even that they attributes are natively filterd tho)
				if ( mutation.type == "attributes" && mutation.attributeName !== "data-controller" ) continue;

				//basing of type, get items of mutation to analize. If attr was changed - item itself needs checking, if something added - children to check
				var mutatedElements = mutation.type == "attributes" ? [mutation.target] : mutation.addedNodes;
				var t = this;

				$.each(mutatedElements, function(i,mutatedElement){
					mutatedElement = $(mutatedElement);
					setTimeout(function(){
						t.init( t.filterItems( mutatedElement )[0] );	
					} , 0);
				});
				//filteredItems = this.filterItems( $("*", mutatedElements).add(mutatedElements) );
			}

			return filteredItems;
		},
		getItemControllers : function(item, onlyLeftToLoad) {
			var controllersObjects = [];
			var item = item.eq(0);

			var data = {
				"controller" : item.attr("data-controller"),
				"loading" : item.attr("data-controller-loading"),
				"loaded" : item.attr("data-controller-loaded")
			};				

			var controllersVars = data.controller.replace(/\s/g, "").split(",");
			var controllersLoadedAttrVars = data.loaded ? data.loaded.replace(/\s/g, "").split(",") : [];

			for (var i = 0; i < controllersVars.length; i++) {				
				if ( !onlyLeftToLoad || controllersLoadedAttrVars.indexOf( controllersVars[i] ) == -1 ) {
					var controllerObject = this.helpers.interpretVariableAddress( controllersVars[i] );
					if ( controllerObject ) controllersObjects.push(controllerObject);					
				}				
			};

			return controllersObjects;
		},
		onceInitController : function(controller) {
			if ( controller && typeof controller.controllerInit == "function" && this.controllersInitialized.indexOf(controller.sourceVariable) == -1 ) {
				this.controllersInitialized.push(controller.sourceVariable);
				controller.controllerInit.apply(controller, this);
			}
		},	
		filterItems : function(items, includeChilds){
			

			items = this.applyItemObservers(items); //check if some items needs controllers to add before we check controllers

			includeChilds = typeof includeChilds == "undefined" ? true : includeChilds;

			var filterSelector = "*[data-controller]:not([data-controller-loading]):not(.controller-init-error):not(body .svg *):not(g):not(svg):not(pre *):not(code *)";

			var itemsToPass = includeChilds ? $(filterSelector, items).add(items) : $(items);




			itemsToPass = itemsToPass.filter(filterSelector).filter(function(){
				return $(this).parents(".dont-init-child-controllers").length == 0;
			});
			
			var firstPass = itemsToPass.filter(function(){				
				var t = $(this);
				var data = {
					"controller" : t.attr("data-controller"),
					"loading" : t.attr("data-controller-loading"),
					"loaded" : t.attr("data-controller-loaded")
				};

				if ( !data.controller ) return false;
				if ( data.loading ) return false;

				var controllers = data.controller.replace(/\s/g, "").split(",");
				for (var i = 0; i < controllers.length; i++) {
					if ( !data.loaded || data.loaded.indexOf( controllers[i] ) == -1 ) return true;
				};
				return false;
			});			

			// var secondPass = firstPass.filter(function(){				
			// 	var controlledChildren = $("[data-controller], [data-controller-loading]" , this);
			// 	var haveItemsFromFirstPassInsideSelf = controlledChildren.is(firstPass);
			// 	return !haveItemsFromFirstPassInsideSelf
			// });
			//2nd pass items needs to be inited first, and then rest of them
			return [ firstPass , firstPass ];
		},	
		init : function(items){
			var itemsToInit = this.filterItems( items );			
			if ( !itemsToInit[0].length ) return;
			return $.when(this.applyControllersToItemsSet( itemsToInit ));
		},
		applyControllersToItemsSet : function(items){
			var _this = this;
			
			var applying = [];

			if ( !items[0].length ) return;

			items[0].each(function(){
				var item = $(this);
				var controllers = _this.getItemControllers(item, true);

				$.each(controllers, function(i, controller){
					var singleApplying = _this.applySingleControllerToItem(item, controller);
					applying.push(singleApplying);;
				});
			});

			return $.when.apply( $ , applying );
		},
		applySingleControllerToItem : function(item, controller) {
			//console.log(controller.sourceVariable);
			var neededLibs = controller.libs || [];
			var _this = this;
			var applying = $.Deferred();

			//make sure that item need init 
			if ( !_this.filterItems( item )[0].length ) {
				return applying.resolve();
			}
			
			item.attr("data-controller-loading", "true");
			
			$.when( this.loadLibs(neededLibs) ).done(function(){				
				_this.onceInitController(controller);

				$.ajaxRecord(controller.sourceVariable);
				

				//_this.stopObserver();

					//console.log( item.is("[data-controller-loading]") );
					//if ( !item.attr("data-controller-loaded") || item.attr("data-controller-loaded").indexOf(  ) ) {
						try {
							controller.init.apply( controller , [item , _this]);
						} catch(e) {
							item.addClass('controller-init-error');
							if ( controller.error ) controller.error.apply( controller , [item , e , _this]);			
							console.log(e);
						} finally {
							item.addLoadedController( controller.sourceVariable , controller )
							item.removeAttr("data-controller-loading");
						}
						
					//}


				//_this.startObserver();


				$.when( $.ajaxExecuted(controller.sourceVariable) ).done(function(){
					//item.triggerHandler('controller.init.done').triggerHandler("controller.ajax.done");
					$.when( _this.init( item ) ).done(function(){						
						item.triggerHandler('controller.init.done');
						item.triggerHandler('controller.ajax.done');

						applying.resolve();
					});

					
					
				});
				
			});
			return applying;
		}
	}

	$.fn.addLoadedController = function(controllerVariable, controllerObject){
		return $(this).each(function(){
			var t = $(this);
			t[0].controllerObject = t[0].controllerObject ? t[0].controllerObject : {};
			t[0].controllerObject[controllerVariable] = controllerObject;
			var initializedControllers = t.attr('data-controller-loaded') ? t.attr('data-controller-loaded').split(",") : [];
			initializedControllers.push(controllerVariable);
			t.attr('data-controller-loaded', initializedControllers.join(","));
		});
	};

	$.fn.addController = function(controller){
		return $(this).each(function(){
			var t = $(this);
			var controllers = t.attr("data-controller") ? t.attr("data-controller").split(",") : [];
			if ( !t.hasController(controller) ) controllers.push(controller);
			t.attr("data-controller", controllers.join(",") );
		});
	};
	
	$.fn.removeController = function(controller){
		return $(this).each(function(){
			var t = $(this);
			var controllers = t.attr("data-controller") ? t.attr("data-controller").replace(/\\W/g, "").split(",") : [];
			var loadedControllers = t.attr("data-controller-loaded") ? t.attr("data-controller-loaded").replace(/\\W/g, "").split(",") : [];
			
			controllers.splice( controllers.indexOf(controller) , 1);
			loadedControllers.splice( loadedControllers.indexOf(controller) , 1);
			t.attr("data-controller", controllers.join(",").trim() );
			t.attr("data-controller-loaded", loadedControllers.join(",").trim() );

			if ( !t.attr("data-controller") ) {
				t.removeAttr('data-controller');
			}
			if ( !t.attr("data-controller-loaded") ) {
				t.removeAttr('data-controller-loaded');
			}

		});
	};



	$.fn.hasController = function(controller){		
		var t = $(this).eq(0);
		var controllers = t.attr("data-controller") ? t.attr("data-controller").split(",") : [];
		for (var i = controllers.length - 1; i >= 0; i--) {			
			if ( controllers[i] && controller && controllers[i].trim() == controller.trim() ) return true;
		};
		return false;
	}

	window.ControllerManager = new window.ControllerManagerClass();

})(jQuery);