document.getElementById("vypocet").addEventListener("click", function(){
    let stranaPodstavy = stranaP();
    let vyskaPodstavy = vyskaP();
    let pocetHran = pocetH();
    let vyskaJehlanu = vyskaJ();
    let vyskaSteny = vyskaS(vyskaJehlanu,stranaPodstavy);
    let hranaSteny = hranaS();
    let obsahPodstavy = Spodstavy(stranaPodstavy, vyskaPodstavy);
    let objemJehlanu = objemJ(obsahPodstavy, vyskaJehlanu);
    let povrchJehlanu = povrchJ(obsahPodstavy, hranaSteny, vyskaSteny, pocetHran);

    document.getElementById("vypis").innerHTML = "";
    console.log(obsahPodstavy);
    vypisobjemu(objemJehlanu);
    vypispovrchu(povrchJehlanu);
})
function stranaP(){
    let strana = document.getElementById("strpdstvy").value;
    return strana;
}
function vyskaP(){
    let strana = document.getElementById("strpdstvy2").value;
    return strana;
}
function Spodstavy(strana, strana2){
    let tvar;
    let obsah;
    tvar = document.getElementById("tvar").value;
    if(tvar == "ctverec"){
        obsah = strana*strana;
        return obsah;
    }
    else if(tvar == "obdelnik"){
        obsah = strana*strana2;
        return obsah;
    }
    else{
        obsah = strana*strana2/2;
        return obsah;
    }

}
function pocetH(){
    let tvar = document.getElementById("tvar").value;
    let pocet;
    if(tvar == "ctverec"){
        pocet = 4;
        return pocet;
    }
    else if(tvar == "obdelnik"){
        pocet = 4;
        return pocet;
    }
    else{
        pocet = 3;
        return pocet;
    }
}
function vyskaJ(){
    let strana = document.getElementById("vyska").value;
    return strana;
}
function hranaS(){
}
function vyskaS(vyskaJehlanu,stranaPodstavy){
    let strana = (Math.sqrt(vyskaJehlanu*vyskaJehlanu + (stranaPodstavy*stranaPodstavy)/2)).toFixed(2);
    return strana;
}
function objemJ(obsahPodstavy, vyskaJehlanu){
    let objemk;
        objemk = (obsahPodstavy * vyskaJehlanu / 3).toFixed(2);
        return objemk;   
}
function povrchJ(obsahPodstavy, hranaSteny, vyskaSteny, pocetHran){
    let povrchk;  
    povrchk = obsahPodstavy + hranaSteny * vyskaSteny / 2 * pocetHran;
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem jehlanu je " + objem + " " + jednotka + ".</p>";
   
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
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch jehlanu je " + povrch + " " + jednotka + ".</p>";
   
}