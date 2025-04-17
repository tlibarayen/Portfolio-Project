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

// function myFunction() {
//     var element = document.querySelector(".container");
//     element.classList.toggle("light-mode");
// }

