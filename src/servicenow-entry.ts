// src/servicenow-entry.ts

// This file serves as the specific entry point for the ServiceNow app build.
// Its purpose is to define and then mount the custom element into the DOM.

import './aisera-universal-widget.ts';

// Add this interface declaration to inform TypeScript about the global variable.
declare global {
  interface Window {
    AiseraServiceNowWidget: {
      renderWidget: (targetElement: HTMLElement) => void;
    };
  }
}

// The `renderWidget` function is what you'll call from your ServiceNow UI Script or component.
// It finds a target element (e.g., a div in a UI Builder page) and appends the widget to it.
function renderWidget(targetElement: HTMLElement) {
  if (targetElement) {
    console.log('Mount point found. Inserting <aisera-universal-widget>.');
    // Create the custom element instance
    const widgetElement = document.createElement('aisera-universal-widget');
    // Set a title, which is a property on your widget
    widgetElement.setAttribute('title', 'Customer Support AI Assistant');
    // Append the widget to the target element
    targetElement.appendChild(widgetElement);
    console.log(`Aisera widget mounted to element with id: ${targetElement.id}`);
  } else {
    console.error('Target element for mounting the widget not found.');
  }
}

// Attach the render function to the global scope to be accessible from ServiceNow.
// This is necessary because ServiceNow loads UI Scripts as a string of code,
// which needs to expose a global function for other scripts to call.
window.AiseraServiceNowWidget = {
  renderWidget: renderWidget
};

console.log('Aisera ServiceNow widget entry point loaded. Ready to render.');
