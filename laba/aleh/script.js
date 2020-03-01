showElem = () => {
    $("#test").show();
}

hideElem = () => {
    $("#test").hide();
}

$("#hideTest").click(hideElem);
$("#showTest").click(showElem);

$("#hideTest, #showTest, #dblClick").button();


$("#dblClick").dblclick(function(){
    $("[align='center']").toggle();
});

$(window).resize(function(){
    $('a').replaceWith(function(){
        return $("<p />").append($(this).contents());
    });
})

$(function() {
    $( "#accordion" ).accordion();
    var availableTutorials  =  [
        "ActionScript",
        "Bootstrap",
        "C",
        "C++",
     ];
     $( "#automplete-1" ).autocomplete({
        source: availableTutorials
     });
 });