const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

//  switch data visible to true
navToggle.addEventListener('click', () => {
//   this returns a string not a boolean
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
  // console.log(visibility)
})