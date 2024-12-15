// Ensure jQuery is loaded for this solution
$(document).ready(function() {
  // When a link with class 'page-scroll' is clicked
  $('.page-scroll').on('click', function(event) {
    // Get the target element (e.g., #portfolio)
    var target = $(this).attr('href');
    
    // Prevent the default anchor behavior
    event.preventDefault();
    
    // Adjust the scroll position, compensating for the fixed navbar
    $('html, body').animate({
      scrollTop: $(target).offset().top - 50  // 50px is the height of the fixed navbar
    }, 1000); // 1000ms (1 second) for the scroll animation
  });
});
