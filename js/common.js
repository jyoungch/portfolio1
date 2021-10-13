/* 네비 상단 고정 */
let state = 1;
$(window).on('scroll', function() {
    if ( $(window).scrollTop() >= $("#content1").position().top && state == 1 ) {
        state = 0
        $("#header").css({ width: "100%", zIndex: 999 })
                    .animate({ top: 0 })
                    .addClass('effect')
        $("#gnb").css({ background: "#fff", height: 80, lineHeight: 4 })
    }
    else if ( $(window).scrollTop() < $("#content1").position().top && state == 0 ) {
        $("#header").removeClass('effect')
        state = 1;
    }
})

/* 서브 네비 */
$(".snb").hide();
$("#gnb").hover(function() {
    $(".snb").stop().slideToggle(200)
})

/* 네비 호버 */
$("#main li a").on("mouseenter", function() {
    $(this).animate({ color: "#ff0006" }, 100)
})

/* 이미지 슬라이드 */
let className;
let num;    

function prev() {
    $("#sliderList:not(:animated)").prepend($("#sliderList li:last"))
                    .css({ marginLeft: "-100%" })
                    .animate({ marginLeft: 0 })
}
function next() {
    $("#sliderList:not(:animated)").animate({ marginLeft: "-100%" }, 
    function() {
        $(this).append($(">li:first", this)).css({ marginLeft: 0 })
    })
}

$(".prev").on("click", function() {
    className = $("#sliderList li:last").attr("class")
    num = className.substr(6, 1) - 1;
    $("#numBtn a").removeClass("active")
    $("#numBtn a:eq("+ num +")").addClass("active")
    prev();
})
$(".next").on("click", function() {
    className = $("#sliderList li:first").attr("class")
    num = className.substr(6, 1)
    if (num == 3) num = 0;
    $("#numBtn a").removeClass('active')
    $("#numBtn a:eq(" + num + ")").addClass("active")
    next();
})
    
let timer = setInterval(next, 10000)
$("#posBtn a, #numBtn a").on("click", function(e) {
    clearInterval(timer)
    timer = setInterval(next, 10000)
    e.preventDefault();
})

$("#numBtn a").on("click", function() {
    $("#numBtn a").removeClass("active")
    $(this).addClass("active")
    let classNum = $(this).index() + 1;
    let pos = $("#sliderList .slider" + classNum).position().left;
    let addNum = classNum;
    $("#sliderList").animate({ marginLeft: -pos }, function() {
        for ( i=1; i<$("#sliderList li").length; i++ ) {
            addNum++;
            if ( addNum == $("#sliderList li").length + 1 ) {
                addNum = 1;
            }
            $("#sliderList").append($(".slider" + addNum))
        }
        $(this).css({ margin: 0 })
    })
})

/* 스크롤버튼 */
function down() {
    $("#scroll").animate({ top: 90 }, 600)
    .animate({ top: 80 }, 600)
}
setInterval(down, 600)

/* 메뉴 섹션 탭 */

$("#menuWrap li dt").on('click', function() {
    $("#menuWrap li dd").hide();
    $(this).next().show();
    $("#menuWrap li").removeClass('on')
    $(this).parent().addClass("on")
  })

// 매장 텍스트 애니메이션
// $(window).on("scroll", function() {
//     let pos = $("#content2").position().top+200;
//     if ( $(window).scrollTop() >= pos ) {
//         $("#content3 #store #locator span").css({ textIndent: -500 })
//                         .animate({ opacity: 1, textIndent: 0 }, 200)
//         console.log($(window).scrollTop())
//     }
// })






