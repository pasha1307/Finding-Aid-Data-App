$(document).ready(function(){

animationHover("#logo", "hinge");
	
	function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2200);
    }
  );
};

});

//ANIMANTION.CSS ON CLICK

function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2200);
    }
  );
};


//$(document).ready(function() {
//	   $('.column').columnize({ columns: 2 });
//
//    $(function() {  
//        $("#ref").click(function() {  
//            animate(".demo", 'bounce');  
//            return false;  
//        });  
//    });  
//      
//    function animate(element_ID, animation) {  
//        $(element_ID).addClass(animation);  
//        var wait = window.setTimeout( function(){  
//            $(element_ID).removeClass(animation)}, 1300  
//        );  
//    };  