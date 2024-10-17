const button = document.getElementById('myButton');

const messageParagraph = document.createElement('p');
document.body.appendChild(messageParagraph);

button.addEventListener('click', function() {
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});