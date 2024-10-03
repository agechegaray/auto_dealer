import { reviews } from '../data/reviews.js';

document.addEventListener("DOMContentLoaded", function() {
    const myTarget = document.querySelector("#reviewCards");

    if (myTarget) {
        for (let x = 0; x < reviews.length; x++) {
            const mySection = document.createElement('section');
            const myName = document.createElement('h3');
            myName.textContent = reviews[x].name;

            const myReview = document.createElement('p');
            myReview.textContent = reviews[x].text;

            const myRating = document.createElement('div');
            myRating.classList.add('review-rating');

            for (let step = 0; step < reviews[x].stars; step++) {
                const myStars = document.createElement('img');
                myStars.src = "../images/star_icon.svg";
                myStars.alt = "star rating";
                myStars.classList.add('star-icon');
                myRating.appendChild(myStars);
            }

            mySection.appendChild(myName);
            mySection.appendChild(myRating);
            mySection.appendChild(myReview);

            myTarget.appendChild(mySection);
        }
    } else {
        console.error("Review cards container not found.");
    }

    // Small Screen Button Menu
    const navElement = document.querySelector('#theNav');
    const btnElement = document.querySelector('#theButton');

    btnElement.addEventListener('click', () => {
        btnElement.classList.toggle('open'); // Toggle button icon
        navElement.classList.toggle('open'); // Toggle the visibility of the menu
    });


    // Current year in footer
    const rightNow = new Date();
    document.querySelector('#year').textContent = rightNow.getFullYear();
});
