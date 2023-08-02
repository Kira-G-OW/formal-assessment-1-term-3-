
//When the document loads 

$(document).ready(function(){

    console.log("Hello World!");

    // ----------------------------------------------------------------
    // Homepage

    // When the hero image loads, animate it upwards
    $(".hero-image").animate({top: '-=100px'})


    // ---------------------------------------------------------------
    // Browse

    $("#descriptionText").hide();




    // ---------------------------------------------------------------
    // Wishlist

});


// When the card is clicked
$(".card").click(function(){

    // toggle price and description
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content 
    $(".card-img-top").toggleClass("small");
})


// when "Remove" button is clicked

$("#btn-1").click(function (){
    $(".row-1").hide("slow");
})

$("#btn-2").click(function (){
    $(".row-2").hide("slow");
})

$("#btn-3").click(function (){
    $(".row-3").hide("slow");
})