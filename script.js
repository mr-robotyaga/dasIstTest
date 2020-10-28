
        function timer() {
            var nowDate = new Date();
            var achiveDate = new Date(2021, 0, 0);     
            var result = (achiveDate - nowDate) + 1000;
            var seconds = Math.floor((result / 1000) %60);
            var minutes = Math.floor((result/ 1000/ 60) %60);
            var hours = Math.floor((result/ 1000/ 60/ 60) %24);
            var days = Math.floor(result/ 1000/ 60/ 60/ 24);
            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;
            if (hours < 10) hours = '0' + hours;
            if (days < 10) days = '0' + days;      
            document.getElementById('days').innerText = days;    
            document.getElementById('hours').innerText = hours;    
            document.getElementById('minutes').innerText = minutes;    
            document.getElementById('seconds').innerText = seconds;  
                if (result < 0) {
                document.getElementById('days').innerText = "00";    
                document.getElementById('hours').innerText = "00";    
                document.getElementById('minutes').innerText = "00";    
                document.getElementById('seconds').innerText = "00"; 
            } 
            setTimeout(timer, 0);
            }
            window.onload = function() {
                timer();
            }
        