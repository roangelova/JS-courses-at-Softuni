const url = ` http://localhost:3030/jsonstore/messenger`;
const messages = document.getElementById('messages');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessages);
    document.getElementById('refresh').addEventListener('click', loadMessages);
}

attachEvents();

async function postMessages() {
    const author = document.querySelector('input[name = "author"]');
    const content = document.querySelector('input[name = "content"]');
    if (author.value === '' || content.value === '') {
        alert('Missing input!');
        return;
    }
    await request(url, {
        author: author.value,
        content: content.value
    });
    loadMessages();
    author.value = '';
    content.value = '';
};

async function loadMessages() {
    const response = await fetch(url);
    const data = await response.json();
    messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
};

async function request(url, option) {
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        };
    }
    const response = await fetch(url, option);
    return response.json();
}