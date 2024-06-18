/*author - Pawan Kumar */

document.getElementById('userInput').addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
       handleInput();
   }
});

const handleInput = () => {  
   const userInput = document.getElementById('userInput');
   let inputValue = userInput.value;
   userInput.value = '';
   
   inputValue = parseInt(inputValue);

   if (isNaN(inputValue)) {
      alert("Please Enter a Valid Number.");
      return;
   }

   let message;
   if (inputValue === 0) {
      message = "Entered Number is Zero"
   }
   else if (inputValue % 2 === 0) {
      message = "Entered Number is Even"
   }
   else {
      message = "Entered Number is Odd"
   }

   const outputElement = document.getElementById('output');
   outputElement.innerHTML = message;

}