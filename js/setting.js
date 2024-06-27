/*----------------------------------------
	Header
----------------------------------------*/
$('.main-header__mobile-icon').on('click', function () {
	$(this).toggleClass("mobile-close");
	$(".main-header__navGlobal").fadeToggle(300).toggleClass("is-show");
});


$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('.main-header').addClass('is-active');
	} else {
		$('.main-header').removeClass('is-active');
	}
});



/*----------------------------------------
	Size
----------------------------------------*/

// object fit
$(function () {
	objectFitImages('.u-img-of');
});


// matchHeight
jQuery(function ($) {
	$('.mh').matchHeight();
	$(window).on("load resize", function () {
		$('.mh').matchHeight();
	});
});



/*----------------------------------------
	Common Utility
----------------------------------------*/

// Top page ページ読み込み後のクラス付与
$(window).on('load',function() {
	setTimeout(function(){
		$('.top-mainvisual').addClass('is-active');
	},1000);
});


// Scroll animation
$(function(){
	$(window).scroll(function (){
		$('.js-scrollin').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('is-visible');
			}
		});
	});
});


// Smooth Scroll
var headerHeight = $('#main-header').outerHeight();
    
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}

$(function () {
	var headerHeight = $('#main-header').outerHeight();
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}
	
	$('.js-scroll').click(function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop: position}, 1000);
		$('.main-header__mobile-icon').removeClass("mobile-close");
		$(".main-header__navGlobal").fadeOut(300).removeClass("is-show");
	});
});

//Footer fixed button
$(function() {
	var btn = $('.js-contact');
	$(window).on('load scroll', function(){
		if($(this).scrollTop() > 200) {
			btn.addClass('is-show');
		}else{
			btn.removeClass('is-show');
		}
	});
  
  $(window).on('load scroll', function(){
      var height = $(document).height(),
          position = window.innerHeight + $(window).scrollTop(),
          footer = $(".main-footer").height();
      if ( height - position  < footer ){ 
      	btn.addClass('absolute');
      } else { 
      	btn.removeClass('absolute');
      }
  });  
});


/*----------------------------------------
	Pages
----------------------------------------*/
$('.js-gallery').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 835,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	]
});

$('.js-slider-flow').slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 2,
			  infinite: true,
			}
		  },
		{
		  breakpoint: 1100,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
            }
		},
		{
		  breakpoint: 835,
		  settings: {
			slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	]
});