$(function() {
    $("#guest").hide();
    $("#email").hide();
    $("#mainDish").hide();
    $("#drink").hide();
    $("#dessert").hide();
     $(".header").hide();
     $("picktime").hide();
    $("#guestError").hide();
    $("#nameError").hide();
    $("#emailError").hide();
    $("#sign-head").hide();
     $("#sign-radio").hide();
    $("#picktime").hide();
    $("#date").hide();
    $("#sButton").hide();
    $("#resMessage").hide();
    $("#resError").hide();
    $("#decMessage").hide();
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr',
                  'May', 'June', 'July', 'Aug', 
                  'Sept', 'Oct', 'Nov', 'Dec'];
    var days =  ['Sunday', 'Monday', 'Tuesday', 
                 'Wednesday', 'Thursday', 'Friday',
                 'Saturday'];
    
    $("#accept").click(function() {
        $("#guest").slideDown();
        $("#email").slideDown();
        $("#mainDish").slideDown();
        $("#drink").slideDown();
        $("#dessert").slideDown();
        $(".header").slideDown();
        $("#sign-head").slideDown();
        $("#sign-radio").slideDown();
        $("#picktime").slideDown();
        $("#date").slideDown();
        $("#sButton").slideDown();
        $("#resMessage").slideDown();
        $("#decMessage").slideUp();
        
        
    });
    $("#decline").click(function() {
        $("#guest").slideUp();
        $("#email").slideUp();
        $("#mainDish").slideUp();
        $("#drink").slideUp();
        $("#dessert").slideUp();
        $(".header").slideUp();
        $("#sign-head").slideUp();
        $("#sign-radio").slideUp();
        $("#picktime").slideUp();
         $("#date").slideUp();
        $("#sButton").slideUp();
        $("#resMessage").slideUp();
        $("#decMessage").slideDown();
    });
    
    $("#pic1").html('<img src="images/lamb.jpg">')
    
    $("#pic2").html('<img src="images/vegan.jpg">')
    
    $("#pic3").html('<img src="images/scallops.jpg">')
    
    
     $(function() {     
    $("#time").timepicker({
        timeFormat: 'h:mm p',
        'minTime': '11:30am',
        'maxTime': '8:00pm',
          });

     });
    
    $("#date").datepicker();
    
    $("#sButton").click(function(){
        var resTime, resDate, dateStr, message;
        
        resTime = $("#time").val();
        resDate = $("#date").datepicker("getDate");
        dateStr = days[resDate.getDay()] + " " +
            months[resDate.getMonth()] + " " +
            resDate.getDate() + " " +
            resDate.getFullYear();
        message = "Your table has been reserved " + "<br>" + " for "  +

            dateStr + " at " + resTime;
        
        $("#resMessage").html(message);
        
        
    });
    
    $("form").submit(function() {
           
        var numberGuests;
        numberGuests = Number($("#numGuests").val());
        if (isNaN(numberGuests)) {
            $("#guestError").show().css("color", "black");
            
            return false;
        }
        
          if($("#user").val() == ''){
            $("#nameError").show().css("color", "black");
              
              return false;
        }
    

      
         if ($("#accept").is(':checked') && $("#cemail").val() == ''){
            $("#emailError").show().css("color", "black");
              
              return false;

         }
        
      if ($("#accept").is(':checked') && $("#time").val() == ''){
            $("#resError").show().css("color", "black");
              
              return false;
      }
        
        
    });
    
    
});
