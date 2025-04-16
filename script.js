function anime(){
var counter = document.getElementById("spn3")
var target = 20
var duration = 4000

var increment = target /(duration/16) //fps

var current = 0

function updateCounter(){
    current += increment
    if(current<target){
        counter.textContent=Math.floor(current)
        requestAnimationFrame(updateCounter)
    }else{
        counter.textContent=target
    }
}
updateCounter()
}

