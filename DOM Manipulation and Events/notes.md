/*
******************************************************
DOM METHODS
******************************************************
*/

    //Element creation
    -> document.createElement(tagName, [options])
        creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

    //Append elements
    -> parentNode.appendChild(childNode)
        appends childNode as the last child of parentNode.
    -> parentNode.insertBefore(newNode, referenceNode)
        inserts newNode into parentNode before referenceNode.

    //Remove Elements
    -> parentNode.removeChild(child)
        removes child from parentNode on the DOM and returns a reference to child.

    //Altering elements
    -> const alterar = document.createElement('div');
        alterar.style.color = 'blue';                                      
        // adds the indicated style rule

        alterar.style.cssText = 'color: blue; background: white;';          
        // adds several style rules

        alterar.setAttribute('style', 'color: blue; background: white;');    
        // adds several style rules

        //NOTA ADICIONAL
        div.style.background-color      // doesn't work - attempts to subtract color from div.style.background
        div.style.backgroundColor       // accesses the div's background-color style
        div.style['background-color']   // also works
        div.style.cssText = "background-color: white;"  // sets the div's background-color by assigning a CSS string

    //Edit attributes
        div.setAttribute('id', 'theDiv');                              
        // if id exists, update it to 'theDiv', else create an id
        // with value "theDiv"

        div.getAttribute('id');                                        
        // returns value of specified attribute, in this case
        // "theDiv"

        div.removeAttribute('id');                                     
        // removes specified attribute

    //Working with classes
        div.classList.add('new');                                      
        // adds class "new" to your new div

        div.classList.remove('new');                                   
        // removes "new" class from div

        div.classList.toggle('active');                                
        // if div doesn't have class "active" then add it, or if
        // it does, then remove it

    //Adding text content
        div.textContent = 'Hello World!'                               
        // creates a text node containing "Hello World!" and
        // inserts it in div

    //Adding HTML content
        div.innerHTML = '<span>Hello World!</span>';                   
        // renders the HTML inside div

        NOTA IMPORTANTE
        Note that textContent is preferable for adding text, and innerHTML should be used sparingly as it can create security risks if misused. Check out this video if you want to see an example of how.
    



/*
******************************************************
EVENTS
******************************************************
*/

    There are three primary ways to go about this: You can specify function attributes directly on your HTML elements, you can set properties of form on[eventType] (onclick, onmousedown, etc.) on the DOM nodes in your JavaScript, or you can attach event listeners to the DOM nodes in your JavaScript. Event listeners are definitely the preferred method, but you will regularly see the others in use, so we’re going to cover all three.

    //First Method
    <button onclick="alert('Olá')">Click Me</button>
        This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.
    
    //Second Method
    <button id="btn">Click Me</button>
    const btn = document.getElementById('btn');
    btn.onclick = () => alert('ola');
        This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.

    //Third Method -----PREFERED------
    <button id="btn">Click Me Too</button>
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
    alert("Hello World");
    });
        Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

    

