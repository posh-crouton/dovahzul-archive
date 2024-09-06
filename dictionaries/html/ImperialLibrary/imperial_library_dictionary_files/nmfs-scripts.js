jQuery(function($){
	$(document).ready(function(){

		// Set Cookie function
		function nmfsSetCookie(c_name,value,exdays) {
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			document.cookie=c_name + "=" + c_value+"; path=/";
		}

		// Get Cookie function
		function nmfsGetCookie(c_name) {
			var c_value = document.cookie;
			var c_start = c_value.indexOf(" " + c_name + "=");
			if (c_start == -1) {
			    c_start = c_value.indexOf(c_name + "=");
			}
			if (c_start == -1) {
			    c_value = null;
			}
			else {
			  	c_start = c_value.indexOf("=", c_start) + 1;
			  	var c_end = c_value.indexOf(";", c_start);
			  	if (c_end == -1) {
					c_end = c_value.length;
				}
				c_value = unescape(c_value.substring(c_start,c_end));
			}
			return c_value;
		}

		// Toggle Night Mode
		$(document).on('change', '.input-night',function(){
			if(this.checked) {
				nmfsSetCookie('night_mode','1');

				$('body').addClass('nm_active');
				$('.input-night').addClass('nm_on').attr('checked', 'checked');

			    console.log('night mode is on');
			} else {
				nmfsSetCookie('night_mode','0');

				$('body').removeClass('nm_active');
				$('.input-night').removeClass('nm_on').removeAttr('checked');

			    console.log('night mode is off');
			}
		});


		// Toggler Button
		$(document).on('click','#settings-toggle',function(e){
			e.preventDefault();
		    $(this).toggleClass('open');
		});

		// Toggle Text Size
		$(document).on('click','.nmfs-settings__text-size',function(){

			var getSize = $(this).attr('data-size');

			if( getSize == 'M' ) {
				$(this).attr('data-size','L');
				$('body').removeClass('size-M');
				$('body').addClass('size-L');

				nmfsSetCookie('text_size', 'L' );
			}

			if( getSize == 'L' ) {
				$(this).attr('data-size','XL');
				$('body').removeClass('size-L');
				$('body').addClass('size-XL');

				nmfsSetCookie('text_size', 'XL' );

			}

			if( getSize == 'XL' ) {
				$(this).attr('data-size','M');
				$('body').removeClass('size-XL');
				$('body').addClass('size-M');

				nmfsSetCookie('text_size', 'M' );
			}

		});

	});
});