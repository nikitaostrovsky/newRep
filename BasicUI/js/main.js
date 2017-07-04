window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    var btn = mainPage.querySelector('#htmlbtn');
    var flag = 0;
    
    btn.addEventListener("click", function()
    		{
    			var img = mainPage.querySelector('#htmlimg');
    			if (flag === 0)
    				{
    					img.style.visibility = "hidden";
    					flag = 1;
    				}
    			else 
    				{
						img.style.visivility = "visible";
						flag = 0;
    				}
    		});
    
    /*mainPage.addEventListener("click", function() {
        //var contentText = document.querySelector('#content-text');

        //contentText.innerHTML = (contentText.innerHTML === "Dva") ? "Odin" : "Dva";        
    });*/
};