window.addEventListener('load', solve);

function solve() {
    let model = document.querySelector('input[name="model"]');
    let year = document.querySelector('input[name="year"]');
    let description = document.querySelector('textarea[id="description"]');
    let price = document.querySelector('input[name="price"]');

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', createObj);

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    function createObj(e) {
        e.preventDefault();
        // create the obj if validation is passed
        if (model.value != '' && description.value != '' && Number(year.value) > 0 && Number(price.value) > 0) {
            let furnitureElement = {
                model: model.value,
                year: Number(year.value),
                description: description.value,
                price: Number(price.value)
            };
            //clean the input
            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';
            //add it to the dom 

            addElementToDom(furnitureElement);

        }
    };

    function addElementToDom(element) {
        const tr = document.createElement('tr');
        tr.classList.add('info');
        tr.innerHTML =
            `<td>${element.model}</td>
        <td>${element.price.toFixed(2)}</td>
        <td>
        <button class = "moreBtn">More Info</button>
        <button class = "buyBtn">Buy it</button>
        </td>`;
        const hideTr = document.createElement('tr');
        hideTr.classList.add('hide');
        hideTr.innerHTML =
            `<td>Year: ${element.year}</td>
        <td colspan = "3">Description: ${element.description}</td>`;

        furnitureList.appendChild(tr);
        furnitureList.appendChild(hideTr);

        const moreInfoButtons = tr.querySelectorAll('button');
        moreInfoButtons[0].addEventListener('click', showMoreInfo);
        moreInfoButtons[1].addEventListener('click', buyFurniture);
    }



    function showMoreInfo(e) {
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info';
            moreInfoTr.style.display = 'contents';
        } else {
            e.target.textContent = 'More Info';
            moreInfoTr.style.display = 'none';
        }
    }

    function buyFurniture(e) {
        const tr = e.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }

}
