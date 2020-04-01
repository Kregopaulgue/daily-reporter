/**
 * Adds new child element to node
 * @param {object} parentNodeObject parent node object
 * @param {string} newChildTag html tag of the new element
 * @param {string} newChildId id of the new element
 */
function addNewChildToNode(parentNodeObject, newChildTag, newChildOptions) {
    const newChildElement = createHtmlElement(newChildTag, newChildOptions);
    parentNodeObject.appendChild(newChildElement);
}

/**
 * Adds new child element to node by id
 * @param {number} parentNodeObject parent node id
 * @param {string} newChildTag html tag of the new element
 * @param {string} newChildId id of the new element
 */
function addNewChildToNodeById(parentNodeId, newChildTag, newChildOptions) {
    const newChildElement = createHtmlElement(newChildTag, newChildOptions);
    addChildToNodeById(newChildElement, parentNodeId);
}

/**
 * Creates HTML element with specified parameters
 * @param {string} elementTag 
 * 
 * @param {object} [options] Options for the new element
 * @param {string} [options.id] id of the element
 * @param {string} [options.class] style class of the element
 * @param {string} [options.for] param for label tag
 * etc...
 * 
 * @returns {object} new html element 
 */
function createHtmlElement(elementTag, options) {
    const newElement = document.createElement(elementTag);

    Object.keys(options).forEach(key => {
        newElement[key] = options[key];
    });
    return newElement;
}

/**
 * Adds new child to node
 * @param {object} parentNodeObject
 * @param {object} childElement 
 */
function addChildToNodeById(parentNodeId, childElement) {
    const parentNodeObject = document.getElementById(parentNodeId);
    parentNodeObject.appendChild(childElement);
}

module.exports = {
    createHtmlElement,
    addChildToNodeById,
    addNewChildToNode,
    addNewChildToNodeById
}