window.addEventListener('load', solution);

function solution() {

  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  let submitBtn = document.getElementById('submitBTN');

  submitBtn.addEventListener('click', submitData);

  function submitData(e) {
    e.preventDefault();
    let infoPreview = document.getElementById('infoPreview');
    infoPreview.innerHTML = '';

    let name = document.getElementById('fname');
    let email = document.getElementById('email');
    let phoneNumber = document.getElementById('phone');
    let address = document.getElementById('address');
    let postalCode = document.getElementById('code');

    if (name.value === '' || email.value === '') {
      return;
    }

    let initialData = [name.value, email.value, phoneNumber.value, address.value, postalCode.value];


    infoPreview.innerHTML = `<li>Full Name: ${name.value}</li>
      <li>Email: ${email.value}</li>
      <li>Phone Number: ${phoneNumber.value}</li>
      <li>Address: ${address.value}</li>
      <li>Postal Code: ${postalCode.value}</li>`;

    submitBtn.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    name.value = '';
    email.value = '';
    phoneNumber.value = '';
    address.value = '';
    postalCode.value = '';

    editButton.addEventListener('click', editData);
    continueButton.addEventListener('click', finishReservation);

    function editData(e) {
      e.preventDefault();

      infoPreview.innerHTML = '';

      name.value = initialData[0];
      email.value = initialData[1];
      phoneNumber.value = initialData[2];
      address.value = initialData[3];
      postalCode.value = initialData[4];

      editButton.disabled = true;
      continueButton.disabled = true;
      submitBtn.disabled = false;

      submitBtn.addEventListener('click', submitData);

      //continueButton.disabled = false;
      continueButton.addEventListener('click', finishReservation);

    }

    function finishReservation(e) {
      e.preventDefault();
      infoPreview.innerHTML = '';
      let blockElement = document.getElementById('block');
      let h3 = document.createElement('h3');
      h3.innerText = "Thank you for your reservation!";
      blockElement.innerHTML = '';
      blockElement.appendChild(h3);
    }
  }
}
