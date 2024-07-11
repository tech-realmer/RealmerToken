document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    toggle.addEventListener('change', function() {
        if (this.checked) {
            mobileNav.style.display = 'block';
        } else {
            mobileNav.style.display = 'none';
        }
    });
});

