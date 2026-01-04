let infoIndex = 0;
const infoTexts = document.querySelectorAll('.info-text');

function rotateInfo() {
    // 移除當前 active
    infoTexts[infoIndex].classList.remove('active');
    
    // 計算下一組索引
    infoIndex = (infoIndex + 1) % infoTexts.length;
    
    // 加上新 active
    infoTexts[infoIndex].classList.add('active');
}

// 每 3 秒執行一次切換
setInterval(rotateInfo, 3000);



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); // 抓取 dots
let slideInterval = setInterval(autoPlay, 3000);

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach(s => s.classList.remove('active'));
    // 防錯判斷：如果有 dots 才執行移除
    if (dots.length > 0) {
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    slides[currentIndex].classList.add('active');
}

function moveSlide(step) {
    resetTimer();
    showSlide(currentIndex + step);
}

function autoPlay() {
    showSlide(currentIndex + 1);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoPlay, 3000);
}

/*member*/ 
function toggleMember() {
    const loginBox = document.getElementById('login-box');
    const regBox = document.getElementById('register-box');

    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        regBox.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        regBox.style.display = 'block';
    }
}

function handleForgotPwd() {
    alert("請聯繫客服或檢查您的註冊信箱以重設密碼！");
    // 未來可以跳轉到 forgot-password.html
}

/*會員服務*/
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-main-row');
    // 當頁面下滑超過 50px 時，加上 scrolled class
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});