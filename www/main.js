
var monund = document.getElementById("monUnder");
var montext = document.getElementById("monText");
var monpro = document.getElementById("monProcent");
var mondiv = document.getElementById("mon");

var tueund = document.getElementById("tueUnder");
var tuetext = document.getElementById("tueText");
var tuepro = document.getElementById("tueProcent");
var tuediv = document.getElementById("tue");

var wedund = document.getElementById("wedUnder");
var wedtext = document.getElementById("wedText");
var wedpro = document.getElementById("wedProcent");
var weddiv = document.getElementById("wed");

var thuund = document.getElementById("thuUnder");
var thutext = document.getElementById("thuText");
var thupro = document.getElementById("thuProcent");
var thudiv = document.getElementById("thu");

var friund = document.getElementById("friUnder");
var fritext = document.getElementById("friText");
var fripro = document.getElementById("friProcent");
var fridiv = document.getElementById("fri");

var satund = document.getElementById("satUnder");
var sattext = document.getElementById("satText");
var satpro = document.getElementById("satProcent");
var satdiv = document.getElementById("sat");

var sunund = document.getElementById("sunUnder");
var suntext = document.getElementById("sunText");
var sunpro = document.getElementById("sunProcent");
var sundiv = document.getElementById("sun");

var monOpen = false;
var tueOpen = false;
var wedOpen = false;
var thuOpen = false;
var friOpen = false;
var satOpen = false;
var sunOpen = false;

