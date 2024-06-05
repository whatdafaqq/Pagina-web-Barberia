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
        const name = document.getElementById('nombreapellido').value;
        const email = document.getElementById('correoelectronico').value;
        const phone = document.getElementById('telefono').value;
        const  message= document.getElementById('mensaje').value;

        const messages = document.getElementById('form-messages');
        messages.innerHTML = '';

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            messages.innerHTML += '<p>El nombre debe contener solo letras y espacios.</p>';
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            messages.innerHTML += '<p>El correo electrónico no es válido.</p>';
        }

        if (!validarTelefono(phone)) {
            messages.innerHTML += '<p>El número de teléfono debe contener solo dígitos y tener entre 7 y 15 caracteres.</p>';
        }
        if (!validarMensaje(message)) {
            messages.innerHTML += '<p>El mensaje no debe exceder los 250 caracteres.</p>';
        }

        

        if (messages.innerHTML === '') {
            const result = document.createElement('div');
            result.innerHTML = `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Teléfono: ${phone}</p><p>mensaje: ${message}</p>`;
            messages.appendChild(result);
        }
    });
       
    function validarTelefono(telefono) {
        const regexTelefono = /^[0-9]{7,15}$/;
        return regexTelefono.test(telefono);
    }

    function validarMensaje(mensaje) {
        return mensaje.length <= 250;
    }

    
});
