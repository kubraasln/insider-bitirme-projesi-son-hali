
// Menulerin açılıp kapanmasının iconlara bağlanması
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")


// menu açma
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
// menu kapama
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
}
)

// tema değiştirme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


// SECTİON CHAT


