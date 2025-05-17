function digitclock(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
//   console.log(date,hh,mm,ss,ml,ss,ml,dt,mo,yy,day)
var am_pm="AM"
if(hh>=12){
    am_pm="PM";
    if(hh>12)
    {
        hh-=12;
    }
}
if(hh==0)
{
    hh==12;
}
if(mo==0){
    mo="Jan"
}
else if(mo==1){
    mo="Feb"
}
else if(mo==2){
    mo="Mar"
}
else if(mo==3){
    mo="Apr"
}
else if(mo==4){
    mo="May"
}
else if(mo==5){
    mo="June"
}
else if(mo==6){
    mo="July"
}
else if(mo==7){
    mo="Agu"
}
else if(mo==8){
    mo="Seb"
}
else if(mo==9){
    mo="Oct"
}
else if(mo==10){
    mo="Nov"
}
else {
    mo="Dec"
}
switch(day)
{
    case 0: day="Sunday"
    document.body.style.backgroundImage="url(./sun.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh";
    break;


    case 1: day="Monday"
    document.body.style.backgroundImage="url(./mon.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break;


    case 2: day="Tuesday"
    document.body.style.backgroundImage="url(./tue.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break;

    case 3: day="Wensday"
    document.body.style.backgroundImage="url(./web.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break;

    case 4: day="Tusday"
    document.body.style.backgroundImage="url(./tus.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break; 

    case 5: day="Friday"
    document.body.style.backgroundImage="url(./fir.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break;

    case 6: day="Saturday"
    document.body.style.backgroundImage="url(./satur.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="100% 100vh"

    break;

}
document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`
document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
document.getElementById("day").innerHTML=day;
document.getElementById("sec").innerHTML=ss;
setTimeout(digitclock,1000);
}
digitclock();
