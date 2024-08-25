document.addEventListener('DOMContentLoaded', () => {
    // Variables to store user selections
    let projectType = '';
    let budgetRange = '';
    let sourceOfReferral = '';

    // Step 1: Handle project type selection
    document.querySelectorAll('[data-step-target="3"]').forEach(button => {
        button.addEventListener('click', () => {
            projectType = button.getAttribute('name');
        });
    });

    // Step 2: Handle budget range selection
    document.querySelectorAll('[data-step-target="4"]').forEach(button => {
        button.addEventListener('click', () => {
            budgetRange = button.getAttribute('name');
        });
    });

    // Step 3: Handle source of referral selection
    document.querySelectorAll('[data-step-target="5"]').forEach(button => {
        button.addEventListener('click', () => {
            sourceOfReferral = button.getAttribute('name');
        });
    });

    // Form submission handler
    document.getElementById('submit').addEventListener('click', () => {
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const deadline = document.getElementById('deadline').value;
        const details = document.getElementById('form-details').value;

        if (firstName && lastName && email && company && deadline) {
            // Prepare the data to send
            const data = {
                projectType,
                budgetRange,
                sourceOfReferral,
                firstName,
                lastName,
                phone,
                email,
                company,
                deadline,
                details
            };

            // Make an HTTP POST request to send the data
            fetch('http://localhost:3000/send-email', { // Replace with your endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    // Handle the result of the request (e.g., show a success message)
                    alert('Your message has been sent successfully!');
                })
                .catch(error => {
                    // Handle any errors
                    console.error('Error:', error);
                    alert('There was an error sending your message. Please try again.');
                });
        } else {
            // Handle form validation
            alert('Please fill in all required fields.');
        }
    });
});
