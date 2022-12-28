
window.onload = function() {
  document.getElementById("transitionSVG").style.visibility = "hidden";
  document.getElementById("loading-screen").style.display = "block";
  document.getElementById("chtBtn").style.visibility = "hidden";

  gsap.registerPlugin(Flip);

  const squares = gsap.utils.toArray(".moveLogo");
  
  async function doFlip() {
    // Schedule the removal of the canvas element
    removeCanvas()
    // Get the initial state
    //const state = Flip.getState(squares);
  
    // Make DOM or styling changes (swap the squares in our case)
    //swap(squares)
  
    // Animate from the initial state to the end state
   // Flip.from(state, {duration: 2, ease: "power1.inOut"});
  }
  
  function removeCanvas() {
    const canvas = document.getElementById('canvas');
    const lscreen = document.getElementById("loading-screen");
    gsap.to(canvas, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        canvas.parentNode.removeChild(canvas);
        setTimeout(() => {
          document.getElementById("transitionSVG").style.visibility = "visible";
          document.getElementById("chtBtn").style.visibility = "visible";
          const state = Flip.getState(squares);
          swap(squares);
          Flip.from(state, {
            duration: 2,
            ease: "power1.inOut",
            onComplete: () => {
              document.getElementById("loading-screen").style.display = "none";
            }
              //document.getElementById("loading-screen").style.display = "none";
          });
          gsap.to(lscreen, {
            duration: 5,
            opacity: 0,
          });
          // Scroll to the top of the page over a 5 second duration
          gsap.to(window, {
            duration: 5,
            scrollTo: {y: document.body.scrollHeight},
          });
        }, 1000);
      }
    });
  }
  // Show the chtBtn element
  function showChtBtn() {
    
  }
  
  // Given an Array of two siblings, append the one that's first so it's last (swap)
  function swap([a, b]) {
    const logoElement = document.getElementById("idHeadLogo");
    console.log(a)
    if (b.parentNode.children[0] === a) {
      b.parentNode.insertBefore(b, b.parentNode.children[0]);
    } else {
      b.parentNode.insertBefore(a, b.parentNode.children[0]);
    }
    logoElement.parentNode.removeChild(logoElement);
  }
  
  // click anywhere to flip

  setTimeout(function() {
  //document.getElementById("loading-screen").style.display = "none";
  doFlip()
  }, 2500);
};