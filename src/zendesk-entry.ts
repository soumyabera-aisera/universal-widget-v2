// src/zendesk-entry.ts

// This file serves as the specific entry point for the Zendesk app build.
// Its purpose is to define and then mount the custom element into the DOM.

import './aisera-universal-widget.ts';

/**
 * Custom element registration and mounting logic.
 *
 * This function waits for the DOM to be ready before attempting to find
 * the mount point and insert the custom element. This is a robust approach
 * for environments like Zendesk's iframe.
 */
document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('aisera-app-mount');
  if (mountPoint) {
    console.log('Mount point found. Inserting <aisera-universal-widget>.');
    // Create the custom element instance
    const widgetElement = document.createElement('aisera-universal-widget');
    // Set a title, which is a property on your widget
    widgetElement.setAttribute('title', 'Customer Support AI Assistant');
    // Append the widget to the mount point
    mountPoint.appendChild(widgetElement);
  } else {
    console.error('Mount point #aisera-app-mount not found in the DOM.');
  }
});