// Overlay
const overlay = document.createElement('div')
const overlay2 = document.createElement('div')
const overlay3 = document.createElement('div')


// Hamburger Menu Variables
// Hamburger Icons & Div Variables
const hamburgerDiv = document.getElementById('hamburgerDiv');
const Hamburger = document.getElementById('hamburger')
const xmark = document.getElementById('xmark')
const mainNav = document.getElementById('main-nav')
// Nav Menu
const mobileMenu = document.getElementById('mobile-menu')

// Function for the Hamburger Menu
function hamburgerMenu() {
  Hamburger.classList.toggle('close')
  mobileMenu.classList.toggle('open')
  xmark.classList.toggle('open')

  // Applys the overlay effect
  if (mobileMenu.classList.contains('open')) {
    overlay.classList.add('overlay')
    document.body.append(overlay)
  } else {
    overlay.remove()
  }
}
hamburgerDiv.addEventListener('click', hamburgerMenu)


// Modal Menu Variables
const modalMenuDiv = document.getElementById('modal-menu')
const xmarkModal = document.getElementById('close-modal')

// Open Modal - Select Rewards Buttons
const rewardBtns = document.querySelectorAll('button[value="modal"]')

// For Each button, add a event listener to open the modal then add
// a exit to exit out the modal, make sure to add the overlay
rewardBtns.forEach(button => {
  button.addEventListener('click', function () {
    modalMenuDiv.classList.toggle('open')
    if (modalMenuDiv.classList.contains('open')) {
      // Add the second overlay here
      overlay2.classList.add('overlay-two')
      document.body.append(overlay2)
    }

    // Close Modal
    xmarkModal.addEventListener('click', function () {
      modalMenuDiv.classList.remove('open')
      overlay2.remove()
    })
  })
})

// Input Radio Variables
const inputRadios = document.querySelectorAll('input[type="radio"]')

// Containers for Modal Content
const firstCon = document.getElementById('first-con')
const secondCon = document.getElementById('second-con')
const thirdCon = document.getElementById('third-con')

// Pledge Amount Variables
const noPledge = document.getElementById('no-pledge')
const bambooPledge = document.getElementById('bamboo-pledge')
const blackEdition = document.getElementById('black-edition')

// Current Backers Variable
let currentBackersDiv = document.getElementById('current-backers')
let currentBackers = localStorage.getItem('currentBackers') || 0
currentBackersDiv.innerText = currentBackers

// Current Price Variable
let currentPriceDiv = document.getElementById('current-price')
let currentPrice = Number(localStorage.getItem('currentPrice')) || 0;
currentPriceDiv.innerText = currentPrice

// Checks if the input radio is checked and checks the value if it contains
// the correspoding value if true add the classlist 'active' and remove
// all other active classes, also show pledge amount div for each container
inputRadios.forEach(input => {
  input.addEventListener('click', function(){
    if(input.checked && input.value === 'no-reward'){
      firstCon.classList.add('active')
      secondCon.classList.remove('active')
      thirdCon.classList.remove('active')
      noPledge.classList.toggle('open')
    } else if(input.checked && input.value === 'bamboo-stand'){
      secondCon.classList.add('active')
      firstCon.classList.remove('active')
      thirdCon.classList.remove('active')
      bambooPledge.classList.toggle('open')
    } else if(input.checked && input.value === 'black-edition'){
      thirdCon.classList.add('active')
      secondCon.classList.remove('active')
      firstCon.classList.remove('active')
      blackEdition.classList.toggle('open')
    } else{
      secondCon.classList.remove('active')
      thirdCon.classList.remove('active')
      firstCon.classList.remove('active')
    }
  })
})

// const inputText = document.querySelectorAll('input[type="text"]')
const inputOne = document.querySelector('input[type="text"]:first-child')
const pledgeSubmitBtns = document.querySelectorAll('button[type="submit"]')


const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


