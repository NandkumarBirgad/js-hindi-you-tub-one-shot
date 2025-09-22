/**
 * DOM (Document Object Model) - Basic Structure and Navigation
 *
 * The DOM represents the structure of an HTML document as a tree of objects.
 * This file covers the fundamental concepts of DOM structure and navigation.
 */

// ==========================================
// 1. UNDERSTANDING THE DOM TREE
// ==========================================

/*
HTML Document Structure:
<html>
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
    <div>
      <span>Text</span>
    </div>
  </body>
</html>

DOM Tree Structure:
document
├── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            └── span
*/

// ==========================================
// 2. ACCESSING DOM ELEMENTS
// ==========================================

// 2.1 document object - Entry point to DOM
console.log("=== DOCUMENT OBJECT ===");
console.log("Document title:", document.title);
console.log("Document URL:", document.URL);
console.log("Document domain:", document.domain);
console.log("Last modified:", document.lastModified);

// 2.2 Getting elements by ID
console.log("\n=== GET ELEMENT BY ID ===");
function getElementById() {
    // Create a simple HTML structure for demonstration
    const demoHTML = `
        <div id="main-container">
            <h1 id="main-title">DOM Learning</h1>
            <p id="description">Understanding DOM structure</p>
            <div id="content">
                <span id="highlight">Important text</span>
            </div>
        </div>
    `;

    // In a real scenario, this would be actual HTML in the document
    console.log("Example: document.getElementById('main-title')");
    console.log("Returns: HTML element with id 'main-title'");
}

// 2.3 Getting elements by Tag Name
console.log("\n=== GET ELEMENTS BY TAG NAME ===");
function getElementsByTagName() {
    // document.getElementsByTagName() returns HTMLCollection
    console.log("document.getElementsByTagName('div') - Returns all div elements");
    console.log("document.getElementsByTagName('p') - Returns all paragraph elements");

    // Can be called on any element too
    console.log("element.getElementsByTagName('span') - Returns span elements inside specific element");
}

// 2.4 Getting elements by Class Name
console.log("\n=== GET ELEMENTS BY CLASS NAME ===");
function getElementsByClassName() {
    console.log("document.getElementsByClassName('container') - Returns elements with class 'container'");
    console.log("document.getElementsByClassName('active highlight') - Returns elements with both classes");
}

// ==========================================
// 3. DOM TREE PROPERTIES
// ==========================================

console.log("\n=== DOM TREE PROPERTIES ===");

// 3.1 Parent, Child, Sibling relationships
function demonstrateTreeProperties() {
    /*
    Consider this HTML structure:
    <div id="parent">
        <h2 id="child1">First Child</h2>
        <p id="child2">Second Child</p>
        <span id="child3">Third Child</span>
    </div>
    */

    console.log("=== PARENT-CHILD RELATIONSHIPS ===");
    console.log("parentElement.children - Returns all child elements");
    console.log("parentElement.firstElementChild - Returns first child element");
    console.log("parentElement.lastElementChild - Returns last child element");
    console.log("parentElement.childElementCount - Returns number of child elements");

    console.log("\n=== SIBLING RELATIONSHIPS ===");
    console.log("element.previousElementSibling - Returns previous sibling element");
    console.log("element.nextElementSibling - Returns next sibling element");

    console.log("\n=== NODE PROPERTIES (includes text nodes) ===");
    console.log("parentNode.childNodes - Returns all child nodes (including text nodes)");
    console.log("parentNode.firstChild - Returns first child node");
    console.log("parentNode.lastChild - Returns last child node");
}

// 3.2 Node types
console.log("\n=== NODE TYPES ===");
function demonstrateNodeTypes() {
    console.log("Node.ELEMENT_NODE (1) - Element nodes like <div>, <p>");
    console.log("Node.TEXT_NODE (3) - Text content");
    console.log("Node.COMMENT_NODE (8) - HTML comments");
    console.log("Node.DOCUMENT_NODE (9) - Document object");

    // Example of checking node type
    console.log("element.nodeType - Returns the type of node");
    console.log("element.nodeName - Returns the name of the node (e.g., 'DIV', 'P')");
    console.log("element.nodeValue - Returns the value of the node (for text nodes)");
}

