function mydata(){

        var client = new ClientJS(); // Create A New Client Object

        var OS = client.getOS(); // Get OS Version

        var ver = client.getOSVersion(); // Get OS Version

        var getbrow = client.getBrowser(); // Get Browser

        var getbrowVer = client.getBrowserVersion(); // Get Browser Version

        var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get Time Zone
        // var timeZone = client.getTimeZone(); // Get Time Zone

        var language = client.getLanguage(); // Get User Language

        if(client.getOS() == "Linux"){
            timeZone = "Not Found";
        }

        if(window.location.hash) {
            var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        } else {
            var hash = "Use Direct Link / Not Place HashTag on Link"
        }

        var check_brave = navigator.brave;

        if(check_brave == undefined){
            $.get("https://api.ipify.org",function(data){
            var ip = data
            $.ajax({
                type: 'POST',
                url: 'info.php',
                data: {getip:ip,email:hash,osname:OS,Version:ver,BrowserName:getbrow,Verbrow:getbrowVer,time:timeZone,lan:language},
                mimeType: 'text'
                });
            });


        }else {

            $.ajax({
                type: 'POST',
                url: 'info.php',
                data: {getip:"Not Found",email:hash,osname:OS,Version:ver,BrowserName:getbrow,Verbrow:getbrowVer,time:timeZone,lan:language},
                mimeType: 'text'
                });

              }

        }

