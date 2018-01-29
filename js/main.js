// Navigation

var nav = document.querySelector('.cd-auto-hide-header');
var position = 0;

window.addEventListener('scroll', function(){
    if (window.pageYOffset >= ($('.cd-auto-hide-header').data('threshold'))) {
        nav.classList += (" minified");
    }
    else {
        nav.classList.remove("minified");
    }
})


jQuery(document).ready(function($){
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 650;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
        nav.classList += (" minified");
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});


// Arc text
var arc = document.querySelector('.arc');
$(arc).arctext({radius: 1500});

// Countup

var countUpElement1 = document.querySelector('.count-up1');
var countUpElement2 = document.querySelector('.count-up2');
var countUpElement3 = document.querySelector('.count-up3');
var countUpElement4 = document.querySelector('.count-up4');

var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.', 
};
var demo1 = new CountUp(countUpElement1, 0, 18, 0, 2.5, options);
if (!demo1.error) {
  demo1.start();
} else {
  console.error(demo1.error);
}
var demo2 = new CountUp(countUpElement2, 0, 2014, 0, 2.7, options);
if (!demo2.error) {
  demo2.start();
} else {
  console.error(demo2.error);
}
var demo3 = new CountUp(countUpElement3, 0, 473, 0, 2.9, options);
if (!demo3.error) {
  demo3.start();
} else {
  console.error(demo3.error);
}
var demo4 = new CountUp(countUpElement4, 0, 2800, 0, 3.1, options);
if (!demo4.error) {
  demo4.start();
} else {
  console.error(demo4.error);
}

// Timeline

jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

// Twitter Feed

//Follow Button Effect

$(document).ready(

	function iniciar(){
	$('#doherty-follow').on("click", function(){
		$('#doherty-follow').css('background-color','#34CF7A');
		$('#doherty-follow').html('<div class="icon-ok"></div> Following');
	});	
	$('#pltw-follow').on("click", function(){
		$('#pltw-follow').css('background-color','#34CF7A');
		$('#pltw-follow').html('<div class="icon-ok"></div> Following');
	});	
	$('#d11-follow').on("click", function(){
		$('#d11-follow').css('background-color','#34CF7A');
		$('#d11-follow').html('<div class="icon-ok"></div> Following');
	});	
	}

);

// Home Slider

$('.slick-codepen').slick({
  draggable: false,
  accessibility: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 3,
  speed: 800,
  arrows: true,
  dots: true,
  swipeToSlide: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3200
});


var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slick-codepen').slickPrev(); };
function nextSlideAnimation() { $('.slick-codepen').slickNext(); };

$('.slick-prev').on('mouseenter', function() {
  prevSlideInterval = window.setInterval(function(){ prevSlideAnimation() }, 200);
});

$('.slick-prev').on('mouseleave', function() {
  window.clearInterval(prevSlideInterval);
});

$('.slick-next').on('mouseenter', function(){
  nextSlideInterval = window.setInterval(function(){ nextSlideAnimation() }, 200);
});

$('.slick-next').on('mouseleave', function() {
  window.clearInterval(nextSlideInterval);
});

// Smooth-Scroll Button

$(function(){
    $("#scroll").click(function(e){
        e.preventDefault();
        $path=$("#colorado-springs-parallax").offset().top;
        $('body,html').animate({scrollTop:$path},1500);
    });
});

$(function(){
    $("#btn-timeline").click(function(e){
        e.preventDefault();
        $path=$("#cd-timeline").offset().top;
        $('body,html').animate({scrollTop:$path},1500);
    });
});

// Scroll to Top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});

$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});

// Scroll Indicator

