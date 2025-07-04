 
     
        // Profile picture rotation
        let currentPic = 0;
        const profilePics = document.querySelectorAll('.profile-pic');
        
        function rotateProfilePic() {
            profilePics[currentPic].classList.remove('active');
            currentPic = (currentPic + 1) % profilePics.length;
            profilePics[currentPic].classList.add('active');
        }
        
        setInterval(rotateProfilePic, 5000);
        
        // Animated titles
        const titles = [
            "IT Solutions Architect | Full Stack Developer | Tech Innovator",
            "Cloud Specialist | Graphics Designer| System Architect",
            "Desktop Application Developer | UI/UX Enthusiast | Tech Consultant",
            "Cybersecurity Expert | Ethical Hacker"
        ];
        
        const titleElement = document.querySelector('.animated-title');
        let currentTitleIndex = 0;
        
        function changeTitle() {
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            titleElement.textContent = titles[currentTitleIndex];
        }
        
        setInterval(changeTitle, 5000);
        
        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you within 24 hours.');
            contactForm.reset();
        });
        
        const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', function () {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.trim();

    if (query !== '') {
        const perplexityURL = `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`;
        window.open(perplexityURL, '_blank'); // Opens in a new tab
        searchInput.value = '';
    }
});
