document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  //  Selectors
  let moveButton = document.querySelector('#move-button')
  let movesContainer = document.querySelector("#moves-container")

  // Create Event Listener for key presses
  document.addEventListener('keydown', function(e){
    let moveList = document.createElement('li')
    console.log(e)
    if (e.key.startsWith("Arrow")){
       let key = e.key.slice(5).toLowerCase()
       moveList.innerText = key 
       movesContainer.append(moveList)
    }
  });

  // Create Event Listener for mouse click
  moveButton.addEventListener("click", function() {
     let timer =  setInterval(function(){
        let moveMade = document.querySelector('li')
        if(movesContainer.childElementCount > 0){
          move(moveMade.innerHTML)
          moveMade.remove()
         } else if(movesContainer.childElementCount === 0){
          clearInterval(timer)
        }
      }, 500);
  });

});