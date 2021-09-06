document.addEventListener('DOMContentLoaded', init)

function init() {
  const burger = document.querySelector('.navbar-burger')
  const menuItems = document.querySelector('.navbar-menu')
  const menuButtons = document.querySelectorAll('.navbar-item')

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    menuItems.classList.toggle('is-active')
    menuButtons.forEach((x) => {
      x.classList.toggle('is-fullwidth')
    })
  })

  const showMore = document.getElementById('show-more-button')
  const hiddenContent = document.getElementById('mobile-hidden')

  if (window.innerWidth > 800) {
    hiddenContent.classList.remove('hidden')
  }

  showMore.addEventListener('click', () => {
    if (hiddenContent.classList.contains('hidden')) {
      hiddenContent.classList.toggle('hidden')
      showMore.innerText = 'Read Less'
    } else {
      hiddenContent.classList.toggle('hidden')
      showMore.innerText = 'Read More'
    }
  })

}