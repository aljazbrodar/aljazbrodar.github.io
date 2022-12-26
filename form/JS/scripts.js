var i = 3;
var j = 4;
var execute=true;
function addRow() {
    var table = document.getElementById("tableOne");
    var row = table.insertRow(i);
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
    cell1.innerHTML = "<input style='text-align:left;' id='titleOfSec" + i + "' 'type='text' required>";
    cell2.innerHTML = "<input id='txnDate" + i + "' type='date' required>";
    cell3.innerHTML = "<input id='exeDate" + i + "' type='date'>";
    cell4.innerHTML = "<input id='code" + i + "' type='text' required>";
    cell5.innerHTML = "<input id='V" + i + "'  type='text'>";
    cell6.innerHTML = "<input id='amount" + i + "' type='number' required>";
    cell7.innerHTML = "<input id='AorD" + i + "' type='text' required>";
    cell8.innerHTML = "<input id='price" + i + "' type='number' required>";
    cell9.innerHTML = "<input id='amountOfSec" + i + "' type='number' required>";
    cell10.innerHTML = "<input id='ownershipForm" + i + "' type='text' required>";
    cell11.innerHTML = "<input id='natureOfOwnership" + i + "' type='text' >";
    i++;
    localStorage.setItem("counterRows1", i);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Row added successfully'
    })
}
function deleteRow() {
    if(!(i==3)){
        Swal.fire({
            title: 'Warning!',
            text: 'Are you sure you want to delete this row?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            allowOutsideClick: false
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                console.log("Action cancelled.");
            } else {
                if (i > 3) {
                    var table = document.getElementById("tableOne");
                    table.deleteRow(i - 1);
                    console.log(i - 1)
                    i--;
                    localStorage.setItem("counterRows1", i);
                }
            }
        });
    }else{
        Swal.fire({
            title: 'Error!',
            text: "Can't delete the first row!",
            icon: 'error',
            confirmButtonText: 'Acknowledge'
        })
    }



}


function addRow2() {
    var table2 = document.getElementById("tableTwo");
    var row2 = table2.insertRow(j);
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
    cell1.innerHTML = "<input id='titleOfDerSec2_" + j + "' style='text-align:left;' type='text' >";
    cell2.innerHTML = "<input id='exePrice2_" + j + "' type='number' >";
    cell3.innerHTML = "<input id='txnDate2_" + j + "' type='date' >";
    cell4.innerHTML = "<input id='exeDate2_" + j + "' type='date'>";
    cell5.innerHTML = "<input id='code2_" + j + "' type='text' >";
    cell6.innerHTML = "<input id='Vc2_" + j + "' type='text' >";
    cell7.innerHTML = "<input id='acquired2_" + j + "' type='number'>";
    cell8.innerHTML = "<input id='disposed2_" + j + "' type='number'>";
    cell9.innerHTML = "<input id='exerciseDate2_" + j + "' type='date' >";
    cell10.innerHTML = "<input id='expirationDate2_" + j + "' type='date' >";
    cell11.innerHTML = "<input id='title2_" + j + "' type='text' >";
    cell12.innerHTML = "<input id='amountOfShare2_" + j + "' type='number' >";
    cell13.innerHTML = "<input id='price2_" + j + "' type='number'>";
    cell14.innerHTML = "<input id='numDevOwned2_" + j + "' type='number' >";
    cell15.innerHTML = "<input id='ownershipForm2_" + j + "' type='text' >";
    cell16.innerHTML = "<input id='nature2_" + j + "' type='text' >";

    j++;
    localStorage.setItem("counterRows2", j);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Row added successfully'
    })
}

function deleteRow2() {
    if(!(j==4)){
    Swal.fire({
        title: 'Warning!',
        text: 'Are you sure you want to delete this row?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        allowOutsideClick: false
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            console.log("Action cancelled.");
        } else {
            if (j > 3) {
                var table2 = document.getElementById("tableTwo");
                table2.deleteRow(j - 1);
                console.log(j - 1)
                j--;
                localStorage.setItem("counterRows1", j);
            }
        }
    });
    }else{
        Swal.fire({
            title: 'Error!',
            text: "Can't delete the first row!",
            icon: 'error',
            confirmButtonText: 'Acknowledge'
        })
    }


}

