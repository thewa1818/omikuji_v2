$(".omikuji_title").on("click", function () {
  $(".omikuji_kekka").fadeIn();
  $("#sound1").get(0).play();
  $(".close_btn").fadeIn();

  const random = Math.floor(Math.random() * 5);

  if (random === 0) {
    console.log("大吉です");
    $(".omikuji_kekka").html("<img src='img/daikichi.png'>");
    $(".omedetou").fadeIn(5000);
    $(".omedetou").css("display", "block");
  } else if (random === 1) {
    console.log("中吉です");
    $(".omikuji_kekka").html("<img src='img/chukichi.png'>");
    $(".omedetou").fadeIn(5000);
    $(".omedetou").css("display", "block");
  } else if (random === 2) {
    console.log("吉です");
    $(".omikuji_kekka").html("<img src='img/kichi.png'>");
    $(".maamaa").fadeIn(5000);
    $(".maamaa").css("display", "block");
  } else if (random === 3) {
    console.log("小吉です");
    $(".omikuji_kekka").html("<img src='img/chokichi.png'>");
    $(".maamaa").fadeIn(5000);
    $(".maamaa").css("display", "block");
  } else if (random === 4) {
    console.log("末です");
    $(".omikuji_kekka").html("<img src='img/suekichi.png'>");
    $(".donnmai").fadeIn(5000);
    $(".donnmai").css("display", "block");
  }
});

$(".close_btn").on("click", function () {
  $(".omikuji_kekka").fadeOut();
  $(".close_btn").fadeOut();
  $(".omedetou").hide();
  $(".maamaa").hide();
  $(".donnmai").hide();
});

$(".btn1").on("click", function () {
  $(".header_list").slideToggle(1000);
  $(".btn1").fadeOut(1000);
  $(".btn2").fadeIn(1000);
});
$(".btn2").on("click", function () {
  $(".header_list").slideToggle(1000);
  $(".btn2").fadeOut(1000);
  $(".btn1").fadeIn(1000);
});

$(".twitter_img").on("click", function () {
  $(this).addClass("twt");
  $(".twitter_text").fadeIn(1000);
  $(".twitter_text").css("display", "block");
});

$(".twitter_img").on("mouseout", function () {
  $(this).removeClass("twt");
  $(".twitter_text").css("display", "none");
});

$(".instagram_img").on("click", function () {
  $(this).addClass("inst");
  $(".instagram_text").fadeIn(1000);
  $(".instagram_text").css("display", "block");
});

$(".instagram_img").on("mouseout", function () {
  $(this).removeClass("inst");
  $(".instagram_text").css("display", "none");
});

$(".line_img").on("click", function () {
  $(this).addClass("lin");
  $(".line_text").fadeIn(1000);
  $(".line_text").css("display", "block");
});

$(".line_img").on("mouseout", function () {
  $(this).removeClass("lin");
  $(".line_text").css("display", "none");
});

$(".facebook_img").on("click", function () {
  $(this).addClass("fb");
  $(".facebook_text").fadeIn(1000);
  $(".facebook_text").css("display", "block");
});

$(".facebook_img").on("mouseout", function () {
  $(this).removeClass("fb");
  $(".facebook_text").css("display", "none");
});

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".qustion").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});

$(".q1").on("click", function () {
  $(".first_img").hide(1000);
  $(".happy_img").show(1000);
  $(".q_box").hide(1000);
  $(".question_title").text("どうもありがとう!!");
  $(".qustion_text").text("またあそんでね!!!");
  $(".qustion_wrap").addClass("after");
});

$(".q2").on("click", function () {
  $(".first_img").hide(1000);
  $(".soso_img").show(1000);
  $(".q_box").hide(1000);
  $(".question_title").text("あばよ!!!!!!!");
  $(".qustion_text").text("ありがとう、メリー号");
  $(".qustion_wrap").addClass("after");
});

$(".q3").on("click", function () {
  $(".first_img").hide(1000);
  $(".sad_img").show(1000);
  $(".q_box").hide(1000);
  $(".question_title").text("ごめんちゃい");
  $(".qustion_text").text("シャーッハッハッハ");
  $(".qustion_wrap").addClass("after");
});

// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name:setting-value
//   });
// });

$(".slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(window).scroll(function () {
  var pos = $(window).scrollTop();
  // スクロール位置の研さ
  if (150 < pos) {
    // スクロールが200を超えたら「▲ ページの先頭へ」をゆっくりフェードインする (表示)
    $(".scl_top").fadeIn("slow");
  } else {
    // それ以外だったらフェードアウトする (非表示)
    $(".scl_top").fadeOut("slow");
  }
});

$(".scl_top a").click(function () {
  // ページの先頭へ移動する
  $("html,body").animate({ scrollTop: 0 }, "fast");
});
