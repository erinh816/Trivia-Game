$(document).ready(function(){
    $("#questions").hide();
    $("#startpage").show();
    $("#result").hide();

   //create variables
   var correct=0;
   var incorrect=0;
   var unanswered=0;
   var timecount=30;
   

  // Start the game
    $("#start").click(function(){
        $("#questions").show();
        $("#startpage").hide();
        $("#result").hide();
          
         startTimer();
         

    });

    //Timer function
    function startTimer(){

        setInterval(countdown, 1000);
            
      }
    //countdown function
	function countdown(){

		
		timecount--;
    	$('#timer_number').html(timecount + " Seconds");

        
        
 
            //submit button function
			$("#submit").on("click", function(){
             timecount = 0; 
          
			});

			if(timecount === -1){

				gameresult();
                $("#questions").hide();
                $("#startpage").hide();
                $("#result").show();

            }
            
	   }
//startover function
 $("#startover").on("click", function(){
    correct=0;
     incorrect=0;
     unanswered=0;
     timecount=30;
  
  
    $("input[name='q1']").prop("checked", false);
    $("input[name='q2']").prop("checked", false);
    $("input[name='q3']").prop("checked", false);
    $("input[name='q4']").prop("checked", false);

     $("#questions").hide();
     $("#startpage").show();
     $("#result").hide();         
 })
    //how to grade the answers
    function gameresult(){
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
      
                    
                    if(Q1 === undefined){
                        unanswered++;
                    }
                    else if(Q1 === "Deadmau5"){
                        correct++;
                    }
                    else{
                        incorrect++;
                    }
            
            
                    if(Q2 === undefined){
                        unanswered++;
                    }
                    else if(Q2 === "Martin Garrix"){
                        correct++;
                    }
                    else{
                        incorrect++;
                    }

                    if(Q3 === undefined){
                        unanswered++;
                    }
                    else if(Q3 === "2018"){
                        correct++;
                    }
                    else{
                        incorrect++;
                    }

                    if(Q4 === undefined){
                        unanswered++;
                    }
                    else if(Q4 === "Hardwell"){
                        correct++;
                    }
                    else{
                        incorrect++;
                    }
                    
                    $('#correct_answers').html(correct);
                    $('#wrong_answers').html(incorrect);
                    $('#unanswered').html(unanswered);
                }


        
});




          
            
    
    
    
    