// ==========================================
// 4. DOM ELEMENT PROPERTIES
// ==========================================

console.log("\n=== ELEMENT PROPERTIES ===");
function demonstrateElementProperties() {
    /*
    Consider: <div id="example" class="container active" title="Example element">
    */

    console.log("=== COMMON PROPERTIES ===");
    console.log("element.id - Gets/sets element ID");
    console.log("element.className - Gets/sets class attribute");
    console.log("element.tagName - Returns element tag name (always uppercase)");
    console.log("element.innerHTML - Gets/sets HTML content");
    console.log("element.textContent - Gets/sets text content");
    console.log("element.innerText - Gets/sets visible text content");

    console.log("\n=== ATTRIBUTE PROPERTIES ===");
    console.log("element.attributes - Returns all attributes");
    console.log("element.getAttribute('title') - Gets specific attribute");
    console.log("element.setAttribute('title', 'New title') - Sets attribute");
    console.log("element.removeAttribute('title') - Removes attribute");

    console.log("\n=== STYLE PROPERTIES ===");
    console.log("element.style - Access to inline styles");
    console.log("element.style.color = 'red' - Sets inline color");
    console.log("element.style.display = 'none' - Hides element");
}

// ==========================================
// 5. PRACTICAL EXAMPLES
// ==========================================

console.log("\n=== PRACTICAL DOM ACCESS EXAMPLES ===");

// Example 1: Basic element access
function basicElementAccess() {
    console.log("=== BASIC ELEMENT ACCESS ===");

    // In a real HTML document, these would work:
    // const header = document.getElementById('main-header');
    // const paragraphs = document.getElementsByTagName('p');
    // const containers = document.getElementsByClassName('container');

    console.log("Common patterns:");
    console.log("1. document.getElementById('unique-id')");
    console.log("2. document.getElementsByTagName('div')");
    console.log("3. document.getElementsByClassName('active')");
    console.log("4. document.querySelector('.container .active')");
    console.log("5. document.querySelectorAll('div p')");
}

// Example 2: Understanding the document structure
function understandDocumentStructure() {
    console.log("=== DOCUMENT STRUCTURE ===");

    console.log("document.documentElement - Returns <html> element");
    console.log("document.head - Returns <head> element");
    console.log("document.body - Returns <body> element");
    console.log("document.title - Gets/sets page title");

    console.log("\nNavigation example:");
    console.log("document.body.children - All direct children of body");
    console.log("document.body.firstElementChild - First child element");
    console.log("document.body.lastElementChild - Last child element");
}

// Example 3: Working with forms
function workingWithForms() {
    console.log("=== WORKING WITH FORMS ===");

    console.log("document.forms - Returns all forms");
    console.log("document.forms[0] - First form");
    console.log("form.elements - All form elements");
    console.log("form.elements['username'] - Element by name");

    console.log("\nForm element properties:");
    console.log("input.value - Gets/sets input value");
    console.log("input.checked - Gets/sets checkbox/radio state");
    console.log("select.selectedIndex - Gets/sets selected option");
}

// ==========================================
// 6. DOM METHODS OVERVIEW
// ==========================================

console.log("\n=== DOM METHODS OVERVIEW ===");

function domMethodsOverview() {
    console.log("=== ELEMENT CREATION ===");
    console.log("document.createElement('div') - Creates new element");
    console.log("document.createTextNode('text') - Creates text node");

    console.log("\n=== ELEMENT INSERTION ===");
    console.log("parent.appendChild(child) - Adds child to end");
    console.log("parent.insertBefore(newChild, referenceChild) - Inserts before reference");
    console.log("parent.replaceChild(newChild, oldChild) - Replaces child");
    console.log("parent.removeChild(child) - Removes child");

    console.log("\n=== ELEMENT MODIFICATION ===");
    console.log("element.innerHTML = '<p>New content</p>' - Sets HTML content");
    console.log("element.textContent = 'New text' - Sets text content");
    console.log("element.setAttribute('class', 'new-class') - Sets attribute");
    console.log("element.classList.add('active') - Adds CSS class");
}

