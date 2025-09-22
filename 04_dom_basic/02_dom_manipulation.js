/**
 * DOM Manipulation - Creating, Modifying, and Removing Elements
 *
 * This file covers practical DOM manipulation techniques including
 * creating elements, modifying content, and managing the DOM tree.
 */

// ==========================================
// 1. CREATING DOM ELEMENTS
// ==========================================

console.log("=== CREATING DOM ELEMENTS ===");

// 1.1 Creating HTML Elements
function createElements() {
    console.log("=== CREATING HTML ELEMENTS ===");

    // Create a div element
    const div = document.createElement('div');
    console.log("Created div:", div);

    // Create other common elements
    const p = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');
    const input = document.createElement('input');

    console.log("Created paragraph:", p);
    console.log("Created button:", button);
    console.log("Created image:", img);
    console.log("Created input:", input);
}

// 1.2 Creating Text Nodes
function createTextNodes() {
    console.log("\n=== CREATING TEXT NODES ===");

    const textNode = document.createTextNode('Hello, DOM!');
    console.log("Text node:", textNode);

    // Text nodes are used to add text content to elements
    const div = document.createElement('div');
    div.appendChild(textNode);
    console.log("Div with text:", div);
}

// 1.3 Setting Initial Properties
function setInitialProperties() {
    console.log("\n=== SETTING INITIAL PROPERTIES ===");

    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.className = 'btn primary';
    button.id = 'main-button';
    button.setAttribute('type', 'button');
    button.setAttribute('disabled', '');

    console.log("Button with properties:", button);
    console.log("Button HTML:", button.outerHTML);
}

// ==========================================
// 2. INSERTING ELEMENTS INTO DOM
// ==========================================

console.log("\n=== INSERTING ELEMENTS INTO DOM ===");

// 2.1 appendChild() - Add to end of parent
function demonstrateAppendChild() {
    console.log("=== APPENDCHILD() ===");

    const container = document.createElement('div');
    container.id = 'container';

    const child1 = document.createElement('p');
    child1.textContent = 'First child';

    const child2 = document.createElement('p');
    child2.textContent = 'Second child';

    container.appendChild(child1);
    container.appendChild(child2);

    console.log("Container after appendChild:", container);
    console.log("Container children:", container.children);
}

// 2.2 insertBefore() - Insert before reference element
function demonstrateInsertBefore() {
    console.log("\n=== INSERTBEFORE() ===");

    const container = document.createElement('div');
    const firstChild = document.createElement('p');
    firstChild.textContent = 'First child';
    container.appendChild(firstChild);

    const referenceChild = firstChild;
    const newChild = document.createElement('p');
    newChild.textContent = 'Inserted before first';

    container.insertBefore(newChild, referenceChild);

    console.log("Container after insertBefore:", container);
}

// 2.3 Modern Insertion Methods (ES6+)
function demonstrateModernInsertion() {
    console.log("\n=== MODERN INSERTION METHODS ===");

    const container = document.createElement('div');
    const child1 = document.createElement('span');
    child1.textContent = 'Child 1';

    const child2 = document.createElement('span');
    child2.textContent = 'Child 2';

    // append() - Add multiple elements to end
    container.append(child1, ' text ', child2);
    console.log("After append():", container);

    // prepend() - Add to beginning
    const child0 = document.createElement('span');
    child0.textContent = 'Child 0';
    container.prepend(child0);
    console.log("After prepend():", container);

    // before() - Insert before element
    const beforeElement = document.createElement('span');
    beforeElement.textContent = 'Before';
    container.before(beforeElement);
    console.log("After before():", container);

    // after() - Insert after element
    const afterElement = document.createElement('span');
    afterElement.textContent = 'After';
    container.after(afterElement);
    console.log("After after():", container);
}

// ==========================================
// 3. MODIFYING ELEMENT CONTENT
// ==========================================

console.log("\n=== MODIFYING ELEMENT CONTENT ===");

// 3.1 innerHTML - Most common way to set content
function demonstrateInnerHTML() {
    console.log("=== INNERHTML ===");

    const div = document.createElement('div');

    // Setting simple text
    div.innerHTML = 'Hello, World!';
    console.log("Simple text:", div);

    // Setting HTML content
    div.innerHTML = '<h2>Title</h2><p>Paragraph with <strong>bold</strong> text</p>';
    console.log("HTML content:", div);

    // Adding to existing content
    div.innerHTML += '<p>Additional paragraph</p>';
    console.log("Added content:", div);
}

