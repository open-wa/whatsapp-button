import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WhatsappButton } from '../src/WhatsappButton.js';
import '../src/whatsapp-button.js';

describe('WhatsappButton', () => {
  it('has a default message ""', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button
        phone="7712345678"
        dialcode="44"
        label="Let's Talk"
      ></whatsapp-button>`
    );
    expect(el.text).to.equal('');
  });

  it('has a default label "Let\'s chat"', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button phone="7712345678" dialcode="44"></whatsapp-button>`
    );
    expect(el.label).to.equal(`Let's chat`);
  });

  it('can override the label', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></whatsapp-button>`
    );
    expect(el.label).to.equal("Let's Talk");
  });

  it('correctly resolves the whatsapp link with default message', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></whatsapp-button>`
    );
    expect(el.link).to.equal(
      'https://api.whatsapp.com/send?phone=447712345678&text=hey%20there%20lets%20chat!'
    );
    expect(el.appLink).to.equal(
      'whatsapp://send/?phone=447712345678&text=hey%20there%20lets%20chat!'
    );
  });

  it('correctly resolves the whatsapp link with custom message', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button
        phone="7712345678"
        dialcode="44"
        text="yo"
        label="Let's Talk"
      ></whatsapp-button>`
    );
    expect(el.link).to.equal(
      'https://api.whatsapp.com/send?phone=447712345678&text=yo'
    );
    expect(el.appLink).to.equal('whatsapp://send/?phone=447712345678&text=yo');
  });

  it('correctly resolves the whatsapp link for a group invite', async () => {
    const el = await fixture<WhatsappButton>(
      html`<whatsapp-button
        phone="7712345678"
        invitecode="INVITECODE"
        dialcode="44"
        text="hey there lets chat!"
        label="Let's Talk"
      ></whatsapp-button>`
    );
    expect(el.appLink).to.equal('whatsapp://chat/?code=INVITECODE');
  });

  // it('passes the a11y audit', async () => {
  //   const el = await fixture<WhatsappButton>(html`<whatsapp-button phone="7712345678" dialcode="44" text="hey there lets chat!" label="Let's Talk" ></whatsapp-button>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