//måndag animation
function monAnimation(){

    if(tueOpen == true){
        tueAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(satOpen == true){
        satAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(monOpen == false){

        mondiv.style.height = '58%';
        mondiv.style.zIndex = '7';
        montext.style.bottom = '78%';
        monpro.style.bottom = '78%';
        monund.style.transform = 'scale(1)';

        monOpen = true;
    }
    else{

        mondiv.style.height = '14.2857%';
        mondiv.style.zIndex = '7';
        montext.style.bottom = '76.5%';
        monpro.style.bottom = '76%';
        monund.style.transform = 'scale(0)';

        monOpen = false;

    }
}

//tisdag animation
function tueAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(satOpen == true){
        satAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(tueOpen == false){

        tuediv.style.height = '58%';
        tuediv.style.zIndex = '6';
        tuetext.style.bottom = '65.8%';
        tuepro.style.bottom = '65.8%';
        tueund.style.transform = 'scale(1)';

        tueOpen = true;
    }
    else{

        tuediv.style.height = '14.2857%';
        tuediv.style.zIndex = '6';
        tuetext.style.bottom = '64.1%';
        tuepro.style.bottom = '63.8%';
        tueund.style.transform = 'scale(0)';

        tueOpen = false;

    }
}

// onsdag animation
function wedAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(tueOpen == true){
        tueAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(satOpen == true){
        satAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(wedOpen == false){

        weddiv.style.height = '58%';
        weddiv.style.zIndex = '5';
        wedtext.style.bottom = '53.7%';
        wedpro.style.bottom = '53.6%';
        wedund.style.transform = 'scale(1)';

        wedOpen = true;
    }
    else{

        weddiv.style.height = '14.2857%';
        weddiv.style.zIndex = '5';
        wedtext.style.bottom = '52%';
        wedpro.style.bottom = '51.6%';
        wedund.style.transform = 'scale(0)';

        wedOpen = false;

    }
}

// torsdag animation
function thuAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(tueOpen == true){
        tueAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(satOpen == true){
        satAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(thuOpen == false){

        fridiv.style.zIndex = '1';
        satdiv.style.zIndex = '2';
        sundiv.style.zIndex = '3';
        thudiv.style.height = '58%';
        thudiv.style.zIndex = '4';
        thutext.style.bottom = '41.9%';
        thupro.style.bottom = '41.3%';
        thuund.style.transform = 'scale(1)';

        thuOpen = true;
    }
    else{

        thudiv.style.height = '14.2857%';
        thudiv.style.zIndex = '4';
        thutext.style.bottom = '39.8%';
        thupro.style.bottom = '39.5%';
        thuund.style.transform = 'scale(0)';

        thuOpen = false;

    }
}

// fredag animation
function friAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(tueOpen == true){
        tueAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(satOpen == true){
        satAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(friOpen == false){

        fridiv.style.zIndex = '4';
        thudiv.style.zIndex = '2';
        satdiv.style.zIndex = '1';
        sundiv.style.zIndex = '3';
        fridiv.style.top = '42.85%';
        fridiv.style.height = '58%';
        fritext.style.bottom = '41.9%';
        fripro.style.bottom = '41.3%';
        friund.style.transform = 'scale(1)';
        friund.style.bottom = '46.9%';


        friOpen = true;
    }
    else{

        fridiv.style.top = '57.1%';
        fridiv.style.height = '14.2857%';
        fridiv.style.zIndex = '4';
        fritext.style.bottom = '27.6%';
        fripro.style.bottom = '27.5%';
        friund.style.transform = 'scale(0)';
        friund.style.bottom = '34.9%';
        

        friOpen = false;

    }
}

// lördag animation
function satAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(tueOpen == true){
        tueAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(sunOpen == true){
        sunAnimation();
    }

    if(satOpen == false){

        satdiv.style.zIndex = '4';
        fridiv.style.zIndex = '2';
        thudiv.style.zIndex = '1';
        sundiv.style.zIndex = '3';
        satdiv.style.top = '42.85%';
        satdiv.style.height = '58%';
        sattext.style.bottom = '41.9%';
        satpro.style.bottom = '41.3%';
        satund.style.transform = 'scale(1)';
        satund.style.bottom = '46.9%';


        satOpen = true;
    }
    else{

        satdiv.style.top = '71.4%';
        satdiv.style.height = '14.2857%';
        satdiv.style.zIndex = '4';
        sattext.style.bottom = '15.2%';
        satpro.style.bottom = '15.2%';
        satund.style.transform = 'scale(0)';
        satund.style.bottom = '21.5%';
        

        satOpen = false;

    }
}


// söndag animation
function sunAnimation(){

    if(monOpen == true){
        monAnimation();
    }
    if(tueOpen == true){
        tueAnimation();
    }
    if(wedOpen == true){
        wedAnimation();
    }
    if(thuOpen == true){
        thuAnimation();
    }
    if(friOpen == true){
        friAnimation();
    }
    if(satOpen == true){
        sunAnimation();
    }

    if(sunOpen == false){

        satdiv.style.zIndex = '3';
        fridiv.style.zIndex = '2';
        thudiv.style.zIndex = '1';
        sundiv.style.zIndex = '4';
        sundiv.style.top = '42.85%';
        sundiv.style.height = '58%';
        suntext.style.bottom = '41.9%';
        sunpro.style.bottom = '41.3%';
        sunund.style.transform = 'scale(1)';
        sunund.style.bottom = '46.9%';


        sunOpen = true;
    }
    else{

        sundiv.style.top = '85.7%';
        sundiv.style.height = '14.2857%';
        sundiv.style.zIndex = '4';
        suntext.style.bottom = '3.2%';
        sunpro.style.bottom = '3.2%';
        sunund.style.transform = 'scale(0)';
        sunund.style.bottom = '10%';
        

        sunOpen = false;

    }
}


//alla funktioner callas

mondiv.onclick = function(){monAnimation();};
tuediv.onclick = function(){tueAnimation();};
weddiv.onclick = function(){wedAnimation();};
thudiv.onclick = function(){thuAnimation();};
fridiv.onclick = function(){friAnimation();};
satdiv.onclick = function(){satAnimation();};
sundiv.onclick = function(){sunAnimation();};


//knapparna på botten
function clearProg(){

    console.log('clear progress');

}

function clearAll(){

    console.log('clear all');

}
