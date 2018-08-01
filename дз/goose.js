var proc=0;
function поц(){
    document.getElementById('per').innerHTML=proc+'%';
    document.getElementById('per').style="margin-left:"+proc+'%;';
    document.getElementById('prog').style="width:"+proc+'%;';
    proc++;

}
var тима=setInterval(поц, 100);
setTimeout(function(){clearInterval(тима)}, 100*101);
