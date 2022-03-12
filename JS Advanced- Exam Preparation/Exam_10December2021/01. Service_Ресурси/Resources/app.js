window.addEventListener('load', solve);

function solve() {
    let sendBtn = document.querySelector('button[type = "submit"]');
    let receivedOrders = document.getElementById('received-orders');
    let completedSection = document.getElementById('completed-orders');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let producutType = document.getElementById('type-product');
        let description = document.getElementById('description');
        let name = document.getElementById('client-name');
        let phone = document.getElementById('client-phone');

        if (name.value === ''
            || description.value === ''
            || phone.value === '') {
            return;
        }
        
        let divElement = document.createElement('div');
        divElement.classList.add('container');
        let h2 = document.createElement('h2');
        h2.innerText = `Product type for repair: ${producutType.value}`;
        let h3 = document.createElement('h3');
        h3.innerText = `Client information: ${name.value}, ${phone.value}`;
        name.value = '';
        phone.value = '';
        let h4 = document.createElement('h4');
        h4.innerText = `Description of the problem: ${description.value}`;
        description.value = '';
        producutType.value = 'Computer';

        let startBtn = document.createElement('button');
        startBtn.innerText = 'Start repair';
        startBtn.classList.add('start-btn');

        let finishBtn = document.createElement('button');
        finishBtn.innerText = 'Finish repair';
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;

        divElement.appendChild(h2);
        divElement.appendChild(h3);
        divElement.appendChild(h4);
        divElement.appendChild(startBtn);
        divElement.appendChild(finishBtn);

        receivedOrders.appendChild(divElement);

        //START
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });

        //FINISH
        finishBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();

            completedSection.appendChild(divElement);
            divElement.removeChild(startBtn);
            divElement.removeChild(finishBtn);

        });


        let clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', (e) => {
            let elementsToClear = Array.from(document.querySelectorAll('#completed-orders div'));
            elementsToClear.forEach(x => x.remove());
        });
    });
}