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
    povrchk = 6*a*a;
    return povrchk;
    
}
function vypisobjemu(objem){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    console.log(jednotky);
    switch(jednotky){
        case "mm": jednotka = "mm<sup>3</sup>";
        break;
        case "dm": jednotka = "dm<sup>3</sup>";
        break;
        case "m": jednotka = "m<sup>3</sup>";
        break;
        case "km": jednotka = "km<sup>3</sup>";
        break;
        default: jednotka = "cm<sup>3</sup>"
        break;
    }
    console.log(jednotka);
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem krychle je " + objem + " " + jednotka + ".</p>";
   
}
function vypispovrchu(povrch){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    switch(jednotky){
        case "mm": jednotka = "mm<sup>2</sup>";
        break;
        case "dm": jednotka = "dm<sup>2</sup>";
        break;
        case "m": jednotka = "m<sup>2</sup>";
        break;
        case "km": jednotka = "km<sup>2</sup>";
        break;
        default: jednotka = "cm<sup>2</sup>"
        break;
    }
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch krychle je " + povrch + " " + jednotka + ".</p>";
   
}