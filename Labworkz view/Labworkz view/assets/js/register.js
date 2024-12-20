// register.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
const userTypeSelect = document.getElementById('userType');
const studentFields = document.getElementById('studentFields');
const recruiterFields = document.getElementById('recruiterFields');

// Show or hide form sections based on the user type selected
userTypeSelect.addEventListener('change', () => {
    const userType = userTypeSelect.value;

    if (userType === 'student') {
    studentFields.classList.remove('hidden');
    recruiterFields.classList.add('hidden');
    } else if (userType === 'recruiter') {
    recruiterFields.classList.remove('hidden');
    studentFields.classList.add('hidden');
    } else {
    studentFields.classList.add('hidden');
    recruiterFields.classList.add('hidden');
    }
});

// Form submission handler
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const userType = userTypeSelect.value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate fields
    if (!userType || !email || !password) {
    alert('Please fill in all required fields.');
    return;
    }

    // Collect user-specific fields
    let userData = { userType, email, password };
    if (userType === 'student') {
    userData.school = document.getElementById('school').value;
    userData.fieldOfStudy = document.getElementById('fieldOfStudy').value;
    } else if (userType === 'recruiter') {
    userData.company = document.getElementById('company').value;
    userData.position = document.getElementById('position').value;
    }

    console.log('User Registered:', userData);
    alert('Registration successful!');

    // Redirect to a different page (example: courses.html)
    window.location.href = 'courses.html';
});
});
