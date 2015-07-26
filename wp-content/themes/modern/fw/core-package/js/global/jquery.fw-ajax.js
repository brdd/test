(function($) {

	window.fw = window.fw || {};

	fw.ajax = function(action, data, settings, json) {


		var requestData = {};

		if ( typeof data == "object" ) {
			requestData = $.extend({}, requestData, data);
		}

		requestData.action = action;

		var req = {
			data: requestData,
			url: fw.FW_AJAX,
			type: "POST",
			cache: false,
			//contentType: false,
			//processData: false
		};


		var req = $.extend({}, req, settings);

		if ( data === true || settings === true || json === true ) {
			req.dataType = "json";
		}

		fw.debug( "Ajax call sending \n" , req);
		return $.ajax(req).always(function(data) {
			fw.debug( "Ajax call finished \n" , data);
		});
	}

	fw.getHtml = function(url, onlyMain) {
		
		if ( typeof onlyMain == "undefined" ) {
			onlyMain = true;
		}

		return fw.ajax("fw-ajax", {
			"fw-ajax" : onlyMain
		}, {
			"url" : url
		});
	}

	fw.partials = function(name, items) {
		var waitingForPartial = $.Deferred();
		if ( !items || !items.length ) return waitingForPartial.reject();
		var data = {
			"partial" : name,
			"items" : items
		}


		fw.ajax("fw-partials", data).done(function(data){
			waitingForPartial.resolve(data);
		}).fail(function(data){
			waitingForPartial.reject(data);
		});

		return waitingForPartial;
	}

	fw.updateAttachments = function(progressCb) {
		var updating = $.Deferred();

		fw.ajax( "fw-import-get-attachments-to-update" , true ).done(function(list){
			var total = list.length;

			if ( !total ) {
				updating.resolve();
				return;
			}

			var current = 0;
			updating.progress = current / total * 100;

			$.each(list, function(i, attachment){

				var id = attachment.ID;

				fw.ajax("fw-import-update-attachment", { id : id }).always(function(){
					current++;
					updating.progress = (current / total * 100).toFixed(2);

					if ( typeof progressCb == "function" ) progressCb(updating.progress);

					if ( current == total ) {
						updating.resolve();
					}
				});
			});
		});

		return updating;
	}

	fw.partial = function(name, data) {
		var waitingForPartial = $.Deferred();
		data = data || {};
		data.partial = name;

		fw.ajax("fw-partial", data).done(function(data){
			waitingForPartial.resolve(data);
		}).fail(function(data){
			waitingForPartial.reject(data);
		});

		return waitingForPartial;
	}

	fw.post = function(id) {
		var waitingForPost = $.Deferred();


		fw.ajax("fw-post", { id : id }, true ).done(function(data){
			waitingForPost.resolve(data);
		}).fail(function(data){
			waitingForPost.reject(data);
		});

		return waitingForPost;
	}

	fw.partialModal = function(name, title, data, resolvable){

		var modal = fw.modal("", title, resolvable);

		var modalContent = $(".fw-modal-content", modal).hide();

		var loader = fw.div("fw-loader fw-loader-center").appendTo(modal);

		var loading = fw.partial(name, data).done(function(partial){
			loader.remove();
			modalContent.append(partial).show();
			modal.trigger('fw.partialModalReady', { partial : name }).trigger('fw.partialModalReady.' + name);
		});

		modal.data("fw-modal-loading", loading);

		return modal;
	}

	fw.shortcode = function(shortcode){
		var waitingForPartial = $.Deferred();
		fw.ajax("fw-shortcode", {
			"shortcode" : shortcode
		}).done(function(data){
			var domObj = $("<div>").html(data);
			var result = $("> *", domObj).length == 1 ? $("> *", domObj) : result;
			//result.addClass("fw-ajax-shortcode");
			fw.debug( "Got shortcode" , result);
			waitingForPartial.resolve(result);
		}).fail(function(data){
			waitingForPartial.reject(data);
		});

		return waitingForPartial;		
	}

	fw.option = function(name) {
		return fw.ajax("fw-option", {option : name});
	}

	fw.login = function(login, pass, remember, redirect) {
		return fw.ajax("fw-login", {
			"login" : login,
			"pass" : pass,
			"remember" : remember
		}, true).done(function(data){
			if ( data.result == "ok" ) {
				if ( redirect || typeof redirect == "undefined" ) {
					document.location = fw.FW_HOME_URL;
				}
			}
		});
	}

	fw.logout = function(redirect) {
		return fw.ajax("fw-logout").done(function(data){
			if ( redirect || typeof redirect == "undefined" ) {
				document.location = fw.FW_HOME_URL;
			}		
		});
	}

	fw.register = function(login, email) {
		return fw.ajax("fw-register", {
			"login" : login,
			"email" : email
		});
	}

	fw.search = function(keyword,type,settings) {
		var data = {
			keyword : keyword
		};
		if ( type ) data.type = type;
		if ( settings ) data.settings = settings;
		return fw.ajax("fw-search", data, true);
	}

	fw.weather = function(city) {
		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&callback=?';
		return $.getJSON(apiUrl).done(function(data){
			fw.debug(data);
		});
	}

	fw.weatherMetric = function(city) {
		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&callback=?';
		return $.getJSON(apiUrl).done(function(data){
			fw.debug(data);
		});
	}	

	// fw.updateUser = function(user) {

	// }

	fw.upload = function(file, createAttachment) {
		name = file.name;
		size = file.size;
		type = file.type;

		var imageUploading = $.Deferred();

		if(file.name.length < 1) {

		} else if(file.size > 2000000) {
			imageUploading.reject("File is to big");
		} else if(file.type != 'image/png' && file.type != 'image/jpg' && !file.type != 'image/gif' && file.type != 'image/jpeg' ) {
			imageUploading.reject("File doesnt match png, jpg or gif");
		} else { 			
    		var formData = new FormData();
    		formData.append("file", file);
    		formData.append("action", "fw-upload");
    		formData.append("attachment" , createAttachment);

    		fw.ajax("fw-upload", formData, {
    			contentType: false,
    			processData: false,
    			dataType: "json"    			
    		}).done(function(data){
    			imageUploading.resolve(data);
    		}).fail(function(data){
    			imageUploading.reject(data);
    		})
	    }

	    return imageUploading;
	}

	$(document).on("click", "a[ajax]", function(e){
		if ( !$("body").hasClass('fw-ajax-enabled') ) return;
		var isLocalComp = new RegExp(location.host);

		var a = $(this);
		var href = a.attr("href");

		var pageCont = $("[fw-ajax-page]").eq(0);

		if( isLocalComp.test(href) && pageCont.length ){

			e.preventDefault();

			var loader = $(fw.loader).clone();

			$("body").append( loader.addClass('fw-ajax-loader') );

			pageCont.attr('page-loading', "true");
			
		    
			href = href.addUrlParam("fw-ajax", "true");

			$.get(href).done(function(data){



				var page = $(data).filter("[fw-ajax-page]").html();

				pageCont.empty().append(page);
				setTimeout(function() {
					pageCont.removeAttr('page-loading');
				}, 120);
				loader.remove();
				document.body.scrollLeft = 0;
				document.body.scrollTop = 0
				
			}).fail(function(){
				pageCont.removeClass('page-loading');
			}).always(function(){
				$(window).resize();
			});
		    
		    return false;
		} else {
			$("body").addClass('fw-page-leaving');
		}
	});

	$(document).on("submit", "form[ajax-action]", function(e){
		var form = $(this);
		var action = form.attr("ajax-action");

		if ( action ) {
			e.preventDefault();
			e.stopPropagation;
			var data = form.serializeObject();
			form.trigger("fw-send-start").addClass('fw-form-sending');

			var loader = $(fw.fullScreenLoader).clone().hide().appendTo("body").fadeIn(200).addClass('fw-ajax-fullscreen-loader');

			fw.ajax(action, data).done(function(){
				form.trigger("fw-send-end").removeClass('fw-form-sending');
				loader.fadeOut(200, function(){ $(this).remove() });
			});

			return false;
		}
	});

})(jQuery);
