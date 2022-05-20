const navbarLinks = document.getElementsByClassName('navbar')[0]
const toggleButton = document.getElementsByClassName('toggle-button')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})