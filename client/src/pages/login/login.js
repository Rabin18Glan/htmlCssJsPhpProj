const responseDiv = document.getElementById('response');


document.getElementById('loginform').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent the default form submission
 
     // Create a FormData object from the form
     const formData = new FormData(event.target);
 
     // Send the form data to the server using Fetch API
     fetch('./login.php', {
         method: 'POST',
         body: formData
     })
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.json(); // Parse the JSON from the response
     })
     .then(data => {
         if (data.status === 'success') {
             console.log(data.message);
             // Redirect to a protected page or fetch user session data
             window.location.href = '../chat/chat.html'; // Example redirect
         } else {
             console.error(data.message);
             // Display error message to the user
             responseDiv.innerHTML = 'Error: ' + data.message;
         }
     })
     .catch(error => {
         console.error('Error:', error);
         // Handle any errors that occurred during the fetch
         responseDiv.innerHTML = 'Error: ' + error.message;
     });
 });
 