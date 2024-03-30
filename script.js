/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }


/* Switches Burger-Menu with Close-Button */
  function changeIcon() {
    var x = document.getElementById("burger-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("closebtn");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/* Accordion-panel Klickbarkeit */ 
let accordions = document.querySelectorAll(".accordion-panels .accordion__item");

accordions.forEach((acco) => {
  acco.onclick = () => {
    if (acco.classList.contains("active")) {
      acco.classList.remove("active"); /* Entfernt die active-class, wenn bereits vorhanden */
    } else {
      accordions.forEach((subcontent) => {
        subcontent.classList.remove("active");
      });
      acco.classList.add("active"); /* Fügt die active-class hinzu, wenn nicht vorhanden */
    }
  };
});