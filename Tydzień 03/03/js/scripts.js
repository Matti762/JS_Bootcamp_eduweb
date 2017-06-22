var url = "http://code.eduweb.pl/bootcamp/users/";

function fecz (url, dobrze, zle){
    var xhr = new XMLHttpRequest();
function logType(e){
    console.log(e.type);
}
xhr.onreadystatechange = function(e){
    //console.log(this.readyState);
    if(this.readyState ===4 && this.status === 200) {
                dobrze(this.statusText);
                                                    }
    if(this.readyState ===4 && this.status !== 200) {
                zle(this.statusText);
                                                    }
}

xhr.open("GET", url, true);
xhr.send(null);
}



fecz(url, function(data) {
console.log("Sukces");
console.log(data);
}, function(err) {
console.log("Wystąpił błąd!");
console.log(err);
});
