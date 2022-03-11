function solution() {

    let addBtn = document.querySelectorAll('button')[0];

    let sections = document.querySelectorAll('.card ul');
    let listSection = sections[0];
    let sentSection = sections[1];
    let discardedSection = sections[2];

    let addSectionDiv = document.querySelectorAll('.card div input')[0];
    console.log(addSectionDiv);

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let giftName = addSectionDiv.value;

        let liElement = document.createElement('li');
        liElement.textContent = giftName;
        liElement.classList.add('gift');

        addSectionDiv.value = '';

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');

        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.setAttribute('id', 'discardButton');

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);

        listSection.appendChild(liElement);

        //sort

        Array.from(listSection.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => listSection.appendChild(li));

        //SEND GIFTS
        sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.remove(liElement);
            liElement.removeChild(sendButton);
            liElement.removeChild(discardButton);
            sentSection.appendChild(liElement);
        });

        //DISCARD GIFTS 
        discardButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.remove(liElement);
            liElement.removeChild(sendButton);
            liElement.removeChild(discardButton);
            discardedSection.appendChild(liElement);
        });


    });
}