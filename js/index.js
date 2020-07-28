//Generate Pin 
document.getElementById('generate_clicker').addEventListener('click',function(){
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9999);
    document.getElementById('generate_input').value = generateRandomNumber;
});
document.getElementById('generateSubmit').addEventListener('click', function(){
    const generateInput = document.getElementById('generate_input').value;
    const generateOutput = document.getElementById('generate_output').value;
    if(generateInput === generateOutput){
    const submitOutputDone = document.getElementById('outputDone');
        submitOutputDone.style.display = 'block';
        document.getElementById('generate_input').value = ' ';
        document.getElementById('generate_output').value = ' ';
    }
    
    if(generateInput !== generateOutput){
    const submitOutputError = document.getElementById('outputError');
        submitOutputError.style.display = 'block';

        const tryCount = document.getElementById("tryCount");
        let decrease = parseInt(tryCount.innerText)-1;
        tryCount.innerText = decrease;
        if(tryCount.innerText == 3){
            if(generateInput.value == generateOutput.value){
                tryCount.innerText= 3 + ' try left';
            }
        }
        if(tryCount.innerText == 2){
            if(generateInput.value == generateOutput.value){
                tryCount.innerText= 2 + ' try left';
            }
        }
        if(tryCount.innerText == 1){
            if(generateInput.value == generateOutput.value){
                tryCount.innerText= 1 + ' try left';
            }
        }
        if(tryCount.innerText <= 0){
            if(generateInput.value == generateOutput.value){
                alert('❌ Please Try Again ')
                tryCount.innerText= 0 + ' try left';
            }
            document.getElementById('generate_input').value = ' ';
            document.getElementById('generate_output').value = ' ';            
        }
    }

});



