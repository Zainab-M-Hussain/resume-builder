// Smooth Scroll to Sections
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    const hireMeButton = document.querySelector('.hire-me') as HTMLAnchorElement;
    const downloadCvButton = document.querySelector('.btn.download-cv') as HTMLAnchorElement;

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId!);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hire Me Button
    if (hireMeButton) {
        hireMeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.getBoundingClientRect().top + window.scrollY,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Download CV Button
    if (downloadCvButton) {
        downloadCvButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Replace with your actual CV file URL
            const cvUrl = 'path/to/your/cv.pdf';
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'My_CV.pdf'; // File name for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

