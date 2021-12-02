
$(document).ready(function(){

  /* Default Colors start */
  var bgcolor = "#8d0056";
  var menutxtcolor = "#fff";
  var namecolor = "#FFFF00";
  var designationcolor = "#14FF00";
  var contactbtnbg = "#007074";
  var contactbtntxt = "#fff";

  //set default colors
  $("#cntbgcolor").css('backgroundColor',bgcolor);
  $("#menutxt li a").css('color',menutxtcolor);
  $("#usernamecolor").css('color',namecolor);
  $("#designation").css('color',designationcolor);
  $("#contactbtnbgclr").css('backgroundColor',contactbtnbg);
  $("#contactbtntxtclr").css('color',contactbtntxt);
  
  /* Default Colors end */
  
$('#bgcolor').spectrum({
  flat: false,
      showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,
        color: bgcolor
});

$('#menucolor').spectrum({
  flat: false,
       showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,
        color: menutxtcolor
});

$('#username').spectrum({
  flat: false,
       showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,  
        color: namecolor      
});

$('#designationtxt').spectrum({
  flat: false,
       showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,
        color: designationcolor
});

$('#contactbtnbgcolr').spectrum({
  flat: false,
       showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,
        color: contactbtnbg
});



$('#cntbtntxt').spectrum({
  flat: false,
       showInitial: true,
        showPalette: true,
         showButtons:true,
        showInitial:true,
        showInput:true,
        showAlpha:true,
        showSelectionPalette: true,
        color: contactbtntxt
});


$('#bgcolor').on('move.spectrum', function(e, tinyColor) {
  $("#cntbgcolor").css('backgroundColor',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
});


$('#menucolor').on('move.spectrum', function(e, tinyColor) {
  $("#menutxt li a").css('color',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
 
});


$('#username').on('move.spectrum', function(e, tinyColor) {
  $("#usernamecolor").css('color',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
});


$('#designationtxt').on('move.spectrum', function(e, tinyColor) {
  $("#designation").css('color',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
});


$('#contactbtnbgcolr').on('move.spectrum', function(e, tinyColor) {
  $("#contactbtnbgclr").css('backgroundColor',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
});

$('#cntbtntxt').on('move.spectrum', function(e, tinyColor) {
  $("#contactbtnbgclr").css('color',"rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")");
});

})