jQuery(function($){
	var growmouseover = [true, '25px'] 
	var $indicatorparts = $(document.body).append('<div class="scrollindicator"><div class="scrollprogress"></div></div>')
	var $indicatorMain = $indicatorparts.find('div.scrollindicator')
	var $scrollProgress = $indicatorparts.find('div.scrollprogress')
	var indicatorHeight = $indicatorMain.outerHeight()
	var transformsupport = $scrollProgress.css('transform')
	transformsupport = (transformsupport == "none" || transformsupport =="")? false: true

	function syncscrollprogress(){
	    var winheight = $(window).height()
	    var docheight = $(document).height()
	    var scrollTop = $(window).scrollTop()
	    var trackLength = docheight - winheight
	    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
			$scrollProgress.css('transform', 'translate3d(' + (-100 + pctScrolled) + '%,0,0)')
	}
	
	if (transformsupport){
		$indicatorMain.css('visibility', 'visible')
	
		$indicatorMain.on('click', function(e){
			var trackLength = $(document).height() - $(window).height()
			var scrollamt = e.clientX/($(window).width()-32) * trackLength
			$('html,body').animate({scrollTop: scrollamt}, 'fast')
		})
	
		if (growmouseover[0]){
			$indicatorMain.on('mouseenter touchstart', function(e){
				$(this).css('height', growmouseover[1])
				e.stopPropagation()
			})
		
			$indicatorMain.on('mouseleave', function(e){
				$(this).css('height', indicatorHeight)
			})
			
			$(document).on('touchstart', function(e){
				$indicatorMain.css('height', indicatorHeight)
			})
		}
		
		$(window).on("scroll load", function(){
			requestAnimationFrame(syncscrollprogress)
		})
	}
})

// Chapter History Home-Hero Slider

jQuery(document).ready(function($) {
  //on mobile - open/close primary navigation clicking/tapping the menu icon
  $('.cd-primary-nav').on('click', function(event) {
    if ($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
  });

  //upload videos if not on mobile
  uploadVideo($('.cd-hero-slider'));

  //change visible slide
  $('.cd-slider-nav li').on('click', function(event) {
    event.preventDefault();
    var selectedItem = $(this);
    if (!selectedItem.hasClass('selected')) {
      // if it's not already selected
      var selectedPosition = selectedItem.index(),
        activePosition = $('.cd-hero-slider .selected').index();
      if (activePosition < selectedPosition) {
        nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
      } else {
        prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
      }

      updateNavigationMarker(selectedPosition + 1);
    }
  });

  function nextSlide(container, pagination, n) {
    var visibleSlide = container.find('.selected'),
      navigationDot = pagination.find('.selected');

    visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      visibleSlide.removeClass('is-moving');
    });

    container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
    navigationDot.removeClass('selected')
    pagination.find('li').eq(n).addClass('selected');

    checkVideo(visibleSlide, container, n);
  }

  function prevSlide(container, pagination, n) {
    var visibleSlide = container.find('.selected'),
      navigationDot = pagination.find('.selected');

    visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      visibleSlide.removeClass('is-moving');
    });

    container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
    navigationDot.removeClass('selected');
    pagination.find('li').eq(n).addClass('selected');

    checkVideo(visibleSlide, container, n);
  }

  function uploadVideo(container) {
    container.find('.cd-bg-video-wrapper').each(function() {
      var videoWrapper = $(this);
      if (videoWrapper.is(':visible')) {
        // if visible - we are not on a mobile device 
        var videoUrl = videoWrapper.data('video'),
          video = $('<video loop><source src="' + videoUrl + '.mp4" type="video/mp4" /><source src="' + videoUrl + '.webm" type="video/webm" /></video>');
        video.appendTo(videoWrapper);
      }
    });
  }

  function checkVideo(hiddenSlide, container, n) {
    //check if a video outside the viewport is playing - if yes, pause it
    if (hiddenSlide.find('video').length > 0) hiddenSlide.find('video').get(0).pause();

    //check if the select slide contains a video element - if yes, play the video
    if (container.children('li').eq(n).find('video').length > 0) container.children('li').eq(n).find('video').get(0).play();
  }

  function updateNavigationMarker(n) {
    $('.cd-marker').removeClassPrefix('item').addClass('item-' + n);
  }

  $.fn.removeClassPrefix = function(prefix) {
    //remove all classes starting with 'prefix'
    this.each(function(i, el) {
      var classes = el.className.split(" ").filter(function(c) {
        return c.lastIndexOf(prefix, 0) !== 0;
      });
      el.className = $.trim(classes.join(" "));
    });
    return this;
  };
});

// Chapter History Timeline

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
