//if statment to check if they are a 'non-volt' customer
//run code if they are not
if (JSON.stringify(dataLayer).indexOf("pink") < 0) {
    //creates HTML for the accordion 
    var mpxAccordion = '<container class="mpx-accordion">\
    <hr>\
    <div class="mpx-speedSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://prod.ctassets.virginmedia.com/uploads/TWM_Broadband_Only_c282052da6_6f488ccbc7.png">\
            <p class="mpx-product-title">Broadband</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#speedSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-speedSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-simSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/join/static/img/sim.svg">\
            <p class="mpx-product-title">O2 Sim</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#simSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-simSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-skySelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/join/static/img/tvStream/tv-icon.svg">\
            <p class="mpx-product-title">Channel Packs</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#skySelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-skySelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-netflixSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/join/static/img/tvStream/popcorn-icon.svg">\
            <p class="mpx-product-title">Entertainment</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#netflixSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-netflixSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-tvSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/join/static/img/tv-normal.svg">\
            <p class="mpx-product-title">Extra TV Boxes</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#tvSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-tvSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-landlineSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/join/static/img/home-phone.svg">\
            <p class="mpx-product-title">Call Plans</p>\
            <p class="mpx-product-info"></p>\
        </div>\
        <a href="#landlineSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-landlineSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
</container>'
    //places the accordion 
    $(mpxAccordion).insertAfter($('#speed-selection'))
    //hides original menu
    $('#speed-selection').css('display', 'none')
    //moves header and changes text
    $('.page-header').insertBefore('.mpx-accordion')
    $('.page-header h1').text("Customise your bundle your way")
    //moves existing sections into container 
    $('#speed-selection-board-container').appendTo($('.mpx-speedSelection-content'))
    $('#channel-packs-container').appendTo($('.mpx-skySelection-content'))
    //id = "tv2-streaming-options-container"
    //id = "netflix-container"
    $('#streaming-options-container').appendTo($('.mpx-netflixSelection-content'))
    $('#additional-tv-selection-board-container').appendTo($('.mpx-tvSelection-content'))
    $('#landline-selection-board-container').appendTo($('.mpx-landlineSelection-content'))
    //on click for accordian 
    //Add click event to mpx-accordion-btn to 'open' / 'close' accordion item
    $('.mpx-accordion-btn').on('click', function () {
        $(this).parent().parent('.mpx-accordion-content').toggleClass('open');
        $(this).parent().siblings('.mpx-accordion-content').slideToggle();
    });
    //button clicks in sequence 
    //loads relevant content on the page 
    //each click populates the next element
    var pxFuncFired = 0;
    var pxInterval = setInterval(pxPollFunc, 400);
    //polling function
    function pxPollFunc() {
        pxFuncFired += 1;
        //if run for over 4 secs then don't
        if (pxFuncFired >= 10) {
            clearInterval(pxInterval);
            //moves sim selection into correct accordion
            $('#speed-selection-board-container > div > div:eq(1)').appendTo($('#sim-selection-board-container'))
            $('#sim-selection-board-container').appendTo($('.mpx-simSelection-content'))
            //adds class to last virgin button
            $('.virgin-button').last().addClass('mpx-nav-banner')
            $('.virgin-button').last().addClass('align-items-end')
            $('.virgin-button').last().removeClass('align-items-center')
            $('.virgin-button').last().insertAfter($('.mpx-accordion'))
            $('.virgin-button span').last().text('Continue to checkout')
            //selects each of the accordion elements and the content div inside it
            var containers = [
                { container: "#speed-selection-board-container", class: ".mpx-speedSelection" },
                { container: "#sim-selection-board-container", class: ".mpx-simSelection" },
                { container: "#channel-packs-container", class: ".mpx-skySelection" },
                { container: "#streaming-options-container", class: ".mpx-netflixSelection" },
                { container: "#additional-tv-selection-board-container", class: ".mpx-tvSelection" },
                { container: "#landline-selection-board-container", class: ".mpx-landlineSelection" },
            ];
            //if one of the selection options isn't populated after button presses, hide its accordion option
            containers.forEach(function (containerInfo) {
                if ($(containerInfo.container).html() === "" || $(containerInfo.container).css("display") === "none") {
                    $(containerInfo.class).find(".mpx-accordion-btn").parent().parent().css("display", "none");
                }
            });
            //hides <hr> if div is not displayed 
            $('.mpx-accordion-container').each(function () {
                if ($(this).css('display') == 'none') {
                    $(this).prev('hr').css('display', 'none');
                }
            });
            //adds edit/add button text, depending on active class being included or not
            containers.forEach(function (container) {
                var active = $(container.class + " .active");
                if (active.length) {
                    $(container.class + " .mpx-accordion-btn").text("edit ");
                    $(container.class + " .mpx-accordion-btn").append("<img src='PENCIL ICON NEEDED'/>");
                } else {
                    $(container.class + " .mpx-accordion-btn").text("add");
                    $(container.class + " .mpx-accordion-btn").append("<img src='https://prod.ctassets.virginmedia.com/uploads/plus_741c555f11.svg'/>");
                }
            });
            //checks if 'active' has changed on card changes accordion btn to edit/add
            $(document).on("change", ".selection-card", function () {
                containers.forEach(function (container) {
                    var active = $(container.class + " .active");
                    if (active.length) {
                        $(container.class + " .mpx-accordion-btn").text("edit ");
                        $(container.class + " .mpx-accordion-btn").append("<img src='PENCIL ICON NEEDED'/>");
                    } else {
                        $(container.class + " .mpx-accordion-btn").text("add");
                        $(container.class + " .mpx-accordion-btn").append("<img src='https://prod.ctassets.virginmedia.com/uploads/plus_741c555f11.svg'/>");
                    }
                });
            });
            //add the title of a selected card, into .mpx-product-info
            setInterval(function () {
                containers.forEach(function (container) {
                    let productTitle = $(container.class + ' .active').text();
                    if (productTitle) {
                        let productTitleWithoutPricing = productTitle.replace(/£\d+\/m/g, '');
                        productTitleWithoutPricing = productTitleWithoutPricing.replace(/Details.*/g, '');
                        $(container.class + ' .mpx-product-info').text(productTitleWithoutPricing);
                        $(container.class + ' .mpx-product-info').css({
                            'display': '',
                            'padding': '',
                            'border-radius': '',
                            'text-align': '',
                            'color': '',
                            'background-color': ''
                        });
                    } else {
                        $(container.class + ' .mpx-product-info').text("Not added");
                        $(container.class + ' .mpx-product-info').css({
                            'display': 'inline-block',
                            'padding': '0.1em 1em',
                            'border-radius': '1em',
                            'text-align': 'center',
                            'color': 'white',
                            'background-color': 'grey',
                            'display': 'inline-flex'
                        });
                    }
                });
            }, 1000);
            //calcuates the running total of selected options
            //adds total to continue button at bottom of page, and updates on a set interval 
            let elementExists = false;
            setInterval(calculateAndUpdateTotal, 1000);
            function calculateAndUpdateTotal() {
                let total = 0;
                let numbers = [];
                numbers = []; // reset the numbers array
                $('.active').each(function () {
                    const text = $(this).text();
                    if (text.includes('£')) {
                        const number = parseFloat(text.split('£')[1].match(/\d+(\.\d+)?/));//removes £ from text to return number after it
                        numbers.push(number);
                    }
                });
                total = numbers.reduce((a, b) => a + b, 0);
                total = Math.round(total * 100) / 100;
                if (!elementExists) {
                    $('<p class="mpx-total">Total: £' + total + '</p>').appendTo('.mpx-nav-banner');
                    elementExists = true;
                }
                $('.mpx-nav-banner .mpx-total').text("Est. monthly total: £" + total);
            }
        }
        //loads dynamic content into accordions 
        //presses each virgin button to load content, provided button has text 'next step'
        if ($('.virgin-button').find('h5:contains("Next step:")')) {
            $('div > h5:contains("Next step:")').closest('div').siblings().click()
            $(this).hide()
            $('.cta-hr').hide()
        }
    }
}

