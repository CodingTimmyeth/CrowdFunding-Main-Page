const hamburgerDiv = document.getElementById('hamburger')
const ham = document.getElementById('menu')
const xmark = document.getElementById('xmark')
const mobileMenu = document.getElementById('mobile-menu')

// Buttons

const btns = document.querySelectorAll('button')

// Main Container
const mainCon = document.getElementById('main-container')
// Second Container
const modalMenu = document.getElementById('project-donation-menu')
const closeModal = document.getElementById('close-modal')



btns.forEach((button, index) =>  {
    button.addEventListener('click', function () {
        if(index === btns.length -1) {
            alert('Sorry, this is out of stock')
        } else {
            console.log('this is not the last button');
            mainCon.classList.toggle('open')
            modalMenu.classList.remove('close')
            closeModal.addEventListener('click', function() {
                modalMenu.classList.add('close')
                console.log('closed');
            })
        }
    })
})

hamburgerDiv.addEventListener('click', showMenu);

function showMenu () {
    ham.classList.toggle('close')
    xmark.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileMenu.classList.toggle('menu-bg')
}

// Function to check if input radio is Active 
// function inputActive () {
//     const inputRadio = document.querySelectorAll('input[type="radio"]')
//     const firstCon = document.getElementById('first-con')
//     const secondCon = document.getElementById('second-con')
//     const thirdCon = document.getElementById('third-con')
//     const pledgeAmount = document.getElementById('pledge-amount')

//     inputRadio.forEach((input) => {
//         input.addEventListener('click', function() {
//             if(input.value === 'no-reward'){
//                 firstCon.classList.add('active')
//                 secondCon.classList.remove('active')
//                 thirdCon.classList.remove('active')
//             } else if(input.value === 'bamboo-stand'){
//                 secondCon.classList.add('active')
//                 firstCon.classList.remove('active')
//                 thirdCon.classList.remove('active')
//             } else if(input.value === 'black-edition'){
//                 thirdCon.classList.add('active')
//                 secondCon.classList.remove('active')
//                 firstCon.classList.remove('active')

//             }
//         })
//     })
// }

// inputActive()

function inputActive () {
    const inputRadio = document.querySelectorAll('input[type="radio"]')
    const firstCon = document.getElementById('first-con')
    const secondCon = document.getElementById('second-con')
    const thirdCon = document.getElementById('third-con')

    // Pledge Amount
    const bambooPledge = document.getElementById('bamboo-pledge')
    const blackEdition = document.getElementById('black-edition')
    const noPledge = document.getElementById('no-pledge')
  
    let activeCon = null;
  
    // Add click event listeners to each container element
    firstCon.addEventListener('click', function() {
      setActiveCon(firstCon);
      noPledge.classList.add('open')
    });
    secondCon.addEventListener('click', function() {
      setActiveCon(secondCon);
      bambooPledge.classList.add('open')
    });
    thirdCon.addEventListener('click', function() {
      setActiveCon(thirdCon);
      blackEdition.classList.add('open')
    });
  
    // Function to set the active container
    function setActiveCon(con) {
      // Remove the "active" class from the previous container
      if (activeCon) {
        activeCon.classList.remove('active');
        bambooPledge.classList.remove('open')
        noPledge.classList.remove('open')
        blackEdition.classList.remove('open')
      }
  
      // Add the "active" class to the new container
      con.classList.add('active');
      activeCon = con;
    }
  
    inputRadio.forEach((input) => {
      input.addEventListener('click', function() {
        if (input.value === 'no-reward') {
          setActiveCon(firstCon);
        } else if (input.value === 'bamboo-stand') {
          setActiveCon(secondCon);
        } else if (input.value === 'black-edition') {
          setActiveCon(thirdCon);
        }
      })
    })
  }
  
  inputActive()

function pledgeAmount () {
    const submitBtns = document.querySelectorAll('button[type="submit"]');
    const inputText = document.querySelectorAll('input[type="text"]');

    submitBtns.forEach(button => {
        button.addEventListener('click', function (event){
            event.preventDefault()

            let emptyFields = false;

            // loop through the input fields
            inputText.forEach(input => {
                if(input.value.trim() === '') { // check if input field is empty 
                    emptyFields = true;
                } 
            });

            if(emptyFields) {
                console.log("Can't leave blank!");
            } else {
                console.log("Thank you Message!");
            }
        })
    })
}
pledgeAmount()



  