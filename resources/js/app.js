



//Ajax kall för navbar
    document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the image element
    var image = document.getElementById("overlay-trigger");

    // Add click event listener to the image
    image.addEventListener("click", function() {
      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();

    // Define the AJAX endpoint URL
    var url = "/ajax_handler.php?action=get_overlay_content";

    // Configure the AJAX request
    xhr.open("GET", url, true);

    // Define the callback function to handle the AJAX response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Request was successful
          var response = xhr.responseText;

    // Display the overlay with the fetched content
    displayOverlay(response);
        } else {
        // Request failed
        console.error('Request failed with status:', xhr.status);
        }
      };

    // Handle network errors
    xhr.onerror = function() {
        console.error('Request failed');
      };

    // Send the AJAX request
    xhr.send();
    });

    // Function to display the overlay with fetched content
    function displayOverlay(content) {
      // Update the overlay content with the fetched content
      var overlayContent = document.querySelector('.overlay-step__wrapper');
    overlayContent.innerHTML = content;

      // Show the overlay
      // You need to implement the logic to show the overlay based on your styling or framework
    }
  });
