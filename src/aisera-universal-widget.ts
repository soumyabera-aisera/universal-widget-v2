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
      <div class="widget-header">${this.title}</div>

      <div class="widget-section">
        <div class="section-title">Summary</div>
        <div class="section-content">
          This is a summary of the current interaction or context. It provides a quick overview of the key points.
        </div>
      </div>

      <div class="widget-section">
        <div class="section-title">Aisera Answer</div>
        <div class="section-content">
          Based on the available data, Aisera suggests the following answer: "The customer's query pertains to account activation issues, which can typically be resolved by verifying their registered email and recent login attempts."
        </div>
      </div>

      <div class="widget-section next-best-actions">
        <div class="section-title">Next Best Actions</div>
        <div class="section-content">
          <ul>
            <li>Verify customer's email address.</li>
            <li>Check recent login activity for anomalies.</li>
            <li>Provide link to password reset page.</li>
            <li>Offer to initiate a live chat with a specialist.</li>
          </ul>
        </div>
      </div>

      <div class="widget-section">
        <div class="section-title">Wrap Up</div>
        <div class="section-content">
          Ensure all relevant information is logged and the customer is satisfied with the resolution.
        </div>
      </div>
    `;
  }
}