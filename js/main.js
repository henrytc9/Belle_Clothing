

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.product-main-image');
    const thumbnails = document.querySelectorAll('.product-images img');
    const colorOptions = document.querySelectorAll('.color-option');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const announcementElement = document.getElementById("announcement");
    const messages = ["ENVÍO GRATIS POR COMPRAS MAYORES A S/300 🛍️", "30% OFF EN PRENDAS DE TEMPORADA"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % messages.length;
        announcementElement.textContent = messages[index];
    }, 5000);
});

$(document).ready(function(){
    $(".product-card").click(function(){
        $('#discountModal').modal('show');
    });
});