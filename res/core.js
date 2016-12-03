$(document).ready(function(){
    updateTime();
    setInterval(updateTime, 1000);
    
});

var updateTime = function(){
    var currentDate = new Date();
    var date = new Date(2016, 12, 11, 6, 30);

    //var time = (date.getDate()*24*60*60) + (date.getHours()*60*60) + (date.getMinutes()*60) + date.getSeconds();
    //var currentTime = (currentDate.getDate()*24*60*60) + (currentDate.getHours()*60*60) + (currentDate.getMinutes()*60) + currentDate.getSeconds();;

    var d = date.getDate() - currentDate.getDate();
    
    
   
    var s = date.getSeconds() - currentDate.getSeconds();
    if(s < 0){
        m--;
        s += 60; 
    }
    var m = date.getMinutes() - currentDate.getMinutes();
    if(m < 0){
        h--;
        m += 60;
    }
    var h = date.getHours() - currentDate.getHours();
    if(h < 0){
        d--;
        h += 24;
    }
    if(s < 10){
        s = ""+"0"+s;
    }
    if(m < 10){
        m = ""+"0"+m;
    }
    if(h < 10){
        h = ""+"0"+h;
    }
    $("#day").text(d);
    $("#hour").text(h + " : " + m + " : " + s);  
}
