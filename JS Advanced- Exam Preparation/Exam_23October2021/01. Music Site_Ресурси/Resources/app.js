window.addEventListener('load', solve);

function solve() {

  let addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', submitData);

  function submitData(e) {
    e.preventDefault();

    let genre = document.querySelector('input[name="genre"]');
    let name = document.querySelector('input[name="name"]');
    let author = document.querySelector('input[name="author"]');
    let date = document.querySelector('input[name="date"]');

    //If input is empty nothing should happen
    if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {
      let song = {
        genre: genre.value,
        name: name.value,
        author: author.value,
        date: date.value
      };

      //Clear the input
      genre.value = '';
      name.value = '';
      author.value = '';
      date.value = '';

      let allHitsContainer = document.querySelector('.all-hits-container');

      //create the different elements
      let genreElement = document.createElement('h2');
      genreElement.textContent = `Genre: ${song.genre}`;
      let nameElement = document.createElement('h2');
      nameElement.textContent = `Name: ${song.name}`;
      let authorElement = document.createElement('h2');
      authorElement.textContent = `Author: ${song.author}`;
      let dateElement = document.createElement('h3');
      dateElement.textContent = `Date: ${song.date}`;
      //create the structure
      let divElement = document.createElement('div');
      divElement.classList.add('hits-info');
      let imgElement = document.createElement('img');
      imgElement.src = "./static/img/img.png";
      //create the buttons 

      let saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.innerText = 'Save song';

      let likeBtn = document.createElement('button');
      likeBtn.classList.add('like-btn');
      likeBtn.innerText = 'Like song';

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerText = 'Delete';

      //combine all elements to the HTML and append it to the DOM
      divElement.appendChild(imgElement);
      divElement.appendChild(genreElement);
      divElement.appendChild(nameElement);
      divElement.appendChild(authorElement);
      divElement.appendChild(dateElement);
      divElement.appendChild(saveBtn);
      divElement.appendChild(likeBtn);
      divElement.appendChild(deleteBtn);
      allHitsContainer.appendChild(divElement);

      likeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let likesParagraph = document.getElementsByClassName('likes')[0].children[0];
        let likes = Number(likesParagraph.textContent.split(' ').pop());
        likesParagraph.innerText = `Total Likes: ${++likes}`;
        likeBtn.disabled = true;
      });

      deleteBtn.addEventListener('click', (el) => {
        el.currentTarget.parentNode.remove();
      });

      saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        savedContainer = document.querySelector('.saved-container');

        let currentSongDiv = e.currentTarget.parentNode;
        savedContainer.appendChild(currentSongDiv);
        currentSongDiv.removeChild(likeBtn);
        currentSongDiv.removeChild(saveBtn);
        allHitsContainer.removeChild(currentSongDiv);


        deleteBtn.addEventListener('click', (el) => {
          el.currentTarget.parentNode.remove();
        });

      });




    }

  }
}