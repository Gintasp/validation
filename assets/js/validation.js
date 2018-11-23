const axios = require('axios');

const validate = function (el) {
    el.innerText = '...';
    axios.post(el.dataset.path, {team: team.value, input: name.value})
        .then(function (response) {
            console.log(response.data);
            if (response.data.valid) {
                el.innerHTML = ":)";
            } else {
                el.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            el.innerText = 'Error: ' + error;
        });
};

let name = document.getElementById('name');
let team = document.getElementById('team');
let validationName = document.getElementById('validation-result1');
let validationTeam = document.getElementById('validation-result2');

name.onkeyup = () => validate(validationName);
name.onchange = () => validate(validationName);

team.onkeyup = () => validate(validationTeam);
team.onchange = () => validate(validationTeam);

