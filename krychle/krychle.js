document.getElementById("vypocet").addEventListener("click", function(){
    let a = strana();
    document.getElementById("vypis").innerHTML = "";
    let objemkrychle = objem(a);
    let povrchkrychle = povrch(a);
    vypisobjemu(objemkrychle);
    vypispovrchu(povrchkrychle);
})
function strana(){
    let strana = document.getElementById("strkrychle").value;
    return strana;
}
function objem(a){
    let objemk;
        objemk = a*a*a;
        return objemk;   
}

function povrch(a){
    let povrchk;  
    povrchk = 6*a;
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem krychle je " + objem + " " + jednotka + ".</p>";
   
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch krychle je " + povrch + " " + jednotka + ".</p>";
   
}