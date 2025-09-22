/**
 * DOM Traversal - Navigating Through the DOM Tree
 *
 * This file covers various methods to traverse and navigate
 * through the DOM tree structure efficiently.
 */

// ==========================================
// 1. BASIC TREE NAVIGATION
// ==========================================

console.log("=== BASIC TREE NAVIGATION ===");

// 1.1 Parent-Child Relationships
function demonstrateParentChild() {
    console.log("=== PARENT-CHILD RELATIONSHIPS ===");

    /*
    Consider this HTML structure:
    <div id="parent">
        <h1 id="child1">Title</h1>
        <div id="child2">
            <p id="grandchild1">Paragraph 1</p>
            <p id="grandchild2">Paragraph 2</p>
        </div>
        <span id="child3">Text</span>
    </div>
    */

    console.log("=== CHILD NAVIGATION ===");
    console.log("element.children - Returns HTMLCollection of child elements");
    console.log("element.firstElementChild - Returns first child element");
    console.log("element.lastElementChild - Returns last child element");
    console.log("element.childElementCount - Returns number of child elements");

    console.log("\n=== PARENT NAVIGATION ===");
    console.log("element.parentElement - Returns parent element");
    console.log("element.parentNode - Returns parent node (includes text nodes)");

    console.log("\n=== SIBLING NAVIGATION ===");
    console.log("element.previousElementSibling - Returns previous sibling element");
    console.log("element.nextElementSibling - Returns next sibling element");
}

// 1.2 Node vs Element Navigation
function demonstrateNodeVsElement() {
    console.log("\n=== NODE VS ELEMENT NAVIGATION ===");

    console.log("=== ELEMENT PROPERTIES (only element nodes) ===");
    console.log("element.children - Only element children");
    console.log("element.firstElementChild - First element child");
    console.log("element.lastElementChild - Last element child");
    console.log("element.previousElementSibling - Previous element sibling");
    console.log("element.nextElementSibling - Next element sibling");

    console.log("\n=== NODE PROPERTIES (all node types) ===");
    console.log("element.childNodes - All child nodes (text, comment, element)");
    console.log("element.firstChild - First child node");
    console.log("element.lastChild - Last child node");
    console.log("element.previousSibling - Previous sibling node");
    console.log("element.nextSibling - Next sibling node");
    console.log("element.parentNode - Parent node");
}

// ==========================================
// 2. DEPTH-FIRST TRAVERSAL
// ==========================================

console.log("\n=== DEPTH-FIRST TRAVERSAL ===");

// 2.1 Traversing down the tree
function demonstrateDownwardTraversal() {
    console.log("=== DOWNWARD TRAVERSAL ===");

    console.log("=== GETTING ALL DESCENDANTS ===");
    console.log("element.querySelectorAll('*') - All descendant elements");
    console.log("element.getElementsByTagName('*') - All descendant elements");

    console.log("\n=== GETTING SPECIFIC DESCENDANTS ===");
    console.log("element.querySelector('.class') - First matching descendant");
    console.log("element.querySelectorAll('.class') - All matching descendants");
    console.log("element.getElementsByTagName('div') - All div descendants");
    console.log("element.getElementsByClassName('item') - All descendants with class");
}

// 2.2 Traversing up the tree
function demonstrateUpwardTraversal() {
    console.log("\n=== UPWARD TRAVERSAL ===");

    console.log("=== FINDING ANCESTORS ===");
    console.log("element.parentElement - Immediate parent");
    console.log("element.closest('selector') - Closest matching ancestor");

    console.log("\n=== PRACTICAL UPWARD TRAVERSAL ===");
    console.log("element.closest('.container') - Find nearest container ancestor");
    console.log("element.closest('form') - Find nearest form ancestor");
    console.log("element.closest('[data-component]') - Find component root");
}

// 2.3 Traversing sideways (siblings)
function demonstrateSidewaysTraversal() {
    console.log("\n=== SIDEWAYS TRAVERSAL (SIBLINGS) ===");

    console.log("=== IMMEDIATE SIBLINGS ===");
    console.log("element.previousElementSibling - Previous element sibling");
    console.log("element.nextElementSibling - Next element sibling");

    console.log("\n=== ALL SIBLINGS ===");
    console.log("Array.from(element.parentElement.children) - All element siblings");
    console.log("element.parentElement.querySelectorAll(':scope > *') - All siblings");
}

// ==========================================
// 3. ADVANCED TRAVERSAL METHODS
// ==========================================

console.log("\n=== ADVANCED TRAVERSAL METHODS ===");

// 3.1 closest() - Finding ancestors
function demonstrateClosest() {
    console.log("=== CLOSEST() METHOD ===");

    console.log("element.closest('selector') - Finds closest matching ancestor");

    // Practical examples:
    console.log("element.closest('.modal') - Find modal container");
    console.log("element.closest('[data-component]') - Find component root");
    console.log("element.closest('form') - Find form ancestor");
    console.log("element.closest('body') - Find body element");

    // If element itself matches, returns element
    console.log("element.closest('div') - Returns element if it's a div");
}

