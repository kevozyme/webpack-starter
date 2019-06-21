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
let hashCompare = document.getElementById('hash-compare');

var hash = require('object-hash');
let realHashDisplay = document.getElementById('real-hash-display');
let fraudCheckHashDisplay = document.getElementById('fraud-check-hash-display');

var realCertHash;
var fraudCertHash;


//Hash Comparison Function

function compareHash(realCertHash,fraudCertHash){
    
    if (realCertHash === fraudCertHash){
        hashCompare.innerText = 'THIS HAS THE SAME DIGITAL FINGERPRINT. THIS IS AN AUTHENTIC DOCUMENT';
    }
    else {
        hashCompare.innerText = 'THIS DOES NOT APPEAR TO BE THE SAME DOCUMENT';
    }
}


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
    
    //Hashing of Actual Cert
    console.log(certOwner.innerText);
    console.log(certNumber.innerText);

    var bob1 = [certName.innerText, certOwner.innerText,certNumber.innerText];
    console.log(hash(bob1)); 
    realCertHash = hash(bob1);
    realHashDisplay.innerText = "Hash Original Cert: " + realCertHash;  
    realHashDisplay.style.display = 'block'; 
});


fraudItButton.addEventListener('click',function(){ 
    fraudItButton.style.display = 'none';
    finishPhotoshopButton.style.display = 'block';
    certOwner.style.display = 'none';
    photoshopField.style.display = 'block';
    photoshopField.style.borderColor="#FF0000";
    photoshopField2.style.display = 'block';
    photoshopField2.style.borderColor="#FF0000";
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

    //Get Values of Photoshopped Fields
    certOwner.innerText = fraudValue1;
    certNumber.innerText = fraudValue2;
    var bob2 = [certName.innerText, certOwner.innerText,certNumber.innerText];
    fraudCertHash = hash(bob2);
    
    // Show Outcome & Allow Restart
    fraudCheckHashDisplay.innerText = "Hash Submitted Cert: " + fraudCertHash;  
    fraudCheckHashDisplay.style.display = 'block';
    finishPhotoshopButton.style.display = 'none';
    submitAgainButton.style.display = 'block';
    
});

submitAgainButton.addEventListener('click',function(){ 
    submitAgainButton.style.display = 'none';
    restartButton.style.display = 'block';
    compareHash(realCertHash,fraudCertHash);
    hashCompare.style.display = 'block';

});

restartButton.addEventListener('click',function(){ 
    window.location.reload();
});


