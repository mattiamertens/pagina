$(window).on('load', scompare) ;
function scompare() {
  $("#caricamento, .inizio").fadeOut(400);
};

$(window).on("scroll", function() {
  if($(window).scrollTop()){
     $('nav').addClass('ontop');
   }
  else {
     $('nav').removeClass('ontop');
        }
      })      // navbar scura

// function button() {
//   $(".descrizione").toggleClass("vista")
//
//   if ($(".descrizione").hasClass("vista")) {
//       $(".show").html("Show less")
//       $(".descrizione").animate({height:"135px"});
//
//   }
//   else {
//     $(".show").html("Show more")
//     $(".descrizione").animate({height:"580px"});
//   }
// }
$(".show").click(buttonino)

var vis=0;
function buttonino() {
  $(".descrizione").toggleClass("vista")
  if (vis==0) {
    $(".descrizione").animate({height:"550px"});
    $(".show").html("Show less");
    vis=1;
  } else {
      $(".descrizione").animate({height:"135px"});

      $(".show").html("Show more");
      vis=0;
  }
}

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
  $("nav, .language").addClass("novis");
  $(".copritutto").toggleClass("visibile");
  $(".slider-in").toggleClass("sldshow")
}; //attivare lo slideshow fasullo
function back(){
    $("nav, .language").removeClass("novis");
    $(".copritutto").removeClass("visibile");
    $(".slider-in").removeClass("sldshow");
};
$(".copritutto, .chiudi").click(back); //funzione per togliere lo slideshow aggiuntiva
$(document).keyup(function(e) {
if(e.keyCode== 27) {
    back();
}
});
$(".box").click(sldshow);

// function attivita() {
//   $(this).animate({
//     left: "0px",
//     width: "+=900px",
//   });
//   $(".coverdiv").addClass("hovered")
// }
//
// $(".ac1, .ac2, .ac3, .ac4, .ac5").click(attivita)
