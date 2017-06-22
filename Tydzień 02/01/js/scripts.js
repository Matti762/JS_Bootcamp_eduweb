(function() {
        var btn = document.querySelector("#showContent"),
            output = document.querySelector("#content"),
            pokaz = true,
            txPokazany = "Pokaż treść",
            txUkryty = "Ukryj treść";

function buttonShow(e){

    if(pokaz === true){
        pokaz = false;
        btn.textContent = txPokazany;
        output.style.display = "none";
        
    }
    else if(pokaz === false) {
        pokaz = true; 
        btn.textContent = txUkryty;
        output.style.display = "inline-block";
        
    }

}

btn.onclick= buttonShow;

})();