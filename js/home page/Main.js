$(document).ready(function()
{
$(window).scroll(function()
{
    var scrolled=window.pageXOffset;
   $("button").html(scrolled.toString());
   
});
});


 