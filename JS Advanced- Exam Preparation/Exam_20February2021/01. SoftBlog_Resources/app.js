function solve() {

   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   let postSection = document.querySelector('.site-content section');
   let archiveSection = document.querySelector('.archive-section ol');

   const createBtn = document.querySelector('.create');
   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let articleItem = document.createElement('article');
      postSection.appendChild(articleItem);

      let h1Element = document.createElement('h1');
      h1Element.innerText = title.value;
      articleItem.appendChild(h1Element);

      let pCategory = document.createElement('p');
      pCategory.innerHTML = `Category: <strong>${category.value}</strong>`;
      articleItem.appendChild(pCategory);

      let pCreator = document.createElement('p');
      pCreator.innerHTML = `Creator: <strong>${creator.value}</strong>`;
      articleItem.appendChild(pCreator);

      let pContent = document.createElement('p');
      pContent.textContent = content.value;
      articleItem.appendChild(pContent);

      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');

      buttonsDiv.appendChild(deleteBtn);
      buttonsDiv.appendChild(archiveBtn);

      articleItem.appendChild(buttonsDiv);
      //clear the input 

      creator.value = '';
      title.value = '';
      content.value = '';
      category.value = '';

      // delete
      deleteBtn.addEventListener('click', (e) => {
         e.preventDefault();
         e.target.parentElement.parentElement.remove();
      });
      //ARCHIVE
      archiveBtn.addEventListener('click', (e) => {
         e.preventDefault();
         e.target.parentElement.parentElement.remove();
         let li = document.createElement('li');
         li.innerText= h1Element.innerText;
         archiveSection.appendChild(li);

         Array.from(archiveSection.getElementsByTagName('li'))
         .sort((a,b) => a.textContent.localeCompare(b.textContent) )
         .forEach(li => archiveSection.appendChild(li));
      });

   });

}
