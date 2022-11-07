const allHoverImages = document.querySelectorAll('.hover_container div img');
const imgContainer = document.querySelector('.img_container');
window.addEventListener('DOMContentLoaded',() =>{
    allHoverImages[0].parentElement.classList.add('active');
});
allHoverImages.forEach((image) =>{
    image.addEventListener('mouseover',() =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});
function resetActiveImg(){
    allHoverImages.forEach((img) =>{
        img.parentElement.classList.remove('active');
    });
}
//
const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    number = document.querySelector(".number");
let a=1;
plus.addEventListener("click",()=>{
    a++;
    number.innerHTML=a;
});
minus.addEventListener("click",()=>{
    if(a>1){
        a--;
        number.innerHTML=a;
    }
});
//
$(document).ready(function (){
    $('.tab-content-item').hide();
    $('.tab-content-item:first-child').fadeIn();
    $('.nav-tabs li').click(function (){
       //active nav tabs
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');
        //show tab-content item
        let id_tab_content = $(this).children('a').attr('href');
        //alert
        $('.tab-content-item').hide();
        $(id_tab_content).fadeIn();
        return false;

    });
});
//
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});