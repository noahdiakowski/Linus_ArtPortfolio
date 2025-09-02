let slideIndex = 1;

function openModal() {
    document.getElementById("modal").style.display = "flex";
    showSlides(slideIndex);
    document.body.classList.add("modalOpen");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modalOpen");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { 
        slideIndex = 1 }

    if (n < 1) { 
        slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}