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

<!-- Editing attributes -->
    div.setAttribute('id', 'theDiv');                              
    // if id exists, update it to 'theDiv', else create an id
    // with value "theDiv"

    div.getAttribute('id');                                        
    // returns value of specified attribute, in this case
    // "theDiv"

    div.removeAttribute('id');                                     
    // removes specified attribute

<!-- Working with classes -->
    div.classList.add('new');                                      
    // adds class "new" to your new div

    div.classList.remove('new');                                   
    // removes "new" class from div

    div.classList.toggle('active');                                
    // if div doesn't have class "active" then add it, or if
    // it does, then remove it

<!-- Adding text content -->
    div.textContent = 'Hello World!'                               
    // creates a text node containing "Hello World!" and
    // inserts it in div

<!-- Adding HTML content -->
    div.innerHTML = '<span>Hello World!</span>';                   
    // renders the HTML inside div


