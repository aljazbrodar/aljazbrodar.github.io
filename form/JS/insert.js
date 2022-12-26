addRowV2();

displayFromStorage();

function displayFromStorage(){
    if(localStorage.getItem("titleOfDerSec2_3")==null||localStorage.getItem("titleOfDerSec2_3")==""){ //remove table 2 if its empty
        document.getElementById('tableTwo').remove();
    }
    document.getElementById("lastnamep").innerHTML =localStorage.getItem("lastname");
    document.getElementById("firstnamep").innerHTML =localStorage.getItem("firstname");
    document.getElementById("middlenamep").innerHTML =localStorage.getItem("middlenamep");
    document.getElementById("streetp").innerHTML =localStorage.getItem("street");
    document.getElementById("cityp").innerHTML =localStorage.getItem("city");
    document.getElementById("statep").innerHTML =localStorage.getItem("state");
    document.getElementById("zipp").innerHTML =localStorage.getItem("zip");
    
    document.getElementById("issuerNameInputp").innerHTML =localStorage.getItem("issuerNameInput");
    document.getElementById("tickerp").innerHTML =localStorage.getItem("ticker");
    document.getElementById("date1p").innerHTML =localStorage.getItem("date1");
    document.getElementById("date2p").innerHTML =localStorage.getItem("date2");

    //obligations check 
    if(localStorage.getItem("obligationCheck")=="true"){
        document.getElementById("obligationCheck").innerHTML ="X";
    }
    //checkboxes script
    if(localStorage.getItem("director")=="true"){
        document.getElementById("directorp").innerHTML ="X";
    }

    if(localStorage.getItem("customPerson")=="true"){
        document.getElementById("customPersonp").innerHTML ="X";
    }
    if(localStorage.getItem("officer")=="true"){
        document.getElementById("officerp").innerHTML ="X";
    }
    if(localStorage.getItem("tenOwner")=="true"){
        document.getElementById("tenOwnerp").innerHTML ="X";
    }
    //radio btns script 
    if(localStorage.getItem("onePer")=="true"){
        document.getElementById("onePerp").innerHTML ="X";
    }
    if(localStorage.getItem("moreThanOne")=="true"){
        document.getElementById("moreThanOnep").innerHTML ="X";
    }
    //table I
    if(!(3==localStorage.getItem("counterRows1"))&&execute){
        addRowV2();
    }
    //table I fill elements

    if (i > 2) {
        for (let x = 2; x < localStorage.getItem("counterRows1"); x++) {
            document.getElementById("titleOfSecp"+x).innerHTML = localStorage.getItem("titleOfSecArr"+x);
            document.getElementById("txnDatep"+x).innerHTML = localStorage.getItem("txnDateArr"+x);
            document.getElementById("exeDatep"+x).innerHTML = localStorage.getItem("exeDateArr"+x);    
            document.getElementById("codep"+x).innerHTML = localStorage.getItem("codeArr"+x);    
            document.getElementById("Vp"+x).innerHTML = localStorage.getItem("VArr"+x);   
            document.getElementById("amountp"+x).innerHTML = localStorage.getItem("amountArr"+x);    
            document.getElementById("AorDp"+x).innerHTML = localStorage.getItem("AorDArr"+x);      
            document.getElementById("pricep"+x).innerHTML = localStorage.getItem("priceArr"+x);   
            document.getElementById("amountOfSecp"+x).innerHTML = localStorage.getItem("amountOfSecArr"+x);       
            document.getElementById("ownershipFormp"+x).innerHTML = localStorage.getItem("ownershipFormArr"+x);       
            document.getElementById("natureOfOwnershipp"+x).innerHTML = localStorage.getItem("natureOfOwnershipArr"+x);
        }
    }

    //table II fill elements
    if(localStorage.getItem("titleOfDerSec2_3")!=""){
        for (let x = 3; x <= localStorage.getItem("counterRows2"); x++) {
            document.getElementById("titleOfDerSecp2_"+x).innerHTML = localStorage.getItem("titleOfDerSec2_"+x);
            document.getElementById("exePricep2_"+x).innerHTML = localStorage.getItem("exePrice2_"+x);
            document.getElementById("txnDatep2_"+x).innerHTML = localStorage.getItem("txnDate2_"+x);    
            document.getElementById("exeDatep2_"+x).innerHTML = localStorage.getItem("exeDate2_"+x);    
            document.getElementById("codep2_"+x).innerHTML = localStorage.getItem("code2_"+x);   
            document.getElementById("Vcp2_"+x).innerHTML = localStorage.getItem("Vc2_"+x);    
            document.getElementById("acquiredp2_"+x).innerHTML = localStorage.getItem("acquired2_"+x);      
            document.getElementById("disposedp2_"+x).innerHTML = localStorage.getItem("disposed2_"+x);   
            document.getElementById("exerciseDatep2_"+x).innerHTML = localStorage.getItem("exerciseDate2_"+x);       
            document.getElementById("expirationDatep2_"+x).innerHTML = localStorage.getItem("expirationDate2_"+x);       
            document.getElementById("titlep2_"+x).innerHTML = localStorage.getItem("title2_"+x);
            document.getElementById("amountOfSharep2_"+x).innerHTML = localStorage.getItem("amountOfShare2_"+x);
            document.getElementById("pricep2_"+x).innerHTML = localStorage.getItem("price2_"+x);
            document.getElementById("numDevOwnedp2_"+x).innerHTML = localStorage.getItem("numDevOwned2_"+x);
            document.getElementById("ownershipFormp2_"+x).innerHTML = localStorage.getItem("ownershipForm2_"+x);
            document.getElementById("naturep2_"+x).innerHTML = localStorage.getItem("nature2_"+x);
        }   
    }

    //footer
    document.getElementById("explanationp").innerHTML = localStorage.getItem("explanation");
    document.getElementById("remarksp").innerHTML = localStorage.getItem("remarks");
    document.getElementById("finalDatep").innerHTML = localStorage.getItem("finalDate");
    document.getElementById("signature-pad-img-iddd").src=localStorage.getItem("signature");
}

