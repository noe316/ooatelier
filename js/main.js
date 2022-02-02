// // get the element to animate
// var element = document.getElementsByClassName('highlight');
// var elementHeight = element.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;
  
//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }
  
//   return false;
// }

// // animate element when it is in view
// function animate() {
//   // is element in view?
//   if (inView()) {
//       // element is in view, add class to element
//       element.addClass('color');
//   }
// }


// fadeUp

$(document).ready(function() {
    $(window).on('scroll', function() {
      var bodyEl = $('body');
      var scrollY = window.scrollY;
      var height = scrollY + window.innerHeight;
      var a = (window.scrollY, 100);
      scrollY > 100 ? bodyEl.hasClass("scrolled") || bodyEl.addClass("scrolled") : bodyEl.hasClass("scrolled") && bodyEl.removeClass("scrolled"),
        $(".fader:visible").not(".faded").each(function() {
          if ($(this).offset().top < height && !$("this").hasClass("faded")) {
            a = (a += 200) > 2e3 ? 2e3 : a;
            $(this).addClass("faded");
            $(this).css("transition-delay", a + "ms");
          }
      });
    });
  });
  

  // hightlight

  const highlight = document.getElementById("highlight-style");
  const mode = document.getElementById("mode");

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-highlight").forEach((highlight) => {
  ScrollTrigger.create({
    trigger: highlight,
    start: "-100px center",
    onEnter: () => highlight.classList.add("active")
  });
});

const setHighlightStyle = (value) =>
  document.body.setAttribute("data-highlight", value);

mode.addEventListener("click", (e) =>
  document.body.classList.toggle("dark-mode")
);

highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));

setHighlightStyle(highlight.value);
