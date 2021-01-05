function fetchDogImage(){
  var xhrRequest = new XMLHttpRequest();
  /*Method to be executes on receiving a response from the server*/
  xhrRequest.onload = function(){
    console.log(xhrRequest.response);
    var responseJSON = JSON.parse(xhrRequest.response);
    var imageURL = responseJSON.message;
    document.getElementById('dog-image').src=imageURL;
    //for jQuery
    //$('#dog-image').attr('src',imageURL);
  }
  xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true); // true for asynchronous, false for synchronous
  xhrRequest.send(); // make request to the server
}
let fetchButton = document.getElementById('fetch-dog-image');
fetchButton.addEventListener('click', fetchDogImage);
