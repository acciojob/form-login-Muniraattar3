function getFormvalue() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the form element
    const form = document.getElementById('form1');

    // Get the values of the input fields using the `name` attribute
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the values in an alert
    alert(`${firstName} ${lastName}`);
}
