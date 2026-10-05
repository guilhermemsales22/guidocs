const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Quando clicar em "Sign Up", adiciona a classe que move os painéis
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Quando clicar em "Sign In", remove a classe e volta ao normal
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});