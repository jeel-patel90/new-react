function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; // Fixed typo from "chilren" to "children"
    domElement.setAttribute('href', reactElement.props.href); // Corrected usage of setAttribute
    domElement.setAttribute('target', reactElement.props.target); // Corrected usage of setAttribute
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.children
    for (const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'click on me to visit google' // Fixed typo from "chilren" to "children"
    }
    
};

const maincontainer = document.querySelector("#root");

customRender(reactElement, maincontainer);