// 3.2 matches() - Checking if element matches selector
function demonstrateMatches() {
    console.log("\n=== MATCHES() METHOD ===");

    console.log("element.matches('selector') - Returns true if element matches selector");

    // Practical examples:
    console.log("element.matches('.active') - Check if element has active class");
    console.log("element.matches('input[type=\"text\"]') - Check if text input");
    console.log("element.matches('button, a') - Check if button or link");
    console.log("element.matches(':hover') - Check if element is hovered (CSS pseudo)");
}

// 3.3 contains() - Checking if element contains another
function demonstrateContains() {
    console.log("\n=== CONTAINS() METHOD ===");

    console.log("element.contains(otherElement) - Returns true if element contains otherElement");

    // Practical examples:
    console.log("document.body.contains(element) - Check if element is in DOM");
    console.log("container.contains(child) - Check if child is inside container");
    console.log("parent.contains(element) - Check if element is descendant");
}

// ==========================================
// 4. SELECTOR-BASED TRAVERSAL
// ==========================================

console.log("\n=== SELECTOR-BASED TRAVERSAL ===");

// 4.1 querySelector() - Single element selection
function demonstrateQuerySelector() {
    console.log("=== QUERYSELECTOR() ===");

    console.log("=== BASIC SELECTORS ===");
    console.log("document.querySelector('#id') - Select by ID");
    console.log("document.querySelector('.class') - Select by class");
    console.log("document.querySelector('tag') - Select by tag name");
    console.log("document.querySelector('[attribute]') - Select by attribute");

    console.log("\n=== COMBINATORS ===");
    console.log("document.querySelector('.parent .child') - Descendant");
    console.log("document.querySelector('.parent > .child') - Direct child");
    console.log("document.querySelector('.sibling + .next') - Adjacent sibling");
    console.log("document.querySelector('.sibling ~ .following') - General sibling");

    console.log("\n=== PSEUDO-CLASSES ===");
    console.log("document.querySelector(':first-child') - First child");
    console.log("document.querySelector(':last-child') - Last child");
    console.log("document.querySelector(':nth-child(2)') - Nth child");
    console.log("document.querySelector(':hover') - Hovered element");
}

// 4.2 querySelectorAll() - Multiple element selection
function demonstrateQuerySelectorAll() {
    console.log("\n=== QUERYSELECTORALL() ===");

    console.log("document.querySelectorAll('selector') - Returns NodeList of all matches");

    // NodeList vs HTMLCollection
    console.log("=== NODELIST PROPERTIES ===");
    console.log("nodeList.length - Number of elements");
    console.log("nodeList.forEach() - Iterate with forEach");
    console.log("nodeList.item(index) - Get element by index");
    console.log("Array.from(nodeList) - Convert to array");

    console.log("\n=== PRACTICAL EXAMPLES ===");
    console.log("document.querySelectorAll('.item') - All items");
    console.log("document.querySelectorAll('input[type=\"text\"]') - All text inputs");
    console.log("document.querySelectorAll('.container > p') - Direct children");
    console.log("document.querySelectorAll('[data-active=\"true\"]') - Active elements");
}

// 4.3 Relative selectors with :scope
function demonstrateScopeSelector() {
    console.log("\n=== SCOPE SELECTOR ===");

    console.log("element.querySelector(':scope > .child') - Direct children of element");
    console.log("element.querySelectorAll(':scope .descendant') - All descendants");
    console.log("element.querySelector(':scope + .sibling') - Adjacent sibling");
    console.log("element.querySelector(':scope ~ .following') - Following siblings");
}

// ==========================================
// 5. PRACTICAL TRAVERSAL PATTERNS
// ==========================================

console.log("\n=== PRACTICAL TRAVERSAL PATTERNS ===");

// 5.1 Finding elements by relationship
function demonstrateRelationshipPatterns() {
    console.log("=== FINDING ELEMENTS BY RELATIONSHIP ===");

    console.log("=== FINDING PARENT CONTAINERS ===");
    console.log("element.closest('.modal') - Find modal container");
    console.log("element.closest('[data-component]') - Find component root");
    console.log("element.closest('form') - Find form container");

    console.log("\n=== FINDING SIBLING ELEMENTS ===");
    console.log("element.nextElementSibling - Next sibling");
    console.log("element.previousElementSibling - Previous sibling");
    console.log("Array.from(element.parentElement.children) - All siblings");

    console.log("\n=== FINDING CHILD ELEMENTS ===");
    console.log("element.querySelector('.child') - First child with class");
    console.log("element.querySelectorAll('.child') - All children with class");
    console.log("element.getElementsByTagName('div') - All div children");
}

