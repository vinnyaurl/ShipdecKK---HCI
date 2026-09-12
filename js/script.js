document.addEventListener('DOMContentLoaded', function() {
    let currentPage = window.location.pathname.split('/').pop();
    let navLinks = document.querySelectorAll('nav ul li a');
    let hamburger = document.querySelector('.hamburger');
    let navMenu = document.querySelector('nav ul');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});


function validateForm() {
    let valid = true;
  
    let name = document.getElementById('name').value.trim();
    if (name === "") {
      document.getElementById('nameError').innerText = "Name is required.";
      valid = false;
    } else {
      document.getElementById('nameError').innerText = "";
    }
  
    let email = document.getElementById('email').value.trim();
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').innerText = "Enter a valid email.";
      valid = false;
    } else {
      document.getElementById('emailError').innerText = "";
    }
  
    let password = document.getElementById('password').value;
    if (password.length < 6) {
      document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
      valid = false;
    } else {
      document.getElementById('passwordError').innerText = "";
    }
  
    let age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 13) {
      document.getElementById('ageError').innerText = "You must be at least 13 years old.";
      valid = false;
    } else {
      document.getElementById('ageError').innerText = "";
    }
    
    let genders = document.getElementsByName('gender');
    let genderSelected = false;

    for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
        genderSelected = true;
        break;
    }
    }

    if (!genderSelected) {
    document.getElementById('genderError').innerText = "Please select your gender.";
    valid = false;
    } else {
    document.getElementById('genderError').innerText = "";
    }

    let agree = document.getElementById('agree').checked;
    if (!agree) {
      document.getElementById('agreeError').innerText = "You must agree to our terms to continue.";
      valid = false;
    } else {
      document.getElementById('agreeError').innerText = "";
    }
  
    if (valid) {
        alert("Subscription successful! We will inform every updates, promotions, and news from ShipDecKK to you. Thank you for subscribing.");
        document.getElementById('subscribeForm').reset();
      }
    
      return false; 
  }