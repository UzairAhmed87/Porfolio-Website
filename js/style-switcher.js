const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyle = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
let currentStyle = 0;
let colorChangerInterval;

window.addEventListener("load", () => {
  function changeStyle() {
    // Disable all styles
    alternateStyle.forEach((style) => {
      style.disabled = true;
    });
    // Enable the next style
    alternateStyle[currentStyle].disabled = false;
    // Move to the next style, looping back to the first style if necessary
    currentStyle = (currentStyle + 1) % alternateStyle.length;
  }

  // Set an interval to change styles every 2 seconds
   colorChangerInterval = setInterval(changeStyle, 1000);
  // Initial style change
  changeStyle();
  
});

styleSwitcher.addEventListener("click", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
   
  } else {
    styleSwitcher.classList.add("open");
  }
});
window.addEventListener("scroll",()=>{
  styleSwitcher.classList.remove("open")
})

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    
      
    } else {
      style.setAttribute("disabled", "true");
     
    }
    clearInterval(colorChangerInterval)
  });
}

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
