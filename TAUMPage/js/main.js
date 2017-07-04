( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
    var res_flag = 0;
    document.querySelector("#res_but").addEventListener("click", function() {
    	var x = document.querySelector("#res_span");
    	if (res_flag === 0) {
    		x.innerHTML = screen.width + "x" + screen.height;
    		res_flag = 1;
    	} else {
    		x.innerHTML = "";
    		res_flag = 0;
    	} 
    });
    
    var flag_g = 0;
    $("#change_color").click(function() {
    	if (flag_g === 0) {
    		$("#colors23").css({"color": "#f23314"});
    		flag_g = 1;
    	} else {
    		$("#colors23").css({"color": "#ffffff"});
    		flag_g = 0;
    	}
    });
    
    /*var x = document.getElementById("draw").getContext("2d");
    x.fillText("text1", 12, 23);
    x.fillText("tesfds", 23, 56);
    x.fillText("fdsaf", 53, 64);*/
    
    var canvas=document.getElementById("drawer");
	var x=canvas.getContext("2d");
	/*x.fillStyle = 'black';
	x.font = "italic 60px Arial";
	x.fillText("Tizen", 30, 60);
	x.font = "italic 60px Arial";
	x.fillStyle = 'blue';  
	x.fillText("Javascript", 20, 100);
	x.font = "italic 60px Arial";
	x.fillStyle = 'red'; 
	x.fillText("HTML5", 10, 180);
	x.font = "italic 60px Arial";
	x.fillStyle = 'blue'; 
	x.fillText("canvas", 80, 200);*/
	
	var flag = true;
	for (i = 0; i <= 7; i++)
	{
		for (j = 0; j <= 7; j++)
		{
			if (flag)
			{
				x.fillStyle = 'black';
				x.fillRect(30*j,30*i,30,30);
				flag = false;
			}
			else
			{
				x.fillStyle = 'white';
				x.fillRect(30*j, 30*i, 30, 30);
				flag = true;
			}
		}
		flag = !flag;
	}
} () );