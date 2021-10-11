/* 네비 */
// state = 1;
// $(window).on('scroll', function() {
//     if ( $(window).scrollTop() >= $("#content1").position().top && state == 1 ) {
//         state = 0
//         $("#gnb").css({ top: -50 })
//                  .animate({ top: 0 })
//                  .addClass('effect')


//     } else if ( $(window).scrollTop() < $("#content1").position().top && state == 0 ) {
//         $("#gnb").removeClass('effect')
//         state = 1;
//     }
// })


/* 마우스휠 효과 */




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
    $("#scroll").animate({ top: 70 }, 600)
    .animate({ top: 60 }, 600)
}
setInterval(down, 600)

/* 더보기버튼 마우스오버 */
// $("#menu a").hover(function() {
//     $(this).css({ opacity: 0, width: 150, right: 0 })
//            .text("HCS 전체메뉴")
//            .animate({ opacity: 1 })
// }, function() {
//     $(this).stop()
//            .css({ opacity: 0, width: 100, right: 10 })
//            .text("more")
//            .animate({ opacity: 1 })
// })





