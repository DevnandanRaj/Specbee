document.addEventListener('DOMContentLoaded', () => {
    const speakersContainer = document.querySelector('.speakers');
    const leftArrow = document.querySelector('.arrow--left');
    const rightArrow = document.querySelector('.arrow--right');
    const modal = document.getElementById('speaker-details'); 
    const modalImg = document.getElementById('details-img');
    const modalName = document.getElementById('details-name');
    const modalTitle = document.getElementById('details-title');
    const modalCompany = document.getElementById('details-company');
    const modalDescription = document.getElementById('details-description');
    const closeModalBtn = document.getElementById('close-details');

    // Function to scroll to the left
    leftArrow.addEventListener('click', () => {
        const lastCard = speakersContainer.lastElementChild;
        speakersContainer.insertBefore(lastCard, speakersContainer.firstElementChild);
    });

    // Function to scroll to the right
    rightArrow.addEventListener('click', () => {
        const firstCard = speakersContainer.firstElementChild;
        speakersContainer.appendChild(firstCard);
    });

    // Add click event to each speaker card
    document.querySelectorAll('.speaker-card').forEach(card => {
        card.addEventListener('click', () => {
            // Retrieve data from clicked card
            const imgSrc = card.querySelector('.speaker-image').src;
            const name = card.querySelector('h3').innerText; 
            const title = card.querySelector('.position').innerText; 
            const company = card.querySelector('.company').innerText; 
            console.log(name,title,company)
            // Update modal content
            modalImg.src = imgSrc;
            modalName.innerText = name;
            modalTitle.innerText = title;
            modalCompany.innerText = company;
            modalDescription.innerText  

            // Show the modal
            console.log("Speaker card clicked:", name, title, company);
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    // Close the modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    });

    // Close modal on clicking outside
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});
