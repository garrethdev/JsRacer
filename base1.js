window.onload = function load () {
  var game = { 
    position: 0, 
    compPosition: 0,
    secondTrack: function () { 
      return document.querySelectorAll('#racertable>tbody>tr:nth-child(2)>td');
    },
    firstTrack: function () { 
      return document.querySelectorAll('#racertable>tbody>tr:first-child>td');
    }, 
    button: function() { 
      return document.getElementById("button") 
    }
  }
};

 

  game.button().onclick = function(){
    document.onkeydown = function userPlayer() {
      if (game.position === 0) { 

        computerPlayer()
      }
      movement(game.firstTrack(), game.position, "player") 
    };

    function computerPlayer () { 
      setInterval( function () {
        game.secondTrack()[game.compPosition].classList.remove('active')
        game.compPosition++
        game.secondTrack()[game.compPosition].classList.add('active') 
        if (game.compPosition === game.secondTrack().length - 1) {
            endgame()
        }
      }, 500)
    } 

  };
  
  var movement = function(track, position, type)  {
    if (type  === "pc") { 
      game.compPosition++
      console.log(game.compPosition)
    } else { 
      game.position++
    }
    track[0].classList.remove('active')
    track[position].classList.remove("active")
    position++ 
    track[position].classList.add("active"); 
    if (position === track.length - 1) { 
      endGame(true)
    } 
  };


  endGame = function (isWinner) { 
    message = isWinner ? "Congrats on Winning the Game!" : "Sorry the Computer bested you this time!"
    alert(message)
    location.reload(true); 
  };














