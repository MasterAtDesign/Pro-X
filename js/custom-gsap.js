document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID

        // Smooth scroll to the target section using GSAP
        gsap.to(window, {
            duration: 1, // Duration of the scroll
            scrollTo: { y: targetId, offsetY: 70 }, // Scroll to the target section (adjust offsetY as needed)
            ease: "power2.inOut" // Easing function
        });
    });
});