// 3.2 textContent - Safe text-only content
function demonstrateTextContent() {
    console.log("\n=== TEXTCONTENT ===");

    const div = document.createElement('div');

    // Setting text content
    div.textContent = 'Hello, <script>alert("XSS")</script> World!';
    console.log("Text content (safe):", div);

    // textContent removes all HTML tags
    div.innerHTML = '<h2>Title</h2><p>Paragraph</p>';
    console.log("Original HTML:", div.innerHTML);
    console.log("As textContent:", div.textContent);
}

// 3.3 innerText - Similar to textContent but considers CSS
function demonstrateInnerText() {
    console.log("\n=== INNERTEXT ===");

    const div = document.createElement('div');
    div.innerHTML = 'Visible text <span style="display:none">hidden</span> more text';

    console.log("innerHTML:", div.innerHTML);
    console.log("textContent:", div.textContent);
    console.log("innerText:", div.innerText); // May hide CSS-hidden content
}

// ==========================================
// 4. MODIFYING ELEMENT ATTRIBUTES
// ==========================================

console.log("\n=== MODIFYING ELEMENT ATTRIBUTES ===");

// 4.1 Setting attributes
function demonstrateSetAttribute() {
    console.log("=== SETATTRIBUTE ===");

    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'username');
    input.setAttribute('class', 'form-input required');
    input.setAttribute('placeholder', 'Enter your name');
    input.setAttribute('required', '');

    console.log("Input with attributes:", input);
    console.log("Outer HTML:", input.outerHTML);
}

// 4.2 Getting attributes
function demonstrateGetAttribute() {
    console.log("\n=== GETATTRIBUTE ===");

    const link = document.createElement('a');
    link.setAttribute('href', 'https://example.com');
    link.setAttribute('title', 'Visit example');
    link.setAttribute('target', '_blank');

    console.log("href:", link.getAttribute('href'));
    console.log("title:", link.getAttribute('title'));
    console.log("target:", link.getAttribute('target'));
    console.log("nonexistent:", link.getAttribute('nonexistent')); // null
}

// 4.3 Removing attributes
function demonstrateRemoveAttribute() {
    console.log("\n=== REMOVEATTRIBUTE ===");

    const button = document.createElement('button');
    button.setAttribute('disabled', '');
    button.setAttribute('class', 'btn disabled');

    console.log("Before removal:", button.outerHTML);

    button.removeAttribute('disabled');
    console.log("After removing disabled:", button.outerHTML);
}

// 4.4 Working with data attributes
function demonstrateDataAttributes() {
    console.log("\n=== DATA ATTRIBUTES ===");

    const div = document.createElement('div');
    div.setAttribute('data-user-id', '123');
    div.setAttribute('data-user-name', 'John Doe');
    div.setAttribute('data-active', 'true');

    console.log("User ID:", div.getAttribute('data-user-id'));
    console.log("User Name:", div.getAttribute('data-user-name'));
    console.log("Active:", div.getAttribute('data-active'));

    // Modern dataset API
    console.log("Dataset API:");
    console.log("div.dataset.userId:", div.dataset.userId);
    console.log("div.dataset.userName:", div.dataset.userName);
    console.log("div.dataset.active:", div.dataset.active);
}

// ==========================================
// 5. MODIFYING ELEMENT STYLES
// ==========================================

console.log("\n=== MODIFYING ELEMENT STYLES ===");

// 5.1 Inline styles
function demonstrateInlineStyles() {
    console.log("=== INLINE STYLES ===");

    const div = document.createElement('div');
    div.textContent = 'Styled div';

    // Setting individual styles
    div.style.color = 'white';
    div.style.backgroundColor = 'blue';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.fontSize = '16px';

    console.log("Div with inline styles:", div);
    console.log("Style object:", div.style);
}

