// Iteration 8: Making scoreboard functional
document.getElementById('score-box').innerText=`Score: ${localStorage.getItem('score')}`
document.getElementById('play-again-button').onclick=()=>{
    window.open("game.html",'_self')
    localStorage.setItem('score',0)
}