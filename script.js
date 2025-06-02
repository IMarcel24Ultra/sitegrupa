document.addEventListener('DOMContentLoaded', () => {
    // Efect de scris la titlu (scriere literă cu literă)
    const title = document.querySelector('header h1');
    const fullText = title.textContent;
    title.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < fullText.length) {
            title.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // viteza literelor
        }
    }
    typeWriter();

    // Fade-in la secțiuni când apar în viewport
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const fadeIn = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeIn, options);
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});
🧙‍♂️ Și adaugă aceste stiluri în style.css pentru ca efectele să funcționeze:
css
Copy
Edit
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease-in-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}