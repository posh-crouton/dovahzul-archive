var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Prima Jquery functionality */

$(document).ready(function() {

	$(".enlarge a").each(function() {
		$(this).attr("href", $(this).parent(".enlarge").siblings("img").attr("src"));
		$(this).attr("rel", "lightbox_image");
		$(this).parent(".enlarge").siblings("img").css("cursor", "pointer").click(function() {
			$(this).siblings(".enlarge").children("a").click();
		});;
	});

	$(".enlarge a").fancybox({ });
	
	//$('.gallery ul li img').each(function(){ $(this).attr("rel", "gallery_image"); });
	


	$(".game_latest_screenshot a").fancybox({
		onComplete	:	function() {
				$("#fancybox-content").each(function() {
					current_html = $(this).html();
					$(this).html("<div id='lightbox'><div id='lightbox_container'><div id='loginbox'><span class='close'><a href='javascript:$.fancybox.close();'>close</a></span>" + current_html + "</div></div></div>");
				});
		}
	});
	

	$("#follow a").click(function() {
            BDM.trigger('bdaction.socialmedia');
        });

	
/*
  $(".gallery").each(function(){


		
		var num_images = $(this).find("li").length;
		var num_slides = num_images / 9;
		num_slides = Math.ceil(num_slides);
		var ul_width = num_slides * 400;
		
	//	if ( $(this).hasClass("slideable") ) {
	//		$(this).find("ul").css("width", ul_width);
	//	}
		
		if(num_slides < 2){ 
				$(this).find(".prv_button").hide();
				$(this).find(".nxt_button").hide();
				$(this).find(".gallery_controls").hide();
				$(this).after("<br style='clear: both'/>");
		} else {
				$(this).after("<div class='nxt_button'><a href='#'>&nbsp;</a></div><br style='clear:both; margin-bottom: 10px;'/>");
				$(this).before("<div class='prv_button'><a href='#'>&nbsp;</a></div>");
				$(this).css("marginLeft", 16);
		}
		
	});
	$(".gallery li").each(function(){
		if ($(this).find("a").length == 0){
			$(this).find("img").css("cursor", "pointer").attr("href", $(this).find("img").attr("src")).fancybox();
		}
	});
*/
  var gallery_num = 1;
  $(".gallery").each(function(){
		$(this).find("li").each(function(i){
			if ($(this).find("a").length == 0){
				var wrapper = $('<a href="'+$(this).find("img").attr("src")+'" rel="thumbnails_'+gallery_num+'"></a>');
				$(this).find("img").wrap(wrapper);
			} else {
				$(this).find("a").attr("rel", "thumbnails_"+gallery_num);
			}
			$(this).addClass("newgallery_li num_"+(i+1)).find("img").attr("width", 162).css("height", "auto");
			
			// Remove this line below when title tags have been added
			//$(this).find("a").attr("title", "Example caption text");
		});
		gallery_num++;
	});
	
	
	// This part just for carousel galleries, needs a class put into html
	// Then line below can be changed from $('.gallery') to $('.gallery.slideable') etc
	
	$('.gallery.slideable').each(function(){
		
		var set = 1;
		var gallery = $(this);
		var set_wrap = null;
		var width_per_wrap = 677;
		
		$(this).find("li").each(function(ii){
			
		  if(gallery.find(".gset_"+set).length == 0){
				set_wrap = $('<ul class="setwrap gset_'+set+'"></ul>');
				gallery.find("ul").not(".setwrap").append(set_wrap);
			} else {
				if(gallery.find(".gset_"+set).find("li").length == 7 || gallery.find(".gset_"+set).find("li").length == 3){
					$(this).addClass("last");
				}
				if(gallery.find(".gset_"+set).find("li").length >= 8){
					if((ii+1) < gallery.find("li").length){
					  set++;
					  set_wrap = $('<ul class="setwrap gset_'+set+'"></ul>');
				    gallery.find("ul").not(".setwrap").append(set_wrap);
					}
				}
			}
			
			$(this).appendTo(set_wrap);
			
		});
		
		$(this).find("ul").first().wrap('<div class="gallery_window"></div>');
		var gallery_window = gallery.find(".gallery_window");
		
		$(this).find("ul").not(".setwrap").css("width", Math.ceil(set * width_per_wrap)).css("margin-bottom", 10);
		var circles = $('<ul class="gallery_circles"></ul>');
		$(this).append(circles);
		for(var i = 0; i < set; i++){
			circles.append('<li class="gallery_circle"><a href="" class="nolb"></a></li>');
		}
		$(this).find(".gallery_circle").first().addClass("current");
		$(this).find(".gallery_circle").each(function(i){
			$(this).click(function(e){ 
			  e.preventDefault(); 
				gallery.find(".gallery_circle").removeClass("current");
				$(this).addClass("current");
				gallery_window.scrollTo(gallery.find(".setwrap").eq(i), 350); 
			});
		});
		gallery_window.scrollTo(0);
	});

	$(".gallery").prepend("<h3 class='gallery_title'>Gallery<span>&nbsp;</span></h3>");
	
	
  $(".gallery a").not(".nolb").fancybox({});


  $('.gameplay_image').each(function(){
		
		if($(this).find("p").length > 0){
			var caption = $(this).find("p");
			$(this).find("a").attr("title", caption.html());
		}
	});
});



