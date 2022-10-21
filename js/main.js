var searchBtn = document.querySelector('.search-btn');
var closeModalBtn = document.querySelector('.main-modal-close-btn button')
var HidemodalSearch = document.querySelector('.hide-modal-search')

// Show/hide modal search
searchBtn.addEventListener('click', function () {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(0)';
})

closeModalBtn.addEventListener('click', function (e) {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(-3000px)';
})

HidemodalSearch.addEventListener('click', function (e) {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(-3000px)';
})

// srcoll
var prevScrollpos = window.pageYOffset;

// document.querySelector('.header_page').style.position = 'none';
document.querySelector('.header_page').classList.remove('sticky')

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header_page').classList.remove('sticky')
    } else {
        document.querySelector('.header_page').classList.add('sticky')
        document.querySelector('.header_page-modal-search').style.position = 'fixed'
    }
    prevScrollpos = currentScrollPos
}