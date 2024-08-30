//navbar

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


//home-main-section

const imageSlides = document.querySelector('.image-slides');
const imageElements = imageSlides.querySelectorAll('img');
const totalImageSlides = imageElements.length;
let imageIndex = 0;

function showNextImage() {
    imageIndex = (imageIndex + 1) % totalImageSlides;
    const offset = -imageIndex * 100; // Move images up by 100% of their height
    imageSlides.style.transform = `translateY(${offset}%)`;
}

setInterval(showNextImage, 4000); // Change image every 5 seconds

// const textSlides = document.querySelector('.text-slides');
// const textElements = textSlides.querySelectorAll('.text-slide');
// const totalTextSlides = textElements.length;
// let textIndex = 0;

// function showNextText() {
//     textIndex = (textIndex + 1) % totalTextSlides;
//     const offset = -textIndex * 100; // Move text slides up by 100% of their height
//     textSlides.style.transform = `translateY(${offset}%)`;
// }

// setInterval(showNextText, 5000); // Change text every 5 seconds


// Text Slideshow
const textSlides = document.querySelectorAll('.text-slide');
let textIndex = 0;

function showNextText() {
  textSlides.forEach((slide) => {
    slide.classList.remove('active');
  });
  textSlides[textIndex].classList.add('active');
  textIndex = (textIndex + 1) % textSlides.length;
}

setInterval(showNextText, 4000); // Change text every 5 seconds

// Initialize the first slide
textSlides[0].classList.add('active');



function showContent(contentId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Show the selected tab content
  const activeContent = document.getElementById(contentId);
  if (activeContent) {
    activeContent.classList.add("active");
  }
}

// Optional: Show the first tab content by default
document.addEventListener("DOMContentLoaded", () => {
  showContent("electronics"); // Change this to whichever tab you want to show by default
});

