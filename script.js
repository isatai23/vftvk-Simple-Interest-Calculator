//Compute interest
function compute()
{
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principle * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById('result');
    
    //Validate the input to be > 0
    if (principle <=0){
        alert("Enter a positive number");
        document.getElementById('principal').focus();
    }
    else {
        
        result.innerHTML = `If you deposit \<span id="highlight">${principle} \</span>,<br\>at an interest rate of \<span id="highlight">${rate}%\</span>.\<br\> You will receive an amount of \<span id="highlight">${interest}\</span>,<br\> in the year \<span id="highlight">${year}\</span><br\>`
    }
    
}

//Update rate display when user changes the rate
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateval;
    
    
}
        