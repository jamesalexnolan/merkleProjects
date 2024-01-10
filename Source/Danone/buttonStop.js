//polling function 
console.log('pxFunc started')
var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 100);

// Define the main function that handles the pop-up and click events
function handlePopUpAndClickEvents(popUp) {
  // Check that the pop-up element exists
  if (popUp) {
    console.log('pxFunc fired')
    // Hide pop-up on load
    popUp.style.display = 'none';

    // Amazon buy now click
    const buyNowButton = document.querySelector('[data-dm="stickybanner.button"]');
    if (buyNowButton) {
      buyNowButton.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        event.preventDefault();
        popUp.style.display = '';
        const closeButton = document.querySelector('._hj-x7hBM__styles__closeModalBtn');
        if (closeButton) {
          closeButton.addEventListener('click', function () {
            window.location.href = href;
          });
        }
      });
    }

    // Apta button click
    document.addEventListener('click', function (event) {
      if (
        (event.target.classList.contains('button') && event.target.innerHTML.trim() === 'Buy from Amazon')
      ) {
        const href = event.target.getAttribute('href');
        event.preventDefault();
        popUp.style.display = '';
        const closeButton = document.querySelector('._hj-x7hBM__styles__closeModalBtn');
        if (closeButton) {
          closeButton.addEventListener('click', function () {
            window.location.href = href;
          });
        }
      }
    });
    

    //Second type of Apta button
    const aptaBuyNowButton = document.querySelector('[title="Buy from Amazon"]')
    if (aptaBuyNowButton) {
      aptaBuyNowButton.addEventListener('click', function (event) {
        const href = event.target.getAttribute('href');
        event.preventDefault();
        popUp.style.display = '';
        const closeButton = document.querySelector('._hj-x7hBM__styles__closeModalBtn');
        if (closeButton) {
          closeButton.addEventListener('click', function () {
            window.location.href = href;
          });
        }
      });
    }
  }
}

//polling function
function pxPollFunc() {
  pxFuncFired += 1;

  //if run for over 1 secs then don't
  if (pxFuncFired >= 20) {
    clearInterval(pxInterval);
  }

  // Get the _hj-widget-container element
  const popUp = document.querySelector('._hj-widget-container');

  // Call the function that handles the pop-up and click events
  handlePopUpAndClickEvents(popUp);
}



