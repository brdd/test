(function($) {


	var custom_uploader;
	$(document).on('click','*[fw-media-library]', function(e) {
	    var btn = $(this);
	    custom_uploader = wp.media.frames.file_frame = wp.media({
	        title: 'Media Library',
	        // library: {
	        //     author: userSettings.uid // specific user-posted attachment
	        // },
	        button: {
	            text: 'Choose File'
	        },
	        multiple: false
	    });

	    //When a file is selected, grab the URL and set it as the text field's value
	    custom_uploader.on('select', function() {
	        attachment = custom_uploader.state().get('selection').first().toJSON();
	        btn.trigger('media-library.select', attachment);
	    });

	    //Open the uploader dialog
	    // Set post id
	    //wp.media.model.settings.post.id = $('#post_ID').val();
	    custom_uploader.open();
	});


})(jQuery);
