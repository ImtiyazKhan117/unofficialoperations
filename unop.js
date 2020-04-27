
	function insert_method(args){
		$.ajax({
  				type: 'POST',
  				url: 'testinsert.php',
  				data: {
              whois : whois_args,
              _query : query_,
              query_arg : query_args
              },
  				dataType: 'json',
  				success: function(data){
     			console.log( 'the feedback from your result.php: ' + data);
  			}
		});
	}
	$(document).ready(function(){
    $("#name").on('keypress',function(e){
    	if(e.which == 13){
    		var strr = $("#name").val();
    		var cmd_process = strr.split(" ");
    		
        if (cmd_process[0] == "create" && cmd_process[1] == "user" && cmd_process[2] == "-a") {
    			
          var query_1 = "at_user(user_nane,call_sign,password,account_status) "+cmd_process[3]+" "+cmd_process[4]+" "+cmd_process[5]+" "+"active";
    			insert_method(query_1);

    		} else if (cmd_process[0] == "create" && cmd_process[1] == "user" && cmd_process[2] == "-t"){
    		
        	var query_2 = "t_user(user_nane,call_sign,password,account_status) "+cmd_process[3]+" "+cmd_process[4]+" "+cmd_process[5]+" "+"active";
        	insert_method(query_2);
    		
        }
			console.log(strr);
			
    	}
	});
 });