// 5.2 Adding CSS classes
function demonstrateCSSClasses() {
    console.log("\n=== CSS CLASSES ===");

    const button = document.createElement('button');
    button.textContent = 'Button';

    // Using className (old way)
    button.className = 'btn primary large';
    console.log("Using className:", button.outerHTML);

    // Using classList (modern way)
    const div = document.createElement('div');
    div.classList.add('container', 'active');
    div.classList.add('highlighted');
    console.log("Using classList.add():", div.outerHTML);

    div.classList.remove('active');
    console.log("After classList.remove('active'):", div.outerHTML);

    div.classList.toggle('visible');
    console.log("After classList.toggle('visible'):", div.outerHTML);

    console.log("Has 'container' class:", div.classList.contains('container'));
    console.log("Has 'hidden' class:", div.classList.contains('hidden'));
}

// ==========================================
// 6. REMOVING ELEMENTS
// ==========================================

console.log("\n=== REMOVING ELEMENTS ===");

// 6.1 removeChild() - Traditional way
function demonstrateRemoveChild() {
    console.log("=== REMOVECHILD() ===");

    const container = document.createElement('div');
    const child1 = document.createElement('p');
    const child2 = document.createElement('p');
    const child3 = document.createElement('p');

    child1.textContent = 'Child 1';
    child2.textContent = 'Child 2';
    child3.textContent = 'Child 3';

    container.appendChild(child1);
    container.appendChild(child2);
    container.appendChild(child3);

    console.log("Before removal:", container.children.length, "children");

    container.removeChild(child2);
    console.log("After removing child2:", container.children.length, "children");
}

// 6.2 remove() - Modern way
function demonstrateRemove() {
    console.log("\n=== REMOVE() METHOD ===");

    const div = document.createElement('div');
    div.textContent = 'This will be removed';
    div.id = 'removable';

    console.log("Element before removal:", div);

    // In modern browsers, elements can remove themselves
    // div.remove(); // This would remove the element from DOM

    console.log("Element.remove() - Removes element from DOM");
}

// 6.3 Replacing elements
function demonstrateReplaceChild() {
    console.log("\n=== REPLACECHILD() ===");

    const container = document.createElement('div');
    const oldChild = document.createElement('p');
    const newChild = document.createElement('h2');

    oldChild.textContent = 'Old content';
    newChild.textContent = 'New content';

    container.appendChild(oldChild);
    console.log("Before replacement:", container.innerHTML);

    container.replaceChild(newChild, oldChild);
    console.log("After replacement:", container.innerHTML);
}

// ==========================================
// 7. PRACTICAL EXAMPLES
// ==========================================

console.log("\n=== PRACTICAL DOM MANIPULATION EXAMPLES ===");

