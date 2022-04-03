$(document).ready(function() {


    // preload the image for each link
$("#image_list a").each(function ()
{
    var swapPicture = new Picture();
    swapPicture.src = $ (this).attr("href");
});
    // set up the event handlers for each link
$("#image_list a").click(function (evt)
{
    var picture = $ (this).attr("href");

    $("#image").attr("src", picture);
    var caption = $ (this).attr("title");
    $("#caption").fadeOut(1000, function ()
    {
        $("#caption").text(caption).fadeIn(1000);
    });
    $("#image").fadeOut(1000, function ()
    {
        $("#image").attr("src", picture).fadeIn(1000);
    });
        // cancel the default action of each link

    evt.preventDefault();
});
// move the focus to the first link
$("li:first-child a").focus();

}); // end ready