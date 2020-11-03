// slider elements
const sliderImage = document.querySelector('.slider__image img')
const sliderTitle = document.querySelector('.slider__title')
const sliderText = document.querySelector('.slider__text')
const sliderLeft = document.querySelector('.slider__navigation-left')
const sliderRight = document.querySelector('.slider__navigation-right')

// slider content
const slides = [
  {
    image: './img/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    text:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    image: './img/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: './img/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    text:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades ofexperience in this industry, we understand what customers want for their home and office.',
  },
]

// slider state
let index = 0

// functions
const setSlide = index => {
  sliderImage.src = slides[index].image
  sliderTitle.textContent = slides[index].title
  sliderText.textContent = slides[index].text
}

const nextSlide = () => {
  index = index >= slides.length - 1 ? 0 : index + 1
  setSlide(index)
}

const previousSlide = () => {
  index = index <= 0 ? slides.length - 1 : index - 1
  setSlide(index)
}

// events
window.addEventListener('load', () => {
  setSlide(index)
})

document.addEventListener('keydown', event => {
  const keyName = event.key

  switch (keyName) {
    case 'ArrowRight':
      nextSlide()
      break

    case 'ArrowLeft':
      previousSlide()
      break
  }
})

sliderLeft.addEventListener('click', previousSlide)
sliderRight.addEventListener('click', nextSlide)
