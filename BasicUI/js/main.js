function showPic()
{
	document.write("Show text!");
}

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
    			var img = mainPage.querySelector('#img');
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
    
    //btn.setAttribute('onClick', 'showPic');
    
    /*var btn2 = document.createElement('input');
    btn2.id = 'btn2';    
    btn2.type = 'button';
    btn2.value = 'Hide!';
    
    document.body.appendChild(btn2);
    document.getElementById('btn2').onClick = hidePic();
    
    btn2.setAttribute('onClick', 'hidePic');*/
    
    /*mainPage.addEventListener("click", function() {
        //var contentText = document.querySelector('#content-text');

        //contentText.innerHTML = (contentText.innerHTML === "Dva") ? "Odin" : "Dva";        
    });*/
};