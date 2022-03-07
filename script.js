let form = document.querySelector('#form');
let list = document.querySelector('#content__notes');

form.addEventListener('submit', addNote);

function addNote(e){
    e.preventDefault();
    // console.log('1');
    let input = document.querySelector('.content__noteArea--input').value;
    // console.log(input);
    let newItem = document.createElement('li');
    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-trash';
    newItem.className = 'content__notes--note col-md-3 m-2';
    // console.log(newItem);
    newItem.innerText = input;
    deleteBtn.addEventListener('click', removeItem);
    // console.log(newItem);
    newItem.append(deleteBtn);
    list.append(newItem);
    form.reset();
}

function removeItem(e){
    e.target.parentNode.remove();
}