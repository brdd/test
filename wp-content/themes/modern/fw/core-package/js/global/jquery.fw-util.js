if("undefined"==typeof net){var net={}}if(!net.brehaut){net.brehaut={}}(function(){"use strict";function p(e,t){e=e.toString();var n=[];for(var r=0,i=Math.max(t-e.length,0);r<i;r++){n.push("0")}n.push(e);return n.join("")}function d(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function v(e){return e.replace(/^\s+|\s+$/g,"")}function m(e){return function(){var t=this.clone();e.apply(t,arguments);return t}}function g(e,t){function s(e){return function(){return e.apply(this[i](),arguments)}}function v(){}function m(){return new v}var n=h(f);var r=[];var i="to"+d(e);for(var o in t)if(t.hasOwnProperty(o)){n[o]=t[o];var u=n[o];if(o.slice(0,1)=="_"){continue}if(!(o in f)&&"function"==typeof u){f[o]=s(u)}else if("function"!=typeof u){r.push(o);var a="get"+d(o);var p="set"+d(o);f[a]=s(n[a]=function(e){return function(){return this[e]}}(o));f[p]=s(n[p]=function(e){return function(t){var n=this.clone();n[e]=t;return n}}(o))}}v.prototype=n;c[e]=m;n.clone=function(){var e=m();for(var t=0,n=r.length;t<n;t++){var i=r[t];e[i]=this[i]}return e};f[i]=function(){return m()};l.push(n);return n}function b(e){return f.fromObject(e)}var e={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370D8",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#D87093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};var t="(?:\\+|-)?\\d+";var n="(?:\\+|-)?\\d*\\.\\d+";var r="(?:"+t+")|(?:"+n+")";t="("+t+")";n="("+n+")";r="("+r+")";var i=r+"%";var s="\\s*?";var o=new RegExp(["^hsl(a?)\\(",r,",",i,",",i,"(,(",r,"))?\\)$"].join(s));var u=new RegExp(["^rgb(a?)\\(",t,",",t,",",t,"(,(",r,"))?\\)$"].join(s));var a=new RegExp(["^rgb(a?)\\(",i,",",i,",",i,"(,(",r,"))?\\)$"].join(s));var f;var l=[];var c={};if(!this.object){this.object=function(e){function t(){}t.prototype=e;return new t}}var h=this.object;f={fromObject:function(e){if(!e){return h(f)}for(var t=0,n=l.length;t<n;t++){var r=l[t].fromObject(e);if(r){return r}}return h(f)},toString:function(){return this.toCSS()}};var y=null;g("RGB",{red:0,green:0,blue:0,alpha:0,getLuminance:function(){return this.red*.2126+this.green*.7152+this.blue*.0722},blend:function(e,t){e=e.toRGB();t=Math.min(Math.max(t,0),1);var n=this.clone();n.red=n.red*(1-t)+e.red*t;n.green=n.green*(1-t)+e.green*t;n.blue=n.blue*(1-t)+e.blue*t;n.alpha=n.alpha*(1-t)+e.alpha*t;return n},fromObject:function(e){if(e instanceof Array){return this._fromRGBArray(e)}if("string"==typeof e){return this._fromCSS(v(e))}if(e.hasOwnProperty("red")&&e.hasOwnProperty("green")&&e.hasOwnProperty("blue")){return this._fromRGB(e)}},_stringParsers:[function(e){function n(t,n){var r=e.match(t);if(!r||!!r[1]+!!r[5]===1){return null}var i=c.RGB();i.red=Math.min(1,Math.max(0,r[2]/n));i.green=Math.min(1,Math.max(0,r[3]/n));i.blue=Math.min(1,Math.max(0,r[4]/n));i.alpha=!!r[5]?Math.min(Math.max(parseFloat(r[6]),0),1):1;return i}e=v(e);var t=n(u,255);if(t){return t}return n(a,100)},function(t){var n=t.toLowerCase();if(n in e){t=e[n]}if(!t.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){return}t=t.replace(/^#/,"");var r=t.length/3;var i=Math.pow(16,r)-1;var s=c.RGB();s.red=parseInt(t.slice(0,r),16)/i;s.green=parseInt(t.slice(r*1,r*2),16)/i;s.blue=parseInt(t.slice(r*2),16)/i;s.alpha=1;return s},function(e){if(e.toLowerCase()!=="transparent")return;return y}],_fromCSS:function(e){var t=null;for(var n=0,r=this._stringParsers.length;n<r;n++){t=this._stringParsers[n](e);if(t)return t}},_fromRGB:function(e){var t=c.RGB();t.red=e.red;t.green=e.green;t.blue=e.blue;t.alpha=e.hasOwnProperty("alpha")?e.alpha:1;return t},_fromRGBArray:function(e){var t=c.RGB();t.red=Math.max(0,Math.min(1,e[0]/255));t.green=Math.max(0,Math.min(1,e[1]/255));t.blue=Math.max(0,Math.min(1,e[2]/255));t.alpha=e[3]!==undefined?Math.max(0,Math.min(1,e[3])):1;return t},toCSSHex:function(e){e=e||2;var t=Math.pow(16,e)-1;var n=["#",p(Math.round(this.red*t).toString(16).toUpperCase(),e),p(Math.round(this.green*t).toString(16).toUpperCase(),e),p(Math.round(this.blue*t).toString(16).toUpperCase(),e)];return n.join("")},toCSS:function(e){if(this.alpha===1)return this.toCSSHex(e);var t=255;var n=["rgba(",Math.max(0,Math.min(t,Math.round(this.red*t))),",",Math.max(0,Math.min(t,Math.round(this.green*t))),",",Math.max(0,Math.min(t,Math.round(this.blue*t))),",",Math.max(0,Math.min(1,this.alpha)),")"];return n.join("")},toHSV:function(){var e=c.HSV();var t,n,r;t=Math.min(this.red,this.green,this.blue);n=Math.max(this.red,this.green,this.blue);e.value=n;r=n-t;if(r==0){e.hue=e.saturation=0}else{e.saturation=r/n;if(this.red==n){e.hue=(this.green-this.blue)/r}else if(this.green==n){e.hue=2+(this.blue-this.red)/r}else{e.hue=4+(this.red-this.green)/r}e.hue=(e.hue*60+360)%360}e.alpha=this.alpha;return e},toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}});y=f.fromObject({red:0,blue:0,green:0,alpha:0});g("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:m(function(e){var t=(this.hue+e)%360;if(t<0){t=(360+t)%360}this.hue=t}),devalueByAmount:m(function(e){this.value=Math.min(1,Math.max(this.value-e,0))}),devalueByRatio:m(function(e){this.value=Math.min(1,Math.max(this.value*(1-e),0))}),valueByAmount:m(function(e){this.value=Math.min(1,Math.max(this.value+e,0))}),valueByRatio:m(function(e){this.value=Math.min(1,Math.max(this.value*(1+e),0))}),desaturateByAmount:m(function(e){this.saturation=Math.min(1,Math.max(this.saturation-e,0))}),desaturateByRatio:m(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1-e),0))}),saturateByAmount:m(function(e){this.saturation=Math.min(1,Math.max(this.saturation+e,0))}),saturateByRatio:m(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1+e),0))}),schemeFromDegrees:function(e){var t=[];for(var n=0,r=e.length;n<r;n++){var i=this.clone();i.hue=(this.hue+e[n])%360;t.push(i)}return t},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(e){if(e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("value")){var t=c.HSV();t.hue=e.hue;t.saturation=e.saturation;t.value=e.value;t.alpha=e.hasOwnProperty("alpha")?e.alpha:1;return t}return null},_normalise:function(){this.hue%=360;this.saturation=Math.min(Math.max(0,this.saturation),1);this.value=Math.min(Math.max(0,this.value));this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var e=c.RGB();var t;var n,r,i,s;if(this.saturation===0){e.red=this.value;e.green=this.value;e.blue=this.value;e.alpha=this.alpha;return e}var o=this.hue/60;t=Math.floor(o);n=o-t;r=this.value*(1-this.saturation);i=this.value*(1-this.saturation*n);s=this.value*(1-this.saturation*(1-n));switch(t){case 0:e.red=this.value;e.green=s;e.blue=r;break;case 1:e.red=i;e.green=this.value;e.blue=r;break;case 2:e.red=r;e.green=this.value;e.blue=s;break;case 3:e.red=r;e.green=i;e.blue=this.value;break;case 4:e.red=s;e.green=r;e.blue=this.value;break;default:e.red=this.value;e.green=r;e.blue=i;break}e.alpha=this.alpha;return e},toHSL:function(){this._normalise();var e=c.HSL();e.hue=this.hue;var t=(2-this.saturation)*this.value,n=this.saturation*this.value;if(t&&2-t){n/=t<=1?t:2-t}t/=2;e.saturation=n;e.lightness=t;e.alpha=this.alpha;return e},toHSV:function(){return this.clone()}});g("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:m(function(e){this.lightness=Math.min(1,Math.max(this.lightness-e,0))}),darkenByRatio:m(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1-e),0))}),lightenByAmount:m(function(e){this.lightness=Math.min(1,Math.max(this.lightness+e,0))}),lightenByRatio:m(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1+e),0))}),fromObject:function(e){if("string"==typeof e){return this._fromCSS(e)}if(e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("lightness")){return this._fromHSL(e)}},_fromCSS:function(e){var t=v(e).match(o);if(!t||!!t[1]+!!t[5]===1){return null}var n=c.HSL();n.hue=(t[2]%360+360)%360;n.saturation=Math.max(0,Math.min(parseInt(t[3],10)/100,1));n.lightness=Math.max(0,Math.min(parseInt(t[4],10)/100,1));n.alpha=!!t[5]?Math.max(0,Math.min(1,parseFloat(t[6]))):1;return n},_fromHSL:function(e){var t=c.HSL();t.hue=e.hue;t.saturation=e.saturation;t.lightness=e.lightness;t.alpha=e.hasOwnProperty("alpha")?e.alpha:1;return t},_normalise:function(){this.hue=(this.hue%360+360)%360;this.saturation=Math.min(Math.max(0,this.saturation),1);this.lightness=Math.min(Math.max(0,this.lightness));this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var e=c.HSV();e.hue=this.hue;var t=2*this.lightness,n=this.saturation*(t<=1?t:2-t);e.value=(t+n)/2;e.saturation=2*n/(t+n)||0;e.alpha=this.alpha;return e},toRGB:function(){return this.toHSV().toRGB()}});b.isValid=function(e){var t,n=b(e);var r=0;for(t in n){if(n.hasOwnProperty(t)){r++}}return r>0};net.brehaut.Color=b}).call(net.brehaut);var module;if(module){module.exports.Color=net.brehaut.Color};



(function($) {



	window.fw = window.fw || {};

	fw.color = net.brehaut.Color;

	//check youtube url. return id of vid or false
	String.prototype.youtubeId = function(){
		var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		return (this.match(p)) ? RegExp.$1 : false;
	}

	//check vimeo url. return id or false
	String.prototype.vimeoId = function () {
		var m = this.match(/^.+vimeo.com\/(.*\/)?([^#\?]*)/);
		return m ? m[2] || m[1] : false;
	}

	String.prototype.dashed = function(){
		return this.replace(/\s+/g, '-').toLowerCase();
	}

	String.prototype.cssBg = function() {
		return "url(" + this + ")";
	}

	String.prototype.slugify = function() {
		var str = this;
		str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();

		// remove accents, swap ñ for n, etc
		var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
		var to   = "aaaaaeeeeeiiiiooooouuuunc------";
		for (var i=0, l=from.length ; i<l ; i++) {
		  str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}

		str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		  .replace(/\s+/g, '-') // collapse whitespace and replace by -
		  .replace(/-+/g, '-'); // collapse dashes

		return str;

	}

	String.prototype.fuzzy = function(keyword, tag) {
			var str = this + "";
			var arr = keyword.split("");
		    var result = [];
		    var match = 0;
		    str.toLowerCase().split('').forEach( function( letter, idx ){
		        if( arr.indexOf( letter ) == 0 ){
		            match++;
		            result.push( '<b>' + str[idx] +'</b>' );
		            arr.shift();
		        }
		        else {    
		            result.push( str[idx] );
		         }
		    });


		    return match == keyword.length ? result.join('') : false;
		
	}

	String.prototype.addUrlParam = function (paramName, paramValue)
	{
	    var url = this;
	    if (url.indexOf(paramName + "=") >= 0)
	    {
	        var prefix = url.substring(0, url.indexOf(paramName));
	        var suffix = url.substring(url.indexOf(paramName));
	        suffix = suffix.substring(suffix.indexOf("=") + 1);
	        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
	        url = prefix + paramName + "=" + paramValue + suffix;
	    }
	    else
	    {
	    if (url.indexOf("?") < 0)
	        url += "?" + paramName + "=" + paramValue;
	    else
	        url += "&" + paramName + "=" + paramValue;
	    }
	    return url;
	}

	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	String.prototype.ucfirst = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	// Removes any white space to the right and left of the string
	String.prototype.trim = function() {
	    return this.replace(/^\s+|\s+$/g, "");
	}


	// Removes any white space to the left of the string
	String.prototype.ltrim = function() {
	    return this.replace(/^\s+/, "");
	}


	// Removes any white space to the right of the string
	String.prototype.rtrim = function() {
	    return this.replace(/\s+$/, "");
	}


	// Truncate a string to a given length
	String.prototype.truncate = function(len) {
	    if (this.length > len) {
	    	return this.substring(0, len);
	    }
	    return this;
	};

	String.prototype.is = function(what) {

		what = what.map(function(i){
			return i.toString();
		})

		if ( typeof what == "string" ) return this == what;
		if ( typeof what == "object" ) return what.indexOf(this.toString()) !== -1;
		return false;
	}

	String.prototype.stripAnchor = function(){
		  return this.slice(this.lastIndexOf('#') + 1);
	}

	String.prototype.isEmail = function() {
	    return this.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig);
	};

	String.prototype.removeLastWord = function() {
		var lastIndex = this.lastIndexOf(" ")

		return this.substring(0, lastIndex);
	}

	String.prototype.startsWith = function (str){
	  return this.indexOf(str) == 0;
	};

	String.prototype.endsWith = function(suffix) {
	    return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};

	String.prototype.isUrl = function() {
		var re = new RegExp("^(http|https)\://([a-zA-Z0-9\.\-]+(\:" +
		    "[a-zA-Z0-9\.&%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|" +
		    "[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2" +
		    "[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\." +
		    "(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|" +
		    "[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]" +
		    "{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z" +
		    "0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name" +
		    "|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-z" +
		    "A-Z0-9\.\,\?\'\\\+&%\$#\=~_\-]+))*$");
		return this.match(re);
	}

	String.prototype.contains = function(what){
		return this.indexOf(what) > -1;
	}

	String.prototype.is = function(what) {

		what = what.map(function(i){
			return i.toString();
		})

		if ( typeof what == "string" ) return this == what;
		if ( typeof what == "object" ) return what.indexOf(this.toString()) !== -1;
		return false;
	}

	String.prototype.maybeBool = function(){

		if ( ["yes", "true", "1", "on"].has( this.toLowerCase() ) ) return true;
		if ( ["no", "false", "0", "off"].has( this.toLowerCase() ) ) return false;

		return this;

	}

	Array.prototype.flatten = function() {
	  return this.reduce(function(accum, elem) { return accum.concat(elem); }, []);
	};

	Array.prototype.has = function (value) {
		return this.indexOf(value) !== -1;
	};

	Array.prototype.removeItem = function(item) {
	    var i = 0;
	    while (i < this.length) {
	        if (arr[i] == item) {
	            this.splice(i, 1);
	        } else {
	            i++;
	        }
	    }
	    return this;
	};

	Array.prototype.empty = function(){
		this.length = 0;
		return this;
	}

	Array.prototype.shuffle = function() {
	  var i = this.length, j, temp;
	  if ( i == 0 ) return this;
	  while ( --i ) {
	     j = Math.floor( Math.random() * ( i + 1 ) );
	     temp = this[i];
	     this[i] = this[j];
	     this[j] = temp;
	  }
	  return this;
	}



	fw.newTab = function(url) {
		fw.elem("a").attr("href", url).attr("target", "_blank")[0].click();
	}

	fw.rand = function(min, max) {
		return Math.random() * (max - min) + min;
	}

	fw.isMobile = function(){
		return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
	}

	fw.mensure = function(cb) {
		if ( typeof cb !== "function" ) return false;

		var args = [];
		Array.prototype.push.apply( args, arguments );

		args.shift();
		
		var start = new Date().getTime();
		cb.apply(cb, args);
		return new Date().getTime() - start;
	}

	fw.clone = function(obj) {
	    var temp = obj.constructor(); // changed

	    for(var key in obj) {
	        if(obj.hasOwnProperty(key)) {
	            temp[key] = fw.clone(obj[key]);
	        }
	    }
	    return temp;
	}


	fw.isDomElem = function(obj) {
		if(obj instanceof HTMLCollection && obj.length) {
			for(var a = 0, len = obj.length; a < len; a++) {
				if(!checkInstance(obj[a])) {
					return false;   
				}
			}     
			return true;                
		} else {
			return checkInstance(obj);  
		}

		function checkInstance(elem) {
			if((elem instanceof jQuery && elem.length) || elem instanceof HTMLElement) {
				return true;  
			}
			return false;        
		}
	}

	fw.getYoutubeVideoInfo = function(id, callback) {
		id = id.youtubeId() ? id.youtubeId() : id;
		return $.ajax({
				url: "http://gdata.youtube.com/feeds/api/videos/" + id + "?v=2&alt=jsonc",
				dataType: "jsonp",
				success: function (data) { callback(data); }
		});
	}

	fw.getVimeoVideoInfo = function(id, callback) {
		id = id.vimeoId() ? id.vimeoId() : id;
		return $.getJSON('http://www.vimeo.com/api/v2/video/' + id + '.json?callback=?', function(data) {
			callback(data);
		});
	}

	fw.getVideoInfo = function(url) {
		
		var gettingInfo = $.Deferred();
		
		if ( url.youtubeId() ) {
			fw.getYoutubeVideoInfo(url, function(data){
				var data = data.data;
				data.cover = data.thumbnail.hqDefault || data.thumbnail.sqDefault;
				data.aspectRatio = data.aspectRatio == "widescreen" ? 16 / 9 : 4 / 3;
				gettingInfo.resolve(data);
			});
		} else if ( url.vimeoId() ) {
			fw.getVimeoVideoInfo(url, function(data){
				var data = data[0];
				data.cover = data.thumbnail_large;
				data.aspectRatio = data.width / data.height;
				gettingInfo.resolve(data);
			});
		} else {
			gettingInfo.reject();
		}

		return gettingInfo;
	}

	fw.lorem = function(length) {
		length = length || 100;
		var fullLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus est a massa posuere fermentum. Fusce consectetur urna et dolor bibendum viverra. Aliquam erat volutpat. Fusce sit amet convallis lorem. Nam at felis non erat tristique scelerisque vel quis lacus. Sed nibh magna, tincidunt eu odio at, maximus pellentesque lacus. Integer ac semper lacus, nec tristique arcu.";
		return fullLorem.truncate(length).removeLastWord() + ".";
	}

	fw.div = function(classes) {
		return $("<div>").addClass(classes);
	}

	fw.span = function(classes) {
		return $("<span>").addClass(classes);
	}

	fw.elem = function(type, classes) {
		return $("<" + type + ">").addClass(classes)
	}

	fw.default = function(variable, value) {
		return typeof variable == "undefined" ? value : variable;
	}

	fw.modal = function(content, title, resolvable){
		
		$(".fw-modal-container").remove(); //close existing modals

		var container = fw.div("fw-modal-container fade-in").attr("resolvable","true").appendTo("body").click(function(e){
			//if( e.target !== this ) $(this).remove()			
		}).on("resolve click", function(e){
			if ( $(this).is(e.target) ) {
				modalClose();
			}
		});


		var modal = fw.div("fw-modal").attr("role","dialog").appendTo(container);

		var modalClose = function(){
			container.fadeOut(100, function(){
				$(this).remove();
			});
		};

		var modalContent = fw.div("fw-modal-content fade-in").appendTo(modal).hide();

		var modalTitle = fw.div("fw-modal-title").appendTo(modalContent);

		if ( title ) modalTitle.text(title);


		if ( resolvable ) modal.attr("data-resorvable", "true").on("click", "*[data-value]", function(){
			var t = $(this);
			var value = t.data("value");
			if ( value ) {
				container.trigger("resolve", { value : value }).remove();
			}
		});

		var closeBtn = fw.div("fw-modal-close-btn").click(function(){
			container.trigger("fw.modalClose").trigger('fw.modalClose.' + name);
			modalClose();
		}).appendTo(modal).attr("id", "fw-modal-close-btn");

		modalContent.append(content);

		this.initEvents = this.initEvents || $(document).on("keyup", function(e){
			if ( e.keyCode == fw.key.ESC ) {
				var openedModals = $(".fw-modal-container");
				openedModals.triggerHandler("close");
				modalClose();
			}
		});

		return container;

	}

	fw.urlParam = function(sParam) {
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam)
			{
				return sParameterName[1];
			}
		}
	}

	fw.bid = function(cb, time, key) {
		var key = typeof key == "undefined" ? "__global" : key; 
		this.register = this.register || {};

		var timeout = this.register[key];

		clearTimeout(timeout);

		this.register[key] = setTimeout(function(){
			cb();
		}, time);
	}

	$(document).ready(function(){
		fw.cookie = $.cookie;
		fw.removeCookie = $.removeCookie;
	});

	fw.isExternalUrl = function(url) {
		
	    var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
	    if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
	    if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"), "") !== location.host) return true;
	    return false;
		
	}



	fw.onceDone = function(action) {
		if ( !fw.once.done ) fw.once.done = {};
		var cookieDone = JSON.parse( fw.cookie("fw-done") || "{}" ) || {};
		this.once.done[action] = true;
		cookieDone[action] = true;
		fw.cookie("fw-done", JSON.stringify( cookieDone ) );
	}

	fw.once = function(action, cb, cookie) {
		if ( !this.done ) this.done = {};
		var cookieDone = JSON.parse( fw.cookie("fw-done") || "{}" ) || {};

		if ( this.done[action] || cookie && cookieDone[action] ) return;
		cookieDone[action] = true;
		this.done[action] = true;
		if ( cookie ) fw.cookie("fw-done", JSON.stringify( cookieDone ) );
		cb();
	}

	fw.debug = function(msg) {
		if ( fw.FW_DEBUG ) {
			$.each(arguments , function(key,val){
				console.log(val);
			});
		}
	}

	fw.loadImg = function(src) {
		var img = new Image();
		var loading = $.Deferred();
		img.onload = function() {
		    loading.resolve(img);
		}
		img.src = src;
		return loading;
	}

	//create new initializer, add methods to it, then call init method of it and all its methods will be auto called
	fw.initializer = function(){
		return new fw.initializerClass();
	}
	fw.initializerClass = function(){
		return this;
	}
	fw.initializerClass.prototype = {
		
		//init all functions in this object except this one
		//functions with _ on begin wont be called
		init : function(){

			$("body").trigger("initializer-start", {
				initializer : this
			});

			for(var prop in this) {					    		    	
		        if ( prop.charAt(0) !== "_" && prop != "init" && typeof this[prop] == 'function' ) {
		        	this[prop](this);		        	
		        }			    
			}

			$("body").trigger("initializer-done", {
				initializer : this
			});
		}
	}

	fw.key = {
	    'SPACE': 32,'BACKSPACE': 8,'TAB': 9,'ENTER': 13,'SHIFT': 16,'CTRL': 17,'ALT': 18,'PAUSE': 19,'CAPSLOCK': 20,'ESC': 27,'PAGEUP': 33,'PAGEDOWN': 34,'END': 35,'HOME': 36,'LEFTARROW': 37,'UPARROW': 38,'RIGHTARROW': 39,'DOWNARROW': 40,'INSERT': 45,'DELETE': 46,'0': 48,'1': 49,'2': 50,'3': 51,'4': 52,'5': 53,'6': 54,'7': 55,'8': 56,'9': 57,'A': 65,'B': 66,'C': 67,'D': 68,'E': 69,'F': 70,'G': 71,'H': 72,'I': 73,'J': 74,'K': 75,'L': 76,'M': 77,'N': 78,'O': 79,'P': 80,'Q': 81,'R': 82,'S': 83,'T': 84,'U': 85,'V': 86,'W': 87,'X': 88,'Y': 89,'Z': 90,'0NUMPAD': 96,'1NUMPAD': 97,'2NUMPAD': 98,'3NUMPAD': 99,'4NUMPAD': 100,'5NUMPAD': 101,'6NUMPAD': 102,'7NUMPAD': 103,'8NUMPAD': 104,'9NUMPAD': 105,'MULTIPLY': 106,'PLUS': 107,'MINUT': 109,'DOT': 110,'SLASH1': 111,'F1': 112,'F2': 113,'F3': 114,'F4': 115,'F5': 116,'F6': 117,'F7': 118,'F8': 119,'F9': 120,'F10': 121,'F11': 122,'F12': 123,'EQUAL': 187,'COMA': 188,'SLASH': 191,'BACKSLASH': 220
	};

	fw.time = {
		"MINUTE" : 60,
		"HOUR" : 3600,
		"DAY" : 3600 * 24,
		"WEEK" : 3600 * 24 * 7,
		"MONTH" : 3600 * 24 * 31,
		"HALF_YEAR" : 3600 * 24 * 31 * 6,
		"YEAR" : 3600 * 24 * 31 * 12
	};

})(jQuery);