////// from here 
// the changes I did 

//for the button div
$('.virgin-button').last().removeClass('align-items-end')
$('.virgin-button').last().removeClass('flex-column')

    .mpx - nav - banner {
    display: flex!important;
    flex - direction: row - reverse;
    width: 100 %;
    justify - content: space - between;
    align - items: center;
}


//for the icons and text

.mpx - accordion - info {
    display: flex;
    justify - content: space - between;
    width: 300px;
    align - items: flex - end;
}


https://www.virginmedia.com/assets/icons/broadband-flare-design.svg

///for the broadband icon
document.querySelectorAll("img")[2].style.cssText = 'filter: invert(0%) sepia(100%) saturate(100%) hue-rotate(40deg) brightness() contrast(105%)'


display: inline - block;
margin - right: 10px;

.mpx - product - inf {
    width: 33 %;
}

.mpx - product - title {
    width: 33 %;
}


/// for the pen icon

"<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'rel='stylesheet'/><i class='fas fa-fw fa-pen'></i>"

    - webkit - text - fill - color: white!important;
-webkit - text - stroke - width: 1px!important;
-webkit - text - stroke - color: purple!important;
font - size: 15px;
padding: 5px 7px;

////
<div class="container flex-direction">\
    <div class="div1">\
        <p class="mpx-product-title">Broadband</p>\
    </div>\
    <div class="div2">\
        <p class="mpx-product-info">125Mbps</p>\
    </div>\
