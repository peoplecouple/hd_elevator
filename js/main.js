$(function () {
  ////////////////////////////////////////////////
  $('.top_close_btn').on('click', function () {
    // $('.TopBanner').slideUp();
    $('.TopBanner').addClass('on');
    $('.Section01').addClass('on');
  })

  $('.Header .top_service .lan strong').on('click', function () {
    $(this).toggleClass('on')
    $('.Header .top_service .lan').toggleClass('on')
  })

  $('.Header .top_search strong').on('click', function () {
    $(this).toggleClass('on')
    $('.Header .top_search .search_box').toggleClass('on')
  })

  $('.Header .top_service .lan_box li').on('click', function () {
    $('.Header .top_service .lan strong').removeClass('on')
    $('.Header .top_service .lan').removeClass('on')
  })



  $('.main_slider').on('init reinit afterChange', function (e, s, c) {
    var current = $('.main_slider .slick-current');
    current.addClass('on').siblings().removeClass('on')
    $('.slide_dots li').eq(c).addClass('on').siblings().removeClass('on')
    $('.Section01 .num').html('0' + ((c ? c : 0) + 1) + '<span> / 0' + s.slideCount + '</span>');
  })

  $('.main_slider').slick({
    arrows: false,
  });

  $('.Section01 .slide_handler button:first-child').on('click', function () {
    $('.main_slider').slick('slickPrev')
  })

  $('.Section01 .slide_handler button:last-child').on('click', function () {
    $('.main_slider').slick('slickNext')
  })



  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    sct > 0
      ? $('.Header').addClass('on')
      : $('.Header').removeClass('on')

    sct > 800
      ? $('.to_top').fadeIn()
      : $('.to_top').fadeOut();
  })

  $('.left_slider').slick({
    asNavFor: '.right_slider',
    arrows: false,
    fade: true,
  })

  $('.right_slider').slick({
    asNavFor: '.left_slider',
    slidesToShow: 5,
    arrows: false,
  })

  $('.center_slider').on('init reinit afterChange', function (e, s, c) {
    var current = $('.center_slider .slick-current')
    console.log(current)
    current.addClass('on').siblings().removeClass('on')
    $('.Section04 .num').html('0' + (c ? c + 1 : 1) + '<span> / 0' + s.slideCount + ' </span>')
    //text하면 텍스트만 들어가고 html하면 태그도 들어갈 수 있다
    $('.Section04 .content_box>div').eq(c).addClass('on').siblings().removeClass('on')
  })

  $('.center_slider').slick({
    centerMode: true,
    centerPadding: '310px',
    arrows: false,
    dots: true,
  })


  $('.slider_handler>i:nth-child(1)').on('click', function () {
    $('.left_slider').slick('slickPrev')
  })

  $('.slider_handler>i:nth-child(2)').on('click', function () {
    $('.left_slider').slick('slickNext')
  })

  $('.Section04 .slider_handler>i:nth-child(1)').on('click', function () {
    $('.center_slider').slick('slickPrev')
  })

  $('.Section04 .slider_handler>i:nth-child(2)').on('click', function () {
    $('.center_slider').slick('slickNext')
  })


  $('.movie_case').YTPlayer({
    videoURL: 'https://youtu.be/raw3Nu0_mBQ',
    containment: 'self',
    showControls: false,
    autoPlay: true,
    mute: true,
    playOnlyIfVisible: true,
  });

  var switchMovie = true;
  $('.movie_handler button').on('click', function () {
    $(this).toggleClass('on');
    switchMovie
      ? $('.movie_case').YTPPause()
      : $('.movie_case').YTPPlay();
    switchMovie = !switchMovie
  })


  $('.Footer .ft_top .right li').on('click', function () {
    var idx = $(this).index();
    if ($(this).hasClass('on')) {
      $(this).removeClass('on')
      $('.Footer .ft_top .content>ul').eq(idx).removeClass('on')
    } else {
      $(this).addClass('on').siblings().removeClass('on')
      $('.Footer .ft_top .content>ul').eq(idx).addClass('on').siblings().removeClass('on')
    }
  })

  $('#FL').on('change', function () {
    var link = $(this).val();
    link && window.open(link)
  })

  $('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
  })

  $('.popup').on('wheel', function (e) {
    e.preventDefault()
  })

  $('.popup button').on('click', function () {
    $('.popup').hide();
  })

  var getCookie = $.cookie('popup')
  if (!getCookie) {
    $('.popup').show();
  }

  $('.popup input').on('change', function () {

  })

  ////////////////////////////////////////////////
})



//////popup
// var date = new Date();
// date.setTime(date.getTime() + 60 * 1000);

// console.log(date)
// console.log($.cookie('todayPopUp'));
// var TCK = $.cookie('todayPopUp');
// if (!TCK) {
//     $('.today_pop').show();
// }

// $('#Today').on('change', function () {
//     $.cookie('todayPopUp', '팝업쿠키', { expires: date });
//     $('.today_pop').hide();
//     //출처: https://offbyone.tistory.com/176 [쉬고 싶은 개발자:티스토리]
// })
