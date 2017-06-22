(function() {

var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");

function isNotEmpty(field){
    
    return field.value !== "";
}

function isNumber(field){
 var wartoscPola = Number(field.value),
    czyNumer = typeof (wartoscPola),
    nieNaN = Boolean(wartoscPola);

return nieNaN && czyNumer ==="number";
    
}

function isAtLeast(field, min){
    
    return field.value.length >= min;
}

function isEmail(field,min){
    
    return field.value.indexOf("@") !== -1 ;
}

function displayErrors(errors){
    var ul = document.querySelector("ul.errors");
    if(!ul){
        ul = document.createElement("ul");
        ul.classList.add("errors");
            }
            
ul.innerHTML = "";

            errors.forEach(function(error){
                var li = document.createElement("li");
                li.textContent = error;
                ul.appendChild(li);
            });
            form.parentNode.insertBefore(ul, form);
}
    form.addEventListener("submit", function(e){

        e.preventDefault();

        var errors = [];

        for(var i = 0; i < fields.length; i++){

            var field = fields[i],
                isValid = false;
            //console.log(field);

            if(field.name === "your-name"){
                isValid = isNotEmpty(field);
            } 
            else if(field.type === "email"){
                isValid = isEmail(field);
            }
            else if(field.name === "your-number"){
                isValid = isNumber(field);
            }
            else if(field.type === "textarea"){
                isValid = isAtLeast(field,1);
            }

            if(!isValid){
                errors.push(field.dataset.error);
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }

if(errors.length){
    displayErrors(errors);
} else {
 form.submit();
}
        }
console.log(errors);

    }, false);

})();