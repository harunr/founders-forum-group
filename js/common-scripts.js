(function ($) {
    $(function () {

        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
                $('body').addClass("sticky");
            } else {
                $('body').removeClass("sticky");
            }
        });

        //Animate heading
        if ($('.is-splitted').length) {
            Splitting();
            gsap.from(".char", {
                duration: 0.25,
                opacity: 0,
                stagger: 0.03,
                y: 30,
                ease: "power1.inOut"
            });
        }

        var $$anim_elements = $('.common-btn');
        var $$window = $(window);
        function check_in_view() {
            var windowHeight = $$window.height();
            var windowTopPosition = $$window.scrollTop();
            var windowBottomPosition = (windowTopPosition + windowHeight);
            $.each($$anim_elements, function () {
                var $$this = $(this);
                var elementHeight = $$this.outerHeight();
                var elementTopPosition = $$this.offset().top;
                var elementBottomPosition = (elementTopPosition - elementHeight);
                var scrollPull = (elementTopPosition - windowBottomPosition) / (elementHeight);
                $$this.find('a img').css("transform", `translateX(${-scrollPull}px)`);
                if (elementTopPosition <= windowBottomPosition) {
                    $$this.find('a img').css("transform", `translateX(${-scrollPull}px)`);
                }
            });
        }
        $(window).on('scroll resize', check_in_view);
        $(window).trigger('scroll');

        var $$$anim_elements = $('.line-anim');
        var $$$window = $(window);
        function check_line_in_view() {
            var $windowHeight = $$$window.height();
            var $windowTopPosition = $$$window.scrollTop();
            var $windowBottomPosition = ($windowTopPosition + $windowHeight);
            $.each($$$anim_elements, function () {
                var $$this = $(this);
                var $elementHeight = $$this.outerHeight();
                var $elementTopPosition = $$this.offset().top;
                var $elementBottomPosition = ($elementTopPosition - $elementHeight);
                if ($elementTopPosition <= $windowBottomPosition) {
                    $$this.addClass('inview');
                }
            });
        }
        $(window).on('scroll resize', check_line_in_view);
        $(window).trigger('scroll');


        var $animation_elements = $('.anim-el');
        var $window = $(window);
        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('inview');
                }
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        $(window).on('scroll', function(){
            if($('.story-introduce-content').hasClass('inview')){
                $('.story-introduce-wrap').addClass('inview')
            }
        })
        
        
        if ($('.load-from-bottom').length) {

            var inview = function (elem) {
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).outerHeight();
                var vpTop = $(window).scrollTop();
                var vpBottom = vpTop + $(window).height();
                return elemBottom > vpTop && elemTop < vpBottom;
            };
            (function flexibleanim() {
                $(window).on("scroll", function () {
                    if (inview(".load-from-bottom-wrap")) {
                        var tr = setTimeout(function () {
                            $(function () {
                                var el = $('.load-from-bottom');
                                var index = 0;
                                var timer = window.setInterval(function () {
                                    if (index < el.length) {
                                        el.eq(index++).addClass('load-from-bottom-show');
                                    } else {
                                        window.clearInterval(timer);
                                    }
                                }, 200);
                            });
                        }, 0);
                        // $(window).off("scroll");
                    }
                });
            })();


        }
        
        if ($('.load-from-bottom-2').length) {

            var inview = function (elem) {
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).outerHeight();
                var vpTop = $(window).scrollTop();
                var vpBottom = vpTop + $(window).height();
                return elemBottom > vpTop && elemTop < vpBottom;
            };
            (function flexibleanim() {
                $(window).on("scroll", function () {
                    if (inview(".load-from-bottom-2-wrap")) {
                        var tr = setTimeout(function () {
                            $(function () {
                                var el = $('.load-from-bottom-2');
                                var index = 0;
                                var timer = window.setInterval(function () {
                                    if (index < el.length) {
                                        el.eq(index++).addClass('load-from-bottom-show');
                                    } else {
                                        window.clearInterval(timer);
                                    }
                                }, 200);
                            });
                        }, 0);
                        // $(window).off("scroll");
                    }
                });
            })();


        }
        
        
        $(window).scroll(function () {
                // The varriables
                var $titleDiv = $('.hero-content h1');
                //Get scroll position of window
                var windowScroll = $(this).scrollTop();
                //Slow scroll of social div and fade it out
                $titleDiv.css({
                    'margin-top': -(windowScroll / 1.5) + "px",
                    'opacity': 1 - (windowScroll / 550)
                });
        });
             
        if($('.hero-wrap').length){
            var bodyHeight = $('.main-wrap').outerHeight() / 2
            $(window).on('scroll', function(){
                var scrollPosY = $(this).scrollTop();
                if(scrollPosY > bodyHeight){
                    $('.hero-wrap').css('z-index', 0)
                }else{
                    $('.hero-wrap').css('z-index', 1)
                }
            })
        }
        

        if ($('.global-leaders-slider-wrap').length) {
            $('.global-leaders-slider-wrap').slick({
                dots: true,
                arrows: true,
                speed: 1000,
                infinite: false,
                navigation: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.global-leaders-slider-wrap').slick('resize');
            });
        }


        $('.popup-inner').click(function () {
            $(".popup-wrap").fadeOut();
        });
        
        $('.popup').click(function (e) {
            e.stopPropagation();
        });

        $('.popup-input-row.skip').click(function (e) {
            e.preventDefault();
            $(".popup-wrap").fadeOut();
            $(".popup-wrap.registration-completed").fadeIn();
        });


        var $window = $(window);
        $('.subnav').parent('li').addClass('has-sub-nav')
        $('.has-sub-nav a').click(function () {});
        if ($window.width() > 991) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);
                $this.find('> a').mouseenter(function () {
                    $this.find('.subnav').slideDown()
                    $this.addClass("subnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.subnav').slideUp();
                    $this.removeClass("subnavShown");
                })
            })
        }

        if ($window.width() < 992) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);
                $this.find('> span').click(function () {
                    $this.find('.subnav').slideToggle()
                    $this.toggleClass("subnavShown");
                })
            })
        }

    }) // End ready function.
})(jQuery)