// 5.2 Walking the DOM tree
function demonstrateTreeWalking() {
    console.log("\n=== WALKING THE DOM TREE ===");

    // Walking up the tree
    function walkUp(element, callback) {
        let current = element;
        while (current && current !== document.body) {
            callback(current);
            current = current.parentElement;
        }
    }

    // Walking down the tree
    function walkDown(element, callback) {
        callback(element);
        const children = element.children;
        for (let child of children) {
            walkDown(child, callback);
        }
    }

    // Walking siblings
    function walkSiblings(element, callback) {
        let sibling = element.parentElement.firstElementChild;
        while (sibling) {
            callback(sibling);
            sibling = sibling.nextElementSibling;
        }
    }

    console.log("walkUp(element, callback) - Walk up the tree");
    console.log("walkDown(element, callback) - Walk down the tree");
    console.log("walkSiblings(element, callback) - Walk through siblings");
}

// 5.3 Common traversal utilities
function demonstrateTraversalUtilities() {
    console.log("\n=== TRAVERSAL UTILITIES ===");

    // Get all ancestors
    function getAncestors(element) {
        const ancestors = [];
        let current = element.parentElement;
        while (current) {
            ancestors.push(current);
            current = current.parentElement;
        }
        return ancestors;
    }

    // Get all descendants
    function getDescendants(element) {
        const descendants = [];
        const children = element.querySelectorAll('*');
        children.forEach(child => descendants.push(child));
        return descendants;
    }

    // Get element depth
    function getElementDepth(element) {
        let depth = 0;
        let current = element.parentElement;
        while (current) {
            depth++;
            current = current.parentElement;
        }
        return depth;
    }

    // Find element by text content
    function findByTextContent(text, parent = document) {
        return parent.querySelector(`*:contains("${text}")`);
    }

    console.log("getAncestors(element) - Get all ancestor elements");
    console.log("getDescendants(element) - Get all descendant elements");
    console.log("getElementDepth(element) - Get element depth from root");
    console.log("findByTextContent(text) - Find element containing text");
}

// ==========================================
// 6. PERFORMANCE OPTIMIZATION
// ==========================================

console.log("\n=== PERFORMANCE OPTIMIZATION ===");

// 6.1 Efficient traversal patterns
function demonstrateEfficientTraversal() {
    console.log("=== EFFICIENT TRAVERSAL PATTERNS ===");

    console.log("=== CACHE SELECTORS ===");
    console.log("❌ Repeated: document.querySelector('.item') multiple times");
    console.log("✅ Cached: const items = document.querySelectorAll('.item')");

    console.log("\n=== USE SPECIFIC SELECTORS ===");
    console.log("❌ Slow: document.querySelectorAll('*')");
    console.log("✅ Fast: document.querySelectorAll('.specific-class')");
    console.log("🚀 Fastest: document.getElementById('unique-id')");

    console.log("\n=== LIMIT SEARCH SCOPE ===");
    console.log("❌ document.querySelectorAll('.item') - Searches entire document");
    console.log("✅ container.querySelectorAll('.item') - Searches within container");

    console.log("\n=== USE MODERN METHODS ===");
    console.log("✅ element.closest() - More efficient than walking up manually");
    console.log("✅ element.querySelector() - More efficient than getElementsBy*");
}

// 6.2 Avoiding common performance pitfalls
function demonstratePerformancePitfalls() {
    console.log("\n=== PERFORMANCE PITFALLS TO AVOID ===");

    console.log("=== PITFALL 1: Reflows during traversal ===");
    console.log("❌ for (let el of elements) { el.style.display = 'none'; } // Multiple reflows");
    console.log("✅ elements.forEach(el => el.style.display = 'none'); // Single reflow");

    console.log("\n=== PITFALL 2: Unnecessary DOM queries ===");
    console.log("❌ for (let i = 0; i < items.length; i++) {");
    console.log("     const item = document.querySelector('.item-' + i); // Repeated queries");
    console.log("   }");
    console.log("✅ const items = document.querySelectorAll('.item'); // Single query");

    console.log("\n=== PITFALL 3: Inefficient loops ===");
    console.log("❌ for (let i = 0; i < container.children.length; i++) { // Length checked each time");
    console.log("     const child = container.children[i];");
    console.log("   }");
    console.log("✅ for (let child of container.children) { // More efficient");
}

// ==========================================
// 7. REAL-WORLD EXAMPLES
// ==========================================

console.log("\n=== REAL-WORLD TRAVERSAL EXAMPLES ===");

// 7.1 Event delegation helper
function demonstrateEventDelegation() {
    console.log("=== EVENT DELEGATION HELPER ===");

    function findClosestParentWithClass(element, className) {
        return element.closest(`.${className}`);
    }

    function getEventTarget(event, selector) {
        return event.target.closest(selector);
    }

    console.log("findClosestParentWithClass(element, 'container') - Find container");
    console.log("getEventTarget(event, '.button') - Find button that was clicked");
}

// 7.2 Form validation traversal
function demonstrateFormValidation() {
    console.log("\n=== FORM VALIDATION TRAVERSAL ===");

    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        const errors = [];

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                errors.push(`${input.name || input.id} is required`);
            }
        });

