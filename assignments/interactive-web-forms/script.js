// Get form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('feedback');
const charCount = document.getElementById('charCount');

// TODO: Add event listeners
// - form.addEventListener('submit', handleSubmit);
// - form.addEventListener('reset', handleReset);
// - nameInput.addEventListener('input', validateName);
// - emailInput.addEventListener('input', validateEmail);
// - phoneInput.addEventListener('input', validatePhone);
// - messageInput.addEventListener('input', validateMessage);

// ==================== VALIDATION FUNCTIONS ====================

/**
 * Validate the name field
 * Requirements:
 * - Not empty
 * - At least 2 characters long
 */
function validateName() {
    const value = nameInput.value.trim();
    const errorElement = document.getElementById('nameError');
    
    // TODO: Implement validation logic
    // Clear error messages when input is valid
    // Display appropriate error message when input is invalid
    // Add/remove 'input-error' class from the input element
    
    return true; // Change based on validation result
}

/**
 * Validate the email field
 * Requirements:
 * - Valid email format (e.g., user@example.com)
 */
function validateEmail() {
    const value = emailInput.value.trim();
    const errorElement = document.getElementById('emailError');
    
    // TODO: Implement validation logic
    // Use regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Add/remove 'input-error' class from the input element
    
    return true; // Change based on validation result
}

/**
 * Validate the phone field
 * Requirements:
 * - Exactly 10 digits
 */
function validatePhone() {
    const value = phoneInput.value.replace(/\D/g, ''); // Remove non-digits
    const errorElement = document.getElementById('phoneError');
    
    // TODO: Implement validation logic
    // Check if value length is exactly 10
    // Add/remove 'input-error' class from the input element
    
    return true; // Change based on validation result
}

/**
 * Validate the message field
 * Requirements:
 * - Not empty
 * - At least 10 characters long
 */
function validateMessage() {
    const value = messageInput.value.trim();
    const errorElement = document.getElementById('messageError');
    
    // TODO: Implement validation logic
    // Update character counter: charCount.textContent = `${value.length}/500`;
    // Add/remove 'input-error' class from the input element
    
    return true; // Change based on validation result
}

// ==================== FORM HANDLING FUNCTIONS ====================

/**
 * Handle form submission
 * Prevent default submission and show success/error feedback
 */
function handleSubmit(e) {
    e.preventDefault();
    
    // TODO: Implement form submission logic
    // 1. Validate all fields
    // 2. If all valid, show success message
    // 3. If any invalid, show error message and focus on first invalid field
}

/**
 * Handle form reset
 * Clear validation errors and feedback messages
 */
function handleReset() {
    // TODO: Implement reset logic
    // Clear all error messages
    // Remove 'input-error' classes from all inputs
    // Clear feedback message
    // Reset character counter
}

// ==================== STRETCH GOAL: LOCALSTORAGE ====================

/**
 * Save form data to localStorage
 * Called on input change
 */
function saveFormData() {
    // TODO: Save form data to localStorage
    // localStorage.setItem('formData', JSON.stringify({
    //     name: nameInput.value,
    //     email: emailInput.value,
    //     phone: phoneInput.value,
    //     message: messageInput.value
    // }));
}

/**
 * Load form data from localStorage
 * Called on page load
 */
function loadFormData() {
    // TODO: Load form data from localStorage
    // const saved = JSON.parse(localStorage.getItem('formData'));
    // if (saved) {
    //     nameInput.value = saved.name;
    //     emailInput.value = saved.email;
    //     phoneInput.value = saved.phone;
    //     messageInput.value = saved.message;
    // }
}
