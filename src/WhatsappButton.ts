import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { Button } from '@material/mwc-button';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-progress-bar/vaadin-progress-bar.js';

function fireGaClick() {
  // @ts-ignore
  if (window.ga)
    // @ts-ignore
    window.ga('gtm1.send', {
      hitType: 'event',
      eventCategory: 'Buttons',
      eventAction: 'click',
      eventLabel: 'wa-start-message',
    });
}

// @ts-ignore
export class WhatsappButton extends Button {
  @property({ type: String, reflect: true }) phone = '';

  @property({ type: String, reflect: true }) text = '';

  @property({ type: String, reflect: true }) link = '';

  @property({ type: String, reflect: true }) appLink = '';

  @property({ type: String, reflect: true }) dialcode = '';

  @property({ type: String, reflect: true }) invitecode = '';

  @property({ type: Boolean, reflect: true }) responsive = false;

  @property({ type: Boolean, reflect: true }) redirect = false;

  @property({ type: Boolean, reflect: true }) leading = false;

  @property({ type: Boolean, reflect: true }) dialog = false;

  @property({ type: Boolean, reflect: true }) _showButtonInDialog = false;

  // @ts-ignore
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1000;
      }

      .mdc-button__label {
        text-transform: uppercase;
      }

      #button {
        color: black;
        border-radius: 6px;
        box-shadow: 0 4px 9px #00000024;
        border: none;
        background: #02e777;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 180px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        transition: all ease-in-out 100ms;
      }

      #button:hover {
        cursor: pointer;
        box-shadow: 0 0px 3px rgba(0, 0, 0, 0.14);
      }

      .mdc-button__icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 18px;
        vertical-align: top;
        margin-left: 8px;
        margin-right: 0px;
      }

      .mdc-button__icon_leading {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 18px;
        vertical-align: top;
        margin-left: 0px;
        margin-right: 8px;
      }

      mwc-ripple {
        display: none;
      }

      @media (max-width: 600px) {
        :host([responsive]) {
          position: fixed;
          bottom: 0 !important;
          right: 0 !important;
          left: 0 !important;
          padding: 15px 0 10px;
          background: white;
          box-shadow: 0 -10px 20px 0 rgb(238, 238, 238);
          width: 100vw;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        :host([responsive]) #button {
          width: 80vw;
          border-radius: 20px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.label = `Let's chat`;
    this.outlined = true;
    this.trailingIcon = true;
    this.onclick = () => {
      fireGaClick();
      if (this.dialog) this.loadingDialog();
      if (this.redirect) {
        window.open(this.link);
      } else window.open(this.appLink);
    };
    // @ts-ignore
    this.click = this.onclick;
    // @ts-ignore
    this.tap = this.onclick;
  }

  loadingDialog() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `<vaadin-dialog >
    </vaadin-dialog>`;
      const dialog: any = this.shadowRoot.querySelector('vaadin-dialog') as any;
      dialog.renderer = (root: any) => {
        // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
        if (root.firstElementChild) {
          return;
        }
        // eslint-disable-next-line no-param-reassign
        root.innerHTML = `
      <h1>Opening WhatsApp</h1>
      <div>Once the chat opens, just hit send!</div>
      <vaadin-progress-bar indeterminate value="0" style="margin-top:16px;"></vaadin-progress-bar>
      <p style="font-size:9px;display:${
        this._showButtonInDialog ? '' : 'none'
      }">If the chat doesn't open automatically, press the button below.</p>
      <a href="${this.link}"><vaadin-button style="display:${
          this._showButtonInDialog ? '' : 'none'
        }">Try another way</vaadin-button></a>
     `;
      };
      if (dialog) {
        dialog.opened = true;
      }
      this._showButtonInDialog = true;
      setTimeout(() => {
        dialog.opened = false;
      }, 5000);
    }
  }

  firstUpdated() {
    this.label = this.label || this.invitecode ? 'Join Group!' : `Let's chat`;
    this.phone = this.phone || ``;
    this.text = this.text || `Hi!`;
    const pre = this.invitecode
      ? 'https://chat.whatsapp.com/'
      : 'https://api.whatsapp.com/send?';
    const appPre = this.invitecode ? 'whatsapp://chat/?' : `whatsapp://send/?`;
    this.link = `${pre}${
      this.invitecode
        ? `${this.invitecode}`
        : `phone=${this.dialcode}${this.phone}&text=${encodeURIComponent(
            this.text
          )}`
    }`;
    this.appLink = `${appPre}${
      this.invitecode
        ? `code=${this.invitecode}`
        : `phone=${this.dialcode}${this.phone}&text=${encodeURIComponent(
            this.text
          )}`
    }`;
    // @ts-ignore
    this.shadowRoot
      .getElementById('button')
      .getElementsByClassName(
        `${this.leading ? 'leading' : 'trailing'}-icon`
      )[0]
      .getElementsByTagName('slot')[0].innerHTML = `
    <mwc-icon slot="trailingIcon" class="${
      this.leading ? 'mdc-button__icon_leading' : 'mdc-button__icon'
    }">
    <svg aria-hidden="true" style="max-height: -webkit-fill-available;" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
    </mwc-icon>
    `;
  }
}
