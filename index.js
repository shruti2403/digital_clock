function Time(){
    var dt= new Date();
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var secs = dt.getSeconds();
    var ampm= "AM";
    if(hrs  >= 12){
        ampm = 'PM';
    }
    var format= hrs + ":" + mins + ":" + secs + " " + ampm;

    document.getElementById("clock").innerText=format;
    document.getElementById("clock").textContent=format;
}
setInterval(Time, 1000);