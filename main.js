const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const langEn = document.getElementById('lang-en');
const langFa = document.getElementById('lang-fa');

// Toggle between Login and Register forms
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Language Switcher
const translations = {
    en: {
        login: "Login",
        forgot_password: "Forgot Password?",
        or_login_with: "Or login with social platforms",
        registration: "Registration",
        register: "Register",
        or_register_with: "Or register with social platforms",
        welcome: "Hello, Welcome!",
        no_account: "Don't have an account?",
        welcome_back: "Welcome Back!",
        have_account: "Already have an account?"
    },
    fa: {
        login: "ورود",
        forgot_password: "رمز عبور را فراموش کرده‌اید؟",
        or_login_with: "یا با شبکه‌های اجتماعی وارد شوید",
        registration: "ثبت‌ نام",
        register: "ثبت‌ نام",
        or_register_with: "یا با شبکه‌های اجتماعی ثبت‌نام کنید",
        welcome: "!سلام، خوش آمدید",
        no_account: "حساب کاربری ندارید؟",
        welcome_back: "!خوش آمدید",
        have_account: "قبلاً حساب کاربری دارید؟"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}

langEn.addEventListener('click', () => setLanguage('en'));
langFa.addEventListener('click', () => setLanguage('fa'));

// Set default language to English
setLanguage('en');