// ==========================================
// 7. BEST PRACTICES
// ==========================================

console.log("\n=== DOM ACCESS BEST PRACTICES ===");

function domBestPractices() {
    console.log("=== PERFORMANCE TIPS ===");
    console.log("1. Cache DOM elements in variables");
    console.log("   const container = document.getElementById('container');");
    console.log("   // Use container instead of repeated getElementById calls");

    console.log("\n2. Use specific selectors when possible");
    console.log("   getElementById is fastest, then querySelector");

    console.log("\n3. Minimize DOM manipulation");
    console.log("   Build content in strings, then update DOM once");

    console.log("\n=== SAFETY TIPS ===");
    console.log("4. Always check if element exists before using");
    console.log("   if (element) { /* use element */ }");

    console.log("\n5. Use textContent instead of innerHTML for text");
    console.log("   Prevents XSS attacks and is faster");

    console.log("\n6. Use classList for class manipulation");
    console.log("   element.classList.add('class') instead of className");
}

// ==========================================
// 8. COMMON MISTAKES TO AVOID
// ==========================================

console.log("\n=== COMMON MISTAKES ===");

function commonMistakes() {
    console.log("=== MISTAKE 1: Not checking if element exists ===");
    console.log("❌ const element = document.getElementById('nonexistent');");
    console.log("❌ element.textContent = 'Hello'; // Error!");
    console.log("✅ if (element) { element.textContent = 'Hello'; }");

    console.log("\n=== MISTAKE 2: Confusing innerHTML and textContent ===");
    console.log("❌ element.innerHTML = '<script>alert('xss')</script>'; // Dangerous!");
    console.log("✅ element.textContent = 'Safe text'; // Always safe");

    console.log("\n=== MISTAKE 3: Inefficient DOM access ===");
    console.log("❌ for (let i = 0; i < 100; i++) {");
    console.log("     const element = document.getElementById('item' + i);");
    console.log("   }");
    console.log("✅ const container = document.getElementById('container');");
    console.log("   const items = container.children; // Cache once");

    console.log("\n=== MISTAKE 4: Wrong element references ===");
    console.log("❌ element.parentNode.removeChild(element); // Works but confusing");
    console.log("✅ element.remove(); // Modern approach");
}

// ==========================================
// 9. MODERN DOM FEATURES
// ==========================================

console.log("\n=== MODERN DOM FEATURES ===");

function modernDomFeatures() {
    console.log("=== QUERY SELECTORS (Modern alternative to getElementById/Class/Tag) ===");
    console.log("document.querySelector('.container .active') - First matching element");
    console.log("document.querySelectorAll('div p') - All matching elements");

    console.log("\n=== ELEMENT INSERTION (Modern methods) ===");
    console.log("parent.append(child) - Adds to end");
    console.log("parent.prepend(child) - Adds to beginning");
    console.log("child.before(sibling) - Inserts before element");
    console.log("child.after(sibling) - Inserts after element");
    console.log("element.replaceWith(newElement) - Replaces element");

    console.log("\n=== ELEMENT REMOVAL ===");
    console.log("element.remove() - Removes element from DOM");

    console.log("\n=== CLASS MANIPULATION ===");
    console.log("element.classList.add('class') - Adds class");
    console.log("element.classList.remove('class') - Removes class");
    console.log("element.classList.toggle('class') - Toggles class");
    console.log("element.classList.contains('class') - Checks if has class");
}

// ==========================================
// FUNCTION CALLS
// ==========================================

// Call all demonstration functions
getElementById();
getElementsByTagName();
getElementsByClassName();
demonstrateTreeProperties();
demonstrateNodeTypes();
demonstrateElementProperties();
basicElementAccess();
understandDocumentStructure();
workingWithForms();
domMethodsOverview();
domBestPractices();
commonMistakes();
modernDomFeatures();

console.log("\n=== DOM STRUCTURE LEARNING COMPLETE ===");
console.log("Next: Learn about DOM manipulation in 04_dom_basic/02_dom_manipulation.js");
