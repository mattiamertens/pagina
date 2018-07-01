$(window).on('load', scompare) ;
function scompare() {
  $("#caricamento").fadeOut(400);
};

$(window).on("scroll", function() {
  if($(window).scrollTop()){
     $('nav').addClass('ontop');
   }
  else {
     $('nav').removeClass('ontop');
        }
      })      // navbar scura

function button() {
  $(".descrizione").toggleClass("vista")
  if ($(".descrizione").hasClass("vista")) {
    $(".show").html("Show less")
  }
  else {
    $(".show").html("Show more")
  }
}
$(".show").click(button)

function initMap() {
  var perugia = {lat: 43.107260, lng: 12.407274};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: perugia
  });
  var marker = new google.maps.Marker({
    position: perugia,
    map: map
  });
};  //mappa di google

function active() {
  $(this).addClass("hovered")
};
function noactive() {
  $(".coverdiv").removeClass("hovered")
};

$(".coverdiv").mouseover(active);
$(".activity").mouseleave(noactive);


$(document).ready(function(){
  $('.next').click(function(){
    var thisImg = $('.active');
    var nextImg = thisImg.next();

    if(nextImg.length){
      thisImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev').click(function(){
    var thisImg = $('.active');
    var prevImg = thisImg.prev();

    if(prevImg.length){
      thisImg.removeClass('active');
      //how to style single CSS property:
      prevImg.addClass('active').css('z-index', 10);
    }
  });
}); // slideshow immagini //

$(document).ready(function(){
  $('.next-in').click(function(){
    var thisImg = $('.active');
    var nextImg = thisImg.next();

    if(nextImg.length){
      thisImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev-in').click(function(){
    var thisImg = $('.active');
    var prevImg = thisImg.prev();

    if(prevImg.length){
      thisImg.removeClass('active');
      //how to style single CSS property:
      prevImg.addClass('active').css('z-index', 10);
    }
  });
}); //slideshow di INDEX


function sldshow() {
  $("nav, .wrapperino").addClass("novis");
  $(".copritutto").toggleClass("visibile");
  $(".slider-in").toggleClass("sldshow")
}; //attivare lo slideshow fasullo
function back(){
    $("nav, .wrapperino").removeClass("novis");
    $(".copritutto").removeClass("visibile");
    $(".slider-in").removeClass("sldshow");
};
$(".copritutto, .chiudi").click(back); //funzione per togliere lo slideshow aggiuntiva
$(".box").click(sldshow);

function attivita() {
  $(this).animate({
    left: "0px",
    width: "+=900px",
  });
  $(".coverdiv").addClass("hovered")
}

$(".ac1, .ac2, .ac3, .ac4, .ac5").click(attivita)
