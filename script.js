// Function to handle page navigation
function navigateTo(targetId) {
    // 1. Remove 'active' class from all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Add 'active' class to the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 3. Update Navbar active state
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });

    // 4. Close mobile menu if open
    const navList = document.querySelector('.nav-links');
    if (window.innerWidth < 768) {
        navList.style.display = 'none';
    }
}

// Event Listeners for Navbar Links
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        navigateTo(target);
    });
});

// Mobile Hamburger Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '70px';
            navList.style.right = '0';
            navList.style.width = '100%';
            navList.style.background = 'rgba(11, 12, 16, 0.95)';
            navList.style.padding = '20px';
        }
    });
}