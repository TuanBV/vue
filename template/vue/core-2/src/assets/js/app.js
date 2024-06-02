function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
};

jQuery(document).ready(function ($) {

    function initMenu() {
        var top_menu = "<div id='mmenu-header'><span><a href='#' class='kt-menu-toggle d-block' id='close-mmenu'><i class='fa-solid fa-xmark'></i></a><a href='#'><img src='images/logo.png'></a></span><span><a href='#' class='kt-header__account-toggle'><i class='bg-icon_notifications inline-middle ml-2'></i></a><a href='#' class='kt-header__account-toggle'><img src='images/flag-eng.png' class='inline-middle ml-2'></a>";
        top_menu = top_menu + '<a href="#" class="kt-header__account-toggle"><i class="bg-profile_circle inline-middle ml-2"></i></a></span></div>';

        // var $menu = $("#my-menu").mmenu({
        //     "offCanvas":
        //     {
        //         "clone": true
        //     }
        // }, {
        //     "navbars": [
        //         {
        //             "position": "top",
        //             "content": [
        //                 top_menu
        //             ]
        //         }
        //     ]
        // });

        // Fire the plugin
        // const menu = new Mmenu("#menu");

        // Get the API

        const menu = new Mmenu('#my-menu', {
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        top_menu
                    ]
                }
            ]
        }, {
            offCanvas: {
                clone: true
            }
        });
        const api = menu.API;
        // var api = .data("mmenu");
        $(document).on('click', '#close-mmenu', function () {
            api.close();
        })
    }


    function initFooterContactBox() {
        $('.js-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
        });
    }

    function slickInit() {
        $('.js-slick').each(function (index, ele) {
            $ele = $(ele);

            var defaultConfig = {
                "centerPadding": "0",
                "mobileFirst": true,
                "slidesToShow": "1",
                "infinite": true,
                "dots": true
            };

            if (!$ele.data('config')) {
                var config = defaultConfig;
            } else {
                try {
                    var config = $.parseJSON($ele.data('config'));
                } catch (e) {
                    console.warn(e);
                    var config = defaultConfig;
                }
            }

            if (config.mobileOnly) {
                if (isMobile()) $ele.slick(config);
            }
            else if (config.desktopOnly) {
                if (!isMobile()) $ele.slick(config);
            }
            else {
                $ele.slick(config);
            }
        });
    }

    function initFooterPanelBtn() {
        $('.js-footer-panel-btn').click(function (e) {
            e.preventDefault();

            var parent = $(this).toggleClass('opened').closest('.kt-footer-upper__heading');

            parent.siblings('.kt-footer-upper__list').slideToggle();
        });
    }

    function initVideo() {
        $('.js-kt-video-play').click(function () {
            var $mediaVideo = $(this).siblings('video');

            if (!$mediaVideo) {
                return;
            }

            var mediaVideo = $mediaVideo.get(0);

            if (mediaVideo.paused) {
                $mediaVideo.addClass('playing');
                mediaVideo.play();
            } else {
                $mediaVideo.removeClass('playing');
                mediaVideo.pause();
            }
        });
    }

    function initHomeOurProductsCarousel() {
        if (!$('.home')) return;

        var row = $('.home-our-products__row');

        row.hasClass('slick-initialized') && row.slick('unslick');

        if (window.innerWidth >= 480 && window.innerWidth < 768) {
            try {
                row.slick({
                    dots: true,
                    infinite: false,
                    arrows: false,
                });
            } catch (e) { }
        } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
            try {
                row.slick({
                    slidesToShow: 2,
                    dots: true,
                    infinite: false,
                    arrows: false,
                });
            } catch (e) { }
        } else if (window.innerWidth >= 992) {
            try {
                row.slick({
                    slidesToShow: 3,
                    dots: false,
                    infinite: false,
                    arrows: true
                });
            } catch (e) { }
        }
    }

    function initProductCategoryPageCarousel() {
        $('#main-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            mobileFirst: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('#top-recruiter-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            mobileFirst: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.product-cat-slide').slick({
            dots: true,
            infinite: false,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6
                    }
                }
            ]
        });

        $('.jobs-multiple').slick({
            "mobileFirst": true,
            "arrows": false,
            "dots": true,
            "slidesToShow": 1
        });
        $('.company-will-like-slider').slick({
            "mobileFirst": true,
            "arrows": false,
            "dots": true,
            "slidesToShow": 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
        $('.company-liked-slider').slick({
            "mobileFirst": true,
            "arrows": false,
            "dots": true,
            "slidesToShow": 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

        $(".js-tabs-item:not(:first)").hide();
        $(".js-tabs-link").on("click", function (e) {
            e.preventDefault();
            var tabLink = $(this);
            var target = $(this.hash);
            $(".js-tabs-text").removeClass("m-active");
            $(".js-tabs-item:visible").fadeOut("200", function () {
                tabLink.children().addClass("m-active");
                target.fadeIn("200", function () {
                    $(".company-will-like-slider").slick("setPosition", 0); // modified here
                });
            });
            console.log('TAP tab-link');
            $('.company-liked-slider').slick('refresh');
        });


        $('.cv-sample-slider').slick({
            "mobileFirst": true,
            "arrows": false,
            "dots": true,
            "slidesToShow": 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
        $('.parter-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
        $('.testimonials-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    function initVideoPopup() {
        $('.js-popup-play').click(function () {
            $('#js-video-modal').modal().on('shown.bs.modal', function () {
                $('#js-video-modal video')[0].play();
            });
        });
    }

    function initDevice() {
        if (isMobile()) {
            $('body').addClass('is-mobile');
        }
    }

    function initPreface() {
        $('.kt-preface__more').click(function () {
            var target = $(this).siblings('.kt-preface__text');
            var originalText = $(this).text();

            if (target.hasClass('collapsed')) {
                target.removeClass('collapsed');
                $(this).text('Thu gọn');
            } else {
                target.addClass('collapsed');
                $(this).text(originalText);
            }
        });
    }

    function enableSearch() {
        $(document).ready(function () {

            var darkClick = localStorage.getItem('darkBtnClicked');

            if (darkClick == "true") {
                $('.switch-theme-check').prop('checked', true);
            } else {
                $('.switch-theme-check').prop('checked', false);
            }

            //on click of the button add the class we need a nd set the cookies
            $('.darkmode').click(function () {
                localStorage.setItem('darkBtnClicked', false);
                $('.switch-theme-check').prop('checked', true);
            });

            $('.normalmode').click(function () {
                localStorage.setItem('darkBtnClicked', true);
                $('.switch-theme-check').prop('checked', false);
            });
        });

    }

    enableSearch();
    initVideo();
    initMenu();
    initFooterContactBox();
    slickInit();
    initFooterPanelBtn();
    initPreface();

    // Home page
    initHomeOurProductsCarousel();

    // Product category page
    initProductCategoryPageCarousel();

    initVideoPopup();
    initDevice();

    $(window).resize(function () {
        initHomeOurProductsCarousel();
    });




});
