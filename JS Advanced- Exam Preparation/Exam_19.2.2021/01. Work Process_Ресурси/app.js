function solve() {
    //get the input
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let dob = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    let hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstName.value === '' || lastName.value === ''
            || email.value === '' || dob.value === ''
            || position.value === '' || salary.value === '') {
            alert('All fields are required!');
            return;
        }

        let tBody = document.getElementById('tbody');
        let sum = document.getElementById('sum');
        let tr = document.createElement('tr');

        let firstNameElement = document.createElement('td');
        firstNameElement.textContent = firstName.value;
        lastNameElement = document.createElement('td');
        lastNameElement.textContent = lastName.value;
        let emailElement = document.createElement('td');
        emailElement.textContent = email.value;
        let dobElement = document.createElement('td');
        dobElement.textContent = dob.value;
        let positionElement = document.createElement('td');
        positionElement.textContent = position.value;
        let salaryElement = document.createElement('td');
        salaryElement.textContent = salary.value;

        let fireBtn = document.createElement('button');
        fireBtn.textContent = 'Fired';
        fireBtn.classList.add('fired');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');

        tr.append(firstNameElement, lastNameElement, emailElement, dobElement,
            positionElement, salaryElement, fireBtn, editBtn);

        tBody.appendChild(tr);

        let newSum = Number(sum.innerText) + Number(salary.value);
        sum.innerText = `${newSum.toFixed(2)}`;

        //clear the input 
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        dob.value = '';
        position.value = '';
        salary.value = '';

        fireBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();

            let newSum = Number(sum.innerText) - Number(salaryElement.innerText);
            sum.innerText = `${newSum.toFixed(2)}`;

        });

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
            firstName.value = firstNameElement.innerText;
            lastName.value = lastNameElement.innerText;
            email.value = emailElement.innerText;
            dob.value = dobElement.innerText;
            position.value = positionElement.innerText;
            salary.value = salaryElement.innerText;

            let newSum = Number(sum.innerText) - Number(salaryElement.innerText);
            sum.innerText = `${newSum.toFixed(2)}`;

        });

    });



}
solve()