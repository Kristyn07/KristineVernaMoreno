//trigger the animation on scroll for LINE on Title
document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll('.line');

    lines.forEach(line => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the class to start the animation
                    line.classList.add('animate-line');
                } else {
                    // Remove the class when the element goes out of view
                    line.classList.remove('animate-line');
                }
            });
        }, {
            threshold: 0.1 // Adjust this to control when the animation starts (10% visibility)
        });

        observer.observe(line);
    });
});