// 7.1 Creating a dynamic list
function createDynamicList() {
    console.log("=== CREATING DYNAMIC LIST ===");

    const items = ['Apple', 'Banana', 'Orange', 'Grape'];

    const ul = document.createElement('ul');
    ul.className = 'fruit-list';

    items.forEach((fruit, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${fruit}`;
        li.className = 'fruit-item';
        ul.appendChild(li);
    });

    console.log("Dynamic list:", ul);
}

// 7.2 Creating a form dynamically
function createDynamicForm() {
    console.log("\n=== CREATING DYNAMIC FORM ===");

    const form = document.createElement('form');
    form.className = 'user-form';

    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'username';
    nameInput.required = true;

    // Email input
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.className = 'btn submit-btn';

    // Assemble form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    console.log("Dynamic form:", form);
}

// 7.3 Building a card component
function createCardComponent() {
    console.log("\n=== CREATING CARD COMPONENT ===");

    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('img');
    cardImage.src = 'https://via.placeholder.com/300x200';
    cardImage.alt = 'Card image';
    cardImage.className = 'card-image';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = 'Card Title';
    cardTitle.className = 'card-title';

    const cardDescription = document.createElement('p');
    cardDescription.textContent = 'This is a description of the card content.';
    cardDescription.className = 'card-description';

    const cardButton = document.createElement('button');
    cardButton.textContent = 'Learn More';
    cardButton.className = 'card-button';

    // Assemble card
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardButton);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    console.log("Card component:", card);
}

// ==========================================
// 8. PERFORMANCE CONSIDERATIONS
// ==========================================

console.log("\n=== PERFORMANCE CONSIDERATIONS ===");

// 8.1 DocumentFragment for batch operations
function demonstrateDocumentFragment() {
    console.log("=== DOCUMENT FRAGMENT ===");

    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');

    // Adding multiple elements to fragment (no reflow/repaint)
    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        item.textContent = `Item ${i + 1}`;
        item.className = 'list-item';
        fragment.appendChild(item);
    }

    // Single DOM insertion (single reflow/repaint)
    container.appendChild(fragment);

    console.log("Container with 100 items:", container.children.length);
}

// 8.2 Efficient DOM updates
function demonstrateEfficientUpdates() {
    console.log("\n=== EFFICIENT DOM UPDATES ===");

    console.log("=== BAD PRACTICE ===");
    console.log("for (let i = 0; i < 1000; i++) {");
    console.log("    container.innerHTML += '<div>Item ' + i + '</div>'; // 1000+ reflows");
    console.log("}");

    console.log("\n=== GOOD PRACTICE ===");
    console.log("let html = '';");
    console.log("for (let i = 0; i < 1000; i++) {");
    console.log("    html += '<div>Item ' + i + '</div>'; // String building");
    console.log("}");
    console.log("container.innerHTML = html; // Single reflow");

    console.log("\n=== BEST PRACTICE (Modern) ===");
    console.log("const fragment = document.createDocumentFragment();");
    console.log("for (let i = 0; i < 1000; i++) {");
    console.log("    const div = document.createElement('div');");
    console.log("    div.textContent = 'Item ' + i;");
    console.log("    fragment.appendChild(div);");
    console.log("}");
    console.log("container.appendChild(fragment); // Single reflow");
}

// ==========================================
// 9. COMMON PATTERNS AND UTILITIES
// ==========================================

console.log("\n=== COMMON PATTERNS AND UTILITIES ===");

// 9.1 Utility function for creating elements with properties
function createElementWithProperties(tagName, properties = {}, textContent = '') {
    const element = document.createElement(tagName);

    // Set properties
    Object.keys(properties).forEach(key => {
        if (key === 'className') {
            element.className = properties[key];
        } else if (key === 'dataset') {
            Object.assign(element.dataset, properties[key]);
        } else {
            element.setAttribute(key, properties[key]);
        }
    });

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

// 9.2 Utility function for removing all children
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// 9.3 Template literal for complex HTML
function createComplexElement() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://via.placeholder.com/50'
    };

    const userCard = document.createElement('div');
    userCard.innerHTML = `
        <div class="user-card">
            <img src="${user.avatar}" alt="${user.name}" class="avatar">
            <div class="user-info">
                <h3 class="user-name">${user.name}</h3>
                <p class="user-email">${user.email}</p>
            </div>
        </div>
    `;

    return userCard;
}

// ==========================================
// FUNCTION CALLS
// ==========================================

// Call all demonstration functions
createElements();
createTextNodes();
setInitialProperties();
demonstrateAppendChild();
demonstrateInsertBefore();
demonstrateModernInsertion();
demonstrateInnerHTML();
demonstrateTextContent();
demonstrateInnerText();
demonstrateSetAttribute();
demonstrateGetAttribute();
demonstrateRemoveAttribute();
demonstrateDataAttributes();
demonstrateInlineStyles();
demonstrateCSSClasses();
demonstrateRemoveChild();
demonstrateRemove();
demonstrateReplaceChild();
createDynamicList();
createDynamicForm();
createCardComponent();
demonstrateDocumentFragment();
demonstrateEfficientUpdates();

// Demonstrate utility functions
console.log("\n=== UTILITY FUNCTIONS DEMO ===");
const button = createElementWithProperties('button', {
    className: 'btn primary',
    type: 'button',
    id: 'demo-button'
}, 'Click me');
console.log("Created with utility:", button.outerHTML);

const container = document.createElement('div');
container.innerHTML = '<p>Child 1</p><p>Child 2</p>';
console.log("Before removing children:", container.children.length);
removeAllChildren(container);
console.log("After removing children:", container.children.length);

const complexElement = createComplexElement();
console.log("Complex element:", complexElement.innerHTML);

console.log("\n=== DOM MANIPULATION LEARNING COMPLETE ===");
console.log("Next: Learn about DOM traversal in 04_dom_basic/03_dom_traversal.js");
