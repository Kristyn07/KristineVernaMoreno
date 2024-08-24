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

//trigger dark and light theme 
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const currentTheme = localStorage.getItem('theme');
    const sunCircle = document.querySelector('.sun-circle');

    // Apply the saved theme from localStorage (if any)
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        // Check if the current theme is dark to set the sun circle correctly
        if (currentTheme === 'dark-theme') {
            sunCircle.classList.add('clicked');
        }
    } else {
        // Apply the system preference if no theme is saved
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-theme');
            sunCircle.classList.add('clicked');
        } else {
            document.body.classList.add('light-theme');
        }
    }

    // Toggle theme on button click
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
                sunCircle.classList.remove('clicked'); // Ensure sun rays are shown when switching back to light mode
            } else {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                sunCircle.classList.add('clicked'); // Hide sun rays when switching to dark mode
            }
        });
    }

    // Sun Circle Animation
    if (sunCircle) {
        sunCircle.addEventListener('click', function() {
            // Toggle the 'expand' and 'clicked' classes on the sun circle
            sunCircle.classList.toggle('expand');
            sunCircle.classList.toggle('clicked');
        });
    }
});


