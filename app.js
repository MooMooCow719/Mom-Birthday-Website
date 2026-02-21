const titleScreen = document.getElementById('title');
const introScreen = document.getElementById('intro');
const mailTruckScene = document.getElementById('mail-truck-scene');
const envelopeFront = document.getElementById('screen-envelope-front');
const envelopeBack = document.getElementById('screen-envelope-back');
const letter = document.getElementById('screen-letter');
const photoScreen = document.getElementById('screen-photos');

function transition1() {
    titleScreen.classList.remove('active');
    introScreen.classList.add('active');
}

function transition2() {
    introScreen.classList.remove('active');
    mailTruckScene.classList.add('active');
}

let step = 0;
const audio1 = new Audio('1.mp3');
const audio2 = new Audio('2.mp3');
const audio3 = new Audio('3.mp3');
const audio4 = new Audio('4.mp3');
const papersfx = new Audio('papersfx.mp3');
const envelopesfx = new Audio('envelopesfx.mp3');
const doorbell = new Audio('doorbell.mp3');

const bgaudio1 = new Audio('bgaudio1.mp3');

function togglebg() {
    if (bgaudio1.paused) {
        bgaudio1.play();
    } else {
        bgaudio1.pause();
    }
};

const truck = document.getElementById("mail-truck");
truck.addEventListener("click", () => {
  if (step < 4) {
    step++;
    truck.classList.add(`step-${step}`);
    console.log(`Transitioned to step ${step}`);
    // put sfx function here later to play a sound every click
    if (step === 1) {
        audio1.play();
    } else if (step === 2) {
        audio2.play();
    } else if (step === 3) {
        audio3.play();  
    } else if (step === 4) {
        audio4.play();
    }
  }

  if (step === 4) {
    setTimeout(() => transition3(), 2000);
    
  }
});

function transition3() {
    doorbell.play();
    mailTruckScene.classList.remove('active');
    envelopeFront.classList.add('active');
}

const correctNameNoSpaces = "tamarnold";
const correctDates = ["02/22/1981", "2/22/1981", "02/22/81", "2/22/81", "02221981", "2221981", "022281", "2-22-81", "2-22-1981", "02-22-1981", "02-22-81"];
const correctCityStateNoSpaces = ["tucsonaz", "tucson,az", "tucson, az", "tucson az"];
const overlay = document.getElementById("fade-overlay");
function validateForm(index) {
    const nameInput = document.getElementById('pass1').value.toLowerCase().replace(/\s/g, '');
    const dobInput = document.getElementById('pass2').value.toLowerCase().replace(/\s/g, '');
    const cityStateInput = document.getElementById('pass3').value.toLowerCase().replace(/\s/g, '');

    if (nameInput === correctNameNoSpaces && correctDates.includes(dobInput) && correctCityStateNoSpaces.includes(cityStateInput) || index === 0) {
        // Form is valid
        papersfx.play();
        const cardFront = document.getElementById('screen-envelope-front');
        cardFront.classList.remove('active');
        // cardFront.style.display = 'none';
        const cardBack = document.getElementById('screen-envelope-back');
        // cardBack.classList.add('active');
        

        overlay.classList.add("active"); // fade to white

        setTimeout(() => {
        overlay.classList.remove("active");
        cardBack.classList.add('active'); // fade back out
        }, 1000); // matches your 1s CSS transition

        // cardBack.style.display = 'flex';
    } else {
        // Form is invalid
        alert('that doesn\'t seem right!');
    }
}

// force text fields empty if page reloaded

window.addEventListener("load", () => {
  document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
});

function transition4() {
    
    envelopeFront.classList.remove('active');
    envelopeBack.classList.add('active');
}

function transition5() {
    envelopesfx.play();
    overlay.classList.add("active");
    setTimeout(() => {
        overlay.classList.remove("active");
        envelopeBack.classList.remove('active');
        letter.classList.add('active');
    }, 1500); 
    
}
const end = document.getElementById("end");
function transition6() {
    
    overlay.classList.add("active");
    setTimeout(() => {
        overlay.classList.remove("active");
        letter.classList.remove('active');
        end.classList.add('active');
    }, 1000); 
    displayEnding();
}

function displayEnding() {
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    setTimeout(() => two.style.color = "#E75495", 2500);
    setTimeout(() => three.style.color = "#E75495", 4500);
    setTimeout(() => four.style.color = "#E75495", 8000);
}

