var searchBtn = document.querySelector('.search-btn');
var closeModalBtn = document.querySelector('.main-modal-close-btn button')
var HidemodalSearch = document.querySelector('.hide-modal-search')

// Show/hide modal search
searchBtn.addEventListener('click', function () {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(0)';
})

closeModalBtn.addEventListener('click', function (e) {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(-1000px)';
})

HidemodalSearch.addEventListener('click', function (e) {
    document.querySelector('.header_page-modal-search').style.transform = 'translateY(-1000px)';
})