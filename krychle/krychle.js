document.getElementById("vypocet").addEventListener("click", function(){
    let a = strana();
    document.getElementById("vypis").innerHTML = "";
    let objemkrychle = objem(a);
    let povrchkrychle = povrch(a);
    if(objemkrychle == null && povrchkrychle == null){
            document.getElementById("vypis").innerHTML = "<br>" + "Nezvolil jste si, jestli chcete počítat objem nebo povrch !";
    }
    else if(povrchkrychle == null){
        vypisobjemu(objemkrychle);

    }
    else if(objemkrychle == null){
        vypispovrchu(povrchkrychle);
    }
    else{
        vypisobjemu(objemkrychle);
        vypispovrchu(povrchkrychle);
    }
})
function strana(){
    let strana = document.getElementById("strkrychle").value;
    return strana;
}
function objem(a){
    let objemk;
    let volba = 0;
    if(volba == 0){
        objemk = a*a*a;
        return objemk;
    }
    else {
        objemk = null;
        return objemk;
    }     
}

function povrch(a){
    let povrchk;
    let volba = 0;
    if(volba == 1){
        povrchk = 6*a;
        return povrchk;
    }
    else {
        povrchk = null;
        return povrchk;
    }  
}
function vypisobjemu(objem){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    switch(jednotky){
        case 2: jednotka = "mm";
        break;
        case 3: jednotka = "dm";
        break;
        case 4: jednotka = "m";
        break;
        case 5: jednotka = "km";
        break;
        default: jednotka = "cm"
        break;
    }
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Objem krychle je " + objem + " " + jednotka + "</p>";
   
}
function vypispovrchu(povrch){
    let jednotky = document.getElementById("jednotka").value;
    let jednotka;
    switch(jednotky){
        case 3: jednotka = "mm";
        break;
        case 4: jednotka = "dm";
        break;
        case 5: jednotka = "m";
        break;
        case 6: jednotka = "km";
        break;
        default: jednotka = "cm"
        break;
    }
    document.getElementById("vypis").innerHTML += "<br>" + "<p>Povrch krychle je " + povrch + " " + jednotka + "</p>";
   
}