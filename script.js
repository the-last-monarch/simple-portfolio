document.addEventListener("DOMContentLoaded", function () {

    const githubLogo = document.getElementById('githubLogo');
    const linkedinLogo = document.getElementById('linkedinLogo');
    const instagramLogo = document.getElementById('instagramLogo');
    const twitterLogo = document.getElementById('twitterLogo');

    if (githubLogo) {
      githubLogo.addEventListener('click', function () {
        window.open('https://github.com/the-last-monarch', '_blank');
      });
    }

    if (linkedinLogo) {
      linkedinLogo.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/narpender-grewal-96752b342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
      });
    }

    if (instagramLogo) {
      instagramLogo.addEventListener('click', function () {
        window.open('https://www.instagram.com/', '_blank');
      });
    }

    if (twitterLogo) {
      twitterLogo.addEventListener('click', function () {
        window.open('https://twitter.com/', '_blank');
      });
    }
  });

  let lastScrollTop = 0; 
  const navbar = document.querySelector('nav'); 
  
  document.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  

    if (currentScroll > lastScrollTop) {
r
      navbar.style.top = "-60px";
    } else {
 
      navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  