document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup');
  const fullName = document.getElementById('FullName');
  const studentId = document.getElementById('studentId');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    let isValid = true;
    let errorMessage = '';

    // Validation for Product ID
    const productId = document.getElementById('productID').value;
    const productIdPattern = /^\d{8}$/;
    if (!productId.match(productIdPattern)) {
      errorMessage += 'Product ID must be 8 digits long and contain only numbers.\n';
      isValid = false;
    }

    // Validation for Product Description
    const productDescription = document.getElementById('productDescription').value;
    if (productDescription.length < 20) {
      errorMessage += 'Product Description must be at least 20 characters long.\n';
      isValid = false;
    }

    // Validation for Price
    const price = document.getElementById('price').value;
    if (!(/^\d+$/.test(price)) || parseInt(price) <= 0 || parseInt(price) >= 1000) {
      errorMessage += 'Price must be a positive integer less than 1000.\n';
      isValid = false;
    }

    // Validation for Supplier Username
    const supplierUsername = document.getElementById('supplierUsername').value;
    const supplierUsernamePattern = /^[a-zA-Z]\w{3,}$/;
    if (!supplierUsername.match(supplierUsernamePattern)) {
      errorMessage += 'Supplier Username must start with an alphabet and contain at least 4 characters.\n';
      isValid = false;
    }

    // Validation for Supplier Status
    const supplierStatus = document.querySelectorAll('input[name="supplierStatus"]:checked');
    if (supplierStatus.length === 0) {
      errorMessage += 'Please select at least one Supplier Status.\n';
      isValid = false;
    }

    // Validation for Supplier Email (using HTML5 built-in validation)
    const supplierEmail = document.getElementById('supplierEmail');
    if (!supplierEmail.checkValidity()) {
      errorMessage += 'Invalid Supplier Email.\n';
      isValid = false;
    }

    // Display error messages
    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // If the form is valid, submit it
    submitForm();
  }

  function submitForm() {
    // Submit the form to the specified URL
    form.submit();
  }
});
