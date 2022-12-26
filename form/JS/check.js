var goNext=true;
//making sure at least one of the checkboxes is selected on 5. point


function validateForm() {
    //mark optional inputs green 
    document.getElementById('obligationCheck').classList.add("makeGreenT");
    document.getElementById('middlename').classList.add("makeGreen");
    document.getElementById('date2').classList.add("makeGreen");
    document.getElementById('exeDate2').classList.add("makeGreenT");
    document.getElementById('V2').classList.add("makeGreenT");
    document.getElementById('natureOfOwnership2').classList.add("makeGreenT");

    document.getElementById('titleOfDerSec2_3').classList.add("makeGreenT");
    document.getElementById('exePrice2_3').classList.add("makeGreenT");
    document.getElementById('txnDate2_3').classList.add("makeGreenT");
    document.getElementById('exeDate2_3').classList.add("makeGreenT");
    document.getElementById('code2_3').classList.add("makeGreenT");
    document.getElementById('Vc2_3').classList.add("makeGreenT");
    document.getElementById('acquired2_3').classList.add("makeGreenT");
    document.getElementById('disposed2_3').classList.add("makeGreenT");
    document.getElementById('exerciseDate2_3').classList.add("makeGreenT");
    document.getElementById('expirationDate2_3').classList.add("makeGreenT");
    document.getElementById('title2_3').classList.add("makeGreenT");
    document.getElementById('amountOfShare2_3').classList.add("makeGreenT");
    document.getElementById('price2_3').classList.add("makeGreenT");
    document.getElementById('numDevOwned2_3').classList.add("makeGreenT");
    document.getElementById('ownershipForm2_3').classList.add("makeGreenT");
    document.getElementById('nature2_3').classList.add("makeGreenT");

    document.getElementById('explanation').classList.add("makeGreenT");
    document.getElementById('remarks').classList.add("makeGreenT");

    if(localStorage.getItem('counterRows2')>4){
        var tableReqLenth = localStorage.getItem('counterRows2');
        for(var i=4;i<tableReqLenth;i++){
            document.getElementById('titleOfDerSec2_'+i).classList.add("makeGreenT");
            document.getElementById('exePrice2_'+i).classList.add("makeGreenT");
            document.getElementById('txnDate2_'+i).classList.add("makeGreenT");
            document.getElementById('exeDate2_'+i).classList.add("makeGreenT");
            document.getElementById('code2_'+i).classList.add("makeGreenT");
            document.getElementById('Vc2_'+i).classList.add("makeGreenT");
            document.getElementById('acquired2_'+i).classList.add("makeGreenT");
            document.getElementById('disposed2_'+i).classList.add("makeGreenT");
            document.getElementById('exerciseDate2_'+i).classList.add("makeGreenT");
            document.getElementById('expirationDate2_'+i).classList.add("makeGreenT");
            document.getElementById('title2_'+i).classList.add("makeGreenT");
            document.getElementById('amountOfShare2_'+i).classList.add("makeGreenT");
            document.getElementById('price2_'+i).classList.add("makeGreenT");
            document.getElementById('numDevOwned2_'+i).classList.add("makeGreenT");
            document.getElementById('ownershipForm2_'+i).classList.add("makeGreenT");
            document.getElementById('nature2_'+i).classList.add("makeGreenT");
    }
    }
    //PART 1 - mark all required fields
    if(document.getElementById('lastname').value==""){ 
        $("#errLname").css('visibility', 'visible');
        document.getElementById('lastname').classList.add("makeRed");
    }else{
        document.getElementById('lastname').classList.add("makeGreen");
    }
    if(document.getElementById('firstname').value==""){ 
        $("#errFname").css('visibility', 'visible');
        document.getElementById('firstname').classList.add("makeRed");
    }else{
        document.getElementById('firstname').classList.add("makeGreen");
    }
    if(document.getElementById('street').value==""){ 
        $("#errStreet").css('visibility', 'visible');
        document.getElementById('street').classList.add("makeRed");
    }else{
        document.getElementById('street').classList.add("makeGreen");
    }
    if(document.getElementById('city').value==""){ 
        $("#errCity").css('visibility', 'visible');
        document.getElementById('city').classList.add("makeRed");
    }else{
        document.getElementById('city').classList.add("makeGreen");
    }
    if(document.getElementById('state').value==""){ 
        $("#errState").css('visibility', 'visible');
        document.getElementById('state').classList.add("makeRed");
    }else{
        document.getElementById('state').classList.add("makeGreen");
    }
    if(document.getElementById('zip').value==""){ 
        $("#errZip").css('visibility', 'visible');
        document.getElementById('zip').classList.add("makeRed");
    }else{
        document.getElementById('zip').classList.add("makeGreen");
    }
    if(document.getElementById('issuerNameInput').value==""){ 
        $("#errIssuerName").css('visibility', 'visible');
        document.getElementById('issuerNameInput').classList.add("makeRed");
    }else{
        document.getElementById('issuerNameInput').classList.add("makeGreen");
    }
    if(document.getElementById('ticker').value==""){ 
        $("#errIssuerTicker").css('visibility', 'visible');
        document.getElementById('ticker').classList.add("makeRed");
    }else{
        document.getElementById('ticker').classList.add("makeGreen");
    }
    if(document.getElementById('date1').value==""){ 
        $("#errEarlyDate").css('visibility', 'visible');
        document.getElementById('date1').classList.add("makeRed");
    }else{
        document.getElementById('date1').classList.add("makeGreen");
    }
    if(document.getElementById('finalDate').value==""){ 
        $("#errFinalD").css('visibility', 'visible');
        document.getElementById('finalDate').classList.add("makeRed");
    }else{
        document.getElementById('finalDate').classList.add("makeGreen");
    }
    if(!document.getElementById('director').checked){ 
        document.getElementById('director').classList.add("makeRedT");
    }else{
        document.getElementById('director').classList.add("makeGreenT");
        document.getElementById('officer').classList.add("makeGreenT");
        document.getElementById('tenOwner').classList.add("makeGreenT");
        document.getElementById('customPerson').classList.add("makeGreenT");
    }
    if(!document.getElementById('officer').checked){ 
        document.getElementById('officer').classList.add("makeRedT");
    }else{
        document.getElementById('director').classList.add("makeGreenT");
        document.getElementById('officer').classList.add("makeGreenT");
        document.getElementById('tenOwner').classList.add("makeGreenT");
        document.getElementById('customPerson').classList.add("makeGreenT");
    }
    if(!document.getElementById('tenOwner').checked){ 
        document.getElementById('tenOwner').classList.add("makeRedT");
    }else{
        document.getElementById('director').classList.add("makeGreenT");
        document.getElementById('officer').classList.add("makeGreenT");
        document.getElementById('tenOwner').classList.add("makeGreenT");
        document.getElementById('customPerson').classList.add("makeGreenT");
    }
    if(!document.getElementById('customPerson').checked){ 
        document.getElementById('customPerson').classList.add("makeRedT");
    }else{
        document.getElementById('director').classList.add("makeGreenT");
        document.getElementById('officer').classList.add("makeGreenT");
        document.getElementById('tenOwner').classList.add("makeGreenT");
        document.getElementById('customPerson').classList.add("makeGreenT");
    }
    if(!document.getElementById('onePer').checked&&document.getElementById('moreThanOne').checked){ 
        document.getElementById('moreThanOne').classList.remove("makeRedT");
        document.getElementById('onePer').classList.remove("makeRedT");
        document.getElementById('moreThanOne').classList.add("makeGreenT");
    }else if(document.getElementById('onePer').checked&&!document.getElementById('moreThanOne').checked){
        document.getElementById('moreThanOne').classList.remove("makeRedT");
        document.getElementById('onePer').classList.remove("makeRedT"); 
        document.getElementById('onePer').classList.add("makeGreenT");
    }else if(!document.getElementById('onePer').checked&&!document.getElementById('moreThanOne').checked){
        $("#errRadio").css('visibility', 'visible');
        document.getElementById('moreThanOne').classList.add("makeRedT");
        document.getElementById('onePer').classList.add("makeRedT");
    }

    if(document.getElementById('titleOfSec2').value==""){ 
        document.getElementById('titleOfSec2').classList.add("makeRedT");
    }else{
        document.getElementById('titleOfSec2').classList.add("makeGreen");
    }
    if(document.getElementById('txnDate2').value==""){ 
        document.getElementById('txnDate2').classList.add("makeRedT");
    }else{
        document.getElementById('txnDate2').classList.add("makeGreen");
    }
    if(document.getElementById('code2').value==""){ 
        document.getElementById('code2').classList.add("makeRedT");
    }else{
        document.getElementById('code2').classList.add("makeGreen");
    }
    if(document.getElementById('amount2').value==""){ 
        document.getElementById('amount2').classList.add("makeRedT");
    }else{
        document.getElementById('amount2').classList.add("makeGreen");
    }
    if(document.getElementById('AorD2').value==""){ 
        document.getElementById('AorD2').classList.add("makeRedT");
    }else{
        document.getElementById('AorD2').classList.add("makeGreen");
    }
    if(document.getElementById('price2').value==""){ 
        document.getElementById('price2').classList.add("makeRedT");
    }else{
        document.getElementById('price2').classList.add("makeGreen");
    }
    if(document.getElementById('amountOfSec2').value==""){ 
        document.getElementById('amountOfSec2').classList.add("makeRedT");
    }else{
        document.getElementById('amountOfSec2').classList.add("makeGreen");
    }
    if(document.getElementById('ownershipForm2').value==""){ 
        document.getElementById('ownershipForm2').classList.add("makeRedT");
    }else{
        document.getElementById('ownershipForm2').classList.add("makeGreen");
    }
    if(localStorage.getItem('counterRows1')>3){
        var tableReqLenth = localStorage.getItem('counterRows1');
        for(var i=3;i<tableReqLenth;i++){
        if(document.getElementById('titleOfSec'+i).value==""){ 
            document.getElementById('titleOfSec'+i).classList.add("makeRedT");
        }else{
            document.getElementById('titleOfSec'+i).classList.add("makeGreen");
        }
        if(document.getElementById('txnDate'+i).value==""){ 
            document.getElementById('txnDate'+i).classList.add("makeRedT");
        }else{
            document.getElementById('txnDate'+i).classList.add("makeGreen");
        }
        if(document.getElementById('code'+i).value==""){ 
            document.getElementById('code'+i).classList.add("makeRedT");
        }else{
            document.getElementById('code'+i).classList.add("makeGreen");
        }
        if(document.getElementById('amount'+i).value==""){ 
            document.getElementById('amount'+i).classList.add("makeRedT");
        }else{
            document.getElementById('amount'+i).classList.add("makeGreen");
        }
        if(document.getElementById('AorD'+i).value==""){ 
            document.getElementById('AorD'+i).classList.add("makeRedT");
        }else{
            document.getElementById('AorD'+i).classList.add("makeGreen");
        }
        if(document.getElementById('price'+i).value==""){ 
            document.getElementById('price'+i).classList.add("makeRedT");
        }else{
            document.getElementById('price'+i).classList.add("makeGreen");
        }
        if(document.getElementById('amountOfSec'+i).value==""){ 
            document.getElementById('amountOfSec'+i).classList.add("makeRedT");
        }else{
            document.getElementById('amountOfSec'+i).classList.add("makeGreen");
        }
        if(document.getElementById('ownershipForm'+i).value==""){ 
            document.getElementById('ownershipForm'+i).classList.add("makeRedT");
        }else{
            document.getElementById('ownershipForm'+i).classList.add("makeGreen");
        }
    }
    }
    //PART 2
    goNext=true; //allows me to check next input field
    if(document.getElementById('lastname').value=="" && goNext){  
        goNext=false; 
        document.getElementById('lastname').focus();  //making sure the user gets focused on the field of error, for faster corrections
        document.getElementById('lastname').classList.add("makeRed");
        document.getElementById('lastname').style.marginBottom="5px";

        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter your last name!',  
        })

    }
    $("#lastname").on("input", function() {
        var el=null;
        if($(this).val().length>0){
            $("#errLname").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errLname").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });
    
    if(document.getElementById('firstname').value==""&&goNext){   
        goNext=false;
        document.getElementById('firstname').focus(); 
        document.getElementById('firstname').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter your first name!',

            
          })
    }
    $("#firstname").on("input", function() {
        if($(this).val().length>0){
            $("#errFname").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errFname").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('street').value==""&&goNext){  
        goNext=false; 
        document.getElementById('street').focus(); 
        document.getElementById('street').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter your street name!',
            
          })
    }
    $("#street").on("input", function() {
        if($(this).val().length>0){
            $("#errStreet").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errStreet").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('city').value==""&&goNext){  
        goNext=false; 
        document.getElementById('city').focus(); 
        document.getElementById('city').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter your city!',
            
          })
    }
    $("#city").on("input", function() {
        if($(this).val().length>0){
            $("#errCity").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errCity").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('state').value==""&&goNext){  
        goNext=false; 
        document.getElementById('state').focus(); 
        document.getElementById('state').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please select your state!',
            
          })
    }
    $("#state").on("input", function() {
        if($(this).val().length>0){
            $("#errState").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errState").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });
    if(document.getElementById('zip').value==""&&goNext){  
        goNext=false; 
        document.getElementById('zip').focus(); 
        document.getElementById('zip').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter your zip code!',
            
          })
    }
    $("#zip").on("input", function() {
        if($(this).val().length>0){
            $("#errZip").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errZip").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('issuerNameInput').value==""&&goNext){  
        goNext=false; 
        document.getElementById('issuerNameInput').focus(); 
        document.getElementById('issuerNameInput').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the name of the issuer!',
            
          })
    }
    $("#issuerNameInput").on("input", function() {
        if($(this).val().length>0){
            $("#errIssuerName").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errIssuerName").css('visibility', 'visible');  
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('ticker').value==""&&goNext){  
        goNext=false; 
        document.getElementById('ticker').focus(); 
        document.getElementById('ticker').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the ticker/trading symbol!',
            
          })
    }
    $("#ticker").on("input", function() {
        if($(this).val().length>0){
            $("#errIssuerTicker").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errIssuerTicker").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(document.getElementById('date1').value==""&&goNext){  
        goNext=false; 
        document.getElementById('date1').focus(); 
        document.getElementById('date1').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the name of the earliest transaction!',
            
          })
    }
    $("#date1").on("input", function() {
        if($(this).val().length>0){
            $("#errEarlyDate").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errEarlyDate").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });     
    if(goNext&&(!document.getElementById('director').checked&&!document.getElementById('officer').checked&&!document.getElementById('tenOwner').checked&&!document.getElementById('customPerson').checked)){
        goNext=false; 
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please select at least one checkbox!',         
        })     
    }
    var countChecked = function() {
        var checkCountCheckboxes = $( "input[name='reportingPersonRadion']:checked" ).length;
        if(checkCountCheckboxes>0){
            $("#errCheckBox").css('visibility', 'hidden');
            $("#director").removeClass("makeRedT").addClass( "makeGreenT" );
            $("#officer").removeClass("makeRedT").addClass( "makeGreenT" );
            $("#tenOwner").removeClass("makeRedT").addClass( "makeGreenT" );
            $("#customPerson").removeClass("makeRedT").addClass( "makeGreenT" );
        }else{
            $("#errCheckBox").css('visibility', 'visible');
            $("#director").removeClass("makeGreenT").addClass( "makeRedT" );
            $("#officer").removeClass("makeGreenT").addClass( "makeRedT" );
            $("#tenOwner").removeClass("makeGreenT").addClass( "makeRedT" );
            $("#customPerson").removeClass("makeGreenT").addClass( "makeRedT" );
        }
      };
      countChecked();
    $( "input[type=checkbox]" ).on( "click", countChecked );

    if((!document.getElementById('onePer').checked&&!document.getElementById('moreThanOne').checked)&&goNext){  
        goNext=false; 
        document.getElementById('onePer').focus(); 
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please select the amount of reporting people filing!',         
          })
    }
    $("#onePer").on("input", function() {
        if($(this).val().length>0){
            $("#errRadio").css('visibility', 'hidden');
            $(this).removeClass("makeRedT");
            $("#moreThanOne").removeClass("makeRedT");
            $(this).addClass( "makeGreenT" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreenT");
            $("#errRadio").css('visibility', 'visible');
        }
    });
    $("#moreThanOne").on("input", function() {
        $("#errRadio").css('visibility', 'hidden');
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $("#onePer").removeClass("makeRedT");
            $(this).addClass( "makeGreenT" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreenT");
        }
    });

    if(document.getElementById('titleOfSec2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('titleOfSec2').focus(); 
        document.getElementById('titleOfSec2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the title of securityl!',
            
          })
    }
    $("#titleOfSec2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('txnDate2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('txnDate2').focus(); 
        document.getElementById('txnDate2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the transaction date!',
            
          })
    }
    $("#txnDate2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });
    if(document.getElementById('code2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('code2').focus(); 
        document.getElementById('code2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the transaction code!',
            
          })
    }
    $("#code2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('amount2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('amount2').focus(); 
        document.getElementById('amount2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the amount of securities acquired or disposed!',
            
          })
    }
    $("#amount2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('AorD2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('AorD2').focus(); 
        document.getElementById('AorD2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter whether securities were aquired (A) or disposed (D)!',
            
          })
    }
    $("#AorD2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('price2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('price2').focus(); 
        document.getElementById('price2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the price of acquired/disposed securities!',
            
          })
    }
    $("#price2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('amountOfSec2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('amountOfSec2').focus(); 
        document.getElementById('amountOfSec2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the amount of securities beneficially owned following reported transaction(s)!',
            
          })
    }
    $("#amountOfSec2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });

    if(document.getElementById('ownershipForm2').value==""&&goNext){  
        goNext=false; 
        document.getElementById('ownershipForm2').focus(); 
        document.getElementById('ownershipForm2').classList.add("makeRedT");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter whether ownership form is direct (D) or indirect (I)!',
            
          })
    }
    $("#ownershipForm2").on("input", function() {
        if($(this).val().length>0){
            $(this).removeClass("makeRedT");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRedT" );
        }
    });


    if(localStorage.getItem('counterRows1')>3){
        var tableReqLenth = localStorage.getItem('counterRows1');
        for(var i=3;i<tableReqLenth;i++){
            document.getElementById('exeDate'+i).classList.add("makeGreenT");
            document.getElementById('V'+i).classList.add("makeGreenT");
            document.getElementById('natureOfOwnership'+i).classList.add("makeGreenT");
            if(document.getElementById('titleOfSec'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('titleOfSec'+i).focus(); 
                document.getElementById('titleOfSec'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the title of securityl!',
                    
                  })
            }
            $("#titleOfSec"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('txnDate'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('txnDate'+i).focus(); 
                document.getElementById('txnDate'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the transaction date!',
                    
                  })
            }
            $("#txnDate"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
            if(document.getElementById('code'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('code'+i).focus(); 
                document.getElementById('code'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the transaction code!',
                    
                  })
            }
            $("#code"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('amount'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('amount'+i).focus(); 
                document.getElementById('amount'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the amount of securities acquired or disposed!',
                    
                  })
            }
            $("#amount"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('AorD'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('AorD'+i).focus(); 
                document.getElementById('AorD'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter whether securities were aquired (A) or disposed (D)!',
                    
                  })
            }
            $("#AorD"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('price'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('price'+i).focus(); 
                document.getElementById('price'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the price of acquired/disposed securities!',
                    
                  })
            }
            $("#price"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('amountOfSec'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('amountOfSec'+i).focus(); 
                document.getElementById('amountOfSec'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter the amount of securities beneficially owned following reported transaction(s)!',
                    
                  })
            }
            $("#amountOfSec"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        
            if(document.getElementById('ownershipForm'+i).value==""&&goNext){  
                goNext=false; 
                document.getElementById('ownershipForm'+i).focus(); 
                document.getElementById('ownershipForm'+i).classList.add("makeRedT");
                Swal.fire({
                    icon: 'error',
                    title: 'Field required.',
                    text: 'Please enter whether ownership form is direct (D) or indirect (I)!',
                    
                  })
            }
            $("#ownershipForm"+i).on("input", function() {
                if($(this).val().length>0){
                    $(this).removeClass("makeRedT");
                    $(this).addClass( "makeGreen" );
                }else if($(this).val()==''){
                    $(this).removeClass("makeGreen");
                    $(this).addClass( "makeRedT" );
                }
            });
        }
    }

    if(document.getElementById('finalDate').value==""&&goNext){  
        goNext=false; 
        document.getElementById('finalDate').focus(); 
        document.getElementById('finalDate').classList.add("makeRed");
        Swal.fire({
            icon: 'error',
            title: 'Field required.',
            text: 'Please enter the date of filing!',
            
          })
    }
    $("#finalDate").on("input", function() {
        if($(this).val().length>0){
            $("#errFinalD").css('visibility', 'hidden');
            $(this).removeClass("makeRed");
            $(this).addClass( "makeGreen" );
        }else if($(this).val()==''){
            $("#errFinalD").css('visibility', 'visible');
            $(this).removeClass("makeGreen");
            $(this).addClass( "makeRed" );
        }
    });

    if(goNext){
        handleForm();
        //return true;
    }
}
    /*
    const form = document.querySelector('#sectionForm');
    const textInputs = form.querySelectorAll('[required]');
    const tinputsLength = textInputs.length;
    const firstTInput = tinputsLength > 0 ? textInputs[0] : null;


    function init() {
        if (firstTInput) {
            for (let i = 0; i < tinputsLength; i++) {
                textInputs[i].addEventListener('invalid', checkValidity);
            }
            checkValidity();
        }
    }


    function isMissing() {
        //mark all empty required fields
        for (let i = 0; i < tinputsLength; i++) {
            if (textInputs[i].value ==""){
                textInputs[i].classList.add("makeRed")
            }
        }
        for (let i = 0; i < tinputsLength; i++) {

            if (textInputs[i].value ==""){
                textInputs[i].classList.add("makeRed")
                return true;
            }else{
                textInputs[i].classList.remove("makeRed");
                textInputs[i].classList.add("makeDefault");
            }
        }
        
        return false;
    }

    function checkValidity() {
        const errorMessage = !isMissing() ? 'Please fill out this field.' : ''; //possibly array for custom messages
        firstTInput.setCustomValidity(errorMessage);
    }

    init();*/

    //old ver
    //input.classList.add("makeRed");
