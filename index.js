setInterval(time,500)
function time()
{
    let ap="A.M"
    let time = new Date();
    let hr,min,sec,day,month,year;
    hr=time.getHours();
    min=time.getMinutes();
    sec=time.getSeconds();
    if(hr>=12)
    {
        ap="P.M"
    }
    if(hr>12)
    {
        hr-=12;
    }
    let out=hr+":"+min+":"+sec+"  "+ap;
    document.getElementById("clock").innerHTML=out;
    day=time.getDay()-1;
    month=time.getMonth()+1;
    year=time.getFullYear();
    let out2=day+"/"+month+"/"+year;
    document.getElementById("day").innerHTML=out2;


}
time();