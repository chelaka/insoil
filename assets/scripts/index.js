// Get the current URL
var url = window.location.hostname;
// Remove the "www" subdomain if it exists
var domain = url.replace("www.", "");

// Check the URL and set the lang attribute accordingly
if (domain === "insoil.nl") {
  document.documentElement.lang = "nl";
} else if (domain === "insoil.eco") {
  document.documentElement.lang = "en";
} else {
  document.documentElement.lang = "nl";
}

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar"); // Replace 'navbar' with the actual ID of your navbar element

  if (window.pageYOffset > 100) {
    navbar.classList.add("opaque"); // Add the 'opaque' class
    navbar.classList.add("shadow"); // Add the 'shadow' class
  } else {
    navbar.classList.remove("opaque"); // Remove the 'opaque' class
    navbar.classList.remove("shadow"); // Remove the 'shadoe' class
  }
});

window.addEventListener("load", function () {
  var dialogs = document.getElementsByClassName("popup");
  var openButtons = document.getElementsByClassName("open-popup");
  var closeButtons = document.getElementsByClassName("close-dialog");

  function createShowDialogHandler(index) {
    return function () {
      showDialog(index);
      document.body.classList.add("no-scroll");
    };
  }

  function createCloseDialogHandler(index) {
    return function () {
      closeDialog(index);
      document.body.classList.remove("no-scroll");
    };
  }

  function showDialog(id) {
    dialogs[id].showModal();
  }

  function closeDialog(id) {
    dialogs[id].close();
  }

  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", createShowDialogHandler(i));
  }

  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener("click", createCloseDialogHandler(j));
  }
});
