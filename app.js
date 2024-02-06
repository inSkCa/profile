document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var mainNav = document.getElementById('main-nav');
    var actions = document.querySelector('.actions');

    // Initial setup
    closeIcon.style.display = 'none';

    // Function to toggle menu visibility
    function toggleMenu() {
        mainNav.classList.toggle('show');
    }

    // Function to close the menu
    function closeMenu() {
        mainNav.classList.remove('show');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }

    // Event listener for menu icon
    menuIcon.addEventListener('click', function () {
        toggleMenu();
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    // Event listener for close icon
    closeIcon.addEventListener('click', function () {
        closeMenu();
    });

    // Event listener for nav links
    mainNav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            // If a navigation link is clicked, close the menu
            closeMenu();
        }
    });

    // Resize event listener to handle screen size changes
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 745) {
            closeMenu();
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            menuIcon.style.display = mainNav.classList.contains('show') ? 'none' : 'block';
            closeIcon.style.display = 'none';
        }
    });

    var handEmoji = document.getElementById('handEmoji');

    // Add the shake class on page load
    handEmoji.classList.add('shake');

    // Remove the shake class after the animation is complete
    handEmoji.addEventListener('animationend', function () {
        handEmoji.classList.remove('shake');
    });
});
