// src/zendesk-entry.ts

// This file serves as the specific entry point for the Zendesk app build.
// Its purpose is to define and then mount the custom element into the DOM.

import './aisera-universal-widget.ts';

// Add this interface declaration to inform TypeScript about the ZAFClient global variable.
declare global {
  interface Window {
    ZAFClient: any;
  }
}

// It's a best practice to initialize the ZAF client here, as this is the entry point
// for your Zendesk app. The ZAF SDK is loaded via a script tag in index.html.
const client = window.ZAFClient.init();

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

    // After the widget is rendered, resize the app's iframe to fit its content.
    // This is the key to making the widget fill the available space.
    // We use a slight delay to ensure the DOM has fully rendered the widget.
    setTimeout(() => {
      try {
        const height = document.body.scrollHeight;
        if (client) {
          client.invoke('resize', { height: `${height}px` });
          console.log(`Zendesk app resized to ${height}px.`);
        }
      } catch (error) {
        console.error('Failed to resize Zendesk app:', error);
      }
    }, 100);

  } else {
    console.error('Mount point #aisera-app-mount not found in the DOM.');
  }
});