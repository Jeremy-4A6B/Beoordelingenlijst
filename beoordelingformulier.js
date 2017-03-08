function Invoeren(){
    var antwoord = document.getElementById('getal').value;
    
    if(antwoord >0 && antwoord < 50){
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + antwoord + " dus onvoldoende <br>";
    } else if(antwoord > 49 && antwoord < 60){
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + antwoord + " dus matig<br>";
    } else if(antwoord > 59 && antwoord < 75){
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + antwoord + " dus voldoende<br>";
    } else{
        document.getElementById('resultaat').innerHTML += "Het cijfer is:" + antwoord +  " dus goed<br>";
    }
}