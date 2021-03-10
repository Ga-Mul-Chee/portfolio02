$(document).ready(function(){
    $(".moreinfo").click(function(){
        $("#bglayer").show();
        $("#overlayer").show().html("<img src='"+$(this).attr("href")+"'>");
        return false;
    });
    $("#bglayer").click(function(){
        $(this).hide();
        $("#overlayer").hide();
    });
});