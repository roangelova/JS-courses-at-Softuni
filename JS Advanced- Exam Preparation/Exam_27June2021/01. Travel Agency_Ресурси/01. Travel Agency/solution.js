window.addEventListener('load', solution);

function solution() {

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitData);

  function submitData(e) {
    e.preventDefault;
    let infoPreview = document.getElementById('infoPreview');
    infoPreview.innerHTML = '';

    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let postalCode = document.getElementById('code').value;

    let data = [name, email, phoneNumber, address, postalCode];

    if (name.value == '' || email.value == '') {
      return;
    }
    copiedData = [...data];
    //clear the input
    for (const inputField of data) {
      inputField.value = '';
    }
    submitBtn.disabled = true;

    //get remaining buttons
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');
    editButton.disabled = false;
    continueButton.disabled = false;

    

    editButton.addEventListener('click', displayData);


    function displayData(e) {
      e.preventDefault;
      infoPreview.innerHTML = `<li>Full Name: ${copiedData[0]}</li>
      <li>Email: ${copiedData[1]}</li>
      <li>Phone Number: ${copiedData[2]}</li>
      <li>Address: ${copiedData[3]}</li>
      <li>Postal Code: ${copiedData[4]}</li>`;

      editButton.disabled = true;
      continueButton.disabled = true;
      submitBtn.disabled = false;

      submitBtn.addEventListener('click', submitData);

//continueButton.disabled = false;
      continueButton.addEventListener('click', finishReservation);


      function finishReservation(e) {
        e.preventDefault;
infoPreview.innerHTML = '';
        let blockElement = document.getElementById('block');
        let h3 = document.createElement('h3');
        h3.innerText = "Thank you for your reservation!";
        blockElement.innerHTML = '';
        blockElement.appendChild(h3);
      }
    }
  }
}
