document.getElementById("vypocet").addEventListener("click", function(){
    let stranaPodstavy = stranaP();
    let vyskaPodstavy = vyskaP();
    let pocetHran = pocetH();
    let vyskaJehlanu = vyskaJ();
    let vyskaSteny = vyskaS(vyskaJehlanu,stranaPodstavy);
    let vyskaSteny2 = vyskaS2(vyskaJehlanu, vyskaPodstavy);
    let obsahPodstavy = Spodstavy(stranaPodstavy, vyskaPodstavy);
    let objemJehlanu = objemJ(obsahPodstavy, vyskaJehlanu);
    let povrchJehlanu = povrchJ(obsahPodstavy, stranaPodstavy, vyskaSteny, pocetHran, vyskaSteny2,vyskaPodstavy);
    document.getElementById("vypis").innerHTML = "";
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
    }
    else if(tvar == "obdelnik"){
        obsah = strana*strana2;
    }
    else{
        obsah = strana*vyskaT(strana)/2;  
    }
    return obsah;
}
function pocetH(){
    let tvar = document.getElementById("tvar").value;
    let pocet;
    if(tvar == "ctverec"){
        pocet = 4;
    }
    else if(tvar == "obdelnik"){
        pocet = 4;
    }
    else{
        pocet = 3; 
    }
    return pocet;
}
function vyskaT(strana){
    let obvod = strana * 3 / 2;
    let vyska = (2/strana * Math.sqrt(obvod * (obvod - strana) * (obvod - strana) * (obvod - strana))).toFixed(2);
    console.log(vyska);
    return vyska;
}
function vyskaJ(){
    let strana = document.getElementById("vyska").value;
    return strana;
}
function vyskaS(vyskaJehlanu,stranaPodstavy){
    let strana = (Math.sqrt(vyskaJehlanu*vyskaJehlanu + stranaPodstavy/2*stranaPodstavy/2)).toFixed(2);
    return strana;
}
function vyskaS2(vyskaJehlanu,vyskaPodstavy){
    let strana = (Math.sqrt(vyskaJehlanu*vyskaJehlanu + vyskaPodstavy/2*vyskaPodstavy/2)).toFixed(2);
    return strana;
}
function objemJ(obsahPodstavy, vyskaJehlanu){
    let objemk;
        objemk = (obsahPodstavy * vyskaJehlanu / 3).toFixed(2);
        return objemk;   
}
function povrchJ(obsahPodstavy, stranaPodstavy, vyskaSteny, pocetHran, vyskaSteny2,vyskaPodstavy){ 
    let tvar = document.getElementById("tvar").value;
    let povrchk;
    if(tvar == "obdelnik"){
        povrchk = (obsahPodstavy + (stranaPodstavy * vyskaSteny + vyskaPodstavy * vyskaSteny2)).toFixed(2);

    }
    else{
        povrchk = (obsahPodstavy +  stranaPodstavy * vyskaSteny / 2 * pocetHran).toFixed(2);
    }
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