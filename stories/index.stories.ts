import { html, TemplateResult } from 'lit';
import '../src/whatsapp-button.js';

export default {
  title: 'WhatsappButton',
  component: 'whatsapp-button',
  argTypes: {
    label: { control: 'text' },
    phone: { control: 'text' },
    text: { control: 'text' },
    invitecode: { control: 'text' },
    responsive: { control: 'boolean' },
    redirect: { control: 'boolean' },
    dialog: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  phone?: string;
  text?: string;
  invitecode?: string;
  responsive?: boolean;
  redirect?: boolean;
  dialog?: boolean;
  leading?: boolean;
}

const Template: Story<ArgTypes> = ({
  label,
  phone,
  text,
  invitecode,
  responsive,
  redirect,
  dialog,
  leading,
}: ArgTypes) => html`
  <whatsapp-button
    .label=${label}
    .phone=${phone}
    .text=${text}
    .invitecode=${invitecode}
    ?responsive=${responsive}
    ?redirect=${redirect}
    ?leading=${leading}
    ?dialog=${dialog}
  >
  </whatsapp-button>
`;

export const Regular = Template.bind({});

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Start Chat!',
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  text: 'Custom message',
};

export const GroupInvite = Template.bind({});
GroupInvite.args = {
  invitecode: 'EC6fNhC5mjZBKyW9jxxxxx',
};

export const ResponsiveButton = Template.bind({});
ResponsiveButton.args = {
  responsive: true,
};

export const LeadingButton = Template.bind({});
LeadingButton.args = {
  leading: true,
};
