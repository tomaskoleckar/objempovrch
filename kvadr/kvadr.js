document.getElementById("vypocet").addEventListener("click", function(){
    let strany = [];
    let objemkrychle;
    let povrchkrychle;
    strany[0] = stranaA();
    strany[1] = stranaB();
    strany[2] = stranaC();
    console.log(strany);
    document.getElementById("vypis").innerHTML = "";
    objemkrychle = objem(strany);
    povrchkrychle = povrch(strany);
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
    povrchk = 2*(a[0]*a[1]+a[0]*a[2]+a[2]*a[0]);
    return povrchk;
    
}
function vypisobjemu(objem){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem kvadru je " + objem + " " + jednotka + ".</p>";
   
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch kvadru je " + povrch + " " + jednotka + ".</p>";
   
}