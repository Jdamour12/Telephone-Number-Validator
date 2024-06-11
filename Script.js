const userInput = document.getElementById('user-input');
      const checkBtn = document.getElementById('check-btn');
      const clearBtn = document.getElementById('clear-btn');
      const resultsDiv = document.getElementById('results-div');

      checkBtn.addEventListener('click', () => {
        const phoneNumber = userInput.value.trim();
        if (phoneNumber === '') {
          alert('Please provide a phone number');
        } else {
          validatePhoneNumber(phoneNumber);
        }
      });

      clearBtn.addEventListener('click', () => {
        resultsDiv.textContent = '';

      });

      const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-|\s]?)\d{4}$/;
        const isValid = phoneRegex.test(phoneNumber);
        
       let resultText = '';
        if (isValid) {
          resultText = `Valid US number: ${phoneNumber}`;
        } else {
          resultText = `Invalid US number: ${phoneNumber}`;
        }

        const resultParagraph = document.createElement('p');
        resultParagraph.textContent = resultText;
        resultsDiv.insertBefore(resultParagraph, resultsDiv.firstChild);
        resultsDiv.style.display = 'block';
        
      };
