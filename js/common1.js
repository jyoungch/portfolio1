let pos = $("#content3").position().top - 300;
let timer = 300;
console.log(pos)

$(window).on("scroll", function() {
    if ( $(window).scrollTop() >= pos && state == 1 ) {
        state = 0;
        $("#locator > p").css({ textIndent: -500 })
                        .animate({ textIndent: 0, opacity: 1 })
    }
    else if ( $(window).scrollTop() < pos && state == 0 ) {
        state = 1;
        $("#locator > p").animate({ opaity: 0, textIndent: -500 })
    }
})