function janrainWidgetOnload() {//the Engage JS calls this function at the end of widget render if it exists

}




$(document).ready(function() {

	window.engageLoginContainer = document.getElementById('janrain_login');
	window.engageRegisterContainer = document.getElementById('janrain_register');
	window.thatJanrainWidget = document.getElementById('janrainEngageEmbed');
	
	$("#loginlink").fancybox({
		'titleShow'     : false,
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack',
		'showNavArrows' : false,
		onStart		:	function() {
			engageLoginContainer.appendChild(thatJanrainWidget);
			$("#login_lightbox").show();
		},
		onClosed	:	function() {
            $("#login_lightbox").hide();
		}
	}); 
	
	$(".loginlink").fancybox({
        'titleShow'     : false,
        'easingIn'      : 'easeOutBack',
        'easingOut'     : 'easeInBack',
        'showNavArrows' : false,
        onStart     :   function() {
            engageLoginContainer.appendChild(thatJanrainWidget);
            $("#login_lightbox").show();
        },
        onClosed    :   function() {
            $("#login_lightbox").hide();
        }
    }); 
	

	if (window._reportType)
	{
		$(".reportlink").click(function() {
			_reportPK = $(this).attr("rel");
		});

		$(".reportlink").fancybox({
			'titleShow'     : false,
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'showNavArrows' : false,
			onStart		:	function() {
				$("#report_lightbox").show();
				$("#report_content_pk").val(_reportPK);
				$("#report_content_type").val(_reportType);
			},
			onClosed	:	function() {
				$("#report_lightbox").hide();
			}
		}); 
	}
	else
	{
		$(".reportlink").click(function() {
			alert("Reporting not supported here");
		});
	}


	$("#loginform").submit(function(e) {
		e.preventDefault();
		$(this).attr("action", "/accounts/login?next=" + _nextLink)
		var _errorContainer = $("#loginusernameblock").children(".errors").hide();
		$.post('/accounts/login', $(this).serialize(), function(data) {
			if (data == "1")
			{
				// Successful login, redirect
				window.location = _nextLink;
			}
			else if (data == "fp")
			{
				_errorContainer.show();
				_errorContainer.text("An email with instructions to reset your password has been sent");
			}
			else if (data == "fpe")
			{
				_errorContainer.show();
				_errorContainer.text("Your account was not found. Please try again.");
			}
			else
			{
				// Bad login
				_errorContainer.show();
				_errorContainer.text("Invalid username or password. Please try again.");
			}
		});
	});


	$("#registerform").submit(function(e) {
		e.preventDefault();
		$(this).attr("action", "/accounts/register?next=" + _nextLink)
		var _errorContainer = $(this).children(".errors");
		var SubmitButton = $(this).children(".submitbutton");
		SubmitButton.hide();
		_errorContainer.text("Processing registration...");
		$.post('/accounts/register', $(this).serialize(), function(data) {
			var pgurlpart = _nextLink.split("/");
			//check for Gamestop
			//if ((pgurlpart[4] == "redeem") && (data == "1"))
			//{
			//	window.location = "/contact";
			//}
			//else if (data == "1")
			if (data == "1")
			{
				// Successful registration, redirect
				window.location = _nextLink;
			}
			else if (data == "gs")
			{
				window.location = "/accounts/purchases/";
			}
			else
			{
				// Bad login
				_errorContainer.show();
				_errorContainer.text(data);
				SubmitButton.show();
			}
		});
	});
	
	$("#agecheckform").submit(function(e) {
        e.preventDefault();
        $(this).attr("action", "/accounts/register?next=" + _nextLink)
        var _errorContainer = $(this).children(".errors").hide();
        $.post('/accounts/agecheck', $(this).serialize(), function(data) {
            var pgurlpart = _nextLink.split("/");
            //check for Gamestop
            //if ((pgurlpart[4] == "redeem") && (data == "1"))
            //{
            //  window.location = "/contact";
            //}
            //else if (data == "1")
            if (data == "1")
            {
                // Birth date is valid, so show register form
                $("#age_check_lightbox").hide();
                $("#showregisterformlink").click();
            }
            else if (data == "gs")
            {
                window.location = "/accounts/purchases/";
            }
            else
            {
                // Bad login
                _errorContainer.show();
                _errorContainer.text(data);
            }
        });
    });





	$("#showregisterformlink").fancybox({
		'titleShow'     : false,
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack',
		'showNavArrows' : false,
		onStart		:	function() {
			$("#register_lightbox").show();
			engageRegisterContainer.appendChild(thatJanrainWidget);
		},
		onClosed	:	function() {
            $("#register_lightbox").hide();
		}
	});
	
	$("#registerlink").fancybox({
        'titleShow'     : false,
        'easingIn'      : 'easeOutBack',
        'easingOut'     : 'easeInBack',
        'autoDimensions': false,
        'width'         : 300,
        onStart     :   function() {
            $("#age_check_lightbox").show();
            $("#fancybox-right").hide();
            $("#fancybox-left").hide();
            engageRegisterContainer.appendChild(thatJanrainWidget);
        },
        onClosed    :   function() {
            $("#age_check_lightbox").hide();
        }
    }); 

	$("#cartlink").fancybox({
		'titleShow'     : false,
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack',
		'showNavArrows' : false,
		onStart		:	function() {
			$("#cart_lightbox").show();
		},
		onClosed	:	function() {
            $("#cart_lightbox").hide();
		}
	}); 



	$(".login_required").click(function(e) {
		if (!_loggedIn)
		{
			e.preventDefault();
			// Applied to all links where login is required
			_nextLink = $(this).attr("href");
			$.cookie('nextlink', _nextLink, { path: '/' }); // Set a session cookie so we know where to send the user back to if they login with Janrain  
			$("#loginlink").click();
			return false;
		}
	});

	if (window.location.hash)
	{
		// There is a hash in the URL, check whether we need to show something special
		if (window.location.hash == "#cart_lightbox")
		{
			setTimeout('$("#cartlink").click();', 1000);
		}
	}





	searchIdleTimeout = false;
	$("#search_dropdown").hide();
	$("#globalsearch").keyup(function(e) {
		if ((e.which <= 90 && e.which >= 48) || (e.which == 8) || (e.which == 32)) {
			if (searchIdleTimeout)
			{
				// If there is already a timeout set
				clearTimeout(searchIdleTimeout);
			}
			searchIdleTimeout = setTimeout("doGlobalSearch()", 500);
		}
	});
});


