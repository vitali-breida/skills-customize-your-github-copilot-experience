# 📘 Assignment: Interactive Web Forms

## 🎯 Objective

Learn to create functional, interactive web forms using HTML, CSS, and JavaScript. You'll build a contact form with real-time validation, styling, and user feedback.

## 📝 Tasks

### 🛠️ Task 1: Build a Basic HTML Form

#### Description
Create the HTML structure for a contact form with all necessary input fields and buttons.

#### Requirements
Completed form should:

- Include fields for: Name, Email, Phone, and Message
- Have a "Submit" button and a "Clear" button
- Use semantic HTML elements (`<form>`, `<label>`, `<input>`, `<textarea>`)
- Include a `<div id="feedback"></div>` for displaying validation messages
- All input fields should have unique `id` attributes for easy JavaScript access

---

### 🛠️ Task 2: Style the Form with CSS

#### Description
Add CSS styling to make the form visually appealing and user-friendly.

#### Requirements
Completed styling should:

- Apply a consistent color scheme and font family to the entire form
- Style form inputs with borders, padding, and focus states (use `:focus` pseudo-class)
- Style the submit and clear buttons with hover effects
- Make the form responsive on mobile devices using flexbox or CSS Grid
- Add spacing between form elements for readability
- Include a distinctive style for error messages (e.g., red text or background color)

---

### 🛠️ Task 3: Add JavaScript Validation

#### Description
Write JavaScript to validate form inputs and provide real-time feedback to users.

#### Requirements
Completed validation should:

- Check that Name field is not empty and is at least 2 characters long
- Check that Email field contains a valid email format (e.g., `user@example.com`)
- Check that Phone field contains exactly 10 digits
- Check that Message field is not empty and is at least 10 characters long
- Display appropriate error messages for each field
- Clear error messages when the user fixes the input
- Prevent form submission if any field fails validation

---

### 🛠️ Task 4: Enhance User Experience (Stretch Goal)

#### Description
Add advanced features to improve the form's interactivity and user experience.

#### Requirements
Enhancements could include:

- Add a character counter for the Message field showing remaining characters (max 500)
- Display a success message when the form is submitted successfully
- Reset the form and clear validation messages when the "Clear" button is clicked
- Add a loading animation while the form is being "submitted" (simulate with `setTimeout`)
- Use `localStorage` to save form data as the user types and restore it on page reload
