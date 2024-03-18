document.addEventListener("DOMContentLoaded", function() {
  var image = document.getElementById("overlay-trigger");
  image.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    var url = "/ajax_handler.php?action=get_overlay_content";
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response = xhr.responseText;
        displayOverlay(response);
      } else {
        console.error("Request failed with status:", xhr.status);
      }
    };
    xhr.onerror = function() {
      console.error("Request failed");
    };
    xhr.send();
  });
  function displayOverlay(content) {
    var overlayContent = document.querySelector(".overlay-step__wrapper");
    overlayContent.innerHTML = content;
  }
});