function doGlobalSearch() {
	$("#search_dropdown").html("<p style='text-align: center;'><img src='/media/images/ajaxload_bar.gif' alt='Loading results'/></p>");
	query = $("#globalsearch").val();

	$("#search_dropdown").show();


	$.post('/quicksearch/', {'searchquery': query}, function(data) {
		$('#search_dropdown').html(data);
		$("div").bind("click.globalsearch", function() {
			$("#search_dropdown").hide();
			$("div").unbind("click.globalsearch");
		});
		$("body").bind("click.globalsearch", function() {
			$("#search_dropdown").hide();
			$("body").unbind("click.globalsearch");
		});


	});
}


function loginToRegister() {
    ShowRegisterForm();
}

function ShowRegisterForm() {
	$('#registerlink').click();
}

function ShowLoginForm() {
    $('#loginlink').click();
}

function goToNext() {
	// Go to the next page after logging in
	window.location = _nextLink;
}


$(document).ready(function() {
	$(".homepage_next").live("click", function(e) {

		var parentBlock = $(this).closest(".dynamic_block");

		var parentBlockId = parentBlock.attr("id");
		var current_page = parseInt(parentBlock.attr("rel"));
		var next_page = current_page + 1;

		parentBlock.load('/ajax/' + parentBlockId + "/" + next_page, function() {
			parentBlock.attr("rel", String(next_page));
		});

		parentBlock.fadeOut(function() {
			parentBlock.fadeIn();
		});

		e.preventDefault();
	});


	$(".homepage_prev").live("click", function(e) {
		var parentBlock = $(this).closest(".dynamic_block");
		var parentBlockId = parentBlock.attr("id");
		var current_page = parseInt(parentBlock.attr("rel"));

		var next_page = current_page - 1;

		parentBlock.load('/ajax/' + parentBlockId + "/" + next_page, function() {
				parentBlock.attr("rel", String(next_page));
				
		});
		
		parentBlock.fadeOut(function() {
			parentBlock.fadeIn();
		});
		
		e.preventDefault();
	});





	$("#forgotpasswordlink").click(function(e) {
		e.preventDefault();
		
		// Replace username field with email field and hide password field
		$(this).hide();
		$('#loginpasswordblock').remove();
		$("#loginusernameblock label").text("Your Email");
		$("#loginusernameblock input").attr({
			name: 'email',
			value: '',
			rel: 'email'});

		$("#loginaction").val("password");
		$("#loginsubmitbutton").text("Send password");

	});


});


