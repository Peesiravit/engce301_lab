document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('main-title');
    const button = document.getElementById('cta-button');
    
    // Add magnetic effect to button (subtle micro-animation)
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px)';
    });

    // Cycle through messages when button is clicked
    const messages = [
        "Software Engineering",
        "Design & Dev",
        "Hello, World!",
        "Lab Week 1"
    ];
    let currentIdx = 0;

    button.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % messages.length;
        
        // Add a quick flash animation
        title.style.opacity = '0';
        setTimeout(() => {
            title.textContent = messages[currentIdx];
            title.style.opacity = '1';
        }, 200);
        
        // Simple console log for verification
        console.log(`Action: Changed title to ${messages[currentIdx]}`);
    });

    // Initial log
    console.log("Lab Week 1 interactive script initialized.");
});
