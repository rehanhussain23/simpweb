// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Click button functionality
    const clickButton = document.getElementById('clickButton');
    const messageDisplay = document.getElementById('message');
    let clickCount = 0;
    
    clickButton.addEventListener('click', function() {
        clickCount++;
        messageDisplay.textContent = `Button clicked ${clickCount} time${clickCount === 1 ? '' : 's'}!`;
        messageDisplay.className = 'success';
        
        // Reset message after 3 seconds
        setTimeout(() => {
            messageDisplay.textContent = '';
            messageDisplay.className = '';
        }, 3000);
    });
    
    // Form submission functionality
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Success message
        showMessage(`Thank you ${name}! Your message has been received.`, 'success');
        
        // Clear form
        contactForm.reset();
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Helper function to show messages
    function showMessage(text, type) {
        const messageDisplay = document.getElementById('message');
        messageDisplay.textContent = text;
        messageDisplay.className = type;
        
        // Scroll to message
        messageDisplay.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDisplay.textContent = '';
            messageDisplay.className = '';
        }, 5000);
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add some interactive effects
    const sections = document.querySelectorAll('section');
    
    // Add hover effects to sections
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
});