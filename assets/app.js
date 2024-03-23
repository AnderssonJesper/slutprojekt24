document.addEventListener("DOMContentLoaded", function() {
  var imageIcon = document.querySelector(".epost-icon");
  var closeButton = document.getElementById("close-overlay-btn");
  var emailForm = document.getElementById("email-form");
  if (imageIcon) {
    imageIcon.addEventListener("click", function() {
      var overlay = document.getElementById("overlay");
      overlay.style.display = "block";
    });
  }
  if (closeButton) {
    closeButton.addEventListener("click", function() {
      var overlay = document.getElementById("overlay");
      overlay.style.display = "none";
    });
  }
  if (emailForm) {
    emailForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var emailInput = document.getElementById("email-input").value;
      console.log("Submitted email:", emailInput);
      var overlay = document.getElementById("overlay");
      overlay.style.display = "none";
    });
  }
});
