"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openToast = exports.closeToast = exports.HandleLogin = void 0;
function HandleLogin() {
    const checkIsEmpty = (e) => {
        return e.value ? { isValid: true, message: '' } : { isValid: false, message: e.name + ' tidak boleh kosong!' };
    };
    const validateAll = (e) => {
        const label = e.parentElement.querySelector('.validate');
        const result = checkIsEmpty(e);
        label.innerHTML = result.message;
        if (result.isValid) {
            label.classList.add('hidden');
            e.classList.remove('input--invalid');
        }
        else {
            label.classList.remove('hidden');
            e.classList.add('input--invalid');
        }
        return result.isValid;
    };
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input:not([type=submit])');
    const passwords = document.querySelector('input[type=password]');
    const toggler = passwords.nextElementSibling;
    toggler.addEventListener('click', (event) => {
        event.preventDefault();
        toggler.classList.toggle('expanded');
        toggler.classList.contains('expanded') ? passwords.type = 'text' : passwords.type = 'password';
    });
    inputs.forEach(e => {
        e.addEventListener('input', ({ target }) => {
            validateAll(target);
        });
    });
}
exports.HandleLogin = HandleLogin;
function closeToast() {
    let parent = document.querySelector('.toast-toggler').parentElement;
    parent.classList.add('animate-fade-reverse');
    parent.onanimationend = () => parent.classList.add('hidden');
}
exports.closeToast = closeToast;
function openToast() {
    if (document.querySelector('.toast-toggler') !== null) {
        let parent = document.querySelector('.toast-toggler').parentElement;
        parent.classList.remove('animate-fade-reverse');
        parent.classList.remove('hidden');
    }
}
exports.openToast = openToast;
//# sourceMappingURL=login.js.map