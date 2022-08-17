let redDiv =document.getElementById('red')
let redText =document.getElementById('redCount')
let yellowDiv = document.getElementById('yellow')
let yellowText = document.getElementById('yellowCount')
let greenDiv =document.getElementById('green')
let greenText = document.getElementById(`greenText`)
let reset = document.getElementById(`reset`)
let warning= document.getElementById(`warning`)
let audio1 = new Audio(`mixkit-shatter-shot-explosion-1693.wav`)
let audio2 = new Audio(`mixkit-fuel-explosion-1705.wav`)
let audio3 = new Audio(`mixkit-sea-mine-explosion-1184.wav`)
let redHit=0
let yellowHit=0
let greenHit=0





// redDiv.onclick =() => {
//   redHit +=1
//   redCount.innerText = `Hit  ${redHit}`
//   audio2.play()
//   return redHit
// }


// yellowDiv.onclick =() => {
//   yellowHit +=1
//   yellowCount.innerText = `Hit ${yellowHit}`
//   audio2.play()
//   return yellowHit
// }


// greenDiv.onclick =() => {
//   greenHit +=1
//   greenCount.innerText = `Hit ${greenHit}`
//   audio3.play()
//   return greenHit
// }

// reset.onclick =() =>{
// timesClicked = {red: 0, yellow: 0, green: 0}
// squares.forEach(square => square.innerText = 0)
// }

const squares = document.querySelectorAll(`.colorSquare`)
//console.log(squares)


let timesClicked = {red: 0, yellow: 0, green: 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value]+=1
    square.innerText = timesClicked[square.value]
  }
})

 function clearScore(){
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => square.innerText = '')

 }

 reset.onclick =() => clearScore()
