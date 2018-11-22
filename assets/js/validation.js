const axios = require('axios');

let name = document.getElementById('name');
let validationResult1 = document.getElementById('validation-result1');
const validateName = function () {
    validationResult1.innerText = '...';
    axios.post(validationResult1.dataset.path, {input: name.value})
        .then(function(response) {
            if (response.data.valid) {
                validationResult1.innerHTML = ":)";
            } else {
                validationResult1.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            validationResult1.innerText = 'Error: ' + error;
        });
};

name.onkeyup = validateName;
name.onchange = validateName;