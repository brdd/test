(function($) {


	/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
	 * Licensed under the MIT License (LICENSE.txt).
	 *
	 * Version: 3.1.12
	 *
	 * Requires: jQuery 1.2.2+
	 */
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


	/*
	 *  Linkify - v1.1.7
	 *  Find URLs in plain text and return HTML for discovered links.
	 *  https://github.com/HitSend/jQuery-linkify/
	 *
	 *  Made by SoapBox Innovations, Inc.
	 *  Under MIT License
	 */
	!function(a,b,c){"use strict";function d(a,b){this._defaults=e,this.element=a,this.setOptions(b),this.init()}var e={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};d.prototype={constructor:d,init:function(){1===this.element.nodeType?d.linkifyNode.call(this,this.element):this.element=d.linkify.call(this,this.element.toString())},setOptions:function(a){this.settings=d.extendSettings(a,this.settings)},toString:function(){return this.element.toString()}},d.extendSettings=function(a,b){var c;b=b||{};for(c in e)b[c]||(b[c]=e[c]);for(c in a)b[c]=a[c];return b},d.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?::\\d{1,5})",")?(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),d.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,d.linkify=function(a,b){var c,e,f,g=[];this.constructor===d&&this.settings?(e=this.settings,b&&(e=d.extendSettings(b,e))):e=d.extendSettings(b),f=e.linkClass?e.linkClass.split(/\s+/):[],f.push.apply(f,e.linkClasses),a=a.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),g.push("$1<"+e.tagName,'href="http://$2$4$5$6$7"'),g.push('class="linkified'+(f.length>0?" "+f.join(" "):"")+'"'),e.target&&g.push('target="'+e.target+'"');for(c in e.linkAttributes)g.push([c,'="',e.linkAttributes[c].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));return g.push(">$2$3$4$5$6$7</"+e.tagName+">$8"),a=a.replace(d.linkMatch,g.join(" ")),a=a.replace(d.emailLinkMatch,"$1mailto:$3"),a=a.replace(/(\s){2}/g,"$1"),a=a.replace(/\n/g,e.newLine)},d.linkifyNode=function(a){var b,e,f,g,h;if(a&&"object"==typeof a&&1===a.nodeType&&"a"!==a.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(a.className)){for(b=[],g=d._dummyElement||c.createElement("div"),e=a.firstChild,f=a.childElementCount;e;){if(3===e.nodeType){for(;g.firstChild;)g.removeChild(g.firstChild);for(g.innerHTML=d.linkify.call(this,e.textContent||e.innerText||e.nodeValue),b.push.apply(b,g.childNodes);g.firstChild;)g.removeChild(g.firstChild)}else b.push(1===e.nodeType?d.linkifyNode.call(this,e):e);e=e.nextSibling}for(;a.firstChild;)a.removeChild(a.firstChild);for(h=0;h<b.length;h++)a.appendChild(b[h])}return a},d._dummyElement=c.createElement("div"),a.fn.linkify=function(b){return this.each(function(){var c;(c=a.data(this,"plugin-linkify"))?(c.setOptions(b),c.init()):a.data(this,"plugin-linkify",new d(this,b))})},a.fn.linkify.Constructor=d,a(b).on("load",function(){a("[data-linkify]").each(function(){var b,c=a(this),d=c.attr("data-linkify"),e={tagName:c.attr("data-linkify-tagname"),newLine:c.attr("data-linkify-newline"),target:c.attr("data-linkify-target"),linkClass:c.attr("data-linkify-linkclass")};for(var f in e)"undefined"==typeof e[f]&&delete e[f];b="this"===d?c:c.find(d),b.linkify(e)})}),a("body").on("click",".linkified",function(){var c=a(this),d=c.attr("href"),e=/^mailto:/i.test(d),f=c.attr("target");return e?b.location.href=d:b.open(d,f),!1})}(jQuery,window,document);
	
	(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(arguments.length>1&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});	

	$.fn.nextOrFirst = function(selector)
	{
		var next = this.next(selector);
		return (next.length) ? next : this.prevAll(selector).last();
	};

	$.fn.prevOrLast = function(selector)
	{
		var prev = this.prev(selector);
		return (prev.length) ? prev : this.nextAll(selector).last();
	};

	$.fn.uniqueId = function(idlength){
		var charstoformid = '_0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
		if (! idlength) idlength = 10;

		var getId = function() {
			var uniqid = '';
			for (var i = 0; i < idlength; i++) {
			    uniqid += charstoformid[Math.floor(Math.random() * charstoformid.length)];
			}
			return uniqid;
		}

		return $(this).each(function(){
			var id = getId()

			while ( $("#"+id).length ) {
				id = getId();
			}
			$(this).attr("id", id);			
		});
	}

	$.fn.serializeObject = function()
	{
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};

	$.fn.removeSpacings = function(){
		return $(this).each(function(){
			$(this).contents().filter(function(){ return this.nodeType == 3 && this.nodeValue.trim().length == 0 }).remove();
		});
	}

	$.loadImage = function(url, cb) {
		var img = $("<img>").attr("src", url).css({
			pos: 'fixed',
			left: '-10000px',
			width: "1px",
			height: "1px"
		}).appendTo("body");

		var d = $.Deferred();

		img[0].onload = function(){
			d.resolve();
			if ( typeof cb == "function" ) cb();
			img.remove();
		}
		return d;
	}

	$.fn.makeSelection = function() {
	    var doc = document;
	    var text = this[0];
	    if (doc.body.createTextRange) { // ms
	        var range = doc.body.createTextRange();
	        range.moveToElementText(text);
	        range.select();
	    } else if (window.getSelection) {
	        var selection = window.getSelection();
	        var range = doc.createRange();
	        range.selectNodeContents(text);
	        selection.removeAllRanges();
	        selection.addRange(range);

	    }
	}

	$.fn.initialize = function(init, firstInit) {
		var $t = this; //reference for deeper functions
		var selector = $t.selector; //get called selector for inits in future

		if ( typeof init !== "function" || !selector ) return $($t); //if no initialization function, no sense to continue

		// select the target node to observe
		var target = $('body')[0];

		$t.firstInitsCalled = $t.firstInitsCalled || []; //we need to collect info about firstInits that can be called only once

		//if proper firstInit and was never called before
		if ( typeof firstInit == "function" && $t.firstInitsCalled.indexOf(firstInit) == -1 ) {
			$t.firstInitsCalled.push(firstInit); //add to called list
			firstInit(); //call
		}




		$t.initData = $t.initData || {}; //we will collect inits for selectors here
		$t.initData[selector] = $t.initData[selector] || []; //if no inits yet for this selector, add empty array
		$t.initData[selector].push(init); //and add given init


		//firstly normally call it on given set as .each do, but add init function to each element called inits list
		$(this).each(function(){
			this.initsCalled = this.initsCalled || []; //if no list, add empty arrat
			if ( this.initsCalled.indexOf(init) == -1 ) { //if havent been called before
				this.initsCalled.push(init); //add to called list
				$(this).each(init); //call
			}
		});
		

		//only once initialize observer
		if ( !this.initializedObserver ) {
			this.initializedObserver = true; //dont initialize again

			// create an observer instance
			var observer = new MutationObserver(function(mutations) {
				//foreach mutation
				$.each(mutations , function(i, mutation) {
					//lets get mutation target basing of mutation type
					var target = $();
					if ( mutation.type == "attributes" ) target = $(mutation.target); //if attr changed, single target always
					//if child list, lets add all addedNodes
					if ( mutation.type == "childList" && mutation.addedNodes.length ) {
						$.each(mutation.addedNodes, function(i, addedNode){
							target = target.add(addedNode);
						});
					}

					//for each watched selector
					for ( selector in $t.initData ) {
						var inits = $t.initData[selector]; //get functions that this selector has to initialize

						//check children of elem if they match current selector
						var toInit = target.find(selector);
						//also check item itself, if it's good, add to set
						if ( target.is(selector) ) toInit = toInit.add(target);

						//for each item that match selector and is in mutated area
						toInit.each(function(){
							
							var toInitSingle = this;
							//create list of called inits if no list yet
							toInitSingle.initsCalled = toInitSingle.initsCalled || [];

							//foreach function for this selector
							$.each(inits, function(i, init){
								//if it's not yet called on this element
								if ( toInitSingle.initsCalled.indexOf(init) == -1 ) {
									toInitSingle.initsCalled.push(init); //add it to called list
									$(toInitSingle).each(init); //initialize it
								}
							});
						});
					}
				});    
			});
			 
			// configuration of the observer to be sure we dont miss possible way of adding wanted element 
			var config = { attributes: true, childList: true, characterData: false, subtree : true };
			 
			//start the observer
			observer.observe(target, config);
		}

		return $(this);
	}



	// Attrs
	// http://stackoverflow.com/questions/2048720/get-all-attributes-from-a-html-element-with-javascript-jquery
	$.fn.attrs = function(attrs) {
	    var t = $(this);
	    if (attrs) {
	        // Set attributes
	        t.each(function(i, e) {
	            var j = $(e);
	            for (var attr in attrs) {
	                j.attr(attr, attrs[attr]);
	            };
	        });
	        return t;
	    } else {
	        // Get attributes
	        var a = {},
	            r = t.get(0);
	        if (r) {
	            r = r.attributes;
	            for (var i in r) {
	                var p = r[i];
	                if (typeof p.nodeValue !== 'undefined') a[p.nodeName] = p.nodeValue;
	            }
	        }
	        return a;
	    }
	};

	$.fn.reverse = [].reverse;

	$.fn.scrollTo = function(elem, time, easing, offset) {
		var scrolling = $.Deferred();

		elem = $(this).eq(0);

		var offset = fw.default(offset, 50);

		var elemOffset = elem.offset();

		var targetOffset = {
			x : elemOffset.x + offset,
			y : elemOffset.y + offset
		};

		$('html, body').animate({
		    scrollTop: targetOffset.y,
		    scrollLeft: targetOffset.x
		}, time, easing, function(){
			scrolling.resolve();
		});

		return scrolling;
	};


	/*!
	  SerializeJSON jQuery plugin.
	  https://github.com/marioizquierdo/jquery.serializeJSON
	  version 2.1.0 (May, 2014)

	  Copyright (c) 2014 Mario Izquierdo
	  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	*/
	(function ($) {
	  "use strict";

	  // jQuery('form').serializeJSON()
	  $.fn.serializeJSON = function (options) {
	    var serializedObject, formAsArray, keys, value, f, opts;
	    f = $.serializeJSON;
	    formAsArray = this.serializeArray(); // array of objects {name, value}
	    opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}

	    serializedObject = {};
	    $.each(formAsArray, function (i, input) {
	      keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
	      value = f.parseValue(input.value, opts); // string, number, boolean or null
	      if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
	      f.deepSet(serializedObject, keys, value, opts);
	    });
	    return serializedObject;
	  };

	  // Use $.serializeJSON as namespace for the auxiliar functions
	  // and to define defaults
	  $.serializeJSON = {

	    defaultOptions: {
	      parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
	      parseBooleans: false, // convert "true", "false" to true, false
	      parseNulls: false, // convert "null" to null
	      parseAll: false, // all of the above
	      parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
	      useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
	    },

	    // Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
	    optsWithDefaults: function(options) {
	      var f, parseAll;
	      if (options == null) options = {}; // arg default value = {}
	      f = $.serializeJSON;
	      parseAll = f.optWithDefaults('parseAll', options);
	      return {
	        parseNumbers:  parseAll || f.optWithDefaults('parseNumbers',  options),
	        parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
	        parseNulls:    parseAll || f.optWithDefaults('parseNulls',    options),
	        parseWithFunction:         f.optWithDefaults('parseWithFunction', options),
	        useIntKeysAsArrayIndex:    f.optWithDefaults('useIntKeysAsArrayIndex', options)
	      }
	    },

	    optWithDefaults: function(key, options) {
	      return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
	    },

	    // Convert the string to a number, boolean or null, depending on the enable option and the string format.
	    parseValue: function(str, opts) {
	      var value, f;
	      f = $.serializeJSON;
	      if (opts.parseNumbers  && f.isNumeric(str)) return Number(str); // number
	      if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
	      if (opts.parseNulls    && str == "null") return null; // null
	      return str; // otherwise, keep same string
	    },

	    isObject:          function(obj) { return obj === Object(obj); }, // is this variable an object?
	    isUndefined:       function(obj) { return obj === void 0; }, // safe check for undefined values
	    isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
	    isNumeric:         function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions

	    // Split the input name in programatically readable keys
	    // "foo"              => ['foo']
	    // "[foo]"            => ['foo']
	    // "foo[inn][bar]"    => ['foo', 'inn', 'bar']
	    // "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
	    // "arr[][val]"       => ['arr', '', 'val']
	    splitInputNameIntoKeysArray: function (name) {
	      var keys, last, f;
	      f = $.serializeJSON;
	      if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
	      keys = $.map(name.split('['), function (key) {
	        last = key[key.length - 1];
	        return last === ']' ? key.substring(0, key.length - 1) : key;
	      });
	      if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
	      return keys;
	    },

	    // Set a value in an object or array, using multiple keys to set in a nested object or array:
	    //
	    // deepSet(obj, ['foo'], v)               // obj['foo'] = v
	    // deepSet(obj, ['foo', 'inn'], v)        // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
	    // deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
	    //
	    // deepSet(obj, ['0'], v)                                   // obj['0'] = v
	    // deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true})   // arr[0] = v
	    // deepSet(arr, [''], v)                                    // arr.push(v)
	    // deepSet(obj, ['arr', ''], v)                             // obj['arr'].push(v)
	    //
	    // arr = [];
	    // deepSet(arr, ['', v]          // arr => [v]
	    // deepSet(arr, ['', 'foo'], v)  // arr => [v, {foo: v}]
	    // deepSet(arr, ['', 'bar'], v)  // arr => [v, {foo: v, bar: v}]
	    // deepSet(arr, ['', 'bar'], v)  // arr => [v, {foo: v, bar: v}, {bar: v}]
	    //
	    deepSet: function (o, keys, value, opts) {
	      var key, nextKey, tail, lastIdx, lastVal, f;
	      if (opts == null) opts = {};
	      f = $.serializeJSON;
	      if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
	      if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }

	      key = keys[0];

	      // Only one key, then it's not a deepSet, just assign the value.
	      if (keys.length === 1) {
	        if (key === '') {
	          o.push(value); // '' is used to push values into the array (assume o is an array)
	        } else {
	          o[key] = value; // other keys can be used as object keys or array indexes
	        }

	      // With more keys is a deepSet. Apply recursively.
	      } else {

	        nextKey = keys[1];

	        // '' is used to push values into the array,
	        // with nextKey, set the value into the same object, in object[nextKey].
	        // Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
	        if (key === '') {
	          lastIdx = o.length - 1; // asume o is array
	          lastVal = o[lastIdx];
	          if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
	            key = lastIdx; // then set the new value in the same object element
	          } else {
	            key = lastIdx + 1; // otherwise, point to set the next index in the array
	          }
	        }

	        // o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
	        if (f.isUndefined(o[key])) {
	          if (nextKey === '') { // '' is used to push values into the array.
	            o[key] = [];
	          } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
	            o[key] = [];
	          } else { // for anything else, use an object, where nextKey is going to be the attribute name
	            o[key] = {};
	          }
	        }

	        // Recursively set the inner object
	        tail = keys.slice(1);
	        f.deepSet(o[key], tail, value, opts);
	      }
	    }

	  };

	}(window.jQuery || window.Zepto || window.$));

	$(document).ready(function(){
		$(document).on("click", "*[resolvable] *[resolver]", function(){
			var resolver = $(this);
			var resolvable = $(this).parents("*[resolvable]").eq(0);
			resolvable.triggerHandler('resolve', resolver.data());
		});

		$(document).on("click", "[fw-click-ajax]", function(e){
			var t = $(this);
			if ( t.attr("fw-confirm") && !confirm( t.attr("fw-confirm") ) ) return false;

			t.addClass('tertiary');

			fw.ajax( t.attr("fw-click-ajax") , t.data() ).success(function(){
				if ( t.is("[fw-redirect]") ) {
					
					if ( t.attr("fw-redirect") ) {
						window.location.href = t.attr("fw-redirect")
					} else {
						window.location.reload();
					}

				} 
			}).always(function(){
				t.removeClass('tertiary');
			})
		});




		$(document).on("load", "img", function(){
			console.log("ok");
		});

		$(document).on("mousewheel", "*[data-horizontal-scroll]", function(event, delta){

			if ( event.deltaFactor && !this.isEasedScroll ) {
				this.isEasedScroll = true;
			}

			if ( typeof fw.enableHorizontalScroll == "function" && fw.enableHorizontalScroll() == false ) return;

			if ( $(event.target).parentsUntil("[data-horizontal-scroll]").andSelf().filter(function(){
				return ( $(this).css("overflow-y") == "auto" || $(this).css("overflow-y") == "scroll" ) && $(this).outerHeight(true, true) < this.scrollHeight; 
			}).length ) return;

			//if ( event.deltaX ) return;

			var t = $(this);

			var scrollableParents = $(event.target).parents().andSelf().not("html").filter(function(){			
				return $(this).is("[data-vertical-scroll]");
			});

			if ( scrollableParents.length ) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			t.scrollTop(0);


			var distance = -delta * event.deltaFactor;

			if ( t.is("html,body") ) {
				//if ( event.deltaFactor < 5 || this.isEasedScroll ) {
					document.documentElement.scrollLeft += distance;
					document.body.scrollLeft += distance;
				// } else {
				// 	var scrollL = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
				// 	console.log(scrollL + distance, distance, scrollL);
				// 	$("html,body").stop(true,true).animate({"scrollLeft" : scrollL + distance}, 400,'easeOutQuart');
				// }

			} else {
				this.scrollLeft += distance;
			}

			return false;

		});
	});



	//showif plugin
	(function($) {

		$.fn.disable = function(){
			return $(this).each(function(){
				$("input, select, textarea", this).add( $(this).filter("input,select,textarea") ).attr("disabled", "disabled");
			});
		};

		$.fn.enable = function(){
			return $(this).each(function(){
				$("input, select, textarea", this).add( $(this).filter("input,select,textarea") ).removeAttr("disabled", false);
			});
		};


		$(document).ready(function(){



			//hide every item with show-if on beginning
			$("*[show-if], *[data-show-if]").disable().hide().each(function(){

				//add Class
				var t = $(this).addClass("show-if");

				var showif = t.attr("show-if") || t.attr("data-show-if");

				//incorrect rule
				if ( showif.split(":").length !== 2 ) return;

				//get selector
				var selector = showif.split(":")[0].trim();

				//for easier use % is for name same way as # is for id, so we need to modify %some-name to *[name=some-name]
				if ( selector.charAt(0) == "%" ) {
					selector = selector.replace("%", "*[name='") + "']";
				}

				//part after : is rule - it can be simple val or regular expression
				var condition = showif.split(":")[1];

				//watch items we need to watch
				
				var updateFunction = function(){
					var input = $(this);


					if ( input.is("[type=hidden]") ) return;

					var val = input.val();

					//console.log(input);

					if ( input.is("[type=checkbox]") ) {
						
						val = input.prop("checked") ? "on" : "off";
					}



					//if equal (no case sensitive) or match regex
					if ( val && ( val.toLowerCase() == condition.toLowerCase() || ( new RegExp(condition) ).exec( val ) ) ) {
						t.enable().show();
					} else {
						t.disable().hide();
					}
				}

				var toWatch = $(selector).each(updateFunction).on("change keyup click touchend", updateFunction);


			});

		});

	})(jQuery);



	

})(jQuery);
