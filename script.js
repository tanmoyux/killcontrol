/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  var headers = document.getElementsByClassName("header");
  for (var i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = "#1C1919"; /* Macht Hintergrund statt tarnsparent dunkel */
  }
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  var headers = document.getElementsByClassName("header");
  for (var i = 0; i < headers.length; i++) {
    headers[i].style.backgroundColor = ""; /* Entfernt die Hintergrundfarbe*/
  }
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

/* Cookie Banner */
$(document).ready(function() {
  cookieBanner.init();
  $('#delete-cookies-button').click(function() {
      deleteAllCookies();
      alert('Alle Cookies wurden gelöscht');
      location.reload(); // Seite neu laden
  });
});

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}