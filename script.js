// function anime(){
// var counter = document.getElementById("spn3")
// var target = 20
// var duration = 4000

// var increment = target /(duration/16) //fps

// var current = 0

// function updateCounter(){
//     current += increment
//     if(current<target){
//         counter.textContent=Math.floor(current)
//         requestAnimationFrame(updateCounter)
//     }else{
//         counter.textContent=target
//     }
// }
// updateCounter()
// }

function clicks(){
    alert("Your request has been sent")
}

function startCounters() {
    // Configuration for each counter
    var counters = [
      { element: "counter-projects", target: 10, duration: 2000 },
      { element: "counter-clients", target: 20, duration: 3000 },
      { element: "counter-products", target: 5, duration: 4000 },
    ];
  
    // Animate all counters
    for (var index in counters) {
      if (counters.hasOwnProperty(index)) {
        var config = counters[index];
        animateCounter({
          element: document.getElementById(config.element),
          target: config.target,
          duration: config.duration,
        });
      }
    }
  }
  
  function animateCounter({ element, target, duration }) {
    var start = null;
    function easeOutQuad(t) {
      return t * (2 - t); // Smooth easing function
    }
  
    function updateCounter(timestamp) {
      if (!start) start = timestamp;
      var elapsed = timestamp - start;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutQuad(progress);
      var current = Math.floor(easedProgress * target);
  
      element.textContent = current;
  
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target; // Ensure final value is exact
      }
    }
  
    requestAnimationFrame(updateCounter);
  }

function myFunction() {
    var element = document.querySelector(".container");
    element.classList.toggle("light-mode");
}

// let currentIndex = 0;
// const images = document.querySelectorAll('.project-image');

// function showNextImage() {
//     images[currentIndex].style.opacity = 0; 
//     currentIndex = (currentIndex + 1) % images.length; 
//     images[currentIndex].style.opacity = 1; 
// }
