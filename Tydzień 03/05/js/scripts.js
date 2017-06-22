function getPage(){
    var url = window.location.href,
    regex = /(\?page=)\w+/ig,
    regex2 = /(\?page=)/ig,
    regexx = /(\d)+/ig,
    cut;

cut = url.match(regex);
var url2 = String(cut);
var url3 = url2.replace(regex2,"");
if(Number(url3)){
    page = Number(url3.match(regexx))
    return page;
}else if(cut === null){
    return null;
}
else {
    return null;
}

}