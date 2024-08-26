//trigger the animation on scroll for LINE on Title
document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll('.line');

    lines.forEach(line => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    line.classList.add('animate-line');
                } else {
                    line.classList.remove('animate-line');
                }
            });
        }, {
            threshold: 0.1
        });
        observer.observe(line);
    });
});

//trigger dark and light theme 
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const currentTheme = localStorage.getItem('theme');
    const sunCircle = document.querySelector('.mode-button');

    // Apply the saved theme from localStorage (if any)
    if (currentTheme) {
        document.body.classList.add(currentTheme);
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
            sunCircle.classList.toggle('clicked');
        });
    }
});

//#region mobile navigation menu
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    var header = document.querySelector('header');
    var body = document.body;

    if (menu.classList.contains('hidden')) {
        // Show the menu
        menu.classList.remove('hidden');
        menu.classList.add('show'); // Trigger the slide-in transition
        header.style.position = 'fixed';
        body.style.overflowY = 'hidden'; // Disable vertical scrolling
    } else {
        // Hide the menu
        menu.classList.remove('show'); // Trigger the slide-out transition
        setTimeout(function() {
            menu.classList.add('hidden'); // After transition ends, hide it
        }, 300); // Match the duration of the transition
        header.style.position = 'absolute';
        body.style.overflowY = ''; // Re-enable vertical scrolling
    }
}
document.getElementById('mob-nav').addEventListener('click', toggleMenu);
document.querySelectorAll('#mobile-menu ul li a').forEach(function(link) {
    link.addEventListener('click', toggleMenu);
});
//#endregion

