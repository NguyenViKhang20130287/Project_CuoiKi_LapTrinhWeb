var registerBtn = document.querySelector('#register-button-login')
var loginBtn = document.querySelector('#login-button-register')
var registerModal = document.querySelector('.modal')
var registerModalContent = document.querySelector('.modal-content')
var close = document.getElementById('closeButton');
var modal = document.querySelector('.modal')
registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    registerModal.style.visibility = 'visible';
    registerModal.style.opacity = '1';
})

registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    registerModalContent.style.visibility = 'visible';
    registerModalContent.style.transform = 'scale(1)';
    registerModalContent.style.opacity = '1';
})
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    registerModal.style.visibility = 'hidden';
    registerModal.style.opacity = '0';
    registerModalContent.style.visibility = 'hidden';
    registerModalContent.style.transform = 'scale(.5)';
    registerModalContent.style.opacity = '0';
})
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    registerModal.style.visibility = 'hidden';
    registerModal.style.opacity = '0';
    registerModalContent.style.visibility = 'hidden';
    registerModalContent.style.transform = 'scale(.5)';
    registerModalContent.style.opacity = '0';
})
close.addEventListener('click', function (event) {
    event.preventDefault();
    registerModal.style.visibility = 'hidden';
    registerModal.style.opacity = '0';
    registerModalContent.style.visibility = 'hidden';
    registerModalContent.style.transform = 'scale(.5)';
    registerModalContent.style.opacity = '0';
})

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        registerModal.style.visibility = 'hidden';
        registerModal.style.opacity = '0';
        registerModalContent.style.visibility = 'hidden';
        registerModalContent.style.transform = 'scale(.5)';
        registerModalContent.style.opacity = '0';
    }

})

