const hash = require('object-hash');

let peter = {name: 'Peter', stapler: false, friends: ['Joanna', 'Michael', 'Samir'] };
let michael = {name: 'Michael', stapler: false, friends: ['Peter', 'Samir'] };
let bob = {name: 'Bob', stapler: true, friends: [] };
 
/***
 * sha1 hex encoding (default)
 */
console.log(hash(peter));
// 4d73157b6a4d824733a9a4853be98643cfd4b40e
console.log(hash(michael));
// 6a713c08cffec5c4e8f6dab4095b8a909d1abe16
console.log(hash(bob));
// d47abbd616733c4bcdd88c527e9e58834a56e6a0

// Cert Details Info
let certName = document.getElementById('cert-name');
let certOwner = document.getElementById('cert-owner');
let certNumber = document.getElementById('cert-number');

certName.innerText = 'Basic Training';
certOwner.innerText = 'John Stark';
certNumber.innerText = 'BT-35-T3557';


// Initializing & Display
let theCert = document.getElementById('the-cert');
let photoshopField = document.getElementById('photoshop-field');
let photoshopField2 = document.getElementById('photoshop-field2');



// Button Management
let startButton = document.getElementById('start-button');
let hashItButton = document.getElementById('hash-it-button');
let fraudItButton = document.getElementById('fraud-it-button');
let finishPhotoshopButton = document.getElementById('finish-photoshop-button');
let submitAgainButton = document.getElementById('submit-again-button');
let restartButton = document.getElementById('restart-button');


// Button Mashing Action

startButton.addEventListener('click',function(){ 
    startButton.style.display = 'none';
    fraudItButton.style.display = 'none';
    restartButton.style.display = 'none';
    finishPhotoshopButton.style.display = 'none';
    hashItButton.style.display = 'block';
    theCert.style.display = 'block';
});


hashItButton.addEventListener('click',function(){ 
    hashItButton.style.display = 'none';
    fraudItButton.style.display = 'block';    
});


fraudItButton.addEventListener('click',function(){ 
    fraudItButton.style.display = 'none';
    finishPhotoshopButton.style.display = 'block';
    certOwner.style.display = 'none';
    photoshopField.style.display = 'block';
    photoshopField2.style.display = 'block';
    certOwner.style.display = 'none';
    certNumber.style.display = 'none';
});

finishPhotoshopButton.addEventListener('click',function(){ 
    // Obtaining Fraud Values
    var fraudValue1 = document.getElementById("photoshop-field").value;
    var fraudValue2 = document.getElementById("photoshop-field2").value;
    certOwner.innerText = fraudValue1;
    certNumber.innerText = fraudValue2;
    photoshopField.style.display = 'none';
    photoshopField2.style.display = 'none';
    certOwner.style.display = 'block';
    certNumber.style.display = 'block';
    // Show Outcome & Allow Restart
    finishPhotoshopButton.style.display = 'none';
    submitAgainButton.style.display = 'block';
});

submitAgainButton.addEventListener('click',function(){ 
    submitAgainButton.style.display = 'none';
    restartButton.style.display = 'block';
});

restartButton.addEventListener('click',function(){ 
    window.location.reload();
});
