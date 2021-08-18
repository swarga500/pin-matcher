function getPin(){
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    console.log(pin)
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
       
    const preCalc = calc.value;
    const newCalc = preCalc + number;
    calc.value = newCalc;

    }
    
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if(pin == typedNumbers){
        
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        
        failError.style.display = 'block';
        successMassage.style.display = 'none';
    }
}