</div>\


<div class="mpx-accordion-info">            
<img src="https://www.virginmedia.com/assets/icons/broadband-flare-design.svg" style="filter: invert(0%) sepia(100%) saturate(100%) hue-rotate(40deg) brightness() contrast(105%);">            
<p class="mpx-product-title">Broadband</p>            
<p class="mpx-product-info">125Mbps</p>        
</div>




}

// css 


brightness(0) saturate(100%) 

filter: brightness(0) saturate(100%) invert(24%) sepia(89%) saturate(1940%) hue-rotate(249deg) brightness(86%) contrast(84%);


brightness(0) saturate(115%) invert(36%) sepia(60%) saturate(1917%) hue-rotate(249deg) brightness(57%) contrast(80%)


filter: brightness(0) saturate(115%) invert(36%) sepia(60%) saturate(1917%) hue-rotate(249deg) brightness(57%) contrast(80%);


p.mpx-accordion-btn img {
    filter: brightness(0) saturate(115%) invert(36%) sepia(60%) saturate(1917%) hue-rotate(249deg) brightness(57%) contrast(80%);
}


.mpx-accordion-info-labels {
        display: flex;
        justify-content: space-between;
    }

@media screen and (min-width: 320px) and (max-width: 768px) {
    .mpx-accordion-info {
        width: 150px;
    }

    .mpx-accordion-info-labels {
        display: grid;
        justify-items: stretch;
        justify-content: space-around;
    }

    .mpx-product-info {
        width: 114%;
        margin-left: 13px;
    }

    .mpx-product-title {
        width: 68%;
        margin-left: 23px;
    }

    .mpx-accordion-container>a {
        top: 22px;
    }
}


.mpx-accordion-info {
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: stretch;
}

.mpx-accordion-info-labels {
    display: flex;
    justify-content: space-between;
    width: 250px;
    align-items: center;
}

.mpx-product-info {
    width: 100%;
    margin-left: 20px;
}

.mpx-product-title {
    width: 58%;
    margin-left: 13px;
}


x.innerText.substring(20, 23).style

.mpx-total {
   font-weight: 700;
  }


/* change color pen svg */

.fas.fa-fw.fa-pen {
    -webkit-text-fill-color: white !important;
    -webkit-text-stroke-width: 1px !important;
    -webkit-text-stroke-color: purple !important;
    font-size: 15px;
    padding: 5px 7px;
}

/* invert color plus sg */

p.mpx-accordion-btn img {
    filter: brightness(0) saturate(115%) invert(36%) sepia(60%) saturate(1917%) hue-rotate(249deg) brightness(57%) contrast(80%);
    padding-left: 4px;
    width: 20px;
}

/* accordion container */

.mpx-accordion-info {
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: stretch;
}

.mpx-accordion-info-labels {
    display: flex;
    justify-content: space-between;
    width: 250px;
    align-items: center;
}

.mpx-product-info {
    width: 100%;
    margin-left: 20px;
}

.mpx-product-title {
    width: 58%;
    margin-left: 13px;
}

/* media queries */
@media screen and (min-width: 300px) and (max-width: 768px) {
    .mpx-accordion-info {
        width: 230px;
    }

    .mpx-accordion-info-labels {
        display: grid;
        margin-left: 20px;
        justify-items: stretch;
    }


    .mpx-accordion-container>a {
        top: 22px;
    }

    .mpx-product-info {
        width: 100%;
        margin-left: 0px;
    }

    .mpx-product-title {
        width: 100%;
        margin-left: 2px;
    }
}