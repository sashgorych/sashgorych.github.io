let imgs = $(".laba2 img:nth-child(2n)")

$('#btn').click(function (e) {
    let a = $('.laba p:nth-child(5)').css('margin-left')
    a = parseInt(a, 10) + 60 + "px";
    $('.laba p:nth-child(5)').css('margin-left', a)
    $('.laba p:nth-child(7)').css('margin-left', a)
})
$(".laba img").click(function (event ) {
    console.log('s')
    let h = $(event.target);
    let b = h.css('margin-top');
    b = parseInt(b, 10) + 40 + "px";
  h.css('margin-top',b)
})
$("#d2").click(function () {
    console.log(imgs.length)
    for(let i=imgs.length-1; i>=0; i--){
            $(imgs[i]).slideToggle("slow");
            $(imgs[i-1]).delay(1000);
    }
    })

$("#form" ).submit(function( event ) {
    event.preventDefault();
    $( "#form" ).prepend( "<input type='text' class='inp'>" );
    setRandomColor($('.inp'));
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function setRandomColor(el) {
    el.css("background-color", getRandomColor());
}