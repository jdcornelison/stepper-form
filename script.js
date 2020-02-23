const stepForm = document.querySelector('.step-form')
const stepsArray = document.querySelectorAll('.step-form .step')
const stepWidth = Number((window.getComputedStyle(document.querySelector('.step-form')).width).replace('px', ''))
let scrollPos = 0

function setNavText () {
  if (scrollPos >= (stepWidth * (stepsArray.length -1))) {
    // If we're on the last step, set next nav text to a green check mark
    document.querySelector('.step-nav.next span').style.color = 'green'
    document.querySelector('.step-nav.next span').textContent = '✔'
  } else if (scrollPos === 0) {
    // If we're on the first step, clear prev nav text and hover effect
    document.querySelector('.step-nav.prev span').textContent = ''
    document.querySelector('.step-nav.prev').classList.remove('nav-enabled')
  } else {
    // This seems redundant to do ever time we're not on the first or last
    // step of the form, but my brain hurts. I'm not as good at CSS & Flex
    // as I thought I was...

    // Double check that the hover effect and text is added to the prev nav
    document.querySelector('.step-nav.prev span').textContent = '«'
    document.querySelector('.step-nav.prev').classList.add('nav-enabled')
    // Double check that the next nav text is correct and set the proper color
    document.querySelector('.step-nav.next span').textContent = '»'
    document.querySelector('.step-nav.next span').style.color = 'rgba(255, 255, 255, 0.75)'
  }
}

// Next Button Logic
document.querySelector('.step-nav.next').addEventListener('click', function () {
  scrollPos += stepWidth
  stepForm.scrollLeft = scrollPos
  setNavText()
})

// Prev Button Logic
document.querySelector('.step-nav.prev').addEventListener('click', function () {
  scrollPos -= stepWidth
  stepForm.scrollLeft = scrollPos
  setNavText()
})

// CSS Checkbox Effect Logic
document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
  el.addEventListener('click', function () {
    if (el.checked) {
      el.parentElement.style.backgroundColor = 'rgba(75, 216, 71, 0.5)'
    } else {
      el.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
    }
  })
})
