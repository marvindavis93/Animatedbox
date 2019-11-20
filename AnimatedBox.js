$(function(){
   var speed = 2500;
   var left = parseInt($("#container").css('left').replace("px", ''));
   var top = parseInt($("#container").css('top').replace("px", ''));   
   var height = $("#container").height();
   var width = $("#container").width();
   var boxWidth = $("#box").width();
   var boxHeight = $("#box").height();
   var rightEdge = (left + width-boxWidth-2)+'px';
   var leftEdge = (left-2)+'px';
   var topEdge = (top-10)+'px';
   var bottomEdge = (top-10+height-boxHeight)+'px';
   var blinking = false;
   var intervalID = setInterval(blink, 300);    
   var visible = true;
    $("#btnRight").click(function(){
  $("#box").stop( false, false ).animate({left: rightEdge},speed);
});  

    $("#btnDown").click(function(){
  $("#box").stop( false, false ).animate({top: bottomEdge},speed);
}); 

    $("#btnLeft").click(function(){
  $("#box").stop( false, false ).animate({left: leftEdge},speed);
}); 

    $("#btnUp").click(function(){
  $("#box").stop( false, false ).animate({top: topEdge},speed);
}); 

    $("#btnFadeOut").click(function(){
  $("#box").stop( false, false ).fadeOut(speed);
}); 

    $("#btnFadeIn").click(function(){
  $("#box").stop( false, false ).fadeIn(speed);
});


    $("#btnBlink").click(function(){   
        blinking = !blinking; 
        if(!visible) $("#box").show();  
});

    $("#btnReset").click(function(){       
      $("#box").stop( false, false ).css({left:leftEdge, top:topEdge});
      blinking = false;
      if(!visible) $("#box").show();
});   

function blink() {
    if(blinking) {
      if(visible) $("#box").hide();      
        else $("#box").show();
        
        visible = !visible;
    }
};

});