$(document).ready(function() {
	$(".guide_contents_sectiontitle a").click(function(e) {
		e.preventDefault();
		$(this).parents("dl").toggleClass("open");
	});

	$(".guide_newformat #inguidenav ul li h2").not(".noarrow h2").click(function() {
		$(this).parent("li.sectiontype").toggleClass("active");
		if ($(this).parent("li.sectiontype").hasClass("active") && !$(this).next("dl").hasClass("open") && $(this).siblings("dl").length == 1)
		{
			// This category is now open, the subnav is not, and there is only one subnav, so save the user a click and open it
			$(this).next("dl").addClass("open");
		}
	});


});

$(document).ready(function() {

	$("#offsitefeature_link").fancybox();


	$("#offsitefeature_link").fancybox({
		'width'			: "100%",
		'titleShow'     : false,
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack',
		'showNavArrows' : false,
		onStart		:	function() {
			$("#offsitefeature_lightbox").show();
		},
		onClosed	:	function() {
            $("#offsitefeature_lightbox").hide();
		}
	}); 


	$(".offsitefeature").parent("a").click(function(e) {
		e.preventDefault();
		$("#offsitefeature_iframe").attr("src", $(this).attr("href"));
		$("#offsitefeature_link").click();
	});
});

$(document).ready(function() {
	// Handle spoilers on guide pages
	setTimeout(function() {
		$(".spoiler").each(function() {
			innerhtml =  $(this).html();
			$(this).html("<a href='#' class='spoiler_warning'><span>Spoiler Alert!</span> <p>Click to <b>view</b> text</p></a> <div class='spoiler_inner'>" + innerhtml + "</div>");
		});
		$(".spoiler_inner").hide();
	}, 500);

	$(".spoiler_warning").live("click", function(e) {
		if ($(this).siblings(".spoiler_inner").is(":visible"))
		{
			$(this).siblings(".spoiler_inner").fadeOut();
			$(this).find("b").text("show");
		}
		else
		{
			$(this).siblings(".spoiler_inner").fadeIn();
			$(this).find("b").text("hide");
		}

		e.preventDefault();
	});


	// Handle guide favourites on 2.0 guides
	$(".rmfav").hide();

	$(".favourites_box li").hover(function() {
		// In
		$(this).find(".rmfav").show(750);
	}, function() {
		// Out
		$(this).find(".rmfav").hide(750);
	});

	$(".rmfav").click(function(e) {
		e.preventDefault();
		$(this).parent("li").unbind("mouseenter").unbind("mouseleave");
		$(this).siblings("a").addClass("fav_deleted");

		$(this).hide(750, function() {
			$(this).text("Undo");
			$(this).attr("href", "?addfav=" + $(this).attr("rel") + "#favourites_box")
			$(this).unbind("click");
			$(this).show(750);
		});

		$.get($(this).attr("href"), function(data) { 

		
		}); //end .get
	}); // end .rmfav.click

});


}
/*
     FILE ARCHIVED ON 21:03:00 Nov 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:29:03 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.55
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 23.884
  LoadShardBlock: 172.407 (3)
  PetaboxLoader3.datanode: 147.363 (4)
  PetaboxLoader3.resolve: 183.663 (3)
  load_resource: 174.459
*/