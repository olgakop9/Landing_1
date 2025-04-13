const titleNode = document.querySelector('.submit_btn');
titleNode.addEventListener( 'click', function() {
        titleNode.classList.toggle('red');
        console.log('submit_btn');
})

        
// const signup_formNode = document.querySelector('#signup_form');
// const submitNode = document.querySelector('.submit');
// signup_formNode.addEventListener('submit', function(e) {
//         e.preventDefault();

        
//         // Замените URL на ваш URL веб-приложения из Google Apps Script
//         const scriptURL = 'https://docs.google.com/document/d/1dsMmj03KqB1iRop7kd64DjHbpVjOkONpVZfYZSaf8Uw/edit?usp=sharing';
        
//         const formData = {
//             name: document.getElementById('name').value,
//             phone: document.getElementById('phone').value,
//             email: document.getElementById('email').value,
//             service: document.getElementById('service').value,
//             date: document.getElementById('date').value,
//             message: document.getElementById('message').value
//         }
//         });