'use strict';


function createElement(block) {
    if ((block === undefined) || (block === null) || (block === false)) {
        return document.createTextNode('');
    }
    if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
        return document.createTextNode(block.toString());
    }
    if (Array.isArray(block)) {
        return block.reduce((f, elem) => {
            f.appendChild(createElement(elem));

            return f;
        }, document.createDocumentFragment());
    }

    const element = document.createElement(block.name || 'div');

    [].concat(block.cls || []).forEach(
        className => element.classList.add(className)
    );

    if (block.props) {
        Object.keys(block.props).forEach(
            key => element.setAttribute(key, block.props[key])
        );
    }

    if (block.childs) element.appendChild(createElement(block.childs));

    return element;
}

