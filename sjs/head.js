$(document).ready(function(){
	
	



	

	
$('#eye').click(function (){ 
	
	
	$("#special_panel").css('display', 'block');
	$("#eye").remove();
	
	
	
});


	
	
	
$('#tt_1').click(function (){ 
	$("img:not(.special_img)").remove();
	
	$('*')
    .css('color', '')
	.css('color', 'black')
    .css('background-color', '')
	.css('background-color', 'white')
	.css('background-image', '');
    
	
	
	
	$('#page_color_style').attr('href','http://www.mtuci.ru/styles/color_1.css');
	
			$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { tt: "1" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
	
	
});

$('#tt_2').click(function (){
	$("img:not(.special_img)").remove();
	
	$('*')
    .css('color', '')
	.css('color', 'white')
    .css('background-color', '')
	.css('background-color', 'black')
	.css('background-image', '');
	
	$('#page_color_style').attr('href','http://www.mtuci.ru/styles/color_2.css');
	
			$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { tt: "2" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
	
   
});
	
	


$('#tt_3').click(function (){
	$("img:not(.special_img)").remove();
	
	$('*')
    .css('color', '')
	.css('color', 'orange')
    .css('background-color', '')
	.css('background-color', 'green')
	.css('background-image', '');
	
	$('#page_color_style').attr('href','http://www.mtuci.ru/styles/color_3.css');
	
			$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { tt: "3" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
	
   
});	
	
// alert(jQuery.fn.jquery);

   //$('link[href="../style1.css"]').attr('href','../style2.css');

   
   
$('#fb_1').click(function (){ 
   $('#page_font_style').attr('href','http://www.mtuci.ru/styles/font_1.css');
  


		$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { fb: "1" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
	
   
});
   
   $('#fb_2').click(function (){
    $('#page_font_style').attr('href','http://www.mtuci.ru/styles/font_2.css');
  

  	$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { fb: "2" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
  
 
});
   
   
   
   
   $('#fb_3').click(function (){
   $('#page_font_style').attr('href','http://www.mtuci.ru/styles/font_3.css');
  


		$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/make_flags.php",
  data: { fb: "3" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  });
	
   
});
   
   
   // цвета
   
   
$('#default').click(function (){
  // $('#page_font_style').attr('href','http://www.mtuci.ru/styles/font_1.css');
  


		$.ajax({
  method: "POST",
  url: "http://www.mtuci.ru/sjs/clear_flags.php",
  data: { fb: "1" }
})
  .done(function( msg ) {
  //  alert( "Data Saved: " + msg );
  location.reload();
  });
	
   
});    
   
   
   
 });

