// $("li.nav-item").on("click", function(){
//     alert('df');
//     $( this ).addClass('active').siblings().removeClass('active');
// });
$("li.nav-item").on("click", function(){

    /*
    $(".navbar").find(".active").removeClass("active");
    $(this).parent().addClass("active");*/
    $( this ).addClass('active').siblings().removeClass('active');
});


