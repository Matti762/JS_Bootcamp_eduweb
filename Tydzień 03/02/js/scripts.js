class Toggler{
    constructor(sekcja){
        this.sekcja = sekcja;
        
    }
     getElem(){
         var sek = this.sekcja;
            return document.querySelector(sek);
    }
    show(){
        var sek = this.sekcja;
        var pokaz = document.querySelector(sek);
        return pokaz.style.display ="inline-block";
            
    }
    hide(){
        var sek = this.sekcja;
        var ukryj = document.querySelector(sek);
        return ukryj.style.display ="none";
            
    }

};


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);

