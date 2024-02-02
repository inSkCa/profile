document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    if (mobileMenuIcon) {
      mobileMenuIcon.addEventListener('click', function () {
        mobileMenu.classList.add('active');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
      });
    }

    const projects = document.querySelectorAll('.project');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 1.5 &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0
      );
    }

    function handleScroll() {
      projects.forEach((project) => {
        if (isInViewport(project) && !project.classList.contains('show')) {
          project.classList.add('show');
        }
      });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
  });

