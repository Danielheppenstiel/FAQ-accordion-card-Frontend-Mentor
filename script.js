('use strict');

document.querySelectorAll('.accordion-btn').forEach(button => {

    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-btn--active');

        if (button.classList.contains('accordion-btn--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }


    })

})

