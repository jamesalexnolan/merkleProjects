if (/Mobi/.test(navigator.userAgent)) {
const applyObserver = () => {
    const targetNode = document.querySelector('.product-sticky-navigation__price-add-to-cart-wrapper');
    
    if (!targetNode) {
      return;
    }
    
    const config = { childList: true };
    
    const callback = (mutationsList, observer) => {
      for(let mutation of mutationsList) {
        if (mutation.type === 'childList' && targetNode.childElementCount >= 1) {
          document.querySelector('#icChatButton').style.display = 'none';
        } else {
          document.querySelector('#icChatButton').style.display = '';
        }
      }
    };
    
    const observer = new MutationObserver(callback);
    
    observer.observe(targetNode, config);
  };
  
  // Apply the observer on page load and on window resize
  window.addEventListener('load', applyObserver);
  window.addEventListener('resize', applyObserver);
  
  // Apply the observer again when the user scrolls
  window.addEventListener('scroll', () => {
    applyObserver();
  }, { passive: true });
}