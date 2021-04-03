
$(document).ready(function(){
   $("#container > button").click(function(){
        $(this).next().slideToggle().siblings(".panel").slideUp();
   });
});