function addRowV2(){
    execute = false;
    for (let x =3; x < localStorage.getItem("counterRows1"); x++) {
        var table = document.getElementById("tableOne");
        var row = table.insertRow(x);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        cell1.innerHTML = "<label class='userInput' id='titleOfSecp" + x + "'></label>";
        cell2.innerHTML = "<label class='userInput' id='txnDatep" + x + "'></label>";
        cell3.innerHTML = "<label class='userInput' id='exeDatep" + x + "'></label>";
        cell4.innerHTML = "<label class='userInput' id='codep" + x+ "'></label>";
        cell5.innerHTML = "<label class='userInput' id='Vp" + x + "'></label>";
        cell6.innerHTML = "<label class='userInput' id='amountp" + x + "'></label>";
        cell7.innerHTML = "<label class='userInput' id='AorDp" + x + "'></label>";
        cell8.innerHTML = "<label class='userInput' id='pricep" + x + "'></label>";
        cell9.innerHTML = "<label class='userInput' id='amountOfSecp" + x + "'></label>";
        cell10.innerHTML = "<label class='userInput' id='ownershipFormp" + x + "'></label>";
        cell11.innerHTML = "<label class='userInput' id='natureOfOwnershipp" + x + "'></label>";
    }

    for (let x = 3; x <= localStorage.getItem("counterRows2"); x++) {
        var table2 = document.getElementById("tableTwo");
        var row2 = table2.insertRow(x);
        var cell1 = row2.insertCell(0);
        var cell2 = row2.insertCell(1);
        var cell3 = row2.insertCell(2);
        var cell4 = row2.insertCell(3);
        var cell5 = row2.insertCell(4);
        var cell6 = row2.insertCell(5);
        var cell7 = row2.insertCell(6);
        var cell8 = row2.insertCell(7);
        var cell9 = row2.insertCell(8);
        var cell10 = row2.insertCell(9);
        var cell11 = row2.insertCell(10);
        var cell12 = row2.insertCell(11);
        var cell13 = row2.insertCell(12);
        var cell14 = row2.insertCell(13);
        var cell15 = row2.insertCell(14);
        var cell16 = row2.insertCell(15);
        cell1.innerHTML = "<label class='userInput' id='titleOfDerSecp2_" + x + "'></label>";
        cell2.innerHTML = "<label class='userInput' id='exePricep2_" + x + "'></label>";
        cell3.innerHTML = "<label class='userInput' id='txnDatep2_" + x + "'></label>";
        cell4.innerHTML = "<label class='userInput' id='exeDatep2_" + x + "'></label>";
        cell5.innerHTML = "<label class='userInput' id='codep2_" + x + "'></label>";
        cell6.innerHTML = "<label class='userInput' id='Vcp2_" + x + "'></label>";
        cell7.innerHTML = "<label class='userInput' id='acquiredp2_" + x + "'></label>";
        cell8.innerHTML = "<label class='userInput' id='disposedp2_" + x + "'></label>";
        cell9.innerHTML = "<label class='userInput' id='exerciseDatep2_" + x + "'></label>";
        cell10.innerHTML = "<label class='userInput' id='expirationDatep2_" + x + "'></label>";
        cell11.innerHTML = "<label class='userInput' id='titlep2_" + x + "'></label>";
        cell12.innerHTML = "<label class='userInput' id='amountOfSharep2_" + x + "'></label>";
        cell13.innerHTML = "<label class='userInput' id='pricep2_" + x + "'></label>";
        cell14.innerHTML = "<label class='userInput' id='numDevOwnedp2_" + x + "'></label>";
        cell15.innerHTML = "<label class='userInput' id='ownershipFormp2_" + x + "'></label>";
        cell16.innerHTML = "<label class='userInput' id='naturep2_" + x + "'></label>";
    
    }
}
function redirectMe(){
    localStorage.clear()
    location.href = 'index.html';
}
function printMe(){
    document.getElementById('finalSubmitPrint').style.display='none';
    document.getElementById('returnBtn').style.display='none';
    for(var i=0;i<document.getElementsByTagName('label').length;i++){
        document.getElementsByTagName('label')[i].style.fontSize='8px'
    }
    document.getElementById('main').style.width='100%'
    document.getElementById('footInfo').style.width='100%'
    document.getElementById('headerInfo').style.width='100%'
    for(var i=0;i<document.getElementById('footInfo').getElementsByTagName('p').length;i++){
        document.getElementById('footInfo').getElementsByTagName('p')[i].style.fontSize='6px'
    }
    
    window.print();
    for(var i=0;i<document.getElementsByTagName('label').length;i++){
        document.getElementsByTagName('label')[i].style.fontSize='small'
    }
    document.getElementById('main').style.width='90%'
    document.getElementById('footInfo').style.width='90%'
    document.getElementById('headerInfo').style.width='90%'
    document.getElementById('footInfo').style.fontSize='x-small'
    document.getElementById('finalSubmitPrint').style.display='inline';
    document.getElementById('returnBtn').style.display='inline';
    
}