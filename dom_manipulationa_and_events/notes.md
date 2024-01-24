<!-- Element creation -->
document.createElement(tagName, [options]) - creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point

    const div = document.createElement('div');

<!-- Append elements -->
    parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
    parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

<!-- Remove Elements -->
    parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.

<!-- Altering Elements -->
    <!-- Adding inline style -->
    const home = document.createElement('div);

    home.style.color = 'blue';

    home.style.cssText = 'color: blue; background: white';
    // adds several style rules

    home.setAttribute('style', 'color: blue; background: red;');
    // adds several style rules



