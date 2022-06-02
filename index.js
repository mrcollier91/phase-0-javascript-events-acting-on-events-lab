// grab dodger
const dodger = document.getElementById('dodger')
//verify actually grabber dodger
//console.log(dodger)
//styler dodger color
dodger.style.backgroundColor = "#FF69B4"
//position dodger bottom 
dodger.style.bottom = "0px"

// function to mover dodger right 
/*document.addEventListener("keydown", (e) =>{
    if (e.key === "ArrowLeft"){
        const leftNumbers =  dodger.style.left.replace("px", "")
        const left = parseInt(leftNumbers, 10)
    if (left > 0){
        dodger.style.left = `${left - 5}px`
    }
}
})
*/
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left > 0){
        dodger.style.left = `${left - 5}px`
    }
}
document.addEventListener("keydown", function (e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})

function moveDodgerRight (){
const leftNumbers = dodger.style.left.replace("px", "")
const left = parseInt(leftNumbers, 10)

if (left < 360) {
    dodger.style.left = `${left + 5}px`
}
}

document.addEventListener("keydown", function (e){
    if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
})