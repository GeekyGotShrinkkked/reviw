const messages = [
    'Welcome to our website!',
    'Explore our features!',
    'Contact us for more information!',
    'Check out our latest updates!',
    'Join our community today!',
    'We value your feedback!',
    'Stay tuned for more content!',
    'Thank you for visiting!',
    'Have a great day!',
    'See you again soon!'
  ];
  
  let currentIndex = 0;
  const textElement = document.getElementById('text');
  
  function changeText() {
    textElement.style.opacity = 0; // Fade out
  
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length; // Loop back to the first message
        textElement.textContent = messages[currentIndex]; // Change the text content
        textElement.style.opacity = 1; // Fade in
    }, 1000); // Match this duration with the CSS transition duration
  }
  
  // Change text every 4 seconds (3 seconds display + 1 second transition)
  setInterval(changeText, 4000);
  
  // Initialize the first message
  textElement.textContent = messages[currentIndex];
  textElement.style.opacity = 1; // Show the first message immediately