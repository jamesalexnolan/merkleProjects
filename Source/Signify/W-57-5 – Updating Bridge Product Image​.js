//change slider image
document.querySelectorAll('.swiper-slide-image')[0].style = "background-image: url(https://www.philips-hue.com/content/dam/hue/en-us/images/philips-hue-bridge-with-package.jpg);"
//change title image
var mpxImage = '<img sizes="735px" class="swiper-slide__image swiper-lazy swiper-lazy-loaded" srcset="https://www.philips-hue.com/content/dam/hue/en-us/images/philips-hue-bridge-with-package.jpg?wid=1500&amp;hei=1125&amp;qlt=82 1200w, https://www.philips-hue.com/content/dam/hue/en-us/images/philips-hue-bridge-with-package.jpg?wid=960&amp;hei=720&amp;qlt=82 768w, https://www.philips-hue.com/content/dam/hue/en-us/images/philips-hue-bridge-with-package.jpg?wid=750&amp;hei=561&amp;qlt=82 600w, https://www.philips-hue.com/content/dam/hue/en-us/images/philips-hue-bridge-with-package.jpg?wid=375&amp;hei=279&amp;qlt=82 300w">'
//select elememt 
var target = document.querySelectorAll('.swiper-slide>div>img')[0]
//create new element
var newElement = document.createElement('div')
newElement.innerHTML = mpxImage
//replace element
target.replaceWith(newElement.firstChild)

//replicate user slider click onLoad
window.onload = function () {
    //check if filters are applied (aka slider already clicked)
    if (document.querySelector('[data-class="--hidden"]') === null) {
        //wait 0.5 seconds to let content load, then click
        setTimeout(function () {
            document.querySelector('.slider.round').click();
        }, 500);
    };
}