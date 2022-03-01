function solve() {

    let addButton = document.getElementById('add');
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let sections = document.querySelectorAll('section div');
    let openSection = sections[3];

    let inprogressSection = sections[5];
    let finishedSection = sections[7];

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        //validate the input
        if (task.value == '' || description.value == '' || date.value == '') {
            return;
        }

        let currenttask = {
            taskName: task.value,
            description: description.value,
            date: date.value
        };

        //clear the input
        task.value = '';
        description.value = '';
        date.value = '';

        //create the elements 

        let articleElement = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = currenttask.taskName;

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${currenttask.description}`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${currenttask.date}`;

        let startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = "Start";

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = "Delete";

        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('flex');

        buttonsDiv.appendChild(startButton);
        buttonsDiv.appendChild(deleteButton);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(descriptionParagraph);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(buttonsDiv);

        openSection.appendChild(articleElement);


        //DELETE 
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentNode.parentNode.remove();
        });

        //MOVE TO IN PROGRESS
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentNode.parentNode.remove();
            buttonsDiv.removeChild(startButton);

            let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList.add('orange');

            buttonsDiv.appendChild(finishButton);

            inprogressSection.appendChild(articleElement);

            finishButton.addEventListener('click', (e) => {
                e.preventDefault();

                e.currentTarget.parentNode.parentNode.remove();
                articleElement.removeChild(buttonsDiv);
                finishedSection.appendChild(articleElement);

            });

        });

    });

}