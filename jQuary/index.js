$("ul").on("click", "li", function(){
    $(this).toggleClass("AddLineRemoveLine");
    
   

    // option tow 
    /*if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css("color", "black");
        $(this).css("text-decoration", "none");
    }else{
        $(this).css({
            color:"gray",
            textDecoration:"line-through"
        });
    }*/
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function (e) { 
  if(e.which === 13){
     var todoText = $(this).val();
     $(this).val("");
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
  }  
});

$(".fa-plus").click(function () { 
   $("input[type='text']").fadeToggle();
    
});