pledgeSubmitBtns.forEach(btn => {
  btn.addEventListener('click', function(){


    if(btn.value === 'none'){
      console.log('Current:', btn);
      const pass = checkEmail(inputOne.value, 'Please Enter valid email!')
      if(pass === true){
        thankYouPage.classList.add('open')
        // Add Overlay for the Thank You Page
        overlay3.classList.add('overlay-three')
        document.body.append(overlay3)
        modalMenuDiv.classList.toggle('close')

        currentBackers++;
        currentBackersDiv.innerText = currentBackers;
        // Store the updated value in LocalStorage
        localStorage.setItem('currentBackers', currentBackers)
      }
    }
  })
})

// Pledge Amount for Bamboo Stand
  // Variables
  const bambooPledgeAmount = document.querySelector('#bamboo-pledge-amount')
  const bambooBtn = document.getElementById('bambooBtn')
  const secondErr = document.getElementById('blankerr')


// Pledge Amount for Black Editon and Update the DOM functionality
  // Variables
  const blackPledgeAmount = document.querySelector('#pldege-black-amount')
  const blackBtn = document.getElementById('blackBtn')
  const thirdErr = document.getElementById('blankerr')

  function checkAmount (userInput, div, amount) {
    if(userInput === '' || userInput < amount) {
      console.log('empty, input');
      div.classList.add('red')
    } else {
      console.log('passed');
      console.log('show thank you page and update the DOM');
      div.classList.remove('red')

      thankYouPage.classList.add('open')
      // Add Overlay for the Thank You Page
      overlay3.classList.add('overlay-three')
      document.body.append(overlay3)
      modalMenuDiv.classList.toggle('close')

      // Update the DOM 
      currentBackers++;
      currentBackersDiv.innerText = currentBackers;
       // Store the updated value in LocalStorage
      localStorage.setItem('currentBackers', currentBackers)

      // DOM - Current Price
      currentPrice = parseInt(localStorage.getItem('currentPrice')) || 0;
      currentPrice += parseInt(userInput)
      currentPriceDiv.innerText = currentPrice;
      // Store the updated Price
      localStorage.setItem('currentPrice', currentPrice)
    }
    console.log(`userInput: ${userInput}, currentPrice: ${currentPrice}`);

  }
  
// EventListeners for the pledge amounts
  blackBtn.addEventListener('click', function() {
    checkAmount(blackPledgeAmount.value, blackPledgeAmount, 75)
  })

  bambooBtn.addEventListener('click', function() {
    checkAmount(bambooPledgeAmount.value, bambooPledgeAmount, 25)
  })

// Function checking Email
function checkEmail(Email, error) {
  const errMessage = document.getElementById('errMessage')

  let pass = true;

  if(regex.test(Email)){
    console.log('passed!');
    pass = true
    inputOne.classList.remove('red')
    errMessage.innerText = ''
  } else {
    console.log('failed');
    inputOne.classList.add('red')
    errMessage.innerText = error
    pass = false;
  }
  return pass
}


// Thank You Page 
const thankYouPage = document.getElementById('thankYou')

// Close Thank You Btn Variable
const gotItBtn = document.getElementById('gotItBtn')

// function to remove all styling and take them back to the front page
function closeThankYou () {
  console.log('close thank you and the overlay');
  thankYouPage.classList.toggle('open')
  overlay3.remove()
  overlay2.remove()
  location.reload()

}
gotItBtn.addEventListener('click', closeThankYou)


// BookMark

const bookMarkIcon = document.getElementById('bookmarkIcon')
const bookMarkText = document.getElementById('bookmarkText')


bookMarkIcon.addEventListener('click', function () {
  if (bookMarkIcon.classList.contains('clicked')) {
    // If the button has already been clicked, remove the "ed" from the text content
    bookMarkText.textContent = bookMarkText.textContent.replace('ed', '');
    bookMarkIcon.classList.remove('clicked');
  } else {
    // If the button has not been clicked, add "ed" to the end of the text content
    bookMarkText.textContent += 'ed';
    bookMarkIcon.classList.add('clicked');
  }
})