// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').classList.add('hidden');
  function handleLike(EMPTY_HEART, FULL_HEART) {
    mimicServerCall();
    if(document.getElementsByClassName("like-glyph").textContent = EMPTY_HEART) {
      return document.getElementsByClassName("like-glyph").addEventListener('click', () =>  FULL_HEART)
    }
    else if(document.getElementsByClassName("like-glyph") == FULL_HEART) {
      return document.getElementsByClassName("like-glyph").addEventListener('click', () => EMPTY_HEART)
    }
  }
  handleLike()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
