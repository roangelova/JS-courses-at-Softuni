const url = ` http://localhost:3030/jsonstore/collections/students`;

const table = document.querySelector('#results tbody');


async function GetData() {
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(s => {
        const firstName = s.firstName;
        const lastName = s.lastName;
        const facultyNumber = s.facultyNumber;
        const grade = s.grade;

        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell();
        firstNameCell.innerText = firstName;

        const lastNameCell = tr.insertCell();
        lastNameCell.innerText = lastName;

        const fnCell = tr.insertCell();
        fnCell.innerText = facultyNumber;

        const fngradeCell = tr.insertCell();
        fngradeCell.innerText = grade;

        table.appendChild(tr);
    });
}

GetData();

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    let firstName = document.querySelector('input[name = "firstName"]');
    let lastName = document.querySelector('input[name = "lastName"]');
    let facultyNumber = document.querySelector('input[name = "facultyNumber"]');
    let grade = document.querySelector('input[name = "grade"]');

    if (firstName.value === '' || lastName.value === ''
        || facultyNumber.value === '' || grade.value === '') {
        alert('Please fill out every field');
        return;
    };

    const reponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        })
    });

    firstName.value = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';

    table.innerHTML = '';
    GetData();
});
