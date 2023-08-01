/*Create a stopwatch app.
             <br>
             * Stopwatch will have 3 buttons "Start, Stop, Reset"<br>
             * When you press the stop button, the background of the stopwatch should be red, start - green, reset - gray
             * Output counters in HH:MM:SS<br> format
             * Implement Tasks using ES6 syntax and arrow functions
*/

var div = document.querySelector(".stopwatch-display");

        const firstButtonHandler = () => {            
            div.classList.remove("red");
            div.classList.remove("silver");
            div.classList.add("green");
        },

            secondButtonHandler = () => {
                div.classList.remove("green");
                div.classList.remove("silver");
                div.classList.add("red");
                
            },

            thirdButtonHandler = () => {    
                div.classList.remove("red");
                div.classList.remove("green");
                div.classList.add("silver");
              
            };

            let counter = 0, intervalHandler;

            const ev = document.querySelector(".stopwatch-control");
            const display = document.querySelector(".stopwatch-display");
            
            const count = () => {
                let h = parseInt(counter/216000);
                let res = parseInt(counter-216000*h);
                let m = parseInt(res/3600);
                let s = parseInt((res - 3600*m)/60);
                
                function makeTwoDigits(n){
                    return (n < 10 ? "0" : "") + n;
                }

                display.lastElementChild.innerText = makeTwoDigits(s); 
                display.firstElementChild.nextElementSibling.innerText =  makeTwoDigits(m);
                display.firstElementChild.innerText =  makeTwoDigits(h);

                counter++;
            }

            const reset= () => {
                display.lastElementChild.innerText = "00";
                display.firstElementChild.nextElementSibling.innerText = "00";
                display.firstElementChild.innerText = "00";
            }

            let startTimer = () => {
                intervalHandler = setInterval(count, 10);
            }

            ev.firstElementChild.onclick = () => {
                intervalHandler = setInterval(count, 10);
                firstButtonHandler(); 
            }
            

            ev.firstElementChild.nextElementSibling.onclick = () => {
                clearInterval(intervalHandler);
                secondButtonHandler();
            }

            
            ev.lastElementChild.onclick = () => { 
                thirdButtonHandler();
                clearInterval(intervalHandler);
                reset();
            } 

    

