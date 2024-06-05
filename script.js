document.addEventListener('DOMContentLoaded', function() {
    // Carrusel
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    let currentImage = 0;
    const imagesContainer = document.getElementById('images');

    //verificar si el contenedor existe
    if(imagesContainer){
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active');
        imagesContainer.appendChild(img);
    });

    function updateImage(index) {
        const imgs = document.querySelectorAll('#images img');
        imgs.forEach(img => img.classList.remove('active'));
        imgs[index].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        updateImage(currentImage);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateImage(currentImage);
    });
    }else {
        console.error("El contenedor de imágenes no se encuentra en el DOM.");
    
    }
    // Validación del formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const messages = document.getElementById('form-messages');
        messages.innerHTML = '';

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            messages.innerHTML += '<p>El nombre debe contener solo letras y espacios.</p>';
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            messages.innerHTML += '<p>El correo electrónico no es válido.</p>';
        }
        if (isNaN(age) || age < 18 || age > 100) {
            messages.innerHTML += '<p>La edad debe ser un número entre 18 y 100.</p>';
        }

        if (messages.innerHTML === '') {
            const result = document.createElement('div');
            result.innerHTML = `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Edad: ${age}</p>`;
            messages.appendChild(result);
        }
    });
});
