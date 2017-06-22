(function($){

    $(document).ready(function(){

var ul = $("<ul>"),
    li = $("<li>"),
    input = $("#inp"),
    button = $("#send");

button.on("click", function(e){
            var liText = $("<li>", {
                    text: input.val()
                });

$("#inserts").append(liText);

$("#inp").val("");
    })

    })

}



)(jQuery);













// var ul = document.querySelector("#insertUl"),
//     //li = document.appendChild(),
//     div = document.querySelector("#inserts"),
//     btn = document.querySelector("#send"),
//     inp = document.querySelector("#wej"),
//     parametr = inp.value;

// console.log(ul);
// var insUl =  document.createElement('ul');
// insUl.setAttribute("id","insertUl");
// var node = document.createElement("LI");




// function insert(text){
//     if (ul = null){
//        document.body.appendChild(insUl);
//        //document.div.appendChild(insUl);

             
// var textnode = document.createTextNode(text);         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// //document.getElementById("myList").appendChild(node); 
//     }
// }




// btn.onclick.parametr = insert;