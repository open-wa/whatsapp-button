[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/whatsapp-button) [![npm version](https://badge.fury.io/js/whatsapp-button.svg)](https://badge.fury.io/js/whatsapp-button)

# \<whatsapp-button>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i whatsapp-button
```
then import

```html
<script type="module">
  import 'whatsapp-button/whatsapp-button.js';
</script>
```

Or grab from [unpkg.com CDN](https://unpkg.com/whatsapp-button?module):

```html
<script src="https://unpkg.com/whatsapp-button?module" type="module"></script>
```

## Usage
<!--
```
<custom-element-demo>
  <template>
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

## Demoing with Storybook
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
