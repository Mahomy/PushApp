// Dynamic HTML Project JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dynamic HTML Project loaded successfully!');
    
    // Add some interactive functionality
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    
    // Fade in animation for sections
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200 + 300);
    });
    
    // Add click interaction to header
    header.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Display current time
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        console.log(`Current time: ${timeString}`);
    }
    
    // Update time every minute
    setInterval(updateTime, 60000);
    updateTime(); // Initial call
});