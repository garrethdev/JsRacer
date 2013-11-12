window.onload = function() {
  var position = 0,
  button = document.getElementById("button") 
  firstTrack = document.querySelectorAll('#racertable>tbody>tr:first-child>td');
  secondTrack = document.querySelectorAll('#racertable>tbody>tr:nth-child(2)>td');

  function clickFunction (callbackFunction) { 
    document.onkeydown = function usermovement() {
      position = (position === firstTrack.length - 1  ? 0 : position + 1);   
      firstTrack[position].classList.add("active");
      firstTrack[position >= 0 ? position - 1 : firstTrack.length - 1]
      .classList.remove("active");
        if (position === firstTrack.length - 1) { 
          endGame(true)
        }
    }        
    callbackFunction()
  }

  button.onclick = function(){
    alert("Get ready 3... ")
    alert("2... ")
    alert("1... ")

    clickFunction(computerPlayer)
  } 
};

var movement = function(track, position, player)  {
  compPosition = (compPosition === secondTrack.length -1 ? 0 : compPosition + 1 )
  secondTrack[compPosition].classList.add("active"); 
  secondTrack[compPosition > 0 ? compPosition -1: secondTrack.length  -1 ]
  .classList.remove("active")
  if (compPosition === secondTrack.length - 1) { 
    endGame()
  } 

}

var compPosition = 0
function computerPlayer () { 
  setInterval(function() { 
    compPosition = (compPosition === secondTrack.length -1 ? 0 : compPosition + 1 )
    secondTrack[compPosition].classList.add("active"); 
    secondTrack[compPosition > 0 ? compPosition -1: secondTrack.length  -1 ]
    .classList.remove("active")
      if (compPosition === secondTrack.length - 1) { 
        endGame()
      } 
        
      }, 200 );
};

endGame = function (isplayer) { 
  message = isplayer ? "Congrats on Winning the Game!" : "Sorry the Computer bested you this time!"
  alert(message)
  location.reload(true); 
};




