https://api.github.com/users/USERNAME/repos
'use strict';

function getRepoList () {
let url = 'https://api.github.com/users/'
let name = $('#handleName').val(); 
let endUrl = '/repos'

  fetch(url + name + endUrl)
   .then(response => response.json())
   .then(responseJson => {
      if (responseJson.code === 404) {
        throw new Error()
      }
      displayResults(responseJson);
   })
   .catch(error => alert('Oh no! Something went wrong. Check your spelling, or try a different handle.'));
};


function displayResults (responseJson) {
  console.log(responseJson);
  $('#results-list').empty();

   for (let i = 0; i < responseJson.length; i++){

  $('#results-list').append(
      `<li><h3>${responseJson[i].name}</h3><a href="${responseJson[i].url}">link to ${responseJson[i].name} here</a>
      </li>`
    )};
  $('.results').removeClass('hidden');
};



function watchForm () {
  $('form').submit(event => {
  event.preventDefault();
  getRepoList();
  console.log($('#handleName'))
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
 
});
