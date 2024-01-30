const body = document.getElementsByTagName('body');

const link = document.querySelector("a");
link.textContent = 'Mozzila';
link.href = "https://developer.mozilla.org";
link.id = "new";

const section = document.querySelector("#teste");
const sec = document.getElementsByTagName('section');
const para = document.createElement('p');

para.textContent = 'texto';
section.appendChild(para);

const text = document.createTextNode(
  'testesssdsds sd sd s sd'
);
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

const teste = linkPara.cloneNode(true);
section.appendChild(teste);



//CSS Styles

para.style.cssText = 'color: white; font-size: 19px;';
para.style.padding = '20px 40px';
para.style.backgroundColor = 'red';
para.style.width = '250px';
para.style.textAlign = 'center';


teste.setAttribute('class', 'highlight');