 const signupFormHandler = async (event) => {
     event.preventDefault();
     
    
       const first_name = document.querySelector('#first_name-signup').value.trim();
       const last_name = document.querySelector('#last_name-signup').value.trim();
       const email = document.querySelector('#email-signup').value.trim();
       const password = document.querySelector('#password-signup').value.trim();
       const city = document.querySelector('#city-signup').value.trim();
       const preferred_pronoun = document.querySelector('#preferred_pronoun-signup').value.trim();
       const hobbies = document.querySelector('#hobbies-signup').value.trim();
       const dating_or_friendship = document.querySelector('#dating_friendship-signup').value.trim();
       const interested_in = document.querySelector('#interested_in-signup').value.trim();
       const beers_name = document.querySelector('#beers_name-signup').value.trim();
     const willing_to_grab_a_pint = document.querySelector('#grab_pint-signup').value.trim();
     const matched = document.querySelector('#matched-signup').value.trim();


     if (first_name && last_name && email && password && city && preferred_pronoun && hobbies && dating_or_friendship && interested_in && beers_name && willing_to_grab_a_pint && matched) {
         const response = await fetch('/api/user/signup', {
             method: 'POST',
             body: JSON.stringify({ first_name, last_name, email, password, city, preferred_pronoun, hobbies, dating_or_friendship, interested_in, beers_name, willing_to_grab_a_pint, matched }),
             headers: { 'Content-Type': 'application/json' },
         });

         if (response.ok) {
             document.location.replace('/');
         } else {
             alert(response.statusText);
         }
     }

    
};
 

  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  