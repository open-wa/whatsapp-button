import { html, fixture, expect } from '@open-wc/testing';

import '../whatsapp-button.js';

describe('WhatsappButton', () => {
  it('has a default title "Lets chat"', async () => {
    const el = await fixture(html`
      <whatsapp-button></whatsapp-button>
    `);
    expect(el.label).to.equal(`Let's chat`);
  });

  it('Button link is constructed properly', async () => {
    const el = await fixture(html`
    <whatsapp-button phone="7712345678" dialcode="44" text="hey there lets chat!" label="Let's Talk">
    </whatsapp-button>
    `);
    expect(el.link).to.equal("https://api.whatsapp.com/send?phone=447712345678&text=hey%20there%20lets%20chat!");
  });

  it('can change the label via attribute', async () => {
    const el = await fixture(html`
      <whatsapp-button label="attribute label"></whatsapp-button>
    `);

    expect(el.label).to.equal('attribute label');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <whatsapp-button></whatsapp-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
