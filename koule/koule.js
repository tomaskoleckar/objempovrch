document.getElementById("vypocet").addEventListener("click", function(){
    let r = polomer();
    document.getElementById("vypis").innerHTML = "";
    let objemkrychle = objem(r);
    let povrchkrychle = povrch(r);
    vypisobjemu(objemkrychle);
    vypispovrchu(povrchkrychle);
})
function polomer(){
    let strana = document.getElementById("polomer").value;
    return strana;
}
function objem(r){
    let objemk;
        objemk = (4/3*Math.PI*r*r*r).toFixed(2);
        return objemk;   
}

function povrch(r){
    let povrchk;  
    povrchk = (4*r*r*Math.PI).toFixed(2);
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem koule je " + objem + " " + jednotka + ".</p>";
   
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch koule je " + povrch + " " + jednotka + ".</p>";
   
}