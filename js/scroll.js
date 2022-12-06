const $scrolToTopBtn = document.querySelector('.scroll-to-top-btn')

function showScrollToTopBtn(e)
{
  if(window.scrollY > 200)
  {
    $scrolToTopBtn.classList.add('showing')
  }
  else
  {
    $scrolToTopBtn.classList.remove('showing')
  }
}

function scrollToTop(e)
{
  window.scrollTo(0, 0)
}

$scrolToTopBtn.addEventListener('click', scrollToTop)
document.addEventListener('scroll', showScrollToTopBtn)
