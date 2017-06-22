var btn = document.querySelector("#wywolanie");//,
       
var licznik = 10;
function klik(){
licznik = 10;

callback();
}


function callback() {
                         

                if (licznik > -1){
        
                   btn.textContent = licznik;
                   licznik--;
                                      }
                   setTimeout(callback,1000);
                   
                                 
                  if(licznik === -1) {
                   setTimeout(btn.textContent = document.getElementById("content").value ,1000);
                
                                      }               
                                                     

                      }

btn.onclick = klik;
                             //btn.onclick = callback;