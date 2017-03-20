
        
       
           window.onload = function() {
                $("#slideshow > div:gt(0)").hide();

                setInterval(function() {
                  $('#slideshow > div:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('#slideshow');
                }, 5000);
           }
        
       
            $(document).ready(function(){
                $("#mostrarocultar1").click(function(){
                    $("#desc1").slideToggle(300);
                });
            });
       
       
            $(document).ready(function(){
                $("#mostrarocultar2").click(function(){
                    $("#desc2").slideToggle(300);
                });
            });
       
       
            $(document).ready(function(){
                $("#mostrarocultar3").click(function(){
                    $("#desc3").slideToggle(300);
                });
            });
       
        
            $(document).ready(function(){
                $("#mostrarocultar4").click(function(){
                    $("#desc4").slideToggle(300);
                });
            });
      
        
            $(document).ready(function(){
                $("#mostrarocultar5").click(function(){
                    $("#desc5").slideToggle(300);
                });
            });
      
       
            $(document).ready(function(){
                $("#mostrarocultar6").click(function(){
                    $("#desc6").slideToggle(300);
                });
            });
        