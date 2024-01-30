const list = document.querySelector('ul');
const textInput = document.getElementById('item');
const btnItem = document.querySelector('button');

const clickedButton = () => {
  console.log('clicked');
  btnItem.addEventListener('click', () => {
    let valueInput = textInput.value;
    
    //New Elements
    const listItem = document.createElement('li');
    listItem.id = 'item-wrapper';

    const listText = document.createElement('span');
    listText.id = 'item';
    listText.textContent= valueInput;
    
    const deleteItem = document.createElement('button');
    deleteItem.id = 'delete';
    deleteItem.textContent = 'Delete';
    deleteItem.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    list.appendChild(listItem);
    listItem.appendChild(listText);
    listItem.appendChild(deleteItem);

    //limpar o input value
    textInput.value = '';
    textInput.focus();
    
  });
};
clickedButton();