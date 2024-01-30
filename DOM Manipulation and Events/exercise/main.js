//Adicionar Elementos à DOM
const addElements = () => {
  const container = document.getElementById('container');
  console.log(container);

  //adição e atribuição de paragraph
  const paragraph = document.createElement('p');
  paragraph.style.cssText = 'color: red';
  paragraph.textContent = `Hey I'm red`;
  container.appendChild(paragraph);

  //adição e atribuição de h3
  const headingThird = document.createElement('h3');
  headingThird.style.cssText = 'color: blue';
  headingThird.textContent = `I'm blue`;
  container.appendChild(headingThird);

  //div with elements
  const section = document.createElement('div');
  section.classList.add('division');
  const headingOne = document.createElement('h1');
  headingOne.textContent = `I'm in an div`;
  section.appendChild(headingOne);
  const sectionParagraph = document.createElement('p');
  sectionParagraph.textContent = `Me Too`;
  section.appendChild(sectionParagraph);
  container.appendChild(section);
};
addElements();


//////EVENTS EXERCICIOS À PARTE

const btn = document.getElementById('btn');
btn.onclick = () => alert('ola');

const btnThird = document.getElementById('teste');
btnThird.addEventListener('click', () => {
  alert('melhor opção');
});

const btnEvent = document.getElementById('e');
btnEvent.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
