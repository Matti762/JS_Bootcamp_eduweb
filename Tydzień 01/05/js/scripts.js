function getDate(){
    var d = new Date();
    var msc = (d.getMonth()+1)
    if (msc < 10) msc = '0' + msc;
    var data = (d.getDate()+"." + msc + "."+d.getFullYear());
    return data;
}
console.log(getDate());