[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@open-wa/whatsapp-button) [![npm version](https://badge.fury.io/js/whatsapp-button.svg)](https://badge.fury.io/js/@open-wa/whatsapp-button) [![Maintainability](https://api.codeclimate.com/v1/badges/945fe901103848ca5de1/maintainability)](https://codeclimate.com/github/open-wa/whatsapp-button/maintainability)

[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

# \<whatsapp-button>

Easily start WhatsApp conversations! Based on [@material/mwc-button](https://github.com/material-components/material-components-web-components#readme).


```html
<whatsapp-button phone="123456" dialcode="44" text="hello!" label="Start Chat"></whatsapp-button>
```

[Live Demo ↗](https://jsfiddle.net/8cgwvmbd/2/)

[<img src="https://raw.githubusercontent.com/smashah/whatsapp-button/master/button-demo.png" alt="Screenshot of whatsapp-button" width="800">](https://jsfiddle.net/8cgwvmbd/2/)

## Installation

```bash
npm i @open-wa/whatsapp-button
```

then import

```html
<script type="module">
  import '@open-wa/whatsapp-button/whatsapp-button.js';
</script>
```

Or grab from [unpkg.com CDN](https://unpkg.com/@open-wa/whatsapp-button?module):

```html
<script src="https://unpkg.com/@open-wa/whatsapp-button?module" type="module"></script>
```

## Usage

<!--
```
<custom-element-demo>
  <template>
<script src="https://unpkg.com/whatsapp-button?module" type="module"></script>
<script type="module">
  import './whatsapp-button.js';
</script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<whatsapp-button phone="7712345678" dialcode="44" text="hey there lets chat!" label="Start Chat"></whatsapp-button>
```

You can check out an example of it working here: [JsFiddle](https://jsfiddle.net/8cgwvmbd/1/)

## How do I bypass WhatsApp's fugly redirect site?

I'm glad you asked! You can simply add the `bypass` attribute. This will result in opening the WhatsApp chat WITHOUT being redirected!

```html
<whatsapp-button phone="7712345678" dialcode="44" text="hey there lets chat!" label="Start Chat" bypass></whatsapp-button>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```

## Testing with Karma

To run the suite of karma tests, run

```bash
npm run test
```

or to run them in compatibility mode for legacy browsers

```bash
npm run test:compatibility
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

or

```bash
npm run test:compatibility
```

## Testing with Karma via BrowserStack

To run the suite of karma tests in BrowserStack, run

```bash
npm run test:bs
```

## Managing Test Snapshots

You can manage the test snapshots using

```bash
npm run test:update-snapshots
```
or
```bash
npm run test:prune-snapshots
```

## Demoing with 

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Local Demo with `es-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

```bash
npm start:compatibility
```

To run a local development server in compatibility mode for older browsers that serves the basic demo located in `demo/index.html`

[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/smashah