function ageInDays(){
    var  birthYear = prompt('what is the year in which you born');
    var ageIndays = (2021-birthYear)*365;
    var h1 = document.createElement("h1");
    var textAns = document.createTextNode("you are" + ageIndays +"days old");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textAns);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset(){
    document.getElementById("flex-box-result").remove();
}
