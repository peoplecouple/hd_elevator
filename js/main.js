$(function () {
  ////////////////////////////////////////////////
  $('.top_close_btn').on('click', function () {
    // $('.TopBanner').slideUp();
    $('.TopBanner').addClass('on');
    $('.Section01').addClass('on');
  })

  $('.main_slider').on('init reinit afterChange', function (e, s, c) {
    var current = $('.main_slider .slick-current');
    current.addClass('on').siblings().removeClass('on')
    $('.slide_dots li').eq(c).addClass('on').siblings().removeClass('on')
  })

  $('.main_slider').slick({
    arrows: false,
  });

  $('.Section01 .slider_handler button:first-child').on('click', function () {
    $('.main_slider').slick('slickPrev')
  })

  $('.Section01 .slider_handler button:last-child').on('click', function () {
    $('.main_slider').slick('slickNext')
  })



  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    sct > 0
      ? $('.Header').addClass('on')
      : $('.Header').removeClass('on')
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

  ////////////////////////////////////////////////
})