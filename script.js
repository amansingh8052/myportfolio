const typed = new Typed('.multiple-text' , {
    strings: ['UI/UX Designer','Frontend Developer','Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.headerOptions');
    
    function activateLink() {
        let currentSection = sections[0];
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60; // Adjust for header height
            if (window.scrollY >= sectionTop) {
                currentSection = section;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('activate');
            if (link.getAttribute('href').substring(1) === currentSection.id) {
                link.classList.add('activate');
            }
        });
    }

    // Initial call to set the active link
    activateLink();
    
    // Update active link on scroll
    window.addEventListener('scroll', activateLink);

    // Add click event listeners to nav links
    navLinks.forEach((link) => {
        link.addEventListener('click', function() {
            navLinks.forEach((link) => link.classList.remove('activate'));
            this.classList.add('activate');
        });
    });
});




function openFullScreenImage(imageSrc) {
    const modal = document.getElementById("fullScreenImage");
    const modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeFullScreenImage() {
    const modal = document.getElementById("fullScreenImage");
    modal.style.display = "none";
}



//animation 
gsap.registerPlugin(ScrollTrigger);
gsap.from('.name',{
    x : -200,
    opacity : 0,
    duration : 1
})
gsap.from('.download,.homecontentWeb',{
    y : 100,
    opacity : 0,
    duration : 1
})
gsap.from('.hiiThere',{
    y : -50,
    opacity : 0,
    duration : 1
})
gsap.from('.homeImg', {
    x: 50,
    duration: 1,
    opacity : 0
});
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 40%", // Trigger when the top of the section is 80% from the top of the viewport
        end: "bottom 60%", 
        toggleActions: "play none none none",
        // markers:true
    }
});

// Step 1: Animate the height of the image
timeline.fromTo(".aboutImg", 
    { height: 0 }, 
    { 
        height: "35vw", 
        duration: 1, 
        ease: "power2.out"
    }
)
// Step 2: Text emerges after the image expands
.to(".aboutContent", 
    { 
        opacity: 1, 
        transform: "translateX(0) skewX(10deg)", 
        duration: 1, 
        ease: "power2.out" 
    }, 
    "-=0.5" // Start this animation slightly before the previous one ends
);

// gsap.from('.aboutContent', {
//     x: 500,
//     duration: 10,
//     scrollTrigger: {
//         trigger: '#about', 
//         start: 'top 70%',            
//         end: 'bottom bottom',         
//         toggleActions: 'play none none none',
//         scrub : 2,
//         // markers: true
//     }
// });

gsap.from('.skillCover', {
    y: 500,
    duration: 10,
    scrollTrigger: {
        trigger: '#skills', 
        start: 'top 70%',            
        end: 'bottom bottom',         
        toggleActions: 'play none none none',
        scrub : 2,
        // markers: true
    }
});
gsap.from('.title', {
    x:-100,
    Opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: '.title', 
        start: 'top 60%',            
        end: 'bottom 10%',         
        toggleActions: 'play none none none',
        // scrub : 1,
        // markers: true
    }
});
gsap.from('.projectContainer', {
    x:100,
    Opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: '.projectContainer', 
        start: 'top 60%',            
        end: 'bottom 10%',         
        toggleActions: 'play none none none',
        // scrub : 1,
        // markers: true
    }
});
gsap.from('.contactForm', {
    y:200,
    Opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contactCover', 
        start: 'top 60%',            
        end: 'top 90%',         
        toggleActions: 'play none none none',
        // scrub : 1,
        // markers: true
    }
});
gsap.from('.socialMedia', {
    y:-200,
    Opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contactCover', 
        start: 'top 60%',            
        end: 'top 90%',         
        toggleActions: 'play none none none',
        // scrub : 1,
        // markers: true
    }
});