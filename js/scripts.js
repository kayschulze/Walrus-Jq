$ (document).ready(function() {
  $(".container").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
});
