
  $(function () {
    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function (e) {
      if($(e.target).hasClass('has-drop')){
        e.preventDefault();

      }
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
    });
  });

