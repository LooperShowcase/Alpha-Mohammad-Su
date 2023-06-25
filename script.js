        const slides = document.querySelectorAll('.slideshow img');
            let currentSlide = 0;
            
            function showSlide(slideIndex) {
              slides.forEach((slide) => slide.classList.remove('active'));
              slides[slideIndex].classList.add('active');
            }
            
            function nextSlide() {
              currentSlide = (currentSlide + 1) % slides.length;
              showSlide(currentSlide);
            }
            
            setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)