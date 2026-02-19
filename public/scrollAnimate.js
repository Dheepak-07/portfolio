// Parallax scroll effect - converted from jQuery reference
(function() {
  function scrollFooter(scrollY, heightFooter) {
    const footerEl = document.querySelector('footer');
    
    if (!footerEl) return;
    
    if (scrollY >= heightFooter) {
      footerEl.style.bottom = '0px';
    } else {
      footerEl.style.bottom = '-' + heightFooter + 'px';
    }
  }

  function initScrollAnimation() {
    const headerEl = document.querySelector('header');
    const contentEl = document.querySelector('.content');
    const footerEl = document.querySelector('footer');
    const scrollAnimateMain = document.getElementById('scroll-animate-main');
    const scrollAnimate = document.getElementById('scroll-animate');

    if (!headerEl || !contentEl || !footerEl || !scrollAnimateMain || !scrollAnimate) {
      console.warn('Required elements not found');
      return;
    }

    const windowHeight = window.innerHeight;
    const footerHeight = footerEl.offsetHeight;
    const contentHeight = contentEl.offsetHeight;
    const heightDocument = windowHeight + contentHeight + footerHeight - 20;

    // Set the height of elements to animate
    scrollAnimate.style.height = heightDocument + 'px';
    scrollAnimateMain.style.height = heightDocument + 'px';

    // Set the height of header and content elements
    headerEl.style.height = windowHeight + 'px';
    headerEl.style.lineHeight = windowHeight + 'px';

    // Set wrapper parallax margin
    const wrapperParallax = document.querySelector('.wrapper-parallax');
    if (wrapperParallax) {
      wrapperParallax.style.marginTop = windowHeight + 'px';
    }

    // Initial scroll
    scrollFooter(window.scrollY, footerHeight);

    // On scroll event
    window.addEventListener('scroll', function() {
      const scroll = window.scrollY;

      // Move the scroll-animate-main container
      scrollAnimateMain.style.top = '-' + scroll + 'px';

      // Parallax background effect for header
      const bgPositionY = 50 - (scroll * 100 / heightDocument);
      headerEl.style.backgroundPosition = '50% ' + bgPositionY + '%';

      // Move footer in as you scroll
      scrollFooter(scroll, footerHeight);
    }, { passive: true });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimation);
  } else {
    initScrollAnimation();
  }
})();
