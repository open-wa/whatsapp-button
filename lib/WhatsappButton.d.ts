import { Button } from '@material/mwc-button';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-progress-bar';
declare class WhatsappButton extends Button {
    phone: string;
    text: string;
    link: string;
    appLink: string;
    dialcode: string;
    responsive: boolean;
    bypass: boolean;
    _showButtonInDialog: boolean;
    static get styles(): import("lit-element").CSSResult[];
    constructor();
    injectIframe(): void;
    firstUpdated(): void;
}
export { WhatsappButton };
//# sourceMappingURL=WhatsappButton.d.ts.map