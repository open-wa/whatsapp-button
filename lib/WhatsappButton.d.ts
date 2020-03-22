import { Button } from '@material/mwc-button';
declare class WhatsappButton extends Button {
    phone: string;
    text: string;
    link: string;
    dialcode: string;
    static get styles(): import("lit-element").CSSResult[];
    constructor();
    firstUpdated(): void;
}
export { WhatsappButton };
//# sourceMappingURL=WhatsappButton.d.ts.map