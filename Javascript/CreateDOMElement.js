const htmlTag = 'div' // div, span, h1, h2,...

const element = document.createElement(htmlTag);

// Fill node HTML content
element.innerHTML = '<b>Tag content</b>';

// Append node to document
document.body.appendChild(element);