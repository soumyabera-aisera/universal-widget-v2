// src/aisera-universal-widget.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('aisera-universal-widget')
export class AiseraUniversalWidget extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: 20px;
      background-color: #ffffff;
    }
   .widget-header {
      background-color: #f0f0f0;
      padding: 12px 16px;
      font-weight: bold;
      border-bottom: 1px solid #e0e0e0;
      color: #333;
    }
   .widget-section {
      padding: 12px 16px;
      border-bottom: 1px solid #f5f5f5;
    }
   .widget-section:last-child {
      border-bottom: none;
    }
   .section-title {
      font-weight: bold;
      margin-bottom: 8px;
      color: #555;
    }
   .section-content {
      color: #666;
      line-height: 1.5;
    }
   .next-best-actions ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
   .next-best-actions li {
      margin-bottom: 5px;
      color: #007bff;
    }
   .next-best-actions li:last-child {
      margin-bottom: 0;
    }
  `;

  @property({ type: String })
  title = 'Aisera Universal Widget';

  render() {
    return html`
      
    `;
  }
}