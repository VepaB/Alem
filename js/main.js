// Show popup on page load
window.addEventListener("load", () => {
    const popup = document.getElementById("discount-popup");
    const closeButton = document.getElementById("close-popup");

    // Show popup
    togglePopup(popup, true);

    // Close popup on button click
    closeButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event bubbling
        togglePopup(popup, false);
        event.preventDefault();  // Предотвращение перехода по ссылке
        closePopup();
    });

    // Close popup when clicking outside the content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            togglePopup(popup, false);
            closePopup();
        }
    });

    // Call the test function on page load
    testPopupAndCarousel();
});

// Function to toggle popup visibility
function togglePopup(popup, isVisible) {
    if (isVisible) {
        popup.classList.add("show");
        popup.style.display = "block";
    } else {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none"; // Полное скрытие
        }, 300); // Соответствует времени transition в CSS
    }
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("discount-popup");
    togglePopup(popup, false);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Function to test the interaction between the popup and carousel
function testPopupAndCarousel() {
    const popup = document.getElementById("discount-popup");
    // Ensure popup is shown
    if (popup.classList.contains("show")) {
        console.log("Popup is shown correctly.");
    } else {
        console.log("Popup is not shown.");
    }
}

// Function to handle order button click
function handleOrderButtonClick() {
    location.href = './pages/order.html';
}

// Attach event listener to order buttons
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', handleOrderButtonClick);
});

// Show back-to-top button when scrolling down
window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to top when back-to-top button is clicked
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
