
// Regular expression pattern for validating LinkedIn profile URL
// const regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z0-9]$/;
// function  validatingurl () {
//     const input= document.getElementById("urlInput").value
//     if (regex.test(input)) {
//         displayvalue("vaild url")
//     }else{
//         displayvalue("invaild url")
//     }

//     setTimeout(() => {
//         clearinput();
//     clearvalidationResult()
//     }, 5000);
// } 

// function displayvalue(message) {
//     const validationResult=document.getElementById("validationResult")
//     validationResult.textContent = message;
// }

// function clearinput() {
//     const urlInput= document.getElementById("urlInput")
//     urlInput.value='';
// }
// function clearvalidationResult () {
//     const validationResult= document.getElementById("validationResult")
//     validationResult.textContent='';
// }


// Regular expression pattern for validating LinkedIn profile URL
const regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z0-9]$/;

function validateURL() {
  // Get the input value
  const input = document.getElementById("urlInput").value;

  // Check if the input matches the regex pattern
  if (regex.test(input)) {
    displayValidationResult("The URL is valid.");
  } else {
    displayValidationResult("The URL is not valid.");
  }

  // Remove the input and output after 5 seconds
  setTimeout(() => {
    clearInput();
    clearValidationResult();
  }, 2000);
}

function displayValidationResult(message) {
  const validationResult = document.getElementById("validationResult");
  validationResult.textContent = message;
}

function clearInput() {
  const urlInput = document.getElementById("urlInput");
  urlInput.value = "";
}

function clearValidationResult() {
  const validationResult = document.getElementById("validationResult");
  validationResult.textContent = "";
}





