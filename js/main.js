
//scroll wheel
 $(window).scroll(function(){
        
	var stiky = $('.menu');
	$(window).on('scroll', function(){
		if($(window).scrollTop()>65){ stiky.addClass('sticky');}
		else stiky.removeClass('sticky');
	});
   
});
//type js plugins
$(function(){
	$(".typed").typed({
		strings: ["Developer", "Designer", "Kamran Mirzə"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

//aos plugin
AOS.init();

//counter plugins
var a = 0;
$(window).on('scroll',function() {
	var Top = $('#counter').offset().top - window.innerHeight;
	
    if (a == 0 && $(window).scrollTop() > Top) {
        $('.count-val').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        
                    }

                });
        });
        a = 1;
    }
});

//isotop plugins tab menu

$(window).on('load', function() {
    var $container = $('.work-filter');
    var $filter = $('#menu-filter');
    
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});
    $filter.find('a').on("click", function() {
		var selector = $(this).attr('data-filter');
		
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear'
			}
		});
		
        return false;
	});
	
});

//photo plugin gallery

$('.mag-pop').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	  }
  });

//down slide slow

$(".main-menu a.nav-link").click(function(e){
	e.preventDefault();
	var elem = $($(this).attr("href"));
	console.log(elem);
	$("html, body").animate({scrollTop: elem.offset().top-65},"slow");
});

//active section color

$('body').scrollspy({
	target:'#navbarNav',
	offset: 0

});

$(".blog-video").modalVideo({channel:'youtube'});