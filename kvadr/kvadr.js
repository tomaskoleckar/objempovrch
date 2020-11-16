document.getElementById("vypocet").addEventListener("click", function(){
    let strany = [];
    strany[0] = stranaA();
    strany[1] = stranaB();
    strany[2] = stranaC();
    console.log(strany);
    document.getElementById("vypis").innerHTML = "";
    let objemkrychle = objem(strany);
    let povrchkrychle = povrch(strany);
    vypisobjemu(objemkrychle);
    vypispovrchu(povrchkrychle);
})
function stranaA(){
    let strana = document.getElementById("strkvdr").value;
    return strana;
}
function stranaB(){
    let strana = document.getElementById("strkvdr2").value;
    return strana;
}
function stranaC(){
    let strana = document.getElementById("strkvdr3").value;
    return strana;
}
function objem(a){
    let objemk;
        objemk = a[0]*a[1]*a[2];
        return objemk;   
}

function povrch(a){
    let povrchk;  
    povrchk = 2*a[0] + 2*a[1] + 2*a[2];
    return povrchk;
    
}
function vypisobjemu(objem){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    console.log(jednotky);
    switch(jednotky){
        case "mm": jednotka = "mm";
        break;
        case "dm": jednotka = "dm";
        break;
        case "m": jednotka = "m";
        break;
        case "km": jednotka = "km";
        break;
        default: jednotka = "cm"
        break;
    }
    console.log(jednotka);
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem kvadru je " + objem + " " + jednotka + ".</p>";
   
}
function vypispovrchu(povrch){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    switch(jednotky){
        case "mm": jednotka = "mm";
        break;
        case "dm": jednotka = "dm";
        break;
        case "m": jednotka = "m";
        break;
        case "km": jednotka = "km";
        break;
        default: jednotka = "cm"
        break;
    }
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch kvadru je " + povrch + " " + jednotka + ".</p>";
   
}