//prevent form from submiting and reloading the page
//but rather store inputs to localstorage and redirect to print.html
$("#sectionForm").submit(function(e) {
  e.preventDefault();
  handleForm()
  return false;
})
//localStorage--> print/handle form inputs
//redirect to print.html and fill from localStorage
function handleForm(){
    localStorage.clear();
    localStorage.setItem("counterRows1", i);
    localStorage.setItem("counterRows2", j);
    //signature
    var mysrc = document.getElementById("signature-pad-img-idd").src;
    console.log(mysrc)
    localStorage.setItem("signature", mysrc );


    var lastName= document.getElementById("lastname");
    var middleName= document.getElementById("middlename");
    var firstName= document.getElementById("firstname");
    var street= document.getElementById("street");
    var city= document.getElementById("city");
    var state= document.getElementById("state");
    var zip= document.getElementById("zip");

    var issuerNameInput= document.getElementById("issuerNameInput");
    var ticker= document.getElementById("ticker");
    var date1= document.getElementById("date1");
    var date2= document.getElementById("date2");


    var obligation= document.getElementById("obligationCheck");
    if(document.getElementById("obligationCheck").checked == true){
        localStorage.setItem('obligationCheck', "true");
    }else{
        localStorage.setItem('obligationCheck', "false");
    }

    var director= document.getElementById("director");
    if(document.getElementById("director").checked == true){
        localStorage.setItem('director', "true");
    }else{
        localStorage.setItem('director', "false");
    }

    var officer= document.getElementById("officer");
    if(document.getElementById("officer").checked == true){
        localStorage.setItem('officer', "true");
    }else{
        localStorage.setItem('officer', "false");
    }
    var owner= document.getElementById("tenOwner");
    if(document.getElementById("tenOwner").checked == true){
        localStorage.setItem('tenOwner', "true");
    }else{
        localStorage.setItem('tenOwner', "false");
    }
    var custom= document.getElementById("customPerson");
    if(document.getElementById("customPerson").checked == true){
        localStorage.setItem('customPerson', "true");
    }else{
        localStorage.setItem('customPerson', "false");
    }
    //2 radio btns
    var onePer= document.getElementById("onePer");
    var moreThanOne= document.getElementById("moreThanOne");
    if(document.getElementById("onePer").checked == true){
        localStorage.setItem('onePer', "true");
    }else{
        localStorage.setItem('onePer', "false");
    }
    if(document.getElementById("moreThanOne").checked == true){
        localStorage.setItem('moreThanOne', "true");
    }else{
        localStorage.setItem('moreThanOne', "false");
    }
    //table I
    if (i > 2) {
        var titleOfSecArr= [i];
        var txnDateArr= [i];
        var exeDateArr= [i];
        var codeArr= [i];
        var VcArr= [i];
        var amountArr= [i];
        var AorDArr= [i];
        var priceArr= [i];
        var amountOfSecArr= [i];
        var ownershipFormArr= [i];
        var natureOfOwnershipArr= [i];
        for (let x = 2; x < i; x++) {
            titleOfSecArr[x]=document.getElementById("titleOfSec"+x);
            localStorage.setItem("titleOfSecArr"+x, titleOfSecArr[x].value);
            txnDateArr[x]=document.getElementById("txnDate"+x);
            localStorage.setItem("txnDateArr"+x, txnDateArr[x].value);
            exeDateArr[x]=document.getElementById("exeDate"+x);
            localStorage.setItem("exeDateArr"+x, exeDateArr[x].value);
            codeArr[x]=document.getElementById("code"+x);
            localStorage.setItem("codeArr"+x, codeArr[x].value);
            VcArr[x]=document.getElementById("V"+x);
            localStorage.setItem("VcArr"+x, VcArr[x].value);
            amountArr[x]=document.getElementById("amount"+x);
            localStorage.setItem("amountArr"+x, amountArr[x].value);
            AorDArr[x]=document.getElementById("AorD"+x);
            localStorage.setItem("AorDArr"+x, AorDArr[x].value);
            priceArr[x]=document.getElementById("price"+x);
            localStorage.setItem("priceArr"+x, priceArr[x].value);
            amountOfSecArr[x]=document.getElementById("amountOfSec"+x);
            localStorage.setItem("amountOfSecArr"+x, amountOfSecArr[x].value);
            ownershipFormArr[x]=document.getElementById("ownershipForm"+x);
            localStorage.setItem("ownershipFormArr"+x, ownershipFormArr[x].value);
            natureOfOwnershipArr[x]=document.getElementById("natureOfOwnership"+x);
            localStorage.setItem("natureOfOwnershipArr"+x, natureOfOwnershipArr[x].value);
        }
    }

    //TABLE II
    if(j > 3){
        var titleOfDerSec2Arr=[j];
        var exePrice2Arr=[j];
        var txnDate2Arr=[j];
        var exeDate2Arr=[j];
        var code2Arr=[j];
        var Vc2Arr=[j];
        var acquired2Arr=[j];
        var disposed2Arr=[j];
        var exerciseDate2Arr=[j];
        var expirationDate2Arr=[j];
        var title2Arr=[j];
        var amountOfShare2Arr=[j];
        var price2Arr=[j];
        var numDevOwned2Arr=[j];
        var ownershipForm2Arr=[j];
        var nature2Arr=[j];
        for (let x = 3; x < j; x++) {
            titleOfDerSec2Arr[x]=document.getElementById("titleOfDerSec2_"+x);
            localStorage.setItem("titleOfDerSec2_"+x, titleOfDerSec2Arr[x].value);
            exePrice2Arr[x]=document.getElementById("exePrice2_"+x);
            localStorage.setItem("exePrice2_"+x, exePrice2Arr[x].value);
            txnDate2Arr[x]=document.getElementById("txnDate2_"+x);
            localStorage.setItem("txnDate2_"+x, txnDate2Arr[x].value);
            exeDate2Arr[x]=document.getElementById("exeDate2_"+x);
            localStorage.setItem("exeDate2_"+x, exeDate2Arr[x].value);
            code2Arr[x]=document.getElementById("code2_"+x);
            localStorage.setItem("code2_"+x, code2Arr[x].value);
            Vc2Arr[x]=document.getElementById("Vc2_"+x);
            localStorage.setItem("Vc2_"+x, Vc2Arr[x].value);
            acquired2Arr[x]=document.getElementById("acquired2_"+x);
            localStorage.setItem("acquired2_"+x, acquired2Arr[x].value);
            disposed2Arr[x]=document.getElementById("disposed2_"+x);
            localStorage.setItem("disposed2_"+x, disposed2Arr[x].value);
            exerciseDate2Arr[x]=document.getElementById("exerciseDate2_"+x);
            localStorage.setItem("exerciseDate2_"+x, exerciseDate2Arr[x].value);
            expirationDate2Arr[x]=document.getElementById("expirationDate2_"+x);
            localStorage.setItem("expirationDate2_"+x, expirationDate2Arr[x].value);
            title2Arr[x]=document.getElementById("title2_"+x);
            localStorage.setItem("title2_"+x, title2Arr[x].value);
            amountOfShare2Arr[x]=document.getElementById("amountOfShare2_"+x);
            localStorage.setItem("amountOfShare2_"+x, amountOfShare2Arr[x].value);
            price2Arr[x]=document.getElementById("price2_"+x);
            localStorage.setItem("price2_"+x, price2Arr[x].value);
            numDevOwned2Arr[x]=document.getElementById("numDevOwned2_"+x);
            localStorage.setItem("numDevOwned2_"+x, numDevOwned2Arr[x].value);
            ownershipForm2Arr[x]=document.getElementById("ownershipForm2_"+x);
            localStorage.setItem("ownershipForm2_"+x, ownershipForm2Arr[x].value);
            nature2Arr[x]=document.getElementById("nature2_"+x);
            localStorage.setItem("nature2_"+x, nature2Arr[x].value);

            
        }
        window.location.href = "print.html";
    }

    var explanation= document.getElementById("explanation");
    var remarks= document.getElementById("remarks");
    localStorage.setItem("explanation", explanation.value);
    localStorage.setItem("remarks", remarks.value);
    var finalDate = document.getElementById("finalDate");
    localStorage.setItem("finalDate", finalDate.value);

    localStorage.setItem("lastname", lastName.value);
    localStorage.setItem("middlename", middleName.value);
    localStorage.setItem("firstname", firstName.value);
    localStorage.setItem("street", street.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("zip", zip.value);
    
    localStorage.setItem("issuerNameInput", issuerNameInput.value);
    localStorage.setItem("ticker", ticker.value);
    localStorage.setItem("date1", date1.value);
    localStorage.setItem("date2", date2.value);
}



//USING ASYNC FUNCTION IN ORDER TO USE AWAIT, WHICH ALLOWS 
//CHAINING SWEETALERT2 MODALS
/*async function IsEmpty(){
    if (document.getElementById("lastname").value == "") {
        await Swal.fire({
            title: 'Please enter your last name: ',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("lastname").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
        
    }

    if (document.getElementById("firstname").value == "") {
        await Swal.fire({
            title: 'Please enter your first name: ',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("firstname").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("street").value == "") {
        await Swal.fire({
            title: 'Please enter street name: ',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("street").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("city").value == "") {
        await Swal.fire({
            title: 'Please enter city name: ',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("city").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("state").value == "") {
        await Swal.fire({
            title: 'Please enter state name: ',
            input: 'select',
            inputOptions: {
                'AL': 'Alabama',
                'AK': 'Alaska',
                'AZ': 'Arizona',
                'AR': 'Arkansas',
                'CA': 'California',
                'CO': 'Colorado',
                'CT': 'Connecticut',
                'DE': 'Delaware',
                'DC': 'District Of Columbia',
                'FL': 'Florida',
                'GA': 'Georgia',
                'HI': 'Hawaii',
                'ID': 'Idaho',
                'IL': 'Illinois',
                'IN': 'Indiana',
                'IA': 'Iowa',
                'KS': 'Kansas',
                'KY': 'Kentucky',
                'LA': 'Louisana',
                'ME': 'Maine',
                'MD': 'Maryland',
                'MA': 'Massachusetts',
                'MI': 'Michigan',
                'MN': 'Minnesota',
                'MS': 'Mississippi',
                'MO': 'Missouri',
                'MT': 'Montana',
                'NE': 'Nebraska',
                'NV': 'Nevada',
                'NH': 'New Hampshire',
                'NJ': 'New Jersey',
                'NM': 'New Mexico',
                'NY': 'New York',
                'NC': 'North Carolina',
                'ND': 'North Dakota',
                'OH': 'Ohio',
                'OK': 'Oklahoma',
                'OR': 'Oregon',
                'PA': 'Pennsylvania',
                'RI': 'Rhode Island',
                'SC': 'South Carolina',
                'SD': 'South Dakota',
                'TN': 'Tennessee',
                'TX': 'Texas',
                'UT': 'Utah',
                'VT': 'Vermont',
                'VA': 'Virginia',
                'WA': 'Washington',
                'WV': 'West Virginia',
                'WI': 'Wisconsin',
                'WY': 'Wyoming'
            },
            inputPlaceholder: 'Select state',
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("state").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }
    
    if (document.getElementById("zip").value == "") {
        await Swal.fire({
            title: 'Please enter zip: ',
            input: 'number',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("zip").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("issuerNameInput").value == "") {
        await Swal.fire({
            title: "Please enter issuer's name: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("issuerNameInput").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("ticker").value == "") {
        await Swal.fire({
            title: "Please enter ticker: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("ticker").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("date1").value == "") {
        await Swal.fire({
            title: "Please enter date of earliest Transaction: ",
            inputPlaceholder: "yyyy-mm-dd",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("date1").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("titleOfSec2").value == "") {
        await Swal.fire({
            title: "Please enter the title of security: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("titleOfSec2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("txnDate2").value == "") {
        await Swal.fire({
            title: "Please enter date of transaction: ",
            inputPlaceholder: "yyyy-mm-dd",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("txnDate2").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("code2").value == "") {
        await Swal.fire({
            title: "Please enter code: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("code2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }


    if (document.getElementById("amount2").value == "") {
        await Swal.fire({
            title: "Please enter the amount: ",
            input: 'number',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("amount2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("AorD2").value == "") {
        await Swal.fire({
            title: "Please enter A/D: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("AorD2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("price2").value == "") {
        await Swal.fire({
            title: "Please enter the price: ",
            input: 'number',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("price2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("amountOfSec2").value == "") {
        await Swal.fire({
            title: "Please enter the amount: ",
            input: 'number',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("amountOfSec2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("ownershipForm2").value == "") {
        await Swal.fire({
            title: "Please enter the ownership forn D/I: ",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("ownershipForm2").value = result.value.toUpperCase();
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }

    if (document.getElementById("finalDate").value == "") {
        await Swal.fire({
            title: "Please enter date of signing the form: ",
            inputPlaceholder: "yyyy-mm-dd",
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Insert',
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            //if value is entered update
            if(result.isConfirmed){
                document.getElementById("finalDate").value = result.value;
                Swal.fire({
                  title: `"${result.value}" inserted`,
                })
            }
          })
    }
    
}
*/